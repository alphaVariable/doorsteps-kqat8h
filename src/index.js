import './styles.scss';
import 'bootstrap/js/dist/collapse';

// get data from json file
import data from '/site_data/home_page';
import articles from './articles';
import footer from '/site_data/footer';

console.log(articles);

// utility functions for the app vanilla js
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// set meta
qs('meta[name="description"]').setAttribute(
  'content',
  data.data.doorsteps_home_page.meta_data.meta_description
);
qs('title').text = data.data.doorsteps_home_page.meta_data.meta_title;

//inject data into the page
// using classes as classes have lower specificity than ids, also reusable
// using innerHTML for convenience, not a goo practice to be using on prod
qs('.hero__h1').innerHTML = data.data.doorsteps_home_page.hero.heading_h1;
qs('.hero__p').innerHTML = data.data.doorsteps_home_page.hero.copy;
qs('.hero__img').setAttribute(
  'src',
  data.data.doorsteps_home_page.hero.image.url
);
console.log(data.data.doorsteps_home_page.hero.url);
qs('.hero__cta').setAttribute(
  'href',
  data.data.doorsteps_home_page.hero.cta.url
);
qs('.hero__cta').text = data.data.doorsteps_home_page.hero.cta.copy;

// loop over articles and create a card for each one
// Use vanilla js
var card = '';

for (var i in articles) {
  var verticalClass = i == 0 ? 'guide__vertical' : 'guide__horizontal';
  var guideClass = i == 0 ? 'col-12 col-md-6' : 'col-12 col-md-12';

  var horizonatalConfigurationStart =
    i == 1 ? '<div class="col-12 col-md-6"><div class="row">' : '';
  var horizonatalConfigurationEnd = i == 2 ? '</div></div>' : '';

  // https://wtools.io/html-to-javascript-converter
  card +=
    horizonatalConfigurationStart +
    '<div class="mt-2 mt-md-0 ' +
    guideClass +
    '">' +
    '<a href="https://doorsteps.com.au/' +
    articles[i].data.slug +
    '" class="card guide__card rounded-0" style="background-image: url(' +
    articles[i].data.feature_image.url +
    ')">' +
    '              <div class="row g-0">' +
    '                <div class="' +
    verticalClass +
    '">' +
    '                  <div class="card-body guide__body">' +
    '                    <h5 class="card-title">' +
    articles[i].data.title +
    '</h5>' +
    '                    ' +
    articles[i].data.copy +
    '                    <p class="card-text"><small class="text-muted">' +
    ' Read More > ' +
    '</small></p>' +
    '                  </div>' +
    '                </div>' +
    '              </div>' +
    '            </a>' +
    '</div>' +
    horizonatalConfigurationEnd;
}
qs('.guide__cards').innerHTML = card;
