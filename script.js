console.log("JS Linked");

const movies = {
	"The Godfather": {
		price: 8,
		seats: [],
	},
	"Citizen Kane": {
		price: 9,
		seats: [],
	},
	"Planet of the Apes": {
		price: 10,
		seats: [],
	},
	Rugrats: {
		price: 11,
		seats: [],
	},
};

//Update the select dropdown to have the movies titles and price show as values.
const movieDropdown = document.getElementById("movieSelection");
// console.log(movieDropdown);
console.log(Object.entries(movies));

let options = "<option></option>";

for (const [movieTitle, movieData] of Object.entries(movies)) {
	console.log(movieTitle, movieData.price);

	// options += "<option>" + movieTitle + " ($" + movieData.price + ")</option>";
	options += `<option value="${movieTitle}">${movieTitle} ($${movieData.price})</option>`;
}

movieDropdown.innerHTML = options;

movieDropdown.onchange = (event) => {
	const selectedMovie = event.target.value;
	console.log(selectedMovie);
	console.log(movies[selectedMovie]);
};

for (const movieData of Object.values(movies)) {
	//start of for loop for each movie
	console.log(movieData);
	for (let rowIterator = 0; rowIterator < 8; rowIterator++) {
		//start of for loop for each row
		let row = [];
		for (let colIterator = 0; colIterator < 8; colIterator++) {
			//start of for loop for each col
			row.push({});
		} // end of for loop for each col
		movieData.seats.push(row);
	} //end of for loop for each row
} //end of for loop for each movie
console.log(movies);
