function fetchOffers() {
  return fetch(process.env.REACT_APP_OFFERS_URL, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((response) => response.json())
    .then((data) => data);
}

export default fetchOffers;
