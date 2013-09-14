// Enable State changer

var SlideShowApp = (function(doc, win) {

    var stateArray = [
            'default',
            'whiteout',
            'alert',
            'orange',
            'soothe',
            'blackout',
            'cobalt',
            'mint',
            'submerge',
            'lila',
            'sunset'
        ],
        stateCounter = 0;

    function stateChanger() {
        doc.querySelector('#state-changer').addEventListener('click', function(){
            stateCounter = stateCounter == 9 ? 0 : stateCounter;
            this.innerText = (doc.documentElement.className = stateArray[stateCounter++]);
        });
    }

    function hoverEffectFirstSlide() {
        Reveal.addEventListener( 'ready', function( event ) {
            if (event.indexh != 0) return false;
            var domBase = event.currentSlide.querySelector('#hero-logo');
                childImages = Array.prototype.slice.call(domBase.children),
                effectCounter = 0;
            var effectInterval = win.setInterval(function(){
                effectCounter = effectCounter == 3 ? 0 : effectCounter;
                childImages.forEach(function(el){
                    el.className = '';
                });
                childImages[effectCounter++].className = 'hover-effect';
            }, 1000);
        });
    }

    return {
        init: function() {
            stateChanger();
            hoverEffectFirstSlide();
        }
    }
}(window.document, window));

SlideShowApp.init();

