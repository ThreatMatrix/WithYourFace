var adjectives = ["Terrible", "Haunted", "Forgotten","Stupified", "Abandoned", "Tortured", "Inclement", "Apologetic", "Riddled", "Unfortunate", "Neglected", "Forgotten",
 "Sordid", "Mistaken", "Glutonous", "Bedraggled", "Stricken", "Confused", "Beaten", "Sad", "Retired", "Damp", "Rejected", "Redundant", "Forsaken", "" ];

var nouns = ["Fish", "Coalmine", "Paddock", "Fishwife", "Cavern", "Railway", "Terrrapin", "Nozzle", "Shoe", "Phonebook", 'Postbox', "Column", "Dustbin", "Haddock", "Pudding",
"Gibbon", "Heron", "Pier", "Social Club", "Landmine", "Starfish", "Crater", "Beaver", "Ferret", "Horse", "Lantern"];

var name = prompt("What is your name?");

function withYourFace(name){
	alert(name+ " with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+ " with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
	alert(name+" with your face like a "+ adjectives[Math.floor(Math.random() * 24)]+" "+nouns[Math.floor(Math.random() * 26)]+".");
}

withYourFace(name)