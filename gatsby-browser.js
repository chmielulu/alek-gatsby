// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      return import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }

    return null
  }