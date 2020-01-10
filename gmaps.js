let baseUrl = 'http://localhost:3000'
let access_token = localStorage.getItem('token')

function fetchRoutes(origin, destination) {
  console.log(origin, destination)
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
      showRoutes(routes)
    })
    .catch(err => {
      console.log(err.response)
    })
}

function showRoutes(routes) {
  console.log(routes)
  $('#routes').empty()
  for (let route of routes) {
    $('#routes').append(
      `
      <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <span class="pr-4">${route.html_instructions}</span>
          <small>${route.distance.text}</small>
        </div>
        <small>${route.duration.text}</small>
      </span>
      `
    )
  }
}