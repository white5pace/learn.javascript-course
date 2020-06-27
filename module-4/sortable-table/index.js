export default class SortableTable {
  static element;
  static  products;

  constructor(headersConfig, {
    data = []
  } = {}) {
    this.headersConfig = headersConfig;
    this.data = data;
    this.subElements = {};

    this.render();

  }

  getTemplate(data) {
    return `<div class="sortable-table">
        ${this.getHeaderRow(this.headersConfig)}
      </div>`;
  }

  getHeaderRow(data) {
    return `<div data-elem="header" class="sortable-table__row sortable-table__header">
        ${this.getHeaderCells(data)}
        </div>`
  }

  getHeaderCells(data) {
    let cells = '';

    for (let cell of data) {
      const cellElement = `<div class="sortable-table__cell" data-id="${cell.id}" data-sortable="${cell.sortable}">${cell.title}</div>`;
      cells += cellElement;
    }
    return cells;
  }

  getProductRows(data) {
    let rows = ''
    for (let productData of data) {
      rows += `<a class="sortable-table__row">${this.getProductCells(productData)}</a>`;
    }
    return rows;
  }

  // caroch nujno otvyzat' logiky rendera productov ot basko
  getProductCells(productData) {
    return `<div class="sortable-table__cell">
            <img class="sortable-table-image" src="${productData.images[0]['url']}" alt="Image">
        </div>
        <div class="sortable-table__cell">${productData.title}</div>

        <div class="sortable-table__cell">${productData.quantity}</div>
        <div class="sortable-table__cell">${productData.price}</div>
        <div class="sortable-table__cell">${productData.sales}</div>`;
  }

  render(data = this.data) {
    const element = document.createElement('div');

    element.innerHTML = this.getTemplate();

    this.element = element.firstChild;

    SortableTable.element = this.element;
  }

  subElementsRender(data) {
    const subElements = document.createElement('div');
    subElements.classList.add('sortable-table__body');
    subElements.dataset.elem = 'body';

    subElements.innerHTML = this.getProductRows(data);

    this.subElements = subElements.firstChild;
    console.log(subElements)
  }

  productShow() {
    document.querySelector('.sortable-table__body').append(SortableTable.products)
  }


  sort (field, order) {
    let data = this.data;
    let sortedData = data.sort(sortData);

    function sortData(a, b) {
      return a.quantity - b.quantity;
    }
    this.remove();
    this.productRender(sortedData);
    this.productShow();
  }

  remove() {
    this.products.remove();
  }

  destroy() {
    this.remove();
    this.subElements = {};
  }
}


// На каком этапе и как мы добаляем элемент с продуктами

// Как же мы его удаляем

