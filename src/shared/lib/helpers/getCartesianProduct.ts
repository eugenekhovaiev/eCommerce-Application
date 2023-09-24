function cartesianProduct<Type1, Type2>(array1: Type1[], array2: Type2[]): (Type1 | Type2)[][] {
  if (array1.length === 0) return array2.map((item) => [item]);
  if (array2.length === 0) return array1.map((item) => [item]);
  return array1.map((item1) => array2.map((item2) => [item1, item2])).flat();
}

export default cartesianProduct;
