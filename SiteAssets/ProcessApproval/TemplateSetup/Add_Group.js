var a0_0x2a352a=a0_0xec52;(function(_0x215df0,_0x1b04eb){var _0x4896c9=a0_0xec52,_0x152d91=_0x215df0();while(!![]){try{var _0x4ae6c3=-parseInt(_0x4896c9(0x70))/0x1*(-parseInt(_0x4896c9(0x9f))/0x2)+-parseInt(_0x4896c9(0xeb))/0x3+-parseInt(_0x4896c9(0xf4))/0x4+parseInt(_0x4896c9(0x109))/0x5*(parseInt(_0x4896c9(0xa2))/0x6)+-parseInt(_0x4896c9(0xb2))/0x7*(-parseInt(_0x4896c9(0x97))/0x8)+parseInt(_0x4896c9(0xbc))/0x9+-parseInt(_0x4896c9(0xce))/0xa;if(_0x4ae6c3===_0x1b04eb)break;else _0x152d91['push'](_0x152d91['shift']());}catch(_0x575c8b){_0x152d91['push'](_0x152d91['shift']());}}}(a0_0x2c93,0x71480),$(document)[a0_0x2a352a(0xd7)](function(){var _0x3994b9=a0_0x2a352a;$(_0x3994b9(0x7f))[_0x3994b9(0xac)](function(){var _0x1227cd=_0x3994b9,_0x41f652=$('#txtGrpName')[_0x1227cd(0x8a)]();let _0x960416=grpDuplicate['filter'](_0x344cca=>{var _0x37df8a=_0x1227cd;if(_0x344cca['Title']!=null)return _0x344cca['Title'][_0x37df8a(0xaf)]()===_0x41f652[_0x37df8a(0xaf)]();});if(_0x960416[_0x1227cd(0x9a)]>0x0)return alert(_0x1227cd(0xe6)),![];if($[_0x1227cd(0x116)]($(_0x1227cd(0xb1))[_0x1227cd(0x8a)]())!='')addGroup(_0x1227cd(0xe1)),GetGroupUsersGroups(_0x1227cd(0xe1),0x1);else return alert(_0x1227cd(0x115)),![];});}));function addGroup(_0x2ac042){var _0x3859b8=a0_0x2a352a;if($[_0x3859b8(0x116)]($('#txtGrpName')[_0x3859b8(0x8a)]())!=''){var _0x5b591e,_0x15e0ad=GetItemTypeForListNameDetails('ApproversGroups');_0x5b591e={'__metadata':{'type':_0x15e0ad},'Title':$(_0x3859b8(0xb1))[_0x3859b8(0x8a)]()},_0x2ac042==_0x3859b8(0xe1)?(AddItemToListGroups(_0x3859b8(0x96),_0x5b591e),alert('New\x20group\x20is\x20created'),$('#txtGrpName')[_0x3859b8(0x8a)]('')):updateUserWithIDGroup('ApproversGroups',_0x5b591e,itemIdToUpdate,[],'');}}function GetItemTypeForListNameDetails(_0x484d24){var _0x410ef7=a0_0x2a352a;return _0x410ef7(0xd4)+_0x484d24[_0x410ef7(0xf6)](0x0)[_0x410ef7(0x6f)]()+_0x484d24[_0x410ef7(0xbb)]('\x20')[_0x410ef7(0x91)]('')[_0x410ef7(0x7e)](0x1)+_0x410ef7(0x88);}function AddItemToListGroups(_0x27a5a9,_0x2d2258){var _0x2d83b2=a0_0x2a352a,_0x2c3e43=$[_0x2d83b2(0xfa)]();return $['ajax']({'url':_spPageContextInfo[_0x2d83b2(0x11a)]+_0x2d83b2(0xec)+_0x27a5a9+'\x27)/items','type':'POST','async':![],'headers':{'accept':_0x2d83b2(0xc5),'X-RequestDigest':$(_0x2d83b2(0x103))['val'](),'content-Type':_0x2d83b2(0xc5)},'data':JSON[_0x2d83b2(0xc4)](_0x2d2258),'success':function(_0x33de5d){_0x2c3e43['resolve'](_0x33de5d);},'error':function(_0xd2af90){var _0x14f2a3=_0x2d83b2;alert(JSON['stringify'](_0xd2af90)),_0x2c3e43[_0x14f2a3(0xdf)](_0xd2af90);}}),_0x2c3e43[_0x2d83b2(0xff)]();}function updateUserWithIDGroup(_0x17aea1,_0x2823d2,_0x2d960e,_0x1b3dbb,_0x3ad679){var _0x560769=a0_0x2a352a,_0x4dc6d8=$['Deferred'](),_0x4c8d78=_spPageContextInfo[_0x560769(0x11a)]+_0x560769(0xea)+_0x17aea1+'\x27)/Items('+_0x2d960e+')';return $[_0x560769(0x108)]({'url':_0x4c8d78,'type':_0x560769(0xde),'async':![],'headers':{'accept':_0x560769(0xc5),'X-RequestDigest':$(_0x560769(0x103))[_0x560769(0x8a)](),'content-Type':_0x560769(0xc5),'X-Http-Method':_0x560769(0x72),'If-Match':'*'},'data':JSON[_0x560769(0xc4)](_0x2823d2),'success':function(_0x5d3171){var _0x3b08de=_0x560769;_0x4dc6d8[_0x3b08de(0xa6)](!![]),_0x1b3dbb[_0x3b08de(0x9a)]>0x0&&(_0x1b3dbb[_0x3b08de(0x9a)]>0x1?alert(_0x1b3dbb[_0x3b08de(0x91)](',\x20')+_0x3b08de(0xe4)):alert(_0x1b3dbb[_0x3b08de(0x91)](',\x20')+_0x3b08de(0xcc))),updateSpecificGroup(_0x3ad679);},'error':function(_0x522253){var _0x563299=_0x560769;alert(JSON[_0x563299(0xc4)](_0x522253)),_0x4dc6d8[_0x563299(0xdf)](_0x522253);}}),_0x4dc6d8[_0x560769(0xff)]();}function getSelectedUsers(_0x4e9c6b){var _0x246de2=a0_0x2a352a,_0x1e4160=$(_0x246de2(0xbd)+_0x4e9c6b)[_0x246de2(0x92)](),_0x3c6fb3=[],_0x4b3fd8=_spPageContextInfo[_0x246de2(0x11a)]+_0x246de2(0xe5)+_0x1e4160+'\x27';$[_0x246de2(0x108)]({'url':_0x4b3fd8,'method':_0x246de2(0xcb),'headers':{'Accept':_0x246de2(0xe0)},'async':![],'success':function(_0x265289){var _0x319a6c=_0x246de2,_0x274488=_0x265289;if(_0x274488['d']['results'][0x0][_0x319a6c(0x10a)]['results']!=null)for(var _0x59886c=0x0;_0x59886c<_0x274488['d'][_0x319a6c(0xdb)][0x0][_0x319a6c(0x10a)][_0x319a6c(0xdb)][_0x319a6c(0x9a)];_0x59886c++){_0x3c6fb3['push'](_0x274488['d']['results'][0x0]['Approvers']['results'][_0x59886c]['ID']);}var _0x34c189=_0x319a6c(0x102),_0x50f983='<br\x20/>Please\x20wait!!',_0x5e8bf9=0xc8,_0x3cb422=0x190;SP[_0x319a6c(0xd1)][_0x319a6c(0xfe)](['strings.js',_0x319a6c(0xe2)],function(){currentDlg=SP['UI']['ModalDialog']['showWaitScreenWithNoClose'](_0x34c189,_0x50f983,_0x5e8bf9,_0x3cb422);}),setTimeout(function(){UpdateGpMember(_0x4e9c6b,_0x3c6fb3,_0x4e9c6b);},0x64);},'error':function(_0x31b514){var _0x4d5c90=_0x246de2;console['log'](JSON[_0x4d5c90(0xc4)](_0x31b514));}});}var arrUsers=[],grpDuplicate=[];function GetGroupUsersGroups(_0x20b417,_0x396199){var _0x400e73=a0_0x2a352a,_0x4a07dc='';arrUsers=[],$(_0x400e73(0xe9))['html']('');var _0x1f97a9=_spPageContextInfo[_0x400e73(0x11a)]+_0x400e73(0x105);$[_0x400e73(0x108)]({'url':_0x1f97a9,'method':_0x400e73(0xcb),'headers':{'Accept':_0x400e73(0xe0)},'async':![],'success':function(_0x2a838f){var _0x330353=_0x400e73,_0x29791c=_0x2a838f;grpDuplicate=_0x29791c['d'][_0x330353(0xdb)],$('#thbodyControl')[_0x330353(0x90)](''),$(_0x330353(0x83))['html']('');for(var _0x4f2302=0x0;_0x4f2302<_0x29791c['d'][_0x330353(0xdb)][_0x330353(0x9a)];_0x4f2302++){if(_0x4f2302!=0x0){}arrUsers[_0x330353(0xb9)]({'ID':_0x4f2302,'Users':_0x29791c['d']['results'][_0x4f2302][_0x330353(0x10a)][_0x330353(0xdb)]}),console[_0x330353(0xb8)](arrUsers);var _0x2b30d9=_0x29791c['d'][_0x330353(0xdb)][_0x4f2302][_0x330353(0xa8)],_0x7c7ade=_0x29791c['d'][_0x330353(0xdb)][_0x4f2302]['ID'],_0x3eed4f='';_0x3eed4f+=_0x330353(0xdd),_0x3eed4f+=_0x330353(0xef)+_0x4f2302+_0x330353(0x8c)+_0x4f2302+')\x22\x20data-toggle=\x22collapse\x22\x20data-parent=\x22#accordGroup\x22\x20href=\x22#group'+_0x4f2302+_0x330353(0xad),_0x3eed4f+=_0x330353(0xfd)+_0x4f2302+'\x22>'+_0x7c7ade+_0x330353(0xdc)+_0x2b30d9+_0x330353(0xed)+_0x7c7ade+_0x330353(0x100)+_0x2b30d9+'\x27);\x22><i\x20class=\x22fa\x20fa-trash-o\x22></i></button></div><i\x20class=\x22fa\x20fa-chevron-down\x22></i></a></h4></div>',_0x3eed4f+=_0x330353(0x110)+_0x4f2302+_0x330353(0xc8)+_0x4f2302+'\x22>',_0x3eed4f+='</div><div\x20class=\x22row\x20overflow_sec\x22><div\x20class=\x22col-xs-12\x22><div\x20class=\x22add-menber-dropdown\x22>',_0x3eed4f+=_0x330353(0x79)+_0x4f2302+_0x330353(0x77)+_0x4f2302+_0x330353(0xf5)+_0x4f2302+_0x330353(0xe7)+_0x4f2302+_0x330353(0xa5)+_0x4f2302+_0x330353(0xbf),_0x3eed4f+=_0x330353(0x81),$('#accordGroup')[_0x330353(0x74)](_0x3eed4f);var _0x40e26a=_0x330353(0x11c)+_0x4f2302,_0x2b54c1=_0x40e26a+'_TopSpan_NotificationSpan';SetPeoplePicker_MultiselectGroups1(_0x40e26a,!![]),$('#'+_0x2b54c1)[_0x330353(0x11b)](_0x330353(0x107));}currentDlg!=''&&currentDlg[_0x330353(0xe8)]();if(_0x20b417==_0x330353(0xe1)){var _0x493f40=_0x29791c['d'][_0x330353(0xdb)]['length']-0x1;$(_0x330353(0x10d)+_0x493f40)[_0x330353(0x9b)](_0x330353(0x112),_0x330353(0xa4)),$(_0x330353(0x10d)+_0x493f40)['removeClass'](_0x330353(0xd3)),$(_0x330353(0x73)+_0x493f40)['removeClass']('panel-collapse\x20collapse'),$(_0x330353(0x73)+_0x493f40)[_0x330353(0x11b)](_0x330353(0x114)),$(_0x330353(0x73)+_0x493f40)['attr'](_0x330353(0x112),_0x330353(0xa4));}else $(_0x330353(0x10d)+_0x396199)['attr'](_0x330353(0x112),'true'),$(_0x330353(0x10d)+_0x396199)[_0x330353(0xe3)](_0x330353(0xd3)),$(_0x330353(0x73)+_0x396199)[_0x330353(0xe3)]('panel-collapse\x20collapse'),$(_0x330353(0x73)+_0x396199)[_0x330353(0x11b)](_0x330353(0x114)),$('#group'+_0x396199)[_0x330353(0x9b)]('aria-expanded',_0x330353(0xa4));},'error':function(_0x368aad){var _0x4b6c4c=_0x400e73;console[_0x4b6c4c(0xb8)](JSON[_0x4b6c4c(0xc4)](_0x368aad));}});}function DeleteGroup(_0x2f8b83,_0x711861){var _0x16cec0=a0_0x2a352a;if(confirm(_0x16cec0(0x82)+_0x711861+_0x16cec0(0xbe))){var _0x1a7783=$[_0x16cec0(0xfa)]();return $['ajax']({'url':_spPageContextInfo['webAbsoluteUrl']+'/_api/web/lists/GetByTitle(\x27ApproversGroups\x27)/items('+_0x2f8b83+')','type':_0x16cec0(0xde),'headers':{'accept':_0x16cec0(0xc5),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x16cec0(0x8a)](),'IF-MATCH':'*','X-HTTP-Method':'DELETE'},'success':function(_0x604db2){var _0x54fc74=_0x16cec0;_0x1a7783[_0x54fc74(0xa6)](_0x604db2);var _0x886b3c=_0x54fc74(0x7b),_0x3ae626=_0x54fc74(0x7d),_0xcce73d=0xc8,_0x4a38ea=0x190;SP[_0x54fc74(0xd1)][_0x54fc74(0xfe)]([_0x54fc74(0xda),_0x54fc74(0xe2)],function(){var _0x23a5a3=_0x54fc74;currentDlg=SP['UI'][_0x23a5a3(0x86)]['showWaitScreenWithNoClose'](_0x886b3c,_0x3ae626,_0xcce73d,_0x4a38ea);}),setTimeout(function(){GetGroupUsersGroups('','');},0x64);},'error':function(_0x1d4dda){var _0x41f097=_0x16cec0;_0x1a7783[_0x41f097(0xdf)](_0x1d4dda);}}),_0x1a7783[_0x16cec0(0xff)]();}}function DeleteUserFromGrp(_0x3d8ac9,_0x431fe3){var _0x3021d9=a0_0x2a352a;if(confirm(_0x3021d9(0xc6))){var _0x2c9623=$(_0x3021d9(0xbd)+_0x431fe3)[_0x3021d9(0x92)](),_0x4b9d3f=[],_0x5df43e=_spPageContextInfo[_0x3021d9(0x11a)]+_0x3021d9(0xe5)+_0x2c9623+'\x27';$[_0x3021d9(0x108)]({'url':_0x5df43e,'method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x23468b){var _0x1ede01=_0x3021d9,_0x4f47ad=_0x23468b;if(_0x4f47ad['d'][_0x1ede01(0xdb)][0x0][_0x1ede01(0x10a)][_0x1ede01(0xdb)]!=null)for(var _0x4057b8=0x0;_0x4057b8<_0x4f47ad['d'][_0x1ede01(0xdb)][0x0][_0x1ede01(0x10a)][_0x1ede01(0xdb)][_0x1ede01(0x9a)];_0x4057b8++){_0x4b9d3f[_0x1ede01(0xb9)](_0x4f47ad['d']['results'][0x0]['Approvers'][_0x1ede01(0xdb)][_0x4057b8]['ID']);}_0x4b9d3f[_0x1ede01(0x10f)](_0x3d8ac9);var _0x4fdb9e=_0x1ede01(0x102),_0x4442ee=_0x1ede01(0x7d),_0xef7d4e=0xc8,_0x4fcb23=0x190;SP['SOD'][_0x1ede01(0xfe)]([_0x1ede01(0xda),_0x1ede01(0xe2)],function(){var _0x56d692=_0x1ede01;currentDlg=SP['UI'][_0x56d692(0x86)]['showWaitScreenWithNoClose'](_0x4fdb9e,_0x4442ee,_0xef7d4e,_0x4fcb23);}),setTimeout(function(){UpdateGpMember(_0x431fe3,_0x4b9d3f,_0x431fe3);},0x64);},'error':function(_0x49495b){var _0x295a64=_0x3021d9;console[_0x295a64(0xb8)](JSON['stringify'](_0x49495b));}});}}function UpdateGpMember(_0x3dd230,_0x511f42,_0x3dd230){var _0x199776=a0_0x2a352a,_0x3b84bf=$(_0x199776(0xbd)+_0x3dd230)[_0x199776(0x92)](),_0x2c0660=[],_0x311ef2=[],_0x417925=[];_0x2c0660=getPeopleUserMyGroup(_0x199776(0x11c)+_0x3dd230);if(_0x2c0660[_0x199776(0x9a)]==0x0)_0x2c0660[_0x199776(0xb9)](0x0);else for(var _0x1109ec=0x0;_0x1109ec<_0x2c0660[_0x199776(0x9a)];_0x1109ec++){var _0x1d48aa=_spPageContextInfo[_0x199776(0x11a)]+_0x199776(0xab)+_0x2c0660[_0x1109ec]+'\x27';$[_0x199776(0x108)]({'url':_0x1d48aa,'type':_0x199776(0xcb),'async':![],'headers':{'ACCEPT':_0x199776(0xc5)},'success':function(_0x1cde08){var _0x30d85f=_0x199776,_0x1249b9=_0x1cde08['d'][_0x30d85f(0xdb)];if(_0x1249b9[_0x30d85f(0x9a)]>0x0){if(_0x1249b9[0x0][_0x30d85f(0xc3)]==_0x30d85f(0x98)&&_0x1249b9[0x0][_0x30d85f(0x84)]==_0x30d85f(0xf0)){}else{var _0x571c86=_0x30d85f(0x118)+_0x2c0660[_0x1109ec]+'\x27\x20and\x20Status\x20eq\x20\x27Active\x27&$top=5000';url=_spPageContextInfo[_0x30d85f(0x11a)]+_0x30d85f(0x9c)+_0x571c86,$[_0x30d85f(0x108)]({'url':url,'type':_0x30d85f(0xcb),'async':![],'headers':{'ACCEPT':'application/json;odata=verbose'},'success':function(_0x32b396){var _0xddef6e=_0x30d85f,_0x8ebc21=_0x32b396['d']['results'];if(_0x8ebc21[_0xddef6e(0x9a)]>0x0){}else{_0x417925[_0xddef6e(0xb9)](_0x2c0660[_0x1109ec]);var _0x4591ea=_0x1249b9[0x0][_0xddef6e(0x10c)][_0xddef6e(0x9e)]+'\x20'+_0x1249b9[0x0][_0xddef6e(0x10c)]['LastName'];_0x311ef2[_0xddef6e(0xb9)](_0x4591ea);}},'error':function(){alert('Error\x20getting\x20the\x20Employee\x20status.');}});}}else{var _0x571c86=_0x30d85f(0x118)+_0x2c0660[_0x1109ec]+_0x30d85f(0xae);url=_spPageContextInfo[_0x30d85f(0x11a)]+'/_api/web/lists/getbytitle(\x27ExternalUsers\x27)/items/'+_0x571c86,$[_0x30d85f(0x108)]({'url':url,'type':_0x30d85f(0xcb),'async':![],'headers':{'ACCEPT':_0x30d85f(0xc5)},'success':function(_0x53e53d){var _0x493515=_0x30d85f,_0x284264=_0x53e53d['d'][_0x493515(0xdb)];if(_0x284264[_0x493515(0x9a)]>0x0){}else _0x417925[_0x493515(0xb9)](_0x2c0660[_0x1109ec]),_0x311ef2[_0x493515(0xb9)](SharedUserName[_0x1109ec]);},'error':function(){var _0x19df16=_0x30d85f;alert(_0x19df16(0xf1));}});}$('.increase_effect')['removeClass']('activingss');},'error':function(){var _0x1292ab=_0x199776;alert(_0x1292ab(0xf1));}});}_0x2c0660=_0x2c0660[_0x199776(0x10e)](function(_0x2e64ed){var _0x4c694e=_0x199776;return _0x417925[_0x4c694e(0xc0)](_0x2e64ed)<0x0;}),_0x511f42=_0x511f42[_0x199776(0xd8)](_0x2c0660),_0x511f42=_0x511f42[_0x199776(0x10e)](function(_0x4cdb31,_0x17bb7d){var _0x166a56=_0x199776;return _0x511f42[_0x166a56(0xc0)](_0x4cdb31)==_0x17bb7d;});var _0x55f2a6,_0x272d31=GetItemTypeForListNameDetails('ApproversGroups');_0x55f2a6={'__metadata':{'type':_0x272d31},'ApproversId':{'results':_0x511f42}},updateUserWithIDGroup(_0x199776(0x96),_0x55f2a6,_0x3b84bf,_0x311ef2,_0x3dd230);var _0x1d5065=_0x199776(0x11c)+_0x3dd230;resetPeoplePicker(_0x1d5065);}function SetPeoplePicker_MultiselectGroups1(_0x49afa7,_0x1339d0){var _0x4b841d=a0_0x2a352a;_0x1339d0==null&&(_0x1339d0=![]);var _0x35b136={};_0x35b136[_0x4b841d(0xf8)]=_0x4b841d(0xd6),_0x35b136[_0x4b841d(0x75)]=0xf,_0x35b136[_0x4b841d(0x71)]=0xf,_0x35b136['AllowMultipleValues']=_0x1339d0,_0x35b136['MaximumEntitySuggestions']=0x32,_0x35b136[_0x4b841d(0x85)]=_0x4b841d(0x104),SPClientPeoplePicker_InitStandaloneControlWrapper(_0x49afa7,null,_0x35b136);}var DynamicId='',grpIndex='',flag1=!![];function toggleClass(_0xa63097,_0xc754d0){var _0x859aaf=a0_0x2a352a;DynamicId=_0x859aaf(0x11c)+_0xc754d0+_0x859aaf(0xc9),grpIndex=_0xc754d0,$(_0x859aaf(0x101)+_0xc754d0)['toggleClass'](_0x859aaf(0xc1)),$(_0x859aaf(0xb6)+_0xc754d0)[_0x859aaf(0x8b)](_0x859aaf(0xc1)),onChangeSharing1();}function onChangeSharing1(){var _0x263f9c=a0_0x2a352a,_0x1ea7a2=SPClientPeoplePicker[_0x263f9c(0xfc)][DynamicId],_0x255684='';_0x1ea7a2[_0x263f9c(0xf9)]=function(_0x10eea4,_0x2d6606){var _0x59c981=_0x263f9c;_0x2d6606[_0x59c981(0x9a)]>0x0&&getSelectedUsers(grpIndex);};}function updateSpecificGroup(_0x2ad0a7){var _0x59c38b=a0_0x2a352a,_0x3b599b=$(_0x59c38b(0xbd)+_0x2ad0a7)['text'](),_0x15548d=[],_0x3cc3bf=_spPageContextInfo[_0x59c38b(0x11a)]+_0x59c38b(0xe5)+_0x3b599b+'\x27';$[_0x59c38b(0x108)]({'url':_0x3cc3bf,'method':_0x59c38b(0xcb),'headers':{'Accept':_0x59c38b(0xe0)},'async':!![],'success':function(_0x127037){var _0x106b7d=_0x59c38b,_0x2ea47e=_0x127037;console[_0x106b7d(0xb8)](_0x127037),$(_0x106b7d(0x8d))[_0x106b7d(0x90)](''),$(_0x106b7d(0x83))[_0x106b7d(0x90)]('');for(var _0x53e3e9=0x0;_0x53e3e9<_0x2ea47e['d'][_0x106b7d(0xdb)][_0x106b7d(0x9a)];_0x53e3e9++){if(_0x53e3e9!=0x0){}var _0x3f3974=_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9][_0x106b7d(0xa8)],_0x335b16=_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9]['ID'],_0x43d7f0='';if(_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9][_0x106b7d(0x10a)][_0x106b7d(0xdb)]!=null)for(var _0x1306a8=0x0;_0x1306a8<_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9][_0x106b7d(0x10a)][_0x106b7d(0xdb)][_0x106b7d(0x9a)];_0x1306a8++){var _0x98f738=_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9]['Approvers'][_0x106b7d(0xdb)][_0x1306a8]['EMail'],_0x4ff3ea=_0x2ea47e['d'][_0x106b7d(0xdb)][_0x53e3e9]['Approvers'][_0x106b7d(0xdb)][_0x1306a8]['ID'];if(_0x98f738!=null&&_0x98f738!=''){var _0x3bbfcb='?$select=Id,Title,PrimaryCompany,AttachmentFiles,Status,FullName,Designation,LogonName/EMail,LogonName/FirstName,LogonName/LastName,Company/Id,Company/Title,Department/Title,Designation&$expand=LogonName,AttachmentFiles,Company,Department&$top=5000&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20PrimaryCompany\x20eq\x20\x27Primary\x27\x20and\x20LogonName/EMail\x20eq\x20\x27'+_0x98f738+'\x27\x20';$[_0x106b7d(0x94)](getItemsWithQueryItems(_0x106b7d(0xa3),_0x3bbfcb))['done'](function(_0x1becba){var _0x3b91cc=_0x106b7d;UResults=_0x1becba['results'];var _0x1c7860=UResults[0x0];if(UResults['length']>0x0)_0x1c7860[_0x3b91cc(0x93)][_0x3b91cc(0xdb)][_0x3b91cc(0x9a)]>0x0?attachmentUrl=_0x1c7860['AttachmentFiles']['results'][0x0][_0x3b91cc(0xb0)]:attachmentUrl=_spPageContextInfo[_0x3b91cc(0x11a)]+_0x3b91cc(0x10b)+escapeProperly(_0x1c7860[_0x3b91cc(0x10c)][_0x3b91cc(0x80)]),_0x43d7f0+='<div\x20class=\x22col-md-4\x20col-sm-6\x20col-xs-12\x22><div\x20class=\x22groups-card\x22><div\x20class=\x22groups-card-head\x22><img\x20src='+attachmentUrl+_0x3b91cc(0x8e),_0x43d7f0+=_0x3b91cc(0xa1)+_0x1c7860[_0x3b91cc(0x111)]+_0x3b91cc(0xee),_0x43d7f0+='<p\x20class=\x22member-deg\x20text-ellipsis\x22><span>'+_0x1c7860['Designation']+_0x3b91cc(0xba)+_0x1c7860[_0x3b91cc(0x76)][_0x3b91cc(0xa8)]+_0x3b91cc(0xb5),_0x43d7f0+=_0x3b91cc(0xd0)+_0x98f738+'\x22>'+_0x98f738+_0x3b91cc(0x87),_0x43d7f0+=_0x3b91cc(0xd9)+_0x4ff3ea+',\x20'+_0x2ad0a7+_0x3b91cc(0x119),_0x43d7f0+=_0x3b91cc(0x81);else{var _0x5163d0='?$select=AttachmentFiles,LoginName/EMail,email,LoginName/Title,LoginName/Id,Designation,Client_Name/Title&$expand=AttachmentFiles,LoginName,Client_Name&$filter=email\x20eq\x20\x27'+_0x98f738+'\x27&$top=5000';$[_0x3b91cc(0x94)](getItemsWithQueryItems(_0x3b91cc(0xb4),_0x5163d0))['done'](function(_0xe86a0b){var _0x2fd6b9=_0x3b91cc;UResults=_0xe86a0b['results'];var _0x51d097=UResults[0x0];UResults['length']>0x0&&(_0x51d097[_0x2fd6b9(0x93)][_0x2fd6b9(0xdb)][_0x2fd6b9(0x9a)]>0x0?attachmentUrl=_0x51d097[_0x2fd6b9(0x93)][_0x2fd6b9(0xdb)][0x0][_0x2fd6b9(0xb0)]:attachmentUrl=_spPageContextInfo[_0x2fd6b9(0x11a)]+_0x2fd6b9(0x10b)+escapeProperly(_0x51d097[_0x2fd6b9(0xb7)]),_0x43d7f0+=_0x2fd6b9(0x7a)+attachmentUrl+_0x2fd6b9(0x8e),_0x43d7f0+=_0x2fd6b9(0xa1)+_0x51d097[_0x2fd6b9(0x95)][_0x2fd6b9(0xa8)]+_0x2fd6b9(0x113),_0x43d7f0+=_0x2fd6b9(0xc2)+_0x51d097[_0x2fd6b9(0xa0)]+'</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>'+_0x51d097[_0x2fd6b9(0xb3)]['Title']+'</span></p>',_0x43d7f0+=_0x2fd6b9(0xd0)+_0x98f738+'\x22>'+_0x98f738+_0x2fd6b9(0x87),_0x43d7f0+='<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp('+_0x4ff3ea+',\x20'+_0x2ad0a7+_0x2fd6b9(0x119),_0x43d7f0+=_0x2fd6b9(0x81));});}});}}_0x43d7f0+=_0x106b7d(0xc7),$(_0x106b7d(0xf3)+_0x2ad0a7)[_0x106b7d(0x90)](_0x43d7f0);var _0xf5c625='newPeoplePickerControl'+_0x53e3e9;}currentDlg!=''&&currentDlg['close']();},'error':function(_0x2eb59e){var _0x1a45c5=_0x59c38b;console[_0x1a45c5(0xb8)](JSON['stringify'](_0x2eb59e));}});}function resetPeoplePicker(_0x190ca2){var _0x138fb2=a0_0x2a352a,_0x5c0b32=this[_0x138fb2(0xd5)]['SPClientPeoplePickerDict'][_0x190ca2+_0x138fb2(0xc9)],_0x162a5c=_0x5c0b32[_0x138fb2(0x117)]();_0x162a5c['forEach'](function(_0x95078a){var _0x1564c0=_0x138fb2;_0x5c0b32[_0x1564c0(0xfb)](_0x162a5c[_0x95078a]);});}function hidePeoplePickers(_0x7cf9fa){var _0x6cc4a5=a0_0x2a352a;$(_0x6cc4a5(0xb6))[_0x6cc4a5(0xe3)](_0x6cc4a5(0xc1)),console[_0x6cc4a5(0xb8)]();var _0x4018b3=$('#idForUpdate'+_0x7cf9fa)[_0x6cc4a5(0x90)]()[_0x6cc4a5(0x9a)];if(_0x4018b3>0x0)return![];var _0x25b941='',_0xba69f7=arrUsers[_0x6cc4a5(0x10e)](function(_0x3c470d){return _0x3c470d['ID']==_0x7cf9fa;});if(_0xba69f7[0x0][_0x6cc4a5(0x7c)]!=undefined)for(var _0x3210d8=0x0;_0x3210d8<_0xba69f7[0x0][_0x6cc4a5(0x7c)][_0x6cc4a5(0x9a)];_0x3210d8++){var _0x494ace=_0xba69f7[0x0][_0x6cc4a5(0x7c)][_0x3210d8][_0x6cc4a5(0x80)],_0x3656bd=_0xba69f7[0x0][_0x6cc4a5(0x7c)][_0x3210d8]['ID'];if(_0x494ace!=null&&_0x494ace!=''){var _0x46507e='?$select=Id,Title,PrimaryCompany,AttachmentFiles,Status,FullName,Designation,LogonName/EMail,LogonName/FirstName,LogonName/LastName,Company/Id,Company/Title,Department/Title,Designation&$expand=LogonName,AttachmentFiles,Company,Department&$top=5000&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20PrimaryCompany\x20eq\x20\x27Primary\x27\x20and\x20LogonName/EMail\x20eq\x20\x27'+_0x494ace+'\x27\x20';$['when'](getItemsWithQueryItems(_0x6cc4a5(0xa3),_0x46507e))['done'](function(_0x122157){var _0x1637ae=_0x6cc4a5;UResults=_0x122157[_0x1637ae(0xdb)];var _0x3ede71=UResults[0x0];if(UResults[_0x1637ae(0x9a)]>0x0)_0x3ede71[_0x1637ae(0x93)][_0x1637ae(0xdb)][_0x1637ae(0x9a)]>0x0?attachmentUrl=_0x3ede71[_0x1637ae(0x93)][_0x1637ae(0xdb)][0x0][_0x1637ae(0xb0)]:attachmentUrl=_spPageContextInfo[_0x1637ae(0x11a)]+_0x1637ae(0x10b)+escapeProperly(_0x3ede71[_0x1637ae(0x10c)][_0x1637ae(0x80)]),_0x25b941+=_0x1637ae(0x7a)+attachmentUrl+'\x20alt=\x22user\x22></div>',_0x25b941+=_0x1637ae(0xa1)+_0x3ede71[_0x1637ae(0x111)]+_0x1637ae(0xee),_0x25b941+=_0x1637ae(0xc2)+_0x3ede71[_0x1637ae(0xa0)]+_0x1637ae(0xba)+_0x3ede71[_0x1637ae(0x76)][_0x1637ae(0xa8)]+_0x1637ae(0xb5),_0x25b941+=_0x1637ae(0xd0)+_0x494ace+'\x22>'+_0x494ace+_0x1637ae(0x87),_0x25b941+=_0x1637ae(0xd9)+_0x3656bd+',\x20'+_0x7cf9fa+');\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20remove-group-btn\x20remove-btn\x20close\x20close-round\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></button></div>',_0x25b941+=_0x1637ae(0x81);else{var _0x1508a6=_0x1637ae(0x99)+_0x494ace+_0x1637ae(0xf2);$[_0x1637ae(0x94)](getItemsWithQueryItems('ExternalUsers',_0x1508a6))['done'](function(_0x359b19){var _0x4fc5b7=_0x1637ae;UResults=_0x359b19[_0x4fc5b7(0xdb)];var _0x4c51ba=UResults[0x0];UResults[_0x4fc5b7(0x9a)]>0x0&&(_0x4c51ba[_0x4fc5b7(0x93)][_0x4fc5b7(0xdb)][_0x4fc5b7(0x9a)]>0x0?attachmentUrl=_0x4c51ba[_0x4fc5b7(0x93)][_0x4fc5b7(0xdb)][0x0][_0x4fc5b7(0xb0)]:attachmentUrl=_spPageContextInfo[_0x4fc5b7(0x11a)]+_0x4fc5b7(0x10b)+escapeProperly(_0x4c51ba[_0x4fc5b7(0xb7)]),_0x25b941+=_0x4fc5b7(0x7a)+attachmentUrl+'\x20alt=\x22user\x22></div>',_0x25b941+=_0x4fc5b7(0xa1)+_0x4c51ba[_0x4fc5b7(0x95)][_0x4fc5b7(0xa8)]+_0x4fc5b7(0x113),_0x25b941+=_0x4fc5b7(0xc2)+_0x4c51ba[_0x4fc5b7(0xa0)]+_0x4fc5b7(0xba)+_0x4c51ba['Client_Name'][_0x4fc5b7(0xa8)]+'</span></p>',_0x25b941+=_0x4fc5b7(0xd0)+_0x494ace+'\x22>'+_0x494ace+_0x4fc5b7(0x87),_0x25b941+=_0x4fc5b7(0xd9)+_0x3656bd+',\x20'+_0x7cf9fa+_0x4fc5b7(0x119),_0x25b941+=_0x4fc5b7(0x81));});}});}}$('#idForUpdate'+_0x7cf9fa)[_0x6cc4a5(0x90)](_0x25b941);}function getPeopleUserMyGroup(_0x2958a2){var _0x31965d=a0_0x2a352a;SharedUserName=[];var _0x276239=new Array(),_0x5179ac=$('[id^=\x27'+_0x2958a2+'\x27]'),_0x4d2fe2=SPClientPeoplePicker[_0x31965d(0xfc)][_0x5179ac[0x1]['id']],_0x22310d=_0x4d2fe2['GetAllUserInfo']();if(_0x22310d['length']>0x0){var _0x20f5fa=new Array(),_0x319f98=new Array();for(var _0x14e60a=0x0;_0x14e60a<_0x22310d[_0x31965d(0x9a)];_0x14e60a++){var _0x42add7=_0x22310d[_0x14e60a]['Key'],_0x323183=_0x22310d[_0x14e60a][_0x31965d(0xf7)];if(_0x323183==_0x31965d(0x78))_0x276239[_0x31965d(0xb9)](GetUserIdGroup(_0x22310d[_0x14e60a][_0x31965d(0xa9)])),SharedUserName[_0x31965d(0xb9)](_0x22310d[_0x14e60a][_0x31965d(0xcf)]);else{var _0x42add7=_0x22310d[_0x14e60a]['EntityData'][_0x31965d(0x9d)],_0x254533=new Array();_0x254533[_0x31965d(0xb9)](siteuser(_0x42add7));var _0x5714cc=_0x276239[_0x31965d(0xd8)][_0x31965d(0xcd)]([],_0x254533);_0x276239=_0x276239['concat'](_0x5714cc);}}}return _0x276239;}function GetUserIdGroup(_0x477ef4){var _0x14c3f9=a0_0x2a352a,_0x359248='',_0x1537a1=_0x14c3f9(0x11d),_0xad85b7=_spPageContextInfo[_0x14c3f9(0x89)],_0x440e3f=_0x477ef4;return $[_0x14c3f9(0x108)]({'url':_0xad85b7+_0x14c3f9(0xaa)+encodeURIComponent(_0x440e3f)+'\x27','method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x51abf6){_0x359248=_0x51abf6['d']['Id'];},'error':function(_0x4ed6f6){var _0x48f0a3=_0x14c3f9;console['log'](JSON[_0x48f0a3(0xc4)](_0x4ed6f6));}}),_0x359248;}function siteuser(_0x1f86a){var _0x4e78cf=a0_0x2a352a,_0x15ecd0=[];return $['ajax']({'url':_spPageContextInfo['webAbsoluteUrl']+_0x4e78cf(0xca)+_0x1f86a+_0x4e78cf(0xa7),'type':_0x4e78cf(0xcb),'async':![],'headers':{'Accept':'application/json;odata=verbose'},'success':function(_0x1e3c6e,_0x97fd3f,_0x1c00b7){var _0x195393=_0x4e78cf,_0x325a08=_0x1e3c6e['d'][_0x195393(0xdb)];for(var _0x39fa9d=0x0;_0x39fa9d<_0x325a08[_0x195393(0x9a)];_0x39fa9d++){_0x325a08=$[_0x195393(0x106)](_0x325a08,function(_0x41ebf8){var _0x4bfb53=_0x195393;return _0x41ebf8['Title']!==_0x4bfb53(0xd2);}),_0x325a08[_0x195393(0x9a)]>0x0&&_0x15ecd0['push'](GetUserIdGroups(_0x325a08[_0x39fa9d][_0x195393(0x95)]));}},'error':function(_0x34dfa7,_0x5c7cf9,_0x2b8eb5){var _0x5df6c6=_0x4e78cf;console[_0x5df6c6(0xb8)]('Failed');}}),_0x15ecd0;}function getItemsWithQueryItems(_0x19f4e5,_0x517e2f){var _0x4342e0=a0_0x2a352a;return DeferredObj=$['Deferred'](),$[_0x4342e0(0x108)]({'url':_spPageContextInfo[_0x4342e0(0x11a)]+_0x4342e0(0xec)+_0x19f4e5+_0x4342e0(0x8f)+_0x517e2f,'type':'GET','async':![],'headers':{'ACCEPT':_0x4342e0(0xc5),'X-RequestDigest':$(_0x4342e0(0x103))[_0x4342e0(0x8a)]()},'success':function(_0x5393e9){var _0x2d6912=_0x4342e0;DeferredObj[_0x2d6912(0xa6)](_0x5393e9['d']);},'error':function(_0xf41a9d){var _0x442f13=_0x4342e0;DeferredObj[_0x442f13(0xdf)](_0xf41a9d);}}),DeferredObj['promise']();}function a0_0xec52(_0x5c30ac,_0x4ebbf7){var _0x2c9321=a0_0x2c93();return a0_0xec52=function(_0xec522a,_0x360f89){_0xec522a=_0xec522a-0x6f;var _0x32bb61=_0x2c9321[_0xec522a];return _0x32bb61;},a0_0xec52(_0x5c30ac,_0x4ebbf7);}function a0_0x2c93(){var _0x217b55=['<a\x20class=\x22panel-title-box\x20collapsed\x22\x20id=\x22GroupId','Primary','Error\x20getting\x20the\x20Employee\x20status.','\x27&$top=5000','#idForUpdate','810608rVZHYu',');\x22>\x20<i\x20class=\x22fa\x20fa-plus\x20tottglinbtn','charAt','EntityType','PrincipalAccountType','OnValueChangedClientScript','Deferred','DeleteProcessedUser','SPClientPeoplePickerDict','<label\x20style=\x22display:none;\x22\x20class=\x22itemIDClass','loadMultiple','promise',',\x20\x27','.tottglinbtn','Updating\x20groups...','#__REQUESTDIGEST','321px','/_api/web/lists/getbytitle(\x27ApproversGroups\x27)/items?$select=ID,Approvers/ID,Approvers/Title,Approvers/EMail,Title&$expand=Approvers&$orderby=ID\x20asc','grep','suggestion_span','ajax','115hLbgwy','Approvers','/_layouts/15/userphoto.aspx?accountname=','LogonName','#GroupId','filter','remove','<div\x20id=\x22group','FullName','aria-expanded','\x20</h3>','panel-collapse\x20collapse\x20in','Kindly\x20enter\x20group\x20name.','trim','GetAllUserInfo','?$select=Status,LoginName/Id&$expand=LoginName&$filter=LoginName/Id\x20eq\x20\x27',');\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20remove-group-btn\x20remove-btn\x20close\x20close-round\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></button></div>','webAbsoluteUrl','addClass','newPeoplePickerControl','i:0#.f|membership|','toUpperCase','1nXLLIP','ResolvePrincipalSource','PATCH','#group','append','SearchPrincipalSource','Department','\x22\x20type=\x22button\x22\x20onclick=\x22toggleClass(this\x20,','User','<div\x20class=\x22addeventcircle\x22>\x20<button\x20class=\x22btn\x20custom-btn\x20tottglinbtn','<div\x20class=\x22col-md-4\x20col-sm-6\x20col-xs-12\x22><div\x20class=\x22groups-card\x22><div\x20class=\x22groups-card-head\x22><img\x20src=','Deleting\x20group...','Users','<br\x20/>Please\x20wait!!','slice','#btnAddNewGroup','EMail','</div></div></div>','Do\x20you\x20want\x20to\x20delete\x20the\x20\x27','#myTable\x20tbody\x20tr','PrimaryCompany','Width','ModalDialog','</a></p></div>','ListItem','siteAbsoluteUrl','val','toggleClass','\x22\x20onclick=\x22hidePeoplePickers(','#thbodyControl','\x20alt=\x22user\x22></div>','\x27)/items/','html','join','text','AttachmentFiles','when','LoginName','ApproversGroups','5512168oGEvVk','Active','?$select=AttachmentFiles,LoginName/EMail,email,LoginName/Title,LoginName/Id,Designation,Client_Name/Title&$expand=AttachmentFiles,LoginName,Client_Name&$filter=email\x20eq\x20\x27','length','attr','/_api/web/lists/getbytitle(\x27ExternalUsers\x27)/items/','SPGroupID','FirstName','565192kzchSD','Designation','<div\x20class=\x22groups-card-body\x22><div\x20class=\x22groups-card-body-info\x20text-ellipsis\x22><h3\x20class=\x22member-name\x20text-ellipsis\x22>','4224IHThQb','Employees','true','\x22\x20class=\x22form-control\x20increase_effect\x20increase_effect','resolve',')/users','Title','Key','/_api/web/siteusers(@v)?@v=\x27','/_api/lists/getbytitle(\x27Employees\x27)/items?$select=LogonName/ID,LogonName/FirstName,LogonName/LastName,Department/DepartmentName,*&$Expand=LogonName,AttachmentFiles,Department&$Filter=LogonName/ID\x20eq\x20\x27','click','\x22\x20aria-expanded=\x22false\x22>','\x27\x20and\x20Status\x20eq\x20\x27Active\x27&$top=5000','toLowerCase','ServerRelativeUrl','#txtGrpName','7uGluXo','Client_Name','ExternalUsers','</span></p>','.increase_effect','email','log','push','</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>','split','3205368UoITDo','.itemIDClass','\x27\x20group?','\x22></span>\x20\x20</div>','indexOf','activingss','<p\x20class=\x22member-deg\x20text-ellipsis\x22><span>','Status','stringify','application/json;odata=verbose','Do\x20you\x20want\x20to\x20delete\x20this\x20user?','</div>','\x22\x20class=\x22panel-collapse\x20collapse\x22\x20aria-expanded=\x22false\x22><div\x20class=\x22panel-body\x22><div\x20class=\x22row\x20group-inner-scroll\x20scrollbar-panel\x22\x20id=\x22idForUpdate','_TopSpan','/_api/web/sitegroups/getbyid(','GET','\x20user\x20is\x20not\x20valid!','apply','719800XJqXrU','DisplayText','<p\x20class=\x22member-email\x20text-ellipsis\x22><a\x20href=\x22mailto:','SOD','System\x20Account','collapsed','SP.Data.','SPClientPeoplePicker','User,SPGroup','ready','concat','<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp(','strings.js','results','</label><span\x20class=\x22groupName0\x22\x20style=\x22color:\x20black;\x22>','<div\x20class=\x22panel\x20panel-default\x20addGrpUser\x22><div\x20class=\x22panel-heading\x20custom-panel-heading\x22><h4\x20class=\x22panel-title\x22>','POST','reject','application/json;\x20odata=verbose','Add','sp.ui.dialog.js','removeClass','\x20users\x20are\x20not\x20valid!','/_api/web/lists/getbytitle(\x27ApproversGroups\x27)/items?$select=ID,Approvers/ID,Approvers/Title,Approvers/EMail,Title&$expand=Approvers&$orderby=ID\x20asc&$filter=ID\x20eq\x20\x27','Duplicate\x20group\x20name!','\x22\x20></i>\x20</button><span\x20id=\x22newPeoplePickerControl','close','#accordGroup','/_api/Web/Lists/getByTitle(\x27','1815987bWcIkw','/_api/web/lists/getbytitle(\x27','</span><div\x20class=\x22remove-group-btn-box\x22><button\x20type=\x22button\x22\x20class=\x22remove_groupsec\x22\x20onclick=\x22DeleteGroup(','</h3>'];a0_0x2c93=function(){return _0x217b55;};return a0_0x2c93();};