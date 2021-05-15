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

//swiper
const program_swiper = new Swiper('.program_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    initialSlide: 1,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//swiper2
const news__swiper = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: false,
    slidesPerView: 'auto',
    spaceBetween: 24,
    effect: 'coverflow',
    initialSlide: 1,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.news_next',
        prevEl: '.news_prev',
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
};
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
};
slider2.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider2.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider2.style.background = color;
});


var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");

output3.innerHTML = slider3.value;
slider3.oninput = function () {
    output3.innerHTML = this.value;
};
slider3.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider3.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider3.style.background = color;
});


var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("value4");

output4.innerHTML = slider4.value;
slider4.oninput = function () {
    output4.innerHTML = this.value;
};
slider4.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider4.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider4.style.background = color;
});

var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("value5");

output5.innerHTML = slider5.value;
slider5.oninput = function () {
    output5.innerHTML = this.value;
};
slider5.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider5.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider5.style.background = color;
});


var slider6 = document.getElementById("myRange6");
var output6 = document.getElementById("value6");

output6.innerHTML = slider6.value;
slider6.oninput = function () {
    output6.innerHTML = this.value;
};
slider6.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider6.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider6.style.background = color;
});



var slider7 = document.getElementById("myRange7");
var output7 = document.getElementById("value7");

output7.innerHTML = slider7.value;
slider7.oninput = function () {
    output7.innerHTML = this.value;
};
slider7.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider7.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider7.style.background = color;
});



var slider8 = document.getElementById("myRange8");
var output8 = document.getElementById("value8");

output8.innerHTML = slider8.value;
slider8.oninput = function () {
    output8.innerHTML = this.value;
};
slider8.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider8.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider8.style.background = color;
});


var slider9 = document.getElementById("myRange9");
var output9 = document.getElementById("value9");

output9.innerHTML = slider9.value;
slider9.oninput = function () {
    output9.innerHTML = this.value;
};
slider9.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider9.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider9.style.background = color;
});


var slider10 = document.getElementById("myRange10");
var output10 = document.getElementById("value10");

output10.innerHTML = slider10.value;
slider10.oninput = function () {
    output10.innerHTML = this.value;
};
slider10.addEventListener("input", function () {
    var maxAttribute = this.getAttribute('max');
    var x = slider10.value;
    var valueWidth = ((x * 100) / maxAttribute);
    var color = 'linear-gradient(90deg, rgb(5, 178, 205)' + valueWidth + '%, rgb(199, 199, 204)' + valueWidth + '%)';
    slider10.style.background = color;
});

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