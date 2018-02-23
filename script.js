
           	
           //hide the tip amount on load
           document.getElementById("totalTip").style.display = "none";
   			document.getElementById("each").style.display = "none";

   			//clicking the button calls
   		function calculateTip(){
   			//store the data of inputs
   			var billAmount =document.getElementById("billAmount").value;
   			var serviceQuality = document.getElementById("serviceQuality").value;
   			var numPeople = document.getElementById("totalPeople").value;

   			//quick validation
   			if (billAmount === "" || serviceQuality === 0) {
   				window.alert("please enter some value!");
   				return;
   			}

   			//check to see if input is empty or not
   			if(numPeople === "" || numPeople <=1){
   				numPeople =1;
   				document.getElementById("each").style.display="none";
   			}
   			else{
   				document.getElementById("each").style.display="block";
   			}

   			//do some math
   			var total = (billAmount*serviceQuality)/numPeople;
   			total = Math.round(total*100)/100;
   			total = total.toFixed(2);

   			//Display the tip
   			document.getElementById("totalTip").style.display ="block";
   			document.getElementById("tip").innerHTML = total;
   		}

   		document.getElementById("calculate").onclick = function(){calculateTip();}

	
