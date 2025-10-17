const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
	return a-b;
};
const divide = function(a,b){
    return a/b;
}

const multiply = function(numbers) {
  const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return product;
};

const  operate = function(a,b,s){
    if (s==='+'){
        return add(a,b);
    } else if (s==='-'){
        return subtract();
    }
    else if (s==='*') {
        return multiply();
    }
    else if (s==='/'){
      return divide();
    }
}

const sum = function(numbers) {
	const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};