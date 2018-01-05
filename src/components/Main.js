import React from 'react'
import { withStyles } from 'material-ui'

import 'typeface-roboto'

import Search from './Search'
import Messages from './Messages'
import Controls from './Controls'
import Commands from './Commands'

const styles = {
  root: {
    width: 414,
    height: 736,
    margin: 'auto',
    display: 'flex',
    border: 'solid 1px #aaa',
    position: 'relative',
    boxSizing: 'border-box',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    flex: '0 1 132px',
    background: 'linear-gradient(to right, #4A4EC3, #291C7C)'
  },
  messages: {
    flex: '1 1 auto',
    position: 'relative',
    overflow: 'hidden'
  },
  messagesHeightHelper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflowY: 'hidden'
  },
  search: {
    marginTop: '-13px'
  },
  main: {
    background: '#F3F4F6',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column'
  },
  commands: {
    height: 72,
    background: '#fbfbfc',
    boxSizing: 'border-box'
  },
  controls: {
    height: 53,
    boxSizing: 'border-box'
  }
}

const Main = ({ classes, messages, loading, onCommand }) => (
  <div className={classes.root}>
    <header className={classes.header} />
    <main className={classes.main}>
      <div className={classes.search}>
        <Search />
      </div>
      <div className={classes.messages}>
        <div className={classes.messagesHeightHelper}>
          <Messages data={messages} loading={loading} />
        </div>
      </div>
      <div className={classes.commands}>
        <Commands onCommand={onCommand} />
      </div>
      <div className={classes.controls}>
        <Controls />
      </div>
    </main>
  </div>
)

export default withStyles(styles)(Main)
