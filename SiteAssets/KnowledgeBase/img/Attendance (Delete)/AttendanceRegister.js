(function(_0x4fd971,_0x1d7ddb){var _0x25e3b1=a0_0x461d,_0x2068c2=_0x4fd971();while(!![]){try{var _0xbcd610=parseInt(_0x25e3b1(0x173))/0x1+-parseInt(_0x25e3b1(0x1de))/0x2+-parseInt(_0x25e3b1(0x1f3))/0x3*(-parseInt(_0x25e3b1(0x1be))/0x4)+parseInt(_0x25e3b1(0x1b2))/0x5*(parseInt(_0x25e3b1(0x1bf))/0x6)+-parseInt(_0x25e3b1(0x1d7))/0x7*(parseInt(_0x25e3b1(0x175))/0x8)+parseInt(_0x25e3b1(0x1a5))/0x9+-parseInt(_0x25e3b1(0x1cd))/0xa;if(_0xbcd610===_0x1d7ddb)break;else _0x2068c2['push'](_0x2068c2['shift']());}catch(_0x5e2b44){_0x2068c2['push'](_0x2068c2['shift']());}}}(a0_0x20cc,0x789a4));var EmpAttendanceData=[],txtCompanyId='',selectedAttendListItem=new Array();$(document)['ready'](function(){var _0x54171a=a0_0x461d;txtCompanyId=titanForWork['getQueryStringParameter'](_0x54171a(0x157)),$(_0x54171a(0x1d5))['datepicker']({'dateFormat':'dd/mm/yy','maxDate':new Date()})[_0x54171a(0x1a8)](_0x54171a(0x17b),new Date()),$(_0x54171a(0x16e))[_0x54171a(0x18b)]($(_0x54171a(0x13b))[_0x54171a(0x1c1)]()),EmpAttendanceTodayData(),initializePeoplePicker(_0x54171a(0x1ea)),bindAllDepartment(),bindAllOfficeLocation(),$(_0x54171a(0x1b6))['click'](function(){MutipleBaseFilter();}),$(_0x54171a(0x1ef))['click'](function(){ClearFilterForAttendence();}),$(_0x54171a(0x1a7))[_0x54171a(0x16d)](function(){ClearFilterForAttendence();}),$(_0x54171a(0x1d2))['click'](function(){var _0x366c26=_0x54171a;selectedAttendListItem[_0x366c26(0x16a)]>0x0?($('#totalAttendItem')[_0x366c26(0x18b)](''),$('#totalAttendItem')[_0x366c26(0x18b)](selectedAttendListItem['length']),$(_0x366c26(0x128))[_0x366c26(0x186)](_0x366c26(0x1f8))):alert(_0x366c26(0x1d4));}),$(_0x54171a(0x129))[_0x54171a(0x16d)](function(){var _0x276bae=_0x54171a;$(_0x276bae(0x1e3))[_0x276bae(0x1f8)](),setTimeout(function(){UpdateMultipleSelectedItem();},0x3e8);}),$('#selectAll')[_0x54171a(0x16d)](function(){var _0x5110ef=_0x54171a;$(_0x5110ef(0x1b9))[_0x5110ef(0x178)](_0x5110ef(0x148),$(this)[_0x5110ef(0x178)](_0x5110ef(0x148))),selectedAttendListItem=[],$(_0x5110ef(0x1b9))[_0x5110ef(0x18c)](function(){var _0x1dd029=_0x5110ef;if($(this)[_0x1dd029(0x178)]('checked')==!![]){var _0x4dafcd=$(this)[_0x1dd029(0x1c1)](),_0x2cb2b3=$(this)[_0x1dd029(0x1aa)]('tr'),_0x3d012c=_0x2cb2b3[_0x1dd029(0x150)](_0x1dd029(0x1b8))[_0x1dd029(0x18b)](),_0x888396=_0x2cb2b3['find'](_0x1dd029(0x147))[_0x1dd029(0x18b)]();selectedAttendListItem['push']({'AttenListitemId':_0x4dafcd,'EmpName':_0x3d012c,'Empid':_0x888396});}});});});function EmpAttendanceTodayData(){var _0x25f656=a0_0x461d;$(_0x25f656(0x16e))[_0x25f656(0x1c1)]('');var _0x5de0ce=$(_0x25f656(0x1d5))[_0x25f656(0x1c1)](),_0x2ab81f=moment($(_0x25f656(0x1d5))[_0x25f656(0x1c1)](),_0x25f656(0x1c8))[_0x25f656(0x1cb)]('YYYY-MM-DD');GetHolidays(_0x2ab81f);debugger;$(_0x25f656(0x16e))[_0x25f656(0x1c1)](_0x5de0ce),$('#daydate')[_0x25f656(0x18b)]($[_0x25f656(0x1a8)][_0x25f656(0x1df)]('DD',new Date(_0x2ab81f))),$(_0x25f656(0x1b5))['text']($['datepicker']['formatDate'](_0x25f656(0x153),new Date(_0x2ab81f)));var _0x2d7907=_spPageContextInfo[_0x25f656(0x164)]+_0x25f656(0x1c0)+_0x2ab81f+'\x27\x20';$[_0x25f656(0x13d)](getFileData(_0x2d7907))[_0x25f656(0x1ac)](function(_0x454747){var _0x486c1e=_0x25f656,_0x5025a5=_spPageContextInfo[_0x486c1e(0x164)]+_0x486c1e(0x1a4)+txtCompanyId+'\x27';EmployeeListDat(_0x5025a5);});}function getFileData(_0x2d1f13){var _0x41315d=a0_0x461d;jQuery[_0x41315d(0x139)]({'url':_0x2d1f13,'headers':{'Accept':_0x41315d(0x1e9)},'async':![],'success':function(_0x260fab){var _0x35f611=_0x41315d;EmpAttendanceData=[];var _0x4381d8=_0x260fab['d']['results'];if(_0x4381d8[_0x35f611(0x16a)]>0x0)for(var _0x213092=0x0;_0x213092<_0x4381d8[_0x35f611(0x16a)];_0x213092++){var _0x5ccc50=_0x4381d8[_0x213092]['ID'],_0xc33872=_0x4381d8[_0x213092]['Employee'][_0x35f611(0x13e)],_0x31983c=_0x4381d8[_0x213092]['Employee']['ID'],_0x301514=_0x4381d8[_0x213092][_0x35f611(0x195)],_0x1aef94=_0x4381d8[_0x213092]['AttendanceType'],_0x234e5f=_0x4381d8[_0x213092][_0x35f611(0x12b)],_0x38a152=_0x4381d8[_0x213092][_0x35f611(0x187)];EmpAttendanceData[_0x35f611(0x135)]({'UserId':_0x31983c,'EmpName':_0xc33872,'AttendanceDate':_0x301514,'AttendanceType':_0x1aef94,'AttendanceItemId':_0x5ccc50,'EmpWorkHours':_0x234e5f,'HrAction':_0x38a152});}},'error':function(_0x55f0af,_0x4f45fd){var _0x2f6744=_0x41315d;console[_0x2f6744(0x196)](JSON[_0x2f6744(0x15b)](_0x55f0af));}});}function EmployeeListDat(_0x59d72d){var _0x4868f3=a0_0x461d;debugger;$[_0x4868f3(0x139)]({'url':_0x59d72d,'headers':{'Accept':_0x4868f3(0x1e9)},'async':![],'success':function(_0x3a063a){var _0x3d8ab8=_0x4868f3;debugger;var _0x2dc36f=_0x3a063a['d'][_0x3d8ab8(0x18f)];$(_0x3d8ab8(0x1b1))[_0x3d8ab8(0x141)]();var _0x1e1efe='';if(_0x2dc36f[_0x3d8ab8(0x16a)]>0x0){var _0x4357a8=0x0,_0x284fe0=0x0,_0x40aa36=0x0;for(var _0x2e52aa=0x0;_0x2e52aa<_0x2dc36f[_0x3d8ab8(0x16a)];_0x2e52aa++){var _0x5e95c7=_0x2dc36f[_0x2e52aa]['ID'],_0x46a580=_0x2dc36f[_0x2e52aa][_0x3d8ab8(0x1d6)][_0x3d8ab8(0x13e)],_0x5111df=_0x2dc36f[_0x2e52aa]['Designation'],_0x504730=_0x2dc36f[_0x2e52aa][_0x3d8ab8(0x136)][_0x3d8ab8(0x176)],_0x5cc5d4=_0x3d8ab8(0x1d1),_0x47aa38='',_0x448fef=_0x3d8ab8(0x132);_0x5111df==null&&(_0x5111df='');var _0x5ea7a1=_0x2dc36f[_0x2e52aa][_0x3d8ab8(0x174)][_0x3d8ab8(0x1bd)];_0x5ea7a1==null&&(_0x5ea7a1='');EmployeeId=_0x2dc36f[_0x2e52aa]['LogonName']['ID'];var _0x2563f3=EmpAttendanceData[_0x3d8ab8(0x189)](function(_0x3905bc){var _0x4b0b27=_0x3d8ab8;return _0x3905bc[_0x4b0b27(0x1e0)];})[_0x3d8ab8(0x16f)](EmployeeId);if(_0x2563f3!=-0x1){if($('#AttendanceType')[_0x3d8ab8(0x1c1)]()!=_0x3d8ab8(0x1a2)){var _0x1827f8=EmpAttendanceData[_0x2563f3][_0x3d8ab8(0x1e0)],_0x3fd4b3=EmpAttendanceData[_0x2563f3][_0x3d8ab8(0x1ad)],_0x26f450=EmpAttendanceData[_0x2563f3]['AttendanceItemId'];_0x5cc5d4=EmpAttendanceData[_0x2563f3][_0x3d8ab8(0x1d0)];var _0x31d892=EmpAttendanceData[_0x2563f3][_0x3d8ab8(0x1d0)];_0x47aa38=EmpAttendanceData[_0x2563f3][_0x3d8ab8(0x1db)];var _0x5eeb13='';EmpAttendanceData[_0x2563f3]['HrAction']==!![]?_0x5eeb13='checked':_0x5eeb13='',_0x5cc5d4==null&&(_0x5cc5d4='00:00\x20(H:M)'),_0x3fd4b3!='On\x20Leave'&&_0x3fd4b3!=_0x3d8ab8(0x138)&&_0x4357a8++,_0x3fd4b3=='On\x20Leave'&&(_0x448fef='red',_0x40aa36++),_0x3fd4b3==_0x3d8ab8(0x138)&&(_0x448fef=_0x3d8ab8(0x193)),_0x1e1efe+=_0x3d8ab8(0x17c),_0x1e1efe+=_0x3d8ab8(0x151)+_0x47aa38+_0x3d8ab8(0x198),_0x1e1efe+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20EmpName\x27>'+_0x46a580+_0x3d8ab8(0x1ed)+EmployeeId+_0x3d8ab8(0x16c),_0x1e1efe+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20Designation\x27>'+_0x5111df+_0x3d8ab8(0x1dd),_0x1e1efe+=_0x3d8ab8(0x1d9)+_0x504730+_0x3d8ab8(0x1dd),_0x1e1efe+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20OfficeLocation\x27>'+_0x5ea7a1+_0x3d8ab8(0x1dd),_0x1e1efe+=_0x3d8ab8(0x1ca)+_0x448fef+'\x27>'+_0x3fd4b3+'</div></td>',_0x31d892==null?_0x1e1efe+=_0x3d8ab8(0x1e1)+_0x5cc5d4+'</a>\x20</td>':_0x1e1efe+=_0x3d8ab8(0x1e1)+ConvertHHMM(_0x5cc5d4)+_0x3d8ab8(0x1b4),_0x1e1efe+=_0x3d8ab8(0x183)+_0x47aa38+_0x3d8ab8(0x154)+_0x5eeb13+_0x3d8ab8(0x1fc),_0x1e1efe+=_0x3d8ab8(0x14a)+_0x26f450+')\x27><i\x20class=\x27fa\x20fa-pencil\x27></i>\x20</a></div></td>',_0x1e1efe+=_0x3d8ab8(0x15d);}}else($(_0x3d8ab8(0x1f6))[_0x3d8ab8(0x1c1)]()==_0x3d8ab8(0x190)||$(_0x3d8ab8(0x1f6))[_0x3d8ab8(0x1c1)]()==_0x3d8ab8(0x1a2))&&(_0x1e1efe+=_0x3d8ab8(0x17c),_0x1e1efe+='<td><input\x20type=\x27checkbox\x27\x20class=\x27Attenid\x27\x20\x20value=\x27'+_0x47aa38+_0x3d8ab8(0x198),_0x1e1efe+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20EmpName\x27>'+_0x46a580+_0x3d8ab8(0x1ed)+EmployeeId+_0x3d8ab8(0x16c),_0x1e1efe+='<td><div\x20class=\x27attendance-table-ellipsis-2\x20Designation\x27>'+_0x5111df+'</div></td>',_0x1e1efe+=_0x3d8ab8(0x1d9)+_0x504730+_0x3d8ab8(0x1dd),_0x1e1efe+=_0x3d8ab8(0x161)+_0x5ea7a1+'</div></td>',_0x1e1efe+=_0x3d8ab8(0x1ce),_0x1e1efe+=_0x3d8ab8(0x1e1)+_0x5cc5d4+'</a>\x20</td>',_0x1e1efe+=_0x3d8ab8(0x183)+_0x47aa38+_0x3d8ab8(0x1d8),_0x1e1efe+='<td><div\x20class=\x27attendance-edit-lock-btn-box\x20text-center\x27>\x20<a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20onclick=\x27attendanceEditModal(this)\x27><i\x20class=\x27fa\x20fa-pencil\x27></i>\x20</a></div></td>',_0x1e1efe+='</tr>',_0x284fe0++);}}else{}_0x2dc36f[_0x3d8ab8(0x16a)]==0x0?$(_0x3d8ab8(0x17e))['show']():$(_0x3d8ab8(0x17e))[_0x3d8ab8(0x1ec)]();$(_0x3d8ab8(0x1b1))['append'](_0x1e1efe),$('#empPresent')['text'](_0x4357a8),$('#notSpecifiedValue')[_0x3d8ab8(0x18b)](_0x284fe0),$(_0x3d8ab8(0x130))[_0x3d8ab8(0x18b)](_0x40aa36);var _0x37d884=$('#TempTableQuestions\x20>tbody\x20>tr')[_0x3d8ab8(0x16a)];$(_0x3d8ab8(0x13c))[_0x3d8ab8(0x18b)](_0x37d884),$(_0x3d8ab8(0x131))[_0x3d8ab8(0x18b)](_0x37d884),_0x37d884>0x0&&(TableConfiguration(),selectedAttendenceEvent());},'error':function(_0x431a49){var _0x45b2a3=_0x4868f3;console[_0x45b2a3(0x196)](_0x431a49);}});}function bindAllDepartment(){var _0x6392fd=a0_0x461d;$('#allDepartment')[_0x6392fd(0x141)]();var _0x572d88=_spPageContextInfo[_0x6392fd(0x164)]+'/_api/web/lists/getbytitle(\x27Departments\x27)/items?select=ID,Title&$filter=CompanyID\x20eq\x20\x27'+txtCompanyId+'\x27';$[_0x6392fd(0x139)]({'url':_0x572d88,'headers':{'Accept':_0x6392fd(0x1e9)},'async':!![],'success':function(_0x279308){var _0x5983bd=_0x6392fd;$(_0x5983bd(0x169))[_0x5983bd(0x18e)]('#allDepartment');for(var _0x5950f7=0x0;_0x5950f7<_0x279308['d'][_0x5983bd(0x18f)][_0x5983bd(0x16a)];_0x5950f7++){$(_0x5983bd(0x171))[_0x5983bd(0x1bc)]('<option\x20value=\x22'+_0x279308['d'][_0x5983bd(0x18f)][_0x5950f7]['ID']+'\x22>'+_0x279308['d'][_0x5983bd(0x18f)][_0x5950f7][_0x5983bd(0x13e)]+_0x5983bd(0x12a));}},'myError':function(_0x20ce3d){}});}function bindAllOfficeLocation(){var _0x37bf33=a0_0x461d;$(_0x37bf33(0x162))[_0x37bf33(0x141)]();var _0x38f626=_spPageContextInfo['webAbsoluteUrl']+_0x37bf33(0x1a3)+txtCompanyId+'\x27';$['ajax']({'url':_0x38f626,'headers':{'Accept':_0x37bf33(0x1e9)},'async':!![],'success':function(_0x279ef4){var _0x39dede=_0x37bf33;$('<option\x20value=\x22All\x22>All</option>')['appendTo'](_0x39dede(0x162));for(var _0x4b724d=0x0;_0x4b724d<_0x279ef4['d'][_0x39dede(0x18f)][_0x39dede(0x16a)];_0x4b724d++){$(_0x39dede(0x162))[_0x39dede(0x1bc)](_0x39dede(0x12d)+_0x279ef4['d'][_0x39dede(0x18f)][_0x4b724d]['ID']+'\x22>'+_0x279ef4['d'][_0x39dede(0x18f)][_0x4b724d][_0x39dede(0x1bd)]+_0x39dede(0x12a));}},'myError':function(_0x351163){}});}function MutipleBaseFilter(){var _0xc37d1a=a0_0x461d,_0x1fd3c9='',_0x30001e='',_0x4e8dc1='';$(_0xc37d1a(0x16e))[_0xc37d1a(0x1c1)]('');$(_0xc37d1a(0x171))['val']()!=_0xc37d1a(0x190)&&(_0x1fd3c9+=_0xc37d1a(0x1c6)+$(_0xc37d1a(0x171))[_0xc37d1a(0x1c1)]()+'\x27\x20',_0x4e8dc1+=_0xc37d1a(0x184)+$(_0xc37d1a(0x1da))[_0xc37d1a(0x18b)]()+_0xc37d1a(0x1f2));$(_0xc37d1a(0x162))[_0xc37d1a(0x1c1)]()!='All'&&(_0x1fd3c9+=_0xc37d1a(0x1bb)+$(_0xc37d1a(0x162))[_0xc37d1a(0x1c1)]()+'\x27\x20',_0x4e8dc1+=_0xc37d1a(0x184)+$(_0xc37d1a(0x1a9))[_0xc37d1a(0x18b)]()+_0xc37d1a(0x1f2));if($('#EmployeeAttendence_TopSpan_ResolvedList')[_0xc37d1a(0x18b)]()!=''){var _0x1cccf3=getUserInformation(_0xc37d1a(0x1ea));if(_0x1cccf3[_0xc37d1a(0x16a)]>0x0){_0x1fd3c9+=_0xc37d1a(0x17d)+_0x1cccf3[0x0]+'\x27\x20';for(var _0x1dbc0a=0x0;_0x1dbc0a<_0x1cccf3['length'];_0x1dbc0a++){_0x1cccf3[_0x1dbc0a]!=_0x1cccf3[0x0]&&(_0x1fd3c9+=_0xc37d1a(0x1f7)+_0x1cccf3[_0x1dbc0a]+'\x27');}_0x1fd3c9+=')';}}if($(_0xc37d1a(0x1d5))[_0xc37d1a(0x1c1)]()!=null&&$('#attendanceDate')[_0xc37d1a(0x1c1)]()!=''){var _0x58ed7e=$(_0xc37d1a(0x1d5))[_0xc37d1a(0x1c1)](),_0x3a8382=moment($(_0xc37d1a(0x1d5))[_0xc37d1a(0x1c1)](),'DD/MM/YYYY')['format']('YYYY-MM-DD');GetHolidays(_0x3a8382);debugger;$(_0xc37d1a(0x16e))[_0xc37d1a(0x1c1)](_0x58ed7e),$('#daydate')[_0xc37d1a(0x18b)]($[_0xc37d1a(0x1a8)][_0xc37d1a(0x1df)]('DD',new Date(_0x3a8382))),$('#monthhyear')[_0xc37d1a(0x18b)]($[_0xc37d1a(0x1a8)][_0xc37d1a(0x1df)]('dd\x20M\x20yy',new Date(_0x3a8382)));}$(_0xc37d1a(0x1f6))[_0xc37d1a(0x1c1)]()!=_0xc37d1a(0x190)&&$('#AttendanceType')[_0xc37d1a(0x1c1)]()!='Not\x20Specified'&&($('#AttendanceType')[_0xc37d1a(0x1c1)]()==_0xc37d1a(0x1b3)?(_0x30001e+=_0xc37d1a(0x1ee),_0x4e8dc1+='<div\x20class=\x27upload-chip\x27>Half\x20Day</div>'):(_0x30001e+='and\x20AttendanceType\x20eq\x20\x27'+$(_0xc37d1a(0x1f6))[_0xc37d1a(0x1c1)]()+'\x27\x20',_0x4e8dc1+=_0xc37d1a(0x184)+$(_0xc37d1a(0x12e))[_0xc37d1a(0x18b)]()+_0xc37d1a(0x1f2)));$(_0xc37d1a(0x19d))['empty'](),$(_0xc37d1a(0x19d))['append'](_0x4e8dc1);var _0x4f3363=_spPageContextInfo[_0xc37d1a(0x164)]+_0xc37d1a(0x1c0)+_0x3a8382+'\x27'+_0x30001e;$[_0xc37d1a(0x13d)](getFileData(_0x4f3363))[_0xc37d1a(0x1ac)](function(_0x4ea3e0){var _0x3d39eb=_0xc37d1a,_0x107120=_spPageContextInfo[_0x3d39eb(0x164)]+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/ID,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20Company/ID\x20\x20eq\x20\x27'+txtCompanyId+'\x27'+_0x1fd3c9;EmployeeListDat(_0x107120);});}function initializePeoplePicker(_0x5f20a4){var _0x16da75=a0_0x461d,_0x2b53ae={};_0x2b53ae[_0x16da75(0x179)]=_0x16da75(0x192),_0x2b53ae[_0x16da75(0x180)]=0xf,_0x2b53ae[_0x16da75(0x16b)]=0xf,_0x2b53ae['AllowMultipleValues']=!![],_0x2b53ae[_0x16da75(0x15e)]=0x32,_0x2b53ae[_0x16da75(0x1c9)]=_0x16da75(0x1cf),this[_0x16da75(0x170)](_0x5f20a4,null,_0x2b53ae);}function a0_0x461d(_0x13c23a,_0x5ae877){var _0x20ccb6=a0_0x20cc();return a0_0x461d=function(_0x461d81,_0x10989d){_0x461d81=_0x461d81-0x128;var _0x890788=_0x20ccb6[_0x461d81];return _0x890788;},a0_0x461d(_0x13c23a,_0x5ae877);}function getUserInformation(_0x121abd){var _0x4a45c6=a0_0x461d,_0x48d34d=[],_0x387afa=this[_0x4a45c6(0x13a)][_0x4a45c6(0x19b)][_0x121abd+_0x4a45c6(0x165)];if(!_0x387afa['IsEmpty']()){if(_0x387afa['HasInputError'])return![];else{if(!_0x387afa[_0x4a45c6(0x1f4)]())return![];else{if(_0x387afa['TotalUserCount']>0x0){var _0xa0a313=_0x387afa['GetAllUserInfo'](),_0x12c850='',_0x1666d7='',_0x9b0b96='';for(var _0x44169e=0x0;_0x44169e<_0xa0a313[_0x4a45c6(0x16a)];_0x44169e++){var _0xfd74f2=_0xa0a313[_0x44169e]['Key'],_0xe33a48=GetUserID(_0xfd74f2);_0xe33a48!=-0x1&&_0x48d34d[_0x4a45c6(0x135)](_0xe33a48);}return _0x48d34d;}}}}else return _0x9b0b96;}function GetUserID(_0x5a9bc8){var _0x2cd7b0=a0_0x461d,_0x15c435={'logonName':_0x5a9bc8},_0x413a8d=-0x1,_0x19cc01=$[_0x2cd7b0(0x139)]({'url':_spPageContextInfo[_0x2cd7b0(0x1c5)]+'/_api/web/ensureuser','type':_0x2cd7b0(0x146),'async':![],'contentType':_0x2cd7b0(0x1e9),'data':JSON['stringify'](_0x15c435),'headers':{'Accept':_0x2cd7b0(0x1e9),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x2cd7b0(0x1c1)]()},'success':function(_0x41d479){_0x413a8d=_0x41d479['d']['Id'];},'error':function(_0x848c62){failure(_0x848c62);}});return _0x413a8d;}function ClearFilterForAttendence(){var _0x15da18=a0_0x461d;$(_0x15da18(0x171))[_0x15da18(0x1c1)](_0x15da18(0x190)),$(_0x15da18(0x162))['val'](_0x15da18(0x190)),$(_0x15da18(0x1f6))[_0x15da18(0x1c1)](_0x15da18(0x190)),$(_0x15da18(0x1d5))[_0x15da18(0x1a8)]({'dateFormat':'dd/mm/yy'})[_0x15da18(0x1a8)](_0x15da18(0x17b),new Date()),clearPeoplePickerControl(_0x15da18(0x1ea)),$('#AttendanceChips')[_0x15da18(0x141)](),EmpAttendanceTodayData();}function clearPeoplePickerControl(_0x4d8557){var _0x48cf17=a0_0x461d,_0x2860c0=_0x4d8557+_0x48cf17(0x165),_0x49ff41=null,_0x2513ee=this[_0x48cf17(0x13a)][_0x48cf17(0x19b)];for(var _0x1c3fd0 in _0x2513ee){if(_0x1c3fd0==_0x2860c0){_0x49ff41=_0x2513ee[_0x1c3fd0];break;}}if(_0x49ff41){var _0x6809f2=$(document[_0x48cf17(0x1e7)](_0x49ff41[_0x48cf17(0x149)]))[_0x48cf17(0x150)](_0x48cf17(0x137));$(_0x6809f2)[_0x48cf17(0x18c)](function(_0x5bd38a){var _0x5cd719=_0x48cf17;_0x49ff41[_0x5cd719(0x144)](this);});}}function TableConfiguration(){var _0x1ffe7e=a0_0x461d;sorter=new TINY[(_0x1ffe7e(0x140))][(_0x1ffe7e(0x194))]('sorter',_0x1ffe7e(0x1e6),{'ascclass':_0x1ffe7e(0x1e5),'descclass':_0x1ffe7e(0x142),'evenclass':'evenrow','oddclass':'oddrow','evenselclass':_0x1ffe7e(0x145),'oddselclass':'oddselected','paginate':!![],'size':0xa,'colddid':_0x1ffe7e(0x155),'currentid':'currentpage','totalid':_0x1ffe7e(0x134),'startingrecid':_0x1ffe7e(0x17a),'endingrecid':_0x1ffe7e(0x1ae),'totalrecid':'totalrecords','hoverid':_0x1ffe7e(0x188),'pageddid':_0x1ffe7e(0x19f),'navid':_0x1ffe7e(0x1a6),'sortdir':0x1,'init':!![]});}function attendanceEditModal(_0x1ba9f2,_0x761101){var _0x48b569=a0_0x461d;$(_0x48b569(0x1f9))[_0x48b569(0x1c1)](''),$(_0x48b569(0x133))[_0x48b569(0x1c1)](''),$(_0x48b569(0x1c3))[_0x48b569(0x186)](_0x48b569(0x1f8));var _0x3088fd=$(_0x1ba9f2)['closest']('tr'),_0x1cd7b2=$(_0x3088fd)[_0x48b569(0x150)](_0x48b569(0x1b8))[_0x48b569(0x18b)](),_0x11ff2e=$(_0x3088fd)[_0x48b569(0x150)](_0x48b569(0x147))['text'](),_0xf330b7=$(_0x3088fd)[_0x48b569(0x150)](_0x48b569(0x19a))[_0x48b569(0x18b)](),_0x192122=$(_0x3088fd)[_0x48b569(0x150)]('.Department')[_0x48b569(0x18b)](),_0x1a0ee0=$(_0x3088fd)['find'](_0x48b569(0x1fb))[_0x48b569(0x18b)]();$(_0x48b569(0x197))[_0x48b569(0x18b)](_0x1cd7b2),$(_0x48b569(0x199))[_0x48b569(0x18b)](_0xf330b7),$(_0x48b569(0x12f))['text'](_0x192122),$(_0x48b569(0x166))[_0x48b569(0x1c1)](_0x1a0ee0),$(_0x48b569(0x1f9))['val'](_0x761101),$('#empId')['val'](_0x11ff2e),$(_0x48b569(0x1c4))[_0x48b569(0x18b)]('');var _0x2bf242=ConvertddmmyyTommddyy($('#attendencedateValue')['val']()),_0x5be6a8=$[_0x48b569(0x1a8)][_0x48b569(0x1df)](_0x48b569(0x153),new Date(_0x2bf242));$(_0x48b569(0x1c4))['text'](_0x5be6a8);}function Applyattendence(_0x480235){var _0x3fac47=a0_0x461d;if($(_0x3fac47(0x166))['val']()==null)return alert(_0x3fac47(0x152)),![];var _0x45b009=$('#currentEmpName')['text'](),_0x583de0=$(_0x3fac47(0x133))[_0x3fac47(0x1c1)](),_0x194277=$('#currentEmpAttendanceType')[_0x3fac47(0x1c1)](),_0x1767d5=$('#currentAttencedenceId')['val']();_0x1767d5==''?$['when'](insertAttendence(_0x583de0,_0x194277))[_0x3fac47(0x1ac)](function(_0x533a60){var _0x5cd0f2=_0x3fac47;MutipleBaseFilter(),alert(_0x5cd0f2(0x182));}):$[_0x3fac47(0x13d)](UpdateAttendencee(_0x194277,_0x1767d5))[_0x3fac47(0x1ac)](function(_0x48b406){var _0x46b574=_0x3fac47;MutipleBaseFilter(),alert(_0x46b574(0x13f));});}function insertAttendence(_0x4ce35a,_0x5783b7){var _0x1a0465=a0_0x461d,_0x249cf1=ConvertddmmyyTommddyy($(_0x1a0465(0x16e))[_0x1a0465(0x1c1)]());_0x249cf1=new Date(_0x249cf1),_0x249cf1=$[_0x1a0465(0x1a8)]['formatDate'](_0x1a0465(0x18a),_0x249cf1);var _0xa75a77=$[_0x1a0465(0x15f)](),_0x5c3f4a=_0x1a0465(0x1b0),_0x104b0f=_spPageContextInfo[_0x1a0465(0x164)]+'/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items',_0x6c55c8='SP.Data.'+_0x5c3f4a['charAt'](0x0)[_0x1a0465(0x1c2)]()+_0x5c3f4a['split']('\x20')[_0x1a0465(0x185)]('')['slice'](0x1)+_0x1a0465(0x1b7),_0xb82470;return _0xb82470={'__metadata':{'type':_0x6c55c8},'Title':_0x1a0465(0x14b),'WorkHours':'0','HrAction':_0x1a0465(0x19c),'EmployeeId':_0x4ce35a,'AttendanceDate':_0x249cf1,'AttendanceType':_0x5783b7},$[_0x1a0465(0x139)]({'url':_0x104b0f,'type':'POST','async':![],'headers':{'accept':_0x1a0465(0x1e9),'X-RequestDigest':$(_0x1a0465(0x1f1))[_0x1a0465(0x1c1)](),'content-Type':_0x1a0465(0x1e9)},'data':JSON[_0x1a0465(0x15b)](_0xb82470),'success':function(_0x3bdbed){var _0x5cc777=_0x1a0465;_0xa75a77[_0x5cc777(0x1cc)](!![]);},'error':function(_0x5b82f7){var _0x52745b=_0x1a0465;console[_0x52745b(0x196)](JSON[_0x52745b(0x15b)](_0x5b82f7)),_0xa75a77['reject'](_0x5b82f7);}}),_0xa75a77[_0x1a0465(0x156)]();}function UpdateAttendencee(_0x929aec,_0x1736c7){var _0x222739=a0_0x461d,_0x14bca6=titanForWork[_0x222739(0x172)](_0x222739(0x157)),_0x1e938d=$['Deferred'](),_0x3f1752='EmpAttendance',_0x15d6e8=_spPageContextInfo[_0x222739(0x164)]+'/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items('+_0x1736c7+')',_0x4d7760='SP.Data.'+_0x3f1752[_0x222739(0x1a1)](0x0)[_0x222739(0x1c2)]()+_0x3f1752[_0x222739(0x1fa)]('\x20')['join']('')[_0x222739(0x15c)](0x1)+_0x222739(0x1b7),_0x410cf0;return _0x410cf0={'__metadata':{'type':_0x4d7760},'Title':_0x222739(0x14b),'HrAction':_0x222739(0x19c),'AttendanceType':_0x929aec},$[_0x222739(0x139)]({'url':_0x15d6e8,'type':_0x222739(0x146),'async':![],'headers':{'accept':_0x222739(0x1e9),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x222739(0x1c1)](),'content-Type':_0x222739(0x1e9),'X-Http-Method':_0x222739(0x18d),'If-Match':'*'},'data':JSON['stringify'](_0x410cf0),'success':function(_0x169dd3){var _0x157f17=_0x222739;_0x1e938d[_0x157f17(0x1cc)](!![]);},'error':function(_0x10863d){var _0x581957=_0x222739;console[_0x581957(0x196)](JSON[_0x581957(0x15b)](_0x10863d)),_0x1e938d['reject'](_0x10863d);}}),_0x1e938d[_0x222739(0x156)]();}function ConvertddmmyyTommddyy(_0x3c9e82){var _0x1e0239=a0_0x461d;return _0x3c9e82[_0x1e0239(0x1fa)]('/')[0x1]+'/'+_0x3c9e82['split']('/')[0x0]+'/'+_0x3c9e82[_0x1e0239(0x1fa)]('/')[0x2];}function selectedAttendenceEvent(){var _0x5a1df3=a0_0x461d;$(_0x5a1df3(0x160))['text']('');var _0x42db70=ConvertddmmyyTommddyy($('#attendencedateValue')['val']()),_0x1da166=$['datepicker'][_0x5a1df3(0x1df)](_0x5a1df3(0x153),new Date(_0x42db70));$(_0x5a1df3(0x160))[_0x5a1df3(0x18b)](_0x1da166),$(_0x5a1df3(0x1b9))['change'](function(){var _0xc827cd=_0x5a1df3;selectedAttendListItem=[],$(_0xc827cd(0x1b9))['each'](function(){var _0x4e9e6b=_0xc827cd;if($(this)['prop'](_0x4e9e6b(0x148))==!![]){var _0x1fa2c9=$(this)[_0x4e9e6b(0x1c1)](),_0x3d3cdc=$(this)['closest']('tr'),_0x12b0bd=_0x3d3cdc[_0x4e9e6b(0x150)](_0x4e9e6b(0x1b8))[_0x4e9e6b(0x18b)](),_0x392ea7=_0x3d3cdc[_0x4e9e6b(0x150)](_0x4e9e6b(0x147))[_0x4e9e6b(0x18b)]();selectedAttendListItem[_0x4e9e6b(0x135)]({'AttenListitemId':_0x1fa2c9,'EmpName':_0x12b0bd,'Empid':_0x392ea7});}});});}function UpdateMultipleSelectedItem(){var _0x390333=a0_0x461d;if(selectedAttendListItem[_0x390333(0x16a)]>0x0){if($(_0x390333(0x17f))['val']()=='select'){alert('Please\x20select\x20Attendance\x20type');return![];$(_0x390333(0x128))['modal'](_0x390333(0x1ec));}else{var _0x55f214=0x1;for(var _0x105bfa=0x0;_0x105bfa<selectedAttendListItem[_0x390333(0x16a)];_0x105bfa++){var _0xbd8361=selectedAttendListItem[_0x105bfa][_0x390333(0x168)],_0x49bbaa=selectedAttendListItem[_0x105bfa][_0x390333(0x1ab)],_0x1ab167=$(_0x390333(0x17f))[_0x390333(0x1c1)]();_0xbd8361==''?$[_0x390333(0x13d)](insertAttendence(_0x49bbaa,_0x1ab167))['done'](function(_0x207f50){var _0x39f3fe=_0x390333;_0x55f214==selectedAttendListItem[_0x39f3fe(0x16a)]&&(selectedAttendListItem=[],MutipleBaseFilter(),alert(_0x39f3fe(0x15a)),$(_0x39f3fe(0x128))[_0x39f3fe(0x186)](_0x39f3fe(0x1ec)),$(_0x39f3fe(0x167))[_0x39f3fe(0x178)](_0x39f3fe(0x148),![]),$(_0x39f3fe(0x1e3))[_0x39f3fe(0x1ec)]());}):$[_0x390333(0x13d)](UpdateAttendencee(_0x1ab167,_0xbd8361))['done'](function(_0x3cbe9d){var _0x112560=_0x390333;_0x55f214==selectedAttendListItem[_0x112560(0x16a)]&&(selectedAttendListItem=[],MutipleBaseFilter(),alert(_0x112560(0x15a)),$(_0x112560(0x128))['modal'](_0x112560(0x1ec)),$(_0x112560(0x167))[_0x112560(0x178)]('checked',![]),$(_0x112560(0x1e3))[_0x112560(0x1ec)]());}),_0x55f214++;}}}else alert('Please\x20select\x20Employees\x20to\x20update\x20Attendance');}function ConvertHHMM(_0x4d1b52){var _0x19a005=a0_0x461d,_0x27266e=Math[_0x19a005(0x1e4)](_0x4d1b52/0x3c),_0x46524b=_0x4d1b52%0x3c;_0x27266e<0xa&&(_0x27266e='0'+_0x27266e);_0x46524b<0xa&&(_0x46524b='0'+_0x46524b);var _0x3195ec=_0x27266e+':'+_0x46524b;return _0x3195ec;}function GetHolidays(_0x4c4e18){var _0x335108=a0_0x461d,_0x1e7159=_spPageContextInfo[_0x335108(0x164)]+_0x335108(0x191)+_0x4c4e18+_0x335108(0x1ba)+titanForWork[_0x335108(0x172)](_0x335108(0x157))+'\x27&$top=200&$orderby=Holiday_start\x20asc';$['ajax']({'url':_0x1e7159,'headers':{'Accept':_0x335108(0x1e9)},'async':![],'success':function(_0x53c3f7){var _0x4481d7=_0x335108;debugger;var _0x33a9d8=_0x53c3f7['d']['results'],_0xe64947='';$(_0x4481d7(0x1c7))[_0x4481d7(0x141)]();if(_0x33a9d8[_0x4481d7(0x16a)]>0x0){$('#daydate')['css']('color',_0x4481d7(0x1f0)),$('#monthhyear')[_0x4481d7(0x14d)](_0x4481d7(0x163),_0x4481d7(0x1f0));for(var _0x229048=0x0;_0x229048<_0x33a9d8[_0x4481d7(0x16a)];_0x229048++){_0xe64947=_0xe64947+_0x4481d7(0x1fd)+_0x33a9d8[_0x229048][_0x4481d7(0x1dc)][_0x4481d7(0x13e)]+_0x4481d7(0x1d3);}$(_0x4481d7(0x1f5))[_0x4481d7(0x14d)](_0x4481d7(0x143),_0x4481d7(0x181)),$(_0x4481d7(0x1c7))[_0x4481d7(0x1bc)](_0xe64947);let _0x200905={'marquee_class':_0x4481d7(0x158),'container_class':_0x4481d7(0x14c),'sibling_class':0x0,'hover':!![],'duplicated':![],'easing':_0x4481d7(0x1e2),'direction':_0x4481d7(0x19e),'speed':0x32};}else $(_0x4481d7(0x1f5))[_0x4481d7(0x14d)]('display','none'),$(_0x4481d7(0x1a0))[_0x4481d7(0x14d)](_0x4481d7(0x163),_0x4481d7(0x132)),$(_0x4481d7(0x1b5))[_0x4481d7(0x14d)](_0x4481d7(0x163),_0x4481d7(0x132));},'error':function(_0x10448b){var _0x22565f=_0x335108;alert(_0x22565f(0x1af));}});}function a0_0x20cc(){var _0xfcaf67=['#AttendanceType','or\x20LogonNameId\x20eq\x20\x27','show','#currentAttencedenceId','split','.Attendancetype','></td>','<li>','#updateMutipleAttend','#applyMutipleSelectedUpdate','</option>','WorkHours','Action\x20taken\x20successfully.','<option\x20value=\x22','#AttendanceType\x20option:selected','#currentEmpDepartment','#onleaveValue','#totalemp','black','#empId','totalpages','push','Department','span[class=\x27sp-peoplepicker-userSpan\x27]','Holiday','ajax','SPClientPeoplePicker','#timesheetFrom','#TotalItemscount','when','Title','Attendance\x20Updated','table','empty','desc','display','DeleteProcessedUser','evenselected','POST','.EmpID','checked','ResolvedListElementId','<td><div\x20class=\x27attendance-edit-lock-btn-box\x20text-center\x27>\x20<a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20onclick=\x27attendanceEditModal(this,','Attendance','.simple-marquee-container','css','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items(\x27','MERGE','find','<td><input\x20type=\x27checkbox\x27\x20class=\x27Attenid\x27\x20\x20value=\x27','Please\x20Select\x20Attendance\x20type','dd\x20M\x20yy','\x27\x20onclick=\x27HrActionVerify(this.value)\x27\x20','columns','promise','CompanyId','.marquee','SP.Data.EmpAttendanceListItem','Attendance\x20Submitted','stringify','slice','</tr>','MaximumEntitySuggestions','Deferred','#mutipleUpdatedate','<td><div\x20class=\x27attendance-table-ellipsis-2\x20OfficeLocation\x27>','#allOfficeLocation','color','webAbsoluteUrl','_TopSpan','#currentEmpAttendanceType','#selectAll','AttenListitemId','<option\x20value=\x22All\x22>All</option>','length','ResolvePrincipalSource','</span></td>','click','#attendencedateValue','indexOf','SPClientPeoplePicker_InitStandaloneControlWrapper','#allDepartment','getQueryStringParameter','303799RgtgBr','OfficeLocation','627408bsbzAk','DepartmentName','/_api/web/lists/getbytitle(\x27EmpAttendance\x27)/items?$filter=ID\x20eq\x20(\x27','prop','PrincipalAccountType','startrecord','setDate','<tr\x20class=\x27text-center\x27>','and\x20(LogonNameId\x20eq\x20\x27','.NoRecordFound','#mutipleEmpAttendType','SearchPrincipalSource','block','Attendance\x20Updated\x20Successfully','<td><input\x20type=\x27checkbox\x27\x20name=\x27HRACTIONCHK\x27\x20value=\x27','<div\x20class=\x27upload-chip\x27>','join','modal','HrAction','selectedrow','map','mm/dd/yy','text','each','PATCH','appendTo','results','All','/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?$select=*,OfficeLocationID/Title&$expand=OfficeLocationID&$filter=Holiday_start\x20eq\x20\x27','User,DL,SecGroup,SPGroup','blue','sorter','AttendanceDate','log','#currentEmpName','\x27></td>','#currentEmpDesignation','.Designation','SPClientPeoplePickerDict','true','#AttendanceChips','left','pagedropdown','#daydate','charAt','Not\x20Specified','/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$top=5000&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20Company/ID\x20\x20eq\x20\x27','2776194eNTxFm','tablenav','#closeCross','datepicker','#allOfficeLocation\x20option:selected','closest','Empid','done','AttendanceType','endrecord','An\x20error\x20occurred.\x20Please\x20try\x20again.','EmpAttendance','#tattendanceRegtable','25ZhHcVB','Half\x20Day','\x20(H:M)</a>\x20</td>','#monthhyear','#mutipleFilter','ListItem','.EmpName','.Attenid','\x27\x20and\x20CompanyID\x20eq\x20\x27','and\x20OfficeLocation/ID\x20eq\x20\x27','append','OfficeName','4YSaFLL','884502pTGYHv','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20eq\x20\x27','val','toUpperCase','#attendanceEdit','#currentdatefilter','siteAbsoluteUrl','and\x20Department/ID\x20eq\x20\x27','#HolidayCity','DD/MM/YYYY','Width','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Attendancetype\x27\x20style=\x27color:','format','resolve','4006590reRxqE','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Attendancetype\x27>-</div></td>','280px','EmpWorkHours','00:00\x20(H:M)','#updateMutipleCheckBox','</li>','Please\x20select\x20Employees\x20to\x20update\x20Attendance','#attendanceDate','LogonName','49rKMvoq','\x27\x20onclick=\x27HrActionVerify(this.value)\x27\x20disabled></td>','<td><div\x20class=\x27attendance-table-ellipsis-2\x20Department\x27>','#allDepartment\x20option:selected','AttendanceItemId','OfficeLocationID','</div></td>','393048czxYjr','formatDate','UserId','<td><a\x20href=\x27#\x27>','linear','#showLoderForMutiple','floor','asc','TempTableQuestions','getElementById','error','application/json;odata=verbose','EmployeeAttendence','#ResultDiv','hide','</div><span\x20style=\x27display:none\x27\x20class=\x27EmpID\x27>','and\x20(AttendanceType\x20eq\x20\x271st\x20Half\x27\x20or\x20AttendanceType\x20eq\x20\x272nd\x20Half\x27)\x20','#clearControl','red','#__REQUESTDIGEST','</div>','872409IpGhJr','HasResolvedUsers','.marquee-div'];a0_0x20cc=function(){return _0xfcaf67;};return a0_0x20cc();}function HrActionVerify(_0x2e5b7a){var _0x2da87b=a0_0x461d,_0x53ce51=_0x2e5b7a;debugger;var _0x56d66c=_spPageContextInfo[_0x2da87b(0x164)]+_0x2da87b(0x177)+_0x2e5b7a+'\x27)';$[_0x2da87b(0x139)]({'url':_0x56d66c,'headers':{'Accept':_0x2da87b(0x1e9)},'async':![],'success':function(_0x589a24){var _0x4aa660=_0x2da87b;debugger;var _0x3246b1=_0x589a24['d'][_0x4aa660(0x18f)];if(_0x3246b1['length']>0x0){var _0x2f5da4=_0x3246b1[0x0][_0x4aa660(0x187)];if(_0x2f5da4==!![])var _0x32596c=![];else{if(_0x2f5da4==![])var _0x32596c=!![];}$[_0x4aa660(0x139)]({'url':_spPageContextInfo[_0x4aa660(0x164)]+_0x4aa660(0x14e)+_0x2e5b7a+'\x27)','type':'POST','data':JSON[_0x4aa660(0x15b)]({'__metadata':{'type':_0x4aa660(0x159)},'HrAction':_0x32596c}),'headers':{'Accept':_0x4aa660(0x1e9),'Content-Type':_0x4aa660(0x1e9),'X-RequestDigest':$(_0x4aa660(0x1f1))[_0x4aa660(0x1c1)](),'IF-MATCH':'*','X-HTTP-Method':_0x4aa660(0x14f)},'success':function(_0x154683,_0x4e6463,_0x15db71){var _0x418a05=_0x4aa660;console['log'](_0x418a05(0x12c));},'error':function(_0x516d58,_0x14e933,_0x25bf4b){var _0x348fd9=_0x4aa660;$(_0x348fd9(0x1eb))['empty']()[_0x348fd9(0x18b)](_0x589a24['responseJSON'][_0x348fd9(0x1e8)]);}});}else $('input[name=\x27HRACTIONCHK\x27][value=\x27'+_0x53ce51+'\x27]')['prop'](_0x4aa660(0x148),![]);},'error':function(_0x14639d){var _0x4c55bf=_0x2da87b;alert(_0x4c55bf(0x1af));}});}