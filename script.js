const cardImage = document.querySelector('.card-image')
const tittleContainer = document.querySelector('.tittle-container')
const iconContainer = document.querySelector('.icon')
const textDivContainer = document.querySelector('.text-div')


setTimeout(getData, 2500)

function getData() {
  cardImage.innerHTML = '<img src="./imgs/0623_minimal_desk_silhouettes.jpg">'

  tittleContainer.innerHTML = '<h2>Lorem ipsum dolor sit amet</h2> <small>8.9</small>'

  iconContainer.innerHTML = '<img class="profile-img" src="./imgs/0x0 (1).jpg">'

  textDivContainer.innerHTML = '<span>Lorem ipsum dolor sit amet sit</span><span>Lorem ipsum dolor sit amet sit</span><span>Lorem ipsum dolor sit amet sit</span>'
  
}

