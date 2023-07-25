
window.addEventListener("load",function(){
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response)
{
  return response.json();
}).then(function(json)
    {  
        let name = " ";
       for(astronauts of json )
        {
        console.log(astronauts);
        name += `<div class="astronaut">
        <div class="bio">
           <h3>${astronauts.firstName}, ${astronauts.lastName}</h3>
           <ul>
           
              <li>Hours in space: ${astronauts.hoursInSpace}</li>
              <li>Active: ${astronauts.active}</li>
              <li>Skills: ${astronauts.skills}</li>
           </ul>
        </div>
        <img class="avatar" src= ${astronauts.picture}>
     </div>
     `
        }
        const container =document.getElementById("container");
        container.innerHTML= name;

    })


})