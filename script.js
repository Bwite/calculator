// your JavaScript file

let statement = [];
function press(instruction){
const container = document.querySelector("#glass");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = instruction;

glass.appendChild(content);

if (instruction !=='='){
statement.push(instruction);
}else{
   const threshold = ['+' , '-' , '*' , '/'];
    const leftside = statement.filter(num =>  threshold.includes(num));
    //const rightside = statement.filter(num => num < threshold);
    console.log("on the left : ", leftside); // Output: [ 8, 10, 7 ]
    const stringWithoutCommas = statement.join(''); // Joins elements with no separator
    console.log(stringWithoutCommas);
    const index = stringWithoutCommas.indexOf(leftside);  // Gets the first index where a space occours
    const a = stringWithoutCommas.slice(0, index); // Gets the first part
    const b = stringWithoutCommas.slice(index + 1);

    console.log(a);
    console.log(b);
    if (leftside =='+'){
      result=add(a,b);
      const container = document.querySelector("#glass");

      const content = document.createElement("p");
      content.classList.add("content");
      content.textContent = result;

      glass.appendChild(content);
    } else if (leftside == '-') {
      result=subtract(a,b);
      const container = document.querySelector("#glass");

      const content = document.createElement("p");
      content.classList.add("content");
      content.textContent = result;
      glass.appendChild(content);
    } else if (leftside == '/') {
      result=divide(a,b);
      const container = document.querySelector("#glass");

      const content = document.createElement("p");
      content.classList.add("content");
      content.textContent = result;
      glass.appendChild(content);
    }
    else if (leftside == '*') {
      result=multiply(a,b);
      const container = document.querySelector("#glass");

      const content = document.createElement("p");
      content.classList.add("content");
      content.textContent = result;
      glass.appendChild(content);
    }

}

console.log(statement);

}
//not working rn
function clear(){
const container = document.querySelector("#glass");

const content = document.createElement("p");
content.Remove(content);

}


const add = function(a,b) {
    a=parseInt(a);
    b=parseInt(b);
    console.log(a+b)
    return a+b;
};

const subtract = function(a,b) {
   a=parseInt(a);
   b=parseInt(b);
	return a-b;
};
const divide = function(a,b){
    a=parseInt(a);
    b=parseInt(b);
    return a/b;
}

const multiply = function(a,b) {
   a=parseInt(a);
   b=parseInt(b);
 
   return a*b;
};
function getFromDom(){
  
  const nodelist = document.querySelectorAll('.content');
  console.log(nodelist);
  


}

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