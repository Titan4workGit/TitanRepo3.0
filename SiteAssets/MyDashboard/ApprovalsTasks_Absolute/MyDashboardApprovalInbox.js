var a0_0x11e939=a0_0x507e;(function(_0x548830,_0x2e6376){var _0x5132a6=a0_0x507e,_0x5546a8=_0x548830();while(!![]){try{var _0x3177ac=parseInt(_0x5132a6(0x160))/0x1*(parseInt(_0x5132a6(0x1cd))/0x2)+parseInt(_0x5132a6(0x168))/0x3*(-parseInt(_0x5132a6(0x200))/0x4)+parseInt(_0x5132a6(0x22f))/0x5+-parseInt(_0x5132a6(0x1b1))/0x6*(-parseInt(_0x5132a6(0x205))/0x7)+parseInt(_0x5132a6(0x136))/0x8+parseInt(_0x5132a6(0x1c5))/0x9+-parseInt(_0x5132a6(0x196))/0xa*(parseInt(_0x5132a6(0x1b7))/0xb);if(_0x3177ac===_0x2e6376)break;else _0x5546a8['push'](_0x5546a8['shift']());}catch(_0x26e3b3){_0x5546a8['push'](_0x5546a8['shift']());}}}(a0_0x4c51,0xebfd6));var sorterApprovalInbox,ApprovalInbox=function(){var _0x2e0da0=a0_0x507e;this['Mode'],this[_0x2e0da0(0x15b)],this['CompanyId'],this[_0x2e0da0(0x1fa)],this[_0x2e0da0(0x23a)]=$('#suggestionTitle'),this[_0x2e0da0(0x210)]=$(_0x2e0da0(0x154)),this[_0x2e0da0(0x1f2)]=$(_0x2e0da0(0x1f5)),this[_0x2e0da0(0x1f6)]=$(_0x2e0da0(0x1ad)),this['ApprovalAction']=$('#txtApprovalAction'),this[_0x2e0da0(0x1c0)]=$(_0x2e0da0(0x1e6)),this['ActionSubmit']=$(_0x2e0da0(0x1a8)),this[_0x2e0da0(0x1ba)]=$('#EventCancel'),this['ModalPopupApproval']=$(_0x2e0da0(0x1a3)),this['FilterApprovalStatusInbox']=$(_0x2e0da0(0x1c6)),this[_0x2e0da0(0x141)]=$('.mainDivApprovalInbox'),this['NoRecordFound']=$(_0x2e0da0(0x21b)),this[_0x2e0da0(0x19a)]=$(_0x2e0da0(0x13b)),this[_0x2e0da0(0x1d2)]=$(_0x2e0da0(0x19b)),this[_0x2e0da0(0x170)]=$(_0x2e0da0(0x191)),this[_0x2e0da0(0x148)]=$(_0x2e0da0(0x1e9)),this['endrecord']=$(_0x2e0da0(0x220)),this[_0x2e0da0(0x22e)]=$(_0x2e0da0(0x1f0)),this[_0x2e0da0(0x208)]=$('#selectedrowApprovalInbox'),this['pagedropdown']=$(_0x2e0da0(0x1de)),this[_0x2e0da0(0x13e)]=$(_0x2e0da0(0x20d));},existStatus='',Process='';ApprovalInbox['prototype']['InitializeControls']=function InitializeControls(){var _0x1ce064=a0_0x507e,_0x563544=this;_0x563544['CompanyId']=titanForWork['getQueryStringParameter']('CompanyId'),_0x563544[_0x1ce064(0x15b)]=titanForWork['getQueryStringParameter']('CompanySiteUrl');},ApprovalInbox['prototype'][a0_0x11e939(0x18c)]=function SetControls(){var _0x5cd848=a0_0x11e939,_0x529b9c=this;_0x529b9c[_0x5cd848(0x1fa)]=_0x5cd848(0x1ef),_0x529b9c[_0x5cd848(0x1d4)][_0x5cd848(0x1ab)](function(){var _0x4f4746=_0x5cd848;_0x529b9c[_0x4f4746(0x1fa)]=$(_0x4f4746(0x1da))[_0x4f4746(0x1bc)](),objApprovalInbox['GetApprovalInboxTasks']();});},ApprovalInbox['prototype'][a0_0x11e939(0x16c)]=function BindEvents(){var _0x5b7def=this;};var itemsarray='';ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x1ff)]=function GetApprovalInboxTasks(){var _0x48c3f3=a0_0x11e939,_0x3ae87e=this,_0x12e02b,_0x581fec='',_0x253255='',_0x523c37=[];$(_0x48c3f3(0x1c8))[_0x48c3f3(0x21e)](),$(_0x48c3f3(0x17a))[_0x48c3f3(0x21e)]();if(_0x3ae87e[_0x48c3f3(0x1fa)]==_0x48c3f3(0x1f9))var _0x5f3e23=_spPageContextInfo[_0x48c3f3(0x166)]+_0x48c3f3(0x152)+_spPageContextInfo[_0x48c3f3(0x22d)]+_0x48c3f3(0x214)+_0x3ae87e[_0x48c3f3(0x182)]+_0x48c3f3(0x230);else var _0x5f3e23=_spPageContextInfo[_0x48c3f3(0x166)]+_0x48c3f3(0x152)+_spPageContextInfo[_0x48c3f3(0x22d)]+'\x27\x20and\x20CompanyId\x20eq\x20\x27'+_0x3ae87e[_0x48c3f3(0x182)]+'\x27\x20and\x20Status\x20eq\x20\x20\x27'+_0x3ae87e['TaskPhase']+'\x27\x20&$OrderBy=Modified\x20desc';$[_0x48c3f3(0x19c)]({'url':_0x5f3e23,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x5a2c7b){var _0x57e4cf=_0x48c3f3,_0x23d67f=_0x5a2c7b['d'][_0x57e4cf(0x158)];itemsarray=_0x23d67f;var _0x206cd4='';table=$('#TempTableApprovalInbox')[_0x57e4cf(0x1c1)](),table[_0x57e4cf(0x1fd)]()['draw']();var _0x37c15a=[];$('<option\x20value=\x22All\x22>All</option>')[_0x57e4cf(0x1e2)](_0x57e4cf(0x1c8)),$(_0x57e4cf(0x1ed))['appendTo'](_0x57e4cf(0x17a));for(var _0x4f6a92=0x0;_0x4f6a92<_0x23d67f[_0x57e4cf(0x204)];_0x4f6a92++){var _0x512b08=_0x23d67f[_0x4f6a92]['ID'],_0x2815a4=_0x23d67f[_0x4f6a92][_0x57e4cf(0x207)],_0x261d96=_0x23d67f[_0x4f6a92][_0x57e4cf(0x1dc)][_0x57e4cf(0x207)],_0xe5ddaa=_0x23d67f[_0x4f6a92][_0x57e4cf(0x184)],_0x539548=_0x23d67f[_0x4f6a92]['WebpartName'],_0x13266b=_0x23d67f[_0x4f6a92]['Category'],_0x4fc4c8=_0x23d67f[_0x4f6a92][_0x57e4cf(0x20b)][_0x57e4cf(0x146)]==undefined?'':_0x23d67f[_0x4f6a92][_0x57e4cf(0x20b)][_0x57e4cf(0x146)],_0x4994c9=_0x23d67f[_0x4f6a92][_0x57e4cf(0x1e3)],_0x430268=_0x23d67f[_0x4f6a92]['ApprovedBy'][_0x57e4cf(0x207)],_0x1d56bb=_0x23d67f[_0x4f6a92]['Remarks'],_0x1cd818=_0x23d67f[_0x4f6a92][_0x57e4cf(0x19f)],_0x5e6887=_0x23d67f[_0x4f6a92][_0x57e4cf(0x1a7)],_0x446fe9=_0x23d67f[_0x4f6a92]['ItemId'],_0x5dc2b1=_0x23d67f[_0x4f6a92]['DepartmentId']['ID'];_0x1d56bb==null&&(_0x1d56bb='');_0x4994c9==null?_0x4994c9='':(_0x4994c9=new Date(_0x4994c9),_0x4994c9=titanForWork[_0x57e4cf(0x147)](_0x4994c9));_0x430268==null&&(_0x430268='');_0x13266b==null&&(_0x13266b=_0x1cd818);var _0x38cddb=[];_0x38cddb[_0x57e4cf(0x18a)](_0x512b08,_0x2815a4,_0x1d56bb,_0x446fe9,_0xe5ddaa,_0x5dc2b1,_0x539548);var _0x5d8f1b='';_0x5d8f1b=_0x57e4cf(0x16e)+_0x512b08+_0x57e4cf(0x1c9)+_0x2815a4+_0x57e4cf(0x1be)+_0x1d56bb+'</div><div\x20style=\x27display:none\x27\x20class=\x27cssdetails\x27\x20>'+_0x5e6887+_0x57e4cf(0x192)+_0x446fe9+_0x57e4cf(0x177)+_0xe5ddaa+_0x57e4cf(0x1cc)+_0x5dc2b1+'\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssProcessType\x27\x20value=\x27'+_0x539548+_0x57e4cf(0x1e5)+_0x512b08+_0x57e4cf(0x140),_0x206cd4+=_0x57e4cf(0x17c)+truncate(_0x2815a4,0x37)+_0x57e4cf(0x1dd)+_0x261d96+'</td><td>'+_0xe5ddaa+_0x57e4cf(0x1dd)+_0x1cd818+_0x57e4cf(0x1dd)+_0x13266b+_0x57e4cf(0x1e8)+_0x4fc4c8+_0x57e4cf(0x1dd)+_0x4994c9+_0x57e4cf(0x1dd)+_0x430268+_0x57e4cf(0x1dd)+truncate(_0x1d56bb,0x64)+_0x57e4cf(0x185),_0x206cd4+=_0x57e4cf(0x144)+_0x5d8f1b+_0x57e4cf(0x19e),_0x539548!=null&&(_0x523c37['indexOf'](_0x13266b)==-0x1&&(_0x523c37['push'](_0x13266b),_0x581fec+=_0x57e4cf(0x1d8)+_0x13266b+_0x57e4cf(0x14a)+_0x13266b+'\x27>'+_0x13266b+_0x57e4cf(0x176))),_0x1cd818!=null&&(_0x523c37[_0x57e4cf(0x228)](_0x1cd818)==-0x1&&(_0x523c37[_0x57e4cf(0x18a)](_0x1cd818),_0x253255+=_0x57e4cf(0x1d8)+_0x1cd818+_0x57e4cf(0x14a)+_0x1cd818+'\x27>'+_0x1cd818+_0x57e4cf(0x176)));}$('#category')[_0x57e4cf(0x171)](_0x581fec),$(_0x57e4cf(0x17a))[_0x57e4cf(0x171)](_0x253255);var _0x4b8c59=_0x206cd4;table[_0x57e4cf(0x21d)][_0x57e4cf(0x15f)]($(_0x206cd4))[_0x57e4cf(0x162)]();},'error':function(_0x253308){var _0x27b99c=_0x48c3f3;console[_0x27b99c(0x1ea)](_0x253308);}});};function getActionbtnValuesInbox(_0xdd2b0a){var _0x4c5231=a0_0x11e939;existStatus='',Process='';var _0x31c332=_spPageContextInfo['webAbsoluteUrl']+_0x4c5231(0x194)+_0xdd2b0a+'\x27)';$[_0x4c5231(0x19c)]({'url':_0x31c332,'headers':{'Accept':_0x4c5231(0x20f)},'async':![],'success':function(_0x5df430){var _0x5d7912=_0x4c5231,_0x59fb87=_0x5df430['d']['results'];if(_0x59fb87['length']>0x0){var _0x5b9c0f=_0x59fb87[0x0]['ID'],_0x98ef3f=_0x59fb87[0x0][_0x5d7912(0x207)],_0x5ad435=_0x59fb87[0x0]['ItemId'],_0x18898e=_0x59fb87[0x0][_0x5d7912(0x1c0)],_0xf456ff=_0x59fb87[0x0]['DepartmentIdId'],_0x26a17f=_0x59fb87[0x0]['WebpartName'],_0x21094a=_0x59fb87[0x0][_0x5d7912(0x14b)],_0x77fb89=_0x59fb87[0x0][_0x5d7912(0x184)];existStatus=_0x77fb89,Process=_0x26a17f,$(_0x5d7912(0x197))['val'](_0x77fb89),objApprovalInbox[_0x5d7912(0x1f8)](_0x5b9c0f,_0x98ef3f,_0x21094a,_0x5ad435,_0xf456ff,_0x26a17f,_0x18898e,_0x77fb89);}},'error':function(_0xfa1e48){var _0x25b656=_0x4c5231;console[_0x25b656(0x1ea)](_0xfa1e48);}});}function a0_0x507e(_0x103452,_0x1d546c){var _0x4c51e7=a0_0x4c51();return a0_0x507e=function(_0x507e95,_0x33a88f){_0x507e95=_0x507e95-0x136;var _0x1ba780=_0x4c51e7[_0x507e95];return _0x1ba780;},a0_0x507e(_0x103452,_0x1d546c);}var globalEventId='';ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x1f8)]=function ApprovedTask(_0x4528fc,_0x55c7df,_0x216ae0,_0x1f9df5,_0x22d6d5,_0x500517,_0x89f535,_0x1da538){var _0x1eb37d=a0_0x11e939,_0x416006=this;_0x416006[_0x1eb37d(0x17d)][_0x1eb37d(0x157)]('show'),_0x416006[_0x1eb37d(0x1f6)][_0x1eb37d(0x21a)](''),globalEventId=_0x1f9df5,_0x500517==_0x1eb37d(0x189)?_0x1da538==_0x1eb37d(0x15a)?($(_0x1eb37d(0x216))['show'](),$(_0x1eb37d(0x1ad))[_0x1eb37d(0x20e)](),$(_0x1eb37d(0x18e))['show']()):($(_0x1eb37d(0x216))[_0x1eb37d(0x19d)](),$('#suggestionDetails')[_0x1eb37d(0x20e)](),$('#EventCancel')['hide']()):($('#suggestionDetails')['show'](),$(_0x1eb37d(0x216))[_0x1eb37d(0x20e)](),$(_0x1eb37d(0x18e))[_0x1eb37d(0x20e)](),_0x416006[_0x1eb37d(0x1f6)][_0x1eb37d(0x171)](_0x1eb37d(0x213)+PageNameByProcessType(_0x1f9df5,_0x500517)+'\x20target=\x22_blank\x22>Details</a>')),_0x416006[_0x1eb37d(0x23a)][_0x1eb37d(0x1bc)](_0x55c7df),_0x416006['SuggestionType']['text'](_0x500517),_0x416006[_0x1eb37d(0x1f2)]['text'](_0x216ae0),_0x416006['Remarks'][_0x1eb37d(0x1bc)](_0x89f535),_0x1da538!=existStatus?(_0x416006['Remarks'][_0x1eb37d(0x138)](_0x89f535),$(_0x1eb37d(0x1a8))[_0x1eb37d(0x19d)](),$(_0x1eb37d(0x197))[_0x1eb37d(0x13a)](_0x1eb37d(0x217),![]),$('#txtRemarks')[_0x1eb37d(0x13a)](_0x1eb37d(0x217),![])):(_0x416006[_0x1eb37d(0x1c0)][_0x1eb37d(0x138)](''),$('#btnAction')[_0x1eb37d(0x20e)](),$(_0x1eb37d(0x197))[_0x1eb37d(0x13a)](_0x1eb37d(0x217),![]),$(_0x1eb37d(0x1e6))['attr'](_0x1eb37d(0x217),![]),$(_0x1eb37d(0x14e))['hide']()),_0x416006[_0x1eb37d(0x1ba)]['unbind']()['click'](function(){var _0x3f1a93=_0x1eb37d,_0x160d38='Cancelled';objApprovalInbox[_0x3f1a93(0x1c4)]('ApprovalTaskList',_0x160d38,_0x89f535,_0x4528fc,_0x1f9df5,_0x22d6d5,_0x500517),_0x416006[_0x3f1a93(0x17d)][_0x3f1a93(0x157)]('hide'),objApprovalInbox[_0x3f1a93(0x1ff)]();}),_0x416006[_0x1eb37d(0x151)][_0x1eb37d(0x222)]()[_0x1eb37d(0x15e)](function(){var _0x3092cb=_0x1eb37d,_0xfe65c=$(_0x3092cb(0x1d3))[_0x3092cb(0x1bc)](),_0x3c4585=_0x416006[_0x3092cb(0x1c0)]['val']();if(_0xfe65c!=''||_0x3c4585!=''){if(_0xfe65c=='Rejected'||_0xfe65c==_0x3092cb(0x15a)){if(_0x3c4585[_0x3092cb(0x163)]()=='')return alert(_0x3092cb(0x179)),![];else objApprovalInbox[_0x3092cb(0x1c4)](_0x3092cb(0x202),_0xfe65c,_0x3c4585,_0x4528fc,_0x1f9df5,_0x22d6d5,_0x500517),_0x416006['ModalPopupApproval'][_0x3092cb(0x157)]('hide'),objApprovalInbox[_0x3092cb(0x1ff)]();}else objApprovalInbox[_0x3092cb(0x1c4)](_0x3092cb(0x202),_0xfe65c,_0x3c4585,_0x4528fc,_0x1f9df5,_0x22d6d5,_0x500517),_0x416006[_0x3092cb(0x17d)]['modal'](_0x3092cb(0x20e)),objApprovalInbox['GetApprovalInboxTasks']();}else alert('Please\x20enter\x20remarks.');});},ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x1c4)]=function updateApprovalDetails(_0x5d47f3,_0x59f08b,_0x34fe8b,_0x291e22,_0x5a6177,_0x2dc2a0,_0x2d7d8e){var _0x348acd=a0_0x11e939;try{var _0x4d6f2d=_spPageContextInfo[_0x348acd(0x22d)],_0x1c4bbf=new Date(),_0x320bad,_0xf09ed4=GetItemTypeForListName(_0x5d47f3);_0x320bad={'__metadata':{'type':_0xf09ed4},'Remarks':_0x34fe8b,'Status':_0x59f08b,'ApprovedById':_0x4d6f2d,'ApprovedDate':_0x1c4bbf},objApprovalInbox[_0x348acd(0x1b6)](_0x5d47f3,_0x320bad,_0x291e22,_0x5a6177,_0x2dc2a0,_0x59f08b,_0x2d7d8e);}catch(_0x4d9ce6){console[_0x348acd(0x1ea)](_0x4d9ce6['message']);}},ApprovalInbox['prototype'][a0_0x11e939(0x1b6)]=function UpdateApprovalToList(_0x463775,_0x260e41,_0x1fd1fe,_0x392620,_0x1b1f6e,_0x46aadf,_0x2fdacf){var _0x30693a=a0_0x11e939,_0x24a929=$['Deferred'](),_0x532918=_spPageContextInfo[_0x30693a(0x166)]+_0x30693a(0x1d6)+_0x463775+_0x30693a(0x1a6)+_0x1fd1fe+'\x27)';return $[_0x30693a(0x19c)]({'url':_0x532918,'type':_0x30693a(0x1f1),'async':![],'headers':{'accept':_0x30693a(0x20f),'X-RequestDigest':$('#__REQUESTDIGEST')['val'](),'content-Type':'application/json;odata=verbose','X-Http-Method':_0x30693a(0x1e7),'If-Match':'*'},'data':JSON[_0x30693a(0x20a)](_0x260e41),'success':function(_0x6d4da4){var _0xe8af93=_0x30693a;debugger;_0x24a929[_0xe8af93(0x1f3)](_0x6d4da4);if(_0x2fdacf==_0xe8af93(0x172)||_0x2fdacf==_0xe8af93(0x1ce)||_0x2fdacf==_0xe8af93(0x1ee)||_0x2fdacf==_0xe8af93(0x189)||_0x2fdacf==_0xe8af93(0x1bb))objApprovalInbox['UpdateCompanyMainList'](_0x392620,_0x1b1f6e,_0x46aadf,_0x2fdacf);else{if(_0x2fdacf==_0xe8af93(0x1f4))UpdateApprovalStatus(_0x392620,_0x46aadf,_0x2fdacf);else{if(_0x2fdacf=='New\x20Initiative'||_0x2fdacf==_0xe8af93(0x219)||_0x2fdacf==_0xe8af93(0x1ec)||_0x2fdacf==_0xe8af93(0x1c2)){var _0x154cf7=titanForWork['getQueryStringParameter'](_0xe8af93(0x235)),_0x3bab93='Activity',_0x373467={'__metadata':{'type':_0xe8af93(0x161)+_0x3bab93+_0xe8af93(0x18b)},'ApprovalStatus':_0x46aadf,'ApprovarName':_spPageContextInfo[_0xe8af93(0x206)]};UniversalUpdate(_0x154cf7,_0x3bab93,_0x373467,_0x392620);}else{if(_0x2fdacf=='QuestionAnswer'){var _0x154cf7=_spPageContextInfo['webAbsoluteUrl'],_0x3bab93='Questions_Master',_0x373467={'__metadata':{'type':'SP.Data.Questions_x005f_MasterListItem'},'ApprovalStatus':_0x46aadf,'ApprovedById':_spPageContextInfo['userId']};UniversalUpdate(_0x154cf7,_0x3bab93,_0x373467,_0x392620);}else objApprovalInbox[_0xe8af93(0x155)](_0x392620,_0x1b1f6e,_0x46aadf,_0x2fdacf);}}}},'error':function(_0x1b908d){var _0x27c735=_0x30693a;console[_0x27c735(0x1ea)](JSON[_0x27c735(0x20a)](_0x1b908d)),_0x24a929[_0x27c735(0x233)](_0x1b908d);}}),_0x24a929['promise']();},ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x1b8)]=function UpdateCompanyMainList(_0x24127f,_0x3d5240,_0x38f54e,_0x1c7eb6){var _0x3b375f=a0_0x11e939;objApprovalInbox[_0x3b375f(0x183)](_0x24127f,siteURL,_0x38f54e,_0x1c7eb6);},ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x155)]=function UpdateDepartmentalMainList(_0x3b72aa,_0x5999a8,_0x3f1b2b,_0x206fba){var _0x8e2771=a0_0x11e939;debugger;var _0x254bb0='Departments',_0x282602=_spPageContextInfo[_0x8e2771(0x166)]+_0x8e2771(0x1d6)+_0x254bb0+_0x8e2771(0x18f)+_0x5999a8+'\x27';$['ajax']({'url':_0x282602,'headers':{'Accept':_0x8e2771(0x20f)},'async':![],'success':function(_0x41b50d){var _0x3e65b0=_0x8e2771;debugger;var _0x498b20=_0x41b50d['d'][_0x3e65b0(0x158)];if(_0x498b20['length']>0x0){var _0x113932=_0x498b20[0x0][_0x3e65b0(0x15b)];objApprovalInbox[_0x3e65b0(0x183)](_0x3b72aa,_0x113932,_0x3f1b2b,_0x206fba);}},'error':function(_0x35d632){var _0xf7bef5=_0x8e2771;console[_0xf7bef5(0x1ea)](_0x35d632);}});},ApprovalInbox[a0_0x11e939(0x15d)]['updateMainList']=function updateMainList(_0x54734d,_0x4698ee,_0x32f9a4,_0x449f4a){var _0x2c9980=a0_0x11e939;debugger;var _0x411344=this;try{var _0x4656d2=_spPageContextInfo['userId'],_0x18dd75=new Date(),_0x1ad347='',_0x143105='',_0x17a0f3;_0x32f9a4==_0x2c9980(0x15a)?_0x1ad347=!![]:_0x1ad347=![];if(_0x449f4a==_0x2c9980(0x164))_0x143105=_0x2c9980(0x13f);else{if(_0x449f4a==_0x2c9980(0x1ec))_0x143105=_0x2c9980(0x219),_0x4698ee=titanForWork[_0x2c9980(0x1bd)]('CompanySiteUrl');else{if(_0x449f4a=='Activity')_0x143105=_0x2c9980(0x219),_0x4698ee=titanForWork['getQueryStringParameter']('CompanySiteUrl');else{if(_0x449f4a=='New\x20Initiative')_0x143105='Activity',_0x4698ee=titanForWork[_0x2c9980(0x1bd)]('CompanySiteUrl');else{if(_0x449f4a==_0x2c9980(0x1f4))_0x143105=_0x2c9980(0x203),_0x4698ee=titanForWork[_0x2c9980(0x1bd)]('CompanySiteUrl');else{if(_0x449f4a=='Announcements')_0x143105=_0x2c9980(0x172),_0x4698ee=titanForWork['getQueryStringParameter'](_0x2c9980(0x235));else{if(_0x449f4a=='General')_0x143105=_0x2c9980(0x172),_0x4698ee=titanForWork[_0x2c9980(0x1bd)]('CompanySiteUrl');else{if(_0x449f4a==_0x2c9980(0x1ee))_0x143105=_0x2c9980(0x172),_0x4698ee=titanForWork[_0x2c9980(0x1bd)](_0x2c9980(0x235));else{if(_0x449f4a==_0x2c9980(0x1bb))_0x143105=_0x2c9980(0x229),_0x4698ee=titanForWork['getQueryStringParameter'](_0x2c9980(0x235));else{if(_0x449f4a==_0x2c9980(0x189))_0x143105=_0x2c9980(0x174),_0x4698ee=titanForWork[_0x2c9980(0x1bd)](_0x2c9980(0x235));else _0x449f4a==_0x2c9980(0x15c)&&(_0x143105=_0x2c9980(0x189));}}}}}}}}}_0x17a0f3=objApprovalInbox[_0x2c9980(0x139)](_0x143105);_0x449f4a=='Departmental\x20Documents'&&(_0x143105=_0x2c9980(0x1a0),_0x17a0f3='SP.Data.'+_0x143105[_0x2c9980(0x1aa)](0x0)[_0x2c9980(0x20c)]()+_0x143105[_0x2c9980(0x1c3)]('\x20')[_0x2c9980(0x1b2)]('')[_0x2c9980(0x218)](0x1)+'Item');var _0x309763;_0x309763={'__metadata':{'type':_0x17a0f3},'Active':_0x1ad347,'ApprovalStatus':_0x32f9a4,'ApprovedById':_0x4656d2,'ApprovedDate':_0x18dd75},_0x449f4a=='Discussion'||_0x449f4a==_0x2c9980(0x1ec)?delete _0x309763['ApprovalStatus']:delete _0x309763['Active'],_0x449f4a==_0x2c9980(0x1bb)&&(_0x309763[_0x2c9980(0x201)]=_0x411344['Remarks'][_0x2c9980(0x138)]()),objApprovalInbox[_0x2c9980(0x1e1)](_0x143105,_0x309763,_0x54734d,_0x4698ee);}catch(_0x706cbc){console[_0x2c9980(0x1ea)](_0x706cbc[_0x2c9980(0x153)]);}},ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x1e1)]=function UpdateMainListItem(_0x13ab10,_0xfdbe,_0x7ada86,_0x5a8b1f){var _0x2a2177=a0_0x11e939,_0xc1625a=this;if(_0x13ab10==_0x2a2177(0x172))var _0x4cec29=_spPageContextInfo[_0x2a2177(0x166)]+_0x2a2177(0x1d6)+_0x13ab10+'\x27)/GetItemById(\x27'+_0x7ada86+'\x27)';else var _0x4cec29=_0x5a8b1f+_0x2a2177(0x1d6)+_0x13ab10+_0x2a2177(0x1a6)+_0x7ada86+'\x27)';_0x13ab10==_0x2a2177(0x203)&&alert(_0x2a2177(0x17f));var _0x591022=$[_0x2a2177(0x212)]();return $[_0x2a2177(0x19c)]({'url':_0x4cec29,'type':'POST','async':![],'headers':{'accept':_0x2a2177(0x20f),'X-RequestDigest':$(_0x2a2177(0x1ca))[_0x2a2177(0x138)](),'content-Type':_0x2a2177(0x20f),'X-Http-Method':_0x2a2177(0x1e7),'If-Match':'*'},'data':JSON[_0x2a2177(0x20a)](_0xfdbe),'success':function(_0x34886f){var _0x5cd2ad=_0x2a2177;_0x591022[_0x5cd2ad(0x1f3)](_0x34886f),alert(_0x5cd2ad(0x226)),_0xc1625a[_0x5cd2ad(0x17d)][_0x5cd2ad(0x157)](_0x5cd2ad(0x20e)),objApprovalInbox[_0x5cd2ad(0x1ff)]();},'error':function(_0x3084fe){var _0x5e9a62=_0x2a2177;console[_0x5e9a62(0x1ea)](JSON[_0x5e9a62(0x20a)](_0x3084fe)),_0x591022['reject'](_0x3084fe);}}),_0x591022[_0x2a2177(0x1af)]();},ApprovalInbox[a0_0x11e939(0x15d)][a0_0x11e939(0x139)]=function GetItemTypeForListName(_0x2d9eab){var _0x1d6d8f=a0_0x11e939;return'SP.Data.'+_0x2d9eab['charAt'](0x0)[_0x1d6d8f(0x20c)]()+_0x2d9eab[_0x1d6d8f(0x1c3)]('\x20')[_0x1d6d8f(0x1b2)]('')['slice'](0x1)+_0x1d6d8f(0x18b);},$(document)[a0_0x11e939(0x13c)](function(){var _0x26c258=a0_0x11e939;objApprovalInbox=new ApprovalInbox(),objApprovalInbox['InitializeControls'](),objApprovalInbox[_0x26c258(0x18c)](),objApprovalInbox[_0x26c258(0x1ff)](),$(_0x26c258(0x197))[_0x26c258(0x1ab)](function(){var _0x16e9fc=_0x26c258,_0x391182=$(_0x16e9fc(0x1d3))[_0x16e9fc(0x1bc)]();_0x391182==existStatus?($(_0x16e9fc(0x211))[_0x16e9fc(0x21f)]('required'),$(_0x16e9fc(0x14e))['hide'](),$('#btnAction')['addClass'](_0x16e9fc(0x20e))):($(_0x16e9fc(0x14e))['show'](),$(_0x16e9fc(0x1a8))[_0x16e9fc(0x21f)](_0x16e9fc(0x20e)),$(_0x16e9fc(0x18e))['hide']());});}),$(a0_0x11e939(0x1c8))[a0_0x11e939(0x1ab)](function(){var _0x582be1=a0_0x11e939,_0x1785ae=$(this)[_0x582be1(0x138)]();categoryfilter(_0x1785ae);}),$(a0_0x11e939(0x17a))[a0_0x11e939(0x1ab)](function(){var _0x1558cf=$(this)['val']();Webpartfilter(_0x1558cf);});function truncate(_0x2ad5aa,_0x3e9be5){if(_0x2ad5aa!=null)return _0x2ad5aa['length']>_0x3e9be5?_0x2ad5aa['slice'](0x0,_0x3e9be5-0x1)+'…':_0x2ad5aa;}function a0_0x4c51(){var _0x38b829=['ApproverComments','ApprovalTaskList','BannerImages','length','4114796MlHmjS','userDisplayName','Title','selectedrow','Upload','stringify','DepartmentId','toUpperCase','#tablenavApprovalInbox','hide','application/json;odata=verbose','SuggestionType','#lblRemarks','Deferred','<a\x20href=','\x27\x20and\x20CompanyId\x20eq\x20\x27','Project\x20Admin','#show','disabled','slice','Activity','html','.NoRecordFound','SP.Data.BannerImagesItem','rows','empty','removeClass','#endrecordApprovalInbox','\x22)\x27\x20style=\x27cursor:pointer\x27\x20>Action</a>','unbind','#myViewEventModal','getDate','grep','Action\x20taken\x20successfully.','Media','indexOf','IdeaBank','Trello\x20Board','\x27)/items?$select=ID,Title,Location,EventDate,EndDate,Description,Category,Department,ChooseImage\x20,ImageURL,Author/ID,ApprovalStatus&$expand=Author&$filter=ID\x20eq\x20\x27','.deleteClickEditCompanyEvent','userId','totalrecords','4061980qeKIhT','\x27\x20&$OrderBy=\x20Modified\x20desc','#TempTableApprovalInbox','&ItemId=','reject','ServerRelativeUrl','CompanySiteUrl','#labelNewEventCategory','ImageURL','Apr','\x27&$expand=AttachmentFiles','SuggestionTitle','6981368HsDMgk','Knowledge','val','GetItemTypeForListName','attr','#columnsApprovalInbox','ready','Nov','tablenav','Discussions','\x22)\x27>Action</a>','AllApprovalInboxTasks','/_api/web/lists/GetByTitle(\x27','\x27><a\x20class=\x27projectGridInboxTaskEventfsdfdsf\x27\x20onclick=\x27getActionbtnValuesInbox(\x22','<td>','Aug','DepartmentName','ShowCommonStandardDateFormat','startrecord','&itemId=','\x27title=\x27','Category','#labelDepartment','Documents','.action','Department\x20Banners','Feb','ActionSubmit','/_api/lists/getbytitle(\x27ApprovalTaskList\x27)/items?$select=ID,Title,Status,WebpartName,ApprovedDate,Remarks,ItemId,DepartmentId/ID,Details,DepartmentId/DepartmentName,ApprovedBy/Title,Author/Title,*&$Expand=ApprovedBy,Author,DepartmentId&$Filter=ApproversId\x20eq\x20\x27','message','#suggestionType','UpdateDepartmentalMainList','#labelLocation','modal','results','getMinutes','Approved','SiteURL','Departmental\x20Events','prototype','click','add','110HigOpi','SP.Data.','draw','trim','Discussion','Occasion','webAbsoluteUrl','match','35109aYmJhM','ItemId','Media\x20Gallery','Department\x20MediaGallary','BindEvents','getHours','<input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssItemID\x27\x20value=\x27','Polls','totalpages','append','Announcements','/_api/Web/Lists/getByTitle(\x27','Event','\x27)/Items(','</option>','\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssStausId\x27\x20value=\x27','&Mode=View&Type=Alert','Please\x20enter\x20remarks.','#Webpart','Emergency\x20Annoucements','<tr><td>','ModalPopupApproval','https:','Process\x20identify','#labelStartDateTime','/Pages/Activity.aspx?WebAppId=','CompanyId','updateMainList','Status','</td>','getFullYear','DepartmentDocument_Access','#lblNewEventDescription','Events','push','ListItem','SetControls','src','#EventCancel','\x27)/items?$select=ID,SiteURL&$filter=ID\x20eq\x20\x27','/Pages/QuestionAnswer.aspx?WebAppId=','#totalpagesApprovalInbox','</div><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssListItemId\x27\x20value=\x27','Department','/_api/web/lists/getbytitle(\x27ApprovalTaskList\x27)/items?$filter=ID\x20eq\x20(\x27','&Mode=View&Type=Suggestion&sourcelocation=../Pages/MyDashboard.aspx','430lcICiF','#txtApprovalAction','&Mode=View','#labelEventTitle','columns','#currentpageApprovalInbox','ajax','show','</td></tr>','WebpartName','DepartmentalDMS','/Pages/Announcements.aspx?WebAppId=','#labelImageURL','#modalApproval','https','#labelEndDateTime','\x27)/GetItemById(\x27','Details','#btnAction','&Mode=View&sourcelocation=../Pages/MyDashboard.aspx','charAt','change','New\x20Initiative','#suggestionDetails','Description','promise','Sept','12KBduNH','join','AttachmentFiles','#labelStatus','HR\x20Admin','UpdateApprovalToList','984962ybFYmN','UpdateCompanyMainList','#txtSomethingWentWrong','ActionCancel','Idea\x20Bank','text','getQueryStringParameter','</div><div\x20style=\x27display:none\x27\x20class=\x27cssRemarks\x27>','Location','Remarks','DataTable','Suggesion','split','updateApprovalDetails','15018750NqWBBC','#txtFilterApprovalStatusInbox','ChooseImage','#category','\x27><div\x20style=\x27display:none\x27\x20class=\x27cssTitle\x27>','#__REQUESTDIGEST','EndDate','\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssDepartmentId\x27\x20value=\x27','18206ttqypm','General','QuestionAnswer','/Pages/AddSlider.aspx?WebAppId=','Jun','currentpage','#txtApprovalAction\x20option:selected','FilterApprovalStatusInbox','\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssProcessType\x27\x20value=\x27','/_api/web/lists/getbytitle(\x27','EventDate','<option\x20value=\x27','</div><div\x20style=\x27display:none\x27\x20class=\x27cssdetails\x27\x20>','select#txtFilterApprovalStatusInbox\x20option:selected','/Pages/Empofthemonth.aspx?WebAppId=','Author','</td><td>','#pagedropdownApprovalInbox','&Mode=View&Type=Announcement','Alert','UpdateMainListItem','appendTo','ApprovedDate','Dec','\x27><a\x20class=\x27projectGridInboxTaskEvent1444\x27\x20style=\x27cursor:pointer\x27\x20onclick=\x27getActionbtnValuesInbox(\x22','#txtRemarks','PATCH','</td><td\x20style=\x27display:none\x27>','#startrecordApprovalInbox','log','.addClickEditCompanyEvent','Suggestion','<option\x20value=\x22All\x22>All</option>','Recognition','Initiated','#totalrecordsApprovalInbox','POST','SuggestionCategory','resolve','Banners','#suggestionCategory','SuggestionDetails','&Mode=View&Type=Activities&sourcelocation=../Pages/MyDashboard.aspx','ApprovedTask','All','TaskPhase','getMonth','Tech\x20Admin','clear','&WebAppId=','GetApprovalInboxTasks','244wILtcV'];a0_0x4c51=function(){return _0x38b829;};return a0_0x4c51();}function UpdateApprovalStatus(_0x3b3637,_0x38733e,_0x2ecb5b){var _0x5edafd=a0_0x11e939,_0x33d4d7=_0x5edafd(0x203),_0x492e2d=titanForWork[_0x5edafd(0x1bd)](_0x5edafd(0x235))+_0x5edafd(0x173)+_0x33d4d7+_0x5edafd(0x175)+_0x3b3637+')';$[_0x5edafd(0x19c)]({'url':_0x492e2d,'type':_0x5edafd(0x1f1),'async':![],'data':JSON['stringify']({'__metadata':{'type':_0x5edafd(0x21c)},'ApprovalStatus':_0x38733e}),'headers':{'accept':_0x5edafd(0x20f),'X-RequestDigest':$(_0x5edafd(0x1ca))[_0x5edafd(0x138)](),'content-Type':_0x5edafd(0x20f),'X-Http-Method':_0x5edafd(0x1e7),'If-Match':'*'},'success':function(_0x47f14e,_0x24e6cb,_0x380edc){console['log']('Approved\x20Success!');},'error':function(_0x473b22){var _0x485964=_0x5edafd;console[_0x485964(0x1ea)](_0x473b22);}});}function categoryfilter(_0x2bcdcc){var _0x4405db=a0_0x11e939,_0x26187a,_0xc865ab=itemsarray;_0x2bcdcc!=_0x4405db(0x1f9)&&(_0x26187a=$['grep'](_0xc865ab,function(_0x4c421e){var _0x1850cc=_0x4405db;return _0x4c421e[_0x1850cc(0x14b)]==null?_0x4c421e[_0x1850cc(0x14b)]==_0x2bcdcc:_0x4c421e[_0x1850cc(0x14b)]==_0x2bcdcc;}),_0xc865ab=_0x26187a);var _0x2dd03b=_0xc865ab,_0x46beb2='';table=$(_0x4405db(0x231))[_0x4405db(0x1c1)](),table['clear']()[_0x4405db(0x162)]();for(var _0x535f83=0x0;_0x535f83<_0x2dd03b[_0x4405db(0x204)];_0x535f83++){var _0x23c160=_0x2dd03b[_0x535f83]['ID'],_0x4a9d87=_0x2dd03b[_0x535f83][_0x4405db(0x207)],_0x2d785f=_0x2dd03b[_0x535f83]['Author'][_0x4405db(0x207)],_0x3f8175=_0x2dd03b[_0x535f83]['Status'],_0x47ea9e=_0x2dd03b[_0x535f83][_0x4405db(0x19f)],_0x11228f=_0x2dd03b[_0x535f83][_0x4405db(0x14b)],_0x24276d=_0x2dd03b[_0x535f83][_0x4405db(0x20b)]['DepartmentName']==undefined?'':_0x2dd03b[_0x535f83]['DepartmentId'][_0x4405db(0x146)],_0x408f93=_0x2dd03b[_0x535f83][_0x4405db(0x1e3)],_0x71a21d=_0x2dd03b[_0x535f83]['ApprovedBy']['Title'],_0x111bc3=_0x2dd03b[_0x535f83]['Remarks'],_0x1cb390=_0x2dd03b[_0x535f83][_0x4405db(0x19f)],_0x1dd7f3=_0x2dd03b[_0x535f83][_0x4405db(0x1a7)],_0x372a04=_0x2dd03b[_0x535f83][_0x4405db(0x169)],_0x52c721=_0x2dd03b[_0x535f83]['DepartmentId']['ID'];_0x111bc3==null&&(_0x111bc3='');_0x408f93==null?_0x408f93='':(_0x408f93=new Date(_0x408f93),_0x408f93=titanForWork['ShowCommonStandardDateFormat'](_0x408f93));_0x71a21d==null&&(_0x71a21d='');_0x11228f==null&&(_0x11228f=_0x1cb390);var _0x373f0a=[];_0x373f0a['push'](_0x23c160,_0x4a9d87,_0x111bc3,_0x372a04,_0x3f8175,_0x52c721,_0x47ea9e);var _0x403b26='';_0x403b26=_0x4405db(0x16e)+_0x23c160+_0x4405db(0x1c9)+_0x4a9d87+'</div><div\x20style=\x27display:none\x27\x20class=\x27cssRemarks\x27>'+_0x111bc3+_0x4405db(0x1d9)+_0x1dd7f3+_0x4405db(0x192)+_0x372a04+'\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssStausId\x27\x20value=\x27'+_0x3f8175+'\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssDepartmentId\x27\x20value=\x27'+_0x52c721+'\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssProcessType\x27\x20value=\x27'+_0x47ea9e+_0x4405db(0x143)+_0x23c160+_0x4405db(0x221),_0x46beb2+=_0x4405db(0x17c)+truncate(_0x4a9d87,0x37)+_0x4405db(0x1dd)+_0x2d785f+_0x4405db(0x1dd)+_0x3f8175+_0x4405db(0x1dd)+_0x1cb390+_0x4405db(0x1dd)+_0x11228f+_0x4405db(0x1e8)+_0x24276d+'</td><td>'+_0x408f93+'</td><td>'+_0x71a21d+_0x4405db(0x1dd)+truncate(_0x111bc3,0x64)+_0x4405db(0x185),_0x46beb2+=_0x4405db(0x144)+_0x403b26+_0x4405db(0x19e);}var _0x1dc9ba=_0x46beb2;table[_0x4405db(0x21d)]['add']($(_0x46beb2))[_0x4405db(0x162)]();}function Webpartfilter(_0x269166){var _0x1a71af=a0_0x11e939,_0x73507a,_0x4744d3=itemsarray;_0x269166!=_0x1a71af(0x1f9)&&(_0x73507a=$[_0x1a71af(0x225)](_0x4744d3,function(_0x273141){var _0xb5087c=_0x1a71af;return _0x273141[_0xb5087c(0x19f)]==null?_0x273141['WebpartName']==_0x269166:_0x273141[_0xb5087c(0x19f)]==_0x269166;}),_0x4744d3=_0x73507a);var _0x38e6a8=_0x4744d3,_0x2f384e='',_0xc1c384=[],_0x31689d='';$(_0x1a71af(0x1c8))[_0x1a71af(0x21e)](),table=$('#TempTableApprovalInbox')[_0x1a71af(0x1c1)](),table['clear']()[_0x1a71af(0x162)](),$(_0x1a71af(0x1ed))['appendTo'](_0x1a71af(0x1c8));for(var _0x157c0c=0x0;_0x157c0c<_0x38e6a8[_0x1a71af(0x204)];_0x157c0c++){var _0x5ab0d8=_0x38e6a8[_0x157c0c]['ID'],_0x464dd2=_0x38e6a8[_0x157c0c][_0x1a71af(0x207)],_0x2bda94=_0x38e6a8[_0x157c0c]['Author'][_0x1a71af(0x207)],_0x46a6b3=_0x38e6a8[_0x157c0c][_0x1a71af(0x184)],_0x2e9380=_0x38e6a8[_0x157c0c][_0x1a71af(0x19f)],_0x522b53=_0x38e6a8[_0x157c0c][_0x1a71af(0x14b)],_0x5af1a2=_0x38e6a8[_0x157c0c]['DepartmentId'][_0x1a71af(0x146)]==undefined?'':_0x38e6a8[_0x157c0c]['DepartmentId'][_0x1a71af(0x146)],_0x4b67f1=_0x38e6a8[_0x157c0c][_0x1a71af(0x1e3)],_0x4029df=_0x38e6a8[_0x157c0c]['ApprovedBy'][_0x1a71af(0x207)],_0x52d40c=_0x38e6a8[_0x157c0c][_0x1a71af(0x1c0)],_0x44f000=_0x38e6a8[_0x157c0c][_0x1a71af(0x19f)],_0x3e36b5=_0x38e6a8[_0x157c0c]['Details'],_0x4f8c2f=_0x38e6a8[_0x157c0c][_0x1a71af(0x169)],_0x3238f4=_0x38e6a8[_0x157c0c][_0x1a71af(0x20b)]['ID'];_0x52d40c==null&&(_0x52d40c='');_0x4b67f1==null?_0x4b67f1='':(_0x4b67f1=new Date(_0x4b67f1),_0x4b67f1=titanForWork['ShowCommonStandardDateFormat'](_0x4b67f1));_0x4029df==null&&(_0x4029df='');_0x522b53==null&&(_0x522b53=_0x44f000);var _0x167543=[];_0x167543[_0x1a71af(0x18a)](_0x5ab0d8,_0x464dd2,_0x52d40c,_0x4f8c2f,_0x46a6b3,_0x3238f4,_0x2e9380);var _0x37cc14='';_0x37cc14=_0x1a71af(0x16e)+_0x5ab0d8+'\x27><div\x20style=\x27display:none\x27\x20class=\x27cssTitle\x27>'+_0x464dd2+_0x1a71af(0x1be)+_0x52d40c+_0x1a71af(0x1d9)+_0x3e36b5+'</div><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27cssListItemId\x27\x20value=\x27'+_0x4f8c2f+_0x1a71af(0x177)+_0x46a6b3+_0x1a71af(0x1cc)+_0x3238f4+_0x1a71af(0x1d5)+_0x2e9380+_0x1a71af(0x143)+_0x5ab0d8+'\x22)\x27\x20style=\x27cursor:pointer\x27\x20>Action</a>',_0x2f384e+=_0x1a71af(0x17c)+truncate(_0x464dd2,0x37)+_0x1a71af(0x1dd)+_0x2bda94+_0x1a71af(0x1dd)+_0x46a6b3+_0x1a71af(0x1dd)+_0x44f000+_0x1a71af(0x1dd)+_0x522b53+_0x1a71af(0x1e8)+_0x5af1a2+_0x1a71af(0x1dd)+_0x4b67f1+_0x1a71af(0x1dd)+_0x4029df+_0x1a71af(0x1dd)+truncate(_0x52d40c,0x64)+_0x1a71af(0x185),_0x2f384e+=_0x1a71af(0x144)+_0x37cc14+_0x1a71af(0x19e),_0x522b53!=null&&(_0xc1c384[_0x1a71af(0x228)](_0x522b53)==-0x1&&(_0xc1c384[_0x1a71af(0x18a)](_0x522b53),_0x31689d+='<option\x20value=\x27'+_0x522b53+_0x1a71af(0x14a)+_0x522b53+'\x27>'+_0x522b53+_0x1a71af(0x176)));}$(_0x1a71af(0x1c8))['append'](_0x31689d);var _0x56f156=_0x2f384e;table['rows']['add']($(_0x2f384e))['draw']();}function PageNameByProcessType(_0xd576a0,_0x44779a){var _0x52b0be=a0_0x11e939;debugger;var _0x3a78d0,_0x509a2b;switch(_0x44779a){case _0x52b0be(0x1e0):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x1a1)+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+'&ItemId='+_0xd576a0+_0x52b0be(0x178);break;case _0x52b0be(0x172):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x1a1)+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+_0x52b0be(0x232)+_0xd576a0+_0x52b0be(0x1df);break;case _0x52b0be(0x1f4):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x1d0)+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+_0x52b0be(0x232)+_0xd576a0+_0x52b0be(0x198);break;case _0x52b0be(0x14f):_0x3a78d0=_0x52b0be(0x14f);break;case _0x52b0be(0x16b):_0x3a78d0='Department\x20MediaGallary';break;case _0x52b0be(0x15c):_0x3a78d0=_0x52b0be(0x15c);break;case _0x52b0be(0x187):_0x3a78d0=_0x52b0be(0x187);break;case'Discussion':_0x3a78d0='Discussion';break;case'Documents':_0x3a78d0=_0x52b0be(0x14d);break;case _0x52b0be(0x17b):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+'/Pages/Announcements.aspx?WebAppId='+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+_0x52b0be(0x232)+_0xd576a0+_0x52b0be(0x178);break;case _0x52b0be(0x1ce):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+'/Pages/BiographyWebpart.aspx?itemId='+_0xd576a0+_0x52b0be(0x1fe)+titanForWork[_0x52b0be(0x1bd)]('CompanyId')+_0x52b0be(0x198);break;case _0x52b0be(0x1b5):_0x3a78d0=_0x52b0be(0x1b5);break;case _0x52b0be(0x137):_0x3a78d0=_0x52b0be(0x137);break;case _0x52b0be(0x227):_0x3a78d0='Media';break;case _0x52b0be(0x16a):_0x3a78d0=_0x52b0be(0x16a);break;case _0x52b0be(0x1ac):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x181)+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+'&ItemId='+_0xd576a0+'&Mode=View&Type=Initiative&sourcelocation=../Pages/MyDashboard.aspx';break;case _0x52b0be(0x165):_0x3a78d0=_0x52b0be(0x165);break;case _0x52b0be(0x16f):_0x3a78d0='Polls';break;case _0x52b0be(0x215):_0x3a78d0='Project\x20Admin';break;case _0x52b0be(0x1cf):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x190)+titanForWork[_0x52b0be(0x1bd)](_0x52b0be(0x182))+'&ItemId='+_0xd576a0+_0x52b0be(0x1a9);break;case'Recognition':_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x1db)+titanForWork['getQueryStringParameter']('CompanyId')+_0x52b0be(0x149)+_0xd576a0+_0x52b0be(0x1a9);break;case'Suggesion':_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+_0x52b0be(0x181)+titanForWork['getQueryStringParameter'](_0x52b0be(0x182))+'&ItemId='+_0xd576a0+_0x52b0be(0x195);break;case _0x52b0be(0x219):_0x3a78d0=_spPageContextInfo[_0x52b0be(0x166)]+'/Pages/Activity.aspx?WebAppId='+titanForWork['getQueryStringParameter']('CompanyId')+_0x52b0be(0x232)+_0xd576a0+_0x52b0be(0x1f7);break;case'Tech\x20Admin':_0x3a78d0=_0x52b0be(0x1fc);break;case _0x52b0be(0x22a):_0x3a78d0=_0x52b0be(0x22a);}return _0x3a78d0;}function EventPopup(_0x5577a3){var _0x269202=a0_0x11e939;debugger;$(_0x269202(0x1eb))[_0x269202(0x20e)](),$(_0x269202(0x22c))[_0x269202(0x20e)]();var _0xbfa140=titanForWork[_0x269202(0x1bd)]('CompanySiteUrl'),_0x590e2a=_0x269202(0x174),_0x232e87=_0xbfa140+'/_api/web/lists/getbytitle(\x27'+_0x590e2a+_0x269202(0x22b)+_0x5577a3+_0x269202(0x239);$[_0x269202(0x19c)]({'url':_0x232e87,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x36d2ae){var _0x2a28d8=_0x269202;$(_0x2a28d8(0x223))[_0x2a28d8(0x157)](_0x2a28d8(0x19d));var _0x3d0930=_0x36d2ae['d'][_0x2a28d8(0x158)];if(_0x3d0930[_0x2a28d8(0x204)]>0x0){var _0x109f55=_0x3d0930[0x0][_0x2a28d8(0x207)];_0x109f55==null&&(_0x109f55='');$(_0x2a28d8(0x199))[_0x2a28d8(0x1bc)](_0x109f55);var _0xb390a2=_0x3d0930[0x0][_0x2a28d8(0x1bf)];_0xb390a2==null&&(_0xb390a2='');$(_0x2a28d8(0x156))[_0x2a28d8(0x1bc)](_0xb390a2);var _0x557b01=_0x3d0930[0x0][_0x2a28d8(0x1d7)];_0x557b01!=null&&$(_0x2a28d8(0x180))[_0x2a28d8(0x1bc)](convertJSONDateAMPMWithDate(_0x557b01));var _0x268a2d=_0x3d0930[0x0][_0x2a28d8(0x1cb)];_0x268a2d!=null&&$(_0x2a28d8(0x1a5))[_0x2a28d8(0x1bc)](convertJSONDateAMPMWithDate(_0x268a2d));var _0x5f1a9b=_0x3d0930[0x0][_0x2a28d8(0x1ae)];_0x5f1a9b==null&&(_0x5f1a9b='');if(_0x5f1a9b[_0x2a28d8(0x167)](_0x2a28d8(0x1a4))){var _0x1cc0ae=_0x5f1a9b[_0x2a28d8(0x1c3)](_0x2a28d8(0x1a4)),_0x3d8f89=_0x1cc0ae[0x1][_0x2a28d8(0x218)](0x5),_0x5f1a9b=_0x1cc0ae[0x0]+_0x2a28d8(0x17e)+_0x3d8f89;$(_0x2a28d8(0x188))[_0x2a28d8(0x1bc)](_0x5f1a9b);}else $(_0x2a28d8(0x188))[_0x2a28d8(0x1bc)](_0x5f1a9b);var _0x1f3bea=_0x3d0930[0x0][_0x2a28d8(0x14b)];_0x1f3bea==null&&(_0x1f3bea='');$(_0x2a28d8(0x236))[_0x2a28d8(0x1bc)](_0x1f3bea);var _0x4fa789=_0x3d0930[0x0][_0x2a28d8(0x193)];_0x4fa789==null&&(_0x4fa789='');$(_0x2a28d8(0x14c))[_0x2a28d8(0x1bc)](_0x4fa789);var _0x152cf7=_0x3d0930[0x0][_0x2a28d8(0x1c7)];$('#slctimage')['text'](_0x4fa789);if(_0x152cf7==_0x2a28d8(0x209)){var _0x28c3a7=_0x3d0930[0x0][_0x2a28d8(0x1b3)]['results'][0x0][_0x2a28d8(0x234)],_0x19e427=$(_0x2a28d8(0x1a2));_0x35181a==null&&(_0x35181a=''),_0x19e427[0x0][_0x2a28d8(0x18d)]=_0x28c3a7;}else{var _0x35181a=_0x3d0930[0x0][_0x2a28d8(0x237)],_0x19e427=$(_0x2a28d8(0x1a2));_0x35181a==null&&(_0x35181a=''),_0x19e427[0x0][_0x2a28d8(0x18d)]=_0x35181a;}ApprovalStatus=_0x3d0930[0x0]['ApprovalStatus'],$(_0x2a28d8(0x1b4))[_0x2a28d8(0x1bc)](ApprovalStatus);}},'eror':function(_0x761eca){var _0x22e2e0=_0x269202;console[_0x22e2e0(0x1ea)]($(_0x22e2e0(0x1b9))[_0x22e2e0(0x138)]());}});}function convertJSONDateAMPMWithDate(_0x51071e){var _0x84ea6c=a0_0x11e939,_0x56381d=new Date(_0x51071e),_0xa328e6=['Jan',_0x84ea6c(0x150),'Mar',_0x84ea6c(0x238),'May',_0x84ea6c(0x1d1),'July',_0x84ea6c(0x145),_0x84ea6c(0x1b0),'Oct',_0x84ea6c(0x13d),_0x84ea6c(0x1e4)],_0x2c7525=_0x56381d[_0x84ea6c(0x16d)](),_0xa53764=_0x56381d[_0x84ea6c(0x159)](),_0x47e3a7=_0x56381d[_0x84ea6c(0x16d)]()>=0xc?'PM':'AM';_0x2c7525=_0x2c7525%0xc,_0x2c7525=_0x2c7525?_0x2c7525:0xc,_0xa53764=_0xa53764<0xa?'0'+_0xa53764:_0xa53764;var _0x776c88=_0x2c7525+':'+_0xa53764+'\x20'+_0x47e3a7;return _0x56381d[_0x84ea6c(0x224)]()+'-'+_0xa328e6[_0x56381d[_0x84ea6c(0x1fb)]()]+'-'+_0x56381d[_0x84ea6c(0x186)]()+'\x20'+_0x776c88;}function UniversalUpdate(_0x330b05,_0xca3c8,_0x12e400,_0xbff44d){var _0xb8dfe2=a0_0x11e939;$['ajax']({'url':_0x330b05+_0xb8dfe2(0x142)+_0xca3c8+'\x27)/items(\x27'+_0xbff44d+'\x27)','type':_0xb8dfe2(0x1f1),'async':![],'data':JSON[_0xb8dfe2(0x20a)](_0x12e400),'headers':{'Accept':_0xb8dfe2(0x20f),'Content-Type':_0xb8dfe2(0x20f),'X-RequestDigest':$(_0xb8dfe2(0x1ca))[_0xb8dfe2(0x138)](),'IF-MATCH':'*','X-HTTP-Method':'MERGE'},'success':function(_0x3c5d7a,_0x29337f,_0x2acfda){var _0x57382f=_0xb8dfe2;alert(_0x57382f(0x226));},'error':function(_0x3c897b){var _0x4be860=_0xb8dfe2;alert('An\x20error\x20occurred.\x20Please\x20contact\x20your\x20system\x20administrator\x20/\x20Refresh\x20a\x20WebPage\x20!'),console[_0x4be860(0x1ea)](_0x3c897b);}});}