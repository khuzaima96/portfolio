/*
var profileName = 'Hello';
$("h1").text(profileName);

$("button").click(function(){
    var btnSize = $("button").css('height');
    if (btnSize === '50px'){
        $('button').css({"height":"200px"});
    } else {
        $('button').css({"height":"50px"});
    }
});

$("button").click(function() {
    var nameBox = $('.nameInput').val();
    $('.nameOutput').append(nameBox);
    console.log(nameBox);
});
*/
 

$("button").click(function() {
    var emailBox = $('.emailInput').val();
    $('.emailOutput').append(emailBox);
    console.log(emailBox);
});

$('.contactHead').click(function(){
  $('.contactBox').toggle();

});


$('.submitBtn').off().on('click', function(){
    var name = $('.nameInput').val();
    var email = $('.emailInput').val();
    var comments = $('.commentsInput').val();

    var messages = '<div class= "messages">'+
            `<div>name  ${name}</div>`+
            `<div>email  ${email}</div>`+
            `<div>comment  ${comments}</div>`+
    '</div>';

    $('.outPut').html(messages);

    var payload = {
        'name': name,
        'email': email,
        'comments': comments
    };

    $.ajax({
        type: 'POST',
        url : '/saveMessage',
        data : JSON.stringify(payload),
        dataType: "json",
        contentType: "application/json",
        success: function(backendMsg){
                    alert(backendMsg['msg'])
        },
        error: function(err){
            console.log(err)
        },
    });

});


$(".website1").click(function() {
   
    var imgLink = `<div>` + `<img  src= 'http://127.0.0.1:5000/static/img/hirawin.png' >` + `</div>`;
    $(this).html(imgLink);
});


$('.searchBtn').click(function(){
var searchVal = $('.searchInput').val();
    console.log(searchVal)

    $.ajax({
        type: 'GET', 
        url : `/saveSearch?search=${searchVal}`,
        dataType: "json",
        contentType: "application/json",
        success: function(backendMsg){
                    alert(backendMsg['data'])
                    console.log('data')
        },
        error: function(err){
            console.log(err)
        },
    });
});


        /* 
        for (var i=0; i< getNews.length; i++){
            var newsLoop = getNews[i]['author'];
            console.log(newsLoop)
        }

          var showNews = '<div class= "news">' + `<div>  ${getNews}</div>`+  '</div>';
        console.log(showNews)
      */  
      
       
 
        














