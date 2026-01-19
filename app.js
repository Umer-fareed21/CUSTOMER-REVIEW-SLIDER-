let cards = [
    {
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        name: "Susan Smith",
        field: "web developer",
        rev: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie."
    },
    {
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        name: "Anna Johnson",
        field: "web designer",
        rev: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        name: "Bill Anderson",
        field: "the boss",
        rev: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo spirits-edge brooklyn. Tiard we mumblecore tofu. "
    }
];

let currentIndex = 0;
const banner = document.getElementById("banner");

function showReview(index) {
    const item = cards[index];
    banner.innerHTML = `
        <div class="img-container">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="author">${item.name}</h4>
        <p class="job">${item.field}</p>
        <p class="info">${item.rev}</p>
        <div class="btn-container">
            <button class="prev-btn" onclick="prevHandler()"><i class="fas fa-chevron-left"></i></button>
            <button class="next-btn" onclick="nextHandler()"><i class="fas fa-chevron-right"></i></button>
        </div>
        <button class="random-btn" onclick="randomHandler()">Surprise Me</button>
    `;
}

function nextHandler() {
    currentIndex++;
    if (currentIndex > cards.length - 1) {
        currentIndex = 0;
    }
    showReview(currentIndex);
}

function prevHandler() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }
    showReview(currentIndex);
}

function randomHandler() {
    currentIndex = Math.floor(Math.random() * cards.length);
    showReview(currentIndex);
}

window.addEventListener("DOMContentLoaded", () => {
    showReview(currentIndex);
});