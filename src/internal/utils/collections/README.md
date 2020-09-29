**Create a collection**

```
const items = [
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Orange' },
  { id: 2, name: 'Pear' }
];
const itemsCollection  = collection(items)
```

**Move an item before another item**

```
// By property names
collection(items)
  .move({name: 'Apple'})
  .before({name: 'Orange'})

// By indexes
collection(items)
  .move(2)
  .before(0)
```
