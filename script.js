let fugitivo = document.getElementsByClassName('MALDITO')[0]

fugitivo.addEventListener('mouseover',(e)=>{

    if(e){
        
        fugitivo.style.backgroundColor = "green"
        alert('EU TE AMO MUITO IARA')
        fugitivo.style.top= pula()+'px'
        fugitivo.style.left = pula()+'px'
        
    }
    
function pula(){
let aleatoryNum = Math.floor(Math.random()* (300-100) + 10)
return aleatoryNum
}
})

fugitivo.addEventListener('click',(e)=>{
    if(e){
        alert('INSSISTENTE CHATAAAAAAAA')
        fugitivo.style.backgroundColor = "red"
    }
})