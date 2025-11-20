sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("satthi.reddy.project1.controller.View1", {
        onBeforeRebindTable: function (oEvent) {
            var oBindingParams = oEvent.getParameter("bindingParams");
            const oModel = this.getView().getModel();
            const oMetaModel = oModel.getMetaModel();
            const sEntitySet = oEvent.getSource().getEntitySet();
            const oEntitySet = oMetaModel.getODataEntitySet(sEntitySet);
            const oEntityType = oMetaModel.getODataEntityType(oEntitySet.entityType);
            const aProperties = oEntityType.property.map(p => p.name);
            const aExpand = ["Category", "Supplier"];


            const aExpandFields = [
                "Category",
                "Supplier"
            ];


            const sSelect = [...aProperties, ...aExpandFields].join(",");

            oBindingParams.parameters.expand = aExpand.join(",");
            oBindingParams.parameters.select = sSelect;


            // oBindingParams.parameters.expand = "Category,Supplier";
            // oBindingParams.parameters.select = "ID,Name,Price,Description,DiscontinuedDate,Rating,ReleaseDate,Category/Name,Supplier/Name";
            // oBindingParams.parameters.select = "Products,Category/Name,Supplier/Name";
        }
    });

});