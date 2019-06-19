import rp from 'request-promise';
import fs from 'fs';

export default() => {

    const apiHost = 'https://staging.cloud-elements.com/elements/api-v2';

    const getIndividualFolderDocuments = function getIndividualFolderDocuments() {
        let options = {
            uri:`${apiHost}/folders/contents?path=%2FtestFolder1`,
            json: true,
            headers: {
                Authorization:'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=',
                'Accept': 'application/json'
            }
        };
       return rp(options);
    };
    
    const deleteIndividualFile = function deleteIndividualFile(fileId){
        let options = {
            method:'DELETE',
            uri:`${apiHost}/files/${fileId}`,
            json: true,
            headers: {
                Authorization:'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=' 
            }
        };
       return rp(options);
    };

    const fileUpload = function fileUpload(fileObj) {
        let options = {
            method:'POST',
            uri:`${apiHost}/files?path=%2F${fileObj.originalname}&calculateFolderPath=false&folderId=1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz`,
            formData: {
                name: fileObj.originalname,
                file: {
                    value: fs.createReadStream(fileObj.path),
                    options: {
                        filename: fileObj.originalname,
                        contentType: fileObj.mimetype
                    }
                }
            },
            headers: {
                'Authorization':'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=',
                'Content-Type': 'multipart/form-data'
            }
        };
       return rp(options);
    };

    const fileDownload = function fileDownload(fileId){
        let options = {
            method:'GET',
            uri:`${apiHost}/files/${fileId}/links`,
            json: true,
            headers: {
                Authorization:'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=' 
            }
        };
       return rp(options);
    };

    const deleteIndividualFolder = function deleteIndividualFolder(folderId){
        let options = {
            method:'DELETE',
            uri:`${apiHost}/folders/${folderId}`,
            json: true,
            headers: {
                Authorization:'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=' 
            }
        };
       return rp(options);
    };

    const getIndividualFolderDocumentsById = function getIndividualFolderDocumentsById(folderId) {
        let options = {
            uri:`${apiHost}/folders/${folderId}/contents`,
            json: true,
            headers: {
                Authorization:'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=',
                'Accept': 'application/json'
            }
        };
       return rp(options);
    };

    const uploadFileToFolderById = function uploadFileToFolderById(fileObj,folderId) {
        let options = {
            method:'POST',
            uri:`${apiHost}/files?path=%2F${fileObj.originalname}&calculateFolderPath=false&folderId=${folderId}`,
            formData: {
                name: fileObj.originalname,
                file: {
                    value: fs.createReadStream(fileObj.path),
                    options: {
                        filename: fileObj.originalname,
                        contentType: fileObj.mimetype
                    }
                }
            },
            headers: {
                'Authorization':'User XR93W6RPKaLFDNemJXtv6tsUu2j42BgHAAYLr8JcLZ4=, Organization 27e98f114b63603432b46f008389005f, Element mmZiDjNBwBX5Yx72jJB15bxVsHqRU8F0h0zYo31j7F4=',
                'Content-Type': 'multipart/form-data'
            }
        };
       return rp(options);
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
