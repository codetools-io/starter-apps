export default function groupBy(c, keyName) {
  return c.reduce((accum, item) => {
    const key = item[keyName];

    if (!accum[key]) {
      return {
        ...accum,
        [key]: [item],
      };
    }

    return {
      ...accum,
      [key]: [...accum[key], item],
    };
  }, {});
}
