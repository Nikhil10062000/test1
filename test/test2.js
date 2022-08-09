function vowel(str1)
{
  let list = 'aeiouAEIOU';
  let count = 0;
  
  for(var x = 0; x < str1.length ; x++){
    if (list.indexOf(str1[x]) !== -1){
      count += 1;
    }
  
  }
  return count;
}
console.log(vowel("The quick brown fox"));