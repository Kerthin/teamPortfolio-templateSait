(function() {
	// // Fake loading.
	setTimeout(init, 1900);

	function init() {
		var scrollElemToWatch_0 = document.querySelector('.rev1'),
			watcher_0 = scrollMonitor.create(scrollElemToWatch_0, -300),				
			rev1 = new RevealFx(scrollElemToWatch_0, {
				revealSettings : {
					bgcolor: '#e1646a',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev2 = new RevealFx(document.querySelector('.rev2'), {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev3 = new RevealFx(document.querySelector('.rev3'), {
				revealSettings : {
					bgcolor: '#e1646a',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),

			scrollElemToWatch_1 = document.querySelector('.rev4'),
			watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
			rev4 = new RevealFx(scrollElemToWatch_1, {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 250,
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev5 = new RevealFx(document.querySelector('.rev5'), {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 250,
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev6 = new RevealFx(document.querySelector('.rev6'), {
				revealSettings : {
					bgcolor: '#e1646a',
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),

			scrollElemToWatch_2 = document.querySelector('.rev7'),
			watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
			rev7 = new RevealFx(scrollElemToWatch_2, {
				revealSettings : {
					bgcolor: '#e1646a',
					direction: 'tb',
					// delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev8 = new RevealFx(document.querySelector('.rev8'), {
				revealSettings : {
					bgcolor: '#e1646a',
					direction: 'tb',
					// delay: 500,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev9 = new RevealFx(document.querySelector('.rev9'), {
				revealSettings : {
					bgcolor: '#e1646a',
					direction: 'tb',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),

			scrollElemToWatch_3 = document.querySelector('.rev10'),
			watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
			rev10 = new RevealFx(scrollElemToWatch_3, {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 250,
					direction: 'bt',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev11 = new RevealFx(document.querySelector('.rev11'), {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 500,
					direction: 'bt',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev12 = new RevealFx(document.querySelector('.rev12'), {
				revealSettings : {
					bgcolor: '#e1646a',
					// delay: 500,
					direction: 'bt',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});

		watcher_0.enterViewport(function() {
			rev1.reveal();
			rev2.reveal();
			rev3.reveal();
			watcher_0.destroy();
		});
		watcher_1.enterViewport(function() {
			rev4.reveal();
			rev5.reveal();
			rev6.reveal();
			watcher_1.destroy();
		});
		watcher_2.enterViewport(function() {
			rev7.reveal();
			rev8.reveal();
			rev9.reveal();
			watcher_2.destroy();
		});
		watcher_3.enterViewport(function() {
			rev10.reveal();
			rev11.reveal();
			rev12.reveal();
			watcher_3.destroy();
		});
	}
})();