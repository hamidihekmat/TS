type Combinable = string | number;
type ConvertorDescriptor = 'as-number' | 'as-text';

// We could also use enum
enum convertorDesc {
  AS_NUMBER,
  AS_TEXT,
}

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConvertorDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(10, 120, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Alex', 'Jones', 'as-text');
console.log(combinedNames);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
