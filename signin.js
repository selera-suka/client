// $(document).ready(function(){
//     if(localStorage.getItem("token") === null){
//         switchToLogin()
//     }
//     else {
//         let token = localStorage.getItem("token")
//         axios.post('http://localhost:3000/signin', {
//             data: {
//                 id_token: token
//             }
//         })
//         .then(({data})=>{
//             localStorage.setItem("user_data", JSON.stringify(data))
//             weather()
//         })
//         .catch(err=>{
//             switchToLogin()
//             console.log(err)
//         })
//     }
// })
// function onSignIn(googleUser){
//     let id_token = googleUser.getAuthResponse().id_token
//     localStorage.setItem("token", id_token)
//     axios.post('http://localhost:3000/signin', {
//         data: {
//             id_token
//         }
//     })
//     .then(({data})=>{
//         if(data){
//             localStorage.setItem("user_data", JSON.stringify(data))
//             weather()
//         }
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }

// function signOut(){
//     let auth2 = gapi.auth2.getAuthInstance()
//     auth2.signOut().then(function(){
//         localStorage.clear()
//         switchToLanding()
//     })
// }
