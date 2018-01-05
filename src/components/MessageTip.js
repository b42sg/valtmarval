import React from 'react'

// TODO https://codepen.io/Varo/pen/gbZzgr
const MessageTip = ({ className, style }) => (
  <svg className={className} style={style} viewBox='0 0 20 20'>
    <defs>
      <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
        <feColorMatrix result="matrixOut" in="offOut" type="matrix"
          values="
                0 0 0 0   0
                0 0 0 0   0
                0 0 0 0   0
                0 0 0 0.3 0" />
              <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="1.5" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <polygon points='10,15 20,5 20,15' fill='currentColor' filter="url(#f1)" />
  </svg>
)

export default MessageTip
