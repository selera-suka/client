function weather(lat,lon) {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/weather/${lat}/${lon}`,
        success: function(result){
            switchToDetail()
            $("#weather").empty()
            $("#weather").append(`
            <h4>${result.main}</h4>
            <img src=${result.img_url}>
            <h5>${result.temp}&#8451</h5>
            `)
        }
    })
}