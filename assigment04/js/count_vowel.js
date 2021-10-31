function vowels() {
    let str = document.getElementById('textname').value;
    let count = 0;
    let total_vowels = "";



    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[a-zA-Z]/) != null) {


            if (str.charAt(i).match(/[aeiouAEIOU]/)) {
                total_vowels = total_vowels + str.charAt(i);
                count++;
            }
        }
    }
    document.getElementById('vowels').value = total_vowels;
    document.getElementById('vcount').value = count;

}
alert(total_vowels);