import Restaurant from '../../data/resto-source';

const Posts = {
  async render() {
    return `
            <h2>Posts Page</h1>
        `;
  },

  async afterRender() {
    const restoList = await Restaurant.listRestaurant();
    console.log(restoList);
  },
};

export default Posts;
