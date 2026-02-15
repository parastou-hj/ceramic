 $(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.header-container').css("height"));
        
            $(".body-content").css({
                "padding-top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});
 
 
 $(document).ready(function(){
            var articlesCarousel = $('.baner-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: false,
                // center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
       
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                dots: true,

                        
                    },
                    
                  
                }
            });
            
            
         
        });
         $(document).ready(function(){
            var articlesCarousel = $('.mobile-baner-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: false,
                // center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
       
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                dots: true,

                        
                    },
                    
                  
                }
            });
            
            
         
        });
         $(document).ready(function(){
            var articlesCarousel = $('.baner-mobile-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: false,
                // center: true,
                // autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
       
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                dots: true,

                        
                    },
                    
                  
                }
            });
            
            
         
        });

        if ($(".owl-support").length) {
  $(".owl-support").owlCarousel({
    // autoplay: true,
    loop: false,
    rtl: true,
    nav: false,
    margin:10,
    navText: [],
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        autoplay:true,
        loop:true,
        autoplayHoverPause: true,
      },
      500: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      991: {
        items: 3,
        dots: true,
      },
      1200: {
        items: 3,
        touchDrag: false,
        mouseDrag: false,
         margin:30,
      },
    },
  });
}

 $(document).ready(function(){
            var articlesCarousel = $('.blog-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: true,
                // center: true,
                // autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                // smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 3.3,
                

                        
                    },
                    
                  
                }
            });
            
            
         
        });
         document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll(".menu li");
      let timer;

      items.forEach(item => {
        item.addEventListener("mouseenter", () => {
          clearTimeout(timer);
          const siblings = item.parentElement.querySelectorAll(":scope > li");
          siblings.forEach(sib => {
            if (sib !== item) sib.classList.remove("active");
          });
          item.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
          timer = setTimeout(() => {
            item.classList.remove("active");
          }, 250);
        });
      });

      // برای موبایل - کلیک کردن
      if (window.innerWidth <= 768) {
        items.forEach(item => {
          const link = item.querySelector("a");
          if (item.querySelector(".submenu")) {
            link.addEventListener("click", (e) => {
              e.preventDefault();
              item.classList.toggle("active");
            });
          }
        });
      }
    });

   
      function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

         document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const logoFix = document.querySelector('.logo-img-fix');
            const logo = document.querySelector('.logo');


            if (!header || !logoFix) {
                return;
            }

            const toggleScrolled = () => {
                const isScrolled = window.scrollY > 0;
                header.classList.toggle('scrolled', isScrolled);
                logoFix.classList.toggle('scrolled', isScrolled);
                logo.classList.toggle('scrolled', isScrolled);
            };

            toggleScrolled();
            window.addEventListener('scroll', toggleScrolled);
        });
 
// ==================== Language Switcher ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.querySelector('.lang-switcher');
    const langTrigger = document.querySelector('.lang-trigger');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    if (!langSwitcher) return;
    
   
    langTrigger?.addEventListener('click', function(e) {
        e.preventDefault();
        langSwitcher.classList.toggle('active');
    });
    

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
          
            langOptions.forEach(opt => opt.classList.remove('active'));
          
            this.classList.add('active');
            
      
            const selectedLang = this.getAttribute('data-lang').toUpperCase();
            if (currentLangSpan) {
                currentLangSpan.textContent = selectedLang;
            }
            
         
            langSwitcher.classList.remove('active');
            
           
        });
    });
   
    document.addEventListener('click', function(e) {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('active');
        }
    });
});
  // ========== Mobile Off-Canvas Menu ==========
$(document).ready(function() {
  
 
  function setDynamicZIndex() {
    $('.off-canvas-submenu').each(function() {
      const level = parseInt($(this).attr('data-level')) || 1;
      const zIndex = 20001 + level;
      $(this).css('z-index', zIndex);
    });
  }
  
  
  function setDynamicPadding() {
    $('.off-canvas-submenu').each(function() {
      const level = parseInt($(this).attr('data-level')) || 1;
      const basePadding = 20;
      const paddingIncrement = 5;
      const padding = basePadding + ((level - 1) * paddingIncrement);
      
      $(this).find('> .submenu-items > .submenu-item > a, > .submenu-items > .submenu-item > .menu-trigger')
             .css('padding-right', padding + 'px');
    });
  }
  
  
  setDynamicZIndex();
  setDynamicPadding();
  

  $('.bar-menu i').on('click', function() {
    $('.off-canvas').addClass('active');
    $('.overlay').addClass('active');
    $('body').css('overflow', 'hidden');
  });
  

  $('.close-btn').on('click', function() {
    $('.off-canvas').removeClass('active');
    $('.overlay').removeClass('active');
    $('.off-canvas-submenu').removeClass('active');
    $('body').css('overflow', 'auto');
  });
  
 
  $(document).on('click', '.menu-trigger', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const $submenu = $(this).siblings('.off-canvas-submenu');
    
    if ($submenu.length) {
      $submenu.addClass('active');
    }
  });
  
 
  $(document).on('click', '.back-btn', function(e) {
    e.stopPropagation();
    $(this).closest('.off-canvas-submenu').removeClass('active');
  });
  

  $('.overlay').on('click', function() {
    $('.off-canvas').removeClass('active');
    $('.overlay').removeClass('active');
    $('.off-canvas-submenu').removeClass('active');
    $('body').css('overflow', 'auto');
  });
  

  $('body').on('click', function(e) {
    const $target = $(e.target);
    
    if (!$target.closest('.off-canvas').length && 
        !$target.closest('.bar-menu i').length) {
      
      $('.off-canvas').removeClass('active');
      $('.overlay').removeClass('active');
      $('.off-canvas-submenu').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
  
});
