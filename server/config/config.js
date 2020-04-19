//=========================
//Puerto
//=========================

process.env.PORT = process.env.PORT || 3000;

//=========================
//Entorno
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'env';


//=========================
//Base de datos
//=========================

let urlDB;

if(process.env.NODE_ENV === 'env'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://luisito1295:cemsad12@cluster0-ytzmv.mongodb.net/test';
}
