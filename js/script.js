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
  placeCorrectLetters(myWord);
}
function placeCorrectLetters(myArr)
{
    var positions = ["row","column","diagonal"];
    for(var i=;<i<myArr.length;i++)
    {var orientation = 
    positions[Math.floor(Math.random()*positions.length)];
    alert(orientation);
    var start = 
    Math.floor(Math.random()*$(".individual").length;
    var myRow = $(".individual:eq(" + start + 
    ")").data("row");
    var myColumn = $(".individual:eq(" + start +
    ")").data("column");
    $(".individual:eq("+ start + ")").html("A");
    //console.log(myArr[i] + " : " + orientation + " : " start + " : " + myRow + " : " + myColumn);
     if(orientation == row)
         {
           if((myColumn*1) + myArr[i].length <=12)
               console.log("space in row: " + myArr[i] + " : 
               " + start);
           else
               console.log("space in row: " + myArr[i] + 
               " : " + start);
         }
        else if(orientation == "column")
         {
                
           if((myRow*1) + myArr[i].length <=12)
               console.log("space in column: " + myArr[i] + " : 
               " + start);
           else
               console.log("space in column: " + myArr[i] + 
               " : " + start);
         }
    }
}
