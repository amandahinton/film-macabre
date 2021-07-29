function changeVis(thing1, thing2) {
	Array.from(thing1).forEach((ele) => ele.toggleAttribute('hidden'));
	Array.from(thing2).forEach((ele) => ele.toggleAttribute('hidden'));
}

async function deleteFromShelf(shelfId, movieId, userId) {
	const res = await fetch(`/shelves/${shelfId}/${movieId}`, {
		method: 'DELETE',
	})
		.then((res) => res.json)
		.catch((err) => new Error(err));
	return res;
}

document.addEventListener('DOMContentLoaded', (e) => {
	const editButtons = document.getElementsByClassName('btn-edit');
	const deleteButtons = document.getElementsByClassName('btn-del');
	const editButton = document.getElementById('edit-button');

	if (editButton) {
		editButton.addEventListener('click', (e) => {
			const actionsContainer = document.getElementById('actions');
			// actionsContainer.addEventListener('click', (e) => {
			// 	e.stopImmediatePropagation();
			// 	if (actionsContainer.childNodes.length === 1) {
			// 		const button = document.createElement('button');
			// 		button.innerText = 'Delete Shelf';
			// 		button.setAttribute('id', 'btn-del-shelf');

			// 		actionsContainer.appendChild(button);
			// 		button.addEventListener('click', async (e) => {
			// 			console.log('DELETE');
			// 			const shelfId = document.getElementById('shelfId').innerText;
			// 			const res = await fetch(`/shelves/${shelfId}/delete`, {
			// 				method: 'POST',
			// 			});
			// 			window.location = '/';
			// 		});
			// 	}
			// });

			changeVis(editButtons, deleteButtons);
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
