



$(document).ready(function(){

  var intervalId;
  var time = 31;
  var correct = 0;
  var incorrect =0;
  var unanswered =0; 
 
 

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
          window.location.href = "../../assets/otherhtmlpages/endpage.html";
        }
      }
        function stop() {
          clearInterval(intervalId);
        }

        run();
   

          $("#queston1").click(function () {
            var selectedValue = $("input[value='Karl Marx']:checked").val();
                      
            if (selectedValue) {
                correct++
                $("#correctAnswers").text(correct);              
            };
          });
            $("#queston1").click(function () {
              var selectedValue = $("input[value='John Locke']:checked").val();
                      
              if (selectedValue) {
                  incorrect++
                  $("#incorrectAnswers").text(incorrect);                 
              };
          });
            $("#queston1").click(function () {
              var selectedValue = $("input[value='Vladimir Lenin']:checked").val();
                        
              if (selectedValue) {
                  incorrect++
                  $("#incorrectAnswers").text(incorrect);                 
              };
            });
            $("#queston1").click(function () {
            var selectedValue = $("input[value='Friedrich Nietzsche']:checked").val();
                    
            if (selectedValue) {
                incorrect++
                $("#incorrectAnswers").text(incorrect);                
              };
            });


      
        $("#queston2").click(function () {
            var selectedValue = $("input[value='Plato']:checked").val();
                      
            if (selectedValue) {
                correct++
                $("#correctAnswers").text(correct);
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


            $("#queston3").click(function () {
              var selectedValue = $("input[value='The Analects']:checked").val();
                        
              if (selectedValue) {
                  correct++
                  $("#correctAnswers").text(correct);
                 
              };
            });
              $("#queston3").click(function () {
                var selectedValue = $("input[value='The Bhagavad Gita']:checked").val();
                         
                if (selectedValue) {
                    incorrect++
                    $("#incorrectAnswers").text(incorrect);                 
                };
            });
              $("#queston3").click(function () {
                var selectedValue = $("input[value='The Koran']:checked").val();
                          
                if (selectedValue) {
                    incorrect++
                    $("#incorrectAnswers").text(incorrect);                 
                };
              });
              $("#queston3").click(function () {
              var selectedValue = $("input[value='The Zen Way']:checked").val();
                      
              if (selectedValue) {
                  incorrect++
                  $("#incorrectAnswers").text(incorrect);                
                };
              });
  

              $("#queston4").click(function () {
                var selectedValue = $("input[value='John Stuart Mill']:checked").val();
                          
                if (selectedValue) {
                    correct++
                    $("#correctAnswers").text(correct);
                };
              });
                $("#queston4").click(function () {
                  var selectedValue = $("input[value='Sir Thomas More']:checked").val();
                           
                  if (selectedValue) {
                      incorrect++
                      $("#incorrectAnswers").text(incorrect);                 
                  };
              });
                $("#queston4").click(function () {
                  var selectedValue = $("input[value='David Hume']:checked").val();
                            
                  if (selectedValue) {
                      incorrect++
                      $("#incorrectAnswers").text(incorrect);                 
                  };
                });
                $("#queston4").click(function () {
                var selectedValue = $("input[value='Gottfried Leibniz']:checked").val();
                        
                if (selectedValue) {
                    incorrect++
                    $("#incorrectAnswers").text(incorrect);                
                  };
                });
    

                $("#queston5").click(function () {
                  var selectedValue = $("input[value='Immanuel Kant']:checked").val();
                            
                  if (selectedValue) {
                      correct++
                      $("#correctAnswers").text(correct);
                  };
                });
                  $("#queston5").click(function () {
                    var selectedValue = $("input[value='John Stuart Mill']:checked").val();
                             
                    if (selectedValue) {
                        incorrect++
                        $("#incorrectAnswers").text(incorrect);                 
                    };
                });
                  $("#queston5").click(function () {
                    var selectedValue = $("input[value='Aristotle']:checked").val();
                              
                    if (selectedValue) {
                        incorrect++
                        $("#incorrectAnswers").text(incorrect);                 
                    };
                  });
                  $("#queston5").click(function () {
                  var selectedValue = $("input[value='Sir Francis Bacon']:checked").val();
                          
                  if (selectedValue) {
                      incorrect++
                      $("#incorrectAnswers").text(incorrect);                
                    };
                  });
      



});