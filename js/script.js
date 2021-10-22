var myWords = ["EGG","MILK","BUTTER","JAM","OATS","SUGAR","BREAD","RUSK"];
$(document).ready(function(){
    arrangeGame();                   
});
function arrangeGame()
{
  $.each(myWords, function(key, item){
      $("#hint").append("<p>" + item + "</p>");
  });
  for(var i=1;i<=12;i++)
  {
     for(var j=1;j<=12;j++)
     {
       $("#letters").append("<div class=individual data-row=" + i + " data-column=" + j + "></div>");
     }
  }
  placeCorrectLetters();
}
function placeCorrectLetters()
{
    var positions = ["row","column","diagonal"];
    var orientation = 
    positions[Math.floor(Math.random()*positions.length)];
    alert(orientation);
    var start = 
    Math.floor(Math.random()*$(".individual").length;
    var myRow = $(".individual:eq(" + start + 
    ")").data("row");
    var myColumn = $(".individual:eq(" + start + ")").data("column") // parei em 1:37  no 4 video
}
