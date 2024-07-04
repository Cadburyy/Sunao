let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    song.play();
}

// Dark mode toggle
const icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

// Image slideshow
let i = 0;
const images = [
    'images/sunao 3.jpg',
    'images/sunao 4.jpg',
];
const time = 2000;

function changeImg() {
    document.querySelector("[name='slide']").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, time);
}

window.onload = changeImg;

// Gallery functionality
function addImage(url) {
    const grid = document.getElementById("image-grid");
    const newImage = document.createElement("img");
    newImage.className = "grid-item";
    newImage.src = url;
    grid.appendChild(newImage);
}

document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        'images/sunao 3.jpg',
        'images/sunao 4.jpg',
    ];

    imageUrls.forEach(function (url) {
        addImage(url);
    });

    const form = document.getElementById("add-image");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = document.getElementById("img-source");
        const imageUrl = input.value.trim();

        if (imageUrl !== "") {
            addImage(imageUrl);
            input.value = "";
        }
    });
});

// Random quote functionality
function randomQuote() {
    const quote = document.getElementById("random-quote");
    const quotes = [
        `"The past echoes in the present, shaping who we become."`,
        `"In silence, truths often find their voice."`,
        `"Memories linger like shadows, guiding us through the dark."`,
        `"Lost in thought, yet searching for meaning."`,
        `"Emotions weave a tapestry of memories, each thread a story untold."`
    ];

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quote.textContent = quotes[randomIndex];
    }, 3000);
}

randomQuote();