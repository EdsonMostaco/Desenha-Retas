document.addEventListener('DOMContentLoaded', () => {
    const plano = document.querySelector('.plano_cartesiano');
    const botao = document.getElementById('botao');

    function desenhaReta () {
        // Remove todas as linhas desenhadas anteriormente
        plano.querySelectorAll('.reta').forEach(div => div.remove());

        let x1 = parseFloat(document.getElementById('x1').value);
        let y1 = parseFloat(document.getElementById('y1').value);
        let x2 = parseFloat(document.getElementById('x2').value);
        let y2 = parseFloat(document.getElementById('y2').value);
        
        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            alert("Por favor, entre com as coordenadas.");
        }  else {
            //Faz o ajuste quando o eixo x e y são negativos
            if(x1,y1,x2,y2 < 0) {
                x1 = x1*-1;
                x2 = x2*-1;
                y1 = y1*-1;
                y2 = y2*-1;
            }


            if(!x2 || y2 < 0){
                if(x1 > x2){
                    var temp = x2;
                    x2 = x1;
                    x1 = temp;
                }
                if(y1 > y2){
                    var temp = y2;
                    y2 = y1;
                    y1 = temp;
                }
            }else{
                if(x2 <0 ) {
                    x2 = x2*-1;
                    var temp = y2;
                    y2 = y1;
                    y1 = temp;
                    
                }
                if(y2<0){
                    y2 = y2 * -1;
                    var temp = x2;
                    x2 = x1;
                    x1 = temp;
                }
            }

            
            //Faz o espelhamento quando o eixo x ou y é negativo
            




            let a = (y2 - y1) / (x2 - x1);

            for (let x = x1; x <= x2; x++) {
                let y = y1 + a * (x - x1);
                if (x > plano.clientWidth || y > plano.clientHeight) {
                    break;
                };
                let novaDiv = document.createElement('div');
                novaDiv.className = 'reta';
                novaDiv.style.top = y + 'px';
                novaDiv.style.left = x + 'px'; 

                plano.appendChild(novaDiv);
            }
        }
    }
    
    botao.addEventListener('click', desenhaReta);
});
    

