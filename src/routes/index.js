const {Router,application} = require('express');
const router = Router();

//importacion de metodos para las rutas
const {holaDev,getAnimales,getZoo,getEspecies,addZoo} = require('../controllers/index.controller');

//Definicion de rutas
/*GET - Trae datos
,POST - Insertar o modificar datos
,DELETE - Elimina datos
,PUT - Lo mismo que POST pero con XML*/

// req = request
// res = response
router.get('/', holaDev);

router.get('/animales', getAnimales);

router.get('/zoo', getZoo);

router.get('/especies', getEspecies);

router.post('/addZoo', addZoo);

module.exports = router;