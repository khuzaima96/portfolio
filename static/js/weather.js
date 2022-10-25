
$('.weatherBtn').click(function(){


    $.ajax({
        type: 'GET',
        url: '/dashBoard',
        dataType: 'json',
        contentType: 'application/json',
        success: function(resp){
            var getLocation = resp['data'];
            var getDate = resp['Date'];
            var getTemp = resp['temp'];
                console.log(getLocation)
                console.log(getDate)
                console.log(getTemp)

            var showLocation = '<div class="location">'+ getLocation +'</div>';
            var showDate = '<div class="weatherDate">'+ getDate +'</div>';
            var showTemp = '<div class="weatherTemp">'+ getTemp +'</div>';
                console.log(showLocation)
                console.log(showDate)
                console.log(showTemp)

            $('.weatherHeader').append(showLocation);
            $('.weatherHeader').append(showDate);
            $('.weatherHeader').append(showTemp);    
        },
        error: function(err){
            console.log(err)
        },
    });
    

});


$('.newsBtn').click(function(){
    $.ajax({
    type: 'GET',
    url: '/news',
    dataType: 'json',
    contentType: 'application/json',
        success: function(resp){
            
                var newsI = resp['kilo'][0]['author'];
                var newsI2 = resp['kilo'][1]['title'];
                var newsI3 = resp['kilo'][2]['content'];
                var newsI4 = resp['kilo'][3]['description'];
                console.log(newsI)
                console.log(newsI2)
                console.log(newsI3)
                console.log(newsI4)
                var author = `<div>`+
                    `<p>${newsI}</p>`+ 
                `</div>`
                var title = `<div>`+
                    `<p>${newsI2}</p>`+ 
                `</div>`
                var content = `<div>`+
                    `<p>${newsI3}</p>`+ 
                `</div>`
                var description = `<div>`+
                    `<p>${newsI4}</p>`+ 
                `</div>`
                
                $('.weatherHeader').append(author);
                $('.weatherHeader').append(title);
                $('.weatherHeader').append(content);
                $('.weatherHeader').append(description);
                   
        }
    });
});


$('.prayerBtn').click(function(){
    $.ajax({
        type: 'GET',
        url: '/prayerTimes',
        dataType: 'json',
        contentType: 'application/json',
        success: function(resp){
            var cityName = resp['city'];
            var date = resp['date'];
            var salah = resp['salah'];
            for (var i=0; i<salah.length; i++){
                var prayer = salah[i]
                console.log(prayer)
            };
            console.log(prayer)
            console.log(cityName, date)

            var cityDiv = `<div>`+
            `<p>${cityName}</p>`+ 
        `</div>`

            var dateDiv = `<div>`+
            `<p>${date}</p>`+ 
        `</div>`;
       
       
        
           
            $('.weatherHeader').append(cityDiv)
            $('.weatherHeader').append(dateDiv)
           
        },
        error: function(err){
            console.log(err)
        },    
    });
});

