sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RisksManagmentDevSpace/Risks/test/integration/FirstJourney',
		'RisksManagmentDevSpace/Risks/test/integration/pages/RisksList',
		'RisksManagmentDevSpace/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RisksManagmentDevSpace/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);