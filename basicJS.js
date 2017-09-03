//for/in loop

var new_obj = {height:5.22,
				weight:65,
				age:25,
				speed:"fast"};

var text = "";
var x;

for(x in new_obj){
	text += new_obj[x] + "<br>";
}

document.getElementById("disp").innerHTML = text;