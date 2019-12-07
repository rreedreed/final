// function to generate a random concept page
var concept = ["concept-andromeda.html", "concept-basement-mix.html", "concept-sing-along-mix.html", "concept-stars.html", "concept-stillness.html", "concept-summer-blast.html", "concept-summer-soon.html", "concept-valentine.html", "concept-warmth.html", "concept-weeks.html"]
	
function newConcept() {
	var randomNumber = Math.floor(Math.random() * (concept.length));
	window.open(concept[randomNumber], "_self");
}