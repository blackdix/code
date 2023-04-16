var express=require('express');
var auth=require('./auth');
var router=express.Router();
var verifikasi=require('./verifikasi');

//daftar menu register
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);
// alamat yang perlu di autorisasi
router.get('/api/v1/rahasia',verifikasi(), auth.halamanrahasia);

module.exports= router;