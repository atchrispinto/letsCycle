if (
  navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    //API 2 - openweathermap (Public)
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7797f19d8e620a623448b1a631d4c946&units=metric
      `;

    fetch(api)
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        const tempTemp = data2.main.temp;
        tempDeg.textContent = tempTemp.toFixed(1) + "°C";
        tempDes.textContent = data2.weather[0].main;

        let farenheit = Math.round(((9 / 5) * tempTemp + 32) * 10) / 10 + "°F";

        tempMain.onclick = () => {
          if (tempSpan.textContent === "°C") {
            tempSpan.textContent = "°F";
            tempDeg.textContent = farenheit;
          } else {
            tempSpan.textContent = "°C";
            tempDeg.textContent = tempTemp.toFixed(1) + "°C";
          }
        };

        let windSpeed = data2.wind.speed;
        let windDegree = data2.wind.deg;

        let val = Math.floor(windDegree / 22.5 + 0.5);
        const arr = [
          "N",
          "NNE",
          "NE",
          "ENE",
          "E",
          "ESE",
          "SE",
          "SSE",
          "S",
          "SSW",
          "SW",
          "WSW",
          "W",
          "WNW",
          "NW",
          "NNW",
        ];

        let windCard = arr[val % 16];
        windDir.textContent = `${windSpeed} MTR/S ${windCard}`;

        windComp.style.transform = `rotate(${windDegree}deg)`;
      });

    // API 1 - stormglass (Public key on purpose)

    fetch(
      `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${long}&start=${year}-${month}-${day}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "16b72906-b722-11eb-849d-0242ac130002-16b72988-b722-11eb-849d-0242ac130002",
        },
      }
    )
      .then((response) => response.json())
      .then((jsonData) => {
        const data1 = jsonData.data.slice(0, 4);

        const levels = [];

        data1.forEach((tide, i) => {
          const date = new Date(tide.time);
          const day = `${date.getDate()}`.padStart(2, 0);
          const month = `${date.getMonth() + 1}`.padStart(2, 0);
          const hour = `${date.getHours()}`.padStart(2, 0);
          const min = `${date.getMinutes()}`.padStart(2, 0);
          const displayTime = `${hour}:${min}`;

          levels.push(`${tide.height.toFixed(2)}`);

          const html = ` <div class="tide tide${i + 1}"><p class="state">${
            tide.type
          }<span>${tide.height.toFixed(
            2
          )}m</span></p></div><div class="time time${
            i + 1
          }"><p class="time">${displayTime}<br /><span>${day}/${month}</span></p></div>`;

          api1.insertAdjacentHTML(`beforeend`, html);
        }); //ForEach

        //Chart

        //Setup

        // const levels = [1, -1.5, 1.5, -0.51];

        const data = {
          labels: ["", "", "", "", "", ""],
          datasets: [
            {
              label: "",
              data: [0, ...levels, 0],
              fill: "start",
              backgroundColor: "#D7ED7E",
              borderColor: "#181818",
              lineTension: 0.3,
              pointRadius: 0,
            },
          ],
        };

        //Config

        // Change these settings to change the display for different parts of the X axis
        // grid configuiration

        const config = {
          type: "line",
          data: data,
          options: {
            layout: { padding: -7 },
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
              tooltip: { enabled: false },
            }, //plugin
            scales: {
              x: {
                grid: {
                  display: true,
                  drawBorder: false,
                  //drawOnChartArea: true,
                  drawTicks: true,
                  color: "white",
                  drawTicks: false,

                  //borderColor:'white',
                  z: 2,
                },
                ticks: { display: false },
              }, //x
              y: {
                min: -3,
                max: 2.5,
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: { display: false },
              }, //y
            }, //scales
          }, //options
        };

        //Render chart

        var myChart = new Chart(document.getElementById("myChart"), config);
      }); //API 1 Response
  }) //Current position
); //Geolocation IF
