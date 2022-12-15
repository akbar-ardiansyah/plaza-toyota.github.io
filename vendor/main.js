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
                // $(".site-logo").html(`
                // <a href="<?= base_url('artikel'); ?>"><img src="<?= base_url() ?>uploads/favicon/logo.svg" class="img-fluid"></a>
                // `);
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
    siteSticky()

    $('#login-form').on('click', function () {
        $('.log-in').css('display', '')
        $('.sign-in').css('display', 'none')
        $('.register').css('display', 'none')
        // window.location.href = base_url + "artikel/sign-in";
    })
    $('#register-form').on('click', function () {
        $('.register').css('display', '')
        $('.log-in').css('display', 'none')
        $('.sign-in').css('display', 'none')
        // window.location.href = base_url + "artikel/sign-in";
    })

    $('#checkbox').on('change', function () {
        $('#checkbox').attr('disabled', 'true');
        $('#register').removeAttr('disabled')
    });

    function getUser(email) {
        $.ajax({
            method: "POST",
            dataType: "json",
            url: base_url + "artikel/getUser",
            data: {
                email: email
            },
            success: function (res) {
                $('#sess_user').val(res.username)
                $('#sess_user_id').val(res.id_user)
                // $('#sess_user_reply').val(res.id_user)
            },
        });
    }
})