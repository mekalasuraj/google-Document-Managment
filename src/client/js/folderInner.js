
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../css/home.css';

class FolderInnerApp extends React.Component {

    constructor() {
        super();
        this.state = {
            folderData:[],
            isInitialStateLoaded:false,
            selectedFile:null,
            fileLinks:[]
        }
    }

    componentDidMount(){
        let self = this.state;
        let folderId = window.location.href.split('/')[4];
        axios.get(`/api/getAllFilesByFolderId/${folderId}`)
        .then(response=>{
            self.folderData = response.data;
            self.isInitialStateLoaded = true;
            this.setState(self);
        })
    }

    fileChangedHandler = (e) => {
        this.setState({selectedFile:e.target.files[0]});
    }
    
    onformSubmit = (e) => {
        e.preventDefault();
        let self = this.state;
        self.isInitialStateLoaded = false;
        this.setState(self);
        let folderId = window.location.href.split('/')[4];
        let formData = new FormData();
        formData.append('file', this.state.selectedFile);
        axios.post(`/api/fileUploadToFolder/${folderId}`,formData)
        .then(response=>{
            self.isInitialStateLoaded = true;
            if(response.status === 200){
                window.location.reload();
            }
        });
    }

    onDeleteDocumentById = (e) => {
        e.preventDefault();
        let self = this.state;
        self.isInitialStateLoaded = false;
        this.setState(self);
        let dataId = e.target.getAttribute('data-file-id');
        axios.delete(`/api/deleteFile/${dataId}`)
        .then(response=>{
            self.isInitialStateLoaded = true;
            if(response.status === 200){
                window.location.reload();
            }
        });
    }

    onDeleteFolderById = (e) =>{
        e.preventDefault();
        let self = this.state;
        self.isInitialStateLoaded = false;
        this.setState(self);
        let dataId = e.target.getAttribute('data-folder-id');
        axios.delete(`/api/deleteFolder/${dataId}`)
        .then(response=>{
            self.isInitialStateLoaded = true;
            if(response.status === 200){
                window.location.reload();
            }
        })
    }

    render(){
        return(
            <div className="marginTop">
               {
                   this.state.isInitialStateLoaded ?
                   (
                    <section>
                        <div className="row text-center">
                <div className="col-12">
                <h4>Upload a File</h4>
                <form encType="multipart/form-data" className="marginTop-30" method="POST" id="editProfile">
                <div className="form-group col-md-4 offset-md-5">
                <input type="file" id="file" name="file" onChange={this.fileChangedHandler} className="form-control" style={{border:'none'}} />
                </div>
                <div className="form-row marginTop-10">
                <div className="form-group col-md-12">
                    <button className="btn btn-primary" onClick={this.onformSubmit}>Submit</button>
                </div>
            </div>
                </form>
                </div>
                </div>
                    <div className="row row-padding">
                    {
                        this.state.folderData.map((dataItem,i)=>(
                         <div className="col-4" key={i}>
                         <div className="main-card">
                         <p style={{fontSize:18}}>{dataItem.name}</p>
                         <div className="row">
                         <div className="col-6">
                         {
                             dataItem.directory ?
                             (
                                 <div>
                                 <i className="fa fa-folder fa-3x"  aria-hidden="true"></i>
                                 <div>
                                 <a href={`/folder/${dataItem.id}`} className="anchorLink">View Files</a>
                                 </div>
                                 </div>
                             )
                             :(
                                 <img src={dataItem.properties.thumbnailLink} className="img_height"/>
                             )
                         }
                         </div>
                         <div className="col-6">
                         <div style={{paddingTop:25}}>
                       
                        </div>
                          <div style={{paddingTop:10}}>
                          {
                              dataItem.directory ?
                              (
                                 <button data-folder-id={dataItem.id} onClick={this.onDeleteFolderById} className="btn btn-danger">Delete Folder</button>
                              )
                              :(
                                 <button data-file-id={dataItem.id} onClick={this.onDeleteDocumentById} className="btn btn-danger">Delete File</button>
                              )
                          }
                          </div>
                         </div>
                         </div>
                         </div>
                         </div>
                        ))
                    }
                    </div>
                     </section>
                   )
                   :(
                    <h1 style={{textAlign:'center',marginTop:'13%'}}>Loading...</h1>
                   )
               }
                </div>
        );
    }
}

ReactDOM.render(<FolderInnerApp/>,document.getElementById('root'));