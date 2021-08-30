const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    const inputBtn = document.getElementById('input-btn').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputBtn + '&appid=ba56491fa7e4653265a7ad8ababf7f3d')
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const des = data.weather[0].description;

            document.getElementById('city').innerText = cityName;
            document.getElementById('temp').innerText = temp.toFixed(2);
            document.getElementById('description').innerText = des;
        })
        .catch(res => alert('please Type Right City name'))
});