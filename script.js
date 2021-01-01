//fungsi untuk memfilter email
function filterEmail(email) {
    var email = email.split(",");
    var dataEmail = [], j = 0;

    //merapikan data
    for (let i = 0; i < email.length; i++) {
        email[i] = email[i].trim();//buat data di array tidak ada spasinya
        var res = email[i].split("@");//split untuk ambil local dan domain
        var local = res[0];
        var domain = res[1];

        //ambil kata dari local sebelum tanda + yang pertama
        if (local.includes("+")) {
            splitLocal = local.split("+");
            local = splitLocal[0];
        }
        //buang titik dari local
        if (local.includes(".")) {
            local = local.split(".").join("");
        }
        //masukkan ke dataEmail jika domain tidak ada tanda +
        if (!domain.includes("+")) {
            dataEmail[j] = local + "@" + domain;
            j++;
        }

    }

    return dataEmail;

}

function uniqueData(data) {
    data = mergeSort(data);
    var current = data[0];
    var ketemu = false;
    var kata = "";
    var dataValid = [];

    for (let i = 0; i < data.length; i++) {

        if (current == data[i] && !ketemu) {
            ketemu = true;
        } else if (current != data[i]) {
            kata += current + ",";
            current = data[i];
            ketemu = false;
        }
    }

    kata += current;
    dataValid = kata;
    dataValid = kata.split(",");
    console.table(dataValid);
    return dataValid;
}

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}