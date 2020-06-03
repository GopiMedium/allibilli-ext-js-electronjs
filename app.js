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

function createTab(tabId, url, title){
 
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
  var top =  125;

  var params = "width="+a.width+",height="+(a.height-top)+",left="+left+",top="+top+",scrollbars,toolbar=1,resizable"
  window.open(url,title, params); return false;
}