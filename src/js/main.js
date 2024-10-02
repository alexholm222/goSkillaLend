function toggleMenu() {
  const burger = document.querySelector('#burger')
  const mobileMenu = document.querySelector('#mobile-menu')
  const body = document.querySelector('body')
  const banner = document.querySelector('#banner')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    body.classList.toggle('overflow-hidden')
    banner.classList.toggle('hidden')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1129.99) {
      mobileMenu.classList.add('hidden')
      mobileMenu.classList.remove('flex')
      burger.classList.remove('active')
      body.classList.remove('overflow-hidden')
    }
  })
}

toggleMenu()

// Получаем текущий год
const year = new Date().getFullYear()

// Вставляем его в элемент с id "currentYear"
document.getElementById('currentYear').textContent = year

function setupVideoTriggers() {
  // Находим все изображения, которые связаны с видео
  const videoTriggers = document.querySelectorAll('.video-trigger')

  videoTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
      const videoContainerId = this.getAttribute('data-video')
      const videoContainer = document.getElementById(videoContainerId)

      // Скрываем изображение и показываем видео
      this.classList.add('hidden')
      videoContainer.classList.remove('hidden')
    })
  })
}

// Инициализация
setupVideoTriggers()

function toggleAccordion(id) {
  const content = document.getElementById(id)
  const arrow = content.previousElementSibling.querySelector('.arrow')

  // Toggle hidden class for content
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden')
    arrow.classList.add('rotate-180') // Rotate arrow
  } else {
    content.classList.add('hidden')
    arrow.classList.remove('rotate-180') // Reset rotation
  }
}

function changeBackground(event, activeId) {
  event.preventDefault()

  const companyDiv = document.getElementById('company')
  const executorsDiv = document.getElementById('executors')
  const companyDivMob = document.getElementById('companyMob')
  const executorsDivMob = document.getElementById('executorsMob')

  // Убираем фон у обоих элементов
  companyDiv.style.backgroundColor = ''
  companyDiv.style.color = ''
  companyDivMob.style.backgroundColor = ''
  companyDivMob.style.color = ''
  executorsDiv.style.backgroundColor = ''
  executorsDiv.style.color = ''
  executorsDivMob.style.backgroundColor = ''
  executorsDivMob.style.color = ''

  // Применяем зеленый цвет к элементу company, если выбран он
  if (activeId === 'company' || activeId === 'companyMob') {
    companyDiv.style.backgroundColor = '#00FF88'
    companyDiv.style.color = 'black'
    companyDivMob.style.backgroundColor = '#00FF88'
    companyDivMob.style.color = 'black'
  }
  // Применяем синий цвет к элементу executors, если выбран он
  else if (activeId === 'executors' || activeId === 'executorsMob') {
    executorsDiv.style.backgroundColor = 'blue'
    executorsDiv.style.color = 'white'
    executorsDivMob.style.backgroundColor = 'blue'
    executorsDivMob.style.color = 'white'
  }
}

// Применяем стили к первому элементу при загрузке страницы
window.onload = function () {
  const companyDiv = document.getElementById('company')
  const companyDivMob = document.getElementById('companyMob')
  companyDiv.style.backgroundColor = '#00FF88'
  companyDiv.style.color = 'black'
  companyDivMob.style.backgroundColor = '#00FF88'
  companyDivMob.style.color = 'black'
}
