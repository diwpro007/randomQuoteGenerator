"use strict";

var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";


var onJSONSucess = function (json) {
    $(".quote").html(json[0]["content"] + "\n<em> -" + json[0]["title"] + "</em>");
};

var populateQuote = function (url) {
    $.ajax({
        cache: false,
        url: url,
        dataType: "json",
        success: onJSONSucess,
        fail: function (jqXHR, status, err) {
            console.log(jqXHR + " " + status + " " + err);
        }

    });
}

$(document).ready(function () {

    populateQuote(url);
    //the random quote url
    $("#rand-quote").click(function () {
        //loading screen
        $(".quote").html('loading...');
        populateQuote(url);
    });

    //window.open('http://www.example.com'
    $("#tweet-quote").click(function () {
        //        console.log($(".quote").children()[0].innerHTML.trim());
        //        console.log($(".quote").children()[1].innerHTML.trim());
        var quote = $(".quote").children()[0].innerHTML.trim();
        var author = $(".quote").children()[1].innerHTML.trim();
        var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"" + quote + "\"" + author;
        window.open(tweetUrl);
    });
});