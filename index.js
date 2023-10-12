// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    //define  
}
function destructivelyAppendCat(Ralph){
        cats.push(Ralph)
    }

    function destructivelyPrependCat(){
        //define
    }
    function destructivelyPrependCat(Bob){
        cats.unshift(Bob)
    }

        function destructivelyRemoveLastCat(){
            //define
        }
        function destructivelyRemoveLastCat(Garfield){
            cats.pop(Garfield)
        }

            function destructivelyRemoveFirstCat(){
                //define
            }
            function destructivelyRemoveFirstCat(Milo){
                cats.shift(Milo)
            }
                
            
            function appendCat(name){
                var name_1= [...cats,name];
                return name_1;
              }
              
              function prependCat(name){
                var name_2=[name, ...cats];
                return name_2
              }
              
              function removeLastCat(){
                var caats= cats.slice(0,cats.length-1);
                return caats;
              }
              
              function removeFirstCat(){
                var catts= cats.slice(1)
                return catts
              }
 



                
    
            