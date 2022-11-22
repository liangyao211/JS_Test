const tests = [
   {
      obj1: {
         name: "sheet2",
         freeze: "A1",
         styles: [],
         merges: [],
         rows: {},
         validations: [],
      },
      obj2: {
         name: "sheet2",
         freeze: "A1",
         styles: [],
         merges: [],
         rows: {},
         validations: [],
      },
      expectedResult: true,
   },
   {
      obj1: {
         name: "sheet2",
         freeze: "A1",
         styles: [],
         merges: [],
         rows: {},
         validations: [],
      },
      obj2: "This is a string, not an object. This won't work!",
      expectedResult: false,
   },

   {
      obj1: {
         name: "sheet2",
         freeze: "A1",
         styles: [],
         merges: [],
         rows: {},
         validations: [],
      },
      obj2: 100,
      expectedResult: false,
   },
   {
      obj1: {
         name: "sheet2",
         freeze: "A1",
         styles: [],
         merges: [],
         rows: {},
         validations: [],
      },
      obj2: { name: "sheet2", freeze: "A1", styles: [], merges: [], rows: {} },
      expectedResult: false,
   },
];

const compare = (input, target) => {
   const keys1 = Object.keys(input);
   const keys2 = Object.keys(target);

   if (keys1.length !== keys2.length) return false;

   for (var key of keys1) {
      const value1 = input[key];
      const value2 = target[key];

      const areObjects = isObject(value1) && isObject(value2);

      if (
         (areObjects && !compare(value1, value2)) ||
         (!areObjects && value1 !== value2)
      ) {
         return false;
      }
   }
   return true;
};

const isObject = (object) => {
   return object != null && typeof object === "object";
};

function runTests() {
   tests.forEach(({ obj1, obj2, expectedResult }, i) => {
      const res = compare(obj1, obj2);
      if (res === expectedResult) {
         console.log(`Test ${i + 1}/${tests.length} Passed`);
      } else {
         console.log(`Test ${i + 1}/${tests.length} Failed`);
      }
   });
}

runTests();
