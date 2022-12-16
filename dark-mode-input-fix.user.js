// ==UserScript==
// @name        Dark mode text input fix
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      mikekscholz
// @description Websites that have unstyled inputs end up with black on dark inputs. This script will apply a white
//              background ONLY if it is not properly styled by the sites creators.
// @downloadURL https://raw.githubusercontent.com/mikekscholz/userScripts/main/dark-mode-input-fix.user.js
// @homepageURL https://github.com/mikekscholz/userScripts
// @supportURL  https://github.com/mikekscholz/userScripts/issues
// ==/UserScript==
var inputs, index;

inputs = document.querySelectorAll("input[type=text]");
for (index = 0; index < inputs.length; ++index) {
  if (!inputs[index].style.backgroundColor) {
    inputs[index].style.backgroundColor = "#FFFFFF";
  }
}
