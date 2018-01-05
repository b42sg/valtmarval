import React from 'react'
import { withStyles } from 'material-ui'
import { BeatLoader } from 'react-spinners'

import MessagesDate from './MessagesDate'
import MessageBubble from './MessageBubble'

const styles = {
  root: {
    paddingTop: 11,
    paddingRight: 10
  },
  spinner: {
    width: '36px',
    marginTop: '2px',
    marginLeft: '-6px',
    marginRight: '-6px',
    marginBottom: '-2px',
  }
}

const now = new Date()

const Messages = ({ classes }) => (
  <div className={classes.root}>
    <MessageBubble primary>
      Alle dine mål er i rute basert på dine behov.
      Len deg tillbake og ta et glass Amarone
    </MessageBubble>
    <MessageBubble secondary>
      Gi meg en markedsoppdatering
    </MessageBubble>
    {/*
    <MessageBubble primary>
      Hovedindeksen falt 1.3 prosent i november,
      og vi fikk den første måneden med kursfall siden juni
    </MessageBubble>
    <MessagesDate date={now} />
    <MessageBubble secondary>
      Gi meg en markedsoppdatering
    </MessageBubble>
    */}
    <MessageBubble primary autoWidth>
      <div className={classes.spinner}>
        <BeatLoader size={8} color={'rgba(0, 0, 0, 0.54)'} />
      </div>
    </MessageBubble>
  </div>
)

export default withStyles(styles)(Messages)
