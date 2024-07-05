
const ninjaScroll = class SmoothScroll {
    constructor(sectionSelector) {
        document.addEventListener("DOMContentLoaded", function () {

            let currentSection = 0;
            const sections = document.querySelectorAll(sectionSelector);
            console.log('sections', sections);
            const totalSections = sections.length;
            let isAnimating = false;

            // Variables for touch events
            let touchStartY = 0;
            let touchEndY = 0;

            document.addEventListener('wheel', function (event) {
                if (isAnimating) return;

                // Modify the scroll sensitivity

                const scrollSensitivity = 1 / 200;
                const deltaY = event.deltaY * scrollSensitivity;
                if (Math.abs(deltaY) > 0.3) {  // Adjust sensitivity threshold as needed
                    if (deltaY > 0) {
                        goToSection(currentSection + 1);
                    } else if (deltaY < 0) {
                        goToSection(currentSection - 1);
                    }
                }
            });




            document.addEventListener('touchstart', function (event) {
                touchStartY = event.touches[0].clientY;
            });

            document.addEventListener('touchmove', function (event) {
                touchEndY = event.touches[0].clientY;
            });

            document.addEventListener('touchend', function () {
                if (isAnimating) return;

                const deltaY = touchStartY - touchEndY;
                if (Math.abs(deltaY) > 20) {  // Adjust sensitivity threshold as needed
                    if (deltaY > 0) {
                        goToSection(currentSection + 1);
                    } else if (deltaY < 0) {
                        goToSection(currentSection - 1);
                    }
                }
            });
            function goToSection(index) {
                if (index >= 0 && index < totalSections && !isAnimating) {
                    isAnimating = true;
                    currentSection = index;
                    const targetPosition = sections[index].offsetTop;
                    animateScroll(targetPosition, function () {
                        isAnimating = false;
                        updateURL(index);
                    });
                }
            }
            function updateURL(index) {
                const section = sections[index];
                const sectionId = section.id;
                history.pushState(null, '', `#${sectionId}`);
            }
            function animateScroll(targetPosition, callback) {
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 500; // Transition duration in milliseconds
                let start = null;
                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const progressPercentage = Math.min(progress / duration, 1);
                    window.scrollTo(0, startPosition + distance * easeInOutCubic(progressPercentage));
                    if (progress < duration) {
                        requestAnimationFrame(step);
                    } else {
                        callback();
                    }


                }
                requestAnimationFrame(step);
            }
            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            // // Initial section
            // goToSection(0);
            function handleURLChange() {
                const sectionId = window.location.hash.replace('#', '');
                const index = Array.from(sections).findIndex(section => section.id === sectionId);
                if (index !== -1) {
                    goToSection(index);
                }
            }

            window.addEventListener('popstate', handleURLChange);
            window.addEventListener('hashchange', handleURLChange);

            // Always scroll to the top on reload
            window.addEventListener('load', () => {
                window.scrollTo(0, 0);
                // Set currentSection to 0 and update the URL
                currentSection = 0;
                updateURL(currentSection);
                goToSection(0); // Scroll to top section
            });

            // Initial load
            if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
                // If the page was reloaded, go to the top section
                goToSection(0);
            } else {
                // Otherwise, handle URL change normally
                handleURLChange();
            }
        });
    };

}

export { ninjaScroll };