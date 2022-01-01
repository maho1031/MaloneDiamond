// $(function(){
//     // スマートフォンメニュー

//     // var togglemenu = $('.p-header__menu-trigger');
//     var spmenu = $('.p-nav');
//     $('.p-nav__menu-link').on('click',function(){
//         // togglemenu.removeClass('--active');
//         spmenu.removeClass('--active');
        
//     });
//     $('.js-toggle-sp-menu').on('click', function(){
//         $(this).toggleClass('--active');
//         $('.js-toggle-mobileMenu-target').toggleClass('--active');

//     })
// });
class MobileMenu{
    constructor(){
        this.DOM = {};  //thisのDOMをオブジェクトリテラルで初期化
        this.DOM.btn = document.querySelector('.js-toggle-sp-menu');
        this.DOM.menu = document.querySelector('.js-toggle-mobileMenu-target');
        this.DOM.link = document.querySelector('.js-nav-menu');
        this.eventType = this._getEventType();
        this._addEvent();
        

    }


    _getEventType() {    //touchstartはスマホでタッチされたときに発火させるイベント
        //touchstartがある場合はtouchstartない場合はclick
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.menu.classList.toggle('--active');
        this.DOM.btn.classList.toggle('--active');
    }
    _remove(){
        this.DOM.menu.classList.remove('--active');
        this.DOM.btn.classList.remove('--active');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType,this._toggle.bind(this));
        this.DOM.link.addEventListener(this.eventType,this._remove.bind(this));
    }

}

