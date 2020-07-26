var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var noButton = document.querySelector('.modal__actions button');


for (var i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', function () {
		// backdrop.style.display = "block";
		// modal.style.display = "block";
		modal.classList.add('open');
		backdrop.classList.add('open');
	})
}

if (noButton) {
	noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
	mobileNav.classList.remove('open');
	closeModal();
});

function closeModal() {

	if (modal) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});
