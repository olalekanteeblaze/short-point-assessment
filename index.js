// document.addEventListener('load',() => {
    const btn = document.querySelector('button');
    console.log(btn)
    btn.addEventListener('click', () => {
        const allProgress = document.querySelectorAll('.progress')
        allProgress.forEach((progress) => {
            progress.style.maxWidth = '600px'
            const progressText = progress.querySelector('span')
            progressText.textContent = '100%'
        })
    })
// })