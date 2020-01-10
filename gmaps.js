let baseUrl = 'http://localhost:3000'
let access_token = localStorage.getItem('token')

function fetchRoutes(origin, destination) {
  axios({
    method: 'get',
    url: `${baseUrl}/gmaps`,
    // headers: { access_token }
    params: {
      origin,
      destination
    }
  })
    .then(({ data }) => {
      let routes = data.routes[0].legs[0].steps
      let origin = data.geocoded_waypoints[0].place_id
      let destination = data.geocoded_waypoints[1].place_id
      showRoutes(routes, origin, destination)
    })
    .catch(err => {
      console.log(err.response)
    })
}

function showRoutes(routes, origin, destination) {
  $('#gmaps').empty()
    $('#gmaps').append(
      `
<div class="position-relative">
            <iframe
              width="600" 
              height="450"
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed/v1/directions?origin=place_id:${origin}&destination=place_id:${destination}&key=AIzaSyAwXrppLmik5mFCJqSV8ttiBN0L-2tOw0E" allowfullscreen>
            </iframe>
          </div>

          <div id="routes" class="list-group overflow-auto"style="max-height: 450px;"></div>
      `
    )
    for (let route of routes) {
      $('#routes').append(
        `
        <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <span class="pr-4">${route.html_instructions}</span>
          <small>${route.distance.text}</small>
        </div>
        <small>${route.duration.text}</small>
      </span>`
      )
    }
}