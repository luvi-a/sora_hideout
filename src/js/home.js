function topBarClickEvent() {
	const recommendation = document.getElementById("recommendation");
	const recommendation_item = document.getElementById("recommendation-item");
	const newest = document.getElementById("newest");
	const newest_item = document.getElementById("newest-item");

	recommendation.addEventListener("click", () => {
		recommendation_item.classList.add("visible");
		newest_item.classList.remove("visible");
	});
	newest.addEventListener("click", () => {
		recommendation_item.classList.remove("visible");
		newest_item.classList.add("visible");
	});
}

topBarClickEvent();
