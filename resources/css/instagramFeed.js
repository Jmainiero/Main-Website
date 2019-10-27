$(document).ready(function () {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7011344589',
        limit: 8,
        resolution: 'standard_resolution',
        accessToken: '7011344589.d90570a.c28039846eff42328bdc92d679036ad2',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });


});