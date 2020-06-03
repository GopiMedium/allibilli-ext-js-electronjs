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
function createTab(tabId, url, title) {
  var aTab = isTabInTabsAvailable(tabId);
  var tabPanel = Ext.getCmp("mainTabPanel");

  if (isTabInTabsAvailable(tabId) != null) {
    tabPanel.setActiveItem(aTab);
    return;
  }
  var iframe = getIFrame(tabId + "_f", title, url);
  var tab = tabPanel.add(iframe);
  tabPanel.setActiveItem(tab);
}

function newWindow(url, title) {
  var a = Ext.get("mainTabPanel").getViewSize();
  var left = Ext.get("mainTabPanel").getBox().x;
  var top = 125;
  window.open(url, title, params);
  return false;
}