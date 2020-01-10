function getRestaurantDetail(id) {
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/zomato/restaurant?res_id=${id}`
  })
    .done(restaurant => {
      $('#detail-one-card').empty()
      $('#detail-one-card').append(`
        <h2 style="color:darkgreen">${restaurant.name}</h2>
        <p>${restaurant.location.address}</p>
      `)

      $('#rating-one-card').empty()
      $('#rating-one-card').append(`
        <h1 class='mt-3'><mark>${restaurant.user_rating.aggregate_rating}</mark></h1>
      `)

      $('#number-resto').empty()
      $('#number-resto').append(`
        <h4>Phone</h4>
        <h5 style="color:darkgreen">
        ${restaurant.phone_numbers}
        </h5>
        <p style="color: darkgray">Reservation is recomended</p>

        <h4 class='mt-4'>Average Price</h4>
        <p>Rp. ${restaurant.average_cost_for_two}</p>

        <h4 class='mt-4'>Cuisines</h4>
        <p style="color: red">
        ${restaurant.cuisines}</p>
      `)

      $('#resto-time').empty()
      $('#resto-time').append(`
        <h4>Timings</h4>
        <p>${restaurant.timings}</p>

        <h4 class='mt-4'>Address</h4>
        <p>${restaurant.location.address}</p>
      `)

      $('#list-highlight').empty()
      let hg = restaurant.highlights
      hg.forEach(element => {
        $('#list-highlight').append(`
        <li>${element}</li>
        `)
      })

      $('#weather').empty()
      $('#weather').append(`
        <div>
          <h1>as</h1>
        </div>
      `)

      $('#head-image').empty()
      $('#head-image').append(`
        <img class="w-100"
        src="${restaurant.featured_image}"
        class="d-block caro-detail" alt="gambar" style="vertical-align: middle"/>
      `)

      $('#maps').empty()
      $('#maps').append(`
        <img class="w-100"
        src="https://img.okezone.com/content/2020/01/03/207/2148855/google-maps-beri-tanda-penutupan-jalan-akibat-banjir-di-jakarta-6fLvlO4x2Y.jpg"
        class="d-block caro-detail" alt="gambar" style="vertical-align: middle"/>
      `)

      const destination = `${restaurant.location.latitude},${restaurant.location.longitude}`
      console.log(destination)
      //weather(restaurant.location.latitude, restaurant.location.longitude)
      //maps(geolocation, destination)
    })
}