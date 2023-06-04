// try and catch function and how it works
function addTwoNums(a,b){
    try{
        if(typeof(a) !== "number"){
            console.log("The first argument is not a number")
        } else if(typeof(b) !== "number"){
            console.log("The second argument is not a number")
        } else{
            console.log(a+b);
        }
    }catch(err){
        console.log(err);
    }
}

addTwoNums(5, 10);

console.log("----------------New function--------------------");


//Doing defensive programming and adding the key check values to prevent any potential issue

function letterFinder(word, match){
    var condition1 = typeof(word) == "string" && word.length > 2;
    var condition2 = typeof(match) == "string" && match.length == 1;
    if( condition1 && condition2){
        for(let i =0; i < word.length; i++){
            if(word[i] == match){
                console.log("Match found at: ", i);
            } else{
                console.log("No match was found");
            }
        }
    } else{
        console.log("Word must contain two letter and match must have one letter");
    }
}

letterFinder("cat", "c");