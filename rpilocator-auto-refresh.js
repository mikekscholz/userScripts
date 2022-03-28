// ==UserScript==
// @name        Auto-Refresh - rpilocator.com
// @namespace   Violentmonkey Scripts
// @match       https://rpilocator.com/
// @grant       none
// @version     1.0
// @author      mikekscholz
// @description Auto refreshes rpilocator.com every 4 minutes. Use with the TabFloater browser extension and my userStyle https://raw.githubusercontent.com/mikekscholz/stylus/main/rpilocator.user.css
// @downloadURL https://raw.githubusercontent.com/mikekscholz/userScripts/main/rpilocator-auto-refresh.js
// @homepageURL  https://github.com/mikekscholz/userScripts
// @supportURL   https://github.com/mikekscholz/userScripts/issues
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 4*60*1000);
