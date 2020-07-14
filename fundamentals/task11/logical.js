// ex 1
    alert( null || 2 || undefined );    // 2

// ex 2
    alert( alert(1) || 2 || alert(3) ); // 1 2

// ex 3
    alert( 1 && null && 2 );            // null

// ex 4
    alert( alert(1) && alert(2) );      // 1 undefined

// ex 5
    alert( null || 2 && 3 || 4 );       // 3

// ex 6
    let age;
    if (age >= 14 && age <= 90);

// ex 7
    if (age < 14 || age > 90);
    if (!(age >= 14 && age <= 90));

// ex 8
    if (-1 || 0) alert( 'first' );          // first
    if (-1 && 0) alert( 'second' );         // nothing
    if (null || -1 && 1) alert( 'third' );  // third

// ex 9
    let name = prompt("Who's there?");
    if      (!name)     alert("Canceled")
    else if (name != "Admin")   alert("I don't know you")
    else {
        let password = prompt("Password");
        if      (!password)         alert("Canceled")
        else if (password != "TheMaster")   alert("Wrong password")
        else alert("Welcome")
    }
