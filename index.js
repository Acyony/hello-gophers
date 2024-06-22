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
    },
    {
        imgSrc: "Assets/images/gopher-purple.jpeg",
        title: "Gopher Amigurumi",
        text: "Exclusive crocheted Gopher.",
        price: "80€"
    }
]


const cardsContainer = document.getElementById("cards-container");

cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add('col-md-3');

    cardElement.innerHTML = `
                    <div class="card border-0 p-3">
                        <img src="${card.imgSrc}" class="card-img-top object-fit-fill" alt="${card.title}">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.text}</p>
                            <button type="button" class="btn btn-info">${card.price}</button>
                        </div>
                    </div>
            `;

    cardsContainer.appendChild(cardElement);
})
