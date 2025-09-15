window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

// Mobile detection - moved to global scope
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // console.log('jQuery loaded:', typeof $ !== 'undefined');
    // console.log('bulmaCarousel loaded:', typeof bulmaCarousel !== 'undefined');
    
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 2,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var mcityOptions = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize results carousel
    // var carousels = bulmaCarousel.attach('#results-carousel', options);
    var carousels = [];
    
    // Initialize global front carousel with 2 slides showing
    var globalFrontCarousel = bulmaCarousel.attach('#global-front-carousel', options);
    
    // Global multi carousel removed - now using button switcher
    
    // Initialize mcity carousel with special options
    // var mcityCarousel = bulmaCarousel.attach('#mcity-carousel', mcityOptions);
    
    // Add click listeners to mcity carousel navigation
    // setTimeout(function() {
    //   var mcityNav = document.querySelectorAll('#mcity-carousel .carousel-navigation a');
    //   mcityNav.forEach(function(nav) {
    //     nav.addEventListener('click', function() {
    //       setTimeout(function() {
    //         var allVideos = document.querySelectorAll('#mcity-carousel video');
    //         allVideos.forEach(function(video) {
    //           video.pause();
    //         });
    //         
    //         var currentVideo = document.querySelector('#mcity-carousel .item.is-active video');
    //         if (currentVideo) {
    //           currentVideo.currentTime = 0;
    //           currentVideo.play().catch(function(e) {
    //             console.log('Video autoplay failed:', e);
    //           });
    //         }
    //       }, 200);
    //     });
    //   });
    // }, 500);
    
    // Add click listeners to global front carousel navigation
    setTimeout(function() {
      var globalFrontNav = document.querySelectorAll('#global-front-carousel .carousel-navigation a');
      globalFrontNav.forEach(function(nav) {
        nav.addEventListener('click', function() {
          setTimeout(function() {
            var allVideos = document.querySelectorAll('#global-front-carousel video');
            allVideos.forEach(function(video) {
              video.pause();
            });
            
            var currentVideos = document.querySelectorAll('#global-front-carousel .item.is-active video');
            currentVideos.forEach(function(video) {
              video.currentTime = 0;
              video.play().catch(function(e) {
                console.log('Global front video autoplay failed:', e);
              });
            });
          }, 200);
        });
      });
    }, 500);
    
    // Global multi carousel navigation removed - now using button switcher
    
    // console.log('=== CAROUSEL DEBUG INFO ===');
    // console.log('Total carousels initialized:', carousels.length);
    // console.log('Global front carousel initialized:', globalFrontCarousel);
    // console.log('Global front element exists:', document.getElementById('global-front-carousel') !== null);
    // console.log('=== END DEBUG INFO ===');

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
    
    // Add click listeners to results carousel navigation
    // setTimeout(function() {
    //   var resultsNav = document.querySelectorAll('#results-carousel .carousel-navigation a');
    //   resultsNav.forEach(function(nav) {
    //     nav.addEventListener('click', function() {
    //       setTimeout(function() {
    //         var allVideos = document.querySelectorAll('#results-carousel video');
    //         allVideos.forEach(function(video) {
    //           video.pause();
    //         });
    //         
    //         var currentVideo = document.querySelector('#results-carousel .item.is-active video');
    //         if (currentVideo) {
    //           currentVideo.currentTime = 0;
    //           currentVideo.play().catch(function(e) {
    //             console.log('Results video autoplay failed:', e);
    //           });
    //         }
    //       }, 200);
    //     });
    //   });
    // }, 500);

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

    // Initialize video switcher
    initVideoSwitcher();
    
    // Initialize global multi switcher
    initGlobalMultiSwitcher();
    
    // Mobile video handling
    if (isMobile) {
        // Remove autoplay from all videos on mobile
        $('video').each(function() {
            this.removeAttribute('autoplay');
            this.setAttribute('controls', 'controls');
            this.setAttribute('playsinline', 'playsinline');
        });
    }

})

