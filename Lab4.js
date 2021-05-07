function view(counter){
    return(`\ncounter: ${counter} \n   (+)(-)\n   (q) to quit`);
}

function update(msg, counter){
    if (msg ==='+'){
        return counter += 1;
    }
    if(msg === '-'){
        return counter -= 1;
    }
    else{
        return counter;
    }
    
}

function app(counter){
    while (true){
        
        console.clear();
        console.log(view(counter));
        var prompt = require('prompt-sync')({
        });
        msg = prompt("What would you do: ");
        if (msg === "q"){
            return false;
        }
        else{
            
            counter = update(msg, counter);
        }       
    }
}

app(0);

