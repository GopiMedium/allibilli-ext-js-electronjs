Ext.define("GlobalFunctions", {
  singleton: true,
  alternateClassName: "GlobalFunctions",
  testFunction: function () {
    Ext.Msg.alert("Succes", "You have clicked on <b>");
  },
  isTabInTabsAvailable: function (tabId) {
    var rTab = null;
    var tabPanel = Ext.getCmp("mainTabPanel");
    tabPanel.items.each(function (tab) {
      console.log(tab.id + tab.getId() + " == " + tabId);
      if (tab.id == tabId) {
        rTab = tab;
      }
    });
    return rTab;
  },
  getIFrame: function (tabId, title, url) {
    var pnlObj = Ext.create("Ext.ux.IFrame", {
      id: tabId,
      title: title,
      src: url,
      onLoad: function (src, ifrm, b) {
        console.log("==>" + src + b + "::" + ifrm.title);
        try {
          //var ifrm = p.getEl().dom.children[0];
          var doc = ifrm.contentDocument
            ? ifrm.contentDocument
            : ifrm.contentWindow.document;
          var directDoc = p.getDoc() + p.getDoc;
        } catch (err) {
          console.log("ERROR --> " + err);
        }
      },
      onReady: function (a, b, c) {
        console.log("==>++" + a + c + b);
      },
    });
    return pnlObj;
  },

  collapseBoth: function () {
    Ext.getCmp("west-panel").collapse();
    Ext.getCmp("east-panel").collapse();
  },
  expandBoth: function () {
    Ext.getCmp("west-panel").expand();
    Ext.getCmp("east-panel").expand();
  },
  
  createTab: function (tabId, url, title) {
    var aTab = GlobalFunctions.isTabInTabsAvailable(tabId);
    var tabPanel = Ext.getCmp("mainTabPanel");

    if (GlobalFunctions.isTabInTabsAvailable(tabId) != null) {
      tabPanel.setActiveItem(aTab);
      return;
    }
    var iframe = GlobalFunctions.getIFrame(tabId + "_f", title, url);
    var tab = tabPanel.add(iframe);
    tabPanel.setActiveItem(tab);
  },

  newWindow: function (url, title) {
    var a = Ext.get("mainTabPanel").getViewSize();

    var left = Ext.get("mainTabPanel").getBox().x;
    var top = 125;

    var params =
      "width=" +
      a.width +
      ",height=" +
      (a.height - top) +
      ",left=" +
      left +
      ",top=" +
      top +
      ",scrollbars,toolbar=1,resizable";

    window.open(url, title, params);
    return false;
  },

  
});
