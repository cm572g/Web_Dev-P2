var bio = {
	    "name" : "Chuck Minnis",
	    "role" : "Network Architect",
	    "contacts" : {
	        "mobile" : "303-555-555",
	        "email" : "cm572g@att.com",
	        "github" : "githubuser",
	        "twitter" : "twitteruser",
	        "location" : "Denver, CO"
	    },
	    "welcomeMessage" : "I find your lack of bacon disturbing.",
	    "skills" : ["knife sharpening","smoker maintenance","spice selection","BBQ'ing"],
	    "bioPic" : "images/fry.jpg",
	    
	     display: function(){
				var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
				$("#header").prepend(formattedRole);
				var formattedName = HTMLheaderName.replace("%data%", bio.name);
				$("#header").prepend(formattedName);
				var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				$("#topContacts").append(formattedMobile);
				var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
				$("#topContacts").append(formattedEmail);
				var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
				$("#topContacts").append(formattedTwitter);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
				$("#topContacts").append(formattedGithub);
				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
				$("#topContacts").append(formattedLocation);
				var formattedPic = HTMLbioPic.replace('%data%',bio.bioPic);
				$("#header").append(formattedPic);
				var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
				$("#header").append(formattedWelcomeMsg);
				
				//appends the individual skills from the skills array.
				if (bio.skills.length > 0) {
			      $("#header").append(HTMLskillsStart);
			      for(skill in bio.skills) {
			          var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			          $("#skills").append(formattedSkills);
			      }
			  };	
			  //displays select bio contact information in the footer
			  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				$("#footerContacts").append(formattedMobile);
				var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
				$("#footerContacts").append(formattedEmail);
				var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
				$("#footerContacts").append(formattedTwitter);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
				$("#footerContacts").append(formattedGithub);
				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
				$("#footerContacts").append(formattedLocation);
			}
	};
bio.display();

// work experience variables.
	var work = {
		"jobs" : [
			{"employer" : "Oscar Meier",
				"title" : "Sausage Maker",
				"location" : "Denver, CO",
				"dates" : "January 1st 2014 - March 1st 2014",
				"description" : "keg abbey mash tun yeast aau infusion finishing hops. pitch mash tun lauter tun. imperial, all-malt, brew kettle bock real ale kolsch. aerobic, microbrewery terminal gravity double bock/dopplebock top-fermenting yeast pilsner. bottle conditioning wort hydrometer pub tulip glass secondary fermentation beer."
			},
			{"employer" : "Bar S",
				"title" : "Bacon Slicer",
				"location" : "Billings, MT",
				"dates" : "June 1st 2014 - July 1st 2014",
				"description" : "adjunct double bock/dopplebock hand pump hydrometer. crystal malt bottom fermenting yeast units of bitterness lauter. sparge aerobic dunkle bunghole. adjunct top-fermenting yeast rims abbey biere de garde sour/acidic wort chiller oxidized mouthfeel acid rest."
			},
			{"employer" : "Anderson Farms",
				"title" : "Butcher",
				"location" : "Dallas, TX",
				"dates" : "August 1st 2014 - November 1st 2014",
				"description" : "finishing hops cask conditioned ale lambic alpha acid ester lambic balthazar degrees plato mash? bottle conditioning ibu hard cider wort, anaerobic."
			}
		],
		display: function(){
			for (job in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
			
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer +
					formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);
				
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
				
				var formattedDates = HTMLworkDates.replace
				("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLworkDescription.replace
				("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			};
		}
	};
work.display();

var projects = {
	"projects" : [
		{"project" : "project1 ",
			"title" : "Polish Sausage Making",
			"dates" : "January 1st 2014 - March 1st 2014",
			"description" : "Bacon ipsum dolor amet boudin strip steak tenderloin, pork belly ham spare ribs leberkas sirloin. Tongue picanha kielbasa ribeye pancetta flank boudin doner. Sausage salami leberkas porchetta corned beef, ham turducken fatback cupim tongue hamburger. Pastrami kielbasa turkey ham hock leberkas cow pork belly ribeye filet mignon landjaeger tri-tip chicken.",
			"images" : ["http://baconmockup.com/150/200", "http://baconmockup.com/150/200"]
		},
		{"project" : "project2",
			"title" : "Bacon Slicing",
			"dates" : "June 1st 2014 - July 1st 2014",
			"description" : "Bacon ipsum dolor amet kielbasa flank capicola, tenderloin non id qui laboris. Sunt prosciutto pancetta, pork chop cupim short loin dolore. Tongue labore laborum occaecat, pig minim est aute bresaola biltong bacon. Tail ground round et, nisi consequat proident ipsum beef cupim fatback eiusmod lorem. Exercitation biltong cillum sirloin tempor do landjaeger sed short loin bacon ad chicken frankfurter. Aliqua sed deserunt chicken rump ea beef ribs. Est meatball voluptate chicken.",
			"images" : ["http://baconmockup.com/200/200", "http://baconmockup.com/200/200"]
		},
		{"project" : "project 3",
			"title" : "Pork Chops",
			"dates" : "August 1st 2014 - November 1st 2014",
			"description" : "Bacon ipsum dolor amet beef frankfurter ex, fatback dolor proident qui quis id ham hock. Adipisicing pork loin shankle cow bresaola id short loin ground round sed venison swine lorem jowl capicola velit. Shankle swine ex frankfurter, dolore officia aute duis et. Sausage ad pancetta flank mollit pork loin non ground round tongue. Meatloaf in chicken eiusmod salami capicola lorem reprehenderit filet mignon sint quis minim excepteur aute. Pancetta salami short loin t-bone irure.",
			"images" : ["http://baconmockup.com/250/200", "http://baconmockup.com/250/200"]
		}
	],
	display: function(){
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);		
			
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			};
		};
	}
};
projects.display();

