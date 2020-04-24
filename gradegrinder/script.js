/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

       function calculator()
        {
                var worth1=parseFloat(document.getElementById("worth1").value);  
            //var worth = parseFloat(document.getElementById('worth1').value)*1;
            var grade1=parseFloat(document.getElementById("Assignment1").value * worth1);
           var worth2=parseFloat(document.getElementById("worth2").value); 
            var grade2=parseFloat(document.getElementById("Assignment2").value * worth2);
          var worth3=parseFloat(document.getElementById("worth3").value); 
            var grade3=parseFloat(document.getElementById("Assignment3").value* worth3);
          var worth4=parseFloat(document.getElementById("worth4").value); 
            var grade4=parseFloat(document.getElementById("Assignment4").value* worth4);
          
            var sum = worth1+worth2+worth3+worth4;
            var total=grade1+grade2+grade3+grade4;
            total = total/sum;

            var display=document.getElementById("outputDiv");

            display.innerHTML="Your average grade is\: " +total +"\n       The combined weigth of these assignments is: " + sum;
          
          var aplus = (85 - (total*sum/100))/ (100-total);
           document.getElementById("A+holder").innerHTML = aplus.toString();
           var a = (80 - (total*sum/100))/ (100-total);
          
           var worth3;
          var grade3;
          if (document.getElementById("worth3").value != null){
          worth3=parseFloat(document.getElementById("worth3").value); 
          grade3=parseFloat(document.getElementById("Assignment3").value* worth3);
          }else{
             worth3 = 0;
            grade3 = 0;
          }
        }