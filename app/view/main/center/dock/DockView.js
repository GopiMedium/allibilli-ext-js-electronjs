Ext.define("AlliBilli.view.main.center.Dock", {
  extend: "Ext.toolbar.Toolbar",
  xtype: "toolbar-overflowbar",
  requires: [AlliBilli.view.main.center.dock.DockController],
  dock: "bottom",
  border: false,
  width: "100%",
  overflowHandler: "scroller",
  controller: "dock-controller",
  items: [
    {
      xtype: "button",
      text: "Youtube Music",
      id: "youTubeWndw",
      iconCls: "fab fa-youtube",
      tooltip: "Stay AdFree",
    },
    "-",
    {
      xtype: "button",
      text: "Development Credits",
      id: "devCrdts",
      tooltip: "Helping hands are purer than saying lips.",
      iconCls: "fas fa-tools",
      listeners: {
        click: "loadDevCredits",
      },
    },
    "-",
    {
      xtype: "button",
      text: "Tech Articles",
      id: "gopsBlg",
      tooltip: "Gopi's Blog",
      iconCls: "fas fa-microchip",
      listeners: {
        click: "loadDevCredits",
      },
    },
    "-",
    {
      xtype: "button",
      text: "Project Walkthrough",
      id: "prjctWlkThrgh",
      tooltip: "Guide - How did this was built?",
      iconCls: "fas fa-walking",
      listeners: {
        click: "loadDevCredits",
      },
    },
    "-",
    {
      xtype: "button",
      text: "Project Source Code",
      id: "srcCde",
      tooltip: "Github Source Code - This is an OpenSource",
      iconCls: "fab fa-github-alt",
      listeners: {
        click: "sourceCode",
      },
    },
    "->",
    {
      xtype: "button",
      text: "Collapse",
      id: "exColl",
      iconCls: "fas fa-expand-arrows-alt",
      tooltip: "Collpase and Expands the side panels",
      listeners: {
        click: "autoCollapaseExpand",
      },
    },
  ],
});
