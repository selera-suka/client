
const BASE_URL = 'http://localhost:3000'

$(document).ready(function(){

  getGeolocation()
  getRestaurantDetail(18569489)
  // weather('-6.2588296879', '106.7680150643')
})
// function switchToHome(){
//     $("#login").hide()
//     $("#detail").hide()
//     $("#landing").hide()
//     $("#home").show()
// }

// function switchToDetail() {
//     $("#login").hide()
//     $("#home").hide()
//     $("#landing").hide()
//     $("#detail").show()
// }

// function switchToLogin() {
//     $("#home").hide()
//     $("#detail").hide()
//     $("#landing").hide()
//     $("#login").show()
// }

// function switchToLanding() {
//     $("#login").hide()
//     $("#home").hide()
//     $("#detail").hide()
//     $("#landing").show()
// }

function getGeolocation() {
  $.ajax({
    url: "http://ip-api.com/json",
    method: 'GET'
  })
    .done(data => {
      // localStorage.setItem('lon', data.lon)
      // localStorage.setItem('lat', data.lat)
      fetchRestaurants(data.lon, data.lat)
    })
    .fail(data => {
      swal(data.responseJSON)
    })
}

function fetchRestaurants(lon, lat) {
  $.ajax({
    url: `${BASE_URL}/zomato?lat=${lat}&lon=${lon}`,
    method: 'GET'
  })
    .done(data => {
      $('#restaurants-container').empty()
      data.forEach(restaurant => {
        $('#restaurants-container').append(`<div class="col-sm-6 col-xs-6 animated fadeInDown delay-1s" onClick="getDetails('${restaurant.id}')">
        <div class="list mb-2">
            <div class="list-header">
                <a href="#" class="list-header-image">
                  <img src="${restaurant.thumb}" >
                </a>
            </div>
            <div class="list-content">
            <br>
                <h2><a href="#" class="text-black" id="restaurant-name">${restaurant.name}</a></h2> 
                <span class="list-meta">
                  <span class="list-meta-item" style="color:red">${restaurant.location.address}</span><br> 
                  <a href="#" class="list-meta-item">${restaurant.location.locality}, ${restaurant.location.city}</a>
                </span>
                <p>${restaurant.cuisines}</p>
            </div>
            </div>
        </div>`)
      })
    })
    .fail(data => {
      swal(data.responseJSON)
    })
}

function getDetails (id) {
  // show one restaurant's details
}
