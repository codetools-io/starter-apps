import * as collections from './collections';

const fruits = [
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Orange' },
  { id: 2, name: 'Pear' },
  { id: 3, name: 'Grape' },
  { id: 4, name: 'Watermelon' },
  { id: 5, name: 'Kiwi' },
  { id: 6, name: 'Strawberry' },
  { id: 7, name: 'Mango' },
  { id: 8, name: 'Pineapple' },
  { id: 9, name: 'Peach' },
  { id: 10, name: 'Blueberry' },
  { id: 11, name: 'Raspberry' },
];
const employees = [
  { id: 0, name: 'Jane', department: 'Finance' },
  { id: 1, name: 'John', department: 'Finance' },
  { id: 2, name: 'Suzy', department: 'Engineering' },
  { id: 3, name: 'Sam', department: 'Sales' },
];
describe('collections', () => {
  test('can add an item to the end', () => {
    const collection = collections.append(fruits, {
      id: 12,
      name: 'Blackberry',
    });

    expect(collection.length).toEqual(13);
    expect(collection[12].name).toEqual('Blackberry');
  });
  test('can add an item to the beginning', () => {
    const collection = collections.prepend(fruits, {
      id: 13,
      name: 'Blackberry',
    });

    expect(collection.length).toEqual(13);
    expect(collection[0].name).toEqual('Blackberry');
  });
  test('can update an item', () => {
    const collection = collections.update(fruits, {
      id: 0,
      name: 'Blackberry',
    });
    expect(collection.length).toEqual(12);
    expect(collection[0].name).toEqual('Blackberry');
  });
  test('can remove an item', () => {
    const collection1 = collections.remove(fruits, {
      id: 2,
    });
    const collection2 = collections.remove(fruits, 4);
    expect(collection1.length).toEqual(11);
    expect(collection1[2].name).not.toEqual('Pear');
    expect(collection2.length).toEqual(11);
    expect(collection2[4].name).not.toEqual('Watermelon');
  });
  test('can update item properties', () => {
    const collection = collections.patch(fruits, {
      id: 0,
      colors: ['red', 'green'],
    });
    expect(collection.length).toEqual(12);
    expect(collection[0]).toEqual({
      id: 0,
      name: 'Apple',
      colors: ['red', 'green'],
    });
  });
  test('can find an item', () => {
    const item = collections.find(fruits, {
      name: 'Watermelon',
    });
    expect(item).toEqual({ id: 4, name: 'Watermelon' });
  });
  test('can insert an item after another item by index', () => {
    const collection = collections.insertAfterIndex(
      fruits,
      {
        id: 13,
        name: 'Blackberry',
      },
      3
    );

    expect(collection[3].id).toEqual(3);
    expect(collection[4].id).toEqual(13);
    expect(collection[5].id).toEqual(4);
  });
  test('can insert an item before another item by index', () => {
    const collection = collections.insertBeforeIndex(
      fruits,
      {
        id: 13,
        name: 'Blackberry',
      },
      3
    );

    expect(collection[1].id).toEqual(1);
    expect(collection[2].id).toEqual(2);
    expect(collection[3].id).toEqual(13);
    expect(collection[4].id).toEqual(3);
  });
  test('can insert an item after another item by property match', () => {
    const collection = collections.insertAfterMatch(
      fruits,
      {
        id: 13,
        name: 'Blackberry',
      },
      { name: 'Blueberry' }
    );

    expect(collection[10]).toEqual({
      id: 10,
      name: 'Blueberry',
    });
    expect(collection[11]).toEqual({
      id: 13,
      name: 'Blackberry',
    });
  });
  test('can insert an item before another item by property match', () => {
    const collection = collections.insertBeforeMatch(
      fruits,
      {
        id: 13,
        name: 'Blackberry',
      },
      { name: 'Blueberry' }
    );

    expect(collection[10]).toEqual({
      id: 13,
      name: 'Blackberry',
    });
    expect(collection[11]).toEqual({ id: 10, name: 'Blueberry' });
  });
  test('can move an item after another item', () => {
    const collection = collections.moveAfter(fruits, { id: 0 }, { id: 3 });

    expect(collection.slice(0, 6)).toEqual([
      { id: 1, name: 'Orange' },
      { id: 2, name: 'Pear' },
      { id: 3, name: 'Grape' },
      { id: 0, name: 'Apple' },
      { id: 4, name: 'Watermelon' },
      { id: 5, name: 'Kiwi' },
    ]);
  });
  test('can move an item before another item', () => {
    const collection = collections.moveBefore(fruits, { id: 3 }, { id: 2 });

    expect(collection.slice(0, 4)).toEqual([
      { id: 0, name: 'Apple' },
      { id: 1, name: 'Orange' },
      { id: 3, name: 'Grape' },
      { id: 2, name: 'Pear' },
    ]);
  });
  test('can pipe through functions', () => {
    const result = collections.collection(fruits).pipe(
      (c) => {
        return c.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      },
      (c) => c.filter((item) => !item.name.toLowerCase().includes('berry'))
    );

    expect(result).toEqual([
      { id: 0, name: 'Apple' },
      { id: 3, name: 'Grape' },
      { id: 5, name: 'Kiwi' },
      { id: 7, name: 'Mango' },
      { id: 1, name: 'Orange' },
      { id: 9, name: 'Peach' },
      { id: 2, name: 'Pear' },
      { id: 8, name: 'Pineapple' },
      { id: 4, name: 'Watermelon' },
    ]);
  });
  test('can group items by property', () => {
    const result = collections.groupBy(employees, 'department');

    expect(result).toEqual({
      Engineering: [{ department: 'Engineering', id: 2, name: 'Suzy' }],
      Finance: [
        { department: 'Finance', id: 0, name: 'Jane' },
        { department: 'Finance', id: 1, name: 'John' },
      ],
      Sales: [{ department: 'Sales', id: 3, name: 'Sam' }],
    });
  });
});
