



$(document).ready(function(){

  var intervalId;
  var time = 11;
  var correct = 0;
  var incorrect =0;
  var unanswered =5; 
  window.location = '../../assets/otherhtmlpages/index3.html';


  // $("#containter").on("click", "#startButton", function() {

  //     $("#containter").replaceWith("<div></div>");
      
      // alert("firstbutton");;
  
  

  $("#startbutton").on("click", run);
  $("#stop").on("click", stop);

        function run() {
            
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          }


        function decrement() {

        time--;

        $("#clocktimer").html("<h2>" + time + "</h2>");


        if (time === 0) {

          stop();

          alert("Time Up!");
          window.location.href = "../../assets/otherhtmlpages/index3.html";
        }
      }

        function stop() {


          clearInterval(intervalId);
        }

        run();
   

// });
     

      
        $("#queston2").click(function () {
            var selectedValue = $("input[value='Plato']:checked").val();
                      
            if (selectedValue) {
                correct++
                $("#correctAnswers").text(correct);
                alert("Hello, your favorite bird= " + selectedValue);
            };
          });

            $("#queston2").click(function () {
              var selectedValue = $("input[value='Achermus']:checked").val();
                       
              if (selectedValue) {
                  incorrect++
                  $("#incorrectAnswers").text(incorrect);
                  
              };

          });
            $("#queston2").click(function () {
              var selectedValue = $("input[value='Nero']:checked").val();
                        
              if (selectedValue) {
                  incorrect++
                  $("#incorrectAnswers").text(incorrect);
                 
              };

            });
            $("#queston2").click(function () {
            var selectedValue = $("input[value='Eugammon']:checked").val();
                    
            if (selectedValue) {
                incorrect++
                $("#incorrectAnswers").text(incorrect);
                
              };

            });






        $("#queston2").click(function () {
          var selectedValue = $("checked").val();
          // var selectedValue2 = $("input[value='Eugammon':checked").val();
          
          if (selectedValue) {

              unanswered++
              $("#incorrectAnswers").text(unanswered);
              alert("Hello, your favorite bird= " + selectedValue);
          };

    });



});