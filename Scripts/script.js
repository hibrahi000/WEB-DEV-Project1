$(document).ready(function(){
  $("#contactBtn").click(function(){
  $("#contact").slideDown();
  $("#home").slideUp();
  $("#aboutUs").slideUp();
  $("#product").slideUp();
  });
});

$(document).ready(function(){
    $("#productBtn").click(function(){
    $("#product").slideDown();
    $("#home").slideUp();
    $("#aboutUs").slideUp();
    $("#contact").slideUp();
    });
  });

  $(document).ready(function(){
    $("#homeBtn").click(function(){
    $("#home").slideDown();  
    $("#contact").slideUp();
    $("#aboutUs").slideUp();
    $("#product").slideUp();
    });
  });

  $(document).ready(function(){
    $("#aboutBtn").click(function(){
    $("#aboutUs").slideDown();
    $("#home").slideUp();
    $("#contact").slideUp();
    $("#product").slideUp();
    });
  });

  $(document).ready(function(){
    $("#submitBtn").click(function(){
        alert("Successfully Submitted.")
    });
  });
