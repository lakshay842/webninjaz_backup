$('.gallary-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1,
        }
    }
})

let $slider = $('.slides')
let slideCount = $('.slides .item').length
let $index = $('.index')
let halfItems = Number((slideCount/2).toFixed() - 1)
console.log(slideCount)

const zeroPrefix = (num) => {
	if(num < 10) {
		return '0'+num
	} else {
		return num
	}
}

$('.count').html(zeroPrefix(slideCount))

let slider = $slider.owlCarousel({
	items: 1,
	nav: true,
	loop: true
})

slider.on('changed.owl.carousel', function(event) {
    let item = event.item.index
		let actualItem
		
		console.log(event.item, halfItems)
		
		actualItem = item - halfItems
		if(item == halfItems) actualItem = slideCount
	
		$index.html(zeroPrefix(actualItem))
})


var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    sliderr = document.getElementById("sliderR");

function moveDivisor() {
  handle.style.left = sliderr.value+"%";
	divisor.style.width = sliderr.value+"%";
}

// window.onload = function() {
// 	moveDivisor();
// };

var divisor1 = document.getElementById("divisor1"),
    handle1 = document.getElementById("handle1"),
    sliderr1 = document.getElementById("sliderR1");

function moveDivisor1() {
  handle1.style.left = sliderr1.value+"%";
	divisor1.style.width = sliderr1.value+"%";
}

// window.onload = function() {
// 	moveDivisor1();
// };

var divisor2 = document.getElementById("divisor2"),
    handle2 = document.getElementById("handle2"),
    sliderr2 = document.getElementById("sliderR2");

function moveDivisor2() {
  handle2.style.left = sliderr2.value+"%";
	divisor2.style.width = sliderr2.value+"%";
}

// window.onload = function() {
// 	moveDivisor2();
// };

var divisor3 = document.getElementById("divisor3"),
    handle3 = document.getElementById("handle3"),
    sliderr3 = document.getElementById("sliderR3");

function moveDivisor4() {
  handle3.style.left = sliderr3.value+"%";
   divisor3.style.width = sliderr3.value+"%";
}

// window.onload = function() {
// 	moveDivisor4();
// };

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");

    if (!video) {
        console.error("Video element not found.");
        return;
    }

    if (!circlePlayButton) {
        console.error("Circle play button element not found.");
        return;
    }

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    circlePlayButton.addEventListener("click", togglePlay);

    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
        video.controls = true;
    });

    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para-one");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para-two");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para1");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para2");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para3");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para4");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para5");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para6");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para7");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para8");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para9");
    const maxLength = 200; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para10");
    const maxLength = 250; // Set the maximum number of characters

    if (paragraph.textContent.length > maxLength) {
        paragraph.textContent = paragraph.textContent.slice(0, maxLength) + "...";
    }
});


  

