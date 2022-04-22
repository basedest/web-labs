const express = require('express')
const multer = require('multer')
const path = require('path')
const processImage = require('./processImage')

// устанавливаем хранилище для картинок
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

// загрузка изображений 
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb)
  }
}).single('image')

// проверка типов файлов
function checkFileType(file, cb){
  // разрешённые расширения
  const filetypes = /jpeg|jpg|png|gif/
  // проверка расширения
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  //проверка типа
  const mimetype = filetypes.test(file.mimetype)

  if(mimetype && extname){
    return cb(null,true)
  } else {
    cb('Ошибка: Это не изображение!')
  }
}

// инициализация приложения
const app = express()

// EJS
app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => res.render('index'))

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    const filename = `uploads/${req.file.filename}`
    if(err){
      res.render('index', {
        msg: err
      })
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Ошибка: не выбран файл'
        })
      } else {
        processImage(filename, req.body)
        .then(() => {
          res.render('index', {
            msg: 'Файл загружен!',
            file: filename
          })
        })
        .catch(err => res.render('index', {msg: err}))
      }
    }
  })
})

const port = 8080

app.listen(port, () => console.log(`Сервер запущен на порте ${port}`))