import React from 'react'
import Animated from './Animated'
import {ANIMATION} from '../../utils/constants'
import './MotivationList.scss'

export default function MotivationList (props) {
  return (
    <ul className="Motivation-List">
      {
        props.data.map(({title, text, id}) => {
          return (
            <Animated
              key={id}
              el="li"
              classes="Motivation-List-Item"
              effect={ANIMATION.BOTTOM}
              delay={0}
            >
              <p className="Section-Title">{title}</p>
              {
                text.map((p, i) => {
                  return (
                    <p key={i} className="Motivation-List-Text">{p}</p>
                  )
                })
              }
            </Animated>
          )
        })
      }
    </ul>
  )
}
