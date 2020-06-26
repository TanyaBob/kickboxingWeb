import React from 'react'
import {useMediaQuery} from 'react-responsive'
import SVG from 'react-inlinesvg'
import {Row, Col} from './grid'
import Animated from './Animated'
import starIcon from '../../assets/images/icon-star.svg'
import {ANIMATION, BREAKPOINT} from '../../utils/constants'
import MotivationList from './MotivationList'
import './Motivation.scss'

export default function Motivation() {
  const mobile = useMediaQuery({
    query: BREAKPOINT.MOBILE
  })
  const tablet = useMediaQuery({
    query: BREAKPOINT.TABLET
  })
  const data_section_1 = [
    {
      id: 0,
      title: 'Train = results!',
      text: ['Kickboxing is a total body head to toe workout. Get Results and Look Great.']
    },
    {
      id: 1,
      title: 'Powerful performance',
      text: ['Kickboxing develops strength in the mind, body and spirit. Have FUN building a Better YOU!!']
    },
    {
      id: 2,
      title: 'A fitness program for all',
      text: ['Whether a beginner or expert you will progress to a heart pounding & breath swallowing cardiovascular workout! Learn and Burn!']
    }
  ]
  const data_section_2 = [
    {
      id: 0,
      title: 'Where kickboxing meets self defence',
      text: [
        'Kickboxing is an explosive, power endurance sport. Executing kicks and punches, round after round, hitting the heavy bag or boxing mitts challenges your power & endurance. Kickboxing is one of the most physically demanding sports of all.',
        'The skill enhancement portion of your workout will consist of shadow boxing, heavy bag work, focus mitts with a partner and defensive drills.',
        'Learn how to slip and block kicks & punches to improve reaction time and use counter techniques. This is where our championship program prepares the "self worth defending"; If ever needed you can apply these skills and successfully fend off attackers.'
      ]
    }
  ]

  return (
    <section className="Motivation">
      <div className="Motivation-Container Container">
        <Row center="xs">
          <Animated
            classes="Motivation-Logo"
            effect={mobile ? ANIMATION.OUT : ANIMATION.IN}
          >
            <img
              src={require('../../assets/images/vintage-boxing-gloves.png').default}
              alt="vintage boxing gloves"
            />
          </Animated>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Animated effect={ANIMATION.RIGHT}>
              <h2 className="Block-Title Motivation-Title Top">Compete against the</h2>
            </Animated>
            <Animated effect={ANIMATION.LEFT}>
              <h2 className="Block-Title Motivation-Title Bottom">best version of yourself</h2>
            </Animated>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={10} classes="Motivation-Icon-Stars">
            <SVG src={starIcon} description="star" className="Motivation-Icon-Star" />
            <SVG src={starIcon} description="star" className="Motivation-Icon-Star Star-Center" />
            <SVG src={starIcon} description="star" className="Motivation-Icon-Star" />
          </Col>
        </Row>
        <Row classes="Motivation-Content">
          <Col
            xsOffset={1}
            xs={10}
            sm={10}
            md={4}
            classes="Motivation-Img-Left"
          >
            <div className="Motivation-Img Img-Left">
              <img
                className="Motivation-Img Brushes-Img"
                src={require('../../assets/images/circle-brush-stroke.png').default}
                alt="circle"
              />
              <img
                className="Motivation-Img Main-Img"
                src={require('../../assets/images/kick-man.jpg').default}
                alt="kickboxing man hits the bag"
              />
            </div>
          </Col>
          <Col
            xsOffset={1}
            xs={10}
            sm={10}
            md={5}
            lg={5}
            classes="Motivation-Block"
          >
            <MotivationList data={data_section_1} />
          </Col>
        </Row>
        <Row center="xs">
          <Col mdOffset={1} xs={10} md={8}>
            <div className="Motivation-Divider" />
          </Col>
        </Row>
        <Row classes="Motivation-Content">
          {!tablet && <Col
            xsOffset={1}
            xs={10}
            sm={10}
            md={5}
            lg={5}
            classes="Motivation-Block"
          >
            <MotivationList data={data_section_2} />
          </Col>}
          <Col
            xsOffset={1}
            xs={10}
            sm={10}
            md={4}
            lg={4}
            classes="Motivation-Img-Right"
          >
            <div className="Motivation-Img Img-Right">
              <img
                className="Motivation-Img Brushes-Img"
                src={require('../../assets/images/circle-brush-stroke.png').default}
                alt="circle"
              />
              <img
                className="Motivation-Img Main-Img"
                src={require('../../assets/images/kick-woman.jpg').default}
                alt="kickboxing woman hits the bag"
              />
            </div>
          </Col>
          {tablet && <Col
            xsOffset={1}
            xs={10}
            sm={10}
            md={5}
            lg={5}
            classes="Motivation-Block"
          >
            <MotivationList data={data_section_2} />
          </Col>}
        </Row>
      </div>
    </section>
  )
}
