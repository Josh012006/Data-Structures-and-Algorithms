function mergeSort (arr)
{
    let n = arr.length;
    if (n <= 1) {
        return arr; 
    }
    

    let left = [];
    let right = [];

    for(let i = 0; i < n; i++)
    {
        (i < Math.floor(n/2)) ? left.push(arr[i]) : right.push(arr[i]);
    }
    
    let a = mergeSort(left);
    let b = mergeSort(right);

    let temp = [];
    let key1 = 0;
    let key2 = 0;

    
    // console.log(a, b);
    while(key1 < (a.length) && key2 < (b.length))
    {
        if(a[key1] <= b[key2])
        {
            temp.push(a[key1]);
            key1++;
        }

        else
        {
            temp.push(b[key2]);
            key2++;
        }
    }

    if(key1 == (a.length))
    {
        for(let j = key2; j < b.length; j++)
        {
            temp.push(b[j]);
        }
    }
    else
    {
        for(let j = key1; j < a.length; j++)
        {
            temp.push(a[j]);
        }
    }


    //ou
    // while (key1 < a.length) {
    //     temp.push(a[key1]);
    //     key1++;
    // }

    // while (key2 < b.length) {
    //     temp.push(b[key2]);
    //     key2++;
    // }

    return temp;

}


console.log(mergeSort([12, 5, 23, 17, 8, 19, 4, 13, 9, 2, 11, 7, 18, 6, 21, 3, 15, 1, 16, 10, 20, 14]));