let name = prompt("What's your name?", 'Alex');
let isNameCorect = confirm(`Are you called ${name}?`);
if (isNameCorect) alert(`Hi ${name}, nice to meet you`) 
    else alert(`Either way, nice to meet you`)