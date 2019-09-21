//
// The backend value is the url for the heroku hosted API.
// To test locally, run `npm start` and set backend instead, to "http://localhost:3000"

const backend = "http://localhost:3000";
//const backend = "https://sleepy-woodland-98503.herokuapp.com";

// Ping heroku host to "wake" it. The hosted API on heroku sleeps after inactive interval and takes
// around 15 seconds to wake. So ping it during pageload to start awakening and speed up the process
fetch(backend);

// SIGN UP
document.getElementById("signup-signup-button").addEventListener("click", e => 
{
	let name = document.getElementById("signup-name").value;
	let email = document.getElementById("signup-email").value;
	let password = document.getElementById("signup-password").value;
	let url = `${backend}/signup?name=${name}&email=${email}&password=${password}`;

	// Allow HTML input validation, but prevent reload. Neat, right?
	if (name.length && /\w+@\w/.test(email) && password.length)
		e.preventDefault();
	else
		return;

	// Initiate sign up requests, handle possible errors
	fetch(url).then(res => res.json()).then(json => 
		{
			if (json.code == 427)
			{
				document.getElementById("email-exists").style.display = "block";
				document.getElementById("signup-email").focus();
				document.getElementById("signup-email").select();
			}
			else
			{
				// Sign up is successful 
				// ! Heads up !  Edit this stub. Maybe replace form with modal/message or redirect
				//
				alert("Successful sign up for: " + JSON.stringify(json));
			}
		}).catch(err => console.log(err));
});

//LOGIN
document.getElementById("login-login-button").addEventListener("click", e => 
{
	let email = document.getElementById("login-email").value;
	let password = document.getElementById("login-password").value;
	let url = `${backend}/login?email=${email}&password=${password}`;

	// Allow HTML input validation, but prevent reload. Neat, right?
	if (/\w+@\w/.test(email) && password.length)
		e.preventDefault();
	else
		return;

	// Initiate login request, handling possible errors
	fetch(url).then(res => res.json()).then(json => 
		{
			if (json.code == 496)
			{
				document.getElementById("email-not-exist").style.display = "block";
				document.getElementById("login-email").focus();
				document.getElementById("login-email").select();
			}
			else if (json.code == 419)
			{
				document.getElementById("wrong-password").style.display = "block";
				document.getElementById("login-password").focus();
				document.getElementById("login-password").select();
			}
			else
			{
				// Login is successful 
				// ! Heads up !  Edit this stub. Maybe replace form with modal/message or redirect
				//
				alert("Successful login for: " + JSON.stringify(json));
			}
		}).catch(err => console.log(err));
});

//
// Make error message go away once user starts typing
//
document.getElementById("login-email").addEventListener("input", () => 
{
	document.getElementById("email-not-exist").style.display = "none";
	document.getElementById("wrong-password").style.display = "none";
});
document.getElementById("login-password").addEventListener("input", () => 
{
	document.getElementById("email-not-exist").style.display = "none";
	document.getElementById("wrong-password").style.display = "none";
});
document.getElementById("signup-email").addEventListener("input", () => 
	document.getElementById("email-exists").style.display = "none")


// For shift animation Login | Signup (1 second CSS animation)
document.getElementById("login-signup-button").addEventListener("click", e => 
{
	e.preventDefault();
	document.getElementById("login").style.left = "0";
	document.getElementById("signup").style.left = "100vw";
	document.getElementById("login").className = "left-shift";
	document.getElementById("signup").className = "left-shift";

	// Pass focus to the #name element after animation
	setTimeout(() => document.getElementById("signup-name").focus(), 1300);
});
document.getElementById("signup-login-button").addEventListener("click", e => 
{
	e.preventDefault();
	document.getElementById("login").style.left = "-100vw";
	document.getElementById("signup").style.left = "0";
	document.getElementById("signup").className = "right-shift";
	document.getElementById("login").className = "right-shift";

	// Pass focus to the #email element after animation
	setTimeout(() => document.getElementById("login-email").focus(), 1300);
});
