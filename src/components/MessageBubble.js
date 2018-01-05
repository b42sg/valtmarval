import React from 'react'
import { withStyles, Typography } from 'material-ui'

import MessageTip from './MessageTip'

const TIP_SIZE = 8
const BORDER_RADIUS = '1.5rem'

const styles = ({
  root: {
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box'
  },
  bubble: {
    maxWidth: '20rem',
    position: 'relative',
  },
  messageSection: {
    position: 'relative',
    lineHeight: '1.25rem',
    fontSize: '1rem',
    borderRadius: BORDER_RADIUS,
    flex: '1 1 auto',
    padding: '10px 1rem',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)',
    color: '#333',
    borderBottomLeftRadius: 0
  },
  tipSection: {
    position: 'relative',
    flex: `0 0 ${TIP_SIZE}px`,
    zIndex: '2',
  },
  tip: {
    height: TIP_SIZE * 2,
    width: TIP_SIZE * 2,
    position: 'absolute',
    bottom: -Math.ceil(TIP_SIZE / 2),
    right: 0,
    color: '#fff',
  },
  text: {
    padding: '1em',
    textAlign: 'left',
    lineHeight: '1.5em',
  }
})

const MessageBubble = ({ classes, autoWidth, primary, secondary, children }) => {
  const bubbleStyle = {
    margin: secondary ? '0 0 0 auto' : undefined,
    width: autoWidth ? 'auto' : '73%',
    display: autoWidth ? 'inline-flex' : 'flex'
  }

  const tipStyle = {
    color: secondary ? 'rgb(218, 219, 220)' : '#fff',
    transform: secondary ? 'scaleX(-1) translateX(-50%)' : undefined
  }

  const messageStyle = {
    color: secondary ? '#646465' : '#3b4c68',
    backgroundColor: secondary ? '#dadbdc' : '#fff',
    borderBottomLeftRadius: secondary ? BORDER_RADIUS : 0,
    borderBottomRightRadius: secondary ? 0 : BORDER_RADIUS
  }

  const tip = (
    <div key='tip' className={classes.tipSection}>
      <MessageTip className={classes.tip} style={tipStyle} />
    </div>
  )

  const message = (
    <Typography component='div' key='message' className={classes.messageSection} style={messageStyle}>
      {children}
    </Typography>
  )

  return (
    <div className={classes.root}>
      <div className={classes.bubble} style={bubbleStyle}>
      {primary && [ tip, message ]}
      {secondary && [ message, tip ]}
      </div>
    </div>
  )
}

export default withStyles(styles)(MessageBubble)
