function changeInput() {
	var nameOfUser = document.getElementById("userName").value;
	console.log(nameOfUser);
	document.getElementById("userName").value = "Your name is " + nameOfUser;
	//document.getElementById("userName").value = "Johnny Bravo";
}