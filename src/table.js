import React, { Component } from 'react';

import data from './data.json';
import TableRows from './table_rows';

for (let i = 0; i < data.length; i++) {
  data[i].position = i;
}

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };

    this.sortIncrementBy = this.sortIncrementBy.bind(this);
    this.sortDecrementBy = this.sortDecrementBy.bind(this);
  }

  sortIncrementBy(term) {
    // for (let i = 0; i < this.state.data.length; i++) {
    //   this.state.data[i].position = i;
    // }
    const sortedData = this.state.data.sort((a, b) => {
      if (a[term] < b[term]) return -1;
      if (a[term] > b[term]) return 1;
      return a.position - b.position;
    });
    this.setState({ data: sortedData });
  }

  sortDecrementBy(term) {
    // for (let i = 0; i < this.state.data.length; i++) {
    //   this.state.data[i].position = i;
    // }
    const sortedData = this.state.data.sort((a, b) => {
      if (a[term] < b[term]) return 1;
      if (a[term] > b[term]) return -1;
      return a.position - b.position;
    });
    this.setState({ data: sortedData });
  }

  render() {
    return (
      <section className="">
        <div className="container">
          <table id="people-data">
            <thead>
              <tr>
                <th>
                  Name<span onClick={() => this.sortIncrementBy('name')}>
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('name')}>
                    &darr;
                  </span>
                </th>
                <th>
                  Address<span onClick={() => this.sortIncrementBy('address')}>
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('address')}>
                    &darr;
                  </span>
                </th>
                <th>
                  City<span onClick={() => this.sortIncrementBy('city')}>
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('city')}>
                    &darr;
                  </span>
                </th>
                <th>
                  Region<span onClick={() => this.sortIncrementBy('region')}>
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('region')}>
                    &darr;
                  </span>
                </th>
                <th>
                  Country<span onClick={() => this.sortIncrementBy('country')}>
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('country')}>
                    &darr;
                  </span>
                </th>
                <th>
                  Birthday<span
                    onClick={() => this.sortIncrementBy('birthday')}
                  >
                    &uarr;
                  </span>
                  <span onClick={() => this.sortDecrementBy('birthday')}>
                    &darr;
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows data={this.state.data} />
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Table;
