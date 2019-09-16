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
