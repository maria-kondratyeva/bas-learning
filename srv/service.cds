using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { RisksManagmentDevSpace as my } from '../db/schema';

@path : '/service/RisksManagmentDevSpace'
service RisksManagmentDevSpaceService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    @odata.draft.enabled
    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner;
}

annotate RisksManagmentDevSpaceService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
