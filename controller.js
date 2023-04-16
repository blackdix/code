'use strict';

var response = require('./res');
var connection = require('./koneksi');
// rule default 
exports.index= function (req,res){
    response.ok("menjalankan res API berjalan",res)
};

//rule tampil data
exports.tampildata=function (req,res){
  var sql='SELECT * FROM mahasiswa'
 connection.query(sql,function(err,rows,fields){
   if (err){
     response.ok("Data kkosong",res)
   }
   else{
     
     response.ok(rows,res)
   }
 })
};
// id tampil data
exports.tampildataid=function(req,res){
  var nim=req.params.id
 connection.query('SELECT * FROM mahasiswa WHERE nim='+nim,function(err,rows,fields){
   if (err){
     response.ok(err,res)
   }
   else{
     response.ok("Tampil data Berhasil !",res)
 }
 })
 
}
// tambah data
exports.tambahdata=function(req,res){
  var {nim, nama_lengkap,kelamin,kelas,alamat}=req.body

 var data = [
  nim, nama_lengkap,kelamin,kelas,alamat
]

var sql = 'INSERT INTO `mahasiswa`( `nim`, `nama_lengkap`, `kelamin`, `kelas`, `alamat`) VALUES (?)';
  connection.query(sql, [data],function(err,rows,fields){
if (err){
     response.ok(err,res)
     console.log(err)
   }
   else{
     response.ok("Penambahan Berhasil !",res)
     console.log("Penambahan Berhasil !")
 }
  })
}
exports.ubah=function(req,res){
  var {nim,nama_lengkap,kelamin,kelas,alamat=req.body}=req.body
 
  var sql="UPDATE mahasiswa SET nama_lengkap=?, kelamin=?, kelas=?, alamat=?  WHERE nim="+nim
connection.query(sql,[nama_lengkap,kelamin,kelas,alamat], function(err,rows,fields){
  if (err){
    response.ok(err,res)
    console.log(err)
  }
  else {
    response.ok(rows,res)
  }
})
}
exports.del=function(req,res){
  var {nim,nama_lengkap,kelamin,kelas,alamat}=req.body
  var data=[nim,nama_lengkap,kelamin,kelas,alamat]
  var sql="DELETE FROM mahasiswa Where nim=?"

  connection.query(sql,[data[0]],function(err,rows,fireld){
  if(err){
    console.log(err)
  }
  else{
    response.ok(" Berhasil menghapus data!",res)
  }

  })

}
//menampilkan data matakuliah group
exports.tampilgroup=function(req,res){
connection.query('SELECT mahasiswa.nim, mahasiswa.nama_lengkap, mahasiswa.kelas,matakuliah.matakuliah,matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah=matakuliah.id_matakuliah AND krs.nim=mahasiswa.nim ORDER BY mahasiswa.nim',
function(err,rows,fields){
  if(err){
    console.log(err)
  }
else {
  response.oknested(rows,res)
}
})
}