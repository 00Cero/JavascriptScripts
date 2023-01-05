const counter = (max) => {
  let _counter = 1

  const updater = (val) => {
    _counter += val
    if (_counter >= max) _counter = max
    if (_counter <= 1) _counter = 1
  }

  return {
    increment () {
      updater(+1)
    },
    decrement () {
      updater(-1)
    },
    giveValues () {
      return { _counter, max }
    }
  }
}

// eslint-disable-next-line no-unused-vars
const firstCounter = counter(3)
// eslint-disable-next-line no-unused-vars
const secondCounter = counter(4)

// eslint-disable-next-line no-unused-vars
function updateSection (ele, section, action) {
  const viewer = ele.closest('section').querySelector('p')

  const counter = section === 'section1' ? firstCounter : secondCounter
  if (action === 'plus') {
    counter.increment()
  }
  if (action === 'minus') {
    counter.decrement()
  }

  viewer.innerHTML = `${counter.giveValues()._counter}/${counter.giveValues().max}`
}
