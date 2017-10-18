



question = prompt("Do you want an extractor or link generator?: ");

if (question === "link generator") {
	latitude = Number(prompt("Insert Latitude: "));
	longitude = Number(prompt("Insert Longitude: "));

	console.log("www.google.com/maps/search/?api=1&query=" + latitude +"," + longitude);
} else if (question === "extractor") {
	link = prompt("Insert a Link: ");

	console.log("Latitude: " + link.slice(40,link.indexOf(",")) + "\n" + "Longitude: "  + link.slice(link.indexOf(",") + 1, link.length))
} else {
	console.log("Invalid Option!");
}