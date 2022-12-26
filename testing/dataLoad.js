function xiaomi() {
    console.log("Loading Xiaomi");
    document.getElementById("heading").innerHTML = "Xiaomi";
};

function oneplus() {
    console.log("Loading OnePlus");
    document.getElementById("heading").innerHTML = "OnePlus";

    const filePath = 'combined.json';
    const searchItem = 'lemonade';

    fetch(filePath)
      .then(response => response.json())
      .then(data => {
        for (const item of data) {
            if (item.hasOwnProperty(searchItem)) {
                console.log('Device: ${item.device}');
                console.log('Device Name: ${item.device_name}');
                console.log('TG Username: ${item.tg_username}');
            }
        }
      })
      .catch(error => {
        console.error(error);
      });
};

function samsung() {
    console.log("Loading Samsung");
    document.getElementById("heading").innerHTML = "Samsung";
};