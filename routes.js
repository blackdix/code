'use strict';
var response = require('./res');
module.exports = function (app) {
   var jsonku = require('./controller');

   app.route('/')
      .get(jsonku.index);
  

   app.route('/tampil')
      .get(jsonku.tampildata);
  
   app.route('/tampilid/:id')
      .get(jsonku.tampildataid);

   app.route('/add')
      .post(jsonku.tambahdata);

   app.route('/ubah')
      .put(jsonku.ubah);
   app.route('/hapus')
      .delete(jsonku.del);
   app.route('/tampilmatakuliah')
      .get(jsonku.tampilgroup);

}
