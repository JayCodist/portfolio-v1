const checkEmail = email => /[a-z]+\d*@[a-z]+/i.test(email); 

document.getElementById("form-submit").addEventListener("click", e =>
{
	const name = document.getElementById("form-name").value;
	const message = document.getElementById("message").value;
	if (name.length && !/[a-z]{4,}/i.test(name))
	{
		document.getElementById("name-error").style.display = "block";
		document.getElementById("form-name").classList.add("error-input");
		e.preventDefault();
		return;
	}
	if (message.length && message.length < 20)
	{
		document.getElementById("message-error").style.display = "block";
		document.getElementById("message").classList.add("error-input");
		e.preventDefault();
		return;
	}
	const email = document.getElementById("email").value;
	const title = document.getElementById("form-title").value;
	if (message.length && name.length && checkEmail(email) && title.length)
	{
		document.querySelector("form").style.display = "none";
		document.getElementById("after-message").style.display = "block";
		e.preventDefault();
	}
});

document.getElementById("form-name").addEventListener("focus", e => 
{
	e.target.classList.remove("error-input");
	document.getElementById("name-error").style.display = "none";
});

document.getElementById("message").addEventListener("focus", e => 
{
	e.target.classList.remove("error-input");
	document.getElementById("message-error").style.display = "none";
});