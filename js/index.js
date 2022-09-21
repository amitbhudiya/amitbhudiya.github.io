$(document).ready(function () {
    $('.solidbars').click(function () { 
        $('.navbar').toggleClass('active')
    });
    $('.colors i').click(function () { 
        $(".colors i").removeClass("active");
        $(this).toggleClass('active')
    });
    $('.item ul li').click(function () { 
        $('.sub').toggleClass('active')
    });
    $('.navbar ul li').click(function() {
        $(this).toggleClass('active inactive');
    });
    $('.navbar #accountul li').click(function () { 
        $('.navbar .sub').toggleClass('active')
    });
   
    $('.mainimage').slick({
        //slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        infinite: false,
        arrows: false,
    });
    $('.smallsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  
                }
            }
        ,
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('.productsl').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.cartprevarrow',
        nextArrow: '.cartnextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
    });
    $('.brandsl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.prevarrow',
        nextArrow: '.nextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }]
    });
    $('.testimonials').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        // prevArrow:'.prevarrow',
        // nextArrow:'.nextarrow'
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]
    });
    $('.instasl').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '.instaprevarrow',
        nextArrow: '.instanextarrow',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
    });
});