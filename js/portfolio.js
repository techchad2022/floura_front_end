const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const imageSection = document.querySelector('.portfolio__images');

menu.addEventListener("click", () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

for(var pic=1; pic <= 20; pic++) {
    const img = document.createElement('img');
    const imglocation = "../public/portfolio_images/" + pic.toString() +".png";
    img.src = imglocation;
    console.log(imglocation);
    imageSection.appendChild(img);
}

