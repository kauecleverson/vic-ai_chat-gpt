document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("reveal-title"); // Title
    const text = "Olá, bem vindo ao VIC AI. Como posso te ajudar hoje?"; // Text to title
    let index = 0;
  
    const typeEffect = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeEffect, 35);
        }
      };
    
      typeEffect();
});

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon-mobile').src = "assets/images/hamburguinho.png"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon-mobile').src = "assets/images/hamburguinho.png"
    }
}
