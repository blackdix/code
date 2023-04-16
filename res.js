'use strict'

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end();
}
//response untuk nested matakuliah
exports.oknested = function (values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {

        //tentukan key grub
        if (akumulasikan[item.nama_lengkap]) {
            //buat variabel grub nama mahasiswa
            const group = akumulasikan[item.nama_lengkap];
            //cek jika isi array
            if (Array.isArray(group.matakuliah)) {
                //tambakan data ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            akumulasikan[item.nama_lengkap] = item;
        }
        return akumulasikan;

    }, {});
    var data = {
        'status': 200,
        'values': hasil
    }
    res.json(data);
    res.end();
}