(function () {
    window.addEventListener('load', mediaQueries)
    
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
    const img = document.querySelectorAll('.parallax')
    function mediaQueries() {
        if (window.matchMedia("(max-width : 768px)").matches) {

            window.addEventListener('scroll', function () {
                parallaxImg(img, 'data-parallaxMobile')
            })

        }else{
            window.addEventListener('scroll', function () {
                parallaxImg(img, 'data-parallaxDesktop')
            })
        }
    }
    window.addEventListener('resize', mediaQueries)

})()