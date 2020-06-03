Ext.define("AlliBilli.view.main.center.dock.DockController", {
  extend: "Ext.app.ViewController",
  alias: "controller.dock-controller",
  requires: ["Ext.ux.IFrame", "GlobalFunctions"],

  onAddTabClick: function () {
    alert("TEST");
  },

  sourceCode: function (obj, t1, btnText) {
    var id = obj.getId();
    var tabId = id + "_tab";
    var url = "https://www.sakshi.com/";
    var title = "SAKSHI";

    GlobalFunctions.createTab(tabId, url, title);
  },

  loadDevCredits: function () {
    newWindow("https://www.eenadu.net/", "newWindow");
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

function handlePanelClick(ele) {
  console.log("TEST" + p.documentElement);
  //     alert(this.documentElement);
}

