(function ($){
    "use strict"

    // typed initiate 
    if ($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop: true
        });
            
     
    }
})(jQuery);

// links 

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active')
    })
})