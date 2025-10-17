// your JavaScript file
function press(instruction){
const container = document.querySelector("#glass");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = instruction;

glass.appendChild(content);
}
//not working rn
function clear(){
const container = document.querySelector("#glass");

const content = document.createElement("p");
content.Remove(content);

}


const add = function(a,b) {
    console.log(a+b)
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

const  operate = function(arrayOperation){
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