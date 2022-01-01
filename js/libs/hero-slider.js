class HeroSlider{
    constructor(el){
        this.el = el;
            this.swiper = this._initSwiper();

    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'fade',
            centeredSlides: true,   //スライダーが中央揃えになる
            slidesPerView: 1,  //Viewに何枚のスライドを表示するか
            speed: 3000,
            
        });
    }

    start(options = {}){
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false  //マウスで操作した後も自動で動く
        }, options);

        this.swiper.params.autoplay = options;

            this.swiper.autoplay.start();
        }
    stop(){
        this.swiper.autoplay.stop();
    }

}
