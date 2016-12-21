/* eslint-env browser */

var Countdown = Countdown || {};
Countdown = (function () {
    "use strict";

    var that = {},
        countdownController,
        countdownView,
        countdownModel,
        position = 0,
        letters = "";
    
    //should be in "CountdownModel"
    
    
    function onDataAvailabe(data) {
        var result = JSON.parse(data);
        console.log(result);
    }
    
    function requestAjax() {
        var text = document.getElementsByClassName("word-input")[0].value;
        request.get({
            url: "https://en.wiktionary.org/w/api.php?action=query&origin=*&format=json&titles=student",
            success: onDataAvailable
        })
    }
    
    function getRandomVowel() {
        var vowel = "",
            possibleVowel = "AEIOU";
        
        vowel += possibleVowel.charAt(Math.floor(Math.random() * possibleVowel.length));
        
        return vowel;
    }
    
    //should be in "CountdownModel"
    
    function getRandomConsonant() {
        var consonant = "",
            possibleConsonant = "BCDFGHJKLMNPQRSTVWXYZ";
        
        consonant += possibleConsonant.charAt(Math.floor(Math.random() * possibleConsonant.length));
        
        return consonant;
    }
    
    function onTimeUp() {
        document.getElementById("hand").className = "hand";
        document.getElementById("results").className = "results";
        checkLetters();
    }
    
    function checkLetters() {
        var text = document.getElementsByClassName("word-input")[0].value;
        console.log(letters.toLowerCase().indexOf(text.charAt(i)));
        for (var i = 0; i <= text.length; i++) {
            if (letters.toLowerCase().indexOf(text.charAt(i)) !== -1 && letters.toLowerCase().indexOf(text.charAt(i)) !== 0) {
                letters = letters.slice(0, letters.toLowerCase().indexOf(text.charAt(i))) + letters.slice(letters.toLowerCase().indexOf(text.charAt(i)) + 1);
                document.getElementsByClassName("points")[0].innerHTML = text.length;
                document.getElementsByClassName("hint")[0].innerHTML = "";
                console.log(letters);
            } else if (letters.toLowerCase().indexOf(text.charAt(i)) === -1){
                document.getElementsByClassName("points")[0].innerHTML = "0";
                document.getElementsByClassName("hint")[0].innerHTML = "Ungültige Buchstabenkombination";
                break;
            } else if (text === "") {
                document.getElementsByClassName("hint")[0].innerHTML = "Keine Eingabe durchgeführt"
                break;
            } else if (text.length === 9) {
                document.getElementsByClassName("points")[0].innerHTML = text.length * 2;
                document.getElementsByClassName("hint")[0].innerHTML = "Doppelte Punktzahl (9 x 2)"
                break;
            }
        }
        
        
        
        /*else if (letters.toLowerCase().indexOf(text.toLowerCase()) === -1) {
        document.getElementsByClassName("hint")[0].innerHTML = "Ungültige Buchstabenkombination";
          
        } else if (letters.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
            document.getElementsByClassName("hint")[0].innerHTML = "";
            document.getElementsByClassName("points")[0].innerHTML = text.length;
            
            
        }
        */
    }
    
    
    //var stringquery = "";
                   
    function onVowel() {
        if (position < 9) {
            document.getElementsByClassName("letter empty")[0].className = "letter";
            document.getElementsByClassName("letter")[position].innerHTML = getRandomVowel();
            letters += document.getElementsByClassName("letter")[position].innerHTML;
            position += 1;
            if (position === 9) {
                document.getElementById("hand").className = "hand hand-animated";
                var timer = setInterval(onTimeUp, 30000);
            }
        }
        
    }
    
    function onConsonant() {
        if (position < 9) {
            document.getElementsByClassName("letter empty")[0].className = "letter";
            document.getElementsByClassName("letter")[position].innerHTML = getRandomConsonant();
            letters += document.getElementsByClassName("letter")[position].innerHTML;
            position += 1;
            if (position === 9) {
                document.getElementById("hand").className = "hand hand-animated";
                var timer = setInterval(onTimeUp, 30000);
            }
        }
    }
    
    
    
    function onPressStart() {
        countdownController.onStart();
        
    }
    
    function init() {
        var menuscreen = document.querySelector(".menu-screen"),
            letters = document.querySelector(".letters"),
            vowelButton = document.querySelector(".add-vowel"),
            consonantButton = document.querySelector(".add-consonant"),
            startButton = document.querySelector(".start-game"),
            menuScreen = document.querySelector("#menu-screen"),
            
        
            countdownModel = new Countdown.CountdownModel();
        
        countdownController = new Countdown.CountdownController(vowelButton, consonantButton, startButton, menuScreen);
        countdownController.init();
        
        countdownController.setVowelInputListener(onVowel);
        countdownController.setConsonantInputListener(onConsonant);
        countdownController.setStartListener(onPressStart);
        
        countdownView = new Countdown.CountdownView();
        
    }

    that.init = init;
    return that;
}());