var education = {
	"schools" : [
			{"name" : "Colorado State Univeristy",
				"location" : "Fort Collins, CO",
				"degree" : "Butcher",
				"majors" : "Smoking Meat",
				"dates" :"January 1st 2012 - March 1st 2012",
				"url" : "http://www.colostate.edu"
			},
			{"name" : "University of Colorado",
				"location" : "Boulder, CO",
				"degree" : "Sausage Making 101",
				"majors" : "Meat Handling",
				"dates" :"January 1st 2013 - March 1st 2013",
				"url" : "http://www.colorado.edu"
			}
		],
	"onlineCourses" : [
			{"title" : "Intro to HTML and CSS",
				"school" :"Udacity",
				"dates" : "January 1st 2011 - March 1st 2011",
				"url" : "http://udacity.com"
			},
			{"title" : "JavaScript Basics",
				"school" :"Udacity",
				"dates" : "January 1st 2011 - March 1st 2011",
				"url" : "http://udacity.com"
			}
		],
		display: function(){

			for (school in education.schools) {
				$("#education").append(HTMLschoolStart);
			
				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedCombination = formattedName + formattedDegree;
				$(".education-entry:last").append(formattedCombination);
				
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);		
			};
			$(".education-entry:last").append(HTMLonlineClasses);	
			for (courses in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
		
				
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
				var formattedOnlineCombination = formattedTitle + formattedSchool;
				$(".education-entry:last").append(formattedOnlineCombination);
				
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
				$(".education-entry:last").append(formattedURL);
			};
		}
	};
education.display();

$("#mapDiv").append(googleMap);
//captures mouse clicks on the page
$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
	}
);

//Properly capitalizes the name object for international viewing.
function inName(name) {  //feeds the object inName to the button function in helper.js
	name = name.split(" ");  //takes an object and splits based on a parameter creating an array
	console.log(name);
	name[1] = name[1].toUpperCase();  //takes 2 index and makes capital
	name [0] = name[0].slice(0,1).toUpperCase() + //slice takes string and cuts based on (start,end) takes first index, first letter and upper cases it.
		name[0].slice(1).toLowerCase(); //takes rest of first index and makes lower (1-->end and adds it to first letter
		
		return name[0] +" "+name[1];
};
	

$("#main").append(internationalizeButton);
