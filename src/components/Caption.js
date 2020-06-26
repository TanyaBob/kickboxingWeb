import React from 'react'
import Animated from './Animated'
import {Row, Col} from './grid'
import {ANIMATION} from '../../utils/constants'
import './Caption.scss'

export default function Caption() {
  return (
    <div className="Caption">
      <Row>
        <Col xs={12}>
          <Animated el="h2" classes="Caption-Pre-Title" effect={ANIMATION.OUT}>
            competitive edge
          </Animated>
          <Animated el="h1" classes="Caption-Title" effect={ANIMATION.OUT}>
            kickboxing
          </Animated>
          <Animated el="p" classes="Caption-Text" effect={ANIMATION.RIGHT}>
            It's you, your gloves, the bag and your inner champion
          </Animated>
        </Col>
      </Row>
    </div>
  )
}
