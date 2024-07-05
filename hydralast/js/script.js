
$(document).ready(function () {
  $('.header__icon--menu').on('click', () => {
    $('.menu-drawer').toggleClass('active-menu');
  })
  // load more
  $('#qna-load-more').on('click', () => {
    $('#tabs-content').toggleClass('load-more-dt');
    if ($('#tabs-content').hasClass('load-more-dt')) {
      $('#qna-load-more').html('Show Less');
    }
    else {
      $('#qna-load-more').html('Load More');
    }
  })
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});





$(document).ready(function () {
  $('#open-menu-btn').click(function () {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').addClass('active-behind');
    $('body').css('overflow', 'hidden');
  });

  $('.x-header-menu-close').click(function () {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').removeClass('active-behind');
    $('body').css('overflow', 'unset');
  });
  $('.menu-bar-show-overlay').click(function () {
    $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
    $('#overlay').removeClass('active-behind');
    $('body').css('overflow', 'unset');
  })

  $('.mobile-search-accordian').click(function () {
    // Close all open split-accordion-text elements
    $('.split-accordion-text').not($(this).next('.split-accordion-text')).slideUp();

    // Toggle the visibility of the clicked split-accordion-text
    $(this).next('.split-accordion-text').slideToggle();
  });
});




//   hydralast video

const video = document.getElementById('theplayer');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});