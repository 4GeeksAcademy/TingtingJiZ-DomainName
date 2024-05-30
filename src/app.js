/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let point = [".com", ".net"];


  let domainName = ''
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < point.length; l++)
        domainName += " " + pronoun[i] + adj[j] + noun[k] + point[l];
      }
    }
  }

  console.log(document.querySelector('#GetResults').innerHTML) 
  document.querySelector('#GetResults').innerHTML = domainName
};