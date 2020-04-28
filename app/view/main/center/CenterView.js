Ext.define("AlliBilli.view.main.center.CenterView", {
  extend: "Ext.tab.Panel",
  requires: [
    "Ext.ux.TabReorderer",
    "AlliBilli.view.main.center.Dock",
    "AlliBilli.view.main.center.CenterController",
  ],
  xtype: "reorderable-tabs",
  region: "center",
  activeTab: 0,
  width: "100%",
  header: false,
  id:'mainTabPanel',
  controller: "center-controller",
  plugins: {
    tabreorderer: true,
  },

  defaults: {
    bodyPadding: 10,
    scrollable: true,
    closable: true,
  },

  items: [
    {
      title: "Think Special",
      iconCls: "fas fa-cat",
      html:
        "The tabs in this example are reorderable. Drag any tab to change the order.",
      reorderable: false,
      closable: false,
    },
    {
      title: "Shout At Me",
      reorderable: false,
      iconCls: "far fa-clock",
      closable: false,
    },
    {
      title: "Tab 3",
    },
    {
      title: "Non Reorderable",
      html: "I can't be moved",
      reorderable: true,
    },
    {
      title: "Tab 4",
      reorderable: true,
    },
  ],
  dockedItems: [new AlliBilli.view.main.center.Dock()],
});
