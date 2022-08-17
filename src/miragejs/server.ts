import { Server } from 'miragejs';
import factories from './factories/index';
import fixtures from './fixtures/index';
import models from './models/index';
import routes from './routes/index';
import seeds from './seeds/index';

export const makeServer = ({ environment = "development" } = {}) => {
  return new Server({
    environment,
    factories,
    seeds,
    models,
    fixtures,
    routes,
  })
}