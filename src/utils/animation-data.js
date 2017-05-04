let self = {}

function set (obj, key, oldValue, targetValue, time = 2000, reset = true) {
  return new Promise((resolve, reject) => {
    let d = targetValue - oldValue
    let step = d / (time / 16)
    obj[key] = oldValue - 0

    ;(function handle () {
      self['frameId' + key] = requestAnimationFrame(handle)
      obj[key] = obj[key] - 0 + step
      if (Math.abs(obj[key] - targetValue) <= Math.abs(step)) {
        obj[key] = targetValue
        cancelAnimationFrame(self['frameId' + key])
        reset && setTimeout(() => {
          obj[key] = oldValue
          resolve()
        }, 100)
      }
    })()
  })
}

export default {set}
