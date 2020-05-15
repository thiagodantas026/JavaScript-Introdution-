axios.get('https://api.github.com/users/thiagodantas026')

.then(function(response){
    console.log(response);
})
.catch(function(erro){
    console.warn(error);
});