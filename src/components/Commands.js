import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { noop } from 'lodash'
import { pure } from 'recompose'
import { withStyles, Typography } from 'material-ui'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  },
  item: {
    cursor: 'pointer',
    color: '#6f71d3',
    display: 'inline-block',
    border: 'solid 1px #6f71d3',
    borderRadius: '12px',
    height: '40px',
    margin: '0 6px',
    letterSpacing: '0.3px',
    boxSizing: 'border-box',
    padding: '9px 16px 10px 14px',
    fontSize: '1rem',
    '&:hover': {
      background: '#fff'
    }
  }
}

const commands = [
  { command: 'hi', message: 'Hei jeg er kunde' },
  { command: 'get-update', message: 'Gi meg en oppdatering' },
  { command: 'sample-1', message: 'Gjør noe annet' },
  { command: 'sample-2', message: 'Gjør noe annet 1' },
]

const renderScrollbarsView = props => <div
  {...props}
  style={Object.assign({ padding: '15px 8px' }, props.style)}
/>

const Commands = ({ classes, onCommand = noop }) => (
  <div className={classes.root}>
    <Scrollbars autoHide renderView={renderScrollbarsView}>
      {commands.map(command => (
        <Typography
          key={command.command}
          onClick={event => onCommand(event, command)}
          className={classes.item}
        >
          {command.message}
        </Typography>
      ))}
    </Scrollbars>
  </div>
)

export default withStyles(styles)(pure(Commands))
