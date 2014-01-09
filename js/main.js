/* replaced all local image references with
STG: http://static.stg.nytimes.com/images/redesign/redesign/
LIVE: http://graphics8.nytimes.com/images/redesign/
 */

$('.laptop').animate({ marginTop : 0 }, 1000, 'easeInOutBack');
$('.tablet').animate({ marginTop : 0 }, 1200, 'easeInOutBack');
$('.play-video').animate({ paddingTop : 100 }, 800, 'easeInOutBack', function() {
    $('.date').fadeIn();
});

// Add HTML5 video play button for iphone/ipad/android
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()){
    $('video').attr('controls', 'true');
} 

function scrollEffect() {
    scrollPos = $(this).scrollTop();
    
    $('.tablet').css({
        'background-position': 'left ' + (scrollPos / 2) + "px"
    });

    $('.laptop').css({
        'background-position': 'center ' + (scrollPos / 3) + "px"
    });

    $('.play-video').css({
        'margin-top': + (scrollPos / 5) + "px"
    });

    /*$('.scroll').css({
        'background-position': 'left ' + (-scrollPos / 2.5) + "px"
    });*/
    
    $('.section6').css({
        'background-position': '' - (-scrollPos / 2) + "px"
    });
    
    if (scrollPos >= $('div[id="home"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(0)').addClass('active');
        scrollReset();
    }
    if (scrollPos >= $('div[id="reading"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(1)').addClass('active');
        scroll();
    }
    if (scrollPos >= $('div[id="specifics"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(2)').addClass('active');
    }
    if (scrollPos >= $('div[id="spec2"]').offset().top) {
        ribbon();
        alertReset();
    }
    if (scrollPos >= $('div[id="spec3"]').offset().top) {
        alert();
    }
    if (scrollPos >= $('div[id="timeline"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(3)').addClass('active');
    }
    if (scrollPos >= $('div[id="enter"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(4)').addClass('active');
    }
    if (scrollPos >= $('div[id="subscribe"]').offset().top - 60) {
        $('.main-menu a').removeClass('active');
        $('.main-menu a:eq(5)').addClass('active');
    }
    /*if (scrollPos + $(window).height() == $(document).height()) {
        $('.main-menu a:eq(4)').removeClass('active');
    }*/

}

$(window).scroll(function() {
    scrollEffect();
});

var scroll = function() {
    $('.scroll').css({'background-position': 'bottom center'});
}

var scrollReset = function() {
    $('.scroll').css({'background-position': 'top center'});
}

var flip = function(){
    $('.flip-slide .cursor').animate({ 'margin-left': '560', 'top': '205' }, 1000, function(){
        $('.flip-arrow').animate({'opacity': 1}, 100, function(){
            $('.flip').css({'background-position': '-320px top'});
            $('.flip-arrow').click(function() {
                $('.flip').css({'background-position': 'left top'});
            });
        });
    });
}

var flipReset = function() {
    $('.flip-slide .cursor').animate({ 'margin-left': '370', 'top': '250' }, 10, function(){
        $('.flip-arrow').animate({'opacity': 0.7}, 10, function(){
            $('.flip').css({'background-position': 'left top'});
        });
    });
}

var sharing = function(){
    $('.sharing .cursor').animate({ 'margin-left': '526', 'top': '35' }, 1000, function(){
        $('.sharing-over').animate({ 'opacity': '1' }, 100)
    });
}

var sharingReset = function() {
    $('.sharing .cursor').animate({ 'margin-left': '370', 'top': '250' }, 1000, function(){
        $('.sharing-over').css({ 'opacity': '0' });
    });
}

var alert = function(){
    $('.alert').css({ 'background-position': 'center 55px'});
}

var alertReset = function(){
    $('.alert').delay('4000').css({ 'background-position': 'center 22px'});
}

var ribbon = function(){
    $('.spec3 .cursor').stop().animate({ 'margin-top': '58px', 'margin-left': '20px'}, 750, function(){
        $('.ribbon-arrow').animate({ 'opacity': '1'}, 200, function(){
            $('.ribbon').css({ 'background-position': '-=270px top'})
        });
    });
}

var ribbonReset = function(){
    $('.spec3 .cursor').stop().animate({ 'margin-top': '150px', 'margin-left': '120px'}, 1000, function(){
        $('.ribbon-arrow').stop().animate({ 'opacity': '0'}, 200, function(){
            $('.ribbon').css({ 'background-position': 'left top'})
        });
    });
}

// Query string stuff
var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

