
export default () => {

    const index = function index(req, res) {
        res.render('home', {
            title: 'Document Management App'
        });
    };
    
    const folderInner = function folderInner(req, res) {
        res.render('folderInner', {
            title: 'Document Management App'
        });
    };

    return {
        index,
        folderInner
    };
};
