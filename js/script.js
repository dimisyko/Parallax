class parallax {
    constructor({el, start, end, calc}) {
        this.el = el
        this.start = start
        this.end = end
        this.calc = calc
        this.event()
    }

    parallaxScroll() {
        const topEl = window.pageYOffset - this.el.offsetTop + window.innerHeight
        const newY = this.start + topEl / (this.el.offsetHeight + window.innerHeight) * this.calc
        if (topEl < 0) {
            this.el.style.transform = "translate3d(0," + this.start + "%, 0) scale(1.2)"
        } else {
            this.el.style.transform = "translate3d(0," + newY + "%, 0) scale(1.2)"
        }
        if (newY > this.end) {
            this.el.style.transform = "translate3d(0," + this.end + "%, 0) scale(1.2)"
        }
    }

    event() {
        window.addEventListener('scroll', this.parallaxScroll.bind(this))
    }
}

const imgParallax = document.querySelectorAll('.container__img img')

imgParallax.forEach(function (el) {
    new parallax({
        el: el,
        start: -30,
        end: 30,
        calc: 60
    })
})