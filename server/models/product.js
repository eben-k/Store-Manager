class Product {
  // constructor
  constructor(productId) {
    this.id = productId;
  }
}


class Db {
  constructor() {
    this.products = []; // available rides

    this.ids = 0;
    this.makeTestData();
  }

  // generates id
  // genId() {
  //   this.ids += 1;
  //   return this.ids;
  // }

  // add a product
  // addProduct(prodName, prodCategory, stckQuantity, unitPrice) {
  //   const product = new Product(this.genId());
  //   product.name = prodName;
  //   product.category = prodCategory;
  //   product.quantity = stckQuantity;
  //   product.price = unitPrice;

  //   this.products.push(product);

  //   return product.id;
  // }

  // return all available products
  getProducts() {
    return this.products;
  }

  // returns specific product with given product_id
  // getProduct(productId) {
  //   let i;
  //   for (i = 0; i < this.products.length; i += 1) {
  //     if (this.products[i].id === productId) {
  //       return this.products[i];
  //     }
  //   }
  //   return 0;
  // }

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
