import UrlParser from '../../routes/url-parse';
import Restaurant from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="posts">

    </div> 
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const resto = await Restaurant.detailRestaurant(url.id);
    const restoContainer = document.querySelector('.posts');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    // console.log(resto);
  },
};

export default Detail;
