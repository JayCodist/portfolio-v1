//const backend = "http://localhost:3000";
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS');

const backend = "https://sleepy-woodland-98503.herokuapp.com";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
// Ping heroku
fetch(proxyurl + backend);

// SIGN UP
document.getElementById("signup-signup-button").addEventListener("click", e => 
{
	let name = document.getElementById("signup-name").value;
	let email = document.getElementById("signup-email").value;
	let password = document.getElementById("signup-password").value;
	let url = `${proxyurl + backend}/signup?name=${name}&email=${email}&password=${password}`;

	if (name.length && /\w+@\w/.test(email) && password.length)
		e.preventDefault();
	else
		return;
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
				// Edit this
				alert("Successful sign up for: " + JSON.stringify(json));
			}
		}).catch(err => console.log(err));
});

//LOGIN
document.getElementById("login-login-button").addEventListener("click", e => 
{
	let email = document.getElementById("login-email").value;
	let password = document.getElementById("login-password").value;
	if (/\w+@\w/.test(email) && password.length)
		e.preventDefault();
	else
		return;
	let url = `${proxyurl + backend}/login?email=${email}&password=${password}`;

	fetch(url, {headers: headers}).then(res => res.json()).then(json => 
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
				// Edit this
				alert("Successful login for: " + JSON.stringify(json));
			}
		}).catch(err => console.log(err));
});


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

document.getElementById("login-signup-button").addEventListener("click", e => 
{
	e.preventDefault();
	document.getElementById("login").style.left = "0";
	document.getElementById("signup").style.left = "100vw";
	document.getElementById("login").className = "left-shift";
	document.getElementById("signup").className = "left-shift";
	setTimeout(() => document.getElementById("signup-name").focus(), 1300);
});
document.getElementById("signup-login-button").addEventListener("click", e => 
{
	e.preventDefault();
	document.getElementById("login").style.left = "-100vw";
	document.getElementById("signup").style.left = "0";
	document.getElementById("signup").className = "right-shift";
	document.getElementById("login").className = "right-shift";
	setTimeout(() => document.getElementById("login-email").focus(), 1300);
});
