var arr = ["tom",
			"jerry",
			"spike",
			"tyke",
			"nibbles"];


var text= "";
for(i = 0; i<arr.length; i++){
	text += arr[i] + "<br>";
}

document.getElementById("disp").innerHTML = text;