var a0_0x591ef1=a0_0x2158;(function(_0x2150fc,_0x18ca0a){var _0x3410cc=a0_0x2158,_0x2cc182=_0x2150fc();while(!![]){try{var _0x3b2a34=parseInt(_0x3410cc(0x261))/0x1*(-parseInt(_0x3410cc(0x1ec))/0x2)+parseInt(_0x3410cc(0x1ea))/0x3*(parseInt(_0x3410cc(0x207))/0x4)+parseInt(_0x3410cc(0x278))/0x5+parseInt(_0x3410cc(0x28a))/0x6+-parseInt(_0x3410cc(0x209))/0x7*(-parseInt(_0x3410cc(0x293))/0x8)+parseInt(_0x3410cc(0x1fd))/0x9*(parseInt(_0x3410cc(0x233))/0xa)+-parseInt(_0x3410cc(0x254))/0xb;if(_0x3b2a34===_0x18ca0a)break;else _0x2cc182['push'](_0x2cc182['shift']());}catch(_0x19f6b9){_0x2cc182['push'](_0x2cc182['shift']());}}}(a0_0x2931,0xac0b5));var EmpAttendanceData=[],txtCompanyId='',selectedAttendListItem=new Array();$(document)[a0_0x591ef1(0x280)](function(){var _0x79bd5d=a0_0x591ef1;txtCompanyId=titanForWork['getQueryStringParameter'](_0x79bd5d(0x2a7)),$('#attendanceDate')[_0x79bd5d(0x26a)]({'dateFormat':_0x79bd5d(0x24a),'maxDate':new Date()})['datepicker']('setDate',new Date()),$(_0x79bd5d(0x22a))[_0x79bd5d(0x1e1)]($(_0x79bd5d(0x1ef))[_0x79bd5d(0x249)]()),EmpAttendanceTodayData(),initializePeoplePicker(_0x79bd5d(0x2ac)),bindAllDepartment(),bindAllOfficeLocation(),$('#mutipleFilter')[_0x79bd5d(0x264)](function(){MutipleBaseFilter();}),$(_0x79bd5d(0x214))[_0x79bd5d(0x264)](function(){ClearFilterForAttendence();}),$(_0x79bd5d(0x273))[_0x79bd5d(0x264)](function(){ClearFilterForAttendence();}),$(_0x79bd5d(0x25c))[_0x79bd5d(0x264)](function(){var _0x5cd80b=_0x79bd5d;selectedAttendListItem[_0x5cd80b(0x242)]>0x0?($(_0x5cd80b(0x218))['text'](''),$(_0x5cd80b(0x218))[_0x5cd80b(0x1e1)](selectedAttendListItem[_0x5cd80b(0x242)]),$(_0x5cd80b(0x260))['modal']('show')):alert('Please\x20select\x20Employees\x20to\x20update\x20Attendance');}),$(_0x79bd5d(0x267))[_0x79bd5d(0x264)](function(){var _0x85d06b=_0x79bd5d;$(_0x85d06b(0x25b))[_0x85d06b(0x2b0)](),setTimeout(function(){UpdateMultipleSelectedItem();},0x3e8);}),$(_0x79bd5d(0x200))[_0x79bd5d(0x264)](function(){var _0x4db70b=_0x79bd5d;$(_0x4db70b(0x243))[_0x4db70b(0x1eb)](_0x4db70b(0x297),$(this)[_0x4db70b(0x1eb)](_0x4db70b(0x297))),selectedAttendListItem=[],$(_0x4db70b(0x243))[_0x4db70b(0x28d)](function(){var _0x478bec=_0x4db70b;if($(this)[_0x478bec(0x1eb)](_0x478bec(0x297))==!![]){var _0x1230fd=$(this)[_0x478bec(0x249)](),_0x43ead1=$(this)['closest']('tr'),_0xbf376=_0x43ead1[_0x478bec(0x2aa)](_0x478bec(0x25e))['text'](),_0x2f26b8=_0x43ead1['find'](_0x478bec(0x24b))[_0x478bec(0x1e1)]();selectedAttendListItem['push']({'AttenListitemId':_0x1230fd,'EmpName':_0xbf376,'Empid':_0x2f26b8});}});});});function EmpAttendanceTodayData(){var _0x4f8d4d=a0_0x591ef1;$(_0x4f8d4d(0x22a))[_0x4f8d4d(0x249)]('');var _0x5e737c=$('#attendanceDate')['val'](),_0x1b95be=moment($(_0x4f8d4d(0x237))[_0x4f8d4d(0x249)](),_0x4f8d4d(0x284))['format'](_0x4f8d4d(0x241));GetHolidays(_0x1b95be);debugger;$('#attendencedateValue')[_0x4f8d4d(0x249)](_0x5e737c),$(_0x4f8d4d(0x255))[_0x4f8d4d(0x1e1)]($[_0x4f8d4d(0x26a)][_0x4f8d4d(0x21a)]('DD',new Date(_0x1b95be))),$(_0x4f8d4d(0x27b))[_0x4f8d4d(0x1e1)]($[_0x4f8d4d(0x26a)][_0x4f8d4d(0x21a)](_0x4f8d4d(0x2a5),new Date(_0x1b95be)));var _0xdec3e5=_spPageContextInfo['webAbsoluteUrl']+_0x4f8d4d(0x22d)+_0x1b95be+'\x27\x20';$[_0x4f8d4d(0x250)](getFileData(_0xdec3e5))['done'](function(_0x27822c){var _0x18b509=_0x4f8d4d,_0x158a1a=_spPageContextInfo['webAbsoluteUrl']+_0x18b509(0x235)+txtCompanyId+'\x27';EmployeeListDat(_0x158a1a);});}function getFileData(_0x233e76){var _0x211844=a0_0x591ef1;jQuery['ajax']({'url':_0x233e76,'headers':{'Accept':_0x211844(0x20e)},'async':![],'success':function(_0x59c4e){var _0x3300fe=_0x211844;EmpAttendanceData=[];var _0x27c5f6=_0x59c4e['d'][_0x3300fe(0x28c)];if(_0x27c5f6[_0x3300fe(0x242)]>0x0)for(var _0x2bf85a=0x0;_0x2bf85a<_0x27c5f6[_0x3300fe(0x242)];_0x2bf85a++){var _0x281206=_0x27c5f6[_0x2bf85a]['ID'],_0x300c17=_0x27c5f6[_0x2bf85a][_0x3300fe(0x24e)][_0x3300fe(0x275)],_0x41cba6=_0x27c5f6[_0x2bf85a][_0x3300fe(0x24e)]['ID'],_0x213044=_0x27c5f6[_0x2bf85a][_0x3300fe(0x1f1)],_0x90c806=_0x27c5f6[_0x2bf85a][_0x3300fe(0x25d)],_0x125be4=_0x27c5f6[_0x2bf85a][_0x3300fe(0x230)],_0x38371f=_0x27c5f6[_0x2bf85a][_0x3300fe(0x23f)];EmpAttendanceData[_0x3300fe(0x263)]({'UserId':_0x41cba6,'EmpName':_0x300c17,'AttendanceDate':_0x213044,'AttendanceType':_0x90c806,'AttendanceItemId':_0x281206,'EmpWorkHours':_0x125be4,'HrAction':_0x38371f});}},'error':function(_0x5463f5,_0x2662a0){var _0x5f0458=_0x211844;console[_0x5f0458(0x2a1)](JSON['stringify'](_0x5463f5));}});}function EmployeeListDat(_0x3d3704){var _0x1cbff1=a0_0x591ef1;debugger;$['ajax']({'url':_0x3d3704,'headers':{'Accept':_0x1cbff1(0x20e)},'async':![],'success':function(_0x37dd78){var _0x4e2966=_0x1cbff1;debugger;var _0xbae3e6=_0x37dd78['d'][_0x4e2966(0x28c)];$(_0x4e2966(0x21d))[_0x4e2966(0x290)]();var _0x2f529e='';if(_0xbae3e6[_0x4e2966(0x242)]>0x0){var _0x5d2011=0x0,_0x1ebf1f=0x0,_0x5a6fe9=0x0;for(var _0x27f9d3=0x0;_0x27f9d3<_0xbae3e6[_0x4e2966(0x242)];_0x27f9d3++){var _0x58f2e7=_0xbae3e6[_0x27f9d3]['ID'],_0x4e1fe3=_0xbae3e6[_0x27f9d3][_0x4e2966(0x217)][_0x4e2966(0x275)],_0x161098=_0xbae3e6[_0x27f9d3]['Designation'],_0x5b1b3c=_0xbae3e6[_0x27f9d3][_0x4e2966(0x2a4)][_0x4e2966(0x215)],_0x4e8aff=_0x4e2966(0x277),_0x39f0a3='',_0x50c8eb=_0x4e2966(0x20b);_0x161098==null&&(_0x161098='');var _0x3bef62=_0xbae3e6[_0x27f9d3][_0x4e2966(0x29a)]['OfficeName'];_0x3bef62==null&&(_0x3bef62='');EmployeeId=_0xbae3e6[_0x27f9d3][_0x4e2966(0x217)]['ID'];var _0x38ad28=EmpAttendanceData[_0x4e2966(0x223)](function(_0x39de40){var _0x713320=_0x4e2966;return _0x39de40[_0x713320(0x228)];})[_0x4e2966(0x1e0)](EmployeeId);if(_0x38ad28!=-0x1){if($(_0x4e2966(0x29f))[_0x4e2966(0x249)]()!=_0x4e2966(0x29b)){var _0x17d695=EmpAttendanceData[_0x38ad28][_0x4e2966(0x228)],_0x1ebc64=EmpAttendanceData[_0x38ad28][_0x4e2966(0x25d)],_0x16fbca=EmpAttendanceData[_0x38ad28][_0x4e2966(0x1f0)];_0x4e8aff=EmpAttendanceData[_0x38ad28][_0x4e2966(0x291)];var _0x28712f=EmpAttendanceData[_0x38ad28][_0x4e2966(0x291)];_0x39f0a3=EmpAttendanceData[_0x38ad28][_0x4e2966(0x1f0)];var _0x45a9c4='';EmpAttendanceData[_0x38ad28]['HrAction']==!![]?_0x45a9c4=_0x4e2966(0x297):_0x45a9c4='',_0x4e8aff==null&&(_0x4e8aff='00:00\x20(H:M)'),_0x1ebc64!=_0x4e2966(0x21c)&&_0x1ebc64!=_0x4e2966(0x265)&&_0x5d2011++,_0x1ebc64==_0x4e2966(0x21c)&&(_0x50c8eb='red',_0x5a6fe9++),_0x1ebc64==_0x4e2966(0x265)&&(_0x50c8eb='blue'),_0x2f529e+='<tr\x20class=\x27text-center\x27>',_0x2f529e+='<td><input\x20type=\x27checkbox\x27\x20class=\x27Attenid\x27\x20\x20value=\x27'+_0x39f0a3+_0x4e2966(0x29e),_0x2f529e+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20EmpName\x27>'+_0x4e1fe3+'</div><span\x20style=\x27display:none\x27\x20class=\x27EmpID\x27>'+EmployeeId+'</span></td>',_0x2f529e+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20Designation\x27>'+_0x161098+_0x4e2966(0x252),_0x2f529e+=_0x4e2966(0x271)+_0x5b1b3c+_0x4e2966(0x252),_0x2f529e+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20OfficeLocation\x27>'+_0x3bef62+_0x4e2966(0x252),_0x2f529e+=_0x4e2966(0x2a9)+_0x50c8eb+'\x27>'+_0x1ebc64+_0x4e2966(0x252),_0x28712f==null?_0x2f529e+=_0x4e2966(0x259)+_0x4e8aff+'</a>\x20</td>':_0x2f529e+='<td><a\x20href=\x27#\x27>'+ConvertHHMM(_0x4e8aff)+_0x4e2966(0x276),_0x2f529e+=_0x4e2966(0x1ee)+_0x39f0a3+_0x4e2966(0x212)+_0x45a9c4+_0x4e2966(0x258),_0x2f529e+=_0x4e2966(0x2a6)+_0x16fbca+_0x4e2966(0x296),_0x2f529e+='</tr>';}}else($(_0x4e2966(0x29f))[_0x4e2966(0x249)]()==_0x4e2966(0x236)||$(_0x4e2966(0x29f))[_0x4e2966(0x249)]()==_0x4e2966(0x29b))&&(_0x2f529e+=_0x4e2966(0x21b),_0x2f529e+='<td><input\x20type=\x27checkbox\x27\x20class=\x27Attenid\x27\x20\x20value=\x27'+_0x39f0a3+_0x4e2966(0x29e),_0x2f529e+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20EmpName\x27>'+_0x4e1fe3+'</div><span\x20style=\x27display:none\x27\x20class=\x27EmpID\x27>'+EmployeeId+_0x4e2966(0x239),_0x2f529e+=_0x4e2966(0x266)+_0x161098+_0x4e2966(0x252),_0x2f529e+=_0x4e2966(0x271)+_0x5b1b3c+_0x4e2966(0x252),_0x2f529e+=_0x4e2966(0x287)+_0x3bef62+_0x4e2966(0x252),_0x2f529e+=_0x4e2966(0x1f8),_0x2f529e+=_0x4e2966(0x259)+_0x4e8aff+_0x4e2966(0x1e9),_0x2f529e+=_0x4e2966(0x1ee)+_0x39f0a3+'\x27\x20onclick=\x27HrActionVerify(this.value)\x27\x20disabled></td>',_0x2f529e+=_0x4e2966(0x274),_0x2f529e+=_0x4e2966(0x2a8),_0x1ebf1f++);}}else{}_0xbae3e6[_0x4e2966(0x242)]==0x0?$(_0x4e2966(0x28e))[_0x4e2966(0x2b0)]():$('.NoRecordFound')[_0x4e2966(0x234)]();$(_0x4e2966(0x21d))[_0x4e2966(0x2a0)](_0x2f529e),$(_0x4e2966(0x279))[_0x4e2966(0x1e1)](_0x5d2011),$(_0x4e2966(0x248))[_0x4e2966(0x1e1)](_0x1ebf1f),$('#onleaveValue')[_0x4e2966(0x1e1)](_0x5a6fe9);var _0x44e167=$(_0x4e2966(0x26d))[_0x4e2966(0x242)];$(_0x4e2966(0x26c))[_0x4e2966(0x1e1)](_0x44e167),$(_0x4e2966(0x257))[_0x4e2966(0x1e1)](_0x44e167),_0x44e167>0x0&&(TableConfiguration(),selectedAttendenceEvent());},'error':function(_0x1feb07){var _0x5c499b=_0x1cbff1;console[_0x5c499b(0x2a1)](_0x1feb07);}});}function bindAllDepartment(){var _0x241e5e=a0_0x591ef1;$('#allDepartment')[_0x241e5e(0x290)]();var _0x27d81c=_spPageContextInfo['webAbsoluteUrl']+_0x241e5e(0x227)+txtCompanyId+'\x27';$[_0x241e5e(0x270)]({'url':_0x27d81c,'headers':{'Accept':_0x241e5e(0x20e)},'async':!![],'success':function(_0x15a64e){var _0x574b02=_0x241e5e;$(_0x574b02(0x25f))[_0x574b02(0x272)](_0x574b02(0x1fb));for(var _0x2f55eb=0x0;_0x2f55eb<_0x15a64e['d']['results'][_0x574b02(0x242)];_0x2f55eb++){$(_0x574b02(0x1fb))[_0x574b02(0x2a0)]('<option\x20value=\x22'+_0x15a64e['d'][_0x574b02(0x28c)][_0x2f55eb]['ID']+'\x22>'+_0x15a64e['d'][_0x574b02(0x28c)][_0x2f55eb][_0x574b02(0x275)]+_0x574b02(0x24d));}},'myError':function(_0x1cf3e3){}});}function bindAllOfficeLocation(){var _0x2989d4=a0_0x591ef1;$(_0x2989d4(0x1dd))[_0x2989d4(0x290)]();var _0x4937a0=_spPageContextInfo[_0x2989d4(0x28b)]+_0x2989d4(0x23c)+txtCompanyId+'\x27';$['ajax']({'url':_0x4937a0,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0xf676c1){var _0x5e22b8=_0x2989d4;$(_0x5e22b8(0x25f))[_0x5e22b8(0x272)]('#allOfficeLocation');for(var _0x4832e4=0x0;_0x4832e4<_0xf676c1['d'][_0x5e22b8(0x28c)][_0x5e22b8(0x242)];_0x4832e4++){$(_0x5e22b8(0x1dd))['append'](_0x5e22b8(0x211)+_0xf676c1['d'][_0x5e22b8(0x28c)][_0x4832e4]['ID']+'\x22>'+_0xf676c1['d'][_0x5e22b8(0x28c)][_0x4832e4]['OfficeName']+'</option>');}},'myError':function(_0x5ee92c){}});}function MutipleBaseFilter(){var _0x400fc4=a0_0x591ef1,_0x160fa3='',_0xda66d9='',_0x5d7664='';$(_0x400fc4(0x22a))['val']('');$(_0x400fc4(0x1fb))['val']()!=_0x400fc4(0x236)&&(_0x160fa3+='and\x20Department/ID\x20eq\x20\x27'+$(_0x400fc4(0x1fb))[_0x400fc4(0x249)]()+'\x27\x20',_0x5d7664+=_0x400fc4(0x26f)+$('#allDepartment\x20option:selected')[_0x400fc4(0x1e1)]()+_0x400fc4(0x1f6));$(_0x400fc4(0x1dd))[_0x400fc4(0x249)]()!='All'&&(_0x160fa3+='and\x20OfficeLocation/ID\x20eq\x20\x27'+$(_0x400fc4(0x1dd))[_0x400fc4(0x249)]()+'\x27\x20',_0x5d7664+=_0x400fc4(0x26f)+$('#allOfficeLocation\x20option:selected')[_0x400fc4(0x1e1)]()+_0x400fc4(0x1f6));if($(_0x400fc4(0x24c))[_0x400fc4(0x1e1)]()!=''){var _0x54f710=getUserInformation('EmployeeAttendence');if(_0x54f710[_0x400fc4(0x242)]>0x0){_0x160fa3+=_0x400fc4(0x23a)+_0x54f710[0x0]+'\x27\x20';for(var _0x532d11=0x0;_0x532d11<_0x54f710[_0x400fc4(0x242)];_0x532d11++){_0x54f710[_0x532d11]!=_0x54f710[0x0]&&(_0x160fa3+=_0x400fc4(0x1e4)+_0x54f710[_0x532d11]+'\x27');}_0x160fa3+=')';}}if($(_0x400fc4(0x237))[_0x400fc4(0x249)]()!=null&&$('#attendanceDate')[_0x400fc4(0x249)]()!=''){var _0x2bb5f2=$('#attendanceDate')['val'](),_0x5d5d43=moment($('#attendanceDate')[_0x400fc4(0x249)](),'DD/MM/YYYY')[_0x400fc4(0x1df)](_0x400fc4(0x241));GetHolidays(_0x5d5d43);debugger;$(_0x400fc4(0x22a))[_0x400fc4(0x249)](_0x2bb5f2),$(_0x400fc4(0x255))[_0x400fc4(0x1e1)]($[_0x400fc4(0x26a)][_0x400fc4(0x21a)]('DD',new Date(_0x5d5d43))),$(_0x400fc4(0x27b))[_0x400fc4(0x1e1)]($[_0x400fc4(0x26a)][_0x400fc4(0x21a)](_0x400fc4(0x2a5),new Date(_0x5d5d43)));}$(_0x400fc4(0x29f))[_0x400fc4(0x249)]()!=_0x400fc4(0x236)&&$('#AttendanceType')[_0x400fc4(0x249)]()!='Not\x20Specified'&&($('#AttendanceType')[_0x400fc4(0x249)]()==_0x400fc4(0x229)?(_0xda66d9+=_0x400fc4(0x1fe),_0x5d7664+=_0x400fc4(0x1ff)):(_0xda66d9+=_0x400fc4(0x222)+$(_0x400fc4(0x29f))[_0x400fc4(0x249)]()+'\x27\x20',_0x5d7664+=_0x400fc4(0x26f)+$(_0x400fc4(0x1ed))[_0x400fc4(0x1e1)]()+_0x400fc4(0x1f6)));$(_0x400fc4(0x1f5))[_0x400fc4(0x290)](),$(_0x400fc4(0x1f5))[_0x400fc4(0x2a0)](_0x5d7664);var _0x356e67=_spPageContextInfo['webAbsoluteUrl']+_0x400fc4(0x22d)+_0x5d5d43+'\x27'+_0xda66d9;$[_0x400fc4(0x250)](getFileData(_0x356e67))[_0x400fc4(0x1e5)](function(_0xcf853e){var _0x475bb6=_0x400fc4,_0x260239=_spPageContextInfo[_0x475bb6(0x28b)]+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/ID,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20Company/ID\x20\x20eq\x20\x27'+txtCompanyId+'\x27'+_0x160fa3;EmployeeListDat(_0x260239);});}function initializePeoplePicker(_0x1dab24){var _0x3ec8a8=a0_0x591ef1,_0x386033={};_0x386033[_0x3ec8a8(0x1f4)]=_0x3ec8a8(0x216),_0x386033['SearchPrincipalSource']=0xf,_0x386033[_0x3ec8a8(0x294)]=0xf,_0x386033[_0x3ec8a8(0x2a2)]=!![],_0x386033[_0x3ec8a8(0x246)]=0x32,_0x386033['Width']='280px',this['SPClientPeoplePicker_InitStandaloneControlWrapper'](_0x1dab24,null,_0x386033);}function getUserInformation(_0x4f8f12){var _0x3d2120=a0_0x591ef1,_0x3dc8d0=[],_0x24f9c5=this['SPClientPeoplePicker'][_0x3d2120(0x21f)][_0x4f8f12+_0x3d2120(0x1f7)];if(!_0x24f9c5['IsEmpty']()){if(_0x24f9c5[_0x3d2120(0x29c)])return![];else{if(!_0x24f9c5[_0x3d2120(0x24f)]())return![];else{if(_0x24f9c5[_0x3d2120(0x204)]>0x0){var _0x55ffcf=_0x24f9c5[_0x3d2120(0x2af)](),_0x59afb2='',_0x52029d='',_0x5504e3='';for(var _0x177d5e=0x0;_0x177d5e<_0x55ffcf[_0x3d2120(0x242)];_0x177d5e++){var _0x4aa813=_0x55ffcf[_0x177d5e]['Key'],_0x438cbb=GetUserID(_0x4aa813);_0x438cbb!=-0x1&&_0x3dc8d0['push'](_0x438cbb);}return _0x3dc8d0;}}}}else return _0x5504e3;}function GetUserID(_0x4a122b){var _0x3edaf4=a0_0x591ef1,_0x423f33={'logonName':_0x4a122b},_0xbcfeea=-0x1,_0x41644c=$[_0x3edaf4(0x270)]({'url':_spPageContextInfo[_0x3edaf4(0x22e)]+'/_api/web/ensureuser','type':_0x3edaf4(0x27a),'async':![],'contentType':'application/json;odata=verbose','data':JSON[_0x3edaf4(0x208)](_0x423f33),'headers':{'Accept':_0x3edaf4(0x20e),'X-RequestDigest':$('#__REQUESTDIGEST')['val']()},'success':function(_0x4126fe){_0xbcfeea=_0x4126fe['d']['Id'];},'error':function(_0x23734f){failure(_0x23734f);}});return _0xbcfeea;}function ClearFilterForAttendence(){var _0x18bba0=a0_0x591ef1;$(_0x18bba0(0x1fb))[_0x18bba0(0x249)](_0x18bba0(0x236)),$(_0x18bba0(0x1dd))[_0x18bba0(0x249)]('All'),$(_0x18bba0(0x29f))[_0x18bba0(0x249)](_0x18bba0(0x236)),$(_0x18bba0(0x237))['datepicker']({'dateFormat':_0x18bba0(0x24a)})[_0x18bba0(0x26a)](_0x18bba0(0x2a3),new Date()),clearPeoplePickerControl(_0x18bba0(0x2ac)),$('#AttendanceChips')[_0x18bba0(0x290)](),EmpAttendanceTodayData();}function a0_0x2931(){var _0x288a4b=['/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$top=5000&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27','.marquee-div','slice','HrAction','#empId','YYYY-MM-DD','length','.Attenid','<li>','\x27\x20and\x20CompanyID\x20eq\x20\x27','MaximumEntitySuggestions','#ResultDiv','#notSpecifiedValue','val','dd/mm/yy','.EmpID','#EmployeeAttendence_TopSpan_ResolvedList','</option>','Employee','HasResolvedUsers','when','#__REQUESTDIGEST','</div></td>','SPClientPeoplePicker','18803829mJyBcO','#daydate','OfficeLocationID','#totalemp','></td>','<td><a\x20href=\x27#\x27>','charAt','#showLoderForMutiple','#updateMutipleCheckBox','AttendanceType','.EmpName','<option\x20value=\x22All\x22>All</option>','#updateMutipleAttend','1PSDDQl','css','push','click','Holiday','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Designation\x27>','#applyMutipleSelectedUpdate','.marquee','evenselected','datepicker','totalrecords','#TotalItemscount','#TempTableQuestions\x20>tbody\x20>tr','Attendance\x20Submitted','<div\x20class=\x27upload-chip\x27>','ajax','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Department\x27>','appendTo','#closeCross','<td><div\x20class=\x27attendance-edit-lock-btn-box\x20text-center\x27>\x20<a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20onclick=\x27attendanceEditModal(this)\x27><i\x20class=\x27fa\x20fa-pencil\x27></i>\x20</a></div></td>','Title','\x20(H:M)</a>\x20</td>','00:00\x20(H:M)','6009015dpxcAS','#empPresent','POST','#monthhyear','Please\x20Select\x20Attendance\x20type','getElementById','display','#HolidayCity','ready','Action\x20taken\x20successfully.','toUpperCase','reject','DD/MM/YYYY','closest','linear','<td><div\x20class=\x27attendance-table-ellipsis-2\x20OfficeLocation\x27>','evenrow','.Designation','2149332luHDHZ','webAbsoluteUrl','results','each','.NoRecordFound','#currentEmpName','empty','EmpWorkHours','.Attendancetype','8399784cHHosk','ResolvePrincipalSource','tablenav',')\x27><i\x20class=\x27fa\x20fa-pencil\x27></i>\x20</a></div></td>','checked','EmpAttendance','getQueryStringParameter','OfficeLocation','Not\x20Specified','HasInputError','totalpages','\x27></td>','#AttendanceType','append','log','AllowMultipleValues','setDate','Department','dd\x20M\x20yy','<td><div\x20class=\x27attendance-edit-lock-btn-box\x20text-center\x27>\x20<a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20onclick=\x27attendanceEditModal(this,','CompanyId','</tr>','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Attendancetype\x27\x20style=\x27color:','find','/_api/web/lists/getbytitle(\x27EmpAttendance\x27)/items?$filter=ID\x20eq\x20(\x27','EmployeeAttendence','ListItem','An\x20error\x20occurred.\x20Please\x20try\x20again.','GetAllUserInfo','show','MERGE','DeleteProcessedUser','#allOfficeLocation','Empid','format','indexOf','text','split','</li>','or\x20LogonNameId\x20eq\x20\x27','done','selectedrow','SP.Data.','pagedropdown','</a>\x20</td>','255639EMRKFX','prop','1607910AFxaAX','#AttendanceType\x20option:selected','<td><input\x20type=\x27checkbox\x27\x20name=\x27HRACTIONCHK\x27\x20value=\x27','#timesheetFrom','AttendanceItemId','AttendanceDate','Deferred','Attendance\x20Updated\x20Successfully','PrincipalAccountType','#AttendanceChips','</div>','_TopSpan','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Attendancetype\x27>-</div></td>','#currentdatefilter','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items(\x27','#allDepartment','#currentEmpDepartment','9WvmKFo','and\x20(AttendanceType\x20eq\x20\x271st\x20Half\x27\x20or\x20AttendanceType\x20eq\x20\x272nd\x20Half\x27)\x20','<div\x20class=\x27upload-chip\x27>Half\x20Day</div>','#selectAll','columns','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items','desc','TotalUserCount','block','Attendance\x20Updated','16tDEpxG','stringify','7SlWHPa','endrecord','black','#mutipleUpdatedate','join','application/json;odata=verbose','table','promise','<option\x20value=\x22','\x27\x20onclick=\x27HrActionVerify(this.value)\x27\x20','modal','#clearControl','DepartmentName','User,DL,SecGroup,SPGroup','LogonName','#totalAttendItem','asc','formatDate','<tr\x20class=\x27text-center\x27>','On\x20Leave','#tattendanceRegtable','#currentEmpAttendanceType','SPClientPeoplePickerDict','red','none','and\x20AttendanceType\x20eq\x20\x27','map','color','#currentEmpDesignation','\x27&$top=200&$orderby=Holiday_start\x20asc','/_api/web/lists/getbytitle(\x27Departments\x27)/items?select=ID,Title&$filter=CompanyID\x20eq\x20\x27','UserId','Half\x20Day','#attendencedateValue','oddselected','true','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20eq\x20\x27','siteAbsoluteUrl','mm/dd/yy','WorkHours','Attendance','floor','2672370tfMPwe','hide','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20Company/ID\x20\x20eq\x20\x27','All','#attendanceDate','input[name=\x27HRACTIONCHK\x27][value=\x27','</span></td>','and\x20(LogonNameId\x20eq\x20\x27','SP.Data.EmpAttendanceListItem'];a0_0x2931=function(){return _0x288a4b;};return a0_0x2931();}function clearPeoplePickerControl(_0x28ee97){var _0x2d1815=a0_0x591ef1,_0x1de213=_0x28ee97+'_TopSpan',_0x3a9493=null,_0x575387=this[_0x2d1815(0x253)][_0x2d1815(0x21f)];for(var _0x46cdaa in _0x575387){if(_0x46cdaa==_0x1de213){_0x3a9493=_0x575387[_0x46cdaa];break;}}if(_0x3a9493){var _0x2016f9=$(document[_0x2d1815(0x27d)](_0x3a9493['ResolvedListElementId']))[_0x2d1815(0x2aa)]('span[class=\x27sp-peoplepicker-userSpan\x27]');$(_0x2016f9)[_0x2d1815(0x28d)](function(_0x1ef303){var _0x409d98=_0x2d1815;_0x3a9493[_0x409d98(0x1dc)](this);});}}function a0_0x2158(_0x485ad7,_0x73957b){var _0x2931eb=a0_0x2931();return a0_0x2158=function(_0x2158cd,_0xd91897){_0x2158cd=_0x2158cd-0x1dc;var _0x4e7153=_0x2931eb[_0x2158cd];return _0x4e7153;},a0_0x2158(_0x485ad7,_0x73957b);}function TableConfiguration(){var _0x1a450d=a0_0x591ef1;sorter=new TINY[(_0x1a450d(0x20f))]['sorter']('sorter','TempTableQuestions',{'ascclass':_0x1a450d(0x219),'descclass':_0x1a450d(0x203),'evenclass':_0x1a450d(0x288),'oddclass':'oddrow','evenselclass':_0x1a450d(0x269),'oddselclass':_0x1a450d(0x22b),'paginate':!![],'size':0xa,'colddid':_0x1a450d(0x201),'currentid':'currentpage','totalid':_0x1a450d(0x29d),'startingrecid':'startrecord','endingrecid':_0x1a450d(0x20a),'totalrecid':_0x1a450d(0x26b),'hoverid':_0x1a450d(0x1e6),'pageddid':_0x1a450d(0x1e8),'navid':_0x1a450d(0x295),'sortdir':0x1,'init':!![]});}function attendanceEditModal(_0x446a05,_0x3651ea){var _0x2464c1=a0_0x591ef1;$('#currentAttencedenceId')[_0x2464c1(0x249)](''),$('#empId')['val'](''),$('#attendanceEdit')['modal'](_0x2464c1(0x2b0));var _0x4ea01d=$(_0x446a05)[_0x2464c1(0x285)]('tr'),_0x33c4e0=$(_0x4ea01d)[_0x2464c1(0x2aa)](_0x2464c1(0x25e))[_0x2464c1(0x1e1)](),_0x1224d3=$(_0x4ea01d)['find'](_0x2464c1(0x24b))[_0x2464c1(0x1e1)](),_0x4b1b39=$(_0x4ea01d)[_0x2464c1(0x2aa)](_0x2464c1(0x289))[_0x2464c1(0x1e1)](),_0x481aeb=$(_0x4ea01d)[_0x2464c1(0x2aa)]('.Department')[_0x2464c1(0x1e1)](),_0x4fa6f6=$(_0x4ea01d)[_0x2464c1(0x2aa)](_0x2464c1(0x292))[_0x2464c1(0x1e1)]();$(_0x2464c1(0x28f))[_0x2464c1(0x1e1)](_0x33c4e0),$(_0x2464c1(0x225))['text'](_0x4b1b39),$(_0x2464c1(0x1fc))['text'](_0x481aeb),$(_0x2464c1(0x21e))[_0x2464c1(0x249)](_0x4fa6f6),$('#currentAttencedenceId')[_0x2464c1(0x249)](_0x3651ea),$(_0x2464c1(0x240))[_0x2464c1(0x249)](_0x1224d3),$(_0x2464c1(0x1f9))['text']('');var _0x270676=ConvertddmmyyTommddyy($(_0x2464c1(0x22a))[_0x2464c1(0x249)]()),_0x546206=$['datepicker'][_0x2464c1(0x21a)]('dd\x20M\x20yy',new Date(_0x270676));$(_0x2464c1(0x1f9))[_0x2464c1(0x1e1)](_0x546206);}function Applyattendence(_0x4d942e){var _0x2f6d4b=a0_0x591ef1;if($(_0x2f6d4b(0x21e))[_0x2f6d4b(0x249)]()==null)return alert(_0x2f6d4b(0x27c)),![];var _0x325d88=$('#currentEmpName')[_0x2f6d4b(0x1e1)](),_0x304097=$('#empId')[_0x2f6d4b(0x249)](),_0x27dad7=$(_0x2f6d4b(0x21e))[_0x2f6d4b(0x249)](),_0x418395=$('#currentAttencedenceId')[_0x2f6d4b(0x249)]();_0x418395==''?$[_0x2f6d4b(0x250)](insertAttendence(_0x304097,_0x27dad7))['done'](function(_0x159413){var _0x3a5ee0=_0x2f6d4b;MutipleBaseFilter(),alert(_0x3a5ee0(0x1f3));}):$[_0x2f6d4b(0x250)](UpdateAttendencee(_0x27dad7,_0x418395))[_0x2f6d4b(0x1e5)](function(_0xa1b47a){var _0x4a6893=_0x2f6d4b;MutipleBaseFilter(),alert(_0x4a6893(0x206));});}function insertAttendence(_0x5b6ae3,_0x4bd6f2){var _0x499b79=a0_0x591ef1,_0x2f6a3a=ConvertddmmyyTommddyy($(_0x499b79(0x22a))['val']());_0x2f6a3a=new Date(_0x2f6a3a),_0x2f6a3a=$['datepicker'][_0x499b79(0x21a)](_0x499b79(0x22f),_0x2f6a3a);var _0x8b63da=$[_0x499b79(0x1f2)](),_0x30062f=_0x499b79(0x298),_0x228a63=_spPageContextInfo[_0x499b79(0x28b)]+_0x499b79(0x202),_0x22bc13=_0x499b79(0x1e7)+_0x30062f[_0x499b79(0x25a)](0x0)[_0x499b79(0x282)]()+_0x30062f[_0x499b79(0x1e2)]('\x20')[_0x499b79(0x20d)]('')[_0x499b79(0x23e)](0x1)+_0x499b79(0x2ad),_0x43b6d3;return _0x43b6d3={'__metadata':{'type':_0x22bc13},'Title':_0x499b79(0x231),'WorkHours':'0','HrAction':'true','EmployeeId':_0x5b6ae3,'AttendanceDate':_0x2f6a3a,'AttendanceType':_0x4bd6f2},$[_0x499b79(0x270)]({'url':_0x228a63,'type':_0x499b79(0x27a),'async':![],'headers':{'accept':_0x499b79(0x20e),'X-RequestDigest':$(_0x499b79(0x251))['val'](),'content-Type':_0x499b79(0x20e)},'data':JSON[_0x499b79(0x208)](_0x43b6d3),'success':function(_0x1b92ee){_0x8b63da['resolve'](!![]);},'error':function(_0x10dc50){var _0x171300=_0x499b79;console[_0x171300(0x2a1)](JSON[_0x171300(0x208)](_0x10dc50)),_0x8b63da[_0x171300(0x283)](_0x10dc50);}}),_0x8b63da[_0x499b79(0x210)]();}function UpdateAttendencee(_0x241c8b,_0x80b154){var _0x925e67=a0_0x591ef1,_0xdde78=titanForWork['getQueryStringParameter'](_0x925e67(0x2a7)),_0x4ca6eb=$[_0x925e67(0x1f2)](),_0x3a20d3=_0x925e67(0x298),_0x6c9a51=_spPageContextInfo[_0x925e67(0x28b)]+'/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items('+_0x80b154+')',_0x70f639=_0x925e67(0x1e7)+_0x3a20d3[_0x925e67(0x25a)](0x0)[_0x925e67(0x282)]()+_0x3a20d3['split']('\x20')[_0x925e67(0x20d)]('')['slice'](0x1)+'ListItem',_0x553fe8;return _0x553fe8={'__metadata':{'type':_0x70f639},'Title':_0x925e67(0x231),'HrAction':_0x925e67(0x22c),'AttendanceType':_0x241c8b},$[_0x925e67(0x270)]({'url':_0x6c9a51,'type':'POST','async':![],'headers':{'accept':_0x925e67(0x20e),'X-RequestDigest':$(_0x925e67(0x251))['val'](),'content-Type':'application/json;odata=verbose','X-Http-Method':'PATCH','If-Match':'*'},'data':JSON[_0x925e67(0x208)](_0x553fe8),'success':function(_0x92f202){_0x4ca6eb['resolve'](!![]);},'error':function(_0x407f3b){var _0x240cc5=_0x925e67;console[_0x240cc5(0x2a1)](JSON[_0x240cc5(0x208)](_0x407f3b)),_0x4ca6eb[_0x240cc5(0x283)](_0x407f3b);}}),_0x4ca6eb[_0x925e67(0x210)]();}function ConvertddmmyyTommddyy(_0x1c5d4b){var _0xa578f1=a0_0x591ef1;return _0x1c5d4b[_0xa578f1(0x1e2)]('/')[0x1]+'/'+_0x1c5d4b[_0xa578f1(0x1e2)]('/')[0x0]+'/'+_0x1c5d4b['split']('/')[0x2];}function selectedAttendenceEvent(){var _0x1374a0=a0_0x591ef1;$('#mutipleUpdatedate')[_0x1374a0(0x1e1)]('');var _0x2a985c=ConvertddmmyyTommddyy($(_0x1374a0(0x22a))['val']()),_0x3dd105=$[_0x1374a0(0x26a)][_0x1374a0(0x21a)](_0x1374a0(0x2a5),new Date(_0x2a985c));$(_0x1374a0(0x20c))[_0x1374a0(0x1e1)](_0x3dd105),$(_0x1374a0(0x243))['change'](function(){var _0x3e5150=_0x1374a0;selectedAttendListItem=[],$('.Attenid')[_0x3e5150(0x28d)](function(){var _0x232d63=_0x3e5150;if($(this)[_0x232d63(0x1eb)]('checked')==!![]){var _0x3e9838=$(this)['val'](),_0x5dd486=$(this)[_0x232d63(0x285)]('tr'),_0xf31821=_0x5dd486[_0x232d63(0x2aa)](_0x232d63(0x25e))['text'](),_0x452255=_0x5dd486[_0x232d63(0x2aa)](_0x232d63(0x24b))[_0x232d63(0x1e1)]();selectedAttendListItem[_0x232d63(0x263)]({'AttenListitemId':_0x3e9838,'EmpName':_0xf31821,'Empid':_0x452255});}});});}function UpdateMultipleSelectedItem(){var _0x39e4bf=a0_0x591ef1;if(selectedAttendListItem[_0x39e4bf(0x242)]>0x0){if($('#mutipleEmpAttendType')['val']()=='select'){alert('Please\x20select\x20Attendance\x20type');return![];$(_0x39e4bf(0x260))[_0x39e4bf(0x213)](_0x39e4bf(0x234));}else{var _0x13299e=0x1;for(var _0x5365e3=0x0;_0x5365e3<selectedAttendListItem[_0x39e4bf(0x242)];_0x5365e3++){var _0x5b81bf=selectedAttendListItem[_0x5365e3]['AttenListitemId'],_0x3c69bd=selectedAttendListItem[_0x5365e3][_0x39e4bf(0x1de)],_0x345307=$('#mutipleEmpAttendType')['val']();_0x5b81bf==''?$['when'](insertAttendence(_0x3c69bd,_0x345307))[_0x39e4bf(0x1e5)](function(_0x4b8e61){var _0x2f5d40=_0x39e4bf;_0x13299e==selectedAttendListItem[_0x2f5d40(0x242)]&&(selectedAttendListItem=[],MutipleBaseFilter(),alert(_0x2f5d40(0x26e)),$('#updateMutipleAttend')[_0x2f5d40(0x213)](_0x2f5d40(0x234)),$(_0x2f5d40(0x200))[_0x2f5d40(0x1eb)](_0x2f5d40(0x297),![]),$(_0x2f5d40(0x25b))['hide']());}):$[_0x39e4bf(0x250)](UpdateAttendencee(_0x345307,_0x5b81bf))[_0x39e4bf(0x1e5)](function(_0xc074bf){var _0x53fe4a=_0x39e4bf;_0x13299e==selectedAttendListItem[_0x53fe4a(0x242)]&&(selectedAttendListItem=[],MutipleBaseFilter(),alert('Attendance\x20Submitted'),$(_0x53fe4a(0x260))[_0x53fe4a(0x213)](_0x53fe4a(0x234)),$(_0x53fe4a(0x200))[_0x53fe4a(0x1eb)](_0x53fe4a(0x297),![]),$(_0x53fe4a(0x25b))[_0x53fe4a(0x234)]());}),_0x13299e++;}}}else alert('Please\x20select\x20Employees\x20to\x20update\x20Attendance');}function ConvertHHMM(_0x27069b){var _0x3b3a0d=a0_0x591ef1,_0x128973=Math[_0x3b3a0d(0x232)](_0x27069b/0x3c),_0xca9213=_0x27069b%0x3c;_0x128973<0xa&&(_0x128973='0'+_0x128973);_0xca9213<0xa&&(_0xca9213='0'+_0xca9213);var _0x458f48=_0x128973+':'+_0xca9213;return _0x458f48;}function GetHolidays(_0x29b481){var _0x1d0c3d=a0_0x591ef1,_0x51aad7=_spPageContextInfo[_0x1d0c3d(0x28b)]+'/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?$select=*,OfficeLocationID/Title&$expand=OfficeLocationID&$filter=Holiday_start\x20eq\x20\x27'+_0x29b481+_0x1d0c3d(0x245)+titanForWork[_0x1d0c3d(0x299)](_0x1d0c3d(0x2a7))+_0x1d0c3d(0x226);$['ajax']({'url':_0x51aad7,'headers':{'Accept':_0x1d0c3d(0x20e)},'async':![],'success':function(_0x145d4b){var _0x1ba25d=_0x1d0c3d;debugger;var _0x160bfa=_0x145d4b['d'][_0x1ba25d(0x28c)],_0x2f103c='';$(_0x1ba25d(0x27f))[_0x1ba25d(0x290)]();if(_0x160bfa[_0x1ba25d(0x242)]>0x0){$('#daydate')[_0x1ba25d(0x262)](_0x1ba25d(0x224),_0x1ba25d(0x220)),$(_0x1ba25d(0x27b))[_0x1ba25d(0x262)](_0x1ba25d(0x224),_0x1ba25d(0x220));for(var _0x463a3a=0x0;_0x463a3a<_0x160bfa[_0x1ba25d(0x242)];_0x463a3a++){_0x2f103c=_0x2f103c+_0x1ba25d(0x244)+_0x160bfa[_0x463a3a][_0x1ba25d(0x256)][_0x1ba25d(0x275)]+_0x1ba25d(0x1e3);}$(_0x1ba25d(0x23d))['css'](_0x1ba25d(0x27e),_0x1ba25d(0x205)),$(_0x1ba25d(0x27f))[_0x1ba25d(0x2a0)](_0x2f103c);let _0x490b1b={'marquee_class':_0x1ba25d(0x268),'container_class':'.simple-marquee-container','sibling_class':0x0,'hover':!![],'duplicated':![],'easing':_0x1ba25d(0x286),'direction':'left','speed':0x32};}else $('.marquee-div')['css'](_0x1ba25d(0x27e),_0x1ba25d(0x221)),$(_0x1ba25d(0x255))[_0x1ba25d(0x262)](_0x1ba25d(0x224),_0x1ba25d(0x20b)),$(_0x1ba25d(0x27b))['css'](_0x1ba25d(0x224),_0x1ba25d(0x20b));},'error':function(_0x1cc438){var _0x377000=_0x1d0c3d;alert(_0x377000(0x2ae));}});}function HrActionVerify(_0x3765d7){var _0x4506e2=a0_0x591ef1,_0x19ec6b=_0x3765d7;debugger;var _0xd3be7f=_spPageContextInfo['webAbsoluteUrl']+_0x4506e2(0x2ab)+_0x3765d7+'\x27)';$[_0x4506e2(0x270)]({'url':_0xd3be7f,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x3435cc){var _0x118495=_0x4506e2;debugger;var _0x2e169f=_0x3435cc['d'][_0x118495(0x28c)];if(_0x2e169f[_0x118495(0x242)]>0x0){var _0x1773d0=_0x2e169f[0x0][_0x118495(0x23f)];if(_0x1773d0==!![])var _0x4e6d6f=![];else{if(_0x1773d0==![])var _0x4e6d6f=!![];}$[_0x118495(0x270)]({'url':_spPageContextInfo['webAbsoluteUrl']+_0x118495(0x1fa)+_0x3765d7+'\x27)','type':'POST','data':JSON['stringify']({'__metadata':{'type':_0x118495(0x23b)},'HrAction':_0x4e6d6f}),'headers':{'Accept':_0x118495(0x20e),'Content-Type':_0x118495(0x20e),'X-RequestDigest':$(_0x118495(0x251))[_0x118495(0x249)](),'IF-MATCH':'*','X-HTTP-Method':_0x118495(0x2b1)},'success':function(_0x2a3133,_0x5cefe0,_0x43a878){var _0x4bc660=_0x118495;console['log'](_0x4bc660(0x281));},'error':function(_0x1230a7,_0x5263bc,_0x558ac8){var _0x2af8a0=_0x118495;$(_0x2af8a0(0x247))['empty']()['text'](_0x3435cc['responseJSON']['error']);}});}else $(_0x118495(0x238)+_0x19ec6b+'\x27]')[_0x118495(0x1eb)](_0x118495(0x297),![]);},'error':function(_0xe37c93){var _0x22c34b=_0x4506e2;alert(_0x22c34b(0x2ae));}});}