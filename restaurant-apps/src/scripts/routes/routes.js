import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Posts from '../views/pages/posts';

const routes = {
  '/': Posts, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
