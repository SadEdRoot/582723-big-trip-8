import getFilter from './make-filter.js';
import getTripPoint from './make-trip-point.js';
import {getRandomInt} from './utils';
import {renderHTML} from './utils';

const mainFilter = document.querySelector(`.trip-filter`);
const mainTripPoint = document.querySelector(`.trip-day__items`);


const filters = [
  {
    title: `everything`,
    isChecked: true
  },
  {
    title: `future`,
  },
  {
    title: `past`,
  }];

/* возращает строку со всеми фильтрами */
const createFilterString = (elementList) => {
  let string = ``;
  elementList.forEach((element) => {
    string += getFilter(element);
  });
  return string;
};

/* возращает строку со всеми рандомным количеством точек */
const createTripPoint = () => {
  let string = ``;
  for (let i = 0; i < getRandomInt(0, 7); i++) {
    string += getTripPoint();
  }
  return string;
};

renderHTML(createFilterString(filters), mainFilter);

mainFilter.addEventListener(`click`, function () {
  if (event.target.tagName === `input`) {
    return;
  }
  renderHTML(createTripPoint(), mainTripPoint);
});
