let origin = '-6.260779,106.781646'
let destination = '-6.172232,106.827827'

$(document).ready(function(){
  fetchRoutes(origin, destination)
})
function switchToHome(){
    $("#login").hide()
    $("#detail").hide()
    $("#landing").hide()
    $("#home").show()
}

function switchToDetail() {
    $("#login").hide()
    $("#home").hide()
    $("#landing").hide()
    $("#detail").show()
}

function switchToLogin() {
    $("#home").hide()
    $("#detail").hide()
    $("#landing").hide()
    $("#login").show()
}

<<<<<<< HEAD

=======
>>>>>>> 123dc8f95b59bbdf423bb5de3ec6a75509b9875f
function switchToLanding() {
    $("#login").hide()
    $("#home").hide()
    $("#detail").hide()
    $("#landing").show()
}