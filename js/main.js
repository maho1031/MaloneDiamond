document.addEventListener('DOMContentLoaded', function(){
    
    const main = new Main();
});

class Main {
    constructor(){
        this.header = document.querySelector('.l-header');
        this._observers = [];
        this._scrollInit();
        this._init();
    }

    set observers(val){
        this._observers.push(val);
    }

    get observers(){
        return this._observers;
    }

    _init(){
        new MobileMenu();
        
        this.hero = new HeroSlider('.p-swiper-container');
        Pace.on('done', this._paceDone.bind(this));

    }
    _paceDone(){
        this._scrollInit();
    }

    _inviewAnimation(el, inview){
        if(inview){
            el.classList.add('inview');
        }else{
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview){
        if(inview){
            this.header.classList.remove('triggered');
        }else{
            this.header.classList.add('triggered');
        }
    }

    _toggleSlideAnimation(el, inview){
        if(inview){
            this.hero.start();
        }else{
            this.hero.stop();
        }
    }
    _destroyObservers(){
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }
    destroy(){
        this._destroyObservers();
    }

    _scrollInit(){
        this._observers = new ScrollObserver('.js-nav-trigger', this._navAnimation.bind(this), {once: false});
        this._observers = new ScrollObserver('.p-swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
        this._observers = new ScrollObserver('.appear', this._inviewAnimation);
        console.log(this.observers);
    }

}
