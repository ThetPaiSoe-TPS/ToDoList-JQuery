
  $('.fa-plus').on('click', function () {
    $('#inputBox').slideToggle();
  });

  $('#inputBox').keypress(function(event){
    if(event.which == 13){
      $('ul').prepend('<li><div><span class="trash"><i class="fa fa-trash"></i></span><span class="text">'+ $('#inputBox').val() +'</span><span class="pencil"><i class="fa fa-pencil"></i></span></div></li>');
      $('#inputBox').val('');
    }
  })
  
  $('ul').on('click', 'span.text', function () {
    $(this).toggleClass('lineThrough');
  });

  $('ul').on('click', 'span.trash', function (){
    $(this).parentsUntil('ul').fadeOut(800, function(){
      $(this).parentsUntil('ul').remove();
    });
  })
  
  $('ul').on('click', 'span.pencil', function(){
    const oldValue= $(this).parent().text();
    
    $(this).parent().html('<input type="text" class="editInput" /> ');

    $('.editInput').keypress(function (event) { 
      
      if(event.which== 13){
        if($(this).val().length> 0){
          $(this).parent().html('<span class="trash"><i class="fa fa-trash"></i></span><span class="text">'+ $(this).val() +' </span><span class="pencil"><i class="fa fa-pencil"></i></span>');
        }
        else{
          $(this).parent().html('<span class="trash"><i class="fa fa-trash"></i></span><span class="text">'+ oldValue +' </span><span class="pencil"><i class="fa fa-pencil"></i></span>');
        }
      }
     })
    
    
    
  })
  