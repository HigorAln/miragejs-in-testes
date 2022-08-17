import { Registry, Server } from 'miragejs';

export default function routes(this: Server<Registry<any, any>>) {
  this.namespace = "api",

  this.get("/products", (schema, request) => {
    return schema.db.products;
  });

  this.namespace= '';
  this.passthrough();
}