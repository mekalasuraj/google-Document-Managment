import path from 'path';
import bodyParser from 'body-parser';
import expressHBS from 'express-hbs';
import multer from 'multer';

export default (app, express) => {

    const storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./uploads/');
        },
        filename:function(req,file,cb){
            cb(null, Date.now() + file.originalname);
        }
    });

    const upload = multer({ storage:storage});

    const fileService = require('../services/fileService').default();
    const fileController = require('../controllers/fileController').default();
    const fileApi = require('../apis/fileApi').default(fileService);

    app.engine('hbs', expressHBS.express4({
        partialsDir: path.resolve('./src/server/views')
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('./src/server/views'));
    app.use(require('cookie-parser')());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

    let router = express.Router();
    
    // routes
    router.get('/api/getAllFiles', fileApi.getIndividualFolderDocuments);
    router.delete('/api/deleteFile/:fileId', fileApi.deleteIndividualFile);
    router.post('/api/fileUpload',upload.single('file'), fileApi.fileUpload);
    router.get('/api/downloadFile/:fileId', fileApi.fileDownload);
    router.delete('/api/deleteFolder/:folderId', fileApi.deleteIndividualFolder);
    router.get('/', fileController.index);
    router.get('/folder/:folderId', fileController.folderInner);
    router.get('/api/getAllFilesByFolderId/:folderId', fileApi.getIndividualFolderDocumentsById);
    router.post('/api/fileUploadToFolder/:folderId',upload.single('file'), fileApi.uploadFileToFolderById);
    app.use(router);
    
};
