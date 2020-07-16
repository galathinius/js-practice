const name = prompt("What's your name?", 'Alex');
const isNameCorect = confirm(`Are you called ${name}?`);
if (isNameCorect) alert(`Hi ${name}, nice to meet you`);
else alert('Either way, nice to meet you');
