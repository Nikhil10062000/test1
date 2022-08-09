/*Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g*/




const word = 'Dog'
function string (str){
    const possible=[]
    for (let i= 0 ; i<= str.length ; i++){
        for (let j = i+1 ; j<=str.length ; j++){
            possible.push(str.slice(i , j))
        }
        
    }
}
string(word)