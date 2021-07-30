function changeVis(thing1, thing2, thing3, thing4) {
	const att = thing1[0].style.display;
	Array.from(thing1).forEach((ele) =>
		ele.setAttribute(
			'style',
			`display:${att == 'none' ? 'inline-block' : 'none'}`
		)
	);
	Array.from(thing2).forEach((ele) =>
		ele.setAttribute(
			'style',
			`display:${att == 'none' ? 'inline-block' : 'none'}`
		)
	);

	thing3.setAttribute(
		'style',
		`display:${att == 'none' ? 'inline-block' : 'none'}`
	);

	thing3.childNodes[0].childNodes[1].setAttribute('value', thing4.innerText);

	thing4.setAttribute(
		'style',
		`display:${att == 'none' ? 'none' : 'inline-block'}`
	);
}

// Deletes movie from shelf
async function deleteFromShelf(shelfId, movieId, userId) {
	const res = await fetch(`/shelves/${shelfId}/${movieId}`, {
		method: 'DELETE',
	})
		.then((res) => res.json)
		.catch((err) => new Error(err));
	return res;
}

document.addEventListener('DOMContentLoaded', (e) => {
	const editButtons = document.getElementsByClassName('small-button toggle');
	const deleteButtons = document.getElementsByClassName('small-button toggle');
	const editButton = document.getElementById('edit-button');
	const shelfName = document.getElementById('shelf-name');

	if (editButton) {
		const button = document.getElementById('btn-del-shelf');
		const editShelfNameDiv = document.getElementById('edit-box');
		const shelfNameSaveBtn = document.getElementById('save-shelf');

		button.addEventListener('click', async (e) => {
			const shelfId = document.getElementById('shelfId').innerText;
			const res = await fetch(`/shelves/${shelfId}/delete`, {
				method: 'POST',
			});
			window.location = '/';
		});
		editButton.addEventListener('click', (e) => {
			changeVis(editButtons, deleteButtons, editShelfNameDiv, shelfName);
		});

		shelfNameSaveBtn.addEventListener('click', async (e) => {
			const shelfId = document.getElementById('shelfId').innerText;
			e.stopPropagation();
			e.preventDefault();

			const changeHere = document.getElementById('shelf-name');
			const newNameEle = { name: document.getElementById('newName').value };

			// console.log(newName);

			const res = await fetch(`/shelves/${shelfId}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				body: JSON.stringify(newNameEle),
			})
				.then((res) => {
					changeHere.innerText = newNameEle.name;
					changeVis(editButtons, deleteButtons, editShelfNameDiv, shelfName);
				})
				.catch((err) => console.log(err));
		});

		Array.from(deleteButtons).forEach(async (button) => {
			button.addEventListener('click', async (e) => {
				e.preventDefault();
				e.stopPropagation();
				const [_method, shelfId, movieId] = e.target.id.split('-');

				const movie = document.getElementById(movieId);
				movie.setAttribute('style', 'display:none');

				const res = await fetch(`/shelves/${shelfId}/${movieId}/delete`, {
					method: 'POST',
				});
			});
		});
	}
});
