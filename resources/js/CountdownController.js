Countdown.CountdownController = function (inputVowelEl, inputConsonantEl, startEl, menuEl) {
    "use strict";
    var that = {},
        onVowel,
        onConsonant,
        onPressStart;
    
    
    function onVowelInput(event) {
        onVowel();
    }
    
    function onConsonantInput(event) {
        onConsonant();
    }
    
    function onStart(event) {
        startEl.className = "button start-game hidden";
        menuEl.className = "menu-screen hidden";
    }
    
    function setVowelInputListener(listener) {
        onVowel = listener;
    }
    
    function setConsonantInputListener(listener) {
        onConsonant = listener;
    }
    
    function setStartListener(listener) {
        onPressStart = listener;
    }
    
    function init() {
        inputVowelEl.addEventListener("click", onVowelInput);
        inputConsonantEl.addEventListener("click", onConsonantInput);
        startEl.addEventListener("click", onStart);
    }
    
    that.setVowelInputListener = setVowelInputListener;
    that.setConsonantInputListener = setConsonantInputListener;
    that.setStartListener = setStartListener;
    that.init = init;
    return that;
};