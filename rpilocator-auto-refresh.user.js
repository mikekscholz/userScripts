// ==UserScript==
// @name        Auto-Refresh with timer - rpilocator.com?country= filter
// @namespace   Violentmonkey Scripts
// @match       http*://rpilocator.com/*
// @grant       none
// @version     1.0.1
// @author      mikekscholz
// @description Auto refreshes rpilocator.com. Use with the TabFloater browser extension and my userStyle https://raw.githubusercontent.com/mikekscholz/userStyles/main/rpilocator.user.css
// @downloadURL https://raw.githubusercontent.com/mikekscholz/userScripts/main/rpilocator-auto-refresh.user.js
// @homepageURL https://github.com/mikekscholz/userScripts
// @supportURL  https://github.com/mikekscholz/userScripts/issues
// ==/UserScript==
refreshDelay = 2;

$( '#filterPills' ).append( '<span class="badge rounded-pill bg-info text-dark" id="time"></span>' );

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Next Refresh: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var counterMinutes = 60 * refreshDelay,
        display = document.querySelector('#time');
    startTimer(counterMinutes, display);
};

setTimeout(function(){ location.reload(); }, refreshDelay*60*1000);
