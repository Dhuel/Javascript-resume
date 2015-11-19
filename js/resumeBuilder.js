/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name" : "Dhuel Fisher",
 	"role" : "Web developer",
 	"welcome_message" : "Welcome",
 	"contacts": {
 		"mobile": "202-644-3702",
 		"email":"dhuelfisher@gmail.com",
 		"github":"https://github.com/Dhuel",
 		"image_url": "https://media.licdn.com/media/AAEAAQAAAAAAAAR_AAAAJGRhMTZmZDI5LTJiNTctNDEzYi1hODFmLTU4MjdjMTUyOThmYw.jpg"
 	},
 	"skills": ["Javascript", "HTML", "CSS", "Inkscape", "VisualBasic"],
 	"blog": "dhuelfisher.com"
 };
 // $("#header").append(bio.name);
 var work = {
 	"jobs": [
 	{
 		"employer" : "Howard University",
 		"title": "Lab Administrator", 
 		"location": "Howard University Computer Learning & Design Center",
 		"dates" :"Fall 2013 – Spring 2015",
 		"description": "Devised an Ubuntu server which used a twitter API to post, receive and find tweets, then store to MySQL database. \
 		Designed and launched Bacula backup server on CentOS 6.0. \
 		Developed self-maintaining kiosks using Centos 6 to provide university students with information on sports, weather and news. \
 		Installed and operated Ubuntu 12.10 on Oracle’s Virtual Box software. \
 		Created an Apache web server to host Engineering wiki page. \
 		Generated a wedding registry using Salesforce development platform. \
 		Acted as technical liaison between engineering students and faculty."},		
 	{
 		"employer" : "Howard University",
 		"title": "Research Student	", 
 		"location": "Howard University College of Engineering",
 		"description": "LED Cube research Constructed a 16 X 16  cellular automaton display using  SimplyTronics RGB LED modules over power line communications ",
 		"dates" : "	Fall 2014 – Spring 2015"}
 	]};

 var projects = {"projects": [{
 				"title" : "Capital One Android Wear watch App ",
 				"dates" : "Fall 2014-Spring 2015",
 				"description" : "Developed an Android Wear app to enable user access to certain banking information quickly and effortlessly",
 				"images" : ["dhuelfisher.com", "https://dhuelfisherhcc710.wordpress.com/"]
 			}
 				]};
 var education = {
 	"schools" : [{
 		"name" :"Howard University",
 		"location":"Washington DC",
 		"degree": "B.Sc Computer Engineering",
 		"majors": ["Computer Engineering"],
 		"dates": "May 2015",
 		"url":"howard.edu"
 		},
		{
 		"name" :"University of Maryland Baltimore County",
 		"location":"Baltimore MD",
 		"degree": "M.S. Human Centered Computing",
 		"majors": ["Human Centered Computing"],
 		"dates": "May 2017",
 		"url":"umbc.edu"
 		}
 		],
 	"onlineCourses":[{
 		"title": "Javascript Basics",
 		"school":"Udacity",
 		"dates":"September 2015 - November 2015 ",
 		"url":"udacity.com"
 	}]
 };


function displaybio(){
	 var formattedName = HTMLheaderName.replace("%data%", bio.name);
	 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	 var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	 var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	 var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
 	 var formattedbioPic  = HTMLbioPic.replace ("%data%", bio.contacts.image_url);
 	 var formattedbioBlog  = HTMLblog.replace ("%data%", bio.blog);
	 $("#header").append(formattedName);
	 $("#header").append(formattedRole).css("color", "#058dc1")
	 $("#header").append(formattedmobile).append(formattedemail);
	 $("#header").append(formattedgithub).append(formattedbioPic).append(formattedbioBlog);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var i = 0;
		while (i < 3)
			{
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
				i++;
		};
	};
};
displaybio();

function displaywork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkdates);
		var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatteddescription);
	}	
}
displaywork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}
//  $("#main").append(internationalizeButton);
// inName("Dhuel Fisher");

projects.display = function(){
		for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedprojecttitle);
		var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedprojectDate);
		var formattedprojectdescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectdescription);
	}
}
projects.display();

function displayeducation(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedschooldegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolname);
		$(".education-entry:last").append(formattedschooldegree);
		$(".education-entry:last").append(formattedschoollocation);
		$(".education-entry:last").append(formattedschoolDates);
	}
	for( classes in education.onlineCourses){
		$(".education-entry:last").append(HTMLonlineClasses);
		var formatted_on_title = HTMLonlineTitle.replace("%data%", education.onlineCourses[classes].title);
		var formatted_on_school = HTMLonlineSchool.replace("%data%", education.onlineCourses[classes].school);
		var formatted_on_dates = HTMLonlineDates.replace("%data%", education.onlineCourses[classes].dates);
		//var formatted_on_url = HTMLonlineURL.replace("%data%", education.onlineCourses[classes].url);
		$(".education-entry:last").append(formatted_on_title);
		$(".education-entry:last").append(formatted_on_school);
		$(".education-entry:last").append(formatted_on_dates);
		//$(".education-entry:last").append(formatted_on_url);
	}
}
displayeducation();

$("#mapDiv").append(googleMap);



