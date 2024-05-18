function checkvowel(){
    var text = document.getElementById('inputText').value;

    var vowelcount = 0;
    // to print the vowels in webpage
    var vowelfound = []
    // convert it into lowercase
    text = text.toLowerCase()

    for(var i = 0 ; i < text.length; i++){
        var char = text.charAt(i);

        if(isVowel(char)){
            vowelcount++;
            vowelfound.push(char)
        }

    }

    var result = document.getElementById('result');
    result.textContent = "Total Vowels: " + vowelcount+ " :==>"+ "\nVowels: " + vowelfound.join(', ');

    // console.log("Vowels found: " + vowelfound.join(', '));

    



}


function isVowel(char){
    var vowel = ['a','e','i','o','u']
    return vowel.includes(char)

}