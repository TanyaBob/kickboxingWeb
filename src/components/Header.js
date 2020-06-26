import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'
import Caption from './Caption'
import Animated from './Animated'
import './Header.scss'

import {MOBILE, ANIMATION} from '../../utils/constants'

export default function Header() {
  const backgroundRef = useRef(null)

  !MOBILE && useEffect(() => {
    new Rellax(backgroundRef.current, {
      round: true,
      vertical: true,
      speed: -1,
    })

    return () => {}
  })

  return (
    <header className="Header">
      {MOBILE ? (
        <Animated classes="Header-Background" effect={ANIMATION.BOTTOM} />
      ) : (
        <div className="Header-Background" ref={backgroundRef} />
      )}
      <div className="Header-Container Container">
        <Caption />
      </div>
    </header>
  )
}
