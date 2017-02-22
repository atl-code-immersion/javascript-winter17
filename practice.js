function changeDivs() {
	// append HTML text inside an element with a certain ID
	var x = document.getElementById("div1");
	x.innerHTML += " <em>Something changed here...</em>";
	// replace HTML text (even if there's nothing in it) inside an element with a certain ID
	// document.getElementById("div1").innerHTML = "<em>Something changed here...</em>";

	//add a class to an element with a certain ID
	document.getElementById("div2").className = "nice-div";

	//add an ID to an element with a certain ID
	document.getElementById("div3").id = "cool_id";
}

function checkValue() {
	var str = document.getElementById("checkitout").value;
	alert(str);
}