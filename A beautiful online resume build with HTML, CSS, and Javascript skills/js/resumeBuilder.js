/*
code to build the resume will go here.
 */

//$("#header").append();
//$("#main").append("Denys");

//var awesome = "My name is Denys and I am awesome!";
//fun = awesome.replace("awesome", "fun");

//console.log(awesome);
//$("#main").append(awesome);
//$("#main").append(fun);

var name = "Denys Stanislavskyi";
var role = "Web and Android Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);  //insert at the end
$("#header").prepend(formattedName); //insert at the beginning



// Bio 
var bio = {
	"name" : "Denys Stanislavskyi",
	"role" : "Web and Android Developer",
	"contact_info" : {
		"email" : "dstanislavskyi@gmail.com",
		"mobile": "+48574703822",
		"github": "DenStanislavskyi", 
		"location" : "Gdansk"
	},
	"welcome_message" : "Welcome to my resume Webpage!",
	"skills" : ["Python", "HTML", "CSS", "JavaScript", "Android studio", "GIT" ],
	"pictureURL" : "images/den.jpg"
}
 bio.display= function(){
 	var biopic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").append(biopic);
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
	$("#header").append(formattedHTMLmobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contact_info.email);
	$("#header").append(formattedHTMLemail);
	$("#lets-connect").append(formattedHTMLemail);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contact_info.location);
	$("#header").append(formattedlocation);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contact_info.github);
	$("#header").append(formattedHTMLgithub);
	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
	$("#header").append(formattedHTMLwelcomeMsg);
	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
    }
 }




//var work = {
	//"position": "Developer"
//}


var education = {
	
	"schools": [
	 {
	   "name": "Politechnika Gdańska",
	  "degree": "Master's",
	  "major": "CS",
      "years": "2017-present day",
      "city": "Gdańsk, Poland"
	 },

	 {	
	  "name": "National Mining University",
	  "degree": "Bachelor's",
	  "major": "CS",
      "years": "2012-2016",
      "city": "Dnipro, Ukraine"
	 }
	],
	"onlineCourses": [
		{
			"title": "Blockchain Developer Nanodegree Program",
			"school": "Udacity",
			"date": "2020"
		},
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"date": "2019"
		}
	]

}

   education.display = function(){
   	for (school in education.schools){
   		$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedschoolName);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedschoolDegree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
			$(".education-entry:last").append(formattedschoolDates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
			$(".education-entry:last").append(formattedschoolLocation);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedschoolMajor);
   	}
	$(".education-entry:last").append(HTMLonlineClasses);
   	for (course in education.onlineCourses){
   			
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedonlineTitle);
			var formattedonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedonlineschool);
			var formattedonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedonlinedate);
   	}
   }



var projects = {
	"projects" : [
	  {
	  	"title": "Student project: Remote monitoring system on smartphone or tablet ",
	  	"dates": "2017",
	  	"description": "Two applications build with Android Studio for client and server mobile devices." 
	  },
	  {
	  	"title": "Student project: Application for Android devices, used by customers to learn English ",
	  	"dates": "2016",
	  	"description": "An applications build with Android Studio for mobile devices." 
	  }
	]
}


var interests = {"interests":"Creating web-sites and mobile applications, reading, swimming"}
			var formattedi = HTMLinterests.replace("%data%", interests.interests);
			$("#interests").append(formattedi);
		
			

	
/*

		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      		$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      		$(".work-entry:last").append(formattedDescription);
		}
		
 */
   $(document).click(function(loc){
   	var x = loc.pageX;
   	var y = loc.pageY;
   	logClicks(x,y);
   });

   projects.display = function(){
   	for (project in projects.projects){
   		$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      		$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      		$(".project-entry:last").append(formattedDescription);
		 
		 	//if (projects.projects[project].images.length > 0){
		 	//	for (image in projects.projects[project].images){
		 	//		var formattedImage = HTMLprojectDescription.replace("%data%", projects.projects[project].images[image]);
      		//		$(".project-entry:last").append(formattedImage);
		 	//	}
		 	//}

   	}
   }
 projects.display(); 
 bio.display(); 
 education.display(); 