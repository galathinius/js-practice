// ex 1
    let i = 3;

    while (i) {
    alert( i-- );
    }   // 1

// ex 2
    let i = 0;
    while (++i < 5) alert( i ); // 1 2 3 4

    let i = 0;
    while (i++ < 5) alert( i ); // 1 2 3 4 5

// ex 3
    for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

    for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4 

// ex 4 
    for (let i = 2; i <= 10; i+=2) alert(i)

// ex 5
    while ( 1 ) {
        let number = prompt("number:");
        if (!number || number > 100) break
    }

// ex 6
    let n = + prompt('give a number:');
    for(let i = 2; i <= n; i++){
        let divizors = 0;
        let root = Math.sqrt(i)

        for(let j = 2; j <= root; j++) 
            if (!(i%j)) divizors++;
            
        if (divizors == 0) alert(i)
    }
