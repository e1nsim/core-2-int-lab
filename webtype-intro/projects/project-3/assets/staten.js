const appToken = "9iD0u2SchkncVrxQ7Z33SPDf4";
const apiUrl = "https://data.cityofnewyork.us/resource/hjae-yuav.json?borough=Staten Island&$$app_token=";

fetch(`${apiUrl}${appToken}`)
  .then(response => response.json())
  .then(data => {
    const table = document.createElement("table");

    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach(key => {
      if (key !== "borough" && key !== "comments") {
        const cell = headerRow.insertCell();
        cell.textContent = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()); // modify the key
      }
    });


    data.forEach(obj => {
      const row = table.insertRow();
      Object.keys(obj).forEach(key => {
        if (key !== "borough" && key !== "comments") {
          const cell = row.insertCell();
          cell.textContent = obj[key];
        }
      });
    });

    document.body.appendChild(table);
  })
  .catch(error => console.error(error));
