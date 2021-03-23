// finde sidebar menu
const sidebarMenu = document.getElementById('sidebar');

function burgerAcordion() {
  // finde burger btn 
  const btnHamburger = document.querySelector('#btnHamburger');

  // [WORK IN PROGRESS]  const overlay = document.querySelector('#overlay');
  

  // add listener on burger btn
  btnHamburger.addEventListener('click', function(){
    console.log('hamburger click');

    // remove or add 'open' class to sidebar 
    if(sidebarMenu.classList.contains('open')){ //Close
      sidebarMenu.classList.remove('open');

        // [WORK IN PROGRESS]        
        //overlay.classList.remove('fade-in'); 
        //overlay.classList.add('fade-out');
        
    }
    else { // Open
      sidebarMenu.classList.add('open');
        
        // [WORK IN PROGRESS]
        //overlay.classList.remove('fade-out');
        //overlay.classList.add('fade-in');
        
    }
  });
}

burgerAcordion();



function activeSubpage(event) {
  event.preventDefault();
  const clickedElement = this,
        activePageLinks = document.querySelectorAll('.sb-nav-link'),
        activePages = document.querySelectorAll('.box'),
        pageSelect = clickedElement.getAttribute('href'),
        clickedLink = document.querySelector(pageSelect);

  for(let activePageLink of activePageLinks) {
    activePageLink.classList.remove('active');
  }

  clickedElement.classList.add('active');

  for(let activePage of activePages) {
    activePage.classList.remove('active');
  }
  
  clickedLink.classList.add('active');

  sidebarMenu.classList.remove('open');
}

const links = document.querySelectorAll('.sb-nav-link');

for(let link of links) {
  link.addEventListener('click', activeSubpage)
}