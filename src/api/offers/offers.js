function fetchOffers() {
  return fetch('https://cdn.sixt.io/codingtask/offers.json', {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((response) => response.json())
    .then((data) => data);
}

export default fetchOffers;
