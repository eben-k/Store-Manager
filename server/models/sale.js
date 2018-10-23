class Sale {
  // constructor
  constructor(saleId) {
    this.id = saleId;
  }
}

class Db {
  constructor() {
    this.sales = []; // available sales records
    this.ids = 3;
    this.makeTestData();
  }

  // add a product
  addSale(prodName, saleDate, soldQuantity, unitPrice, total) {
    const sale = new Sale(this.ids);
    sale.name = prodName;
    sale.date = saleDate;
    sale.quantity = soldQuantity;
    sale.price = unitPrice;
    sale.total = total;

    this.sales.push(sale);
    this.ids += 1;
    return sale.id;
  }


  makeTestData() {
    // add some initial data
    this.sales[0] = {
      saleId: 1,
      name: 'Indomie Noodles',
      date: '3/4/2018',
      quantity: '4',
      price: '$15',
      total: '$60',
    };

    this.sales.push({
      saleId: 2,
      name: 'Pampers Baby Diapers',
      date: '3/4/2018',
      quantity: '10',
      price: '$23',
      total: '$230',
    });

    this.sales.push({
      saleId: 3,
      name: 'Nike Airforce 1',
      date: '3/4/2018',
      quantity: '2',
      price: '$200',
      total: '$400',
    });
  }

  // return all available sales records
  getSales() {
    return this.sales;
  }
}
const db = new Db();

export default db;
