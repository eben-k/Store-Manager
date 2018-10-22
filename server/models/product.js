class Product {
  // constructor
  constructor(productId) {
    this.id = productId;
  }
}

class Db {
  constructor() {
    this.products = []; // available rides
    this.ids = 3;
    this.makeTestData();
  }


  // add a product
  addProduct(prodName, prodCategory, stckQuantity, unitPrice) {
    const product = new Product(this.ids);
    product.name = prodName;
    product.category = prodCategory;
    product.quantity = stckQuantity;
    product.price = unitPrice;

    this.products.push(product);
    this.ids += 1;
    return product.id;
  }


  makeTestData() {
    // add some initial data
    this.products[0] = {
      id: 0,
      name: 'Pampers Baby Diapers',
      category: 'baby products',
      quantity: '10 boxes',
      price: '$10',
    };

    this.products.push({
      id: 1,
      name: 'Colgate Toothpaste',
      category: 'Personal products',
      quantity: '15 boxes',
      price: '$5',
    });

    this.products.push({
      id: 2,
      name: 'Nike Air Sandals',
      category: 'footwear',
      quantity: '14 pairs',
      price: '$50',

    });
  }
}
const db = new Db();

export default db;
