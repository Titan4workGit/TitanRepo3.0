(function(_0x2d8637,_0x105892){var _0x8a9b38=a0_0x2bce,_0x333e56=_0x2d8637();while(!![]){try{var _0x564eb0=parseInt(_0x8a9b38(0x218))/0x1+parseInt(_0x8a9b38(0x19a))/0x2*(parseInt(_0x8a9b38(0x211))/0x3)+-parseInt(_0x8a9b38(0x187))/0x4*(parseInt(_0x8a9b38(0x1f4))/0x5)+-parseInt(_0x8a9b38(0x203))/0x6*(parseInt(_0x8a9b38(0x172))/0x7)+parseInt(_0x8a9b38(0x18a))/0x8*(-parseInt(_0x8a9b38(0x216))/0x9)+parseInt(_0x8a9b38(0x21d))/0xa*(-parseInt(_0x8a9b38(0x1f8))/0xb)+parseInt(_0x8a9b38(0x1c8))/0xc;if(_0x564eb0===_0x105892)break;else _0x333e56['push'](_0x333e56['shift']());}catch(_0x4b805c){_0x333e56['push'](_0x333e56['shift']());}}}(a0_0x3051,0x93e97));var GCompanyId='',GOfficeDays='';$(document)['ready'](function(){var _0x334e42=a0_0x2bce;userActivityNotificationEntry(_spPageContextInfo['userId'],window[_0x334e42(0x18d)]),authentication(),GCompanyId=titanForWork[_0x334e42(0x177)](_0x334e42(0x1fb)),$(_0x334e42(0x202))[_0x334e42(0x161)]({'dateFormat':_0x334e42(0x219),'maxDate':new Date()})[_0x334e42(0x161)](_0x334e42(0x1fc),new Date()),$(_0x334e42(0x1d6))[_0x334e42(0x161)]({'dateFormat':'dd/mm/yy'})['datepicker'](_0x334e42(0x1fc),_0x334e42(0x193)),$(_0x334e42(0x1e0))[_0x334e42(0x19e)](formatDateReport(ConvertDateTimeFormat($(_0x334e42(0x1d6))[_0x334e42(0x1b9)](),'/'))),$('#ToDate')[_0x334e42(0x19e)](formatDateReport(ConvertDateTimeFormat($('#attendance-reportTo')[_0x334e42(0x1b9)](),'/')));var _0x3605cd=$(_0x334e42(0x1d6))[_0x334e42(0x161)](_0x334e42(0x214)),_0x508a26=$(_0x334e42(0x202))[_0x334e42(0x161)](_0x334e42(0x214));days=(_0x508a26-_0x3605cd)/(0x3e8*0x3c*0x3c*0x18);var _0x443acd=Math[_0x334e42(0x1df)](days);GOfficeDays=Math[_0x334e42(0x1df)](days),LoadAllOfficeLocation(),LoadAllDepartment(),LoadAllHolidays(),$(_0x334e42(0x1a9))['text']($(_0x334e42(0x1a0))[_0x334e42(0x19e)]()),initializePeoplePicker('Manager'),initializePeoplePicker(_0x334e42(0x196)),$('#attendance-report-filter')[_0x334e42(0x180)](_0x334e42(0x1a3));});function initializePeoplePicker(_0x4e54b8){var _0x42affa=a0_0x2bce,_0x45c4de={};_0x45c4de[_0x42affa(0x15b)]=_0x42affa(0x205),_0x45c4de[_0x42affa(0x1fd)]=0xf,_0x45c4de[_0x42affa(0x222)]=0xf,_0x45c4de['AllowMultipleValues']=![],_0x45c4de[_0x42affa(0x1a2)]=0x32,_0x45c4de[_0x42affa(0x1f2)]=_0x42affa(0x228),this['SPClientPeoplePicker_InitStandaloneControlWrapper'](_0x4e54b8,null,_0x45c4de);}function ensureUser(_0x32f463){var _0x29437d=a0_0x2bce,_0x3dc94e=0x0,_0x3822c8=_0x32f463,_0x84bca2=this[_0x29437d(0x21e)][_0x29437d(0x1ca)][_0x3822c8],_0x5dde86=_0x84bca2[_0x29437d(0x213)](),_0x40f213=_0x5dde86[0x0];if(_0x40f213){var _0x3377bb={'logonName':_0x40f213[_0x29437d(0x170)]};$[_0x29437d(0x168)]({'url':_spPageContextInfo[_0x29437d(0x1b4)]+_0x29437d(0x17e),'type':_0x29437d(0x18f),'async':![],'contentType':_0x29437d(0x1d0),'data':JSON[_0x29437d(0x1de)](_0x3377bb),'headers':{'X-RequestDigest':$(_0x29437d(0x1f3))[_0x29437d(0x1b9)](),'accept':_0x29437d(0x1d0)},'success':function(_0x552793,_0x5d72d2,_0x17cb55){_0x3dc94e=_0x552793['d']['Id'];},'error':function(_0x25ebcb,_0x5a4f90,_0x1af848){}});}else _0x3dc94e=0x0;return _0x3dc94e;}function GetUserTitle(_0xa03f39){var _0x246d84=a0_0x2bce,_0x489640=0x0,_0x3da0e5=_0xa03f39,_0x40ee2a=this['SPClientPeoplePicker'][_0x246d84(0x1ca)][_0x3da0e5],_0x35dccd=_0x40ee2a[_0x246d84(0x213)](),_0x1dfaf8=_0x35dccd[0x0];if(_0x1dfaf8){var _0x1fe0e0={'logonName':_0x1dfaf8[_0x246d84(0x170)]};$[_0x246d84(0x168)]({'url':_spPageContextInfo[_0x246d84(0x1b4)]+_0x246d84(0x17e),'type':'POST','async':![],'contentType':_0x246d84(0x1d0),'data':JSON[_0x246d84(0x1de)](_0x1fe0e0),'headers':{'X-RequestDigest':$(_0x246d84(0x1f3))[_0x246d84(0x1b9)](),'accept':_0x246d84(0x1d0)},'success':function(_0x74589,_0x31b840,_0x2a901c){var _0x20f40a=_0x246d84;_0x489640=_0x74589['d'][_0x20f40a(0x189)];},'error':function(_0x14ed6c,_0x5e23c8,_0x5d5a63){}});}else _0x489640=0x0;return _0x489640;}function ConvertDateTimeFormat(_0x37cacb,_0x475c15){var _0x4cc573=a0_0x2bce;return _0x37cacb[_0x4cc573(0x223)](_0x475c15)[0x1]+''+_0x475c15+''+_0x37cacb[_0x4cc573(0x223)](_0x475c15)[0x0]+''+_0x475c15+''+_0x37cacb[_0x4cc573(0x223)](_0x475c15)[0x2];}function formatDateReport(_0xac09c0){var _0x344779=a0_0x2bce,_0x30e7f3=new Date(_0xac09c0);if(isNaN(_0x30e7f3[_0x344779(0x163)]()))return _0xac09c0;else{var _0xf6b34a=new Array();return _0xf6b34a[0x0]=_0x344779(0x1a7),_0xf6b34a[0x1]='Feb',_0xf6b34a[0x2]=_0x344779(0x191),_0xf6b34a[0x3]='Apr',_0xf6b34a[0x4]=_0x344779(0x20e),_0xf6b34a[0x5]=_0x344779(0x20c),_0xf6b34a[0x6]=_0x344779(0x174),_0xf6b34a[0x7]=_0x344779(0x20d),_0xf6b34a[0x8]=_0x344779(0x18b),_0xf6b34a[0x9]='Oct',_0xf6b34a[0xa]='Nov',_0xf6b34a[0xb]='Dec',day=_0x30e7f3[_0x344779(0x214)](),day<0xa&&(day='0'+day),day+'\x20'+_0xf6b34a[_0x30e7f3[_0x344779(0x16d)]()]+'\x20'+_0x30e7f3[_0x344779(0x17f)]();}}function LoadAllOfficeLocation(){var _0x544195=a0_0x2bce;$(_0x544195(0x1cc))[_0x544195(0x1d4)]();var _0x78635d=_spPageContextInfo[_0x544195(0x1b4)]+_0x544195(0x224)+GCompanyId+_0x544195(0x1b8);$[_0x544195(0x168)]({'url':_0x78635d,'headers':{'Accept':_0x544195(0x1d0)},'async':![],'success':function(_0x3f4692){var _0x4e789c=_0x544195;for(var _0x2b71f6=0x0;_0x2b71f6<_0x3f4692['d'][_0x4e789c(0x1ec)][_0x4e789c(0x19d)];_0x2b71f6++){$('#OfficeLoc')[_0x4e789c(0x1ad)](_0x4e789c(0x1ba)+_0x3f4692['d'][_0x4e789c(0x1ec)][_0x2b71f6]['ID']+'\x22>'+_0x3f4692['d'][_0x4e789c(0x1ec)][_0x2b71f6]['OfficeName']+_0x4e789c(0x1c2));}},'myError':function(_0x2b500c){}});}function LoadAllDepartment(){var _0x1f9726=a0_0x2bce;$(_0x1f9726(0x16b))[_0x1f9726(0x1d4)]();var _0x222a50=_spPageContextInfo[_0x1f9726(0x1b4)]+'/_api/web/lists/getbytitle(\x27Departments\x27)/items?select=ID,Title&$filter=CompanyID\x20eq\x20\x27'+GCompanyId+_0x1f9726(0x215);$['ajax']({'url':_0x222a50,'headers':{'Accept':_0x1f9726(0x1d0)},'async':!![],'success':function(_0x58fe06){var _0x42a4a2=_0x1f9726;$(_0x42a4a2(0x16c))[_0x42a4a2(0x1f1)](_0x42a4a2(0x16b));for(var _0x1b473b=0x0;_0x1b473b<_0x58fe06['d'][_0x42a4a2(0x1ec)][_0x42a4a2(0x19d)];_0x1b473b++){$('#DepartmentDDL')[_0x42a4a2(0x1ad)](_0x42a4a2(0x1ba)+_0x58fe06['d'][_0x42a4a2(0x1ec)][_0x1b473b]['ID']+'\x22>'+_0x58fe06['d'][_0x42a4a2(0x1ec)][_0x1b473b][_0x42a4a2(0x189)]+'</option>');}},'myError':function(_0x1335f9){}});}var TotalOfficeDays=0x0,GtotalHolidays=0x0;function LoadAllHolidays(){var _0x1d47a9=a0_0x2bce,_0x5da714=$(_0x1d47a9(0x1cc))['val']();TotalOfficeDays=0x0,GtotalHolidays=0x0;var _0x42d26d=new Date(ConvertDateTimeFormat($(_0x1d47a9(0x1d6))['val'](),'/')),_0x175b6a=_0x42d26d['getFullYear']()+'-'+(_0x42d26d[_0x1d47a9(0x16d)]()+0x1)+'-'+_0x42d26d['getDate'](),_0x3243a4=new Date(ConvertDateTimeFormat($(_0x1d47a9(0x202))['val'](),'/')),_0x17c83e=_0x3243a4[_0x1d47a9(0x17f)]()+'-'+(_0x3243a4[_0x1d47a9(0x16d)]()+0x1)+'-'+_0x3243a4[_0x1d47a9(0x214)](),_0x2d1f5a=_spPageContextInfo[_0x1d47a9(0x1b4)]+_0x1d47a9(0x178)+_0x5da714+_0x1d47a9(0x1b2)+GCompanyId+_0x1d47a9(0x1e8)+_0x175b6a+_0x1d47a9(0x162)+_0x17c83e+'\x27';$[_0x1d47a9(0x168)]({'url':_0x2d1f5a,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x4bd7f9){var _0x292659=_0x1d47a9,_0x923ee3=_0x4bd7f9['d'][_0x292659(0x1ec)][_0x292659(0x19d)];GtotalHolidays=_0x923ee3,$(_0x292659(0x208))[_0x292659(0x19e)](_0x923ee3),$('#TotalOfficeDays')[_0x292659(0x19e)](parseInt(GOfficeDays)-parseInt(_0x923ee3)),TotalOfficeDays=parseInt(GOfficeDays)-parseInt(_0x923ee3);},'myError':function(_0x1a8af1){}});}function Applyfilter(){var _0x661c99=a0_0x2bce;$('#FromDate')[_0x661c99(0x19e)](formatDateReport(ConvertDateTimeFormat($(_0x661c99(0x1d6))[_0x661c99(0x1b9)](),'/'))),$('#ToDate')[_0x661c99(0x19e)](formatDateReport(ConvertDateTimeFormat($('#attendance-reportTo')['val'](),'/'))),$(_0x661c99(0x1a9))[_0x661c99(0x19e)]($('#OfficeLoc\x20option:selected')[_0x661c99(0x19e)]()),$('#FdateTH')['text'](formatDateReport(ConvertDateTimeFormat($(_0x661c99(0x1d6))['val'](),'/'))),$(_0x661c99(0x21a))['text'](formatDateReport(ConvertDateTimeFormat($(_0x661c99(0x202))[_0x661c99(0x1b9)](),'/'))),$(_0x661c99(0x206))['text']($(_0x661c99(0x1a0))[_0x661c99(0x19e)]()),$(_0x661c99(0x16f))[_0x661c99(0x19e)](TotalOfficeDays),$('#HolidaysTH')[_0x661c99(0x19e)](GtotalHolidays);var _0x36ad1f=$(_0x661c99(0x1d6))['datepicker'](_0x661c99(0x214)),_0x305035=$('#attendance-reportTo')[_0x661c99(0x161)](_0x661c99(0x214));days=(_0x305035-_0x36ad1f)/(0x3e8*0x3c*0x3c*0x18),GOfficeDays=Math['round'](days)+0x1,LoadAllHolidays(),$(_0x661c99(0x217))[_0x661c99(0x1b9)]('');var _0x2406b1=$('#attendance-reportFrom')[_0x661c99(0x1b9)](),_0x4db096=moment($(_0x661c99(0x1d6))[_0x661c99(0x1b9)](),'DD/MM/YYYY')[_0x661c99(0x207)](_0x661c99(0x181)),_0x57d157=moment($(_0x661c99(0x202))[_0x661c99(0x1b9)](),_0x661c99(0x17b))[_0x661c99(0x207)](_0x661c99(0x181));$(_0x661c99(0x1ff))[_0x661c99(0x19e)]($[_0x661c99(0x161)][_0x661c99(0x1a6)]('D,\x20dd',new Date(_0x4db096))),$(_0x661c99(0x1c0))[_0x661c99(0x19e)]($[_0x661c99(0x161)][_0x661c99(0x1a6)](_0x661c99(0x166),new Date(_0x4db096)));var _0x35765a='',_0x230b60='';$(_0x661c99(0x1cc))[_0x661c99(0x1b9)]()!='All'&&(_0x35765a+=_0x661c99(0x21f)+$('#OfficeLoc')[_0x661c99(0x1b9)]()+'\x27\x20',_0x230b60+='<div\x20class=\x27upload-chip\x27>'+$(_0x661c99(0x1a0))[_0x661c99(0x19e)]()+_0x661c99(0x185));$('#DepartmentDDL')[_0x661c99(0x1b9)]()!=_0x661c99(0x1ae)&&(_0x35765a+=_0x661c99(0x1e2)+$(_0x661c99(0x16b))['val']()+'\x27\x20',_0x230b60+=_0x661c99(0x1ed)+$(_0x661c99(0x1d7))[_0x661c99(0x19e)]()+_0x661c99(0x185));var _0x2eb884=ensureUser($(_0x661c99(0x1d9))[_0x661c99(0x16a)]()[_0x661c99(0x16a)]()[_0x661c99(0x1ee)]('id')),_0x1f54b6=ensureUser($(_0x661c99(0x1c6))[_0x661c99(0x16a)]()[_0x661c99(0x16a)]()[_0x661c99(0x1ee)]('id'));_0x2eb884!=0x0&&(_0x35765a+='and\x20ManagerLoginName\x20eq\x20\x27'+_0x2eb884+'\x27\x20',_0x230b60+=_0x661c99(0x1ed)+GetUserTitle($(_0x661c99(0x1d9))[_0x661c99(0x16a)]()['children']()['attr']('id'))+_0x661c99(0x185)),_0x1f54b6!=0x0&&(_0x35765a+=_0x661c99(0x1ef)+_0x1f54b6+'\x27\x20',_0x230b60+=_0x661c99(0x1ed)+GetUserTitle($(_0x661c99(0x1c6))['children']()[_0x661c99(0x16a)]()[_0x661c99(0x1ee)]('id'))+_0x661c99(0x185)),$(_0x661c99(0x167))[_0x661c99(0x1d4)](),$('#chips')[_0x661c99(0x1ad)](_0x230b60),$(_0x661c99(0x1a4))[_0x661c99(0x1ce)](),setTimeout(function(){var _0x2edabd=_0x661c99,_0x3a1a12=_spPageContextInfo[_0x2edabd(0x1b4)]+_0x2edabd(0x198)+_0x4db096+_0x2edabd(0x1c7)+_0x57d157+'\x27\x20';$['when'](getFileData(_0x3a1a12))[_0x2edabd(0x164)](function(_0x446608){var _0x5e7a4e=_0x2edabd,_0xac610=_spPageContextInfo[_0x5e7a4e(0x1b4)]+_0x5e7a4e(0x1d1)+GCompanyId+'\x27'+_0x35765a;EmployeeListDat(_0xac610),$(_0x5e7a4e(0x1a4))[_0x5e7a4e(0x1c3)]();});},0x5dc);}var TempStore=[],unique='';function getFileData(_0x145c82){var _0x5b772c=a0_0x2bce;jQuery['ajax']({'url':_0x145c82,'headers':{'Accept':_0x5b772c(0x1d0)},'async':![],'success':function(_0x4fcb29){var _0x28ad2e=_0x5b772c;EmpAttendanceData=[];var _0x42d9e8=_0x4fcb29['d'][_0x28ad2e(0x1ec)];if(_0x42d9e8[_0x28ad2e(0x19d)]>0x0){TempStore=[];for(var _0x1dbcf4=0x0;_0x1dbcf4<_0x42d9e8['length'];_0x1dbcf4++){TempStore[_0x28ad2e(0x227)](_0x42d9e8[_0x1dbcf4]['Employee']['ID']);}unique=TempStore['filter'](function(_0x28eb90,_0x55d3df,_0x37fbd5){return _0x55d3df==_0x37fbd5['indexOf'](_0x28eb90);});if(unique[_0x28ad2e(0x19d)]>0x0){EmpAttendanceData=[];for(var _0x53a6fa=0x0;_0x53a6fa<unique[_0x28ad2e(0x19d)];_0x53a6fa++){var _0x26bd9b=0x0,_0x3ba614=[],_0x5892ce=[],_0x3f2634=moment($(_0x28ad2e(0x1d6))[_0x28ad2e(0x1b9)](),'DD/MM/YYYY')[_0x28ad2e(0x207)](_0x28ad2e(0x181)),_0x1ee80b=moment($('#attendance-reportTo')[_0x28ad2e(0x1b9)](),_0x28ad2e(0x17b))[_0x28ad2e(0x207)](_0x28ad2e(0x181)),_0x2205ff=unique[_0x53a6fa],_0x245881=_spPageContextInfo[_0x28ad2e(0x1b4)]+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27'+_0x3f2634+_0x28ad2e(0x1c7)+_0x1ee80b+_0x28ad2e(0x173)+_0x2205ff+'\x27\x20';jQuery[_0x28ad2e(0x168)]({'url':_0x245881,'headers':{'Accept':_0x28ad2e(0x1d0)},'async':![],'success':function(_0x32c5e5){var _0x3c8708=_0x28ad2e,_0xb68ac8=_0x32c5e5['d'][_0x3c8708(0x1ec)];if(_0xb68ac8[_0x3c8708(0x19d)]>0x0){for(var _0x2f2a1f=0x0;_0x2f2a1f<_0xb68ac8[_0x3c8708(0x19d)];_0x2f2a1f++){var _0x5c5751=_0xb68ac8[_0x2f2a1f]['ID'],_0x189b67=_0xb68ac8[_0x2f2a1f][_0x3c8708(0x196)]['Title'],_0x326797=_0xb68ac8[_0x2f2a1f]['Employee']['ID'],_0x4a0f5a=_0xb68ac8[_0x2f2a1f]['AttendanceDate'],_0x3feb11=_0xb68ac8[_0x2f2a1f][_0x3c8708(0x1b5)];if(_0x3feb11==_0x3c8708(0x19b)||_0x3feb11==_0x3c8708(0x221)||_0x3feb11==_0x3c8708(0x1f7))_0x3ba614['push'](_0x3feb11);else _0x3feb11==_0x3c8708(0x1b3)&&_0x5892ce['push'](_0x3feb11);_0xb68ac8[_0x2f2a1f]['WorkHours']!=null&&(_0x26bd9b=parseInt(_0x26bd9b)+parseInt(_0xb68ac8[_0x2f2a1f][_0x3c8708(0x199)]));var _0x38144a=_0xb68ac8[_0x2f2a1f][_0x3c8708(0x200)],_0x23394c=parseInt(_0x3ba614[_0x3c8708(0x19d)])+parseInt(_0x5892ce['length']),_0x293f26=parseInt(TotalOfficeDays)-parseInt(_0x23394c);_0x293f26<0x0&&(_0x293f26=0x0);}var _0x451f2b=Math['round'](parseInt(_0x23394c)/parseInt(TotalOfficeDays)*0x64)+'%';TotalOfficeDays=='0'&&(_0x451f2b='-'),EmpAttendanceData[_0x3c8708(0x227)]({'UserId':_0x326797,'EmpName':_0x189b67,'AttendanceDate':_0x4a0f5a,'AttendanceType':_0x3feb11,'AttendanceItemId':_0x5c5751,'EmpWorkHours':_0x26bd9b,'HrAction':_0x38144a,'AttendancDays':_0x3ba614[_0x3c8708(0x19d)],'LeavesDay':_0x5892ce[_0x3c8708(0x19d)],'NotActionDays':_0x293f26,'percentage':_0x451f2b});}},'error':function(_0x2130cf,_0x39266f){console['log'](JSON['stringify'](_0x2130cf));}});}}}},'error':function(_0xffcc7,_0x4a5eca,_0x5de10a){var _0x5046f3=_0x5b772c;console[_0x5046f3(0x1fe)](_0x5046f3(0x1eb)),console[_0x5046f3(0x1fe)](_0xffcc7[_0x5046f3(0x1b1)][_0x5046f3(0x182)][_0x5046f3(0x21b)][_0x5046f3(0x194)]);var _0x3f2a9e=_0xffcc7[_0x5046f3(0x1b1)][_0x5046f3(0x182)][_0x5046f3(0x21b)]['value'],_0x4ab4e2=_0x3f2a9e[_0x5046f3(0x1fa)]('it\x20exceeds\x20the\x20list\x20view\x20threshold');_0x4ab4e2==!![]&&(AttendanceReportUsageData=[],AttendanceReportUsageUrl=_spPageContextInfo[_0x5046f3(0x1b4)]+_0x5046f3(0x1d8),ReadEmpReportUsageData());}});}function a0_0x2bce(_0xebc7f8,_0x4190ab){var _0x30512a=a0_0x3051();return a0_0x2bce=function(_0x2bcebd,_0x5126e5){_0x2bcebd=_0x2bcebd-0x15a;var _0x3424bd=_0x30512a[_0x2bcebd];return _0x3424bd;},a0_0x2bce(_0xebc7f8,_0x4190ab);}var AttendanceReportUsageData=AttendanceReportUsageData||[],AttendanceReportUsageUrl='';function ReadEmpReportUsageData(){var _0x54a04f=a0_0x2bce;return dfds=$[_0x54a04f(0x1f5)](),$[_0x54a04f(0x168)]({'url':AttendanceReportUsageUrl,'headers':{'Accept':_0x54a04f(0x1d0)},'async':![],'success':function(_0x486d09){var _0x595c53=_0x54a04f;FilterState=0x0,AttendanceReportUsageData=AttendanceReportUsageData[_0x595c53(0x1d2)](_0x486d09['d'][_0x595c53(0x1ec)]);if(_0x486d09['d']['__next'])AttendanceReportUsageUrl=_0x486d09['d'][_0x595c53(0x15e)],ReadEmpReportUsageData();else{if(AttendanceReportUsageData[_0x595c53(0x19d)]>0x0){var _0x5d346a=moment(ConvertDateTimeFormat($('#attendance-reportFrom')[_0x595c53(0x1b9)](),'/'))[_0x595c53(0x207)](_0x595c53(0x1d3)),_0x18d209=moment(ConvertDateTimeFormat($(_0x595c53(0x202))[_0x595c53(0x1b9)](),'/'))[_0x595c53(0x207)](_0x595c53(0x1d3)),_0x56636b=AttendanceReportUsageData[_0x595c53(0x201)](function(_0x2bebcf){var _0x46bc11=_0x595c53;return Created=moment(_0x2bebcf[_0x46bc11(0x1dc)])['format'](_0x46bc11(0x1d3)),(_0x5d346a==''?Created!='':Created>=_0x5d346a)&&(_0x18d209==''?Created!='':Created<=_0x18d209);});AttendanceReportUsageData=_0x56636b;var _0x3558fe=[...new Map(AttendanceReportUsageData['map'](_0x3dfcd1=>[_0x3dfcd1[_0x595c53(0x17a)],_0x3dfcd1]))[_0x595c53(0x20f)]()];TempStore=[];for(var _0x4db497=0x0;_0x4db497<AttendanceReportUsageData[_0x595c53(0x19d)];_0x4db497++){TempStore[_0x595c53(0x227)](AttendanceReportUsageData[_0x4db497][_0x595c53(0x196)]['ID']);}unique=TempStore[_0x595c53(0x201)](function(_0x25fed0,_0x5d375f,_0x5bfda7){var _0x13bde3=_0x595c53;return _0x5d375f==_0x5bfda7[_0x13bde3(0x1b0)](_0x25fed0);});if(unique['length']>0x0){EmpAttendanceData=[];for(var _0x2c93bb=0x0;_0x2c93bb<unique[_0x595c53(0x19d)];_0x2c93bb++){var _0x4ae651=0x0,_0x19aeb=[],_0x554793=[],_0x3f412c=moment($('#attendance-reportFrom')[_0x595c53(0x1b9)](),_0x595c53(0x17b))['format'](_0x595c53(0x181)),_0x31fe3b=moment($(_0x595c53(0x202))[_0x595c53(0x1b9)](),'DD/MM/YYYY')[_0x595c53(0x207)]('YYYY-MM-DD'),_0x355574=unique[_0x2c93bb],_0x4ad62f=$[_0x595c53(0x15f)](AttendanceReportUsageData,function(_0x1f16cf){var _0x266ce4=_0x595c53;return _0x1f16cf[_0x266ce4(0x196)]['ID']==_0x355574;}),_0x1b73d5=_0x4ad62f;if(_0x1b73d5[_0x595c53(0x19d)]>0x0){for(var _0x229fd8=0x0;_0x229fd8<_0x1b73d5[_0x595c53(0x19d)];_0x229fd8++){var _0x1a203b=_0x1b73d5[_0x229fd8]['ID'],_0x4ff04c=_0x1b73d5[_0x229fd8][_0x595c53(0x196)][_0x595c53(0x189)],_0x56265f=_0x1b73d5[_0x229fd8]['Employee']['ID'],_0x5dd7dd=_0x1b73d5[_0x229fd8][_0x595c53(0x1dc)],_0x3baa9e=_0x1b73d5[_0x229fd8][_0x595c53(0x1b5)];if(_0x3baa9e==_0x595c53(0x19b)||_0x3baa9e==_0x595c53(0x221)||_0x3baa9e=='2nd\x20Half')_0x19aeb[_0x595c53(0x227)](_0x3baa9e);else _0x3baa9e=='On\x20Leave'&&_0x554793[_0x595c53(0x227)](_0x3baa9e);_0x1b73d5[_0x229fd8][_0x595c53(0x199)]!=null&&(_0x4ae651=parseInt(_0x4ae651)+parseInt(_0x1b73d5[_0x229fd8][_0x595c53(0x199)]));var _0x5562db=_0x1b73d5[_0x229fd8]['HrAction'],_0x24def3=parseInt(_0x19aeb['length'])+parseInt(_0x554793[_0x595c53(0x19d)]),_0x5644d6=parseInt(TotalOfficeDays)-parseInt(_0x24def3);_0x5644d6<0x0&&(_0x5644d6=0x0);}var _0x590678=Math[_0x595c53(0x1df)](parseInt(_0x24def3)/parseInt(TotalOfficeDays)*0x64)+'%';TotalOfficeDays=='0'&&(_0x590678='-'),EmpAttendanceData[_0x595c53(0x227)]({'UserId':_0x56265f,'EmpName':_0x4ff04c,'AttendanceDate':_0x5dd7dd,'AttendanceType':_0x3baa9e,'AttendanceItemId':_0x1a203b,'EmpWorkHours':_0x4ae651,'HrAction':_0x5562db,'AttendancDays':_0x19aeb[_0x595c53(0x19d)],'LeavesDay':_0x554793[_0x595c53(0x19d)],'NotActionDays':_0x5644d6,'percentage':_0x590678});}}}}}},'error':function(_0x25ba4a,_0x5ecd46,_0x544361){}}),dfds[_0x54a04f(0x190)]();}function a0_0x3051(){var _0x5a0326=['Full\x20Day','application/json;\x20odata=verbose','length','text','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27>','#OfficeLoc\x20option:selected','/_api/web/lists/getbytitle(\x27EnvironmentalSettings\x27)/items?$select=Title,Active,ListOfUsers/Title&$filter=Title\x20eq\x20\x27Attendance\x20Entry\x27\x20&$expand=ListOfUsers/Id','MaximumEntitySuggestions','show','#overlaysearch','</tr>','formatDate','Jan','<tr\x20class=\x27text-center\x27>','#SelectedLocation','href','ReportTableData','Department','append','All','Reptotalpages','indexOf','responseJSON','\x27\x20and\x20CompanyID\x20eq\x20\x27','On\x20Leave','webAbsoluteUrl','AttendanceType','&WebAppId=','red','\x27&$orderby=OfficeName\x20asc','val','<option\x20value=\x22','data:application/vnd.ms-excel;base64,','\x27\x20class=\x27custom-edit-btn\x27><i\x20class=\x27fa\x20fa-chevron-right\x27></i></a></div></td>','ManagerLoginName','pagedropdown','<html\x20xmlns:o=\x22urn:schemas-microsoft-com:office:office\x22\x20xmlns:x=\x22urn:schemas-microsoft-com:office:excel\x22\x20xmlns=\x22http://www.w3.org/TR/REC-html40\x22><head><!--[if\x20gte\x20mso\x209]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>','#monthhyear','Holiday','</option>','fadeOut','.NoRecordFound','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27>00:00</div></td>','#Employee','\x27\x20and\x20AttendanceDate\x20le\x20\x27','29279100PjfJJR','btoa','SPClientPeoplePickerDict','OfficeLocation','#OfficeLoc','getElementById','fadeIn','#ReportTableData>tbody\x20>tr','application/json;odata=verbose','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,ManagerLoginName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,ManagerLoginName,OfficeLocation,Company,Department&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20Company/ID\x20\x20eq\x20\x27','concat','MM/DD/YYYY','empty','columns','#attendance-reportFrom','#DepartmentDDL\x20option:selected','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000','#Manager','00:00\x20(H:M)','showWaitScreenWithNoClose','AttendanceDate','asc','stringify','round','#FromDate','Repstartrecord','and\x20Department\x20eq\x20\x27','EmpWorkHours','nodeType','/Pages/Myworkplace.aspx?WebAppId=232SHDFGHJF22B2526DFG','&end=','LeavesDay','\x27\x20and\x20Holiday_start\x20ge\x20\x27','<td><div\x20class=\x27attendance-report-edit-lock-btn-box\x20text-center\x27><a\x20href=\x27','Attendance\x20Entry','Error\x20in\x20getFileData.','results','<div\x20class=\x27upload-chip\x27>','attr','and\x20LogonName/ID\x20eq\x20\x27','#ReportTable','appendTo','Width','#__REQUESTDIGEST','4049545qZNCFx','Deferred','LogonName','2nd\x20Half','11zMuyus','hide','includes','CompanyId','setDate','SearchPrincipalSource','log','#daydate','HrAction','filter','#attendance-reportTo','6jPBtoz','This\x20feature\x20has\x20been\x20deactivated\x20!','User,DL,SecGroup,SPGroup','#officeLocTH','format','#TotalHolidays','tablenav','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27>0</div></td>','#totalemp','Jun','Aug','May','values','close','1470837ZtfKef','join','GetAllUserInfo','getDate','\x27&$orderby=Title\x20asc&$top=5000','9VVpoBN','#attendencedateValue','337344xGWzOl','dd/mm/yy','#EdateTH','message','<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27>','7457700eJbUuq','SPClientPeoplePicker','and\x20OfficeLocation\x20eq\x20\x27','Manager','1st\x20Half','ResolvePrincipalSource','split','/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$top=5000&$filter=CompanyID/ID\x20eq\x20\x27','oddrow','Designation','push','280px','&sourcelocation=../Pages/Report.aspx#','PrincipalAccountType','oddselected','UserId','__next','grep','userDisplayName','datepicker','\x27\x20and\x20Holiday_start\x20le\x20\x27','getTime','done','blue','M\x20\x20yy','#chips','ajax','OfficeName','children','#DepartmentDDL','<option\x20value=\x22All\x22>All</option>','getMonth','evenselected','#TotalWorkdayTH','Key','sorter','2821651zKqCMN','\x27\x20and\x20Employee\x20eq\x20\x27','Jul','AttendanceItemId','NotActionDays','getQueryStringParameter','/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?select=*,ID,Title&$filter=OfficeLocationID\x20eq\x20\x27','black','AuthorId','DD/MM/YYYY','Active','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27>-</div></td>','/_api/web/ensureuser','getFullYear','modal','YYYY-MM-DD','error','map','evenrow','</div>','&start=','4WvZJeO','checked','Title','5623432zjXPRe','Sept','GET','location','/Pages/EmployeeReport.aspx?EID=','POST','promise','Mar','ModalDialog','-7d','value','</div></td>','Employee','selectedrow','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27','WorkHours','2gybKLz'];a0_0x3051=function(){return _0x5a0326;};return a0_0x3051();}function OpenMyCustomLoader(){var _0x55ee72=a0_0x2bce,_0x3ec4d8='Loading...',_0xc41985='<br\x20/>Please\x20wait!!',_0x537c7c=0xc8,_0x1e6d0b=0x190;currentDlg=SP['UI'][_0x55ee72(0x192)][_0x55ee72(0x1db)](_0x3ec4d8,_0xc41985,_0x537c7c,_0x1e6d0b);}function CloseMyCustomLoader(){var _0x215b26=a0_0x2bce;currentDlg[_0x215b26(0x210)]();}function EmployeeListDat(_0x3f5dfa){var _0x53ef08=a0_0x2bce;$[_0x53ef08(0x168)]({'url':_0x3f5dfa,'headers':{'Accept':_0x53ef08(0x1d0)},'async':![],'success':function(_0x258d9c){var _0x497808=_0x53ef08,_0x36426b=_0x258d9c['d']['results'];$(_0x497808(0x1f0))['empty']();var _0x2e5a60='';if(_0x36426b[_0x497808(0x19d)]>0x0){var _0x4db73a=0x0,_0x2859d9=0x0,_0x23e561=0x0;for(var _0x5a5fdd=0x0;_0x5a5fdd<_0x36426b['length'];_0x5a5fdd++){var _0xfe8a5d=_0x36426b[_0x5a5fdd]['ID'],_0x267f61=_0x36426b[_0x5a5fdd][_0x497808(0x1f6)]['ID'],_0x3d2c0e=_0x36426b[_0x5a5fdd][_0x497808(0x1f6)][_0x497808(0x189)],_0x174809=_0x36426b[_0x5a5fdd][_0x497808(0x226)],_0x2ee0c8=_0x36426b[_0x5a5fdd][_0x497808(0x1ac)]['DepartmentName'],_0x47c244=_0x36426b[_0x5a5fdd][_0x497808(0x1bd)]['Title'];_0x47c244==undefined&&(_0x47c244='');var _0x41a79f=_0x497808(0x1da),_0x4e5245='',_0x2d1b9e=_0x497808(0x179);_0x174809==null&&(_0x174809='');var _0x1af190=_0x36426b[_0x5a5fdd][_0x497808(0x1cb)][_0x497808(0x169)];_0x1af190==null&&(_0x1af190='');EmployeeId=_0x36426b[_0x5a5fdd][_0x497808(0x1f6)]['ID'];var _0x56ed09=moment($(_0x497808(0x1d6))[_0x497808(0x1b9)](),_0x497808(0x17b))['format'](_0x497808(0x181)),_0x24b479=moment($('#attendance-reportTo')[_0x497808(0x1b9)](),_0x497808(0x17b))[_0x497808(0x207)](_0x497808(0x181)),_0x56ed09=_0x56ed09[_0x497808(0x223)]('-')[_0x497808(0x212)](''),_0x24b479=_0x24b479['split']('-')[_0x497808(0x212)](''),_0x43758b=_spPageContextInfo['webServerRelativeUrl']+_0x497808(0x18e)+_0x267f61+_0x497808(0x186)+_0x56ed09+_0x497808(0x1e6)+_0x24b479+_0x497808(0x1b6)+titanForWork[_0x497808(0x177)](_0x497808(0x1fb))+_0x497808(0x15a),_0x3c8077=EmpAttendanceData[_0x497808(0x183)](function(_0x1318fd){var _0x212855=_0x497808;return _0x1318fd[_0x212855(0x15d)];})[_0x497808(0x1b0)](EmployeeId);if(_0x3c8077!=-0x1){var _0x35c6f9=EmpAttendanceData[_0x3c8077]['UserId'],_0x300dc2=EmpAttendanceData[_0x3c8077]['AttendanceType'],_0x1d992f=EmpAttendanceData[_0x3c8077][_0x497808(0x175)];_0x41a79f=EmpAttendanceData[_0x3c8077][_0x497808(0x1e3)];var _0x3a284e=EmpAttendanceData[_0x3c8077]['EmpWorkHours'];_0x4e5245=EmpAttendanceData[_0x3c8077][_0x497808(0x175)];var _0x219259=EmpAttendanceData[_0x3c8077]['AttendancDays'],_0x2c2eed=EmpAttendanceData[_0x3c8077][_0x497808(0x1e7)],_0x32c7e0=EmpAttendanceData[_0x3c8077][_0x497808(0x176)],_0x2976e2=EmpAttendanceData[_0x3c8077]['percentage'],_0x5b3eaa='';EmpAttendanceData[_0x3c8077]['HrAction']==!![]?_0x5b3eaa=_0x497808(0x188):_0x5b3eaa='',_0x41a79f==null&&(_0x41a79f=_0x497808(0x1da)),_0x300dc2==_0x497808(0x1b3)&&(_0x2d1b9e=_0x497808(0x1b7),_0x23e561++),_0x300dc2==_0x497808(0x1c1)&&(_0x2d1b9e=_0x497808(0x165)),_0x2e5a60+=_0x497808(0x1a8),_0x2e5a60+=_0x497808(0x21c)+_0x3d2c0e+'</div></td>',_0x2e5a60+=_0x497808(0x21c)+_0x174809+_0x497808(0x195),_0x2e5a60+=_0x497808(0x19f)+_0x2ee0c8+_0x497808(0x195),_0x2e5a60+=_0x497808(0x21c)+_0x47c244+'</div></td>',_0x2e5a60+=_0x497808(0x19f)+_0x219259+_0x497808(0x195),_0x2e5a60+=_0x497808(0x19f)+_0x32c7e0+_0x497808(0x195),_0x2e5a60+=_0x497808(0x19f)+_0x2c2eed+'</div></td>',_0x2e5a60+=_0x497808(0x19f)+ConvertHHMM(_0x41a79f)+_0x497808(0x195),_0x2e5a60+=_0x497808(0x19f)+_0x2976e2+_0x497808(0x195),_0x2e5a60+=_0x497808(0x1e9)+_0x43758b+_0x497808(0x1bc),_0x2e5a60+=_0x497808(0x1a5);}else _0x2e5a60+=_0x497808(0x1a8),_0x2e5a60+=_0x497808(0x21c)+_0x3d2c0e+'</div></td>',_0x2e5a60+=_0x497808(0x21c)+_0x174809+_0x497808(0x195),_0x2e5a60+=_0x497808(0x19f)+_0x2ee0c8+_0x497808(0x195),_0x2e5a60+='<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27>'+_0x47c244+_0x497808(0x195),_0x2e5a60+=_0x497808(0x20a),_0x2e5a60+=_0x497808(0x19f)+TotalOfficeDays+_0x497808(0x195),_0x2e5a60+='<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27>0</div></td>',_0x2e5a60+=_0x497808(0x1c5),_0x2e5a60+=_0x497808(0x17d),_0x2e5a60+=_0x497808(0x1e9)+_0x43758b+_0x497808(0x1bc),_0x2e5a60+=_0x497808(0x1a5);}}else{}_0x36426b[_0x497808(0x19d)]==0x0?$(_0x497808(0x1c4))[_0x497808(0x1a3)]():$(_0x497808(0x1c4))[_0x497808(0x1f9)]();$(_0x497808(0x1f0))[_0x497808(0x1ad)](_0x2e5a60);var _0x31501f=$(_0x497808(0x1cf))['length'];$('#TotalItemscount')[_0x497808(0x19e)](_0x31501f),$(_0x497808(0x20b))['text'](_0x31501f),_0x31501f>0x0&&ReportTableConfiguration();},'error':function(_0xda451d){var _0x5d0fbf=_0x53ef08;console[_0x5d0fbf(0x1fe)](_0xda451d);}});}function ReportTableConfiguration(){var _0x459491=a0_0x2bce;sorter=new TINY['table'][(_0x459491(0x171))](_0x459491(0x171),_0x459491(0x1ab),{'ascclass':_0x459491(0x1dd),'descclass':'desc','evenclass':_0x459491(0x184),'oddclass':_0x459491(0x225),'evenselclass':_0x459491(0x16e),'oddselclass':_0x459491(0x15c),'paginate':!![],'size':0xa,'colddid':_0x459491(0x1d5),'currentid':'Repcurrentpage','totalid':_0x459491(0x1af),'startingrecid':_0x459491(0x1e1),'endingrecid':'Rependrecord','totalrecid':'Reptotalrecords','hoverid':_0x459491(0x197),'pageddid':_0x459491(0x1be),'navid':_0x459491(0x209),'sortdir':0x1,'init':!![]});}function ConvertHHMM(_0x4c9989){var _0x1cd855=Math['floor'](_0x4c9989/0x3c),_0x139471=_0x4c9989%0x3c;_0x1cd855<0xa&&(_0x1cd855='0'+_0x1cd855);_0x139471<0xa&&(_0x139471='0'+_0x139471);var _0x537787=_0x1cd855+':'+_0x139471;return _0x537787;}function CloseModel(){var _0x244cee=a0_0x2bce;initializePeoplePicker(_0x244cee(0x220)),initializePeoplePicker('Employee');}var tableToExcel=(function(){var _0xdd4cd0=a0_0x2bce,_0x17ab88=_0xdd4cd0(0x1bb),_0x4b80dc=_0xdd4cd0(0x1bf),_0x28429c=function(_0x136080){var _0x44bd76=_0xdd4cd0;return window[_0x44bd76(0x1c9)](unescape(encodeURIComponent(_0x136080)));},_0x445ab0=function(_0x1af761,_0x4e55da){return _0x1af761['replace'](/{(\w+)}/g,function(_0x60a1c7,_0xc3c84a){return _0x4e55da[_0xc3c84a];});};return function(_0x1437b4,_0x4b448a){var _0x3cb979=_0xdd4cd0;if(!_0x1437b4[_0x3cb979(0x1e4)])_0x1437b4=document[_0x3cb979(0x1cd)](_0x1437b4);var _0x586775={'worksheet':_0x4b448a||'Worksheet','table':_0x1437b4['innerHTML']};window['location'][_0x3cb979(0x1aa)]=_0x17ab88+_0x28429c(_0x445ab0(_0x4b80dc,_0x586775));};}()),authentication=function(){var _0x50dc32=a0_0x2bce,_0x2ef31e=_spPageContextInfo[_0x50dc32(0x160)],_0x5f5a73=_spPageContextInfo[_0x50dc32(0x1b4)]+_0x50dc32(0x1a1);$[_0x50dc32(0x168)]({'url':_0x5f5a73,'async':![],'type':_0x50dc32(0x18c),'headers':{'accept':_0x50dc32(0x19c)},'success':function(_0x4fe23c){var _0x5bbe26=_0x50dc32;debugger;var _0x44b82e=_0x4fe23c['d'][_0x5bbe26(0x1ec)];if(_0x44b82e[_0x5bbe26(0x19d)]>0x0)for(var _0xeeac0d=0x0;_0xeeac0d<_0x44b82e[_0x5bbe26(0x19d)];_0xeeac0d++){if(_0x44b82e[_0xeeac0d][_0x5bbe26(0x189)]==_0x5bbe26(0x1ea)){if(_0x44b82e[_0xeeac0d][_0x5bbe26(0x17c)]==![])return alert(_0x5bbe26(0x204)),window['location']=_spPageContextInfo[_0x5bbe26(0x1b4)]+_0x5bbe26(0x1e5),![];}}},'error':function(_0x4b5bae){var _0x498d9c=_0x50dc32;alert(JSON[_0x498d9c(0x1de)](_0x4b5bae));}});};