const images=[
    {src:'./Images/Portfolio/HBC_HolidayCharityGala_CounterSign_final.png',
    description:"Hudson's Bay Foundation"},
    {src:'./Images/Portfolio/HBC_HolidayCharityGala_Foamcore_final.png',
    description:"Hudson's Bay Foundation"},
    {src:'./Images/Portfolio/lays_Weekender_Header.png',
    description:"Instore Signage"},
    {src:'./Images/Portfolio/lays_Shelf_Hanger.png',
    description:"Instore Signage  Shelf Hanger"},
    {src:'./Images/Portfolio/TostitosWobbler_EN.png',
    description:'Tostitos Wobbler'},
    {src:'./Images/Portfolio/DoritosShlfHang.png',
    description:'Doritos Shelf Hanger'},
    {src:'./Images/Portfolio/medicalAlert_01.png',
    description:'Medical Alert Foundation Canada'},
    {src:'./Images/Portfolio/56103_BoxTopper-399-1.png',
    description:'Box Topper'},
    {src:'./Images/Portfolio/56103_BoxTopper-399-2.png',
    description:'Box Topper'},
    {src:'./Images/Portfolio/BK_EN_Coupon-1.png',
    description:'Burger King Coupon'},
    {src:'./Images/Portfolio/Saks.png',
    description:'SAKS Direct Mail'},
    {src:'./Images/Portfolio/56118_DecTriplePnts-1.png',
    description:'SAKS Direct Mail'},


]



const carousell=document.querySelectorAll('.portfolio-carousell')
const carousellArr=(Array.from(carousell))

const btnLeft=document.querySelector('.portfolio-btn-left')
const btnRight=document.querySelector('.portfolio-btn-right')
const container=document.querySelector('.portfolio-carousell-img')
const descriptionText=document.querySelector('.portfolio_description > p');
descriptionText.textContent=images[0].description
container.style.backgroundImage=`url(${images[0].src})`

let state={
    start:0,
    btnLeftpressed:false,
    btnRightpressed:false,
    counter:0
}


btnLeft.addEventListener('click', function(){
    if(state.counter>=0 && state.counter<images.length-1 && !state.btnRightpressed){
        state.start=(images.length-1) - state.counter
        descriptionText.textContent=images[state.start].description
        container.style.backgroundImage=`url(${images[state.start].src})`
        state.counter++
        state.btnLeftpressed=true
        console.log(state)
        return state
    }
    else if(state.counter===images.length-1 && !state.btnRightpressed){
        state.counter=0
        state.start=0
        state.btnLeftpressed=true
        descriptionText.textContent=images[state.start].description
        container.style.backgroundImage=`url(${images[state.start].src})`
        console.log(state)
        return state
    }
    else if(state.btnRightpressed && state.start>0){
        state.start--
        // state.btnRightpressed=false
        descriptionText.textContent=images[state.start].description
        container.style.backgroundImage=`url(${images[state.start].src})`
        console.log(state)
    }

    else if(!state.start){
        state.btnRightpressed=false
    }
})

btnRight.addEventListener('click', function(){
   if(state.counter<images.length-1 && state.start<images.length-1) {
    state.counter++
    state.start++
    state.btnRightpressed=true
    state.btnLeftpressed=false
    descriptionText.textContent=images[state.start].description
    container.style.backgroundImage=`url(${images[state.start].src})`
    console.log(state)
   } 
   else if(state.counter===images.length-1 || state.start===images.length-1){
    state.counter=0
    state.start=0
    state.btnRightpressed=true
    state.btnLeftpressed=false
    descriptionText.textContent=images[state.start].description
    container.style.backgroundImage=`url(${images[state.start].src})`
    console.log(state)
   }

})


// script for icons

const iconImgs=Array.from(document.querySelectorAll('.col-1-of-3 img'))

const bigImg=document.querySelector('.bigger-image')

iconImgs.forEach((item,id) => {
    item.addEventListener('click', event=>{
        console.log(event.target.src)
        let bigSrc=event.target.src.replace('_icon','')
        bigImg.style.backgroundImage=`url(${bigSrc})`
    })
  })


function displayImg(el,id) {
    // array.forEach(function(item,id){
    console.log(el.target.src)
// }

}
