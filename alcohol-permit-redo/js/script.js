
// Liquor Licence Section Crousel
var owl = $('.reveiw-carousel');
 owl.owlCarousel({
   margin: 16,
   loop: false,
   nav: true,
   navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="17.375" stroke="#FF4600" stroke-width="1.25"/><path d="M21 24L15 18L21 12" stroke="#FF4600" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="17.375" transform="matrix(-1 0 0 1 36 0)" stroke="#FF4600" stroke-width="1.25"/><path d="M15 24L21 18L15 12" stroke="#FF4600" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
   dots: false,
   autoWidth:true,
//    stagePadding: 20,
   responsive: {
     0: {
       items: 2
     },
     600: {
       items: 3
     },
     1000: {
       items: 3
     }
   }
})
function prevVideo() {
    owl.trigger('prev.owl.carousel');
  }
  
  function nextVideo() {
    owl.trigger('next.owl.carousel');
  }


//  liq creousel
var owl = $('.liq-carousel');
 owl.owlCarousel({
   margin: 38,
   loop: true,
   nav: false,
   dots: true,
  //  autoWidth:true,
   responsive: {
     0: {
       item: 3
     },
     600: {
       item: 2
     },
     1000: {
       item: 3,
      
     },
     1450:{
      item: 4,
     }
   }
})

  


//   Home Tab

$(".validator-work-tabs-content").eq(0).show();
$("#work-tabs li").eq(0).addClass("active");
$("#work-tabs li").click(function () {
    var number = $(this).index();
    $("#work-tabs li").removeClass("active");
    $(".validator-work-tabs-content").hide().eq(number).fadeIn("slow");
    $("#work-tabs li").eq(number).addClass("active");
});

// second search header

// // Get the .alc-search-sticky element
// const alcSearchSticky = document.querySelector('.alc-search-sticky');

// // Function to handle scroll events
// function handleScroll() {
//     // Get the current scroll position
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Get the last stored scroll position
//     let lastScrollTop = localStorage.getItem('lastScrollTop') || 0;

//     // Show the header if scrolling down and scrolled at least 10px from the top
//     if (scrollTop > 10 && scrollTop > lastScrollTop) {
//         alcSearchSticky.style.top = "0";
//     } else {
//         // Hide the header if scrolling up or at the top of the page
//         alcSearchSticky.style.top = `-${alcSearchSticky.offsetHeight}px`;
//     }

//     // Store the current scroll position
//     localStorage.setItem('lastScrollTop', scrollTop);
// }

// // Hide the header initially
// alcSearchSticky.style.top = `-${alcSearchSticky.offsetHeight}px`;

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);

// // Handle scroll position on page load
// window.addEventListener('DOMContentLoaded', () => {
//     handleScroll();
// });



// Get the .alc-search-sticky element
const alcSearchSticky = document.querySelector('.alc-search-sticky');

// Function to handle scroll events
function handleScroll() {
    // Get the current scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get the last stored scroll position
    let lastScrollTop = localStorage.getItem('lastScrollTop') || 0;

    // Show the header if scrolling down and scrolled at least 10px from the top
    if (scrollTop > 10 && scrollTop > lastScrollTop) {
        alcSearchSticky.style.opacity = "1";
        alcSearchSticky.classList.add('active'); // Add active class to enable pointer events
    } else {
        // Hide the header if scrolling up or at the top of the page
        alcSearchSticky.style.opacity = "0";
        alcSearchSticky.classList.remove('active'); // Remove active class to disable pointer events
    }

    // Store the current scroll position
    localStorage.setItem('lastScrollTop', scrollTop);
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Handle scroll position on page load
window.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});






// =========mobile header========

