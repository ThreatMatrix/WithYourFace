var adjectives = ["A Terrible", "A Haunted", "A Forgotten","A Stupified", "An Abandoned", "A Tortured", "An Inclement", "An Apologetic", "A Riddled", "An Unfortunate", "A Neglected", "A Forgotten",
 "A Sordid", "A Mistaken", "A Glutonous", "A Bedraggled", "A Stricken", "A Confused", "A Beaten", "A Sad", "A Retired", "A Damp", "A Rejected", "A Redundant", "A Forsaken"];

var nouns = ["Fish", "Coalmine", "Paddock", "Fishwife", "Cavern", "Railway", "Terrrapin", "Nozzle", "Shoe", "Phonebook", 'Postbox', "Column", "Dustbin", "Haddock", "Pudding",
"Gibbon", "Heron", "Pier", "Social Club", "Landmine", "Starfish", "Crater", "Beaver", "Ferret", "Horse", "Lantern"];

var name = prompt("What is your name?");

function withYourFace(name){
	alert(name+ " with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+ " with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
}

withYourFace(name)
