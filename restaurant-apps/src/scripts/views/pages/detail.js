import UrlParser from '../../routes/url-parse';
import Restaurant from '../../data/resto-source';

const Detail = {
  async render() {
    return `
            <h2>Detail Page</h1>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const resto = await Restaurant.detailRestaurant(url.id);
    console.log(resto);
  },
};

export default Detail;