// Video switcher functions
function showVideo(videoNumber) {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');
    const buttons = document.querySelectorAll('.video-btn');
    
    if (!video1 || !video2 || !video3) return;
    
    // Reset all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Hide all videos first
    [video1, video2, video3].forEach(video => {
        video.classList.remove('active-video');
        video.classList.add('hidden-video');
        video.style.display = 'none';
        video.pause();
    });
    
    if (videoNumber === 1) {
        // Show video 1
        video1.classList.remove('hidden-video');
        video1.classList.add('active-video');
        video1.style.display = 'block';
        
        // Update button state
        if (buttons[0]) buttons[0].classList.add('active');
        
        // Play video 1
        if (!isMobile) {
            video1.currentTime = 0;
            video1.play().catch(e => console.log('Video 1 play failed:', e));
        }
    } else if (videoNumber === 2) {
        // Show video 2
        video2.classList.remove('hidden-video');
        video2.classList.add('active-video');
        video2.style.display = 'block';
        
        // Update button state
        if (buttons[1]) buttons[1].classList.add('active');
        
        // Play video 2
        if (!isMobile) {
            video2.currentTime = 0;
            video2.play().catch(e => console.log('Video 2 play failed:', e));
        }
    } else if (videoNumber === 3) {
        // Show video 3
        video3.classList.remove('hidden-video');
        video3.classList.add('active-video');
        video3.style.display = 'block';
        
        // Update button state
        if (buttons[2]) buttons[2].classList.add('active');
        
        // Play video 3
        if (!isMobile) {
            video3.currentTime = 0;
            video3.play().catch(e => console.log('Video 3 play failed:', e));
        }
    }
}

function initVideoSwitcher() {
    // Set initial state - video 1 active
    const buttons = document.querySelectorAll('.video-btn');
    if (buttons.length > 0) {
        buttons[0].classList.add('active');
    }
}

// Global Multi Video Switcher Functions
function showGlobalMultiVideo(videoNumber) {
    const videos = [
        document.getElementById('global-multi-video1'),
        document.getElementById('global-multi-video2'),
        document.getElementById('global-multi-video3'),
        document.getElementById('global-multi-video4'),
        document.getElementById('global-multi-video5'),
        document.getElementById('global-multi-video6')
    ];
    
    const buttons = document.querySelectorAll('.global-multi-switcher .video-btn');
    
    // Video labels for each location
    const videoLabels = [
        'Pedestrian Crossing',
        'Agreesive Merge',
        'Highway Zigzag',
        'Redlight Running',
        'Deny Merge',
        'Fail-to-Yield'
    ];
    
    if (videoNumber < 1 || videoNumber > 6) return;
    
    // Reset all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Hide all videos first
    videos.forEach(video => {
        if (video) {
            video.classList.remove('active-video');
            video.classList.add('hidden-video');
            video.style.display = 'none';
            video.pause();
        }
    });
    
    // Show selected video
    const selectedVideo = videos[videoNumber - 1];
    
    if (selectedVideo) {
        selectedVideo.classList.remove('hidden-video');
        selectedVideo.classList.add('active-video');
        selectedVideo.style.display = 'block';
        
        // Update button state
        if (buttons[videoNumber - 1]) {
            buttons[videoNumber - 1].classList.add('active');
        }
        
        // Update video label
        const labelElement = document.getElementById('global-multi-label');
        if (labelElement) {
            labelElement.textContent = videoLabels[videoNumber - 1];
        }
        
        // Play video
        if (!isMobile) {
            selectedVideo.currentTime = 0;
            selectedVideo.play().catch(e => console.log('Global multi video play failed:', e));
        }
    }
}

// Ensure function is available globally
window.showGlobalMultiVideo = showGlobalMultiVideo;

function initGlobalMultiSwitcher() {
    // Set initial state - video 1 active
    const buttons = document.querySelectorAll('.global-multi-switcher .video-btn');
    if (buttons.length > 0) {
        buttons[0].classList.add('active');
    }
}

// Ensure function is available globally
window.initGlobalMultiSwitcher = initGlobalMultiSwitcher;