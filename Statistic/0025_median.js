function median(arr){
    const sortedArr =  arr.sort((a,b) => a - b);
    if(arr.length % 2 === 0){
        const a = sortedArr[arr.length/2 - 1];
        const b = sortedArr[arr.length/2];
        return (a+b)/2;
    }else{
        return sortedArr[(arr.length - 1)/2];
    }
}