$(document).ready(function() {
  $('#open-menu-btn').click(function() {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').addClass('active-behind');
    $('body').css('overflow', 'hidden');
  });

  $('.x-header-menu-close').click(function() {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').removeClass('active-behind');
    $('body').css('overflow', 'unset');
  });
  $('.menu-bar-show-overlay').click(function() {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').removeClass('active-behind');
    $('body').css('overflow', 'unset');
  })

  $('.mobile-search-accordian').click(function() {
    // Close all open split-accordion-text elements
    $('.split-accordion-text').not($(this).next('.split-accordion-text')).slideUp();

    // Toggle the visibility of the clicked split-accordion-text
    $(this).next('.split-accordion-text').slideToggle();
  });
});


// ==========load more==========

function expandretainers(){
  document.querySelector('.nrft-btn').style.height = '100%';
  document.getElementById('loadMoreBtn').style.display = 'none';
  document.getElementById('showLessBtn').style.display = 'block';
}


// =========popup======

function toggleAddUserPopup() {
  var overlay = document.getElementById('addUserOverlay');
  var addUserForm = document.getElementById('addUserForm');

  if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
      addUserForm.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
  } else {
      overlay.style.display = 'block';
      addUserForm.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
  }
}


function closeAddUserPopup(event) {
  var overlay = document.querySelector('.liquor-ser-popup-bg');
  var addUserForm = document.querySelector('.liquor-ser-popup');
  var closeButton = document.querySelector('.popup-close');

  // Check if the click target is the overlay or a descendant of the close button
  if (event.target === overlay || closeButton.contains(event.target)) {
      overlay.style.display = 'none';
      addUserForm.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
  }
}



// ========search mob=======
$(document).ready(function() {
  $('.x-mobile-searchh').click(function(event) {
      event.stopPropagation(); // Prevent the click event from propagating to the document
      $('.x-mb-input-search').toggleClass('show');
  });

  $(document).click(function(event) {
      if (!$(event.target).closest('.x-mb-input-search').length && !$(event.target).is('.x-mb-input-search')) {
          $('.x-mb-input-search').removeClass('show');
      }
  });
});









// ============animation==============

// // 1 crousal
// let vpptext = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-avail",
    
//     once: true, // Adjust the scrub value as needed
//   },
// });

// vpptext.from('.liquor-avail', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });

// // 2 Liquor License | Brokers + Consultants
// let lbc = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liq-brok-content",
//     start: "top+=0 center", 
//     once: true, // Adjust the scrub value as needed
//   },
// });

// lbc.from('.liq-brok-content', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });

// // 3 Liquor License | Brokers + Consultants
// let visionpawbgimg = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".lbi-img",
//     start: "top+=0 center", 
//     once: true, // Adjust the scrub value as needed
//   },
// });

// visionpawbgimg.from('.lbi-img', {
//   scale:0.9,
//   opacity: 0,
//   stagger: {
//     each: 0.1,
//   }
 
// });

// // 4 service

// let exservice = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-ser-content",
    
//     once: true, // Adjust the scrub value as needed
//   },
// });

// exservice.from('.liquor-ser-content', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });

// // 5 form

// let formtxt = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-tab-text",
    
//     once: true, // Adjust the scrub value as needed
//   },
// });

// formtxt.from('.liquor-tab-text', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });

// // 6 baneer

// let bannerbtn = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-licence",
    
//     once: true, // Adjust the scrub value as needed
//   },
// });

// bannerbtn.from('.liquor-licence', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });

// // 6 faq

// let faq = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-faq",
//     start: "top+=0 center", 
//     once: true, // Adjust the scrub value as needed
//   },
// });

// faq.from('.liquor-faq', {
//     y:50,
//   opacity: 0,
//   duration:1,
// });



// // 7 crousel
// let slcrousel = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".liquor-crousel-price",
//     start: "top+=0 center", 
//     once: true, // Adjust the scrub value as needed
//   },
// });

// slcrousel.from('.liquor-crousel-price', {
//   scale:0.9,
//   opacity: 0,
//   stagger: {
//     each: 0.1,
//   }
 
// });