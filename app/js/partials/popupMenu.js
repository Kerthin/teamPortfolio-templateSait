(function() {
	document.documentElement.className = 'js';
	var formEl = document.querySelector('.menuPopup'),
		revealer = new RevealFx(formEl),
		openCtrl = document.querySelector('.js-burger_popupOpen');

		openCtrl.onclick = function() {
			if (openCtrl.classList.contains('js-burger_popupOpen') === true) {
				revealer.reveal({
					bgcolor: '#fd5f00',
					direction: 'tb',
					duration: 700,
					onCover: function(contentEl, revealerEl) {
						formEl.classList.add('js-menuPopup_open');
						contentEl.style.opacity = 1;
						openCtrl.classList.remove('js-burger_popupOpen');
						openCtrl.style.zIndex = "9999";
						formEl.style.zIndex = "50";
						contentEl.style.zIndex = "50";
					}
				});
			} else {
				formEl.classList.remove('js-menuPopup_open');
				revealer.reveal({
					bgcolor: '#fd5f00',
					direction: 'bt',
					duration: 700, 
					onCover: function(contentEl, revealerEl) {
						formEl.classList.remove('js-menuPopup_open');
						contentEl.style.opacity = 0;
						openCtrl.classList.add('js-burger_popupOpen');
					}
				});
			}
		}
	formEl.addEventListener('submit', function(ev) {ev.preventDefault();});
})();