//preload
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}


$(document).ready(function () {
    $('.request-call,.close_btn').click(function (event) {
        $('.request-call,.request_call_menu').toggleClass('active');
    });
});

//menu burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//tilt

$(document).ready(function () {
    $('.js-tilt').tilt({
        speed: 1000,
        maxTilt: 5,
    })
})


const program_swiper = new Swiper('.program_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//tabs

const tabsBtn = document.querySelectorAll(".tabs__nav__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
});

document.querySelector('.tabs__nav__btn:nth-child(1)').click();


//range slider

var slider = document.getElementById("myRange");
var output = document.getElementById("value");


output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider.style.background = color;
});


var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

output2.innerHTML = slider2.value;

slider2.oninput = function () {
    output2.innerHTML = this.value;
}

slider2.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider2.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider2.style.background = color;
});


// let range1Element = $('#range1')
// let range1Value = $('#range1Value')
// let range2Element = $('#range2')
// let range2Value = $('#range2Value')
// let range3Element = $('#range3')
// let range3Value = $('#range3Value')
// let range4Element = $('#range4')
// let range4Value = $('#range4Value')
// let range5Element = $('#range5')
// let range5Value = $('#range5Value')
// let range6Element = $('#range6')
// let range6Value = $('#range6Value')

// $(document).ready(function () {
//     $('#range1').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range1Value').html(range1Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range1Value.html(value);
//         }
//     });

//     $('#range2').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range2Value').html(range2Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range2Value.html(value);
//         }
//     });


//     $('#range3').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range3Value').html(range3Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range3Value.html(value);
//         }
//     });

//     $('#range4').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range4Value').html(range4Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range4Value.html(value);
//         }
//     });

//     $('#range5').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range5Value').html(range5Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range5Value.html(value);
//         }
//     });

//     $('#range6').rangeslider({
//         polyfill: false,

//         onInit: function () {
//             $('#range6Value').html(range6Element.attr('value'));
//         },

//         onSlide: function (position, value) {
//             range6Value.html(value);
//         }
//     });

//     $(window).trigger('resize');


// });



//mask
$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});


$('.form_input').click(function () {
    $('.form_input').toggleClass('active');
    $('.form_input').not(this).removeClass('active')
})


$('.category').click(function (event) {
    $(this).next('.category__toggle__block, .plus_icon ').toggleClass('active');
    $('.category__toggle__block, .plus_icon ').not($(this).next('.category__toggle__block, .plus_icon ')).removeClass('active');
});


$('.find_all').click(function () {
    $('.category__toggle__block').addClass('active')
})

wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();