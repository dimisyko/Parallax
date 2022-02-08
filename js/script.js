(function () {

    /*Function avec paramètres target + data mis dans le html */
    function parallaxImg(target, MediaQueriesData) {
        target.forEach(function (el) {
            const posImg = el.getBoundingClientRect().top - window.innerHeight / 6
            const data = el.getAttribute(MediaQueriesData)
            if (-posImg > window.innerHeight || posImg > window.innerHeight) {
                el.style.transform = 'translate3d(0, ' + false + 'px, 0)'
            } else {
                el.style.transform = 'translate3d(0, ' + posImg * data + 'px, 0)'
            }
        })
    }

    /*RESPONSIVE*//*RESPONSIVE*/ /*RESPONSIVE*/ /*RESPONSIVE*/

    function mobile() {
        return window.innerWidth < 576
    }

    function laptop() {
        return window.innerWidth < 1024
    }

    const img = document.querySelectorAll('.parallax')

    function checkDevice() {
        if (mobile()) {
            parallaxImg(img, 'data-parallax-m')
            console.log('mobile')
            /*<img  class="parallax" data-parallax-m="-0.15">*/
        }else if(laptop()){
            console.log('laptop')
            parallaxImg(img, 'data-parallax-l')
            /*<img  class="parallax" data-parallax-m="-0.4">*/
        }else {
            console.log('desktop')
            parallaxImg(img, 'data-parallax-d')
            /*<img  class="parallax" data-parallax-m="-0.6">*/
        }
    }
    window.addEventListener('scroll', checkDevice)
    window.addEventListener('resize', checkDevice)

})()