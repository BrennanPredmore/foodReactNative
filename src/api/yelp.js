import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer w53Q_nRrvd_TzOgX2Woizp8eeG458rIUCCLlQTeTJy7-GPov1s_5W7idKUjIiXhG6PU8DYY9xjW4IQKxpK7Rcc1DCo17lVI-wCBiZMy4wrgjNM3bNr6lUxzx20I7X3Yx',
  },
});
