"use strict"

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

window.onload = function(){
    initStatesDropdown();

}

function initStatesDropdown(){

    // load the dropdown list
   let names = ["Dallas Cowboys", "Denver Broncos", "Houston Texans", "Kansas City Chiefs"];
   let codes = ["DAL", "DEN", "HOU", "KAN"];

   const teamList = document.getElementById("FootballTeam");

   let length = names.length;
   for (let i = 0; i < length; i++) {

      // create the option element and set the text and
      // value at the same time
      let theOption = new Option(names[i], codes[i]); 

      // append the option as a child of (inside) the 
      // select element
      teamList.appendChild(theOption);
   }

}
  