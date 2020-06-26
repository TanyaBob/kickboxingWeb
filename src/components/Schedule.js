import React from 'react'
import {useMediaQuery} from 'react-responsive'
import SVG from 'react-inlinesvg'
import {Row, Col} from './grid'
import Animated from './Animated'
import starIcon from '../../assets/images/icon-star.svg'
import {ANIMATION, BREAKPOINT, DURATION} from '../../utils/constants'
import './Schedule.scss'

export default function Schedule() {
  const desktop = useMediaQuery({
    query: BREAKPOINT.DESKTOP,
  })

  const data = [
    {
      title: 'Women only',
      price: 46,
      text: 'I am woman, hear me roar! Learn thai boxing in this women\'s only class, and let out your inner fierce!'
    },
    {
      title: 'Group classes',
      price: 42,
      text: 'With a variety of classes for every skill level, there is something for everyone. Learn thai boxing in a non-intimidating group setting.'
    },
    {
      title: 'The boxing hour',
      price: 50,
      text: 'A boxing class perfect for beginners and experienced fighters alike. Jab, hook, duck and weave your way to a leaner, meaner you!'
    },
    {
      title: 'Kid\'s classes',
      price: 38,
      text: 'Whether for fitness, to burn off some energy or to boost your child\'s self confidence, children are welcome here from ages 5 upwards.'
    }
  ]

  return (
    <section className="Schedule">
      <Animated
        classes="Schedule-Background"
        effect={ANIMATION.OUT}
      />
      <div className="Container">
        <div className="Schedule-Container">
          <div className="Schedule-Overlay">
            <div className="Schedule-Header">
              <SVG src={starIcon} description="star" className="Schedule-Icon-Star" />
              <SVG src={starIcon} description="star" className="Schedule-Icon-Star Star-Main" />
              <h2 className="Block-Title Schedule-Title">Schedule</h2>
              <SVG src={starIcon} description="star" className="Schedule-Icon-Star Star-Main" />
              <SVG src={starIcon} description="star" className="Schedule-Icon-Star" />
            </div>
            <Row el="ul" classes="Schedule-List" center="xs">
              {data.map((item, index) => (
                <Col
                  key={index}
                  el="li"
                  classes="Schedule-Item"
                  xs={12}
                  sm={6}
                >
                  <Animated
                    classes="Schedule-Block"
                    effect={ANIMATION.BOTTOM}
                    delay={desktop ? index * DURATION.SHORTEST : 0}
                  >
                    <h3 className="Section-Title">{item.title} <span className="Schedule-Price">{`$${item.price}`}</span></h3>
                    <p className="Schedule-Text">{item.text}</p>
                  </Animated>
                  <Animated classes="Schedule-Item-Divider" effect={ANIMATION.LEFT} />
                </Col>
              ))}
            </Row>
            <button className="Button Schedule-Button" type="submit">
              Book a class today!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
