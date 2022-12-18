(function ($) {
    "use strict";
    $(document).ready(function () {
        var siteMenuClone = function () {
            $('.js-clone-nav').each(function () {
                var $this = $(this);
                $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });
            setTimeout(function () {
                var counter = 0;
                $('.site-mobile-menu .has-children').each(function () {
                    var $this = $(this);
                    $this.prepend('<span class="arrow-collapse collapsed">');
                    $this.find('.arrow-collapse').attr({
                        'data-toggle': 'collapse',
                        'data-target': '#collapseItem' + counter,
                    });
                    $this.find('> ul').attr({
                        'class': 'collapse',
                        'id': 'collapseItem' + counter,
                    });
                    counter++;
                });
            }, 1000);
            $('body').on('click', '.arrow-collapse', function (e) {
                var $this = $(this);
                if ($this.closest('li').find('.collapse').hasClass('show')) {
                    $this.removeClass('active');
                } else {
                    $this.addClass('active');
                }
                e.preventDefault();
            });
            $(window).resize(function () {
                var $this = $(this),
                    w = $this.width();
                if (w > 768) {
                    if ($('body').hasClass('offcanvas-menu')) {
                        $('body').removeClass('offcanvas-menu');
                    }
                }
            })
            $('body').on('click', '.js-menu-toggle', function (e) {
                var $this = $(this);
                e.preventDefault();
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').removeClass('active');
                } else {
                    $('body').addClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').addClass('active');
                }
            })
            // click outisde offcanvas
            $(document).mouseup(function (e) {
                var container = $(".site-mobile-menu");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('offcanvas-menu')) {
                        $('body').removeClass('offcanvas-menu');
                        $('body').find('.js-menu-toggle').removeClass('active');
                    }
                }
            });
        };
        siteMenuClone();
        var siteScroll = function () {
            $(window).scroll(function () {
                var st = $(this).scrollTop();
                if (st > 100) {
                    $('.js-sticky-header').addClass('shrink');
                } else {
                    $('.js-sticky-header').removeClass('shrink');
                }
            })
        };
        siteScroll();
        var siteSticky = function () {
            $(".js-sticky-header").sticky({
                topSpacing: 0
            });
        };
        // siteSticky()

        // hero background
        var bg = $('.hero-bg').attr('background');
        $('.hero-bg').css('background-image', 'url(' + bg + ')')
        // with blur
        var bg = $('.hero-bg-blur').attr('background');
        $('.hero-bg-blur').css({
            'background': 'url(' + bg + ')'
        })

        // about us background
        var bgSejarah = $('.bg-image-sejarah').attr('data-background');
        $('.bg-image-sejarah').css('background-image', 'url(' + bgSejarah + ')')
        // about us background
        var bgVisiMisi = $('.bg-image-visi-misi').attr('data-background');
        $('.bg-image-visi-misi').css('background-image', 'url(' + bgVisiMisi + ')')

        // jquery lighbox
        let $gallery = new SimpleLightbox('.gallery a', {
            scrollZoom: true,
            overlayOpacity: 1.0,
        });


    })
})(jQuery);
