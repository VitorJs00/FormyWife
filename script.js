let fugitivo = document.getElementsByClassName('MALDITO')[0]

fugitivo.addEventListener('mouseover',(e)=>{
    
    if(e){
        
        fugitivo.style.top= pula()+'px'
        fugitivo.style.left = pula()+'px'
        
    }
    
function pula(){
let aleatoryNum = Math.floor(Math.random()* (300-100) + 10)
return aleatoryNum
}
})