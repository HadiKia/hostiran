//Assign to dom
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menu = document.querySelector(".menu");
const contactHeader = document.querySelector(".contactHeader");
const cloudHostHeader = document.querySelector(".cloudHostHeader");
const domainHeader = document.querySelector(".domainHeader");
const serverHeader = document.querySelector(".serverHeader");
const cloudHeader = document.querySelector(".cloudHeader");
const servicesHeader = document.querySelector('.servicesHeader')
const otherServicesHeader = document.querySelector('.otherServicesHeader')
const hostIranHeader = document.querySelector('.hostIranHeader')
//eventListener
hamburgerMenu.addEventListener("click", openMenu);

//functions
function openMenu() {
  hamburgerMenu.classList.toggle("open");
  menu.classList.toggle("display");
}

function contactItem() {
  contactHeader.classList.toggle("open");
}
function cloudHostItem() {
  cloudHostHeader.classList.toggle("openItem");
}

function domainItem() {
  domainHeader.classList.toggle("openDomainItem");
}
function serverItem() {
  serverHeader.classList.toggle("openServerItem");
}
function cloudItem() {
  cloudHeader.classList.toggle("openCloudItem");
}
function servicesItem() {
  servicesHeader.classList.toggle('openServicesItem')
}
function otherServicesItem() {
  otherServicesHeader.classList.toggle("openOtherServicesItem");
}
function hostIranItem() {
  hostIranHeader.classList.toggle('openHostIranItem')
}

const animation = bodymovin.loadAnimation({
  container: document.querySelector('.animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '41547-cloud-hosting.json'
})

const animation2 = bodymovin.loadAnimation({
  container: document.querySelector('.animation2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '98015-cloud-solutions.json'
})

//swiper
const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3500,
  },
});