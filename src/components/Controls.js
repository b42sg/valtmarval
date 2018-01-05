import React from 'react'
import ChatIcon from 'material-ui-icons/Chat'
import TuneIcon from 'material-ui-icons/Tune'
import EqualizerIcon from 'material-ui-icons/Equalizer'
import { withStyles, BottomNavigation, BottomNavigationButton } from 'material-ui'

const styles = {
  root: {
    boxSizing: 'border-box',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.1)'
  },
  first: {
    maxWidth: 'none',
    boxSizing: 'border-box',
    borderRight: 'solid 2px rgba(0, 0, 0, 0.1)'
  },
  midd: {
    maxWidth: 'none'
  },
  last: {
    maxWidth: 'none',
    boxSizing: 'border-box',
    borderLeft: 'solid 2px rgba(0, 0, 0, 0.1)'
  }
}

const Controls = ({ classes }) => (
  <BottomNavigation showLabels value={0} className={classes.root}>
    <BottomNavigationButton classes={{ root: classes.first }} label='Chat' icon={<ChatIcon />} />
    <BottomNavigationButton classes={{ root: classes.midd }} label='Oversikt' icon={<EqualizerIcon />} />
    <BottomNavigationButton classes={{ root: classes.last }} label='Innstillinger' icon={<TuneIcon />} />
  </BottomNavigation>
)

export default withStyles(styles)(Controls)
