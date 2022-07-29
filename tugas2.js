let bind = 10
let bing = 10
let mat = 10
let ipa = 10
let grade

let ratarata = () => {
    const re = /^[0-9]+$/;
    if (re.test(bind && bing && mat && ipa)) {
        let nilai = bind + bing + mat + ipa;
        let hasil = parseInt(nilai / 4);

        if (hasil >= 90 && hasil <= 100) {
            grade = "A";
        } if (hasil >= 80 && hasil <= 89) {
            grade = "B";
        } if (hasil >= 70 && hasil <= 79) {
            grade = "C";
        } if (hasil >= 60 && hasil <= 69) {
            grade = "D";
        } else {
            grade = "E";
        }
        console.log(`Rata-rata = ${hasil}\nGrade = ${grade}`)
    } else {
        console.log(`Masukka data yang sesuai`)
    }
}
ratarata();