# Instructions to start the app
1. Install node.js and nodemon in your computer
2. Clone this repository
3. Run command `npm install`
4. Run command `npm run loc` to the run the app in port 8081
5. You should now be able to access the app via url `localhost:8081`


The application code is deployed in heroku at https://documentmanagmentapp.herokuapp.com

And below are the API access instructions

# API instructions

1. Get Files API instructions 

Ex: the API to get all files from folder, where folder is "1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz"
https://documentmanagmentapp.herokuapp.com/api/getAllFilesByFolderId/1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz 

2. Upload file API instructions

Ex: the API to upload document in folder where folder is "1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz"
https://documentmanagmentapp.herokuapp.com/api/fileUploadToFolder/"1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz"

3. Delete file API

Ex: the API to remove file with id, where id is "1qJxeFvfPkFrGZjs0ZG_6iV5xv8hWHtSy"
https://documentmanagmentapp.herokuapp.com/api/deleteFile/"1qJxeFvfPkFrGZjs0ZG_6iV5xv8hWHtSy"


4.The files are uploaded and removed in this google drive folder https://drive.google.com/open?id=1-Zp5DJKpjRUV3gpF23fM7_yQVXoNzVOz


