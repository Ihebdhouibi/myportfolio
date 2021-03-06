// toggle btn

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
});


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

(function ($){
    "use strict"

    // typed initiate 
    if ($('.typed-text-output2').length == 1){
        var typed_strings = $('.typed-text2').text();
        var typed = new Typed('.typed-text-output2', {
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop: true
        });
            
     
    }
})(jQuery);


// isotope and filter 


var projectIsotope = $('.projects-container').isotope({itemSelector: '.project', layoutMode: 'fitRows'})
$('#projects-filter li').on('click', function(){
    $("#projects-filter li").removeClass('active');
    $(this).addClass('active');

    projectIsotope.isotope({filter: $(this).data('filter')})
})







// links 

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active')
    });
});

/* 
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(current)){
            link.classList.add("active");
        }
    });
};
*/ 


// cards viewmore 

var popupViews = document.querySelectorAll('.popup-view')
var popupBtns = document.querySelectorAll('.popup-btn')
var popupCloses = document.querySelectorAll('.close-btn')

var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});

popupCloses.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});


