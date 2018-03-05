


$(document).ready(function(){

        var intervalId;
        var time = 31;
        var correct = 0;
        var incorect =0;
        var unanswered =0; 
    
        // $("#containter").on("click", "#startButton", function() {
    
        //     $("#containter").replaceWith("<div></div>");
            
            // alert("firstbutton");;
        
        

        $("#startbutton").on("click", run);
        $("#stop").on("click", stop);

        function run() {
            
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          }

          //  The decrement function.
        function decrement() {

        //  Decrease number by one.
        time--;
  
        //  Show the number in the #show-number tag.
        $("#clocktimer").html("<h2>" + time + "</h2>");
  
  
        //  Once number hits zero...
        if (time === 0) {
  
          //  ...run the stop function.
          stop();
  
          //  Alert the user that time is up.
          alert("Time Up!");
          window.location.href = "../../assets/otherhtmlpages/index3.html";
        }
      }
  
      //  The stop function
      function stop() {
  
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }
  
    //  Execute the run function.
      run();
         

    });
  






// });