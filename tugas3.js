let printSegitiga2 = num => {
    let hasil = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i + 1; j++) {
            hasil += `${j} `;
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(printSegitiga2(5));