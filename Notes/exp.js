// Sort strings
const dataStr = ['a', 't', 'A', 'B', 'k', 'b'];
dataStr.sort((a, b) => a.localeCompare(b));

// SORT Objects
const data = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
  return vegetable.cost / vegetable.weight;
}

const sortOrder = 'desc';
data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const reverseOrder = sortOrder === 'asc' ? 1 : -1;

  return typeof valueA === 'string'
    ? valueA.localeCompare(valueB) * reverseOrder
    : (valueA - valueB) * reverseOrder;
});

console.log(data);
