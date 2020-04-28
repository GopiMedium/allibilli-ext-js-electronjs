/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AlliBilli.Application',

    name: 'AlliBilli',

    requires: [
        // This will automatically load all classes in the AlliBilli namespace
        // so that application classes do not need to require each other.
        'AlliBilli.*'
    ],

    // The name of the initial view to create.
    mainView: 'AlliBilli.view.main.Main'
});
