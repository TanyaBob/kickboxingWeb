import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './grid.scss'

const sizes = ['xs', 'sm', 'md', 'lg']
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Row.propTypes = {
  children: PropTypes.any.isRequired,
  el: PropTypes.string,
  classes: PropTypes.string,
  center: PropTypes.oneOf(sizes),
  end: PropTypes.oneOf(sizes),
}

export function Row({children, el: Element = 'div', classes, center, end}) {
  return (
    <Element
      className={cn(classes, 'Row', {
        [`Row_center_${center}`]: center,
        [`Row_end_${end}`]: end,
      })}
    >
      {children}
    </Element>
  )
}

Col.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.string,
  classes: PropTypes.string,
  auto: PropTypes.bool,
  xsOffset: PropTypes.oneOf(columns),
  xs: PropTypes.oneOf(columns),
  smOffset: PropTypes.oneOf(columns),
  sm: PropTypes.oneOf(columns),
  mdOffset: PropTypes.oneOf(columns),
  md: PropTypes.oneOf(columns),
  lgOffset: PropTypes.oneOf(columns),
  lg: PropTypes.oneOf(columns),
}

export function Col({
  children,
  component: Element = 'div',
  classes,
  auto,
  xsOffset,
  xs,
  smOffset,
  sm,
  mdOffset,
  md,
  lgOffset,
  lg,
}) {
  return (
    <Element
      className={cn(classes, 'Col', {
        Col_auto: auto,
        [`Col_xs_offset_${xsOffset}`]: xsOffset,
        [`Col_xs_${xs}`]: xs,
        [`Col_sm_offset_${smOffset}`]: smOffset,
        [`Col_sm_${sm}`]: sm,
        [`Col_md_offset_${mdOffset}`]: mdOffset,
        [`Col_md_${md}`]: md,
        [`Col_lg_offset_${lgOffset}`]: lgOffset,
        [`Col_lg_${lg}`]: lg,
      })}
    >
      {children}
    </Element>
  )
}
