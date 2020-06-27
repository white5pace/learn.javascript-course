/* Необходимо реализовать ф-цию "invertObject". Ф-ция принимает объект свойства к-го могут быть только примитивными значениями, 
а возвращает новый объект ключи и свойства к-го заменены между собой местами.  */

export function invertObj (obj) {
  if (!obj) return;
  
  const objEntries = Object.entries(obj);
  const newObj = {};
  for (let i = 0; i < objEntries.length; i++) {
    newObj[objEntries[i][1]] = objEntries[i][0];
  }

  return newObj;
}