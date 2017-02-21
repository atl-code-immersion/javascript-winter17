function changeDivs() {
	//add or replace HTML text inside an element with a certain ID
	document.getElementById("div1").innerHTML = "<em>Something changed here...</em>";

	//add a class to an element with a certain ID
	document.getElementById("div2").className = "nice-div";

	//add an ID to an element with a certain ID
	document.getElementById("div3").id = "cool_id";
}