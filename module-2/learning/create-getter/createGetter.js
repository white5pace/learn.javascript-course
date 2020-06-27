/* Необходимо реализовать функцию "createGetter". Функция должна принимать строку вида "prop-1.prop-2.prop-n",
где "prop-1, ..., prop-n" - это свойства объекта разделенные точкой.
Возвращать "createGetter" должен функция к-я по заданному пути будет искать значение в переданном ей объекте.  
*/

export function createGetter(field) {
  const fields = field.split('.');

  return (obj) => {
    let objectStore = obj;
    for (let i = 0; i < fields.length; i++) {
      if (objectStore != undefined) {
        objectStore = objectStore[fields[i]];
      }
    }
    return objectStore;
  }
}

// const product = {
//   category: {
//     title: "Goods"
//   }
// }

// const getter = createGetter('category.title');
// console.error(getter(product)); // Goods 
