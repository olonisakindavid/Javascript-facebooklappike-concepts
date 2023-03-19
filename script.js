var database = [
	{
		username: "David",
		password: "123"
	},
	{
		username: "Favour",
		password: "133"
	},
	{
		username: "Play",
		password: "143"
	}
];

var newsFeed = [
	{
		username: "Oguibe",
		timeline: "open to looking for solar jobs"
	},
	{
		username: "Jojo",
		timeline: "Ai rocks men!"
	},
	{
		username: "obama",
		timeline: "Ai rocks men!"
	}
];
//the arguements can be named anything
function isUserValid(username, password){
		for(var i=0 ; i<database.length; i++){
			if (database[i].username === username 
				&& database[i].password === password){
				return true
		}
	}
	return false;	
}


 function signIn(username, password){
	 if (isUserValid(username, password)){
	 	console.log(newsFeed);
	 } 
	
	 else{
	 	alert("sorry, wrong username and password");
	 }
 }
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Insert your password here");

signIn(userNamePrompt, passwordPrompt);
