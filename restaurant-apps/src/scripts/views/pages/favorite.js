import Restaurant from '../../data/resto-source';

const Favorite = {
  async render() {
    return `
              <h2>Favorite Page</h1>
          `;
  },

  async afterRender() {
    // asd
    const restoList = await Restaurant.listRestaurant();
    console.log(restoList);
  },
};

export default Favorite;
