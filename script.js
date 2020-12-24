//fungsi untuk memfilter email
function filterEmail(email) {
    var dataEmail = email.split(",");

    //merapikan data
    for (let i = 0; i < dataEmail.length; i++) {
        dataEmail[i] = dataEmail[i].trim();//buat data di array tidak ada spasinya
        var res = dataEmail[i].split("@");//split untuk ambil local dan domain
        var local = res[0];
        var domain = res[1];

        //buang titik dari local
        if (local.includes(".")) {
            local = local.replace(".", "");
        }
        //ambil kata dari local sebelum tanda + yang pertama
        if (local.includes("+")) {
            splitLocal = local.split("+");
            local = splitLocal[0];
        }
        //gabungkan kembali agar jadi email
        dataEmail[i] = local + "@" + domain;

        //menghapus email yang nama domainnya ada tanda plus
        if (dataEmail[i].includes("+")) {
            delete dataEmail[i];
        }
    }

    return dataEmail;

}

//fungsi untuk mengambil email yang unique
function uniqueData(a) {
    var seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

