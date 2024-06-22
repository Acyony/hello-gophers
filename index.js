const cardsData = [
    {
        imgSrc: "Assets/images/5112B7A6-E78E-443F-9557-682D9FF334E1.jpeg",
        title: "Gopher Amigurumi",
        text: "Exclusive crocheted Gopher.",
        price: "80€"
    },
    {
        imgSrc: "Assets/images/IMG_2989_Original.JPG",
        title: "Gopher Amigurumi",
        text: "Exclusive crocheted Gopher.",
        price: "80€"
    },
    {
        imgSrc: "Assets/images/IMG_3011_Original.JPG",
        title: "Gopher Amigurumi",
        text: "Exclusive crocheted Gopher.",
        price: "80€"
    },
    {
        imgSrc: "Assets/images/IMG_3070.JPG",
        title: "Gopher Amigurumi",
        text: "Exclusive crocheted Gopher.",
        price: "80€"
    }
]


const cardsContainer = document.getElementById("cards-container");

cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add('card', 'border', 'border-0', 'col-md-3', 'mb-4');

    cardElement.innerHTML = `
                <img src="${card.imgSrc}" class="card-img-top object-fit-fill" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.text}</p>
                    <button type="button" class="btn btn-info">${card.price}</button>
                </div>
            `;

    cardsContainer.appendChild(cardElement);
})
