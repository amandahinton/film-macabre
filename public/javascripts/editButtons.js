document.addEventListener('DOMContentLoaded', (e) => {
	e.stopPropagation();
	e.preventDefault();

	addButtonFunc();

	const editShelfButton = document.getElementById('edit-button');
	const deleteShelfButton = document.getElementById('btn-del-shelf');
	const saveShelfButton = document.getElementById('save-shelf');

	if (editShelfButton) {
		editShelfButton.addEventListener('click', toggleDeleteMovieButtons, false);
		editShelfButton.addEventListener('click', toggleEditBox, false);
	}

	if (deleteShelfButton)
		deleteShelfButton.addEventListener('click', deleteShelf, false);

	if (saveShelfButton)
		saveShelfButton.addEventListener('click', updateShelf, false);
});

async function updateShelf(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const editBoxInput = document.getElementById('newName');
	const shelfTitle = document.getElementById('shelf-name');
	const newTitle = editBoxInput.value;
	const shelfId = document.getElementById('shelfId').innerText;

	await fetch(`/shelves/${shelfId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: newTitle }),
	});

	shelfTitle.innerText = newTitle;

	toggleEditBox();
}

function toggleEditBox(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const editBox = document.getElementById('edit-box');
	const editBoxInput = document.getElementById('newName');
	const shelfTitle = document.getElementById('shelf-name');

	editBox.style.display = 'visible';

	if (editBox) {
		const boxVisibility = editBox.style.display;
		const titleVisibility = shelfTitle.style.display;

		editBox.style.display = boxVisibility == 'none' ? 'inline-block' : 'none';
		editBoxInput.value = shelfTitle.innerText;

		shelfTitle.style.display =
			titleVisibility == 'none' ? 'inline-block' : 'none';
	}
}

async function deleteShelf(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const shelfId = document.getElementById('shelfId').innerText;

	await fetch(`/shelves/${shelfId}`, { method: 'DELETE' });

	window.location = '/';
}

function addButtonFunc() {
	const deleteMovieButtons = document.getElementsByClassName('toggle');

	Array.from(deleteMovieButtons).forEach((btn) => {
		btn.addEventListener('click', async (e) => {
			e.stopPropagation();
			e.preventDefault();

			const [_method, shelfId, movieId] = btn.id.split('-');
			const movieTile = document.getElementById(movieId);

			await fetch(`/shelves/${shelfId}/${movieId}`, { method: 'DELETE' });

			movieTile.style.display = 'none';
		});
	});
}

function toggleDeleteMovieButtons(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const deleteMovieButtons = document.getElementsByClassName('toggle');

	Array.from(deleteMovieButtons).forEach((btn) => {
		const attribute = btn.style.visibility;
		btn.style.visibility = attribute == 'hidden' ? 'visible' : 'hidden';
	});
}
