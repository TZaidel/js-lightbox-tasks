

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера
// з класом "content", 
// для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для
// можливості ходу.
// Скріпт має самостійно визначати переможця гри та
// виводити модальне вікно
// з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно
// щоб кожна клітинка
// ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації,
// список всіх можливих виграшних комбінацій знаходиться
// в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7],
    [3, 6, 9]
]


const container = document.querySelector('.container')
const content = document.querySelector('.content')
const historyX = []
const historyY = []
  let player = 'X'


function createField() {
  let markup = ''
  for (let i = 1; i<=9; i++ ){
    markup += `<div class ="item" id=${i}></div>`
  }
  content.innerHTML = markup 
}

createField()

container.addEventListener('click', onClick)

function onClick(event) {
  if (event.target === event.currentTarget || event.target.textContent) {
    return
  }

  const id = +event.target.id
  let isWinner = false


  if (player === 'X') {
    historyX.push(id)
    isWinner = historyX.length>=3 ? checkWinner(historyX) : false
  } else {
    historyY.push(id)
    isWinner = historyY.length >= 3 ? checkWinner(historyY) : false
  }
  
  if (isWinner) {
    const instance = basicLightbox.create(`<div class="box"><h1>Player ${player} is winner</h1></div>`)
    
    instance.show()
    resetGame()
    return
  }


  event.target.textContent = player
  player = player === "X" ? "O" : "X"


  const lose = [...content.children].every(item => item.textContent)
  if (lose) {
    resetGame()
  }

  function checkWinner(arr) {
    return combination.some(el=>el.every(id=> arr.includes(id)))
  }

  function resetGame() {
    createField()
    player = "X"
    historyX.splice(0)
    historyY.splice(0)
  }
}


