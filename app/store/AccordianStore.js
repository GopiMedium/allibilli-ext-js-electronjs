Ext.define("AlliBilli.store.AccordianStore", {
  extend: "Ext.data.Store",
  alias: "store.accordianStore",
  model: "AlliBilli.model.AccordianModel",

  proxy: {
    method: "GET",
    type: "ajax",
    url: "data/sandbox.json",
    autoLoad: false,
    reader: {
      type: "json",
      rootProperty: "sandboxData",
    },
  },
});
