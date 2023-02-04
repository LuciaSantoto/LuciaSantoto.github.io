
//Copiar e-mail en datos personales

const button = document.querySelector("i.fa-copy");
const input = document.querySelector(".clipboard");

button.addEventListener("click", function (){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy")
})

//Imágenes del portfolio

document.getElementById('imagen1').onmouseover = function (){
document.getElementById('imagen1').style.transform = 'scale(1.5)';
}

document.getElementById('imagen1').onmouseout = function (){
document.getElementById('imagen1').style.transform = 'scale(1)'
}

document.getElementById('imagen2').onmouseover = function (){
document.getElementById('imagen2').style.transform = 'scale(1.5)'
    }
    
document.getElementById('imagen2').onmouseout = function (){
document.getElementById('imagen2').style.transform = 'scale(1)'
    }
    

document.getElementById('imagen3').onmouseover = function (){
document.getElementById('imagen3').style.transform = 'scale(1.5)'
        }
        
document.getElementById('imagen3').onmouseout = function (){
document.getElementById('imagen3').style.transform = 'scale(1)'
        }
        

document.getElementById('imagen4').onmouseover = function (){
document.getElementById('imagen4').style.transform = 'scale(1.5)'
            }
            
document.getElementById('imagen4').onmouseout = function (){
document.getElementById('imagen4').style.transform = 'scale(1)'
            }

            
document.getElementById('imagen5').onmouseover = function (){
document.getElementById('imagen5').style.transform = 'scale(1.5)'
    }
    
document.getElementById('imagen5').onmouseout = function (){
document.getElementById('imagen5').style.transform = 'scale(1)'
    }
    
document.getElementById('imagen6').onmouseover = function (){
document.getElementById('imagen6').style.transform = 'scale(1.5)'
            }
            
document.getElementById('imagen6').onmouseout = function (){
document.getElementById('imagen6').style.transform = 'scale(1)'
            }