var time_hrs = new Date().getHours();
alert(time_hrs);

if ( time_hrs <= 11){
	document.getElementById("disp").innerHTML = "morning";
}
else if(time_hrs > 11 || time_hrs < 16){
	document.getElementById("disp").innerHTML = "afternoon"; 
}
else if(time_hrs > 16 || time_hrs < 19){
	document.getElementById("disp").innerHTML = "evening"; 
}if(time_hrs > 19 ){
	document.getElementById("disp").innerHTML = "night"; 
}