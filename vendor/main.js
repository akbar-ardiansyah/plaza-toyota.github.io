document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        document.addEventListener('scroll', () => {
            window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar .scrollto');

    function navbarlinksActive() {
        navbarlinks.forEach(navbarlink => {

            if (!navbarlink.hash) return;

            let section = document.querySelector(navbarlink.hash);
            if (!section) return;

            let position = window.scrollY;
            if (navbarlink.hash != '#header') position += 200;

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    /**
     * Function to scroll to an element with top ofset
     */
    function scrollto(el) {
        const selectHeader = document.querySelector('#header');
        let offset = 0;

        if (selectHeader.classList.contains('sticked')) {
            offset = document.querySelector('#header.sticked').offsetHeight;
        } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
            offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
        }
        window.scrollTo({
            top: document.querySelector(el).offsetTop - offset,
            behavior: 'smooth'
        });
    }

    /**
     * Fires the scrollto function on click to links .scrollto
     */
    let selectScrollto = document.querySelectorAll('.scrollto');
    selectScrollto.forEach(el => el.addEventListener('click', function (event) {
        if (document.querySelector(this.hash)) {
            event.preventDefault();

            let mobileNavActive = document.querySelector('.mobile-nav-active');
            if (mobileNavActive) {
                mobileNavActive.classList.remove('mobile-nav-active');

                let navbarToggle = document.querySelector('.mobile-nav-toggle');
                navbarToggle.classList.toggle('fa-bars');
                navbarToggle.classList.toggle('fa-times');
            }
            scrollto(this.hash);
        }
    }));

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

    /**
     * Mobile nav toggle
     */
    const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToogle) {
        mobileNavToogle.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelector('body').classList.toggle('mobile-nav-active');

            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-times');
        });
    }

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
        el.addEventListener('click', function (event) {
            if (document.querySelector('.mobile-nav-active')) {
                event.preventDefault();
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('dropdown-active');

                let dropDownIndicator = this.querySelector('.dropdown-indicator');
                dropDownIndicator.classList.toggle('fa-chevron-up');
                dropDownIndicator.classList.toggle('fa-chevron-down');
            }
        })
    });
    // floating menu hide/show scrolling bt100
    const floatingMenu = document.querySelector('.floating-menu');
    if (floatingMenu) {
        document.addEventListener('scroll', () => {
            window.scrollY > 100 ? floatingMenu.classList.remove('d-none') : floatingMenu.classList.add('d-none');
        });
    }

    // var bg = $('.hero-bg').attr('background');
    // $('.hero-bg').css('background-image', 'url(' + bg + ')')

    // jquery lighbox
    let $gallery = new SimpleLightbox('.gallery a', {
        scrollZoom: true,
        overlayOpacity: 1.0,
    });
});


$(document).ready(function () {
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



})