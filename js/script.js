(function(){
    function parallaxImg() {
        const img = document.querySelectorAll('.parallax')
        img.forEach(function (el) {
            const animImg = el.getBoundingClientRect().top / 4
            const data = el.getAttribute('data-parallax-d')
            const topImg = window.pageYOffset - el.offsetTop
            const parallax = animImg * data
            if (topImg > window.innerHeight || -topImg > window.innerHeight) return
               
            el.style.transform = 'translate3d(0, ' + parallax.toFixed(2) + 'px, 0)'
      
        })
        requestAnimationFrame(parallaxImg)
    }
    parallaxImg()
})()