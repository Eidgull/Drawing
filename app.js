const canvas=document.querySelector('canvas');
const eraser=document.getElementById('earaser');
const brush=document.getElementById('brush')
const brush_with=document.getElementById('brush-white');
const brush_Color=document.getElementById('color-piker');
const Clear=document.querySelector('.Clear');
const SaveBtn=document.querySelector('.save')

let isDrewing=false;
let currintColor=''
let currintWite=5;
// adding line to cnavas
 const ctx=canvas.getContext('2d');
 function Drewing(e){
    if(!isDrewing) return
     ctx.lineTo(e.offsetX,e.offsetY);
     ctx.stroke();
     ctx.strokeStyle=`${currintColor}`   
 }
 

 window.addEventListener('load',()=>{
     canvas.width=canvas.offsetWidth;
     canvas.height=canvas.offsetHeight;
     ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

 })
   

function startdrew(){
    isDrewing=true;
    ctx.beginPath();
    ctx.lineWidth=currintWite;
}

function stopderw(){
    isDrewing=false;
}


brush_with.addEventListener('change',()=>{
    currintWite=brush_with.value;
})


brush_Color.addEventListener('change',()=>{
    currintColor=brush_Color.value;
})


function ClerLine(){
    eraser.classList.add('active');
    brush.classList.remove('active');
    currintColor='white';
    
}


function lineDrew(){
    eraser.classList.remove('active');
    brush.classList.add('active');
    currintColor=brush_Color.value;
}



Clear.addEventListener('click' ,()=>{
   ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

})


SaveBtn.addEventListener('click',()=>{
    const link=document.createElement('a');
    
    link.download=`${Date.now()}`
    link.href=canvas.toDataURL();
    link.click();
})


brush.addEventListener('click',lineDrew)
eraser.addEventListener('click',ClerLine)
canvas.addEventListener('mouseup',stopderw)
canvas.addEventListener('mousedown',  startdrew)
canvas.addEventListener('mousemove',Drewing)