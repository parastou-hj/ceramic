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
    margin:20,
    navText: [],
    lazyLoad: true,
    responsive: {
      0: {
        items: 2,
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
        items: 5,
        touchDrag: false,
        mouseDrag: false
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
                autoplay: true,
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
                        items: 3,
                

                        
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

    document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search');
    const searchBox = document.querySelector('.search-box-wrapper');
    const closeSearchBtn = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    
   
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchBox.classList.add('active');
            
           
            setTimeout(() => {
                searchInput.focus();
            }, 400);
        });
    }
    
   
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', function() {
            searchBox.classList.remove('active');
        });
    }
    
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
        }
    });
    
    
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });
    
    
    searchBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
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
        // ==================== Flower Bloom Animation ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-sec');
    const aboutTop = document.querySelector('.about-sec .about-top');
    const aboutDown = document.querySelector('.about-sec .about-down');
    
    if (!aboutSection || !aboutDown) return;
    
    // تنظیمات Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };
    
   
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                if (aboutTop) {
                    setTimeout(() => {
                        aboutTop.classList.add('visible');
                    }, 200);
                }
                
              
                setTimeout(() => {
                    aboutDown.classList.add('bloomed');
                }, 600);
                
                
                observer.unobserve(entry.target);
            }
        });
    };
    
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
   
    observer.observe(aboutSection);
});
// ==================== Chemi Shapes - Simple Version ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const chemiSection = document.querySelector('.chemi-sec');
    
    if (!chemiSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               
                chemiSection.querySelector('.title')?.classList.add('animate');
                chemiSection.querySelector('.chemi-back')?.classList.add('animate');
                
                const shapes = chemiSection.querySelectorAll('[class*="shape-"]');
                shapes.forEach(shape => shape.classList.add('animate'));
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(chemiSection);
});
// ==================== Language Switcher ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.querySelector('.lang-switcher');
    const langTrigger = document.querySelector('.lang-trigger');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    if (!langSwitcher) return;
    
    // کلیک روی trigger
    langTrigger?.addEventListener('click', function(e) {
        e.preventDefault();
        langSwitcher.classList.toggle('active');
    });
    
    // انتخاب زبان
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // حذف active از همه
            langOptions.forEach(opt => opt.classList.remove('active'));
            
            // اضافه کردن active به گزینه انتخاب شده
            this.classList.add('active');
            
            // تغییر متن نمایشی
            const selectedLang = this.getAttribute('data-lang').toUpperCase();
            if (currentLangSpan) {
                currentLangSpan.textContent = selectedLang;
            }
            
            // بستن dropdown
            langSwitcher.classList.remove('active');
            
            // اینجا می‌توانید زبان سایت را تغییر دهید
            // console.log('Selected language:', this.getAttribute('data-lang'));
        });
    });
    
    // بستن با کلیک بیرون
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
$(document).ready(function() {
    const initializeOwlCarousel = () => {
        const advantagesContainer=$('.timeline')
        if (window.innerWidth > 1200) {
            if (typeof advantagesContainer.data('owl.carousel') != 'undefined') {
                advantagesContainer.data('owl.carousel').destroy();
              }
              advantagesContainer.removeClass('owl-carousel');
            
        } else if(window.innerWidth <= 1200) {
            if (!$('.timeline').hasClass('owl-carousel')) {
                $('.timeline').addClass('owl-carousel').owlCarousel({
                    rtl: true,
                    items: 1,
                    // nav: true,
                    dots: true,
                    loop: true,
                    autoplay: true,
                    margin:10,
                    // autoplayTimeout: 3000,
                    // autoplayHoverPause: true,
                    // navText: [
                    //     '<i class="fa-solid fa-chevron-right"></i>',
                    //     '<i class="fa-solid fa-chevron-left"></i>'
                    // ],
                    responsive: {
                        0: {
                            items: 2
                        },
                        576: {
                            items: 3
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: 4
                        },
                        
                    }
                });
            }
        }
    };
    // $('.timeline-line').css('display' ,'none')

    initializeOwlCarousel();
    $(window).resize(initializeOwlCarousel);

  
});