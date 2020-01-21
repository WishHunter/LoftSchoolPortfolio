!(function () {
	document.querySelectorAll('.input').forEach(elem => {
		elem.addEventListener('change', function (e) {
			if (elem.value !== '') {
				elem.classList.add('has-value');
				return;
			}
			elem.classList.remove('has-value');

		})
	})
})()