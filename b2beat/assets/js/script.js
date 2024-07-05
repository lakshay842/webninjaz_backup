// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0";
  }
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
  }


  // crousal

  // $(document).ready(function(){
  //   $(".owl-carousel").owlCarousel();
    
  // });

  $('.reveiw-carousel').owlCarousel({
   margin: 30,
   loop: true,
   nav: false,
   dots: true,
   responsive: {
     0: {
       items: 2
     },
     600: {
       items: 3
     },
     1000: {
       items: 7
     }
   }
})

