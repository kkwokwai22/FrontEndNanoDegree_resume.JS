var bio = {
	"name" : "Kevin",
	"role" : "Web_Developer",
	"contacts" : {
	"moblie" : 415-438-0231,
	"github" : "kkwokwai22",
	"email" : "kkwokwai22@gmail.com",
	"location" : "San Francisco",
	},
	"welcomeMessage": "Hi the name is Kevin, and I'm aiming to become a developer",
	"skills": [
		"HTML/CSS", "FrontEnd", "JavaScript", "Android Studio", "jQuery"
		],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name": "San Francisco State University",
		"cities": "San Francisco",
		"majors": "Recreation (community services)",
		"year": 2014,
		"website": "www.sfsu.edu"
	}, 
	{
		"name": "Foothill College",
		"cities": "San Jose",
		"minor": "Recreation (community services)",
		"year": "2012",
		"website": "www.foothill.edu"
	}
	],
	"onlineCourses": [
		{
		"title": "intro to programming",
		"school": "Udacity",
		"dates": 2015-2016,
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]		
}
	
	var work = { 
		"jobs": [
		{	 
			"employer": "Chinese Immersion School of De Avila", 
			"title": "School Coach",
			"dates": "08/2013 - 08/2015",
			"location": "San Francisco, CA",
		
		}, 
	{ 
			"employer": "Glo", 
			"title": "School Coach",
			"dates": "4/12 - 3/2",
			"location": "San Francisco, CA",
		
	}	
  ]	
}

	

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic); 
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkill);

// This is to loop through the skill[array] and append it to %data% 
for (i = 0; i < bio.skills.length; i++) { 
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#header").append(formattedSkill);
	}


var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates); 

$("#workExperience").append(HTMLworkStart);	
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDates); 


var 

















