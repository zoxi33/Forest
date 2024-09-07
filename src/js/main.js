const hamburgerIcon = document.querySelector('.hamburger-icon')
const hamburger = document.querySelector('.hamburger')
const closeButton = document.querySelector('.closeButton')
const navMobile = document.querySelector('.menu-mobile')
const allNavItems = document.querySelectorAll('.nav_link')
const currentyear = document.querySelector('.currentyear')

const showNav = () => {
	navMobile.classList.toggle('active')
	
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('active')
		})
	})
}

const hanldeCurrentYear = () => {
	const year = new Date().getFullYear()
	currentyear.innerText = year
}
hanldeCurrentYear();
hamburger.addEventListener('click', showNav)
closeButton.addEventListener('click', () => {
	navMobile.classList.remove('active')
})
console.log(scrollY);
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	
	function addBackground(){
		if(window.scrollY >=83){
			nav.classList.add('new-background')
		}else{
			nav.classList.remove('new-background')
			
		}
	}
	window.addEventListener('scroll', addBackground)
})