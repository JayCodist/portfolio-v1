const mockTeam = [
	{
		name: "Mary Idomo",
		userName: "@Mary",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Ikechukwu Onu",
		userName: "@infokid",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Muritala Muideen",
		userName: "@Muideen MURITALA",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Ayobami Oguntolu",
		userName: "@Spark",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Adedolapo Olayinka",
		userName: "@Adedolapo Olayinka",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Adetohun Ogunbowale",
		userName: "@Adetohun",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Abdulsalam Shuaib",
		userName: "@Absallam",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Mbetobong Obot",
		userName: "@mbetobong",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Oyelami Temidayo",
		userName: "@Temidayo Oyelami",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Oluwatimilehin Idowu",
		userName: "@Timmix95",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Chisom Mbama",
		userName: "@Chisom Mbama",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Roland Decker",
		userName: "@roland",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Onyeme Michael",
		userName: "@Mykel",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Adeyemo Oyinade",
		userName: "@N",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Fabian Uzukwu",
		userName: "@Fabian",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Lumen Sheik",
		userName: "@denwia",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Olufemi Agbebi",
		userName: "@Femi A",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Frederick Damascus",
		userName: "@frede",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Udoh Kindness",
		userName: "@Udh",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Elisha Adewumni",
		userName: "@fortitude",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Mbah Chinedu",
		userName: "@Ned",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Ochuba Samuel",
		userName: "@esambooks",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Temitope Joan",
		userName: "@Temitope Joan",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Edima Inwang",
		userName: "@Edima",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Omodo Kome",
		userName: "@Ego-Oyinbo",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Akwagha Linda",
		userName: "@linda",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Henry Nnaji",
		userName: "@Woody",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Oluwatosin Obalana",
		userName: "@Oluwatosin Obalana",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Sylvester Edobor",
		userName: "@drlovenature",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Dennis Etiwe",
		userName: "@Dwise",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Kingseley Umujeyan",
		userName: "@kuic",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Abiodun Olushola",
		userName: "@Eshjay",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Ubong Udosen",
		userName: "@Ubong Udosen",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Taiwo Sadiq",
		userName: "@Taiwo Sadiq",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Inemesit Friday",
		userName: "@Inemesit",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Owolabi Bassit",
		userName: "@Bassit",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Boro Joseph",
		userName: "@Asylcreek",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Nedu Robert",
		userName: "@nedu",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Ogunsola Oyindamola",
		userName: "@Damola",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Elijah Adeleke",
		userName: "@Elijah Leke",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Winifred Ekwunife",
		userName: "@Winifred",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Omovoiye Cynthia",
		userName: "@OmovoiyeCynthia",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Tosin Akinnanu",
		userName: "@ripple",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Johnson Ubaezuonu",
		userName: "@Johnson",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Anwo-Ade Anuoluwapo",
		userName: "@Anu",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Bibirinbulu Aremieye",
		userName: "@Bibi Aremieye",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Idowu Festus",
		userName: "@Idowu Festus",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Oludolapo Adelana",
		userName: "@Dolapo Adelana",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Adesanmi Adedayo",
		userName: "@Adesanmi Adedayo",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Aniema Edet",
		userName: "@Edet",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Ogunbiyi Michael",
		userName: "@OgunbiyiMichael",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Ufonabasi Umo",
		userName: "@Ufonabasi Umo",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Precious Uwasi",
		userName: "@presh",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Lilian Anigbogu",
		userName: "@Lilian Anigbogu",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Asuliemen Isreal Efe",
		userName: "@asuliemen isreal",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Abdulraham Yusuf",
		userName: "@Abdulraham Yusuf",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Okpala Faith",
		userName: "@faithy",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Muhammad Zubairu",
		userName: "@MZ Ahmerd",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Clinton Mgbemene",
		userName: "@thisclinton",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Olanrewaju Odutayo",
		userName: "@Olanrewaju Odutayo",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Akinwunmi Akinbode",
		userName: "@peezykon",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Awoyemi Abayomi",
		userName: "@snoopymex",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Olaiya Shakiru",
		userName: "@olaiya",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Salami Saheed",
		userName: "@Salami Saheed",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Ayo Onamusi",
		userName: "@Ayo Onams",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Edem Essang",
		userName: "@Edemoski",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Nde Theresa",
		userName: "@Theresa Nde",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Shittu Toheebah",
		userName: "@Toheebah",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Nasrullah Olajide",
		userName: "@Nasrullah Olajide",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Ego Ugwu",
		userName: "@ego",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Sinmiloluwa Sobogun",
		userName: "@sinmi",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Jeffrey Akhidenor",
		userName: "@Denor",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Azeez Rizqah",
		userName: "@Rizqah",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Leonard Ugorji",
		userName: "@LeoNuch",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Ajayi Oluwatomisin",
		userName: "@Ajayi Oluwatomisin",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Okoro Sandra",
		userName: "@sandie",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Mubarak Aderogba",
		userName: "@mubarak",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Peace Onyekachi",
		userName: "@Newchassis",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Ogunrinola Oluwaseyi",
		userName: "@seyi",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Owoso Oluwasanmi",
		userName: "@sanmi",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Jude Ogbe",
		userName: "@Jude Ogbe",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Odo Joshua",
		userName: "@y3n0m",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Tobiloba Orekoya",
		userName: "@Tobilobaorek",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Maximillian Ikechukwu",
		userName: "@Milly",
		dept: "UI/UX",
		profilePic: null,
	},
];

