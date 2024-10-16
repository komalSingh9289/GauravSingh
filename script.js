
// smooth scroll



emailjs.init("paLXs4mlWSxQ8ZEU4");

$(document).ready(function(){
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './imgs/preloader.json'
    });

    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        preloader.classList.add('slide-out'); // Add the class to start the slide-out animation
        setTimeout(function() {
            preloader.style.display = 'none'; // Hide the preloader element after animation
        }, 1000); 
    }, 2000); 

    

    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
  
        emailjs.sendForm('service_5d0q1wq', 'template_lnuoyed', '#contactForm')
          .then(function(response) {
            alert('Your message has been sent successfully!');
            $('#contactForm')[0].reset(); // Reset form fields after successful submission
          }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send the message, please try again.');
          });
      });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });


});



