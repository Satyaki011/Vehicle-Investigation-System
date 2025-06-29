function searchVehicle() {
    let vehicleNumber = document.getElementById('vehicleNumber').value.trim().toUpperCase();
    let detailsDiv = document.getElementById('vehicleDetails');
    let imageDiv = document.getElementById('carImage');

    let stateNames = {
        "KA": "Karnataka",
        "MH": "Maharashtra",
        "DL": "Delhi",
        "TN": "Tamil Nadu",
        "UP": "Uttar Pradesh"
    };
    
    let carModels = [
        { model: "Maruti Suzuki Swift", image: "https://images.unsplash.com/photo-1715253554628-9f4bb65ebfba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1enVraSUyMHN3aWZ0fGVufDB8fDB8fHww"},
        { model: "Hyundai Creta", image: "Creta.avif" },
        { model: "Honda City", image: "city.avif" },
        { model: "Tata Nexon", image: "nexon.avif" },
        { model: "Toyota Fortuner", image: "fortuner.avif" }
    ];
    
    let regex = /^([A-Z]{2})\s*(\d{2})\s*([A-Z]{2})\s*(\d{4})$/;
    if (regex.test(vehicleNumber)) {
        let matches = vehicleNumber.match(regex);
        let stateCode = matches[1];
        let rtoCode = matches[2];
        let series = matches[3];
        let uniqueNumber = matches[4];
        
        let stateName = stateNames[stateCode] || "Unknown State";
        let randomCar = carModels[Math.floor(Math.random() * carModels.length)];
        
        detailsDiv.innerHTML = `<p><strong>Vehicle Details:</strong></p>
                                <p>${stateCode} → ${stateName} (State Code)</p>
                                <p>${rtoCode} → RTO Code</p>
                                <p>${series} → Series (Alphabetic Code)</p>
                                <p>${uniqueNumber} → Unique Number</p>
                                <p><strong>Car Model:</strong> ${randomCar.model}</p>`;
        
        imageDiv.innerHTML = `<img src="images/${randomCar.image}" alt="${randomCar.model}">`;
    } else {
        detailsDiv.innerHTML = "Invalid vehicle number format. Please enter in the format: KA 05 AB 1234";
        imageDiv.innerHTML = "";
    }
}

function calculateSpeed() {
    let distance = document.getElementById('distance').value;
    let time = document.getElementById('time').value;
    let resultDiv = document.getElementById('speedResult');
    
    if (distance > 0 && time > 0) {
        let speed = distance / time;
        let dangerLevel = getDangerLevel(speed);
        resultDiv.innerHTML = `<p>Speed: ${speed.toFixed(2)} km/h</p><p>Danger Level: ${dangerLevel}</p>`;
    } else {
        resultDiv.innerHTML = "Please enter valid distance and time!";
    }
}

function getDangerLevel(speed) {
    if (speed < 40) {
        return "Low Risk (Safe)";
    } else if (speed >= 40 && speed <= 80) {
        return "Medium Risk (Caution)";
    } else {
        return "High Risk (Danger)";
    }
}
