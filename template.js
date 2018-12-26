{
// copy these over one at a time as you are ready to move on
console.log("--- --- ((a + b) == (c < d)) && e --- ---");

console.log('--- test cases ---')
// create test cases to describe your expression's behavior
//  use your groupings and first principles to justify
// add to this as you work your way through the steps
// the final step will be to run all test cases
let test_cases = [
  {name: 'alternating', args: [true, false, true, false, true], expected: false},
  {name: 'all true', args: [true, true, true, true, true], expected: false},
  {name: 'all false', args: [false, false, false, false, false], expected: false},
  {name: '0, 1, 2, 3, 4', args: [0, 1, 2, 3, 4], expected: 4},
  {name: 'a, b, c, d, e', args: ['a', 'b', 'c', 'd', 'e'], expected: false},
];

console.log('--- raw expression ---')
  function expression(_a, _b, _c, _d, _e) {
    return ((_a + _b) == (_c < _d)) && _e
  };
  run_tests(expression, test_cases)

console.log("--- operator precedence ---");
// modify the input variables to see how the expression behaves

{ // ((a + b) == (c < d)) && e 

  const a = true;
  const b = false;
  const c = true;
  const d = false;
  const e = true;


  const  expected   = ((a + b) == (c < d)) && e;
  const operation_1 = ((1) == (c < d)) && e;
  const operation_2 = ((1) == (false)) && e;
  const operation_3 = (false) && e;
  const operation_4 = false;

  if (operation_1 !== expected) console.log('precedence 1');
  if (operation_2 !== expected) console.log('precedence 2');
  if (operation_3 !== expected) console.log('precedence 3');
  if (operation_4 !== expected) console.log('precedence 4');
};

console.log("--- step-through ---");
 // study the behavior of each step in your expression manually
  // test yourself by predicting each step with different inputs
  // try filling out all steps before hitting 'run'

{ // ((a + b) == (c < d)) && e 
  const a = true;
  const b = false;
  const c = true;
  const d = false;
  const e = true;

  let expected_1 = 1;
  let actual_1 = a + b;

  let expected_2 = false;
  let actual_2 = c < d;

  let expected_3 = false;
  let actual_3 = actual_1 == actual_2;

  let expected_4 = false;
  let actual_4 = actual_3 && e

  if (expected_1 !== actual_1) console.log('step-through 1');
  if (expected_2 !== actual_2) console.log('step-through 2');
  if (expected_3 !== actual_3) console.log('step-through 3');
  if (expected_4 !== actual_4) console.log('step-through 4');
};


console.log('--- expand it ---')

  // ((a + b) == (c < d)) && e 
  
  function expanded(a, b, c, d, e) {
    let result; 
    { // = String(Boolean(a) == Number(b));
      const step_1 = a + b;
      const step_2 = c < d;
      const step_3 = step_1 == step_2;
      const step_4 = step_3 && e;
      result = step_4;
    }
    return result
  }
  run_tests(expanded, test_cases);


console.log('--- abstract it ---');
  // this step will be trickier for
  //  comma, spread, destructuring

  function abstracted(a, b, c, d, e) {
    let result;
    {
      const step_1 = plus(a, b)
      const step_2 = less_than(c, d)
      const step_3 = loosely(step_1, step_2)
      const step_4 = and(step_3, e)
      result = step_4
    }
    return result;
  }
  run_tests(substituted, test_cases)

  function plus(_a, _b) {
    return _a + _b;
  };
  function less_than(_a, _b) {
    return _a < _b;
  };
  function loosely(_a, _b) {
    return _a == _b;
  };
  function and(_a, _b) {
    return _a && _b;
  };

console.log('--- compose it ---')

  function composed(a, b, c, d, e) {
    return and(loosely(plus(a, b), less_than(c, d)), e)
  }
  run_tests(recompressed, test_cases)





  // testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}