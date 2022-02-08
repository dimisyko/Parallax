(function () {
    window.addEventListener('load', MediaQueries)
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

    /*<img  class="parallax" data-parallax-l="-0.5" data-parallax-m="-0.15">*/
    const img = document.querySelectorAll('.parallax')
function MediaQueries(){
    /*https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation*/
    if(screen.orientation.type == 'portrait-primary' ){
        window.addEventListener('scroll', function () {
            parallaxImg(img, 'data-parallax-m')
        /*<img  class="parallax" data-parallax-m="-0.15">*/
        })
        console.log('mobile')
       
    }else{
        window.addEventListener('scroll', function () {
            parallaxImg(img, 'data-parallax-l')
        /*<img  class="parallax" data-parallax-l="-0.5">*/
        })
        console.log('laptop')
    }
}
window.addEventListener('resize', MediaQueries)

})()

