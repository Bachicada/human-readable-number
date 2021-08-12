module.exports = function toReadable (number) {
    number=number.toString();
    let first20=[];
        first20.push('zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen');
    
    let second100=[];
        second100.push('zero','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety');
    
    if ((0 <= number) && (number <= 19)){
        return first20[number] ;
                                         }
    else if ((20 <= number) && (number <= 99)){
       
        if (number[1]==='0'){return second100[(number[0]-1)]}
        else {return (second100[(number[0]-1)]+' '+first20[(number[1])])}
                                          
                                              }
    else if ((100<=number)&&(number<=999)){
        if ((number[1]==='0')&&(number[2]==='0')){return (first20[number[0]]+' hundred')}
        else if ((number[1]==='0')&&(number[2]!=='0')){return (first20[number[0]]+' hundred '+first20[number[2]])}
        else if (number[1]==='1'){return (first20[number[0]]+' hundred '+first20[number.slice(1,3)])}
        else if ((number[1]!=='1')&&(number[2]==='0')){return (first20[number[0]]+' hundred '+second100[(number[1]-1)])}
        else {return (first20[number[0]]+' hundred '+second100[(number[1]-1)]+' '+first20[number[2]])}                     
                               }         
                            }                        
                                                                         