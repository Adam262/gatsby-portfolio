import { breakPoints } from 'Styles/main'

export const parsePx = (value) => {
  return parseInt(value.split('px')[0], 10);
}

export const isMobile = () => {
  if (typeof window === 'undefined') {
    return;
  }
  
  return window.innerWidth < parsePx(breakPoints.tablet);
}
