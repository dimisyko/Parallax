(function () {

    function parallaxImg(target, MediaQueriesData) {

        target.forEach(function (el) {
            const animImg = el.getBoundingClientRect().top
            const data = el.getAttribute(MediaQueriesData)
            const topImg = window.pageYOffset - el.offsetTop

            if (topImg > window.innerHeight || -topImg > window.innerHeight) return
               
            el.style.transform = 'translate3d(0, ' + animImg * data + 'px, 0)'
        })
    }

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
        }else if(laptop()){
            parallaxImg(img, 'data-parallax-l')
        }else {
            parallaxImg(img, 'data-parallax-d')
        }
    }

    window.addEventListener('load', checkDevice)
    window.addEventListener('scroll', checkDevice)
    window.addEventListener('resize', checkDevice)
})()