import { rest } from 'msw';
import data from '~data/offers.json';

const offers = rest.get(
  'https://cdn.sixt.io/codingtask/offers.json',
  (req, res, ctx) => {
    return res(ctx.status(200, ctx.json(data)));
  }
);

export default offers;
