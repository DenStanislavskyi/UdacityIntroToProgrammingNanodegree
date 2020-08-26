/*
 * Programming Quiz: String Manipulation Quiz 1
 *
 * Using string methods, convert "audacity" to "awesome"
 */

var text = "audacity";

var udacityizer = function(string) {

  // Right now, the variable string === "audacity"
  // Manipulate string to make it equal to "awesome"
  // Your code goes here!
  string = string.replace("audacity", "awesome");
  return string;
};

// Did your code work? The line below will tell you!
console.log("Quiz 1: " + udacityizer(text));


/*
 * Programming Quiz: Array Manipulation Quiz 2
 *
 * If you are given an array of numbers, can you increase the value of the last number in the array by one?
 */

 var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array.slice(0);
    var lastelem = newArray.pop();
    newArray.push(lastelem + 1);

    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));


/*
String Manipulation Quiz 2

Question:
Let's do some more string manipulation. This time, you might find you need to use arrays as well.

We want you to run through an exercise that will come in handy later on in lesson 2.

Your Challenge
If given a string of a two word name formatted with any mix of capitalization, 
can you manipulate the string to ensure the first name has a capital first letter 
and the last name is totally capitalized? Assume there's a space between the names. 
For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". 
Your answer should be a single string saved to the variable called finalName.
 */
 var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName.toUpperCase();
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
   
    // Don't delete this line!
    return finalName;

};
// Did your code work? The line below will tell you!
console.log(nameChanger("cAmEROn PittMAN"));


//quiz 3
//For this quiz, your goal is to make sure that if a user puts HTML in their resume's JSON, it doesn't break the resume!
//How? You need to make sure that the < and > from their HTML get turned into harmless strings.
//When you're ready to replace all of the < and >!"


var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

//Use forEach or for to iterate over arrays like:
//countries = ['Argentina', 'China', 'England'];
//Use for-in to loop over objects like
//countries = {'country1':'Argentina', 'country2':'China','country3':'England'};
myObj = {'country1':'Germany', 'country2':'Argentina'};
for (key in myObj){
    if (myObj.hasOwnProperty(key)) {
        console.log(myObj[key]);
    }
}

/*
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {

var locationArray = [];

for (job in work_obj.jobs){
	var newLocation = work_obj.jobs[job].location;
	locationArray.push(newLocation);
 }
	return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
*/

/*
The new button will appear at the very bottom of the index.html when you view it in your browser. To test whether or not your button worked, simply click it and see how your name changes!
Your inName function will not accept a parameter and should internationalize the value stored in the bio object.
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];	
}
$('#main').append(internationalizeButton);

/////////////////////////////////////////////////////////////////////////////////
Anonymous functions are functions that don't have a name and are often returned by other functions and objects.


Some JavaScript libraries ask for a callback function to be executed once they have have the results of a task. Anonymous functions are used in these cases because there is not a need to call the function by name outside the confines of the enclosing function.


For example, the code below reads a JSON file from the server. After loading, it executes an anonymous function to print out the data.

$.getJSON("test.json", function(data) {
    console.log(data);
});

Anything that uses an anonymous function could also use a named function. The following code is also valid and is equivalent to what's listed above:

var printData = function(data){
  console.log(data)
};
$.getJSON("test.json", printData);

*/