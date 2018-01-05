import React from 'react'
import { connect } from 'react-redux'
import { get, map } from 'lodash'
import { compose, withHandlers } from 'recompose'
import { AutoSizer } from 'react-virtualized'

import Main from '../components/Main'
import { users, commands } from '../ducks'

const MAX_W = 800
const MAX_H = 800

const handlerCreators = {
  onCommand: props => (event, command) => props.executeCommand(command)
}

const mapStateToProps = (state, props) => {
  const loading = !!get(state, 'app.status.loading')
  const messageslist = get(state, 'messages')


  const messages = map(messageslist, item => ({
    id: item.id,
    text: item.text,
    date: item.date,
    primary: item.by === users.BOT,
    secondary: item.by === users.ME
  }))

  const width = props.width > MAX_W ? 414 : props.width
  const height = props.height > MAX_H ? 736 : props.height
  const compact = props.height && props.height < 500

  return { messages, loading, compact, height, width }
}

const mapDispatchToProps = {
  executeCommand: commands.execute
}

const App = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlerCreators)
)(Main)

const AppWithSize = props => (
  <AutoSizer>
    {size => (
      <div style={{
        width: '100%',
        height: '100%',
        marginLeft: size.width > MAX_W ? '50%' : 0,
        left: size.width > MAX_W ? -(size.width / 2) : 0,
        position: 'absolute'
      }}>
        <App {...size} {...props} />
      </div>
    )}
  </AutoSizer>
)

export default AppWithSize
