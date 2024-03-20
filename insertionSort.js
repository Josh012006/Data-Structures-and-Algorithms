function insertionSort (arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        let temp = i - 1;
        let temp2 = arr[i];

        while(temp >= 0 && arr[temp] > temp2)
        {
            arr[i] = arr[temp];
            arr[temp] = temp2;
            temp--;
        }
    }

    return arr;
}


