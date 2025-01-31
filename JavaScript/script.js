import { dashboard } from "./dashboard.js";


//Rendering the dashboard HTML
let dashboardHTml = '';

dashboard.forEach((dashboard) => {
  dashboardHTml += `
      <div class="card">
        <h3>${dashboard.name}</h3>
        <img src="Icons/${dashboard.image}" alt="MY Profile" />
      </div>
  `
});

document.querySelector('.js-dashboard-container').innerHTML = dashboardHTml;