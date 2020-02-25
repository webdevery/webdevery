$(document).ready(function(){
    custom.init();
})

var custom = {
    header:{
        doing:function(){
            if($(document).scrollTop()>50){
                $('.header').addClass('scroll')
            }else{
                $('.header').removeClass('scroll')
            }
        },
        init:function(){
            var _ = this;
            $(document).on('scroll',function(){
                _.doing();
            })
            _.doing();
        }
    },
    banner:{
        events:function(){
            var _ = this;
            $(document).on('scroll',function(){
                window.pJSDom.forEach(function(item,key){
                    if($(document).scrollTop() > $('.banner-bg').height()){
                        item.pJS.particles.move.enable = false
                    }else if(!item.pJS.particles.move.enable){
                        item.pJS.particles.move.enable = true;
                        item.pJS.fn.particlesRefresh()
                    }
                })
                
            })
        },
        createParticles:function(){
            var _ = this;
            particlesJS.load('particles-js', 'libs/particles/particles.json', function() {
                _.events()
            });
            particlesJS.load('particles-js-bg', 'libs/particles/particles.json', function() {
            });
        },
        init:function(){
            this.createParticles();
        }
    },
    sliderTools:{
        createSlider:function(){
            var mySwiper = new Swiper('.tools-slider', {
                speed: 500,
                spaceBetween: 0,
                slidesPerView:4,
                slidesPerGroup: 4,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        },
        init:function(){
            this.createSlider()
        }
    },
    fullImg:{
        doing:function(scrollTop){
            var top = $('.fullImg-img').offset().top;
            var paralax =  (scrollTop - top)*0.5 - 50;
            $('.fullImg-img').css('background-position','center '+paralax+'px');
        },
        events:function(){
            var _ = this;
            $(document).on('scroll',function(){
                _.doing($(document).scrollTop());
            })
        },
        init:function(){
            this.events();
        },
    },
    gotoUp:{
        doing:function(scrollTop){
            if(scrollTop>$(window).height()){
                $('.goto-up').addClass('show')
            }else{
                $('.goto-up').removeClass('show')
            }
        },
        events:function(){
            var _ = this;
            $(document).on('scroll',function(){
                _.doing($(document).scrollTop());
            })
        },
        init:function(){
            this.events();
            this.doing($(document).scrollTop());
        }
    },
    portfolioImgsZoom:{
        init:function(){
            $(".portfolio-img-layers .layer").fancybox();
        },
    },
    init:function(){
        this.header.init();
        if($('.banner').length>0) this.banner.init();
        if($('.tools').length>0) this.sliderTools.init();
        if($('.fullImg-img').length>0) this.fullImg.init();
        if($('.goto-up').length>0) this.gotoUp.init();
        if($('.portfolio-img-layers .layer').length>0) this.portfolioImgsZoom.init();
    }
}

