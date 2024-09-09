const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');

const createCard = (cardData, deleteCallback) => {
    const cardElement = cardTemplate.firstElementChild.cloneNode(true);

    const image = cardElement.querySelector('.card__image');
    const title = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    image.src = cardData.link;
    image.alt = cardData.name;
    title.textContent = cardData.name;

    deleteButton.addEventListener('click', () => {
        deleteCallback(cardElement);
    });

    return cardElement;
}

const deleteCard = (cardElement) => {
    cardElement.remove();
}

const renderCards = (cards) => {
    cards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard);
        cardContainer.append(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards(initialCards);
});
