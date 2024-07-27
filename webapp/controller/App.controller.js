sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
  ],
  function (BaseController, UIComponent, MessageToast) {
    "use strict";

    return BaseController.extend("sohail9744.demo.controller.App", {
      onInit: function () {
        this.router = UIComponent.getRouterFor(this)
      },

      onMenuButtonPress: function () {
        let toolPage = this.byId('toolPage')
        toolPage?.setSideExpanded(!toolPage?.getSideExpanded());
      },
      onItemSelect: function (ev) {
        let item = ev.getParameter('item').getKey();
        this.router.navTo(item)
        MessageToast.show(`${item} Page`)
      }
    });
  }
);
