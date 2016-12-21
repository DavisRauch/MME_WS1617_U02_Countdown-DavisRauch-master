Countdown.CountdownModel = function () {
    "use strict";
    var that = {};
    
    function getRandomVowel() {
        var vowel = "",
            possibleVowel = "AEIOU";
        
        vowel += possibleVowel.charAt(Math.floor(Math.random() * possibleVowel.length));
        
        return vowel;
    }
    
    function getRandomConsonant() {
        var consonant = "",
            possibleConsonant = "BCDFGHJKLMNPQRSTVWXYZ";
        
        consonant += possibleConsonant.charAt(Math.floor(Math.random() * possibleConsonant.length));
        
        return consonant;
    }
    
    
    that.getRandomVowel = getRandomVowel;
    that.getRandomConsonant = getRandomConsonant;
    return that;
};