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

function onClickEvent(){

    const team = document.getElementById('FootballTeam');
    let teamCode1 = team.value;
    if(teamCode1==null){
        alert("No team selected");
        return;
    }
    else{

      let team = findTeam(teamCode1);
        let msgDiv = document.getElementById('message');
        console.log(teamCode1);
        msgDiv.innerHTML="You selected the"+team.name+"("+teamCode1+")"+"who plays for"+team.locatedIn;
    }

    function findTeam(arrayValue){
      let length = teams.length;
      for(let i = 0;i<length;i++){
        if(teams[i].teamcode==arrayValue){
          return teams[i];
        }
      }
    }

    
}
  