
$(window).load(function(){
    setTimeout(function() {
    	$('.loader').fadeOut();
    	$('body').css('overflowY', 'auto'); 
    }, 3000);
});

$(document).ready(function() {

	// console.log('u');
	sessionStorage.clear();


	var = loadPadawan = function() {
		var recall = sessionStorage.getItem("memory");
		// console.log(recall);
		$.ajax({
			type: 'GET',
			url: '/yodas',
			dataType: 'json',
			data:{sentence:recall},
			success: function (data) {
				if (recall === null) {
    				// console.log('nothing Box1');
    			}
    			else {
    				// console.log('yes box1');
					for (var i=0 ; i < data.length ; i++){
						if(data[i]["sentence"] === recall){
							var toTranslate = '<p id="padawanStuff">Padawan:&nbsp;'+recall+'</p>'
							$('#padawanStuff').remove();
    						$('#beauty2').append(toTranslate);
    						return false;
						}
						else {
							// console.log('not there');
						}
					}
				}
			},
			error: function(data) {
    			// console.log('error box1');
			}
		});
	}


	var = loadYoda = function() {
		// console.log('uhOh')
		var recall = sessionStorage.getItem("memory");
		// console.log(recall);
		if (recall === null) {
    					// console.log('nothing box2');
    				}
    	else {
			$.ajax({
				type: 'GET',
				url: '/yodas',
				dataType: 'json',
				data:{sentence:recall},
				success: function (data) {
      				// console.log('yes box2');

      				fetch("//api.funtranslations.com/translate/yoda.json?text=" + recall).then(function(response) {
        				if (!response.ok) {
            				loadError();
        				}
        				else {
        					$.getJSON("//api.funtranslations.com/translate/yoda.json?text=" + recall, function(data){
								var toTranslate2 = '<p id="yodaStuff">Yoda:&nbsp;'+data.contents.translated+'</p>'
								$('#yodaStuff').remove();
      							$('#beauty2Box2').append(toTranslate2);
   							});
        				}
    				})
				},
				error: function(data) {
    				loadError();
				}
			});
		}
	}
});


loadError = function() {
	var toTranslate2 = '<p id="yodaStuff">Yoda:&nbsp;Not ready, you are.<br><br>(psst..server down, please try again in a few hours...)</p>'
	$('#yodaStuff').remove();
    $('#beauty2Box2').append(toTranslate2);
}