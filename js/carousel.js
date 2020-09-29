const carousell=document.querySelectorAll('.portfolio-carousell')
const carousellArr=(Array.from(carousell))

const btnLeft=document.querySelector('.portfolio-btn-left')
const btnRight=document.querySelector('.portfolio-btn-right')
const container=document.querySelector('.portfolio-carousell')

btnLeft.addEventListener('click',function(e){
    container.style.backgroundColor="black"
})
btnRight.addEventListener('click',function(e){
    container.style.backgroundColor="grey"
})