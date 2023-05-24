import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <h3 class="resto__information">Detail Information </h3>
  <div class="resto__info">
    <div class="resto__info__detail">
        <h4>Adress :</h4>
        <p>${resto.address}</p>
    </div>
    <div class="resto__info__detail">
        <h4>Restaurant City :</h4>
        <p>${resto.city}</p>
    </div>
    <div class="resto__info__detail">
        <h4>Foods :</h4>
        <p>${resto.menu.foods.map((food) => food.name).join(', ')}</p>
    </div>
    <div class="resto__info__detail">
        <h4>Drinks :</h4>
        <p>${resto.menu.drinks.map((drink) => drink.name).join(', ')}</p>
    </div>
    <div class="resto__info__detail">
        <h4>Reviews :</h4>
        <p>${resto.customerReviews.map((customer) => customer.review).join(', ')}</p>
    </div>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>

`;

const createRestoTemplate = (resto) => `
    <article class="post-item">
    <a href="" class="post-item__city">${resto.city}</a>
    <img class="post-item__thumbnail"
    src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
    alt="${resto.name}">
    <div class="post-item__content">
        <p class="post-item__rate">Rating : <a href="#" class="post-item__rate__score">${resto.rating}</a>
        </p>
        <h1 class="post-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
        <p class="post-item__description">${resto.description.slice(0, 100)}...</p>
    </div>
    </article>
`;

export { createRestoDetailTemplate, createRestoTemplate };
