function Generate() {
    // Soon to be the new Password
    let passwordgenerated = [];
    // Possible Character Combinations
    let randomvar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"];
    let randomnumber = ["1","2","3","4","5","6","7","8","9"];
    let randomsymbol = ["!","@","#","$","%","&"];
    // Length Of The Password
    console.log("Password Generator");
    let length = prompt("Please Input The Length Of Your Password: ");
    // Checks if Length is Advised or Not
    if(length>30 || length<5) { // If Length is not advised -->
        // console.log("Too Long, Try Again.");
        document.getElementById('product').innerHTML = ("Too Long/Too Short, Try Again.");
    } else { // If the Length is in advised range -->
        for(let tc = length; tc>0; tc--) {
            // Type of Character We will be adding to the Password
            let selection = Math.floor(Math.random() * 4);
            switch(selection) {
                case 1: // Type Car 1
                {
                    let newchar = randomnumber[Math.floor(Math.random() * 8)];
                    passwordgenerated += newchar;
                    break; 
                }
                case 2: // Type Char 2
                {
                    let newchar = randomsymbol[Math.floor(Math.random() * 6)];

                    passwordgenerated += newchar;
                    break; 
                }
                default: // Type Char > 3
                {
                    //console.log(randomvar[Math.floor(Math.random() * 26)]);
                    let newchar = randomvar[Math.floor(Math.random() * 25)];
                    passwordgenerated += newchar;
                    break;
                }
            }
        }
        // Outputs Array Length Password
        //console.log(passwordgenerated);
        document.getElementById('product').innerHTML = passwordgenerated;
    }
}




