$(document).ready(function(){
  $(".popup-btn").on("click", function(){
    
    $.ajax({      
      url:"http://api.forismatic.com/api/1.0/?jsonp=?",
            dataType:'jsonp',
            data:{
              method:'getQuote',
              key:'457653',
              format:'jsonp',
              lang:'en'           
            },
      success: function(data){
        $(".text").text(data.quoteText);
        if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  } else { $(".author").text(data.quoteAuthor);}
      }, 
      error:console.log("error")
    })
  })
})

