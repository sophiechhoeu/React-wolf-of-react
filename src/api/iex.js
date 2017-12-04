import axios from 'axios';

// creating the end point with axios and then accessing a get to the end point then return the promise

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
});

export function loadQuoteForStock(symbol) {
  return api.get(`/stock/${symbol}/quote`).then((res) => {
    return res.data
  });
}

export function loadCompanyLogoForStock(symbol){
  return api.get(`/stock/${symbol}/logo`).then((res) => {
    return res.data
  });
}
