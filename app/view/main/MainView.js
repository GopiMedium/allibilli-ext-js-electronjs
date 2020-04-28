Ext.define("AlliBilli.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "layout-border",
  requires: [
    "Ext.layout.container.Border",
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "AlliBilli.view.main.MainController",
    "AlliBilli.view.main.MainModel",

    "AlliBilli.view.main.center.CenterView",
    "AlliBilli.view.main.center.left.LeftAccordianView",
    "AlliBilli.view.main.center.left.RightAccordianView",
  ],
  border: false,
  controller: "main-controller",
  viewModel: "main-model",

  profiles: {
    classic: {
      itemHeight: 100,
    },
    neptune: {
      itemHeight: 100,
    },
    graphite: {
      itemHeight: 120,
    },
    "classic-material": {
      itemHeight: 120,
    },
  },
  layout: "border",
  cls: Ext.baseCSSPrefix + "shadow",
  bodyBorder: false,

  defaults: {
    collapsible: true,
    split: true,
  },

  items: [
    new AlliBilli.view.main.center.left.LeftAccordianView(),
    new AlliBilli.view.main.center.CenterView(),
    new AlliBilli.view.main.center.left.RightAccordianView(),
  ],
  listeners: [
    {
      afterRender: function(){
        console.log('LOADED');
      },
    },
  ],
});
