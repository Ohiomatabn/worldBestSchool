import { dashboard } from "./dashboard.js";
import "./currentTime.js"


//Rendering the dashboard HTML
let dashboardHTml = '';

dashboard.forEach((dashboard) => {
  dashboardHTml += `
    <a href="${dashboard.url}"
      <div class="card">
        <h3>${dashboard.name}</h3>
        <img src="Icons/${dashboard.image}" alt="MY Profile" />
      </div>
    </a>
  `
});

document.querySelector('.js-dashboard-container').innerHTML = dashboardHTml;

//Toggle for the side bar
document.querySelector('.js-show').addEventListener('click', ()=>{
  document.getElementById('js-sidebar').style.marginLeft = 0;
});

document.querySelector('.js-close').addEventListener('click', () =>{
  document.getElementById('js-sidebar').style.marginLeft = '-250px'
});