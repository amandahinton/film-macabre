function changeVis(thing1, thing2, vis) {
	Array.from(thing1).forEach((ele) =>
		ele.setAttribute('style', `display:${vis}`)
	);
	Array.from(thing2).forEach((ele) =>
		ele.setAttribute('style', `display:${vis}`)
	);
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
	let clickCount = 0;

	if (editButton) {
		editButton.addEventListener('click', (e) => {
			clickCount++;

			if (clickCount % 2 === 0) {
				editButton.innerText = 'Edit Shelf';
				changeVis(editButtons, deleteButtons, 'none');
			} else {
				editButton.innerText = 'Save Changes';
				changeVis(editButtons, deleteButtons, 'visible');
			}
		});
		Array.from(deleteButtons).forEach((button) => {
			button.addEventListener('click', async (e) => {
				e.preventDefault();
				e.stopPropagation();
				const target = e.target;
				const [_method, shelfId, movieId] = target.id.split('-');
				await deleteFromShelf(shelfId, movieId);
			});
		});
	}
});
