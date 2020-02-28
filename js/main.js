$(document).ready(function() {
  custom.init();
});

var custom = {
  header: {
    doing: function() {
      if ($(document).scrollTop() > 50) {
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    },
    events:function(){
      var _ = this;
      $(document).on("scroll", function() {
        _.doing();
      });
      $(document).on('click','.header-burger-btn',function(e){
        e.preventDefault();
        $('body').toggleClass('overflow')
        $('.header-burger').toggleClass('active')
      })
    },
    init: function() {
      this.events();
      this.doing();
    }
  },
  banner: {
    events: function() {
      var _ = this;
      $(document).on("scroll", function() {
        window.pJSDom.forEach(function(item, key) {
          if ($(document).scrollTop() > $(".banner-bg").height()) {
            item.pJS.particles.move.enable = false;
          } else if (!item.pJS.particles.move.enable) {
            item.pJS.particles.move.enable = true;
            item.pJS.fn.particlesRefresh();
          }
        });
      });
    },
    createParticles: function() {
      var _ = this;
      particlesJS("banner-up", getConfig("banner"));
      particlesJS("banner-down", getConfig("banner", "down"));
      _.events();
    },
    init: function() {
      this.createParticles();
    }
  },
  sliderTools: {
    createSlider: function() {
      var sliderTools = new Swiper(".tools-slider", {
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          900: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          700: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }
      });
    },
    init: function() {
      this.createSlider();
    }
  },
  doingSlider: {
    createSlider: function() {
      var doingList = new Swiper(".doing-list", {
        speed: 500,
        spaceBetween: 40,
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
          1500: {
            spaceBetween: 60,
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1400: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1150: {
            spaceBetween: 60,
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          700: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }
      });
    },
    init: function() {
      this.createSlider();
    }
  },
  fullImg: {
    doing: function(scrollTop) {
      var top = $(".news-detail-head").offset().top;
      var paralax = (scrollTop - top) * 0.5 + 20;
      $(".news-detail-head").css("background-position", "center " + paralax + "px");
    },
    events: function() {
      var _ = this;
      $(document).on("scroll", function() {
        _.doing($(document).scrollTop());
      });
    },
    init: function() {
      this.events();
      this.doing($(document).scrollTop());
    }
  },
  gotoUp: {
    doing: function(scrollTop) {
      if (scrollTop > $(window).height()) {
        $(".goto-up").addClass("show");
        $(".goto-down").addClass("hide");
      } else {
        $(".goto-up").removeClass("show");
        $(".goto-down").removeClass("hide");
      }
    },
    events: function() {
      var _ = this;
      $(document).on("scroll", function() {
        _.doing($(document).scrollTop());
      });
    },
    init: function() {
      this.events();
      this.doing($(document).scrollTop());
    }
  },
  portfolioImgs: {
    zomm: function() {
      $(".portfolio-img-layers .layer").fancybox();
      $(".present-layers .layer-box").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic"
      });
    },
    scrolled: function() {
      $(document).on("scroll", function() {
        var scroll = $(document).scrollTop();
        var height = $(window).height();
        $(".portfolio-item").each(function() {
          var top = $(this).offset().top;
          if (scroll + height / 2 > top && scroll > 50) {
            $(this).addClass("showed");
          } else {
            $(this).removeClass("showed");
          }
        });
      });
    },
    init: function() {
      this.zomm();
      this.scrolled();
    }
  },
  modal: {
    events: function() {
      $(document).on("click", ".js-popup", function() {
        if (window.pJSDom.length >= 4) {
          delete window.pJSDom[window.pJSDom.length - 1];
          delete window.pJSDom[window.pJSDom.length - 1];
        }
        if($(window).width()>950){
          particlesJS("modal-canvas-down", getConfig("modal", "down"));
          particlesJS("modal-canvas-up", getConfig("modal"));
        }
      });
    },
    init: function() {
      this.events();
      //$.fancybox.open({type:'modal', href:'#question_success'})
      $(".js-popup").fancybox({
        openEffect: "fade",
        closeEffect: "fade"
      });
    }
  },
  init: function() {
    this.header.init();
    if ($(".banner").length > 0) this.banner.init();
    if ($(".tools").length > 0) this.sliderTools.init();
    if ($(".news-detail-head").length > 0) this.fullImg.init();
    if ($(".goto-up").length > 0) this.gotoUp.init();
    if ($(".layer").length > 0) this.portfolioImgs.init();
    if ($(".doing-list").length > 0) this.doingSlider.init();
    if ($(".modal-item").length > 0) this.modal.init();
  }
};
var getConfig = function(type, pos) {
  var count;
  var size;
  if (type == "banner") {
    count = 80;
    if ($(window).width() < 550) {
      count = 40;
    }
  } else {
    count = 130;
    if ($(window).width() < 550) {
      count = 80;
    }
  }
  if (pos == "down") {
    size = 8;
  } else {
    size = 6;
  }
  var configParticle = {
    particles: {
      number: {
        value: count,
        density: {
          enable: true,
          value_area: 1499.3805191013182
        }
      },
      color: {
        value: "#000000"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: size,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 3.248308849205381,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 224.4776885211732,
        color: "#000000",
        opacity: 0.24051180912982842,
        width: 1.5
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: false,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 255.80432187492372,
          line_linked: {
            opacity: 0.5264759836463393
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };
  return configParticle;
};
