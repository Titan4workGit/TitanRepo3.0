(function(_0x4342cb,_0x2258be){var _0x168aca=a0_0x243a,_0x1955fa=_0x4342cb();while(!![]){try{var _0x3ffd88=parseInt(_0x168aca(0x18a))/0x1+parseInt(_0x168aca(0x150))/0x2*(-parseInt(_0x168aca(0x1de))/0x3)+parseInt(_0x168aca(0x1cb))/0x4*(parseInt(_0x168aca(0x1d6))/0x5)+parseInt(_0x168aca(0x1f0))/0x6*(-parseInt(_0x168aca(0x204))/0x7)+parseInt(_0x168aca(0x179))/0x8+-parseInt(_0x168aca(0x1eb))/0x9*(parseInt(_0x168aca(0x18e))/0xa)+parseInt(_0x168aca(0x1ff))/0xb*(parseInt(_0x168aca(0x1e1))/0xc);if(_0x3ffd88===_0x2258be)break;else _0x1955fa['push'](_0x1955fa['shift']());}catch(_0xb41e98){_0x1955fa['push'](_0x1955fa['shift']());}}}(a0_0x1d41,0xa1f99));var clientContext='',PrjectgridInitiated=![],IsProjectAdmin=![],sorterTableMyProjectList,IsdeptAdmin=![],txtCompanyId='';$(document)['ready'](function(){var _0x43ff44=a0_0x243a;userActivityNotificationEntry(_spPageContextInfo[_0x43ff44(0x17a)],window[_0x43ff44(0x1a5)]),txtCompanyId=titanForWork['getQueryStringParameter']('CompanyId'),SP[_0x43ff44(0x184)][_0x43ff44(0x198)](getCurrentURL_GetProjectGridEvent,'sp.js'),$(_0x43ff44(0x187))[_0x43ff44(0x1cf)](),$('#CreateProject')['click'](function(){var _0x1985d0=_0x43ff44,_0x562dda=titanForWork['getQueryStringParameter'](_0x1985d0(0x1a1)),_0x8bdef4=_spPageContextInfo[_0x1985d0(0x178)],_0xebe002=_0x8bdef4+_0x1985d0(0x16d)+_0x562dda;location['href']=_0xebe002;}),bindAllClient(),bindAllOfficeLocation(),initializePeoplePicker(_0x43ff44(0x1d7));});function GenerateTableMyProjectList(){var _0x77ed16=a0_0x243a;sorterTableMyProjectList=new TINY[(_0x77ed16(0x1f4))]['sorter']('sorterTableMyProjectList',_0x77ed16(0x1a2),{'headclass':_0x77ed16(0x1b0),'ascclass':_0x77ed16(0x1c5),'descclass':_0x77ed16(0x173),'evenclass':_0x77ed16(0x156),'oddclass':_0x77ed16(0x17d),'evenselclass':_0x77ed16(0x1bf),'oddselclass':'oddselected','paginate':!![],'size':0xa,'currentid':_0x77ed16(0x1d3),'totalid':'totalpagesMyProject','startingrecid':_0x77ed16(0x170),'endingrecid':_0x77ed16(0x16c),'totalrecid':_0x77ed16(0x1db),'hoverid':_0x77ed16(0x15f),'pageddid':_0x77ed16(0x159),'navid':'tablenavMyProject','sortdir':0x1,'init':!![]});}function getCurrentURL_GetProjectGridEvent(){var _0x1c941e=a0_0x243a;$[_0x1c941e(0x162)](BindDepartments())['done'](function(){});}function CheckTeamMemberForProject(_0x5f5c33){var _0x54cefb=a0_0x243a,_0x467621=_spPageContextInfo['webAbsoluteUrl']+_0x54cefb(0x1f7)+_0x5f5c33+'\x20and\x20TeamMember/ID\x20eq\x20'+_spPageContextInfo['userId']+'';$[_0x54cefb(0x1ae)]({'url':_0x467621,'type':_0x54cefb(0x1f2),'async':![],'headers':{'Accept':'application/json;odata=verbose'},'success':function(_0x17be27){var _0xad501f=_0x54cefb,_0x28a502=_0x17be27['d'][_0xad501f(0x201)];return _0x28a502[_0xad501f(0x1aa)];},'error':function(_0x251a80){var _0x3bd82e=_0x54cefb;console[_0x3bd82e(0x188)](_0x251a80);}});}function BindProjectGridProjectAdmin(_0x17292b){var _0x240dee=a0_0x243a,_0xbc14bc=window[_0x240dee(0x1a5)][_0x240dee(0x1ba)]+'//'+window[_0x240dee(0x1a5)][_0x240dee(0x1c7)]+_spPageContextInfo[_0x240dee(0x1a4)],_0xdba432=_spPageContextInfo[_0x240dee(0x206)]+_0x240dee(0x1dc)+txtCompanyId+_0x240dee(0x1b1)+_0x17292b+'\x27';$['ajax']({'url':_0xdba432,'method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':!![],'success':function(_0x27b99e){var _0x4b647d=_0x240dee,_0x2f5b70=_0x27b99e['d'][_0x4b647d(0x201)],_0x78e973=[],_0x45aaae=0x1,_0x245041='',_0x26818a=0x0;for(var _0x473f9c=0x0;_0x473f9c<_0x2f5b70[_0x4b647d(0x1aa)];_0x473f9c++){_0x26818a++;var _0x54aac1=_0x2f5b70[_0x473f9c]['ProjectName'],_0x4ffb41=_0x2f5b70[_0x473f9c][_0x4b647d(0x193)];(_0x4ffb41==null||_0x4ffb41==''||_0x4ffb41==undefined)&&(_0x4ffb41='');var _0x4d56b3=_0x2f5b70[_0x473f9c][_0x4b647d(0x1ed)],_0x2cb7d8=_0x2f5b70[_0x473f9c][_0x4b647d(0x1b5)][_0x4b647d(0x153)];(_0x2cb7d8==null||_0x2cb7d8==''||_0x2cb7d8==undefined)&&(_0x2cb7d8='');var _0x167a43=_0x2f5b70[_0x473f9c][_0x4b647d(0x1c8)][_0x4b647d(0x153)];(_0x167a43==null||_0x167a43==''||_0x167a43==undefined||_0x167a43=='-Select-')&&(_0x167a43='');var _0x19ab20=_0x2f5b70[_0x473f9c]['PartnerName'],_0x470b1a=_0x2f5b70[_0x473f9c][_0x4b647d(0x160)];_0x470b1a!=''&&_0x470b1a!=null?(_0x470b1a=new Date(_0x470b1a),_0x470b1a=$[_0x4b647d(0x19d)]['formatDate']('dd-M-yy',_0x470b1a)):_0x470b1a='';var _0x39b141=_0x2f5b70[_0x473f9c]['ActualEndDate'];_0x39b141!=''&&_0x39b141!=null?(_0x39b141=new Date(_0x39b141),_0x39b141=$[_0x4b647d(0x19d)][_0x4b647d(0x183)](_0x4b647d(0x190),_0x39b141)):_0x39b141='';var _0x360f6c=new Date(_0x2f5b70[_0x473f9c]['PlanedStartDate']);_0x360f6c=$[_0x4b647d(0x19d)][_0x4b647d(0x183)](_0x4b647d(0x190),_0x360f6c);var _0xecf60d=new Date(_0x2f5b70[_0x473f9c][_0x4b647d(0x1ee)]);_0xecf60d=$[_0x4b647d(0x19d)]['formatDate'](_0x4b647d(0x190),_0xecf60d);var _0x3139e7=_0x2f5b70[_0x473f9c][_0x4b647d(0x1a8)],_0x1b4ce3=_0x2f5b70[_0x473f9c][_0x4b647d(0x1a8)]['Title'],_0x408560=_0x2f5b70[_0x473f9c][_0x4b647d(0x1a8)]['Id'],_0x1970d6=_0x2f5b70[_0x473f9c][_0x4b647d(0x197)],_0x4f1f90=_0x2f5b70[_0x473f9c][_0x4b647d(0x1ea)],_0x1166e3=_0x2f5b70[_0x473f9c]['Department_ID'][_0x4b647d(0x153)];(_0x1166e3==null||_0x1166e3==''||_0x1166e3==undefined||_0x1166e3==_0x4b647d(0x155))&&(_0x1166e3='');var _0x335ad2=_0x2f5b70[_0x473f9c]['ID'],_0x216211=[],_0x4d4bce='<a\x20href=\x27'+_0xbc14bc+_0x4b647d(0x1c4)+txtCompanyId+_0x4b647d(0x1e6)+_0x335ad2+_0x4b647d(0x17c)+_0x54aac1+'\x27>'+_0x54aac1+'</a>',_0x8827c4='';_0x8827c4=_0x4b647d(0x1fb)+_0xbc14bc+'/Pages/EditProjectDetails.aspx?WebAppId='+txtCompanyId+_0x4b647d(0x1e6)+_0x335ad2+_0x4b647d(0x17c)+_0x54aac1+'\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a>';if(_0x4f1f90==_0x4b647d(0x1ab))_0x4f1f90=_0x4b647d(0x1b4)+_0x4f1f90+_0x4b647d(0x180);else{if(_0x4f1f90==_0x4b647d(0x1bb))_0x4f1f90=_0x4b647d(0x1c1)+_0x4f1f90+_0x4b647d(0x180);else{if(_0x4f1f90=='Live')_0x4f1f90=_0x4b647d(0x151)+_0x4f1f90+_0x4b647d(0x180);else _0x4f1f90==_0x4b647d(0x175)&&(_0x4f1f90=_0x4b647d(0x152)+_0x4f1f90+_0x4b647d(0x180));}}_0x245041=_0x245041+_0x4b647d(0x1d0)+_0x4d4bce+_0x4b647d(0x19a)+_0x4ffb41+_0x4b647d(0x154)+_0x1166e3+_0x4b647d(0x154)+_0x167a43+'</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x2cb7d8+'</div></td><td\x20class=\x27text-center\x27><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x1b4ce3+_0x4b647d(0x16b)+_0x4f1f90+_0x4b647d(0x1c9)+_0x8827c4+_0x4b647d(0x169),_0x45aaae++;}$(_0x4b647d(0x186))[_0x4b647d(0x15d)](''),$(_0x4b647d(0x20a))[_0x4b647d(0x1cf)]();_0x26818a==0x0?($(_0x4b647d(0x20a))[_0x4b647d(0x1b3)](),$('#tablefooterMyProject')[_0x4b647d(0x1cf)]()):$(_0x4b647d(0x1fe))[_0x4b647d(0x1b3)]();var _0x282bfe=_0x245041;$(_0x4b647d(0x186))[_0x4b647d(0x18c)](_0x282bfe),_0x26818a>0x0&&(GenerateTableMyProjectList(),$('.myListPagingValue')[_0x4b647d(0x1f8)]('selectedIndex',0x1));},'error':function(_0xe77c8d){var _0xd5400b=_0x240dee;console['log'](JSON[_0xd5400b(0x1f6)](_0xe77c8d));}});}function getProjectRights(){var _0x1e78e0=a0_0x243a,_0x3a44c5=$['Deferred'](),_0x119c62,_0x586d01=_0x1e78e0(0x17f),_0x4ffbb2=titanForWork['getQueryStringParameter']('CompanyId'),_0x4b2611=_spPageContextInfo[_0x1e78e0(0x206)]+_0x1e78e0(0x19e)+_0x586d01+_0x1e78e0(0x203)+_0x4ffbb2+_0x1e78e0(0x205)+_spPageContextInfo['userId']+_0x1e78e0(0x1a3);return $['ajax']({'url':_0x4b2611,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0xb52dcd){var _0x51cd43=_0x1e78e0,_0x3b1e8e=_0xb52dcd['d'][_0x51cd43(0x201)];_0x3b1e8e['length']>0x0?($('#CreateProject')[_0x51cd43(0x1b3)](),_0x3a44c5[_0x51cd43(0x19f)](!![]),$('#hdnIsProjectAdmin')[_0x51cd43(0x1e2)](!![]),IsProjectAdmin=!![]):($(_0x51cd43(0x1d2))[_0x51cd43(0x1e2)](![]),$('#CreateProject')[_0x51cd43(0x1cf)](),_0x3a44c5['resolve'](![]),IsProjectAdmin=![]);},'eror':function(_0x2b3529){var _0x57a64e=_0x1e78e0;console['log']($(_0x57a64e(0x1a7))[_0x57a64e(0x1e2)]());}}),_0x3a44c5[_0x1e78e0(0x1d9)]();}function BindDepartments(){var _0x1c1d8b=a0_0x243a,_0x300f9b=titanForWork[_0x1c1d8b(0x1e3)](_0x1c1d8b(0x1a1)),_0x10337c=new SP[(_0x1c1d8b(0x18b))](),_0x17ada8=_0x10337c[_0x1c1d8b(0x1ce)]()[_0x1c1d8b(0x161)]()[_0x1c1d8b(0x1e0)](_0x1c1d8b(0x1e5)),_0x5f525c=new SP[(_0x1c1d8b(0x1ec))](),_0xdde488=_0x1c1d8b(0x1bd)+_0x300f9b+_0x1c1d8b(0x182);_0x5f525c[_0x1c1d8b(0x1cd)](_0xdde488);var _0x555348=_0x17ada8[_0x1c1d8b(0x1e4)](_0x5f525c);_0x10337c[_0x1c1d8b(0x1dd)](_0x555348),_0x10337c[_0x1c1d8b(0x1d1)](function(){var _0x51d4b5=_0x1c1d8b,_0x5780c0=_0x555348[_0x51d4b5(0x167)](),_0x15bae4='<option\x20value=\x22All\x22>All</option>';while(_0x5780c0['moveNext']()){var _0x5d3b7b=_0x5780c0['get_current'](),_0x4818a7=_0x5d3b7b[_0x51d4b5(0x16f)]('ID'),_0x4febc4=_0x5d3b7b[_0x51d4b5(0x16f)](_0x51d4b5(0x153));_0x15bae4+=_0x51d4b5(0x1be)+_0x4818a7+'\x22>'+_0x4febc4+_0x51d4b5(0x1b7);}$(_0x51d4b5(0x192))['append'](_0x15bae4),$['when'](getProjectRights())[_0x51d4b5(0x1c0)](function(_0x5d9d22){var _0x4d66b8=_0x51d4b5,_0x14d98e=$(_0x4d66b8(0x1f5))['val']();_0x5d9d22?BindProjectGridProjectAdmin(_0x14d98e):$[_0x4d66b8(0x162)](IsDepartmentAdmin())[_0x4d66b8(0x1c0)](function(_0x60449a){_0x60449a?BindProjectGridDepartmentAdminOnLoad():BindProjectGridNormalUsersOnLoad();});});},function(){var _0x18704c=_0x1c1d8b;console[_0x18704c(0x188)](_0x18704c(0x181));});}function bindAllClient(){var _0x1a6afa=a0_0x243a;$(_0x1a6afa(0x1cc))[_0x1a6afa(0x15c)]();var _0x230882=_spPageContextInfo[_0x1a6afa(0x206)]+_0x1a6afa(0x1fc)+txtCompanyId+_0x1a6afa(0x1da);$[_0x1a6afa(0x1ae)]({'url':_0x230882,'headers':{'Accept':_0x1a6afa(0x202)},'async':!![],'success':function(_0x2b4c0c){var _0x4bbaf7=_0x1a6afa;$(_0x4bbaf7(0x18f))[_0x4bbaf7(0x14e)](_0x4bbaf7(0x1cc));for(var _0x2ce0ec=0x0;_0x2ce0ec<_0x2b4c0c['d'][_0x4bbaf7(0x201)][_0x4bbaf7(0x1aa)];_0x2ce0ec++){$('#Clientid')[_0x4bbaf7(0x18c)](_0x4bbaf7(0x1be)+_0x2b4c0c['d'][_0x4bbaf7(0x201)][_0x2ce0ec][_0x4bbaf7(0x153)]+'\x22>'+_0x2b4c0c['d']['results'][_0x2ce0ec][_0x4bbaf7(0x153)]+_0x4bbaf7(0x1b7));}},'myError':function(_0xa352f0){waitingDialog['hide']();}});}function bindAllOfficeLocation(){var _0x9ed060=a0_0x243a;$(_0x9ed060(0x1c6))[_0x9ed060(0x15c)]();var _0x95378e=_spPageContextInfo[_0x9ed060(0x206)]+'/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$top=5000&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27'+txtCompanyId+'\x27';$[_0x9ed060(0x1ae)]({'url':_0x95378e,'headers':{'Accept':_0x9ed060(0x202)},'async':!![],'success':function(_0x52abdb){var _0x4bcd9f=_0x9ed060;$(_0x4bcd9f(0x18f))[_0x4bcd9f(0x14e)]('#officeLocation');for(var _0x50acd4=0x0;_0x50acd4<_0x52abdb['d'][_0x4bcd9f(0x201)]['length'];_0x50acd4++){$('#officeLocation')[_0x4bcd9f(0x18c)](_0x4bcd9f(0x1be)+_0x52abdb['d'][_0x4bcd9f(0x201)][_0x50acd4]['ID']+'\x22>'+_0x52abdb['d'][_0x4bcd9f(0x201)][_0x50acd4][_0x4bcd9f(0x1b6)]+_0x4bcd9f(0x1b7));}},'myError':function(_0x303bd8){}});}function initializePeoplePicker(_0x43bdaf){var _0x4c0a65=a0_0x243a,_0x377d2c={};_0x377d2c[_0x4c0a65(0x18d)]='User,DL,SecGroup,SPGroup',_0x377d2c[_0x4c0a65(0x172)]=0xf,_0x377d2c[_0x4c0a65(0x1e7)]=0xf,_0x377d2c['AllowMultipleValues']=!![],_0x377d2c['MaximumEntitySuggestions']=0x32,_0x377d2c[_0x4c0a65(0x1fa)]='280px',this[_0x4c0a65(0x1ef)](_0x43bdaf,null,_0x377d2c);}function MutipleBaseFilterOnOutBox(){var _0x24f061=a0_0x243a,_0x12d469='',_0xfc4da6='';$(_0x24f061(0x192))['val']()!=_0x24f061(0x1bc)&&(_0x12d469+=_0x24f061(0x1a9)+$(_0x24f061(0x192))['val']()+'\x27\x20',_0xfc4da6+=_0x24f061(0x208)+$(_0x24f061(0x1b9))[_0x24f061(0x194)]()+'</div>');$('#officeLocation')[_0x24f061(0x1e2)]()!=_0x24f061(0x1bc)&&(_0x12d469+='and\x20OfficeLocationID\x20eq\x20\x27'+$('#officeLocation')[_0x24f061(0x1e2)]()+'\x27\x20',_0xfc4da6+='<div\x20class=\x27upload-chip\x27>'+$(_0x24f061(0x207))[_0x24f061(0x194)]()+_0x24f061(0x1b8));$(_0x24f061(0x1cc))[_0x24f061(0x1e2)]()!='All'&&(_0x12d469+=_0x24f061(0x168)+$(_0x24f061(0x1cc))['val']()+'\x27\x20',_0xfc4da6+=_0x24f061(0x208)+$(_0x24f061(0x1ad))[_0x24f061(0x194)]()+_0x24f061(0x1b8));$(_0x24f061(0x1f5))[_0x24f061(0x1e2)]()!=_0x24f061(0x1bc)&&(_0x12d469+='and\x20Status\x20eq\x20\x27'+$(_0x24f061(0x1f5))[_0x24f061(0x1e2)]()+'\x27\x20',_0xfc4da6+=_0x24f061(0x208)+$(_0x24f061(0x1ca))['text']()+'</div>');if($(_0x24f061(0x174))['text']()!=''){var _0x55dfe3=getUserInformation(_0x24f061(0x1d7));if(_0x55dfe3[_0x24f061(0x1aa)]>0x0){_0x12d469+=_0x24f061(0x1fd)+_0x55dfe3[0x0]+'\x27\x20';for(var _0x584197=0x0;_0x584197<_0x55dfe3['length'];_0x584197++){_0x55dfe3[_0x584197]!=_0x55dfe3[0x0]&&(_0x12d469+='or\x20ManagerNameId\x20eq\x20\x27'+_0x55dfe3[_0x584197]+'\x27');}_0x12d469+=')';}}$(_0x24f061(0x164))[_0x24f061(0x15c)](),$(_0x24f061(0x164))['append'](_0xfc4da6);var _0x1316bc=_spPageContextInfo['webAbsoluteUrl']+_0x24f061(0x17b)+txtCompanyId+'\x27'+_0x12d469;IsProjectAdmin==!![]?FilterTaskDataForOutBox(_0x1316bc):IsdeptAdmin==!![]?BindProjectGridDepartmentAdmin(_0x1316bc):BindProjectGridNormalUsers(_0x1316bc);}function FilterTaskDataForOutBox(_0xdd18f6){var _0x109027=a0_0x243a;$[_0x109027(0x1ae)]({'url':_0xdd18f6,'headers':{'Accept':_0x109027(0x202)},'async':![],'success':function(_0x4b69c4){var _0x2544ed=_0x109027,_0x523361=window['location'][_0x2544ed(0x1ba)]+'//'+window['location'][_0x2544ed(0x1c7)]+_spPageContextInfo[_0x2544ed(0x1a4)],_0x3e86bc=_0x4b69c4['d'][_0x2544ed(0x201)],_0x579a69=[],_0x3eac4e=0x1,_0x589c79='',_0x396e76=0x0;for(var _0x39e5aa=0x0;_0x39e5aa<_0x3e86bc['length'];_0x39e5aa++){_0x396e76++;var _0x5d7c79=_0x3e86bc[_0x39e5aa][_0x2544ed(0x165)],_0x2de3d8=_0x3e86bc[_0x39e5aa][_0x2544ed(0x193)];(_0x2de3d8==null||_0x2de3d8==''||_0x2de3d8==undefined)&&(_0x2de3d8='');var _0x382c62=_0x3e86bc[_0x39e5aa][_0x2544ed(0x1ed)],_0x389bbd=_0x3e86bc[_0x39e5aa][_0x2544ed(0x1b5)]['Title'];(_0x389bbd==null||_0x389bbd==''||_0x389bbd==undefined)&&(_0x389bbd='');var _0x113317=_0x3e86bc[_0x39e5aa][_0x2544ed(0x1c8)][_0x2544ed(0x153)];(_0x113317==null||_0x113317==''||_0x113317==undefined||_0x113317==_0x2544ed(0x155))&&(_0x113317='');var _0x5ad590=_0x3e86bc[_0x39e5aa][_0x2544ed(0x158)],_0x55d691=_0x3e86bc[_0x39e5aa]['ActualStartDate'];_0x55d691!=''&&_0x55d691!=null?(_0x55d691=new Date(_0x55d691),_0x55d691=$[_0x2544ed(0x19d)][_0x2544ed(0x183)](_0x2544ed(0x190),_0x55d691)):_0x55d691='';var _0x433743=_0x3e86bc[_0x39e5aa][_0x2544ed(0x163)];_0x433743!=''&&_0x433743!=null?(_0x433743=new Date(_0x433743),_0x433743=$['datepicker'][_0x2544ed(0x183)](_0x2544ed(0x190),_0x433743)):_0x433743='';var _0x402c8f=new Date(_0x3e86bc[_0x39e5aa]['PlanedStartDate']);_0x402c8f=$[_0x2544ed(0x19d)][_0x2544ed(0x183)](_0x2544ed(0x190),_0x402c8f);var _0x21188b=new Date(_0x3e86bc[_0x39e5aa][_0x2544ed(0x1ee)]);_0x21188b=$[_0x2544ed(0x19d)][_0x2544ed(0x183)](_0x2544ed(0x190),_0x21188b);var _0x12224e=_0x3e86bc[_0x39e5aa][_0x2544ed(0x1a8)],_0xf16df4=_0x3e86bc[_0x39e5aa]['ManagerName'][_0x2544ed(0x153)],_0x54b04b=_0x3e86bc[_0x39e5aa][_0x2544ed(0x1a8)]['Id'],_0x85fb68=_0x3e86bc[_0x39e5aa][_0x2544ed(0x197)],_0x58b283=_0x3e86bc[_0x39e5aa]['Status'],_0x3095de=_0x3e86bc[_0x39e5aa][_0x2544ed(0x191)][_0x2544ed(0x153)];(_0x3095de==null||_0x3095de==''||_0x3095de==undefined||_0x3095de==_0x2544ed(0x155))&&(_0x3095de='');var _0x24744b=_0x3e86bc[_0x39e5aa]['ID'],_0x2ac553=[],_0x442409='<a\x20href=\x27'+_0x523361+_0x2544ed(0x1c4)+txtCompanyId+_0x2544ed(0x1e6)+_0x24744b+'&ProjectName='+_0x5d7c79+'\x27>'+_0x5d7c79+_0x2544ed(0x15a),_0x2920db='';_0x2920db='<a\x20class=\x27custom-edit-btn\x27\x20href=\x27'+_0x523361+'/Pages/EditProjectDetails.aspx?WebAppId='+txtCompanyId+_0x2544ed(0x1e6)+_0x24744b+_0x2544ed(0x17c)+_0x5d7c79+_0x2544ed(0x1ac);if(_0x58b283=='Completed')_0x58b283=_0x2544ed(0x1b4)+_0x58b283+_0x2544ed(0x180);else{if(_0x58b283==_0x2544ed(0x1bb))_0x58b283=_0x2544ed(0x1c1)+_0x58b283+_0x2544ed(0x180);else{if(_0x58b283==_0x2544ed(0x19c))_0x58b283=_0x2544ed(0x151)+_0x58b283+_0x2544ed(0x180);else _0x58b283==_0x2544ed(0x175)&&(_0x58b283=_0x2544ed(0x152)+_0x58b283+_0x2544ed(0x180));}}_0x589c79=_0x589c79+_0x2544ed(0x1d0)+_0x442409+'</td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x2de3d8+'</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x3095de+_0x2544ed(0x154)+_0x113317+_0x2544ed(0x154)+_0x389bbd+'</div></td><td\x20class=\x27text-center\x27><div\x20class=\x27project-table-ellipsis-2\x27>'+_0xf16df4+_0x2544ed(0x16b)+_0x58b283+'</td><td><div\x20class=\x27project-edit-lock-btn-box\x27>'+_0x2920db+'</div></td></tr>',_0x3eac4e++;}$(_0x2544ed(0x186))[_0x2544ed(0x15d)](''),$(_0x2544ed(0x20a))[_0x2544ed(0x1cf)]();_0x396e76==0x0?($('#mydmsNorecordFound')[_0x2544ed(0x1b3)](),$(_0x2544ed(0x1fe))[_0x2544ed(0x1cf)]()):$('#tablefooterMyProject')[_0x2544ed(0x1b3)]();var _0x2fd78c=_0x589c79;$('#tableTempProjects>tbody')[_0x2544ed(0x18c)](_0x2fd78c),_0x396e76>0x0&&(GenerateTableMyProjectList(),$(_0x2544ed(0x1a6))[_0x2544ed(0x1f8)](_0x2544ed(0x14f),0x1));},'eror':function(_0x82e83e){var _0x438219=_0x109027;console[_0x438219(0x188)](_0x438219(0x1f9));}});}function getUserInformation(_0x242749){var _0x3c5221=a0_0x243a,_0x47309c=[],_0x56dbd1=this[_0x3c5221(0x15e)]['SPClientPeoplePickerDict'][_0x242749+_0x3c5221(0x1c3)];if(!_0x56dbd1[_0x3c5221(0x19b)]()){if(_0x56dbd1[_0x3c5221(0x200)])return![];else{if(!_0x56dbd1['HasResolvedUsers']())return![];else{if(_0x56dbd1[_0x3c5221(0x1af)]>0x0){var _0x10b2d9=_0x56dbd1[_0x3c5221(0x1a0)](),_0x898589='',_0x11a21d='',_0x16d92d='';for(var _0x3c717a=0x0;_0x3c717a<_0x10b2d9['length'];_0x3c717a++){var _0x4e7a0d=_0x10b2d9[_0x3c717a][_0x3c5221(0x1e8)],_0x548fd3=GetUserID(_0x4e7a0d);_0x548fd3!=-0x1&&_0x47309c[_0x3c5221(0x1d4)](_0x548fd3);}return _0x47309c;}}}}else return _0x16d92d;}function GetUserID(_0x1082ca){var _0x34e48a=a0_0x243a,_0x210b2a={'logonName':_0x1082ca},_0x46aea5=-0x1,_0x2ecea1=$['ajax']({'url':_spPageContextInfo[_0x34e48a(0x1f3)]+_0x34e48a(0x176),'type':_0x34e48a(0x17e),'async':![],'contentType':_0x34e48a(0x202),'data':JSON[_0x34e48a(0x1f6)](_0x210b2a),'headers':{'Accept':'application/json;odata=verbose','X-RequestDigest':$('#__REQUESTDIGEST')[_0x34e48a(0x1e2)]()},'success':function(_0x5ba26e){_0x46aea5=_0x5ba26e['d']['Id'];},'error':function(_0x453af7){failure(_0x453af7);}});return _0x46aea5;}function clearPeoplePickerControl(_0x403edc){var _0x3d143a=a0_0x243a,_0x1fb568=_0x403edc+_0x3d143a(0x1c3),_0x11d3fb=null,_0x5d0f97=this[_0x3d143a(0x15e)][_0x3d143a(0x189)];for(var _0x245528 in _0x5d0f97){if(_0x245528==_0x1fb568){_0x11d3fb=_0x5d0f97[_0x245528];break;}}if(_0x11d3fb){var _0x50edb4=$(document[_0x3d143a(0x171)](_0x11d3fb[_0x3d143a(0x16a)]))[_0x3d143a(0x157)](_0x3d143a(0x1f1));$(_0x50edb4)[_0x3d143a(0x14d)](function(_0x1a06cb){var _0x182718=_0x3d143a;_0x11d3fb[_0x182718(0x1b2)](this);});}}function ClearFilterForOutbox(){var _0x2458f6=a0_0x243a;$(_0x2458f6(0x192))[_0x2458f6(0x1e2)](_0x2458f6(0x1bc)),$(_0x2458f6(0x1c6))[_0x2458f6(0x1e2)](_0x2458f6(0x1bc)),$(_0x2458f6(0x1cc))[_0x2458f6(0x1e2)](_0x2458f6(0x1bc)),$(_0x2458f6(0x1f5))['val'](_0x2458f6(0x19c)),clearPeoplePickerControl(_0x2458f6(0x1d7)),$(_0x2458f6(0x164))[_0x2458f6(0x15c)](),MutipleBaseFilterOnOutBox();}function BindProjectGridDepartmentAdminOnLoad(){var _0x23f3e9=a0_0x243a,_0x1b1994=$('#txtFilterStatus')[_0x23f3e9(0x1e2)](),_0x3c83a1=_spPageContextInfo[_0x23f3e9(0x206)]+_0x23f3e9(0x1c2)+txtCompanyId+_0x23f3e9(0x1b1)+_0x1b1994+'\x27';BindProjectGridDepartmentAdmin(_0x3c83a1);}function a0_0x243a(_0xa2db92,_0x26aabc){var _0x1d41a1=a0_0x1d41();return a0_0x243a=function(_0x243a95,_0x50b46c){_0x243a95=_0x243a95-0x14d;var _0x30a9e8=_0x1d41a1[_0x243a95];return _0x30a9e8;},a0_0x243a(_0xa2db92,_0x26aabc);}function BindProjectGridDepartmentAdmin(_0x1dab6e){var _0x4c3af5=a0_0x243a,_0x35a0a8=window['location'][_0x4c3af5(0x1ba)]+'//'+window[_0x4c3af5(0x1a5)][_0x4c3af5(0x1c7)]+_spPageContextInfo[_0x4c3af5(0x1a4)],_0x1ff979=Logged_DepartmentId,_0x4c0bdf='';debugger;$[_0x4c3af5(0x1ae)]({'url':_0x1dab6e,'method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x11f7dc){var _0x17bfba=_0x4c3af5,_0x240795=_0x11f7dc['d'][_0x17bfba(0x201)];for(var _0x1714fa=0x0;_0x1714fa<_0x240795[_0x17bfba(0x1aa)];_0x1714fa++){var _0x2ce0f5=_0x240795[_0x1714fa]['DepartmentId'];if(parseInt(_0x2ce0f5)==_0x1ff979){var _0x156ebc=_0x240795[_0x1714fa][_0x17bfba(0x165)],_0x213b98=_0x240795[_0x1714fa]['ProjectCode'];(_0x213b98==null||_0x213b98==''||_0x213b98==undefined)&&(_0x213b98='');var _0x12c8a1=_0x240795[_0x1714fa][_0x17bfba(0x1ed)],_0x5f17c7=_0x240795[_0x1714fa][_0x17bfba(0x1b5)][_0x17bfba(0x153)];(_0x5f17c7==null||_0x5f17c7==''||_0x5f17c7==undefined)&&(_0x5f17c7='');var _0x5e23ca=_0x240795[_0x1714fa][_0x17bfba(0x1c8)]['Title'];(_0x5e23ca==null||_0x5e23ca==''||_0x5e23ca==undefined||_0x5e23ca==_0x17bfba(0x155))&&(_0x5e23ca='');var _0x6da86c=_0x240795[_0x1714fa][_0x17bfba(0x158)],_0x506160=_0x240795[_0x1714fa][_0x17bfba(0x160)];_0x506160!=''&&_0x506160!=null?(_0x506160=new Date(_0x506160),_0x506160=$[_0x17bfba(0x19d)][_0x17bfba(0x183)](_0x17bfba(0x190),_0x506160)):_0x506160='';var _0x45a3fd=_0x240795[_0x1714fa][_0x17bfba(0x163)];_0x45a3fd!=''&&_0x45a3fd!=null?(_0x45a3fd=new Date(_0x45a3fd),_0x45a3fd=$['datepicker'][_0x17bfba(0x183)](_0x17bfba(0x190),_0x45a3fd)):_0x45a3fd='';var _0x5ca674=new Date(_0x240795[_0x1714fa][_0x17bfba(0x1d8)]);_0x5ca674=$[_0x17bfba(0x19d)]['formatDate'](_0x17bfba(0x190),_0x5ca674);var _0x220954=new Date(_0x240795[_0x1714fa][_0x17bfba(0x1ee)]);_0x220954=$[_0x17bfba(0x19d)][_0x17bfba(0x183)]('dd-M-yy',_0x220954);var _0x563333=_0x240795[_0x1714fa][_0x17bfba(0x1a8)],_0x1acd81=_0x240795[_0x1714fa][_0x17bfba(0x1a8)][_0x17bfba(0x153)],_0x5154a5=_0x240795[_0x1714fa][_0x17bfba(0x1a8)]['Id'],_0xe59a47=_0x240795[_0x1714fa]['TechnologyUsed'],_0x59d589=_0x240795[_0x1714fa][_0x17bfba(0x1ea)],_0x3997cf=_0x240795[_0x1714fa][_0x17bfba(0x191)][_0x17bfba(0x153)];(_0x3997cf==null||_0x3997cf==''||_0x3997cf==undefined||_0x3997cf==_0x17bfba(0x155))&&(_0x3997cf='');var _0x260092=_0x240795[_0x1714fa]['ID'],_0x237e98=[],_0x597c1e='<a\x20href=\x27'+_0x35a0a8+_0x17bfba(0x1c4)+txtCompanyId+_0x17bfba(0x1e6)+_0x260092+_0x17bfba(0x17c)+_0x156ebc+'\x27>'+_0x156ebc+_0x17bfba(0x15a),_0x49b60a='';_0x49b60a=_0x17bfba(0x1fb)+_0x35a0a8+_0x17bfba(0x196)+txtCompanyId+_0x17bfba(0x1e6)+_0x260092+'&ProjectName='+_0x156ebc+_0x17bfba(0x1ac);if(_0x59d589==_0x17bfba(0x1ab))_0x59d589=_0x17bfba(0x1b4)+_0x59d589+_0x17bfba(0x180);else{if(_0x59d589==_0x17bfba(0x1bb))_0x59d589=_0x17bfba(0x1c1)+_0x59d589+_0x17bfba(0x180);else{if(_0x59d589=='Live')_0x59d589='<p\x20style=\x27color:blue;text-align:center;\x27>'+_0x59d589+_0x17bfba(0x180);else _0x59d589==_0x17bfba(0x175)&&(_0x59d589=_0x17bfba(0x152)+_0x59d589+_0x17bfba(0x180));}}_0x4c0bdf=_0x4c0bdf+_0x17bfba(0x1d0)+_0x597c1e+'</td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x213b98+_0x17bfba(0x154)+_0x3997cf+_0x17bfba(0x154)+_0x5e23ca+'</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x5f17c7+'</div></td><td\x20class=\x27text-center\x27><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x1acd81+_0x17bfba(0x16b)+_0x59d589+_0x17bfba(0x1c9)+_0x49b60a+_0x17bfba(0x169);}else{var _0x354398=_0x240795[_0x1714fa]['ID'],_0x5b60c7=_spPageContextInfo['webAbsoluteUrl']+_0x17bfba(0x185)+_0x354398+_0x17bfba(0x15b)+_spPageContextInfo[_0x17bfba(0x17a)]+'';$[_0x17bfba(0x1ae)]({'url':_0x5b60c7,'type':_0x17bfba(0x1f2),'async':![],'headers':{'Accept':_0x17bfba(0x202)},'success':function(_0x5f2756){var _0x11dd65=_0x17bfba,_0x2fe435=_0x5f2756['d'][_0x11dd65(0x201)];if(_0x2fe435['length']!=0x0){var _0x3f7268=_0x240795[_0x1714fa][_0x11dd65(0x165)],_0x867b00=_0x240795[_0x1714fa][_0x11dd65(0x193)];(_0x867b00==null||_0x867b00==''||_0x867b00==undefined)&&(_0x867b00='');var _0x351d71=_0x240795[_0x1714fa][_0x11dd65(0x1ed)],_0x47ca9b=_0x240795[_0x1714fa][_0x11dd65(0x1b5)][_0x11dd65(0x153)];(_0x47ca9b==null||_0x47ca9b==''||_0x47ca9b==undefined)&&(_0x47ca9b='');var _0x5ccb93=_0x240795[_0x1714fa]['Office_Location_Id']['Title'];(_0x5ccb93==null||_0x5ccb93==''||_0x5ccb93==undefined||_0x5ccb93==_0x11dd65(0x155))&&(_0x5ccb93='');var _0x2d0323=_0x240795[_0x1714fa]['PartnerName'],_0x3c0114=_0x240795[_0x1714fa][_0x11dd65(0x160)];_0x3c0114!=''&&_0x3c0114!=null?(_0x3c0114=new Date(_0x3c0114),_0x3c0114=$['datepicker']['formatDate'](_0x11dd65(0x190),_0x3c0114)):_0x3c0114='';var _0x2c3f50=_0x240795[_0x1714fa][_0x11dd65(0x163)];_0x2c3f50!=''&&_0x2c3f50!=null?(_0x2c3f50=new Date(_0x2c3f50),_0x2c3f50=$['datepicker'][_0x11dd65(0x183)](_0x11dd65(0x190),_0x2c3f50)):_0x2c3f50='';var _0x52af04=new Date(_0x240795[_0x1714fa][_0x11dd65(0x1d8)]);_0x52af04=$[_0x11dd65(0x19d)][_0x11dd65(0x183)](_0x11dd65(0x190),_0x52af04);var _0x5d4de3=new Date(_0x240795[_0x1714fa][_0x11dd65(0x1ee)]);_0x5d4de3=$['datepicker'][_0x11dd65(0x183)]('dd-M-yy',_0x5d4de3);var _0x474422=_0x240795[_0x1714fa][_0x11dd65(0x1a8)],_0x3f2a21=_0x240795[_0x1714fa]['ManagerName'][_0x11dd65(0x153)],_0x1baf37=_0x240795[_0x1714fa][_0x11dd65(0x1a8)]['Id'],_0x870e9=_0x240795[_0x1714fa][_0x11dd65(0x197)],_0xec2dd8=_0x240795[_0x1714fa][_0x11dd65(0x1ea)],_0x23a3eb=_0x240795[_0x1714fa][_0x11dd65(0x191)]['Title'];(_0x23a3eb==null||_0x23a3eb==''||_0x23a3eb==undefined||_0x23a3eb==_0x11dd65(0x155))&&(_0x23a3eb='');var _0x2be7e5=_0x240795[_0x1714fa]['ID'],_0x3b0e5f=[],_0x4cf9b9=_0x11dd65(0x1d5)+_0x35a0a8+_0x11dd65(0x1c4)+txtCompanyId+'&ProjectID='+_0x2be7e5+_0x11dd65(0x17c)+_0x3f7268+'\x27>'+_0x3f7268+_0x11dd65(0x15a),_0x37759e='';_0x1baf37==_spPageContextInfo['userId']?_0x37759e='<a\x20class=\x27custom-edit-btn\x27\x20href=\x27'+_0x35a0a8+'/Pages/EditProjectDetails.aspx?WebAppId='+txtCompanyId+'&ProjectID='+_0x2be7e5+_0x11dd65(0x17c)+_0x3f7268+_0x11dd65(0x1ac):_0x37759e='';if(_0xec2dd8==_0x11dd65(0x1ab))_0xec2dd8=_0x11dd65(0x1b4)+_0xec2dd8+_0x11dd65(0x180);else{if(_0xec2dd8==_0x11dd65(0x1bb))_0xec2dd8=_0x11dd65(0x1c1)+_0xec2dd8+_0x11dd65(0x180);else{if(_0xec2dd8=='Live')_0xec2dd8=_0x11dd65(0x151)+_0xec2dd8+_0x11dd65(0x180);else _0xec2dd8==_0x11dd65(0x175)&&(_0xec2dd8=_0x11dd65(0x152)+_0xec2dd8+_0x11dd65(0x180));}}_0x4c0bdf=_0x4c0bdf+_0x11dd65(0x1d0)+_0x4cf9b9+_0x11dd65(0x19a)+_0x867b00+_0x11dd65(0x154)+_0x23a3eb+'</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x5ccb93+_0x11dd65(0x154)+_0x47ca9b+_0x11dd65(0x195)+_0x3f2a21+_0x11dd65(0x16b)+_0xec2dd8+_0x11dd65(0x1c9)+_0x37759e+_0x11dd65(0x169);}},'error':function(_0x3935c7){var _0x3a885a=_0x17bfba;console[_0x3a885a(0x188)]('BindProjectGridNormalUsers\x20method'+_0x3935c7);}});}}$(_0x17bfba(0x186))[_0x17bfba(0x15d)](''),$(_0x17bfba(0x20a))[_0x17bfba(0x1cf)]();var _0x106056=_0x4c0bdf;$(_0x17bfba(0x186))['append'](_0x106056);var _0x182ad1=$('#mainDivAreaOffice365\x20>tr')[_0x17bfba(0x1aa)];_0x182ad1>0x0&&(GenerateTableMyProjectList(),$('.myListPagingValue')[_0x17bfba(0x1f8)](_0x17bfba(0x14f),0x1)),_0x182ad1==0x0?($(_0x17bfba(0x20a))[_0x17bfba(0x1b3)](),$(_0x17bfba(0x1fe))[_0x17bfba(0x1cf)]()):$(_0x17bfba(0x1fe))['show']();},'error':function(_0x17190e){var _0x240ad6=_0x4c3af5;console[_0x240ad6(0x188)](JSON[_0x240ad6(0x1f6)](_0x17190e));}});}function IsDepartmentAdmin(){var _0x1f59af=a0_0x243a,_0x2949a9=titanForWork[_0x1f59af(0x1e3)]('CompanyId'),_0x409f4a=Logged_DepartmentId,_0x189044=_0x1f59af(0x17f),_0x334934=_spPageContextInfo[_0x1f59af(0x206)]+_0x1f59af(0x19e)+_0x189044+_0x1f59af(0x1e9)+_0x2949a9+_0x1f59af(0x205)+_spPageContextInfo['userId']+_0x1f59af(0x166)+_0x409f4a+_0x1f59af(0x177);return $['ajax']({'url':_0x334934,'type':_0x1f59af(0x1df),'headers':{'Accept':_0x1f59af(0x202)},'async':![],'success':function(_0x328ed9){var _0x335d53=_0x1f59af,_0x405f65=_0x328ed9['d'][_0x335d53(0x201)];_0x405f65[_0x335d53(0x1aa)]>0x0?(IsdeptAdmin=!![],$(_0x335d53(0x187))['show']()):(IsdeptAdmin=![],$('#CreateProject')[_0x335d53(0x1cf)]());},'error':function(_0x4b624a){var _0x36fe0d=_0x1f59af;console[_0x36fe0d(0x188)](_0x4b624a[_0x36fe0d(0x199)]);}}),IsdeptAdmin;}function a0_0x1d41(){var _0x436fe4=['TechnologyUsed','executeOrDelayUntilScriptLoaded','responseJSON','</td><td><div\x20class=\x27project-table-ellipsis-2\x27>','IsEmpty','Live','datepicker','/_api/web/lists/getbytitle(\x27','resolve','GetAllUserInfo','CompanyId','tableTempProjects','\x27\x20and\x20WebPartName\x20eq\x20\x27Project\x20Admin\x27','siteServerRelativeUrl','location','.myListPagingValue','#txtSomethingWentWrong','ManagerName','and\x20DepartmentId\x20eq\x20\x27','length','Completed','\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a>','#Clientid\x20option:selected','ajax','TotalUserCount','head','\x27\x20and\x20Status\x20eq\x20\x27','DeleteProcessedUser','show','<p\x20style=\x27color:green;text-align:center;\x27>','ClientID','OfficeName','</option>','</div>','#txtFilterDepartment\x20option:selected','protocol','Terminated','All','<View><Query><Where><Eq><FieldRef\x20Name=\x27CompanyID\x27\x20/><Value\x20Type=\x27Lookup\x27>','<option\x20value=\x22','evenselected','done','<p\x20style=\x27color:red;text-align:center;\x27>','/_api/web/lists/getbytitle(\x27ProjectDetails\x27)/items?$expand=Department_ID,Office_Location_Id,ManagerName,ClientID&$orderby=ID\x20desc&$select=*,ManagerName/Title,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/ID,Department_ID/Title,Office_Location_Id/Title&$filter=CompanyId\x20eq\x20\x27','_TopSpan','/Pages/ViewProjectDetails.aspx?WebAppId=','asc','#officeLocation','host','Office_Location_Id','</td><td><div\x20class=\x27project-edit-lock-btn-box\x27>','#txtFilterStatus\x20option:selected','52DeXhcU','#Clientid','set_viewXml','get_web','hide','<tr\x20class=\x27text-center\x27><td\x20class=\x27white-space-nowrap\x20text-left\x27>','executeQueryAsync','#hdnIsProjectAdmin','currentpageMyProject','push','<a\x20href=\x27','333125LyeOvL','Managerto','PlanedStartDate','promise','\x27&$orderby=Title\x20asc','totalrecordsMyProject','/_api/web/lists/getbytitle(\x27ProjectDetails\x27)/items?$expand=ManagerName,Department_ID,Office_Location_Id,ClientID&$&$orderby=ID\x20desc&$select=*,ManagerName/Title,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/Title,Office_Location_Id/Title&$filter=CompanyId\x20eq\x20\x27','load','5793PFexKG','get','getByTitle','1937568GwzqIT','val','getQueryStringParameter','getItems','Departments','&ProjectID=','ResolvePrincipalSource','Key','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','Status','162ugshKf','CamlQuery','ProjectDescription','PlanedEndDate','SPClientPeoplePicker_InitStandaloneControlWrapper','138KZIZYN','span[class=\x27sp-peoplepicker-userSpan\x27]','GET','siteAbsoluteUrl','table','#txtFilterStatus','stringify','/_api/lists/getByTitle(\x27ProjectTeamDetails\x27)/items?Select=ID,TeamMember/ID&$filter=ProjectId\x20eq\x20','prop','error','Width','<a\x20class=\x27custom-edit-btn\x27\x20href=\x27','/_api/web/lists/getbytitle(\x27ClientMaster\x27)/items?$select=ID,Title&$filter=CompanyID\x20eq\x20\x27','and\x20(ManagerNameId\x20eq\x20\x27','#tablefooterMyProject','11FjQeVv','HasInputError','results','application/json;odata=verbose','\x27)/items?$select=*&$filter=CompanyId\x20eq\x20\x27','154273MLndgx','\x27\x20and\x20ContributorsId\x20eq\x20\x27','webAbsoluteUrl','#officeLocation\x20option:selected','<div\x20class=\x27upload-chip\x27>','#mainDivAreaOffice365\x20>tr','#mydmsNorecordFound','each','appendTo','selectedIndex','366vUmqPn','<p\x20style=\x27color:blue;text-align:center;\x27>','<p\x20style=\x27color:orange;text-align:center;\x27>','Title','</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>','-Select-','evenrow','find','PartnerName','pagedropdownMyProject','</a>','\x27\x20and\x20TeamMember/ID\x20eq\x20','empty','html','SPClientPeoplePicker','selectedrowMyProject','ActualStartDate','get_lists','when','ActualEndDate','#projectChip','ProjectName','\x27\x20and\x20Department/ID\x20eq\x20\x27','getEnumerator','and\x20ClientID/Title\x20eq\x20\x27','</div></td></tr>','ResolvedListElementId','</div></td><td>','endrecordMyProject','/Pages/ProjectDetails.aspx?WebAppId=','application/json;\x20odata=verbose','get_item','startrecordMyProject','getElementById','SearchPrincipalSource','desc','#Managerto_TopSpan_ResolvedList','OnHold','/_api/web/ensureuser','\x27\x20and\x20(WebPartName\x20eq\x20\x27Project\x27)','webServerRelativeUrl','7145424UwFFCO','userId','/_api/web/lists/getbytitle(\x27ProjectDetails\x27)/items?$top=5000&$expand=ManagerName,ClientID,Department_ID,Office_Location_Id&$orderby=ID\x20desc&$select=*,ManagerName/Title,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/Title,Office_Location_Id/Title&$filter=CompanyId\x20eq\x20\x27','&ProjectName=','oddrow','POST','ProcessApprovers','</p>','error\x20:\x20Project\x20Details\x20web\x20part','</Value></Eq></Where><OrderBy><FieldRef\x20Name=\x27Title\x27/></OrderBy></Query></View>','formatDate','SOD','/_api/lists/getByTitle(\x27ProjectTeamDetails\x27)/items?$Select=ID,Status,TeamMember/ID&$expand=TeamMember&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20ProjectId\x20eq\x20\x27','#tableTempProjects>tbody','#CreateProject','log','SPClientPeoplePickerDict','843638kigchY','ClientContext','append','PrincipalAccountType','689270hyxQNe','<option\x20value=\x22All\x22>All</option>','dd-M-yy','Department_ID','#txtFilterDepartment','ProjectCode','text','</div></td><td\x20class=\x27text-center\x27><div\x20class=\x27project-table-ellipsis-2\x27>','/Pages/EditProjectDetails.aspx?WebAppId='];a0_0x1d41=function(){return _0x436fe4;};return a0_0x1d41();}function BindProjectGridNormalUsersOnLoad(){var _0x90d5ed=a0_0x243a,_0x52b8c4=$(_0x90d5ed(0x1f5))[_0x90d5ed(0x1e2)](),_0x178b2a=_spPageContextInfo[_0x90d5ed(0x206)]+'/_api/web/lists/getbytitle(\x27ProjectDetails\x27)/items?$expand=Department_ID,Office_Location_Id,ManagerName,ClientID&$orderby=ID\x20desc&$select=*,ManagerName/Title,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/ID,Department_ID/Title,Office_Location_Id/Title&$top=5000&$filter=CompanyId\x20eq\x20\x27'+txtCompanyId+'\x27\x20and\x20Status\x20eq\x20\x27'+_0x52b8c4+'\x27';BindProjectGridNormalUsers(_0x178b2a);}function BindProjectGridNormalUsers(_0x20c4be){var _0x81e2d7=a0_0x243a,_0x125a9e=window[_0x81e2d7(0x1a5)][_0x81e2d7(0x1ba)]+'//'+window['location'][_0x81e2d7(0x1c7)]+_spPageContextInfo[_0x81e2d7(0x1a4)],_0x3af418='';$[_0x81e2d7(0x1ae)]({'url':_0x20c4be,'method':_0x81e2d7(0x1f2),'headers':{'Accept':_0x81e2d7(0x16e)},'async':![],'success':function(_0x56ead7){var _0x1d1187=_0x81e2d7,_0xfc49c5=_0x56ead7['d']['results'];for(var _0x100030=0x0;_0x100030<_0xfc49c5['length'];_0x100030++){var _0x33c17a=_0xfc49c5[_0x100030]['ID'],_0x2480bd=_0xfc49c5[_0x100030][_0x1d1187(0x165)],_0xc34ef7=_spPageContextInfo['webAbsoluteUrl']+_0x1d1187(0x185)+_0x33c17a+'\x27\x20and\x20TeamMember/ID\x20eq\x20'+_spPageContextInfo[_0x1d1187(0x17a)]+'';$[_0x1d1187(0x1ae)]({'url':_0xc34ef7,'type':_0x1d1187(0x1f2),'async':![],'headers':{'Accept':'application/json;odata=verbose'},'success':function(_0x5aa4a1){var _0x2a7713=_0x1d1187,_0x3fe440=_0x5aa4a1['d'][_0x2a7713(0x201)];if(_0x3fe440[_0x2a7713(0x1aa)]!=0x0){var _0x53657f=_0xfc49c5[_0x100030][_0x2a7713(0x165)],_0x2f9255=_0xfc49c5[_0x100030][_0x2a7713(0x193)];(_0x2f9255==null||_0x2f9255==''||_0x2f9255==undefined)&&(_0x2f9255='');var _0xc92a9=_0xfc49c5[_0x100030][_0x2a7713(0x1ed)],_0x49ace6=_0xfc49c5[_0x100030][_0x2a7713(0x1b5)][_0x2a7713(0x153)];(_0x49ace6==null||_0x49ace6==''||_0x49ace6==undefined)&&(_0x49ace6='');var _0x1bea8c=_0xfc49c5[_0x100030][_0x2a7713(0x1c8)]['Title'];(_0x1bea8c==null||_0x1bea8c==''||_0x1bea8c==undefined||_0x1bea8c==_0x2a7713(0x155))&&(_0x1bea8c='');var _0x24aba9=_0xfc49c5[_0x100030][_0x2a7713(0x158)],_0x15a706=_0xfc49c5[_0x100030][_0x2a7713(0x160)];_0x15a706!=''&&_0x15a706!=null?(_0x15a706=new Date(_0x15a706),_0x15a706=$[_0x2a7713(0x19d)][_0x2a7713(0x183)](_0x2a7713(0x190),_0x15a706)):_0x15a706='';var _0x26f64d=_0xfc49c5[_0x100030]['ActualEndDate'];_0x26f64d!=''&&_0x26f64d!=null?(_0x26f64d=new Date(_0x26f64d),_0x26f64d=$[_0x2a7713(0x19d)]['formatDate'](_0x2a7713(0x190),_0x26f64d)):_0x26f64d='';var _0x52aa00=new Date(_0xfc49c5[_0x100030][_0x2a7713(0x1d8)]);_0x52aa00=$[_0x2a7713(0x19d)][_0x2a7713(0x183)](_0x2a7713(0x190),_0x52aa00);var _0xeefe7c=new Date(_0xfc49c5[_0x100030][_0x2a7713(0x1ee)]);_0xeefe7c=$[_0x2a7713(0x19d)][_0x2a7713(0x183)](_0x2a7713(0x190),_0xeefe7c);var _0x149920=_0xfc49c5[_0x100030][_0x2a7713(0x1a8)],_0x24b512=_0xfc49c5[_0x100030][_0x2a7713(0x1a8)][_0x2a7713(0x153)],_0x15e9e5=_0xfc49c5[_0x100030][_0x2a7713(0x1a8)]['Id'],_0x4d7467=_0xfc49c5[_0x100030]['TechnologyUsed'],_0xcf00a5=_0xfc49c5[_0x100030][_0x2a7713(0x1ea)],_0x50ee2b=_0xfc49c5[_0x100030][_0x2a7713(0x191)][_0x2a7713(0x153)];(_0x50ee2b==null||_0x50ee2b==''||_0x50ee2b==undefined||_0x50ee2b==_0x2a7713(0x155))&&(_0x50ee2b='');var _0x50b65a=_0xfc49c5[_0x100030]['ID'],_0x55cb05=[],_0x48d676=_0x2a7713(0x1d5)+_0x125a9e+'/Pages/ViewProjectDetails.aspx?WebAppId='+txtCompanyId+_0x2a7713(0x1e6)+_0x50b65a+_0x2a7713(0x17c)+_0x53657f+'\x27>'+_0x53657f+_0x2a7713(0x15a),_0x3730ef='';_0x15e9e5==_spPageContextInfo[_0x2a7713(0x17a)]?_0x3730ef=_0x2a7713(0x1fb)+_0x125a9e+_0x2a7713(0x196)+txtCompanyId+_0x2a7713(0x1e6)+_0x50b65a+_0x2a7713(0x17c)+_0x53657f+'\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a>':_0x3730ef='';if(_0xcf00a5==_0x2a7713(0x1ab))_0xcf00a5=_0x2a7713(0x1b4)+_0xcf00a5+_0x2a7713(0x180);else{if(_0xcf00a5==_0x2a7713(0x1bb))_0xcf00a5='<p\x20style=\x27color:red;text-align:center;\x27>'+_0xcf00a5+'</p>';else{if(_0xcf00a5==_0x2a7713(0x19c))_0xcf00a5='<p\x20style=\x27color:blue;text-align:center;\x27>'+_0xcf00a5+_0x2a7713(0x180);else _0xcf00a5==_0x2a7713(0x175)&&(_0xcf00a5=_0x2a7713(0x152)+_0xcf00a5+_0x2a7713(0x180));}}_0x3af418=_0x3af418+_0x2a7713(0x1d0)+_0x48d676+_0x2a7713(0x19a)+_0x2f9255+_0x2a7713(0x154)+_0x50ee2b+_0x2a7713(0x154)+_0x1bea8c+'</div></td><td><div\x20class=\x27project-table-ellipsis-2\x27>'+_0x49ace6+_0x2a7713(0x195)+_0x24b512+_0x2a7713(0x16b)+_0xcf00a5+_0x2a7713(0x1c9)+_0x3730ef+_0x2a7713(0x169);}},'error':function(_0x2bd7f6){var _0x1b0377=_0x1d1187;console[_0x1b0377(0x188)]('BindProjectGridNormalUsers\x20method'+_0x2bd7f6);}});}$(_0x1d1187(0x186))[_0x1d1187(0x15d)](''),$(_0x1d1187(0x20a))[_0x1d1187(0x1cf)]();var _0x2756bd=_0x3af418;$(_0x1d1187(0x186))[_0x1d1187(0x18c)](_0x2756bd);var _0x48ce95=$(_0x1d1187(0x209))['length'];_0x48ce95>0x0&&(GenerateTableMyProjectList(),$('.myListPagingValue')['prop']('selectedIndex',0x1)),_0x48ce95==0x0?($(_0x1d1187(0x20a))[_0x1d1187(0x1b3)](),$(_0x1d1187(0x1fe))[_0x1d1187(0x1cf)]()):$(_0x1d1187(0x1fe))[_0x1d1187(0x1b3)]();},'error':function(_0x4064e3){var _0x25d9eb=_0x81e2d7;console[_0x25d9eb(0x188)](JSON[_0x25d9eb(0x1f6)](_0x4064e3));}});}