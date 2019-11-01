function bubbleSort(arr) {
    var i = arr.length, j;
    var m;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                m = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = m;
            }
        }
        i--;
    }
    return arr;
}
 
var arr = [3, 2, 4, 5, 1,];
console.log(bubbleSort(arr));

