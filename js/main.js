$(document).ready(function(){
    custom.init();
})

var custom = {
    banner:{
        createParticles:function(){
            particlesJS.load('particles-js', 'libs/particles/particles.json', function() {
            });
            particlesJS.load('particles-js-bg', 'libs/particles/particles.json', function() {
            });
        },
        init:function(){
            this.createParticles();
        }
    },
    init:function(){
        this.banner.init();
    }
}

