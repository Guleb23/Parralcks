window.addEventListener('scroll', e =>{
	document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})
// Скрипт который получает скорость скрола по оси y