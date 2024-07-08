function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  }
  
  

function getUsersNamesInAgeRange(users, gender){
    const mas = users.filter(el => el.gender === gender).map(el =>
        el.age).slice();

        //console.log(mas);
    /*if (mas.length === 0) {
        return 0;
    }     
    let sum = mas.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });
    return sum  / mas.length;  */ 
        let avg = mas.reduce((acc , item, index)=> {
            acc += item;
            
            if (index === mas.length - 1){
                //console.log(acc / mas.length);
                return  acc / mas.length;
                
            }
        //console.log(acc);
        return  acc;
        }, 0);
    return avg;   
}

