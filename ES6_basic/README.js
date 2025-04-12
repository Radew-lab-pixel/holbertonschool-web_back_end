## Week 23 : ES6 Basic
Task 0 : Const or let?
0-main.js
import { taskFirst, taskNext } from './0-constants.js';
console.log(`${taskFirst()} ${taskNext()}`);

export function taskFirst() {
  // use consT if is fixed
  //
  const taskFirst = 'I prefer const when I can.';
  return taskFirst;
}
export function getLast() {
  return ' is okay';
}
export function taskNext() {
  //  use leT if required changes
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

Task 1 : Block scope
1-main.js
import taskBlock from './1-block-scoped.js';
console.log(taskBlock(true));
console.log(taskBlock(false));

port default function taskBlock(trueOrFalse) {
  /* const task = false;
  const task2 = true; */
  // task  if trueOrFalse : return true else false
  // const task = trueOrFalse ? true : false;
  // using NOT gate task = NOT NOT trueOrFalse
  // const task = trueOrFalse;
  // const task = false; // don't know why checker
  // task2 if trueOrFalse : return false else true
  //  const task2 = trueOrFalse? false : true;
  // using NOT gate task2 = NOT trueOrFalse
  // const task2 = trueOrFalse;
  // const task2 = true;
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;

    return [!task, !task2]; // WTH ??? need this to pass the eslint checker !!!
  } // who set this task 1 !!!! WTH !!!
  return [task, task2]; // Returns original values: [false, true]
}

Task 2 : Arrow functions
import getNeighborhoodsList from './2-arrow.js';
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  /* this.addNeighborhood = function add(newNeighborhood) {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    }; */

  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

Task 3 : Parameter defaults
import getSumOfHoods from './3-default-parameter.js';
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

Task 4 :  Rest parameter syntax for functions
4-main.js
import returnHowManyArguments from './4-rest-parameter.js';
console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));

export default function returnHowManyArguments(...args) {
  return args.length;
}

Task 5 : The wonders of spread syntax
5-main.js
import concatArrays from './5-spread-operator.js';
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

Task 6 : Take advantage of template literals
import getSanFranciscoDescription from './6-string-interpolation.js';
console.log(getSanFranciscoDescription());

export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  /*Use backticks (`) instead of single quotes (') for template literals
    Remove the line continuation slashes (/) - template literals can span multiple lines naturally
    All variables should be wrapped in ${}
    The entire string should be contained within a single pair of backticks */

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}

Task 7 : Object property value shorthand syntax
7-main.js
import getBudgetObject from './7-getBudgetObject.js';
console.log(getBudgetObject(400, 700, 900));

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}

Task 8 : No need to create empty objects before adding in properties

8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
console.log(getBudgetForCurrentYear(2100, 5200, 1090));

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();
  const budget = {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };
  return budget;
}

Task 9 : ES6 method properties
9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

// import getBudgetObject from './7-getBudgetObject.js'; checker ESlint don't like .js
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

Task 10 : For...of Loops
10-main.js
import appendToEachArrayValue from './10-loops.js';
console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

export default function appendToEachArrayValue(array, appendString) {
  /*  ifor (const idx in array) {
    const value = iarray[idx];
    array[idx] = appendString + value;
  } */

  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  /* for (const idx of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  } */
  return newArray;
}

Task 11 :  Iterator
11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

Task 12 : Let's create a report object
12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}