import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {Waypoint} from 'react-waypoint'

import './Animated.scss'
import {DURATION} from '../../utils/constants'

Animated.proptypes = {
  children: PropTypes.node,
  el: PropTypes.string,
  classes: PropTypes.string,
  animate: PropTypes.bool,
  effect: PropTypes.string.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
}

export default function Animated({
  children,
  el: Element = 'div',
  classes,
  animate,
  effect,
  duration = DURATION.LONGER,
  delay = 0,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
  ...props
}) {
  const [reached, setReached] = useState(false)

  const onWaypointEnter = () => !reached && setReached({reached: true})

  return (
    <Waypoint bottomOffset="5%" onEnter={onWaypointEnter}>
      <Element
        {...props}
        className={cn(classes, 'Animated')}
        style={
          reached
            ? {
                animation: `${effect} ${duration}ms ${easing} ${delay}ms both`,
              }
            : undefined
        }
      >
        {children}
      </Element>
    </Waypoint>
  )
}
