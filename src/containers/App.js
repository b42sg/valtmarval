import { connect } from 'react-redux'
import { get, map } from 'lodash'
import { compose, withHandlers } from 'recompose'

import Main from '../components/Main'
import { users, commands } from '../ducks'

const handlerCreators = {
  onCommand: props => (event, command) => props.executeCommand(command)
}

const mapStateToProps = state => {
  const loading = !!get(state, 'app.status.loading')
  const messageslist = get(state, 'messages')

  const messages = map(messageslist, item => ({
    id: item.id,
    text: item.text,
    date: item.date,
    primary: item.by === users.BOT,
    secondary: item.by === users.ME
  }))

  return { messages, loading }
}

const mapDispatchToProps = {
  executeCommand: commands.execute
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlerCreators)
)(Main)
