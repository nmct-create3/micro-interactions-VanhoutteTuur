let ratings = [];

function showRating(value) {
	for (let i = 0; i < ratings.length; i++) {
		if (ratings[i].value < value) {
			ratings[i].classList.add("c-rating--checked");
		} else {
			ratings[i].classList.remove("c-rating--checked");
		}
	}
}

function getRatings() {
	ratings = document.getElementsByName("rating");
	console.log(ratings);

	for (let i = 0; i < ratings.length; i++) {
		ratings[i].addEventListener("change", function () {
			showRating(this.value);
        });

        // when the page refreshes and a radio button is checked because of the previous session
        if (ratings[i].checked){
            showRating(ratings[i].value);
        }
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
	getRatings();
});
