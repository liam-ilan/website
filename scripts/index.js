/* global data */

// a box class for every project
class Box {
  constructor (titleInput, textInput, imgInput, linkInput, timeInput) {
    // get inputs
    this.title = titleInput
    this.text = textInput
    this.img = imgInput
    this.link = linkInput
    this.time = timeInput

    // the wrapper
    const box = document.createElement('a')
    box.className = 'box'
    box.href = this.link

    // the image
    const img = document.createElement('img')
    img.src = this.img
    img.className = 'box-img'
    img.alt = this.text

    // the title
    const title = document.createElement('div')
    title.innerHTML = this.title
    title.className = 'box-title'

    // the time
    const time = document.createElement('div')
    time.innerHTML = this.time
    time.className = 'box-time'

    // the text
    const text = document.createElement('div')
    text.innerHTML = this.text
    text.className = 'box-text'

    // append all items to the container
    box.appendChild(img)
    box.appendChild(title)
    box.appendChild(time)
    box.appendChild(text)

    // add the box to boxes
    document.getElementById('boxes').appendChild(box)
  }
}

data.forEach((item) => new Box(item.title, item.description, item.image, item.link, item.time))
