$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "rss.builder.feedrss.builder.xml",
        crossDomain: true,
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {

    $('#load').fadeOut();

    $(xml).find("item").each(function () {

        $("ul").append('<li><div class="book"><div class="title">' + $(this).find("title").text() + '</div><div class="description">' + $(this).find("description").text() + '</div><div class="date">Îïóáëèêîâàíî ' + $(this).find("pubDate").text() + '</div></div> </li>');
        $(".book").fadeIn(1000);

    });
    
    $('img').attr({ width: 800 });
 
$(function()    {
    $(".main").jCarouselLite({
        auto: 2000,
        speed: 5000,
        visible: 1
    });
});

}