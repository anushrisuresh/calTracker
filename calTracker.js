

var result = document.getElementById("result").innerHTML;
var age = document.getElementById("age").value;
var height = document.getElementById("height").value;
var gender = document.getElementById("gender").value;
var weight = document.getElementById("weight").value;
var PA     =document.querySelector(".PA").value;
var sedentary = document.getElementById("1").value;
var lowactive = document.getElementById("2").value;
var active =document.getElementById("3").value;
var veryactive =document.getElementById("4").value;

console.log('yo');

function calculateDailyRequirement()

{
	if(gender === 'Female'){

		switch(PA){

			case sedentary :
		     result = 387-7.31*age + 1*(10.9*weight + 660.7*height);
			break;

			case lowactive :
			 result = 387-7.31*age + 1.14*(10.9*weight + 660.7*height);
			break;

			case active :
			  result = 387 -7.31*age + 1.27*(10.9*weight + 660.7*height);
			break;

			case veryactive :
			 result = 387- 7.31*age + 1.45*(10.9*weight + 660.7*height);
			break;
		}

       }     

    else{

    	switch(PA){

    		case sedentary :
			return result = 864 - 9.72*age + PA*(14.2*weight + 503*height);
			break;

			case lowactive :
			return result = 864 -9.72*age + PA*(14.2*weight + 503*height);
			break;

			case active :
			return result = 864 -9.72*age + PA*(14.2*weight + 503*height);
			break;

			case veryactive :
			return result = 864- 9.72*age + PA*(14.2*weight + 503*height);
			break;


    	}

            }
        
    
}
console.log('hey');
