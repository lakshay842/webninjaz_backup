 // fixed navbar
 $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header_nav").addClass("header_nav_color");
        } else {
            $(".header_nav").removeClass("header_nav_color");
        }
    });
    });

    // counters
    $(document).ready(function() {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];

        for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart + '+';
            }
        }, 40);
        }

        for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
        }
    });



        $('.our-client').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        })
        // tab carousel
        $('.owl-carousel2').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })


        $('.owl-carousel4').owlCarousel({
            autoplay:true,
            loop:true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut', 
            margin:0,
            nav:false,
            dots:false,
            items:1
        });
   
        $('.shop-web').click(function(){
        $('.shop-app').removeClass('active');
            $(this).addClass('active');
            $('#port-website').addClass('active');
            $('#port-apps').removeClass('active');
        });

        $('.shop-app').click(function(){
            $('.shop-web').removeClass('active');
            $(this).addClass('active');
            $('#port-website').removeClass('active');
            $('#port-apps').addClass('active');

        });



        //video
            $(".video-play").on('click', function(e) {
                e.preventDefault(); 
                var vidWrap = $(this).parent(),
                    iframe = vidWrap.find('.video iframe'),
                    iframeSrc = iframe.attr('src'),
                    iframePlay = iframeSrc += "?autoplay=1";
                vidWrap.children('.video-thumbnail').fadeOut();
                vidWrap.children('.video-play').fadeOut();
                vidWrap.find('.video iframe').attr('src', iframePlay);
            });