// Burger menu

const sidebarMenu = document.getElementById('sidebar'); // finde sidebar menu

function burgerAcordion() {
  const btnHamburger = document.querySelector('#btnHamburger');  // finde burger btn 

  // add listener on burger btn
  btnHamburger.addEventListener('click', function(){
    console.log('hamburger click');

    // remove or add 'open' class to sidebar 
    if(sidebarMenu.classList.contains('open')){ //Close
      sidebarMenu.classList.remove('open');
        
    }
    else { // Open
      sidebarMenu.classList.add('open');
        
    }
  });
}

burgerAcordion();

// Subpages links

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

// MODAL 

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}

// topbar login
document.querySelector('#login').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModalLogin');
  }
});

// hamburger - sidebar login
document.querySelector('#login-2').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModalLogin');
  }
  sidebarMenu.classList.remove('open');
});

// online chat
document.querySelector('#message').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModalMessage');
  }
  sidebarMenu.classList.remove('open');
});

// topbar quit
document.querySelector('#quit').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModalQuit');
  }
});

// hamburger - sidebar quit
document.querySelector('#quit-2').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModalQuit');
  }
  sidebarMenu.classList.remove('open');
});