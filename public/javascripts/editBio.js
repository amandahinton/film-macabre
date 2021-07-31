document.addEventListener('DOMContentLoaded', (e) => {
	const editBioButton = document.getElementById('edit-bio');
	const saveBioButton = document.getElementById('custom-pos');

	if (editBioButton) {
		editBioButton.addEventListener('click', toggleEditBio, false);
	}
	if (saveBioButton) {
		saveBioButton.addEventListener('click', saveBio, false);
	}
});

async function saveBio(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const bio = document.getElementById('bio');
	const newBio = document.getElementById('bio-field').value;
	const userId = document.getElementById('user-id').innerText;
	const csrf = document.getElementsByName('_csrf')[0].value;

	await fetch(`/users/${userId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRF-TOKEN': csrf,
		},
		body: JSON.stringify({ bio: newBio }),
	});

	bio.innerText = newBio;

	toggleEditBio();
}

function toggleEditBio(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const editForm = document.getElementById('edit-bio-form');
	const bio = document.getElementById('bio');

	if (editForm) {
		const editFormAtt = editForm.style.display;
		const bioAtt = bio.style.display;
		editForm.style.display = editFormAtt == 'none' ? 'flex' : 'none';
		bio.style.display = bioAtt == 'none' ? 'flex' : 'none';
	}
}
