// 1. Create an array styles with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend Rap and Reggae to the array.

let styles = ['Jazz', 'Blues'];     // 1
styles.push('Rock-n-Roll');         // 2
styles[Math.floor(styles.length/2)] = 'Classics';   // 3
console.log(styles.shift());        // 4
styles.unshift('Rap', 'Reggae');    // 5
console.log(styles);