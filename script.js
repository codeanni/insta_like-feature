var card = document.querySelector('#card');
var love = document.querySelector(' #card i');
var heart = document.querySelector('#like i')

card.addEventListener('dblclick', function(){
    love.style.transform = 'translate(-50%,-50%)scale(1)';
    love.style.opacity = 0.8;
    heart.style.color = 'red';

       
    setTimeout(function() {
        love.style.opacity = 0
    },1000);
    setTimeout(function() {
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000);
    heart.addEventListener("click", function(){
        if(heart.style.color === 'red'){
            heart.style.color = 'white'
        }else{
            heart.style.color = 'red'
        }
    })
    
});