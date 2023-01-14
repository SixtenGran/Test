//JavaScript
$(document).ready(function(){
setColor();
function setColor(){
     var colors=["#33ccff", "#ffff99","#cc6699"];
      var color =Math.floor(Math.random() * (colors.length));
  
    $('body').toggleClass('clicked');
    setTimeout(function(){
     $('.clicked').css("background-color", colors[color]);
    $('body').removeClass('clicked');
    }, 200)  
  }
  
   $('#gen').on("click", function(){
    setColor();
  });
  
  
});