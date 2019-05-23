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





 var total = 4*(bCarbs + lCarbs + dCarbs + bProteins + lProteins + dProteins) + 9*(bFats + lFats +dFats);

 console.log(total);

 document.getElementById("calorieTotal").innerHTML= total;

let result = document.getElementById("output");

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