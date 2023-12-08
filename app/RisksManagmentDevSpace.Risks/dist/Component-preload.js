//@ui5-bundle RisksManagmentDevSpace/Risks/Component-preload.js
sap.ui.require.preload({
	"RisksManagmentDevSpace/Risks/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("RisksManagmentDevSpace.Risks.Component",{metadata:{manifest:"json"}})});
},
	"RisksManagmentDevSpace/Risks/i18n/i18n.properties":'# This is the resource bundle for RisksManagmentDevSpace.Risks\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Risks\n\n#YDES: Application description\nappDescription=My SAP application\n\nflpTitle=Risks\n',
	"RisksManagmentDevSpace/Risks/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"RisksManagmentDevSpace.Risks","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.4","toolsId":"64c1c1ca-c445-49e4-ae18-6865ec5b90de"},"dataSources":{"mainService":{"uri":"service/RisksManagmentDevSpace/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"RisksManagmentDevSpaceRisks-display":{"semanticObject":"RisksManagmentDevSpaceRisks","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.7","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"RisksManagmentDevSpace.Risks.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"RisksList","target":"RisksList"},{"pattern":"Risks({key}):?query:","name":"RisksObjectPage","target":"RisksObjectPage"}],"targets":{"RisksList":{"type":"Component","id":"RisksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Risks","variantManagement":"Page","navigation":{"Risks":{"detail":{"route":"RisksObjectPage"}}}}}},"RisksObjectPage":{"type":"Component","id":"RisksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Risks"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.RisksManagmentDevSpace"}}'
});
//# sourceMappingURL=Component-preload.js.map