const fillGrid = arr =>
{
	const grid = document.getElementById("team-grid");
	grid.style.display = "grid";
	while(grid.firstChild)
		grid.removeChild(grid.firstChild);
	
	for (let item of arr.sort((a, b) => a.name.localeCompare(b.name)))
	{
		let container = document.createElement("div");
		container.className = "team-member-div";

		let imgDiv = document.createElement("div");
		imgDiv.className = "profile-pic";
		let img = document.createElement("img");
		img.src = "images/profilepic.png";
		img.height = 100;
		img.alt = "UserPicture";
		imgDiv.appendChild(img);

		let fullName = document.createElement("div");
		fullName.appendChild(document.createTextNode(item.name));
		fullName.className = "full-name";
		let userName = document.createElement("div");
		userName.appendChild(document.createTextNode(item.userName));
		userName.className = "user-name";
		let dept = document.createElement("div");
		dept.appendChild(document.createTextNode(item.dept));
		dept.className = "dept";

		container.appendChild(imgDiv);
		container.appendChild(fullName);
		container.appendChild(userName);
		container.appendChild(dept);
		grid.appendChild(container);
	}
	if (grid.childNodes.length < 1)
	{
		let p = document.createElement("p");
		p.className = "no-matches";
		p.appendChild(document.createTextNode("Sorry. No such member in selected department"))
		grid.style.display = "block";
		grid.appendChild(p);
	}
};

document.querySelector("select").addEventListener("change", () =>
{
	filter();
});

document.querySelector("#search").addEventListener("input", () =>
{
	filter();
})

const filter = () =>
{
	const select = document.querySelector("select");
	const search = document.querySelector("#search").value.toLowerCase();
	let filter = "ALL", filtered;
	switch (select.value)
	{
		case "1": filter = "BACK END"; break;
		case "2": filter = "CONTENT"; break;
		case "3": filter = "FRONT END"; break;
		case "4": filter = "UI/UX"; break;
	}
	if (filter === "ALL") 
		filtered = mockTeam;
	else 
		filtered = mockTeam.filter(guy => guy.dept === filter)

	fillGrid(search ? filtered.filter(guy => 
		guy.name.toLowerCase().includes(search) || guy.userName.toLowerCase().includes(search)) : filtered);

}

fillGrid(mockTeam);

