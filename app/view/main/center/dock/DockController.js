Ext.define("AlliBilli.view.main.center.dock.DockController", {
  extend: "Ext.app.ViewController",
  alias: "controller.dock-controller",
  requires: [
    "Ext.ux.IFrame"
  ],
  onAddTabClick: function () {
    alert("TEST");
  },
  sourceCode: function (obj, t1, btnText) {
    var id = obj.getId();
    var tabId = id + "_tab";
    var aTab = isTabInTabsAvailable(tabId);
    var tabPanel = Ext.getCmp("mainTabPanel");

    if (isTabInTabsAvailable(tabId) != null) {
      tabPanel.setActiveItem(aTab);
      return;
    }

    

    //var tab = tabPanel.add(getIFramePnl(tabId+"_iFrame", "Source", "https://github.com/haigopi/AlliBilli-EXT"));
    var url = 'https://www.eenadu.net';
    var title = "TEST";

    var p = Ext.create("Ext.ux.IFrame",
                {
                    id: tabId+"_f",
                    title: title,
                    padding: 10,
                    frame: url,
                    loadMask: 'TRUE...',
                    conte
                });

    var tab = tabPanel.add(p);
    tabPanel.setActiveItem(tab);
  },

  loadDevCredits: function () {
    alert("TEST");
  },
  autoCollapaseExpand: function (obj, e, eOpts) {
    if (obj.text == "Collapse") {
      collapseBoth();
      obj.setText("Expand");
    } else {
      expandBoth();
      obj.setText("Collapse");
    }
  },
});

function collapseBoth() {
  Ext.getCmp("west-panel").collapse();
  Ext.getCmp("east-panel").collapse();
}
function expandBoth() {
  Ext.getCmp("west-panel").expand();
  Ext.getCmp("east-panel").expand();
}
function isTabInTabsAvailable(tabId) {
  var rTab = null;
  var tabPanel = Ext.getCmp("mainTabPanel");
  tabPanel.items.each(function (tab) {
    console.log(tab.id + tab.getId() + " == " + tabId);
    if (tab.id == tabId) {
      rTab = tab;
    }
  });
  return rTab;
}
function getIFramePnl(eId, text, url) {
  var pnlObj = Ext.create("Ext.panel.Panel", {
    title: text,
    closable: true,
    autoScroll: true,
    id: eId,
    html: '<iframe src ="' + url + '" width="100%" height="100%"></iframe>',
  });

  return pnlObj;
}
