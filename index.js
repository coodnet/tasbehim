document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal'),
    removeModal = document.querySelector('.removeModal'),
    overAllNum = document.querySelector('#overAllNum'),
    nowSayZikr = document.querySelector('#nowSay'),
    zikr = document.querySelector('.zikr'),
    counterBtn = document.querySelector('.counterBtn'),
    numBtn = document.querySelector('.num')

  let count = 0
  let countNow = 0
  const zikrlar = [
    'Subhan Alloh',
    'Alhamdulillah',
    'Allohu Akbar',
    'Laa ilaha illalloh',
    "Astag'firulloh",
  ]

  // Local storage

  localStorage.getItem('num')
    ? console.log('xammasi yaxshi')
    : localStorage.setItem('num', count)

  // Random

  const randTxtFunction = setInterval(() => {
    const rand = Math.floor(Math.random() * zikrlar.length)
    zikr.textContent = zikrlar[rand]
  }, 4000)

  //Checking MODAl
  modal.classList.add('hideModal')
  const showMmodalInterval = setTimeout(() => {
    modal.classList.add('showModal')
    modal.classList.remove('hideModal')
    counterBtn.disabled = true
  }, 500)

  const hideModalInterval = setTimeout(() => {
    modal.classList.add('hideModal')
    modal.classList.remove('showModal')
    counterBtn.disabled = false
  }, 4000)

  // removeModal.addEventListener('click', () => {
  //   modal.classList.add('hideModal')
  //   modal.classList.remove('showModal')
  // })

  // Start Count
  overAllNum.textContent = localStorage.getItem('num')

  const renderingCounts = () => {
    count = localStorage.getItem('num')
    count++
    localStorage.setItem('num', count)
    overAllNum.textContent = localStorage.getItem('num')

    countNow++
    nowSayZikr.textContent = countNow
    numBtn.textContent = countNow
    console.log(countNow);
  }
  counterBtn.addEventListener('click', renderingCounts)
})
