import './index.scss';

const createTable = ({ data }) => {
  const columns = Object.keys(data[0]);
  const tableEl = document.createElement('table');
  const theadEl = document.createElement('tr');
  columns
    .forEach((column) => {
      const columnEl = document.createElement('th');
      columnEl.appendChild(document.createTextNode(column));
      theadEl.appendChild(columnEl);
    });
  tableEl.appendChild(theadEl);
  data
    .forEach((row) => {
      const rowEl = document.createElement('tr');
      columns
        .forEach((column) => {
          const columnEl = document.createElement('td');
          columnEl.appendChild(document.createTextNode(row[column]));
          rowEl.appendChild(columnEl);
        });
      tableEl.appendChild(rowEl);
    });
  return tableEl;
};

document.addEventListener('DOMContentLoaded', () => {
  const data = [...(new Array(10))].map((obj, i) => ({ id: i, title: `title ${i}` }));
  const tableEl = createTable({ data });
  const mountNode = document.getElementById('app');
  mountNode.innerHtml = '';
  mountNode.appendChild(tableEl);
});
