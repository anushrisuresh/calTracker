


function calculateDailyRequirement()
{


let age = document.getElementById("age").value;
let height = document.getElementById("height").value;
let gender = document.getElementById("gender").value;
let weight = document.getElementById("weight").value;
let PA     =document.querySelector(".PA").value;
let sedentary = document.getElementById("1").value;
let lowactive = document.getElementById("2").value;
let active =document.getElementById("3").value;
let veryactive =document.getElementById("4").value;

console.log(age);
console.log(gender);
console.log(PA);
console.log(active);


	if(gender === 'Female'){

		switch(PA){

			case sedentary :
		     var result = 387-7.31*age + 1*(10.9*weight + 660.7*height);
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
			 result = 864 - 9.72*age + PA*(14.2*weight + 503*height);
			break;

			case lowactive :
			 result = 864 -9.72*age + PA*(14.2*weight + 503*height);
			break;

			case active :
			 result = 864 -9.72*age + PA*(14.2*weight + 503*height);
			break;

			case veryactive :
			 result = 864- 9.72*age + PA*(14.2*weight + 503*height);
			break;


    	}

            }



            console.log(result);

             document.getElementById("output").innerHTML= result;

        
    



let result_serialized = JSON.stringify(result);

localStorage.setItem("result",result_serialized);


let result_deserialized = JSON.parse(localStorage.getItem("result"));

console.log(result_deserialized);
}

function calculateTotalCalories()
{
	let bCarbs = document.getElementById("bCarbs").value;
	let lCarbs = document.getElementById("lCarbs").value;
	let dCarbs = document.getElementById("dCarbs").value;

	let bProteins = document.getElementById("bProteins").value;
	let lProteins = document.getElementById("lProteins").value;
	let dProteins = document.getElementById("dProteins").value;

	let bFats = document.getElementById("bFats").value;
	let lFats = document.getElementById("lFats").value;
	let dFats = document.getElementById("dFats").value;


console.log(bCarbs);
console.log(bProteins);
console.log(bFats);

console.log(lCarbs);
console.log(lProteins);
console.log(lFats);

console.log(dCarbs);
console.log(dProteins);
console.log(dFats);





 var total = 4*(bCarbs+lCarbs+dCarbs+bProteins+lProteins+dProteins) + 9*(bFats+lFats+dFats);
 
 console.log(bCarbs+bProteins);
 console.log(4*(bCarbs+lCarbs+dCarbs+bProteins+lProteins+dProteins));
 console.log(bCarbs+lCarbs+dCarbs+bProteins+lProteins+dProteins);
 console.log(9*(bFats+lFats+dFats));
 console.log(bFats+lFats+dFats);
 console.log(total);

 document.getElementById("calorieTotal").innerHTML= total;

let result = document.getElementById("output").value;

console.log(result);

if(total>result){
	document.getElementById("lessOrMore").innerHTML= 'You have exceeded your calorie limit by' + (total-result) + '. You might want to go get some exercise :p';

}
else if(total === result){
	document.getElementById("lessOrMore").innerHTML= 'Your calorie consumption is perfect!';
}
else{
	document.getElementById("lessOrMore").innerHTML=  "You haven't met your calorie requirement by" + (result-total)+ ". You can grab something to eat.";

}


}