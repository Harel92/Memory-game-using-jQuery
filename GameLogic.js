$("document").ready(function(){
    var rows=6;
    var cols=5;
    
    var Img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
             "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"];
    
    // shuffle array
    function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}    
    // create the game
    var CreateGame= function Game(rows, cols)
    {
        $("#won").hide(1000);
        let temp=(rows*cols)/2;
        let count=0;
         var open=0;
         var photo1;
         var photo2;
        
        var table = $("<table></table>").appendTo("Main");
    
        shuffle(Img);
        for(let i=0 ; i< rows ; i++)
        {
            $("<tr></tr>").appendTo(table);    
            
            for(let j=0; j<cols ; j++)
            {
                let p="<img src="+Img[count]+">";
                count++;
                if(count==Img.length)
                    {
                    count=0;
                    shuffle(Img);    
                    }
                $("<td>"+p+"</td>").appendTo(table);
            }
        }
        
            
        $("td").on("click",function(event) {
                    
            
            if(open==2)
            {
                open=0;
                photo1.hide();
                photo2.hide();
            }
            
            
            if(open==0)
            {   
                 photo1=$(this).children('img');
                
                if(photo1.is(":hidden"))
                {
                    $(photo1).show();
                    open++;       
                }
            }
            
           else if(open==1)
            {
                 photo2=$(this).children('img');
                
                if(photo2.is(":hidden"))
                {
                    $(photo2).show();
                    let Moves=$("#Moves").text();
                    Moves++;
                    $("#Moves").text(Moves);
                    
                    if(photo1.attr('src')==photo2.attr('src'))
                    {
                        let Matches=$("#Matches").text();
                        Matches++;
                        $("#Matches").text(Matches);
                        open=0;
                        
                        if(Matches==temp)
                           $("#won").show(400);        
                    }
                    
                    else                                
                        open++;     
                }
                
                       
            }
}); 
        
     
    }
    
    CreateGame(rows,cols);
    $("img").hide();
 
  
$("#NewGame").on("click",function(event) {
    
    $("Main").html("");
    CreateGame(rows,cols);
    $("img").hide();
    $("#Moves").text(0);
    $("#Matches").text(0);
    
      
});    
       
  
    
});                  
                    