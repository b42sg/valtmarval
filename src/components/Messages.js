import React, { Component } from 'react'
import { format } from 'date-fns'
import { withStyles } from 'material-ui'
import { BeatLoader } from 'react-spinners'
import { Scrollbars } from 'react-custom-scrollbars'
import { sortBy, assign } from 'lodash'

import MessagesDate from './MessagesDate'
import MessageBubble from './MessageBubble'

const styles = {
  root: {
    height: '100%'
  },
  spinner: {
    width: '36px',
    marginTop: '2px',
    marginLeft: '-6px',
    marginRight: '-6px',
    marginBottom: '-2px',
  }
}

class Messages extends Component {
  static defaultProps = {
    data: []
  }

  componentDidMount () {
    this.sb.scrollToBottom()
  }

  componentDidUpdate () {
    this.sb.scrollToBottom()
  }


  renderScrollbarsView (props) {
    const style = { paddingTop: 11, paddingRight: 10 }
    return <div {...props} style={assign(style, props.style)} />
  }


  renderItem (item, index, items) {
    const next = items[index + 1]
    const isLast = index === items.length - 1

    const currDM = format(item.date, 'DM')
    const nextDM = format(isLast ? new Date() : next.date, 'DM')
    const date = currDM !== nextDM
      ? <MessagesDate key={item.date} date={item.date} />
      : null

    const elem = (
      <MessageBubble key={item.id} primary={item.primary} secondary={item.secondary}>
        {item.text}
      </MessageBubble>
    )

    return date ? [elem, date] : elem
  }

  render () {
    const { classes, loading, data } = this.props
    const items = sortBy(data, 'date')

    return (
      <div className={classes.root}>
        <Scrollbars ref={el => { this.sb = el }} autoHide renderView={this.renderScrollbarsView}>
          {items.map((item, index) => this.renderItem(item, index, items))}
          {loading &&
            <MessageBubble primary autoWidth>
              <div className={classes.spinner}>
                <BeatLoader size={8} color={'rgba(0, 0, 0, 0.54)'} />
              </div>
            </MessageBubble>
          }
        </Scrollbars>
      </div>
    )
  }
}

export default withStyles(styles)(Messages)
