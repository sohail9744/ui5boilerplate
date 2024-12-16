import Controller from "sap/ui/core/mvc/Controller";
import ToolPage from "sap/tnt/ToolPage";
import Router from "sap/ui/core/routing/Router";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace nadec.frontend.controller
 */
export default class App extends Controller {
    public router: any;
    /*eslint-disable @typescript-eslint/no-empty-function*/
    onInit(): void {
        this.router = UIComponent.getRouterFor(this);
        this.onMenuButtonPress();
    }
    protected onMenuButtonPress(): void {
        let toolPage = this.byId("toolPage") as ToolPage;
        toolPage?.setSideExpanded(!toolPage?.getSideExpanded());
    }
    protected onItemSelect(ev: any): void {
        let item = ev.getParameter("item").getKey();
        this.router.navTo(item);
    }
}