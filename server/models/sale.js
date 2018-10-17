class Db {
  constructor() {
    this.sales = []; // available sales records
    this.ids = 0;
    this.makeTestData();
  }

  // returns specific sale record with given employee_id
  getAttendant(employeeId) {
    let i;
    for (i = 0; i < this.sales.length; i += 1) {
      if (this.sales[i].employeeId === employeeId) {
        return this.sales[i];
      }
    }
    return undefined;
  }

  makeTestData() {
    // add some initial data
    this.sales[0] = {
      employeeId: 1,
      name: 'Jane Doe',
      date: '3/4/2018',
      sold: '10 products',
      value: '$100',
    };

    this.sales.push({
      employeeId: 2,
      name: 'John Tate',
      date: '3/4/2018',
      sold: '4 products',
      value: '$80',
    });

    this.sales.push({
      employeeId: 3,
      name: 'Joye Mayor',
      date: '3/4/2018',
      sold: '30 products',
      value: '$400',

    });
  }
}
const db = new Db();
export default db;
