
// variavel interna b esta sendo mostrada na chamada da fucnao
/*
function F(){
    let b = "local variable";
    return function N (){
        console.log(b);
    };
};

const inner = F();
inner();
*/

let getValue, setValue;

(
    function (){
        let secret=0;
        getValue = function(){
            return secret;
        };
        setValue = function(v){
            
        }
    }
)
