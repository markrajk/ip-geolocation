const content = document.getElementById('content');

// GET IP ADDRESS
fetch('https://api.ipify.org?format=json').then(data => {
    return data.json();
}).then(data => {
    let ip = data.ip;

    // IP ADDRESS GEO LOCATION
    fetch(`https://ipapi.co/${ip}/json`).then(data => {
        return data.json();
    }).then(data => {
        let pattern = `
        <h1>${ip}</h1>
        <h2>Country: ${data.country_name}</h2>
        <h2>City: ${data.city}</h2>

        <iframe src="https://maps.google.com/maps?q=${data.latitude}%20${data.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
        `;
        content.innerHTML = pattern;
    })
})