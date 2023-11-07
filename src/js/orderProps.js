export default function orderByProps(obj, order) {
  const orderedProps = []; // для свойств, указанных в порядке сортировки
  const unorderedProps = []; // для остальных свойств

  for (const prop in obj) {
    if (order.includes(prop)) {
      orderedProps.push({ key: prop, value: obj[prop] });
    } else {
      unorderedProps.push({ key: prop, value: obj[prop] });
    }
  }
  // сортируем на основе порядка, указанного в order
  orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

  unorderedProps.sort((a, b) => a.key.localeCompare(b.key)); // сортируем в алфавитном порядке

  // объединяем отсортированные и неотсортированные свойства в единый массив и возвращаем его
  return [...orderedProps, ...unorderedProps];
}
