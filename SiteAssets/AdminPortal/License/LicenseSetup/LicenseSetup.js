var a0_0x1394e9=a0_0x1931;(function(_0x1010b4,_0x4d92f8){var _0x4a62c7=a0_0x1931,_0xd96746=_0x1010b4();while(!![]){try{var _0x203d72=-parseInt(_0x4a62c7(0xc7))/0x1+-parseInt(_0x4a62c7(0x105))/0x2+parseInt(_0x4a62c7(0x9d))/0x3+parseInt(_0x4a62c7(0xbc))/0x4*(-parseInt(_0x4a62c7(0xb9))/0x5)+parseInt(_0x4a62c7(0xae))/0x6+-parseInt(_0x4a62c7(0x91))/0x7*(-parseInt(_0x4a62c7(0x10b))/0x8)+-parseInt(_0x4a62c7(0xf9))/0x9*(-parseInt(_0x4a62c7(0xd0))/0xa);if(_0x203d72===_0x4d92f8)break;else _0xd96746['push'](_0xd96746['shift']());}catch(_0x1c712a){_0xd96746['push'](_0xd96746['shift']());}}}(a0_0x3d85,0x2a161),$(document)[a0_0x1394e9(0xb7)](function(){var _0x111015=a0_0x1394e9;UserAuthorization(),GetClientName(),$(_0x111015(0xe5))[_0x111015(0xeb)](function(){var _0x438abf=_0x111015;location[_0x438abf(0xe7)]='../Pages/AdminPortal.aspx?WebAppId='+Logged_CompanyId;}),$(_0x111015(0xcd))[_0x111015(0xb2)]('href',_0x111015(0x94)+Logged_CompanyId+''),LicenseDetails(),$('#Accept')[_0x111015(0xeb)](function(){var _0x135561=_0x111015;$(this)['is'](_0x135561(0xba))?document[_0x135561(0xd6)](_0x135561(0xb5))[_0x135561(0xc0)]=![]:document[_0x135561(0xd6)]('btnApply')[_0x135561(0xc0)]=!![];}),$('#rdoEnterprise')[_0x111015(0xeb)](function(){var _0xa3470=_0x111015;$(_0xa3470(0x95))[_0xa3470(0xb2)](_0xa3470(0x106),![]),$('.chkAllCustom')[_0xa3470(0xb2)](_0xa3470(0x106),![]);}),$('#rdoCustomize')[_0x111015(0xeb)](function(){var _0x4e400c=_0x111015;$('#rdoEnterprise')[_0x4e400c(0xb2)](_0x4e400c(0x106),![]);}),$(_0x111015(0xed))[_0x111015(0xeb)](function(){var _0x4bb5f1=_0x111015;if(ModulesChangeValidate()==!![])$(_0x4bb5f1(0x95))[_0x4bb5f1(0xb2)](_0x4bb5f1(0x106))==!![]?($(_0x4bb5f1(0xd2))[_0x4bb5f1(0xb2)](_0x4bb5f1(0x106))==!![]||$('#chkBusProcVersion')[_0x4bb5f1(0xb2)]('checked')==!![])&&(waitingDialog['show'](),setTimeout(function(){setModules();},0x64)):(waitingDialog[_0x4bb5f1(0xa3)](),setTimeout(function(){setModules();},0x64));else return alert(_0x4bb5f1(0xc9)),![];});}));function UserAuthorization(){var _0x85dc2c=a0_0x1394e9;titanForWork[_0x85dc2c(0xb6)]('ManageCompany',Logged_CompanyId)[_0x85dc2c(0xc1)](function(_0x355678,_0x2347ed){var _0xeadb7=_0x85dc2c;if(_0x355678[_0xeadb7(0xf0)]>0x0){if(_0x355678[0x0][_0xeadb7(0xd7)]==_0xeadb7(0xd7)||_0x355678[0x0]['TechAdmin']==_0xeadb7(0x109)){if(TitanLicenseFormat==_0xeadb7(0xe4)||TitanLicenseFormat==null)$(_0xeadb7(0xcb))[_0xeadb7(0xb2)](_0xeadb7(0x106),!![]);else TitanLicenseFormat==_0xeadb7(0xdb)&&($(_0xeadb7(0x95))['prop'](_0xeadb7(0x106),!![]),$('#chkDMSVersion')[_0xeadb7(0xb2)](_0xeadb7(0x106),!![]));}else alert(_0x2347ed),window[_0xeadb7(0xa4)]['href']=_spPageContextInfo['webAbsoluteUrl'];}});}function GetClientName(){var _0x590940=a0_0x1394e9,_0x5a9e41=0x1,_0x1a7690='';_0x1a7690=_spPageContextInfo['webAbsoluteUrl']+'/_api/web/Lists/GetByTitle(\x27ExternalUsers\x27)/Items?$filter=Status\x20eq\x20\x27Active\x27&$top=5000',$['ajax']({'url':_0x1a7690,'headers':{'Accept':_0x590940(0x100)},'async':![],'success':function(_0x42cd61){var _0x378a70=_0x590940,_0x15ba59=_0x42cd61['d'][_0x378a70(0xb8)];$('#licenseActiveGuestUser')['text'](_0x15ba59[_0x378a70(0xf0)]);},'error':function(_0x423fa2){var _0x275bb2=_0x590940;alert(_0x423fa2[_0x275bb2(0xd4)]),deferred['reject'](_0x423fa2[_0x275bb2(0xd4)]);}});}function LicenseDetails(){var _0x13d6e0=a0_0x1394e9;licenseValidTill=$[_0x13d6e0(0xe6)][_0x13d6e0(0xd8)](_0x13d6e0(0xe9),licenseValidTill),GetActiveUsersLicense()[_0x13d6e0(0xc1)](function(_0x5bad05){var _0x3557a0=_0x13d6e0;$(_0x3557a0(0xbb))[_0x3557a0(0xa6)](_0x5bad05);}),$(_0x13d6e0(0xc4))[_0x13d6e0(0xa6)](UsersLicenceRequired);var _0x549ff5=document[_0x13d6e0(0xd6)](_0x13d6e0(0xb0));activeCheck==!![]?_0x549ff5[_0x13d6e0(0x106)]=!![]:(_0x549ff5[_0x13d6e0(0x106)]=![],_0x549ff5['disabled']=![],document[_0x13d6e0(0xd6)]('btnApply')['disabled']=![]),$(_0x13d6e0(0xf3))[_0x13d6e0(0xa6)](licenseValidTill),$(_0x13d6e0(0xe3))[_0x13d6e0(0xa6)](UsersLicenceRequired);}function GetActiveUsersLicense(){var _0x4b1c07=a0_0x1394e9,_0xba76f3=$[_0x4b1c07(0x9e)](),_0x325ab3=_spPageContextInfo['webAbsoluteUrl']+_0x4b1c07(0xbd);return $[_0x4b1c07(0xa7)]({'url':_0x325ab3,'type':'GET','headers':{'accept':_0x4b1c07(0x100)},'success':function(_0x40ad65){var _0x294977=_0x4b1c07,_0x3070fb=_0x40ad65['d'][_0x294977(0xb8)];if(_0x3070fb['length']>0x0){var _0x4383f9=[];$[_0x294977(0xf7)](_0x3070fb,function(_0x11a480,_0x166ee0){var _0x2abffe=_0x294977,_0x3271b7=![];$[_0x2abffe(0xf7)](_0x4383f9,function(_0x5b9da1,_0x205cb3){var _0x473de3=_0x2abffe;_0x166ee0[_0x473de3(0x97)]==_0x205cb3[_0x473de3(0x97)]&&(_0x3271b7=!![]);;}),_0x3271b7==![]&&_0x166ee0[_0x2abffe(0x97)]!=''&&_0x4383f9[_0x2abffe(0xc3)](_0x166ee0);});var _0x2dae60=_0x3070fb['length'];_0xba76f3[_0x294977(0xa9)](_0x2dae60);}},'error':function(_0xe9111a){var _0x1b8af7=_0x4b1c07;BootstrapDialog[_0x1b8af7(0x102)](_0xe9111a[_0x1b8af7(0xd4)]),_0xba76f3[_0x1b8af7(0x96)](_0xe9111a[_0x1b8af7(0xd4)]);}}),_0xba76f3;}function a0_0x3d85(){var _0x3e4b85=['1683yMzric','Document.aspx','stringify','Navigation','Default.aspx','More','SP.Data.AdminPortalListItem','application/json;odata=verbose','\x27)/Items(','alert','approvals.aspx','Permissions','616724OtryVW','checked','Categories','Admin\x20Portal','TechAdmin','POST','16ONEMvJ','Org.\x20Chart','673547OSeIiY','val','Licence\x20Manager','../Pages/LicenceAgreement.aspx?WebAppId=','#rdoCustomize','reject','Email','?$select=Title,ParentId,Status,Postion,Menu,URL,DepartmentID,ID,Company/Id&$top=5000&$expand=Company','ManageCompanies','Process\x20has\x20been\x20completed','Guest\x20Users','Company\x20Documents','518280hHzNyg','Deferred','Employee\x20Directory','../Pages/ManagePermissions.aspx','PATCH','promise','show','location','SP.Folder','text','ajax','webAbsoluteUrl','resolve','Navigation\x20is\x20blank.\x20Kindly\x20contact\x20administrator.','Pages/ApprovalFormSetup.aspx?UHJvY2Vzcw==','\x27)/items/','forEach','617880PGIyQN','?$select=Title,Id,TemplateType&$top=5000&$filter=TemplateType\x20ne\x20\x27Template3\x27\x20','Accept','Pages/ApprovalFormSetup.aspx?Qm90aA==','prop','/_api/web/rootfolder','/_api/web/lists/getbytitle(\x27','btnApply','PageAuthorization','ready','results','205pPJlzE',':checked','#licenseActiveUsers','6672FvkFTq','/_api/web/lists/GetByTitle(\x27Employees\x27)/Items?$select=ID,Email&$filter=PrimaryCompany\x20eq\x20\x27Primary\x27\x20and\x20Status\x20eq\x20\x27Active\x27&$top=5000','?$select=Title,Active,PageURL,Id&$top=5000','/_api/web/Lists/GetByTitle(\x27EnvironmentalSettings\x27)/Items(\x27','disabled','done','Template1','push','#totalUserLicenses','Title','SP.Data.ExternalUsersListItem','150740xZgkQa','My\x20Documents','Kindly\x20select\x20any\x20modules\x20first.','Error\x20occured\x20while\x20updating\x20item\x20-\x20','#rdoEnterprise','EnvironmentalSettings','#LiceneceAgreement','reload','MERGE','12390qYjNWv','Office\x20Locations','#chkDMSVersion','when','responseText','ManageDepartments','getElementById','SiteAdmin','formatDate','../Pages/ManagePermissionDMS.aspx','Pages/ApprovalFormSetup.aspx?RG9jdW1lbnRz','DMS','ExternalUsers','Business\x20Process','hide','ManageOfficeLocations','SP.Data.NavigationListItem','Approvals','AdminPortal','#adUser','Enterprise','#closeLicenceManager','datepicker','href','Manage\x20Guest\x20Users','dd\x20M\x20yy','#txtLicenseId','click','Clients','#btnSubModules','SP.Data.EnvironmentalSettingsListItem','#__REQUESTDIGEST','length','Approval\x20Template','Department','#licenseValidTill','ManageEmployees','License\x20Declined\x20Successfully','WebAnalytics','each','#chkBusProcVersion'];a0_0x3d85=function(){return _0x3e4b85;};return a0_0x3d85();}function ModulesChangeValidate(){var _0x11f5d0=a0_0x1394e9;return $('#rdoCustomize')[_0x11f5d0(0xb2)](_0x11f5d0(0x106))==!![]?$(_0x11f5d0(0xd2))['prop'](_0x11f5d0(0x106))==![]?$(_0x11f5d0(0xf8))['prop']('checked')==![]?![]:!![]:!![]:!![];}function setModules(){var _0x4a453c=a0_0x1394e9;if($(_0x4a453c(0xcb))[_0x4a453c(0xb2)]('checked')==!![])ChangeHomepage(_0x4a453c(0xfd));else{if($('#rdoCustomize')['prop']('checked')==!![]){if($(_0x4a453c(0xd2))[_0x4a453c(0xb2)](_0x4a453c(0x106))==!![])ChangeHomepage(_0x4a453c(0xfa));else $(_0x4a453c(0xf8))[_0x4a453c(0xb2)](_0x4a453c(0x106))==!![]&&ChangeHomepage(_0x4a453c(0x103));}}}function ChangeHomepage(_0x453849){var _0x245de5=a0_0x1394e9;$[_0x245de5(0xa7)]({'url':_spPageContextInfo['webAbsoluteUrl']+_0x245de5(0xb3),'type':_0x245de5(0x10a),'data':JSON[_0x245de5(0xfb)]({'__metadata':{'type':_0x245de5(0xa5)},'WelcomePage':'Pages/'+_0x453849}),'headers':{'Accept':_0x245de5(0x100),'Content-Type':_0x245de5(0x100),'IF-MATCH':'*','X-HTTP-Method':_0x245de5(0xa1),'X-RequestDigest':$(_0x245de5(0xef))[_0x245de5(0x92)]()},'success':function(_0x21cb72,_0x272bfd,_0x238074){var _0x361b18=_0x245de5;if($('#rdoEnterprise')[_0x361b18(0xb2)]('checked')==!![])changeTitanFormat(_0x361b18(0xe4)),ChangeTitanNavigation();else{if($('#rdoCustomize')[_0x361b18(0xb2)](_0x361b18(0x106))==!![]){if($(_0x361b18(0xd2))[_0x361b18(0xb2)](_0x361b18(0x106))==!![])changeTitanFormat('DMS'),ChangeDMSNavigation();else $(_0x361b18(0xf8))[_0x361b18(0xb2)](_0x361b18(0x106))==!![]&&(changeTitanFormat(_0x361b18(0xdd)),ChangeBusProcNavigation());}}},'error':function(_0x2f1ecc,_0xe539bb,_0x9abdee){var _0x1a8146=_0x245de5;return alert(_0x2f1ecc[_0x1a8146(0xd4)]),waitingDialog[_0x1a8146(0xde)](),![];}});}function changeTitanFormat(_0x5c76cf){var _0x46d1eb=a0_0x1394e9,_0x42ac26='?$select=Title,Id,Formats&$top=5000&$filter=Title\x20eq\x20\x27License\x27',_0x52df41='';$[_0x46d1eb(0xd3)](getItemsWithQuery(_0x46d1eb(0xcc),_0x42ac26,_spPageContextInfo[_0x46d1eb(0xa8)]))['done'](function(_0x4dc8c1){var _0x9cb3e0=_0x46d1eb;_0x4dc8c1['length']>0x0&&(_0x52df41={'__metadata':{'type':_0x9cb3e0(0xee)},'Formats':_0x5c76cf},updateItemInList(_0x52df41,'EnvironmentalSettings',_0x4dc8c1[0x0]['Id']));});}function ChangeDMSNavigation(){var _0x2a5f2e=a0_0x1394e9,_0x352d8f='?$select=Title,ParentId,Status,Postion,Menu,URL,DepartmentID,ID,Company/Id&$top=5000&$expand=Company';$[_0x2a5f2e(0xd3)](getItemsWithQuery(_0x2a5f2e(0xfc),_0x352d8f,_spPageContextInfo[_0x2a5f2e(0xa8)]))[_0x2a5f2e(0xc1)](function(_0x3f62a4){var _0x2e7389=_0x2a5f2e;if(_0x3f62a4[_0x2e7389(0xf0)]>0x0){var _0x222c71='';_0x3f62a4[_0x2e7389(0xad)](function(_0x4a12ab,_0x429704){var _0x379e1b=_0x2e7389;_0x222c71='';if(_0x4a12ab[_0x379e1b(0xc5)]=='Org.\x20Chart'||_0x4a12ab['Title']==_0x379e1b(0x9f)||_0x4a12ab[_0x379e1b(0xc5)]==_0x379e1b(0x108)||_0x4a12ab[_0x379e1b(0xc5)]==_0x379e1b(0xc8)||_0x4a12ab['Title']==_0x379e1b(0x9c)||_0x4a12ab[_0x379e1b(0xc5)]==_0x379e1b(0xec)||_0x4a12ab[_0x379e1b(0xc5)]==_0x379e1b(0x9b)||_0x4a12ab['Title']==_0x379e1b(0xfe)||_0x4a12ab['Title']==_0x379e1b(0xd1))_0x222c71={'__metadata':{'type':'SP.Data.NavigationListItem'},'Status':!![]};else _0x4a12ab[_0x379e1b(0xc5)]==_0x379e1b(0xf1)?_0x222c71={'__metadata':{'type':_0x379e1b(0xe0)},'Status':!![],'URL':_0x379e1b(0xda)}:_0x222c71={'__metadata':{'type':_0x379e1b(0xe0)},'Status':![]};updateItemInList(_0x222c71,'Navigation',_0x4a12ab['ID']);});var _0x5f0488=_0x2e7389(0xaf);$['when'](getItemsWithQuery(_0x2e7389(0xdc),_0x5f0488,_spPageContextInfo[_0x2e7389(0xa8)]))[_0x2e7389(0xc1)](function(_0x27f8cf){var _0x340acc=_0x2e7389;if(_0x27f8cf[_0x340acc(0xf0)]>0x0){var _0x2f4741='';_0x27f8cf[_0x340acc(0xad)](function(_0x3bebd8,_0x3f1e8d){var _0x478bf6=_0x340acc;_0x2f4741={'__metadata':{'type':_0x478bf6(0xc6)},'TemplateType':'Template3'},updateItemInList(_0x2f4741,_0x478bf6(0xdc),_0x3bebd8['Id']);});}ChangeDMSAdminPortal();});}else return alert(_0x2e7389(0xaa)),![];});}function ChangeDMSAdminPortal(){var _0x31a647=a0_0x1394e9,_0x223040=_0x31a647(0xbe);$[_0x31a647(0xd3)](getItemsWithQuery('AdminPortal',_0x223040,_spPageContextInfo[_0x31a647(0xa8)]))['done'](function(_0x4f71da){var _0x491751=_0x31a647;_0x4f71da[_0x491751(0xf0)]>0x0&&_0x4f71da[_0x491751(0xad)](function(_0x2e1a66,_0x362865){var _0x128cbd=_0x491751;AdminMetadata='';if(_0x2e1a66[_0x128cbd(0xc5)]==_0x128cbd(0x99)||_0x2e1a66[_0x128cbd(0xc5)]==_0x128cbd(0xdf)||_0x2e1a66[_0x128cbd(0xc5)]=='ManageDepartments'||_0x2e1a66[_0x128cbd(0xc5)]=='ManageEmployees'||_0x2e1a66[_0x128cbd(0xc5)]=='Manage\x20Guest\x20Users'||_0x2e1a66[_0x128cbd(0xc5)]=='Categories'||_0x2e1a66[_0x128cbd(0xc5)]==_0x128cbd(0x93)||_0x2e1a66[_0x128cbd(0xc5)]=='WebAnalytics')AdminMetadata={'__metadata':{'type':_0x128cbd(0xff)},'Active':!![]};else _0x2e1a66[_0x128cbd(0xc5)]=='Permissions'?AdminMetadata={'__metadata':{'type':_0x128cbd(0xff)},'Active':!![],'PageURL':_0x128cbd(0xd9)}:AdminMetadata={'__metadata':{'type':_0x128cbd(0xff)},'Active':![]};updateItemInList(AdminMetadata,_0x128cbd(0xe2),_0x2e1a66['Id']);}),alert(_0x491751(0x9a)),location[_0x491751(0xce)](!![]);});}function ChangeTitanNavigation(){var _0x551a88=a0_0x1394e9,_0x2aa653=_0x551a88(0x98);$[_0x551a88(0xd3)](getItemsWithQuery(_0x551a88(0xfc),_0x2aa653,_spPageContextInfo['webAbsoluteUrl']))[_0x551a88(0xc1)](function(_0xd03a53){var _0x21e81a=_0x551a88;if(_0xd03a53[_0x21e81a(0xf0)]>0x0){var _0x3e3fbf='';_0xd03a53[_0x21e81a(0xad)](function(_0x1fed96,_0x3f0717){var _0xe38221=_0x21e81a;_0x3e3fbf='';if(_0x1fed96[_0xe38221(0xc5)]==_0xe38221(0xf1))_0x3e3fbf={'__metadata':{'type':'SP.Data.NavigationListItem'},'Status':![],'URL':_0xe38221(0xb1)};else _0x1fed96[_0xe38221(0xc5)]==_0xe38221(0xec)||_0x1fed96[_0xe38221(0xc5)]==_0xe38221(0x9b)||_0x1fed96['Title']==_0xe38221(0xf2)?_0x3e3fbf={'__metadata':{'type':_0xe38221(0xe0)},'Status':![]}:_0x3e3fbf={'__metadata':{'type':'SP.Data.NavigationListItem'},'Status':!![]};updateItemInList(_0x3e3fbf,_0xe38221(0xfc),_0x1fed96['ID']);});var _0x461f87=_0x21e81a(0xaf);$['when'](getItemsWithQuery(_0x21e81a(0xdc),_0x461f87,_spPageContextInfo['webAbsoluteUrl']))[_0x21e81a(0xc1)](function(_0x5d2d6e){var _0x24c6be=_0x21e81a;if(_0x5d2d6e['length']>0x0){var _0x1507c6='';_0x5d2d6e[_0x24c6be(0xad)](function(_0x56fa41,_0x3ec2f3){var _0x525eef=_0x24c6be;_0x1507c6={'__metadata':{'type':_0x525eef(0xc6)},'TemplateType':_0x525eef(0xc2)},updateItemInList(_0x1507c6,_0x525eef(0xdc),_0x56fa41['Id']);});}ChangeTitanAdminPortal();});}else return alert(_0x21e81a(0xaa)),![];});}function ChangeTitanAdminPortal(){var _0xa30fde=a0_0x1394e9,_0x4f51ff=_0xa30fde(0xbe);$[_0xa30fde(0xd3)](getItemsWithQuery(_0xa30fde(0xe2),_0x4f51ff,_spPageContextInfo[_0xa30fde(0xa8)]))['done'](function(_0x4be630){var _0x151b58=_0xa30fde;_0x4be630[_0x151b58(0xf0)]>0x0&&_0x4be630[_0x151b58(0xad)](function(_0x6aafda,_0x2d57e5){var _0x19c61=_0x151b58;AdminMetadata='',_0x6aafda[_0x19c61(0xc5)]==_0x19c61(0x104)?AdminMetadata={'__metadata':{'type':_0x19c61(0xff)},'Active':!![],'PageURL':_0x19c61(0xa0)}:AdminMetadata={'__metadata':{'type':'SP.Data.AdminPortalListItem'},'Active':!![]},updateItemInList(AdminMetadata,_0x19c61(0xe2),_0x6aafda['Id']);}),alert(_0x151b58(0x9a)),location['reload'](!![]);});}function a0_0x1931(_0x5b9734,_0x366840){var _0x3d857c=a0_0x3d85();return a0_0x1931=function(_0x1931c1,_0x4135bc){_0x1931c1=_0x1931c1-0x90;var _0x1a168d=_0x3d857c[_0x1931c1];return _0x1a168d;},a0_0x1931(_0x5b9734,_0x366840);}function ChangeBusProcNavigation(){var _0x12b01b=a0_0x1394e9,_0x68d003=_0x12b01b(0x98);$[_0x12b01b(0xd3)](getItemsWithQuery(_0x12b01b(0xfc),_0x68d003,_spPageContextInfo['webAbsoluteUrl']))[_0x12b01b(0xc1)](function(_0x29a2ea){var _0x3ddc68=_0x12b01b;if(_0x29a2ea['length']>0x0){var _0x43c8c6='';_0x29a2ea[_0x3ddc68(0xad)](function(_0x330c28,_0xeed493){var _0x45b79f=_0x3ddc68;_0x43c8c6='';if(_0x330c28['Title']==_0x45b79f(0x90)||_0x330c28[_0x45b79f(0xc5)]==_0x45b79f(0x9f)||_0x330c28[_0x45b79f(0xc5)]=='Admin\x20Portal'||_0x330c28[_0x45b79f(0xc5)]==_0x45b79f(0xe1)||_0x330c28['Title']=='More'||_0x330c28[_0x45b79f(0xc5)]==_0x45b79f(0xd1))_0x43c8c6={'__metadata':{'type':_0x45b79f(0xe0)},'Status':!![]};else _0x330c28[_0x45b79f(0xc5)]=='Approval\x20Template'?_0x43c8c6={'__metadata':{'type':_0x45b79f(0xe0)},'Status':!![],'URL':_0x45b79f(0xab)}:_0x43c8c6={'__metadata':{'type':_0x45b79f(0xe0)},'Status':![]};updateItemInList(_0x43c8c6,_0x45b79f(0xfc),_0x330c28['ID']);}),ChangeBusProcAdminPortal();}else return alert(_0x3ddc68(0xaa)),![];});}function ChangeBusProcAdminPortal(){var _0x4a250b=a0_0x1394e9,_0xd43302=_0x4a250b(0xbe);$[_0x4a250b(0xd3)](getItemsWithQuery('AdminPortal',_0xd43302,_spPageContextInfo[_0x4a250b(0xa8)]))['done'](function(_0x207d15){var _0x5a12bd=_0x4a250b;_0x207d15[_0x5a12bd(0xf0)]>0x0&&_0x207d15[_0x5a12bd(0xad)](function(_0x84b345,_0x1bc4d1){var _0x26e23f=_0x5a12bd;AdminMetadata='';if(_0x84b345['Title']==_0x26e23f(0x99)||_0x84b345['Title']==_0x26e23f(0xdf)||_0x84b345[_0x26e23f(0xc5)]==_0x26e23f(0xd5)||_0x84b345['Title']==_0x26e23f(0xf4)||_0x84b345[_0x26e23f(0xc5)]==_0x26e23f(0xe8)||_0x84b345[_0x26e23f(0xc5)]==_0x26e23f(0x107)||_0x84b345[_0x26e23f(0xc5)]==_0x26e23f(0x93)||_0x84b345[_0x26e23f(0xc5)]==_0x26e23f(0xf6))AdminMetadata={'__metadata':{'type':_0x26e23f(0xff)},'Active':!![]};else _0x84b345['Title']==_0x26e23f(0x104)?AdminMetadata={'__metadata':{'type':_0x26e23f(0xff)},'Active':!![],'PageURL':'../Pages/ManagePermissionDMS.aspx'}:AdminMetadata={'__metadata':{'type':_0x26e23f(0xff)},'Active':![]};updateItemInList(AdminMetadata,_0x26e23f(0xe2),_0x84b345['Id']);}),alert('Process\x20has\x20been\x20completed'),location['reload'](!![]);});}function updateItemInList(_0x3998ba,_0x39c80a,_0x4abeb3){var _0x2831b1=a0_0x1394e9,_0x45239c=$[_0x2831b1(0x9e)](),_0x49a437=_spPageContextInfo[_0x2831b1(0xa8)]+'/_api/Web/Lists/getByTitle(\x27'+_0x39c80a+_0x2831b1(0x101)+_0x4abeb3+')';return $[_0x2831b1(0xa7)]({'url':_0x49a437,'type':_0x2831b1(0x10a),'async':![],'headers':{'accept':_0x2831b1(0x100),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x2831b1(0x92)](),'content-Type':_0x2831b1(0x100),'X-Http-Method':_0x2831b1(0xa1),'If-Match':'*'},'data':JSON[_0x2831b1(0xfb)](_0x3998ba),'success':function(_0x13c567){var _0x3e464d=_0x2831b1;_0x45239c[_0x3e464d(0xa9)](!![]);},'error':function(_0x301589){var _0x36358e=_0x2831b1;waitingDialog[_0x36358e(0xde)](),alert(JSON[_0x36358e(0xfb)](err)),_0x45239c[_0x36358e(0x96)](_0x301589);}}),_0x45239c['promise']();}function getItemsWithQuery(_0x3d3c91,_0x15d35b,_0xe26253){var _0x3afd1a=a0_0x1394e9,_0x17a73f=$['Deferred'](),_0x3c9e32=_0xe26253+_0x3afd1a(0xb4)+_0x3d3c91+_0x3afd1a(0xac)+_0x15d35b;return $['ajax']({'url':_0x3c9e32,'type':'GET','async':![],'headers':{'accept':_0x3afd1a(0x100)},'success':function(_0x4a431b){var _0x1a6d74=_0x3afd1a;_0x17a73f['resolve'](_0x4a431b['d'][_0x1a6d74(0xb8)]);},'error':function(_0x3d1a5d){var _0x521fad=_0x3afd1a;_0x17a73f[_0x521fad(0x96)](_0x3d1a5d);}}),_0x17a73f[_0x3afd1a(0xa2)]();}function declinedLicense(){var _0x23390c=a0_0x1394e9,_0x2168ca=$(_0x23390c(0xea))['val'](),_0x3a4109;_0x3a4109={'__metadata':{'type':'SP.Data.EnvironmentalSettingsListItem'},'Active':![]};var _0xe13687=$[_0x23390c(0x9e)]();return $[_0x23390c(0xa7)]({'url':_spPageContextInfo[_0x23390c(0xa8)]+_0x23390c(0xbf)+_0x2168ca+'\x27)','type':_0x23390c(0x10a),'async':![],'headers':{'accept':_0x23390c(0x100),'X-RequestDigest':$(_0x23390c(0xef))[_0x23390c(0x92)](),'content-Type':_0x23390c(0x100),'IF-MATCH':'*','X-HTTP-Method':_0x23390c(0xcf)},'data':JSON[_0x23390c(0xfb)](_0x3a4109),'success':function(_0x15305a){var _0x468dd8=_0x23390c;alert(_0x468dd8(0xf5)),_0xe13687['resolve'](_0x15305a);},'error':function(_0x799a64){var _0x3644b1=_0x23390c;alert(_0x3644b1(0xca)+JSON[_0x3644b1(0xfb)](_0x799a64)),_0xe13687['reject'](_0x799a64);}}),_0xe13687['promise']();}