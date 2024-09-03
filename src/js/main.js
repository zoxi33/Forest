const hamburgerIcon = document.querySelector('.hamburger-icon')
const hamburger = document.querySelector('.hamburger')
const closeButton = document.querySelector('.closeButton')
const navMobile = document.querySelector('.menu-mobile')
const allNavItems = document.querySelectorAll('.nav_link')
const currentyear = document.querySelector('.currentyear')

const showNav = () => {
	navMobile.classList.toggle('active')
	buttonSwitch()
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			hamburgerIcon.classList.toggle('displayingn')
			
			navMobile.classList.remove('active')
		})
	})
}
const buttonSwitch = () => {
	hamburgerIcon.classList.toggle('displayingn')
	
}
const hanldeCurrentYear = () => {
	const year = new Date().getFullYear()
	currentyear.innerText = year
}
hanldeCurrentYear();
hamburger.addEventListener('click', showNav)
closeButton.addEventListener('click', buttonSwitch)
closeButton.addEventListener('click', () => {
	navMobile.classList.remove('active')
})
