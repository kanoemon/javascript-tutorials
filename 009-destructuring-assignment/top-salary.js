let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let topName = null, topSalary = 0;
	for(let [name, salary] of Object.entries(salaries)) {
  	if (salary >= topSalary) {
    	[topName, topSalary] = [name, salary];
    }
  }
  return topName;
}

console.log(topSalary(salaries));
