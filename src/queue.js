export function makeQueue() {
  const values = new Set();

  return {
    add(value) {
      values.add(value);
    },
    delete(value) {
      return values.delete(value);
    }
  };
}
