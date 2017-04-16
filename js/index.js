/**
 * Created by 89418 on 2017/2/26.
 */
$(function(){
    function resize(){
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth<768;
        $("#ad>.carousel-inner>.item").each(function(index,ele){
            var imgUrl = isSmallScreen?$(ele).data("image-xs"):$(ele).data("image-lg");
            $(ele).css("backgroundImage","url("+imgUrl+")");
            if(isSmallScreen){
                $(ele).html("<img src='"+imgUrl+"'/>");
            }else{
                $(ele).html("");
            }
        });
        setUiWidth();
    }

    function setUiWidth(){
        var ul_contents = $(".ul-wrapper>.nav-tabs");
        var width = 30;
        ul_contents.children().each(function(index,ele){
            width+=ele.offsetWidth;
//            console.log(width);
        });
        if(width > $(window).width()) {
            ul_contents
                .css("width", width + "px")
                .parent()
                .css("overflow-x","scroll");

        }else{
            ul_contents
                .css("width", "100%")
                .parent()
                .css("overflow","none");
        }
    }
    function getTabsTitle(){
//        console.log(222);
        $('#news .nav-stacked a[data-toggle="tab"]').on("click",function(){
            var title = "";
            title = $(this).data("title");
//            console.log(title);
            $("#news .title").text(title);

        })
    }
    function scliderAd(){
        var $carousel = $(".carousel");
//        console.log($carousel);
        var startX= 0,endX= 0,distance=0;
        $carousel.on("touchstart",function(e){
//            console.log(e.originalEvent.touches[0].clientX);
            startX =e.originalEvent.touches[0].clientX;
        });
        $carousel.on("touchmove",function(e){
//            console.log(e.originalEvent.touches[0].clientX);
            endX =e.originalEvent.touches[0].clientX;
        });
        $carousel.on("touchend",function(e){
//            console.log(e.originalEvent.touches[0].clientX);
            distance = Math.abs(startX-endX);
            if(distance>50){
                $(this).carousel(startX > endX ? 'next' : 'prev');
            }
        });
    }

    scliderAd();
    $(window).on("resize",resize).trigger("resize");
    $('[data-toggle="tooltip"]').tooltip();
    getTabsTitle();

});
