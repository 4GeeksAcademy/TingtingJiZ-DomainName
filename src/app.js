/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net"];


  let domainsName = ''
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++)
        domainsName += `<li>${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}</li>`;
      } 
    }
  }

  console.log(document.querySelector('#get-results').innerHTML) 
  document.querySelector('#get-results').innerHTML = domainsName
};

