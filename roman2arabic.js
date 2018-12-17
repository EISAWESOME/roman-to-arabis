const getValue = (romanNumber) => {
    switch(romanNumber) {
        case("I"):
            return 1;
            break;
        case("V"):
            return 5;
            break;
        case("X"):
            return 10;
            break;
        case("L"):
            return 50;
            break;
        case("C"):
            return 100;
            break;
        case("D"):
            return 500;
            break;
        case("M"):
            return 1000;
            break;
        default:
            throw new Error("Symbole non reconnu : " + romanNumber);
            break;
    }
}

const convert = (input) => {
    
    let total = 0;
    const arrInput = input.split('');
    try {
        for(let i=0; i <= arrInput.length; i++) {
            let incr = 0;
            if(arrInput[i] ) {
                if(arrInput[i+1]) {
                    if(getValue(arrInput[i]) < getValue(arrInput[i+1]) ) {
                        incr = getValue(arrInput[i+1]) - getValue(arrInput[i]);
                        i++;
                    } else {
                        incr = getValue(arrInput[i]);    
                    }
                } else {
                    incr = getValue(arrInput[i]);
                }
                total += incr;
            }            
        }
        return total;
    } catch(e) {
        console.error(e);
    }
    
}

var args = process.argv.slice(2);
console.log(convert(args[0]))