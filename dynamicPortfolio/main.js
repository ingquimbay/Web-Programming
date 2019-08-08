const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('loaded-img');

	// listeners to filter with categories
	const links = document.querySelectorAll("#categories a");
	links.forEach((element) => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			links.forEach((link) => link.classList.remove('active'));
			event.target.classList.add('active');
			const category = event.target.innerHTML;
			category === 'all' ? grid.filter('[data-category]') : grid.filter(`[data-category="${category}"]`);
		});
	});

	// listener for search bar
	document.querySelector('#searchbar').addEventListener('input', (event) => {
		const search = event.target.value;
		console.log(search);
		grid.filter((item) => {
			console.log(item.getElement().dataset.tags);
			item.getElement().dataset.tags.includes(search);
		});
	});

	// listener for images
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((element) => {

		element.addEventListener('click', () => {
			const route = element.getAttribute('src');
			const description = element.parentNode.parentNode.dataset.description;
			overlay.classList.add('active');
			document.querySelector('#overlay img').src = route;
			document.querySelector('#overlay .img-description').innerHTML = description;
		});
	});

	// listener for close button
	document.querySelector('#close-button').addEventListener('click', () => {
		overlay.classList.remove('active');
	});

	// listener for the overlay
	overlay.addEventListener('click', (event) => {
		event.target.id === 'overlay' ? overlay.classList.remove('active') : '';
	});
});