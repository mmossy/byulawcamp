
//set count

if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
	document.getElementById("glass").src="Empty-Glass.jpg";
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
	console.log(localStorage.getItem("count"));
	if (Number(localStorage.getItem("count"))==0)
	{
		document.getElementById("glass").src="Empty-Glass.jpg";
	}
}

update();

//add one to count

/*function count()
{
	if (Number(localStorage.getItem("count"))<=6)
	{
		localStorage.setItem("glassNumber",0);
	}

}

function createNewGlass(glassNumber)
{
	var img = document.createElement("IMG");
	img.setAttribute("src", "Empty-Glass.jpg");
	var imgName = "glass"+ glassNumber;
	img.setAttribute("id", imgName);


}
*/
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	switch (Number(localStorage.getItem("count"))){
	case 0:
	console.log("at 0");
	document.getElementById(elementid).src="Empty-Glass.jpg";
	break;
	case 1:
	document.getElementById(elementid).src="1Glass.jpg";
	break;
	case 2:
	document.getElementById(elementid).src="2Glasses.jpg";
	break;
	case 3:
	document.getElementById(elementid).src="3Glasses.jpg";
	break;
	case 4:
	document.getElementById(elementid).src="4Glasses.jpg";
	break;
	case 5:
	document.getElementById(elementid).src="5Glasses.jpg";
	break;
	case 6:
	document.getElementById(elementid).src="6Glasses.jpg";
	break;
}
	update();
}

//reset count
function reset() {
	if (confirm("Are you sure you want to reset?")) {
    	localStorage.setItem("count",0);
		update();
	}
}
