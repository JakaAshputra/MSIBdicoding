import Restaurant from '../../data/resto-source';
import { createRestoTemplate } from '../templates/template-creator';

const Posts = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Sempurnakan Perjalanan Liburan Mu Dengan Kami</h1>
      <p class="hero__tagline">Jadikan liburan mu istimewa dengan mengunjungi tempat makan yang pasti akan 
        membuat kamu tersenyum seharian</p>
    </div>
  </div>

  <section class="content">
    <div class="latest">
      <h1 class="latest__label">Explore Restaurant</h1>
      <div class="posts">

      </div>
    </div>
  </section>
        `;
  },

  async afterRender() {
    const restoList = await Restaurant.listRestaurant();
    // console.log(restoList);
    const restoContainer = document.querySelector('.posts');
    restoList.forEach((resto) => {
      restoContainer.innerHTML
        += createRestoTemplate(resto);
    });
  },
};

export default Posts;
