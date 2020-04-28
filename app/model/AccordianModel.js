Ext.define("AlliBilli.model.AccordianModel", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "eleId",
      type: "int",
    },
    {
      name: "text",
      type: "string",
    },
    {
      name: "accdId",
      type: "int",
    },
    {
      name: "rootId",
      type: "int",
    },
    {
      name: "leaf",
      type: "boolean",
    },
    {
      name: "orderList",
      type: "int",
    },
    {
      name: "eleUrl",
      type: "string",
    },
  ],
  hasMany: { model: "Children", name: "children" }
});
