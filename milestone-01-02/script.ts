const toggleButton = document .getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document .getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block'; 
    } else {
        skillsList.style.display = 'none'
    }
});