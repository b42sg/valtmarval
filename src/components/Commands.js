import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
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

const renderScrollbarsView = props => <div
  {...props}
  style={Object.assign({ padding: '15px 8px' }, props.style)}
/>

const Commands = ({ classes }) => (
  <div className={classes.root}>
    <Scrollbars autoHide renderView={renderScrollbarsView}>
      <Typography className={classes.item}>Gi meg en oppdatering</Typography>
      <Typography className={classes.item}>Gjør noe annet</Typography>
      <Typography className={classes.item}>Gjør noe annet 1</Typography>
    </Scrollbars>
  </div>
)

export default withStyles(styles)(Commands)
