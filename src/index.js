

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    
    // preventDefault() makes sure the button doesn't re-load the page when pressing the button
    e.preventDefault();

    // showing a message that you've signed up successfully
    window.confirm('You have successfully signed up, enjoy the show🐤');
    // link to youtube
    window.location.replace("https://www.youtube.com/watch?v=vdnlptVP2B8");
});