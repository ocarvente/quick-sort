function quickSort(array) {
    // pick a pivot sort everything smaller than pivot to the leftarray
    // sort everthing else to the right array
    //

    if(array.length <=1) {
        return array
    }

    var pivot = array.shift();
    var leftarray = quickSort(array.filter(ele => ele < pivot));
    var rightarray = quickSort(array.filter(ele => ele >= pivot));

    return [...leftarray,pivot, ...rightarray];

}


module.exports = {
    quickSort
};