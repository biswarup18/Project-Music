// Sample playlist data
const playlistData = [
    { title: 'Song 1', artist: 'Artist 1', image: 'song1.jpg', source: './song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', image: 'song2.jpg' },
    { title: 'Song 3', artist: 'Artist 3', image: 'song3.jpg' }
    // Add more songs as needed
];

let currentSongIndex = 0;
const audio = new Audio();

// Function to display playlist
function displayPlaylist() {
    const playlistContainer = document.getElementById('playlist');
    playlistContainer.innerHTML = ''; // Clear previous content

    playlistData.forEach((song, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.classList.add('playlist-item');

        const image = document.createElement('img');
        image.src = song.image;
        image.alt = song.title;

        const title = document.createElement('p');
        title.textContent = song.title;

        const artist = document.createElement('p');
        artist.textContent = song.artist;

        const playButton = document.createElement('button');
        playButton.classList.add('play-button');
        playButton.textContent = 'Play';
        playButton.addEventListener('click', () => {
            playPauseSong(index);
        });

        playlistItem.appendChild(image);
        playlistItem.appendChild(title);
        playlistItem.appendChild(artist);
        playlistItem.appendChild(playButton);

        playlistContainer.appendChild(playlistItem);
    });

    // Initialize with the first song
    playSong(0);
}

// Function to play or pause the current song
function playPauseSong(index) {
    if (currentSongIndex === index && !audio.paused) {
        audio.pause();
    } else {
        playSong(index);
    }
}

// Function to play a specific song by index
function playSong(index) {
    const song = playlistData[index];

    if (song.source) {
        audio.src = song.source;
        audio.play();
        currentSongIndex = index;
    }
}

// Call function to display playlist when the page loads
window.onload = function() {
    displayPlaylist();
};