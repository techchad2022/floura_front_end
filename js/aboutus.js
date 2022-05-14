const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const aboutusInfo = document.querySelector('.aboutus__values_inside')
const areaInvolved = document.querySelector('.involvement__inside')
const valuesText = "Floura was founded in 2015 by makeup artist and enterpVentures."
const areas = ["technology","art","environment","travel","lifestyle","education"]
// Navbar Actions
menu.addEventListener("click", () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Adding repetative text in div.
for(var i=0; i <= 5; i++) {
    const p = document.createElement('p');
    p.innerHTML = valuesText;
    if(i < 3){
        p.classList.toggle('spacing_bottom');
    } else {
        p.classList.toggle('spacing_bottom1');
    }
    aboutusInfo.append(p)

}

// Inserting images to areas of involvement.
areas.forEach((item,index)=>{
    const outerDiv = document.createElement('div');
    const textBlock = document.createElement('div');
    const pic = document.createElement('img')
    outerDiv.classList.toggle("involvement__pic_container")
    textBlock.classList.toggle("involvement__pic_text")
    const p = document.createElement('p')
    p.innerHTML = item.toUpperCase();
    pic.src = "../public/" + item + ".png";
    textBlock.append(p)
    outerDiv.append(pic);
    outerDiv.append(textBlock);
    areaInvolved.append(outerDiv);


})