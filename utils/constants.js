export const MOBILE = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
].some((device) => navigator.userAgent.match(device))

export const ANIMATION = {
  TOP: 'fadeInTop',
  RIGHT: 'fadeInRight',
  BOTTOM: 'fadeInBottom',
  LEFT: 'fadeInLeft',
  IN: 'fadeInZoomIn',
  OUT: 'fadeInZoomOut',
}

export const BREAKPOINT = {
  MOBILE: '(max-width: 599px)',
  EXTRA: '(max-width: 767px)',
  TABLET: '(max-width: 959px)',
  DESKTOP: '(min-width: 960px)',
}

export const DURATION = {
  SHORTEST: 150,
  SHORTER: 200,
  STANDARD: 300,
  MEDIUM: 500,
  LONGER: 1000,
  LONGEST: 2000,
  AUTOPLAY: 4000,
}

