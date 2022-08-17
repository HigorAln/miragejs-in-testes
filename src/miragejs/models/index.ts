import { belongsTo, Model } from 'miragejs';

export default {
  product: Model.extend<Partial<any>>({
    user: belongsTo(),
  }),
  user: Model.extend<Partial<any>>({
    products: belongsTo(),
  }),
}