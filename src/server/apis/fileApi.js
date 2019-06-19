import fs from 'fs';

export default(configService) => {

    const getIndividualFolderDocuments = function getIndividualFolderDocuments(req, res) {
        configService.getIndividualFolderDocuments()
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const deleteIndividualFile = function deleteIndividualFile(req, res) {
        configService.deleteIndividualFile(req.params.fileId)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const fileUpload = function fileUpload(req, res) {
        configService.fileUpload(req.file)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const fileDownload = function fileDownload(req, res) {
        configService.fileDownload(req.params.fileId)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const deleteIndividualFolder = function deleteIndividualFolder(req, res) {
        configService.deleteIndividualFolder(req.params.folderId)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const getIndividualFolderDocumentsById = function getIndividualFolderDocumentsById(req, res) {
        configService.getIndividualFolderDocumentsById(req.params.folderId)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    const uploadFileToFolderById = function uploadFileToFolderById(req, res) {
        configService.uploadFileToFolderById(req.file,req.params.folderId)
        .then(documentTypeList => {
            res.json(documentTypeList);
        });
    };

    return {
        getIndividualFolderDocuments,
        deleteIndividualFile,
        fileUpload,
        fileDownload,
        deleteIndividualFolder,
        getIndividualFolderDocumentsById,
        uploadFileToFolderById
    };
};
