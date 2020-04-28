/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AlliBilli.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-model',

    data: {
        name: 'AlliBilli',
       
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'sandboxData'
        },
        url: 'http://allibilli.com/sandbox.json'
    }
    
});
