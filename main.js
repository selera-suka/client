
$(document).ready(function(){
  getRestaurantDetail(18569489)
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

function switchToLanding() {
    $("#login").hide()
    $("#home").hide()
    $("#detail").hide()
    $("#landing").show()
}