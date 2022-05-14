const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const recentPress = document.querySelector('.recent__press');

menu.addEventListener("click", () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

for(var i=0; i<=5;i++){
    const outerDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const title = document.createElement('h4');
    const p = document.createElement('p');
    const img = document.createElement('img');

    p.innerHTML = "Floura partners with Zorp this winter."
    title.innerHTML = "Title "+ i.toString()
    img.src="../public/card_photo.png"
    textDiv.append(title)
    textDiv.append(p)
    textDiv.classList.toggle('container');
    outerDiv.append(img);
    outerDiv.append(textDiv);
    outerDiv.classList.toggle('card');
    recentPress.append(outerDiv);
}