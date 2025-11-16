const express = require('express');

const app = express();

const port = 4000;

app.get('/txkabir/drivers', (req, res) => {

    res.json([
        {
            id: '00705220-fefe-421b-ac13-4d7fe44a7968',
            driverName: 'Nguinamau Bento',
            vehicleType: { type: 'Toyota', plate: 'ABC-123' },
            location: { lat: -8.839, lng: 13.289 },
        },
        {
            id: 'd261a95b20-0de5-45ea-91b2-700d55113569',
            driverName: 'Alice Jaime',
            vehicleType: { type: 'Jetour', plate: 'XYZ-999' },
            location: { lat: -8.842, lng: 13.291 },
        }
    ])
    
});

app.listen(port, () => console.log(`TXKabir is running on ${port} port`));
