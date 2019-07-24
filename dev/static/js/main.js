$(document).ready(function () {
    svg4everybody({});

    var slider1 = '.js-banner__list';
    $(slider1).slick({
        infinity: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'.banner__navigation--prev',
        nextArrow:'.banner__navigation--next'
    });

    $(slider1).on('afterChange', function(event, slick, currentSlide){
        $('.slide__count').text(currentSlide + 1);

    });

    $('.banner__navigation').click(function () {
        if($('.banner__navigation').hasClass('banner__navigation--active')) {
            $('.banner__navigation').removeClass('banner__navigation--active');
        }
        $(this).addClass('banner__navigation--active');
    });

    // Второй слайдер
    var slider2 = '.js-pottery__list';
    $(slider2).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:'.all-slider__best--prev',
        nextArrow:'.all-slider__best--next',
        responsive: [
            {
                breakpoint: 971,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
                }, {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 2
                }
            },{
                breakpoint: 481,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });


    $('.all-slider').click(function () {
        if($('.all-slider').hasClass('all-slider--active')) {
            $('.all-slider').removeClass('all-slider--active');
        }
        $(this).addClass('all-slider--active');
    });

    // Слайдер популярные товары
    var slider3 = '.js-popular-product__list';
    $(slider3).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__product--prev',
        nextArrow:'.all-slider__product--next',
        responsive: [
            {
            breakpoint: 481,
            settings: {
                slidesToScroll: 1,
                infinite: true,
                centerMode: true
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToScroll: 1
            }
        }
        ]
    });

    // Слайдер популярные товары ширина 480px
    var slider11 = '.js-popular-product__list--mini';
    $(slider11).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__product-mini--prev',
        nextArrow:'.all-slider__product-mini--next',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true
                }
            }, {
                breakpoint: 320,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Слайдер видеоуроки
    var slider4 = '.js-videolesson__list';
    $(slider4).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__video--prev',
        nextArrow:'.all-slider__video--next',
        responsive: [
            {
            breakpoint: 971,
            settings: {
                slidesToScroll: 1
            }

        },{
            breakpoint: 769,
            settings: {
                slidesToScroll: 1

            }
            },{
            breakpoint: 481,
            settings: {
                slidesToScroll: 1,
                centerMode: true

            }
        },{
            breakpoint: 320,
            settings: {
                slidesToScroll: 1,
                centerMode: false
            }
        }

        ]
    });

    // Слайдер статьи
    var slider5 = '.js-article__list';
    $(slider5).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__articles--prev',
        nextArrow:'.all-slider__articles--next',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true

                }
            },
             {
                breakpoint: 320,
                settings: {
                    slidesToScroll: 1
                }
            }

        ]

    });

    //Слайдер товаров
    var slider6 = '.js-workroom__list';
    $(slider6).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__workroom--prev',
        nextArrow:'.all-slider__workroom--next',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToScroll: 1
                }
            }

        ]
    });

    //Слайдер фотографий
    var slider7 = '.js-photoworkroom__list';
    $(slider7).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__photo--prev',
        nextArrow:'.all-slider__photo--next',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToScroll: 1
                }
            }

        ]
    });

    // Слайдер карточки товара
    var slider8 = '.js-carts-slider__list';
    $(slider8).slick({
        infinity: true,
        speed: 1350,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'.carts__slider--prev',
        nextArrow:'.carts__slider--next',
        asNavFor: '.js-carts-mini__list',
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    speed: 1550
                }
            }

        ]
    });

    $(slider8).on('afterChange', function(event, slick, currentSlide){
        $('.slide__count').text(currentSlide + 1);

    });

    var slider9 = '.js-carts-mini__list';
    $(slider9).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });


    var sliderCartActive = function () {
        $('.carts__slider').click(function () {
            if($('.carts__slider').hasClass('carts__slider--active')) {
                $('.carts__slider').removeClass('carts__slider--active');
            }
            $(this).addClass('carts__slider--active');
        });
    };

    // Слайдер книг литература
    var slider10 = '.js-letters__list';
    $(slider10).slick({
        infinity: true,
        speed: 1500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'.all-slider__letters--prev',
        nextArrow:'.all-slider__letters--next',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true

                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    });




    var radios = $('.data-input__radio');

    radios.each(function() {
        if (this.checked) {
            $(this).closest('.data-radio--label').addClass('red')
        }

    });

    radios.on('change', function() {
        var lebel = $(this).closest('.data-radio--label'),
            ul = $(this).closest('.data-item__radio');

        ul.find('.data-radio--label.red').removeClass('red');
        lebel.addClass('red');
    });

    sliderCartActive();

    var cancel = function() {
        $(".cancel").click(function() {
            $(".busket-items").eq(-1).remove();
        });
    };

    var clickMenu = $('.sandwich');
    var sandwich = function () {
        $(document).on('click', '.sandwich', function(e) {
            e.preventDefault();
            $(this).toggleClass('sandwich--active');
            clickMenu.toggleClass('active');

        });
    };

    var mobile = function(){
        if($(window).width() < 321) {
            $('.f-menu__list').slice(0, 2).wrapAll("<div class='f-menu__inner'></div>");
            $('.f-menu__list').slice(2, 4).wrapAll("<div class='f-menu__inner'></div>");
        }
    };

    var filter = function() {
        $('.filter-top__dropdown').on('click',function(){
            $('.filter-top__open').text('Закрыть фильтр');

        });
    };
        $('.filter-top__dropdown').on('click', function(){
            $('.filter-top__mobile').toggleClass('actives');
            $('.filter__btn').removeClass('actives');
        });
        // Скрытие выбора города при клике на кнопку
        var locationshow = function() {
            $('.location').on('click',function(){
                $('.location__popup').css({display: 'block'});
            });
        };
        var location = function(){
            $('.l-popup__btn').click(function() {
                $(this).addClass('l-popup--active')
                    .siblings().removeClass('l-popup--active');
                setTimeout(function(){
                    if($('.l-popup__btn').hasClass('l-popup--active')) {
                        $('.location__popup').fadeOut('slow');
                    }
                }, 200);
            });
        };

        var sliderSmall = function(){
            $('.all-slider__smile').hover(function() {
                console.log('sdsdsds');
                // $('.product-item__btn .smile--hover').show();
            })
        };

    sandwich();
    cancel();
    mobile();
    filter();
    location();
    locationshow();
    sliderSmall();




});

