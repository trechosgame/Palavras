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
    var positions = ["row","column"];
    var nextLetter = 0;var newStart = 0;
    for(var i=0;i<myArr.length;i++)
    {
        var orientation = 
        positions[Math.floor(Math.random()*positions.length)];
        var start = 
        Math.floor(Math.random()*$(".individual").length);
        var myRow = $(".individual:eq(" + start + 
        ")").data("row");
        var myColumn = $(".individual:eq(" + start +
        ")").data("column");
        //console.log(myArr[i] + " : " + orientation + " : " start + " : " + myRow + " : " + myColumn);
        if(orientation == "row")
        {
            nextLetter = 1;
            if((myColumn*1) + myArr[i].length <=12)
            {
                   newStart = start;
                   console.log("space in row: " + myArr[i] + " : " + start + " : " + myColumn);
            }
            else
               {   
                   var newColumn = 12 - myArr[i].lenght;
                   newStart = $(".individual[data-row=" + myRow
                   + "][data-column=" + newColumn + 
                   "]" ).index();
                   console.log("no space in row: " + myArr[i] + 
                   " : " + start + " : " + myColumn + " : " + 
                   newStart);
               }
         }
         else if(orientation == "column")
         {
           nextLetter = 12;    
           if((myRow*1) + myArr[i].length <=12)
           {
               newStart = start;
               console.log("space in column: " + myArr[i] + 
               " : " + start + " : " + myRow);
           }
           else
               { 
                 var newRow = 12 - myArr[i].length;
                 newStart = $(".individual[data-row=" + newRow 
                 + "][data-column=" + newColumn + 
                 "]").index();
                 console.log("no space in column: " + myArr[i] 
                 + " : " + start + " : " + myRow  + ":" +
                 newStart);
               }
           }
           var characters = myArr[i].slipt("");
           var nextPosition = 0;
           $.each(characters, function(key, item){
             console.log(item);
             $(".individual:eq(" + (newStar+nextPosition) + 
             ")").html(item);
             nextPosition += nextLetter;
         
         })
    }
}
