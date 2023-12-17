const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieReleaseDateToDisplay = document.querySelector('.favoriteMovieReleaseDate');
let titleInStorage = localStorage.getItem('title');
let releaseDateInStorage = localStorage.getItem('releaseDate');
let imageUrlInStorage = localStorage.getItem('imageUrl');
if(titleInStorage && releaseDateInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseDateToDisplay.textContent = releaseDateInStorage;
    container.style.backgroundImage = `linear-gradient(rgb(50, 50, 80, 0.5), rgb(70, 50, 50, 0.5)),
    url('${imageUrlInStorage}')`;
}
btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieReleaseDateInput = movieReleaseDate.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('releaseDate', movieReleaseDateInput);
    localStorage.setItem('imageUrl', posterUrlInput); 
    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseDateToDisplay.textContent = movieReleaseDateInput;
    container.style.backgroundImage = `linear-gradient(rgb(50, 50, 80, 0.5), rgb(70, 50, 50, 0.5)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieReleaseDate.value = '';
    moviePosterUrl.value = '';
});