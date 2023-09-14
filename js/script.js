// togel class active

const navbarNav = document.querySelector('.navbar-nav');
//ketika dokumen menu diklik
document.querySelector('#material-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// kilik diluar sidebar untuk mengilangkan nav
const material = document.querySelector('#material-menu');

document.addEventListener('click', function(e){
	if (!material.contains(e.target)&& !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});