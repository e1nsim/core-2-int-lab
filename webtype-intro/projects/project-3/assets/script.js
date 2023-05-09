const appToken = "9iD0u2SchkncVrxQ7Z33SPDf4";
const apiUrl = "https://data.cityofnewyork.us/resource/hjae-yuav.json";

fetch(`${apiUrl}?$$app_token=${appToken}`)
  .then(response => response.json())
  .then(data => {
    const table = document.createElement("table");

    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach(key => {
      const cell = headerRow.insertCell();
      cell.textContent = key;
    });
    const accessibleCell = headerRow.insertCell();
    accessibleCell.textContent = "Handicap Accessible";


    data.forEach(obj => {
      const row = table.insertRow();
      Object.keys(obj).forEach(key => {
        const cell = row.insertCell();
        cell.textContent = obj[key];
      });
    });

    document.body.appendChild(table);
  })
  .catch(error => console.error(error));

  
