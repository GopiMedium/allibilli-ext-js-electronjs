/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("AlliBilli.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main-controller",

  requires: ["AlliBilli.store.AccordianStore"],

  onSandboxLoad: function () {
    alert("LOADED");
  },

  init: function () {
    console.log("Initialized Users! This happens before");
    store = new AlliBilli.store.AccordianStore();
    store.load();
  },

  testMe: function(){
        alert('TST ME');
  }
 
});