if(qs["sub"] == 100) {
    $('.subscribe').css('display', 'none');
    $('.social').addClass('sub');
}

if(qs["sub"] == 20) {
    $('.subscribe').addClass('intl');
}

/*//PRE-LAUNCH SETTING
qs["rel"] = 0;
if(qs["rel"] == 0) {
    $('.release, .enter, .date').addClass('pre');
}*/

// Remove date and add enter section and CTAs after Jan 8
var now = new Date(), 
    hours = now.getHours(), 
    postDate = (now.getDate() >= 8 && now.getMonth() >= 0 && now.getFullYear() >= 2014); /* 1/8/14 */

if(postDate) {
    $('.release, .enter, .date').removeClass('pre');
}

// Test for IE8
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
var ieversion=new Number(RegExp.$1) 
    if (ieversion<=8) {
        // IE8 breaks because it no understand play()
        $('.section2 .flexslider').flexslider({
            animation: "slide",
            slideshow: false,
            after: function(slider){
                slider.currentSlide == 0 ? scroll() : scrollReset();
                slider.currentSlide == 2 ? flip() : flipReset();
                slider.currentSlide == 3 ? sharing() : sharingReset();
            }
        });
    } 

}

// Flexslider Init
$('.section2 .flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    after: function(slider){
        slider.currentSlide == 0 ? scroll() : scrollReset();
        slider.currentSlide == 1 ? $('video').get(0).play() : $('video').get(0).pause();
        slider.currentSlide == 2 ? flip() : flipReset();
        slider.currentSlide == 3 ? sharing() : sharingReset();
    }
});

 
$('.section4 .flexslider').flexslider({
    animation: "fade",
    slideshow: false
});

$('.fancybox').fancybox({
    height: 450,
    fitToView: true,
    maxWidth: '90%',
    maxHeight: '90%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
    scrolling: 'no',
    padding: 0,
    aspectRatio : true,
    helpers : {
        media : {},
        overlay: {
            locked: false
        }
    }
});

// Most emailed RSS feed
function parseRSS(url, container) {
    $.ajax({
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=?&q=' + encodeURIComponent(url),
      dataType: 'json',
      success: function(data) {
            $.each(data.responseData.feed.entries, function(key, value){
                if (value.mediaGroups) {
                   var thumbnail = value.mediaGroups[0].contents[0].url;
                }
                // if (!value.mediaGroups) {
                   var thumbnail = 'http://graphics8.nytimes.com/images/redesign/thumbnail.jpg';
                // }
                var thehtml = '<div class="feed-wrapper"><a href="'+value.link+'" target="_blank"><img src="' + thumbnail + '" /><h3 class="title">'+value.title+'</h3></a><p class="subtitle">'+value.content+'</div>';
                $(container).append(thehtml);
            });
        }
    });
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(function(){
    parseRSS('http://www.nytimes.com/services/xml/rss/nyt/pop_top.xml', '#feed');
});

// anchor smooth scrolling
function filterPath(string) {
    return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');
}
var locationPath = filterPath(location.pathname);
$('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'')) {
        var $target = $(this.hash), target = this.hash;
        if (target) {
        $(this).click(function(event) {
            event.preventDefault();
            var targetOffset = $target.offset().top - 60;
            $('html, body').animate({scrollTop: targetOffset}, 500, 'linear', function() {
            location.hash = target;
            });
        });
        }
    }
});

// Share 
$('.facebook').on('click', function() {

    window.open("http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://nytimes.com/redesign&p[images][0]=http://graphics8.nytimes.com/images/redesign/share.jpg&p[title]=See%20what's%20New%20with%20The%20New%20York%20Times.&p[summary]=Sleeker.%20Faster.%20More%20intuitive.%20The%20new%20design%20of%20the%20Times%20website%20makes%20the%20world's%20best%20journalism%20even%20more%20impactful.%20Experience%20it%20now.", "",
        "width=600,height=355" +
            ",status=1,location=1,resizable=yes"
    );  
});

$('.twitter').on('click', function() {

    var loc = location.href;

    window.open('http://twitter.com/home?status=Be%20among%20the%20first%20to%20see%20the%20redesigned%20@nytimes%20site:%20' + loc + '', "",
    "width=600,height=355" +
        ",status=1,location=1,resizable=yes"
    );
});

// Sidebar menu
$('.navicon-button').click(function(){
    $('.header-container').toggleClass('open');
    $('.main-menu a').click(function() {
        $('.header-container').removeClass('open')
    });
});

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-46616077-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



