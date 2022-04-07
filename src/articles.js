// import all json files under the folder blog_articles
// and store them in an array
import article1 from '../site_data/blog_articles/buying-a-home-guide';
import article2 from '../site_data/blog_articles/buying-selling-house-same-time';
import article3 from '../site_data/blog_articles/selling-your-home';
// combine all json files into one object
const articles = {
  0: article1,
  1: article2,
  2: article3,
};

export default articles;
