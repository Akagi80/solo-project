function burgerAcordion() {
  // finde burger btn 
  const btnHamburger = document.querySelector('#btnHamburger');

  // finde sidebar menu
  const sidebarMenu = document.getElementById('sidebar');

  /* [WORK IN PROGRESS]
  const overlay = document.querySelector('#overlay');
  */

  // add listener on burger btn
  btnHamburger.addEventListener('click', function(){
    console.log('hamburger click');

    // remove or add 'open' class to sidebar 
    if(sidebarMenu.classList.contains('open')){ //Close
        sidebarMenu.classList.remove('open');

        /* [WORK IN PROGRESS]
        overlay.classList.remove('fade-in'); 
        overlay.classList.add('fade-out');
        */
    }
    else { // Open
        sidebarMenu.classList.add('open');
        
        /* [WORK IN PROGRESS]
        //overlay.classList.remove('fade-out');
        //overlay.classList.add('fade-in');
        */
    }
  });
}

burgerAcordion();
