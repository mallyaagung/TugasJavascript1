let bind = 100
let bing = 100
let mat = 100
let ipa = 100

let ratarata = () => {
    let nilai = bind + bing + mat + ipa;
    let hasil = parseInt(nilai / 4);
    try {
        if (bind == "" || bing == "" || mat == "" || ipa == "") throw `Data tidak boleh kosong`
        if (isNaN(bind) || isNaN(bing) || isNaN(mat) || isNaN(ipa)) throw `Data bukan angka`
        bind, bing, mat, ipa = Number(bind, bing, mat, ipa);
        if (nilai < 0 || nilai > 400) throw `Data yang dimasukkan tidak valid`
        if (hasil >= 90 && hasil <= 100) throw `Rata-rata = ${hasil}\nGrade = A`
        if (hasil >= 80 && hasil <= 89) throw `Rata-rata = ${hasil}\nGrade = B`
        if (hasil >= 70 && hasil <= 79) throw `Rata-rata = ${hasil}\nGrade = C`
        if (hasil >= 60 && hasil <= 69) throw `Rata-rata = ${hasil}\nGrade = D`
        if (hasil >= 0 && hasil <= 59) throw `Rata-rata = ${hasil}\nGrade = E`
    } catch (err) {
        console.log(err)
    }
}

ratarata()
