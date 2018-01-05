import React from 'react'
import { withStyles } from 'material-ui'
import SearchIcon from 'material-ui-icons/Search'

const styles = theme => ({
  wrapper: {
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)',
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    borderRadius: 2,
    background: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.common.white
    },
    '& $input': {
      transition: theme.transitions.create('width'),
      width: 200,
      '&:focus': {
        width: 250
      }
    },
  },
  search: {
    width: '58px',
    height: '100%',
    right: 0,
    top: 1,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    font: 'inherit',
    padding: '18px 72px 18px 24px',
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    }
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.1)',
    width: 32,
    height: 32
  }
})

const Search = ({ classes }) => (
  <div className={classes.wrapper}>
    <input placeholder='Søk' className={classes.input} />
    <div className={classes.search}>
      <SearchIcon className={classes.icon} />
    </div>
  </div>
)

export default withStyles(styles)(Search)
