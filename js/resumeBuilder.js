var bio = {
	"name" : "Kevin Wong",
	"role" : "Web_Developer",
	"contacts" : {
	"moblie" : 4154380231,
	"github" : "kkwokwai22",
	"email" : "kkwokwai22@gmail.com",
	"location" : "San Francisco, CA",
	},
	"welcomeMessage": "Hi the name is Kevin, and I'm aiming to become a developer",
	"skills": [
		"HTML/CSS", "FrontEnd", "JavaScript", "Android Studio", "jQuery"
		],
	"bioPic": "images/fry.jpg"
}


	
var work = { 
		"jobs": [
		{	 
			"employer": "Chinese Immersion School of De Avila", 
			"title": "School Coach",
			"dates": "08/2013 - 08/2015",
			"location": "San Francisco, CA",
			"description": "hello world"
		
		}, 
	{ 
			"employer": "Glo", 
			"title": "School Coach",
			"dates": "4/12 - 3/2",
			"location": "San Francisco, CA",
			"description": "hello world"
	}	
  ]	
}

var projects = {
	"projects": [
	{
		"title": "Developer",
		"dates": 2015,
		"description": "Front-end"
	},
	{
		"title": "Developer",
		"dates": 2015,
		"description": "Front-end"
	}
	]
	}

var education = {
	"schools": [
	{
		"name": "San Francisco State University",
		"degree": "Recreation (community services)",
		"dates": 2014,
		"website": "www.sfsu.edu"
	}, 
	{
		"name": "Foothill College",
		"degree": "Recreation, parks, tourism",
		"dates": 2012,
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





var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.moblie);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic); 
$("#header").prepend(formattedName);	
$("#header").prepend(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);


// This is to loop through the skill[array] and append it to %data% 
$("#header").append(formattedSkill);
for (i = 0; i < bio.skills.length; i++) { 
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#header").append(formattedSkill);
	}

var displayWork = function() { 
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);	
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedWorkEmployerTitle); 
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
		$(".work-entry:last").append(formattedWorkDates); 
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}	
}

displayWork();

function displayEducation () {
    for (school in education.schools)  {
        $("#education").append(HTMLschoolStart);

        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        formattedSchoolDates = HTMLschoolDates.replace("%Data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

    }
  };

displayEducation();




$("#projects").append(HTMLprojectStart);
var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
$(".project-entry:last").append(formattedTitle);
var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
$(".project-entry:last").append(formattedDates);
var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedDescription);


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClick(x,y);
});

function inName(name) {  
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);












