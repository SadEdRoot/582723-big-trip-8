import {getRandomInt} from './utils';

const Icons = new Map([
  [`Taxi`, `🚕`],
  [`Bus`, `🚌`],
  [`Train`, `🚂`],
  [`Ship`, `🛳️`],
  [`Transport`, `🚊`],
  [`Drive`, `🚗`],
  [`Flight`, `✈️`],
  [`Check-in`, `🏨`],
  [`Sightseeing`, `🏛️`],
  [`Restaurant`, `🍴`],
]);

const type = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
]

const title = [
  `Taxi to Airport`,
  `Flight to Geneva`,
  `Drive to Chamonix`,
  `Check into a hotel`,
];

const getTitle = () => {
  return title[getRandomInt(0, title.length)];
};

const getRandomIcon = () => {
  return Icons.get(type[getRandomInt(0, type.length)]);
};

export const tripPoint = {
  title: getTitle(),
  type: getRandomIcon(),
  time: Data.now(),
  location: `City`,
  duration: `1 hour`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  offers: [`Add luggage`, `Switch to comfort class`, `Add meal, Choose seats`],
  photos: `http://picsum.photos/300/150?r=${Math.random()}`
};

price: getRandomInteger(10, 100),
  time: getRandomDates({
    hours: getRandomInteger(1, 3),
    minutes: getRandomInteger(0, 20),
  }),
  offers: getRandomOffers({
    num: 3,
    price: {min: 10, max: 100},
