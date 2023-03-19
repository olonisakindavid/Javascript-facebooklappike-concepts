var database = [
{
	username: "David",
	password: "123"
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
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Insert your password here");
//the arguements can be named anything
function signIn(user, pass){
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	}
	else{
		alert("sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);



//recall 
//function declaration
function newFunction(){

}

//function expression
var newFunction = function name(){

};
or
var newFunction = function name(){
	
};

//calling or invoking a function

