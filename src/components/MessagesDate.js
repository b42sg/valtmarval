import React from 'react'
import { format } from 'date-fns'
import locale from 'date-fns/locale/nl'

import { withStyles, Typography } from 'material-ui'

const styles = {
  root: {
    padding: '10px 15px'
  },
  typography: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 300,
    color: 'rgba(0, 0, 0, 0.54)'
  }
}

const MessagesDate = ({ classes, date }) => (
  <div className={classes.root}>
    <Typography className={classes.typography}>
      {format(date, 'ddd D, MMM', { locale })}
    </Typography>
  </div>
)

export default withStyles(styles)(MessagesDate)
