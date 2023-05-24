import('../DATA.json').then(({ default: jsonData }) => {
  const fetchdatas = jsonData.restaurants;
  let dataList = '';

  fetchdatas.forEach((item) => {
    dataList += `
      <article class="post-item">
        <a href="" class="post-item__city">${item.city}</a>
        <img class="post-item__thumbnail"
           src="${item.pictureId}"
           alt="${item.name}">
           <div class="post-item__content">
            <p class="post-item__rate">Rating : <a href="#" class="post-item__rate__score">${item.rating}</a>
            </p>
            <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
            <p class="post-item__description">${item.description.slice(0, 100)}...</p>
          </div>
      </article>
      `;
  });

  document.querySelector('.posts').innerHTML = dataList;
});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
