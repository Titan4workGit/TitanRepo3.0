var a0_0x77da00=a0_0x23c0;(function(_0x1922c2,_0x57fde4){var _0x3607c1=a0_0x23c0,_0x1c84e0=_0x1922c2();while(!![]){try{var _0x4ee9dd=-parseInt(_0x3607c1(0x1f7))/0x1*(-parseInt(_0x3607c1(0x28a))/0x2)+-parseInt(_0x3607c1(0x1d2))/0x3*(-parseInt(_0x3607c1(0x24f))/0x4)+parseInt(_0x3607c1(0x293))/0x5*(-parseInt(_0x3607c1(0x1cc))/0x6)+-parseInt(_0x3607c1(0x226))/0x7*(-parseInt(_0x3607c1(0x272))/0x8)+-parseInt(_0x3607c1(0x211))/0x9*(parseInt(_0x3607c1(0x25c))/0xa)+-parseInt(_0x3607c1(0x234))/0xb*(parseInt(_0x3607c1(0x1fd))/0xc)+-parseInt(_0x3607c1(0x24d))/0xd*(-parseInt(_0x3607c1(0x268))/0xe);if(_0x4ee9dd===_0x57fde4)break;else _0x1c84e0['push'](_0x1c84e0['shift']());}catch(_0x159710){_0x1c84e0['push'](_0x1c84e0['shift']());}}}(a0_0xee99,0x8f3d4));var Totaldays=0x0,CompanyID='',GstartDate='',GEmpID=0x0;$(document)['ready'](function(){var _0x14327d=a0_0x23c0;ValidateHrAdmin(),initializePeoplePicker('EmployeeName'),CompanyID=titanForWork['getQueryStringParameter'](_0x14327d(0x291));var _0x384f24=$[_0x14327d(0x1ea)](_0x14327d(0x228)),_0x26bac8=$['urlParam'](_0x14327d(0x1ef)),_0x49471f=$[_0x14327d(0x1ea)](_0x14327d(0x1c9));if(_0x384f24!=null){GEmpID=_0x384f24;var _0x304a8f=_0x26bac8[_0x14327d(0x278)](0x0,0x4)+'-'+_0x26bac8[_0x14327d(0x278)](0x4,0x6)+'-'+_0x26bac8[_0x14327d(0x278)](0x6,0x8),_0xdd521a=_0x49471f[_0x14327d(0x278)](0x0,0x4)+'-'+_0x49471f[_0x14327d(0x278)](0x4,0x6)+'-'+_0x49471f['slice'](0x6,0x8),_0x5476d7=new Date(_0xdd521a);_0x5476d7[_0x14327d(0x1c5)](_0x5476d7[_0x14327d(0x253)]()+0x1);var _0x12c0cf=_0x5476d7[_0x14327d(0x283)](),_0x3597e4=_0x12c0cf[_0x14327d(0x1e7)]('T');GstartDate=_0x304a8f,$(_0x14327d(0x265))[_0x14327d(0x260)]({'dateFormat':'dd/mm/yy','maxDate':new Date()})[_0x14327d(0x260)](_0x14327d(0x1c5),new Date(_0x304a8f)),$(_0x14327d(0x1c2))[_0x14327d(0x260)]({'dateFormat':_0x14327d(0x245),'maxDate':new Date()})[_0x14327d(0x260)](_0x14327d(0x1c5),new Date(_0xdd521a));var _0x3f08fc=$(_0x14327d(0x265))['datepicker'](_0x14327d(0x253)),_0x5be884=$('#EmpreportTo')[_0x14327d(0x260)]('getDate');days=(_0x5be884-_0x3f08fc)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math[_0x14327d(0x284)](days)+0x1,$(_0x14327d(0x1dc))[_0x14327d(0x290)](formatDateReportEmp(ConvertDateTimeFormat($(_0x14327d(0x265))[_0x14327d(0x22e)](),'/'))),$(_0x14327d(0x249))[_0x14327d(0x290)](formatDateReportEmp(ConvertDateTimeFormat($('#EmpreportTo')[_0x14327d(0x22e)](),'/')));var _0x50bf9b=_spPageContextInfo[_0x14327d(0x203)]+_0x14327d(0x25d)+_0x384f24+_0x14327d(0x1f8)+CompanyID+'\x27';EmployeeListDat(_0x50bf9b),LoadAllHolidays();var _0x377c4c=_spPageContextInfo[_0x14327d(0x203)]+_0x14327d(0x270)+_0x304a8f+'\x27\x20and\x20AttendanceDate\x20le\x20\x27'+_0x3597e4+_0x14327d(0x256)+_0x384f24+'\x27\x20';EmpReportUsageUrl=_0x377c4c,getFileData();var _0x50bf9b=_spPageContextInfo[_0x14327d(0x203)]+_0x14327d(0x25d)+_0x384f24+'\x27\x20and\x20Company/ID\x20\x20eq\x20\x27'+CompanyID+'\x27';EmployeeListDat(_0x50bf9b),LoadAllHolidays();}});var EmployeeID='',ItemID='',SelectedDate='',TDID='';function attendanceEditModal(_0xd07d31,_0x298960,_0x29749f){var _0xda800e=a0_0x23c0;EmployeeID=0x0,ItemID=0x0,SelectedDate='',TDID=_0x29749f,EmployeeID=_0xd07d31,ItemID=_0x298960;var _0x40c865=_0x29749f[_0xda800e(0x208)](),_0x4b4d3e=_0x40c865['slice'](0x0,0x4)+'-'+_0x40c865['slice'](0x4,0x6)+'-'+_0x40c865[_0xda800e(0x278)](0x6,0x8),_0xbbaf53=new Date(_0x4b4d3e);SelectedDate=_0xbbaf53[_0xda800e(0x283)]()[_0xda800e(0x1e7)]('T')[0x0];var _0x5b4966=formatDateReportEmp(_0xbbaf53);$('#SelDate')[_0xda800e(0x290)](_0x5b4966),GetHolidays(_0x4b4d3e);}function UpdateAttendance(){var _0x2125ec=a0_0x23c0;ItemID==0x0?(G_Validateholiday==!![]?confirm(_0x2125ec(0x287))&&PushNewAttendance():PushNewAttendance(),Applyfilter(),LoadAllHolidays()):(G_Validateholiday==!![]?confirm(_0x2125ec(0x287))&&ModifyAttendance():ModifyAttendance(),Applyfilter(),LoadAllHolidays());}function PushNewAttendance(){var _0x35e4da=a0_0x23c0;$(_0x35e4da(0x1f5))[_0x35e4da(0x22e)]()!=_0x35e4da(0x1cd)||G_Validateholiday==!![]?$[_0x35e4da(0x1d4)]({'url':_spPageContextInfo[_0x35e4da(0x203)]+_0x35e4da(0x23f),'type':_0x35e4da(0x1d5),'async':![],'data':JSON[_0x35e4da(0x26d)]({'__metadata':{'type':_0x35e4da(0x216)},'AttendanceDate':SelectedDate,'EmployeeId':EmployeeID,'AttendanceType':$(_0x35e4da(0x1f5))[_0x35e4da(0x22e)]()}),'headers':{'Accept':_0x35e4da(0x1c0),'Content-Type':_0x35e4da(0x1c0),'X-RequestDigest':$(_0x35e4da(0x27c))[_0x35e4da(0x22e)](),'X-HTTP-Method':_0x35e4da(0x1d5)},'success':function(_0x3f479d,_0x50ced8,_0x93ff66){var _0x495498=_0x35e4da;$('#Att'+TDID)[_0x495498(0x290)]($(_0x495498(0x1f5))[_0x495498(0x22e)]()),alert('Data\x20has\x20been\x20saved.'),$(_0x495498(0x1bf))[_0x495498(0x200)](_0x495498(0x26c)),GetAttendanceorLeaves();},'error':function(_0x4ee863,_0x52edb1,_0x193cba){var _0x274bc6=_0x35e4da;alert(_0x274bc6(0x1d9));}}):alert(_0x35e4da(0x1e4));}function ModifyAttendance(){var _0x14abb7=a0_0x23c0;$('#AttendanceDDL')[_0x14abb7(0x22e)]()!=_0x14abb7(0x1cd)||G_Validateholiday==!![]?$[_0x14abb7(0x1d4)]({'url':_spPageContextInfo[_0x14abb7(0x203)]+_0x14abb7(0x21b)+ItemID+')','type':_0x14abb7(0x1d5),'async':![],'data':JSON['stringify']({'__metadata':{'type':_0x14abb7(0x216)},'AttendanceType':$(_0x14abb7(0x1f5))[_0x14abb7(0x22e)]()}),'headers':{'Accept':_0x14abb7(0x1c0),'Content-Type':_0x14abb7(0x1c0),'X-RequestDigest':$('#__REQUESTDIGEST')['val'](),'IF-MATCH':'*','X-HTTP-Method':_0x14abb7(0x292)},'success':function(_0xab2982,_0x50cdbf,_0x51a2d5){var _0x4f323f=_0x14abb7;$(_0x4f323f(0x288)+TDID)[_0x4f323f(0x290)]($(_0x4f323f(0x1f5))[_0x4f323f(0x22e)]()),$(_0x4f323f(0x236)+TDID)[_0x4f323f(0x290)](_0x4f323f(0x251)),alert(_0x4f323f(0x1f2)),$('#attendance-reportEdit')[_0x4f323f(0x200)]('hide'),GetAttendanceorLeaves();},'error':function(_0x18005e,_0x5b2e2b,_0x3c1e37){var _0x11acad=_0x14abb7;alert(_0x11acad(0x1d9));}}):alert(_0x14abb7(0x1e4));}function initializePeoplePicker(_0x588c41){var _0x287142=a0_0x23c0,_0x553761={};_0x553761['PrincipalAccountType']=_0x287142(0x276),_0x553761['SearchPrincipalSource']=0xf,_0x553761[_0x287142(0x235)]=0xf,_0x553761[_0x287142(0x242)]=![],_0x553761['MaximumEntitySuggestions']=0x32,_0x553761[_0x287142(0x20e)]=_0x287142(0x294),this[_0x287142(0x298)](_0x588c41,null,_0x553761);}function Applyfilter(){var _0x1ef647=a0_0x23c0;OpenMyCustomLoader(),EmpReportData=[];var _0x1fd1fd=$[_0x1ef647(0x1ea)]('EID'),_0x3dd2a9=$(_0x1ef647(0x265))[_0x1ef647(0x260)]('getDate'),_0x5a4cba=$(_0x1ef647(0x1c2))[_0x1ef647(0x260)]('getDate');days=(_0x5a4cba-_0x3dd2a9)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math[_0x1ef647(0x284)](days)+0x1,$(_0x1ef647(0x1dc))[_0x1ef647(0x290)](formatDateReportEmp(ConvertDateTimeFormat($('#EmpreportFrom')[_0x1ef647(0x22e)](),'/'))),$('#EndDate')[_0x1ef647(0x290)](formatDateReportEmp(ConvertDateTimeFormat($('#EmpreportTo')[_0x1ef647(0x22e)](),'/')));var _0x427cb3=moment($(_0x1ef647(0x265))['val'](),'DD/MM/YYYY')[_0x1ef647(0x224)]('YYYY-MM-DD'),_0x28f886=moment($(_0x1ef647(0x1c2))['val'](),_0x1ef647(0x23c))[_0x1ef647(0x224)](_0x1ef647(0x269)),_0x28d3eb=new Date(_0x28f886);_0x28d3eb[_0x1ef647(0x1c5)](_0x28d3eb['getDate']()+0x1);var _0x35cbe8=_0x28d3eb[_0x1ef647(0x283)](),_0x4f9b84=_0x35cbe8[_0x1ef647(0x1e7)]('T');GstartDate=_0x427cb3;var _0x454ddb=ensureUser($(_0x1ef647(0x22a))[_0x1ef647(0x201)]()[_0x1ef647(0x201)]()[_0x1ef647(0x248)]('id'));if(_0x454ddb==0x0){_0x1fd1fd=_0x1fd1fd,GEmpID=_0x1fd1fd;var _0x9276d=_spPageContextInfo[_0x1ef647(0x203)]+_0x1ef647(0x285)+_0x427cb3+_0x1ef647(0x218)+_0x4f9b84+_0x1ef647(0x256)+_0x1fd1fd+'\x27\x20';EmpReportUsageUrl=_0x9276d,getFileData();var _0x3d943c=_spPageContextInfo['webAbsoluteUrl']+_0x1ef647(0x25d)+_0x1fd1fd+_0x1ef647(0x1f8)+CompanyID+'\x27';EmployeeListDat(_0x3d943c);}else{if(ISHRADMIN==!![]){_0x1fd1fd=_0x454ddb,GEmpID=_0x454ddb;var _0x9276d=_spPageContextInfo[_0x1ef647(0x203)]+_0x1ef647(0x285)+_0x427cb3+_0x1ef647(0x218)+_0x4f9b84+_0x1ef647(0x256)+_0x1fd1fd+'\x27\x20';EmpReportUsageUrl=_0x9276d,getFileData();var _0x3d943c=_spPageContextInfo['webAbsoluteUrl']+_0x1ef647(0x25d)+_0x1fd1fd+_0x1ef647(0x1f8)+CompanyID+'\x27';EmployeeListDat(_0x3d943c);}else alert(_0x1ef647(0x295));}LoadAllHolidays();}var DataIdList=[],EmpAttendanceData=[],TotalLeavesorAbsent=[],EmpReportUsageUrl='',EmpReportData=EmpReportData||[];function getFileData(){var _0x59f33b=a0_0x23c0;jQuery[_0x59f33b(0x1d4)]({'url':EmpReportUsageUrl,'headers':{'Accept':_0x59f33b(0x1c0)},'async':!![],'success':function(_0x3ab0d6){var _0x451d2c=_0x59f33b;EmpReportData=EmpReportData[_0x451d2c(0x1d8)](_0x3ab0d6['d']['results']);if(_0x3ab0d6['d']['__next'])EmpReportUsageUrl=_0x3ab0d6['d'][_0x451d2c(0x229)],getFileData();else{if(EmpReportData[_0x451d2c(0x231)]>0x0){var _0x5d5dc9=ensureUser($('#EmployeeName')[_0x451d2c(0x201)]()[_0x451d2c(0x201)]()['attr']('id')),_0x8c6c1b=$[_0x451d2c(0x1ea)]('EID');_0x5d5dc9!=0x0?EmpReportData=$[_0x451d2c(0x279)](EmpReportData,function(_0x269bb5){return _0x269bb5['Employee']['ID']==_0x5d5dc9;}):EmpReportData=$[_0x451d2c(0x279)](EmpReportData,function(_0x1edccb){var _0x47bb93=_0x451d2c;return _0x1edccb[_0x47bb93(0x233)]['ID']==_0x8c6c1b;});var _0x5ae9fc=moment(ConvertDateTimeFormat($(_0x451d2c(0x265))[_0x451d2c(0x22e)](),'/'))[_0x451d2c(0x224)](_0x451d2c(0x1cb)),_0x3314c4=moment(ConvertDateTimeFormat($(_0x451d2c(0x1c2))[_0x451d2c(0x22e)](),'/'))[_0x451d2c(0x224)](_0x451d2c(0x1cb)),_0x5b6ee0=EmpReportData['filter'](function(_0x2c5efe){var _0x5316f5=_0x451d2c;return Created=moment(_0x2c5efe[_0x5316f5(0x21e)])[_0x5316f5(0x224)](_0x5316f5(0x1cb)),(_0x5ae9fc==''?Created!='':Created>=_0x5ae9fc)&&(_0x3314c4==''?Created!='':Created<=_0x3314c4);});GenerateEmpReport(_0x5b6ee0);}else{var _0x5b6ee0=[];GenerateEmpReport(_0x5b6ee0);}CloseMyCustomLoader();}},'error':function(_0x4227bc,_0xf82ca8,_0x418df2){var _0x46aeec=_0x59f33b;console[_0x46aeec(0x28f)](_0x46aeec(0x267)),console[_0x46aeec(0x28f)](_0x4227bc[_0x46aeec(0x26a)][_0x46aeec(0x1cf)][_0x46aeec(0x217)][_0x46aeec(0x1c6)]);var _0x52feaf=_0x4227bc['responseJSON'][_0x46aeec(0x1cf)]['message'][_0x46aeec(0x1c6)],_0x3fc575=_0x52feaf[_0x46aeec(0x244)](_0x46aeec(0x1ec));if(_0x3fc575==!![]){EmpReportData=[];var _0x2c0956=_spPageContextInfo[_0x46aeec(0x203)]+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=2000';EmpReportUsageUrl=_0x2c0956,getFileData();}}});}function GenerateEmpReport(_0x319abc){var _0x5f3ef4=a0_0x23c0;EmpAttendanceData=[],DataIdList=[];var _0x803fd0=[];TotalLeavesorAbsent=[];for(var _0x55b3f8=0x0;_0x55b3f8<_0x319abc['length'];_0x55b3f8++){if(_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]!=_0x5f3ef4(0x1e3)&&_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]!=_0x5f3ef4(0x1cd))_0x803fd0[_0x5f3ef4(0x205)](_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]);else{if(_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]==_0x5f3ef4(0x1e3))TotalLeavesorAbsent[_0x5f3ef4(0x205)](_0x319abc[_0x55b3f8]['AttendanceType']);else _0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]==_0x5f3ef4(0x1cd)&&TotalLeavesorAbsent[_0x5f3ef4(0x205)](_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)]);}var _0x31d25e=_0x319abc[_0x55b3f8]['ID'],_0x5c2dbd=_0x319abc[_0x55b3f8][_0x5f3ef4(0x233)][_0x5f3ef4(0x286)],_0x18f95c=_0x319abc[_0x55b3f8]['Employee']['ID'],_0x442ab3=formatDateReportEmp(_0x319abc[_0x55b3f8][_0x5f3ef4(0x21e)]),_0x16bfae=_0x319abc[_0x55b3f8][_0x5f3ef4(0x202)],_0x451547=_0x319abc[_0x55b3f8][_0x5f3ef4(0x274)],_0x44873b=_0x319abc[_0x55b3f8]['HrAction'];EmpAttendanceData['push']({'UserId':_0x18f95c,'EmpName':_0x5c2dbd,'AttendanceDate':_0x442ab3,'AttendanceType':_0x16bfae,'AttendanceItemId':_0x31d25e,'EmpWorkHours':_0x451547,'HrAction':_0x44873b});}var _0x464ab0='';$(_0x5f3ef4(0x296))[_0x5f3ef4(0x1d6)]();var _0x37cd67=0x0,_0x1d8f58=0x0;for(var _0x414b22=0x0;_0x414b22<Totaldays;_0x414b22++){var _0x4834db=new Date(GstartDate);_0x4834db[_0x5f3ef4(0x1c5)](_0x4834db[_0x5f3ef4(0x253)]()+_0x414b22);var _0x1336d7=moment(_0x4834db,_0x5f3ef4(0x23c))[_0x5f3ef4(0x224)](_0x5f3ef4(0x269)),_0x1336d7=_0x1336d7[_0x5f3ef4(0x1e7)]('-')[_0x5f3ef4(0x243)]('');DataIdList[_0x5f3ef4(0x205)](_0x1336d7);var _0x3b6ca7=formatDateReportEmp(_0x4834db),_0x4ec835=EmpAttendanceData[_0x5f3ef4(0x223)](function(_0x27a265){var _0x1ece76=_0x5f3ef4;return _0x27a265[_0x1ece76(0x21e)];})[_0x5f3ef4(0x1e6)](_0x3b6ca7);if(_0x4ec835!=-0x1){var _0x265c12=EmpAttendanceData[_0x4ec835][_0x5f3ef4(0x202)],_0x27d0a8=EmpAttendanceData[_0x4ec835][_0x5f3ef4(0x220)],_0x44873b=EmpAttendanceData[_0x4ec835][_0x5f3ef4(0x259)],_0x27c615=EmpAttendanceData[_0x4ec835][_0x5f3ef4(0x21a)],_0x3d9102=EmpAttendanceData[_0x4ec835][_0x5f3ef4(0x232)],_0xa1994f=_0x5f3ef4(0x222),_0x1b1adc=_0x5f3ef4(0x1fa);_0x44873b==!![]&&(_0xa1994f=_0x5f3ef4(0x1fa),_0x1b1adc=_0x5f3ef4(0x222));if(_0x265c12!=_0x5f3ef4(0x1e3)&&_0x265c12!='Holiday'){if(_0x27d0a8==null)var _0xc713d9=_0x5f3ef4(0x277)+_spPageContextInfo[_0x5f3ef4(0x203)]+_0x5f3ef4(0x1d7)+_0x1336d7+_0x5f3ef4(0x27b)+window[_0x5f3ef4(0x24b)](_0x5f3ef4(0x247))+_0x5f3ef4(0x1fb)+_0x1336d7+_0x5f3ef4(0x264);else var _0xc713d9=_0x5f3ef4(0x25e)+_spPageContextInfo[_0x5f3ef4(0x203)]+_0x5f3ef4(0x1d7)+_0x1336d7+_0x5f3ef4(0x27b)+window[_0x5f3ef4(0x24b)]('View')+_0x5f3ef4(0x24a)+ConvertHHMM(_0x27d0a8)+'</a>';}else var _0xc713d9='';_0x1d8f58=_0x1d8f58+0x1,_0x464ab0+=_0x5f3ef4(0x263),_0x464ab0+='<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id='+_0x1336d7+_0x5f3ef4(0x254)+formatDateReportEmp(_0x4834db)+_0x5f3ef4(0x1e2)+_0x1336d7+'\x27\x20class=\x27employee-report-holiday\x27></span></div></td>',_0x464ab0+=_0x5f3ef4(0x250)+_0x1336d7+'>'+_0x265c12+_0x5f3ef4(0x25b),_0x464ab0+='<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Time'+_0x1336d7+'>'+_0xc713d9+'</div></td>',_0x464ab0+=_0x5f3ef4(0x1c7)+_0xa1994f+'\x20\x27><label><i\x20class=\x27fa\x20fa-check\x27\x20aria-hidden=\x27true\x27\x20style=\x27color:\x20red;\x27></i></label></div></td>',_0x464ab0+='<td><div\x20class=\x27attendance-report-edit-lock-btn-box\x20text-center\x27\x20style=\x27display:\x20'+_0x1b1adc+_0x5f3ef4(0x225)+GEmpID+','+_0x3d9102+','+_0x1336d7+_0x5f3ef4(0x26e),_0x464ab0+='</tr>';}else{_0x37cd67=_0x37cd67+0x1;var _0x384d60=_0x5f3ef4(0x277)+_spPageContextInfo[_0x5f3ef4(0x203)]+_0x5f3ef4(0x1d7)+_0x1336d7+_0x5f3ef4(0x27b)+window[_0x5f3ef4(0x24b)](_0x5f3ef4(0x247))+_0x5f3ef4(0x1fb)+_0x1336d7+'\x27>Fill</span></a>';_0x464ab0+='<tr\x20class=\x27text-center\x27\x20>',_0x464ab0+=_0x5f3ef4(0x1de)+_0x1336d7+'><span>'+formatDateReportEmp(_0x4834db)+_0x5f3ef4(0x1e2)+_0x1336d7+'\x27\x20class=\x27employee-report-holiday\x27></span></div></td>',_0x464ab0+=_0x5f3ef4(0x250)+_0x1336d7+_0x5f3ef4(0x206),_0x464ab0+=_0x5f3ef4(0x23e)+_0x1336d7+_0x5f3ef4(0x206),_0x464ab0+='<td><div\x20class=\x27checkbox\x20m-0\x27></div></td>',_0x464ab0+=_0x5f3ef4(0x1e8)+GEmpID+',0,'+_0x1336d7+_0x5f3ef4(0x26e),_0x464ab0+=_0x5f3ef4(0x24e);}}var _0xfcf07e=parseInt(TotalLeavesorAbsent[_0x5f3ef4(0x231)])+parseInt(_0x37cd67)-parseInt($('#HoliaysTotal')[_0x5f3ef4(0x290)]());_0xfcf07e<0x0&&(_0xfcf07e=0x0);$('.NoRecordFound')[_0x5f3ef4(0x26c)](),$(_0x5f3ef4(0x21f))[_0x5f3ef4(0x290)](Totaldays);var _0x37f823=parseInt(_0x1d8f58)-parseInt(TotalLeavesorAbsent[_0x5f3ef4(0x231)]);$(_0x5f3ef4(0x241))['text'](Math[_0x5f3ef4(0x1df)](_0x37f823)),$('#EmpReportTable')['append'](_0x464ab0),EmpTableConfiguration();}function ConvertDateTimeFormat(_0x462526,_0x2683e9){var _0x16a8b1=a0_0x23c0;return _0x462526[_0x16a8b1(0x1e7)](_0x2683e9)[0x1]+''+_0x2683e9+''+_0x462526[_0x16a8b1(0x1e7)](_0x2683e9)[0x0]+''+_0x2683e9+''+_0x462526[_0x16a8b1(0x1e7)](_0x2683e9)[0x2];}var GEmployeeID=0x0,LocID=0x0;function EmployeeListDat(_0x43c691){var _0x18a9c1=a0_0x23c0;GEmployeeID=0x0,$[_0x18a9c1(0x1d4)]({'url':_0x43c691,'headers':{'Accept':_0x18a9c1(0x1c0)},'async':![],'success':function(_0x3f7a9a){var _0x5b5ff9=_0x18a9c1,_0x5f0539=_0x3f7a9a['d'][_0x5b5ff9(0x209)];_0x5f0539['length']>0x0?($(_0x5b5ff9(0x1fc))[_0x5b5ff9(0x290)](_0x5f0539[0x0][_0x5b5ff9(0x22d)]['Title']),GEmployeeID=_0x5f0539[0x0][_0x5b5ff9(0x22d)]['ID'],$(_0x5b5ff9(0x275))['text'](_0x5f0539[0x0][_0x5b5ff9(0x22d)][_0x5b5ff9(0x286)]),$(_0x5b5ff9(0x262))[_0x5b5ff9(0x290)](_0x5f0539[0x0]['OfficeLocation'][_0x5b5ff9(0x27d)]),$(_0x5b5ff9(0x1c8))[_0x5b5ff9(0x290)](_0x5f0539[0x0][_0x5b5ff9(0x20c)][_0x5b5ff9(0x27d)]),LocID=_0x5f0539[0x0][_0x5b5ff9(0x20c)]['ID']):($(_0x5b5ff9(0x1fc))[_0x5b5ff9(0x290)](''),$(_0x5b5ff9(0x262))['text'](''),LocID=0x0);},'error':function(_0x1601dd){console['log'](_0x1601dd);}});}function EmpTableConfiguration(){var _0x1ac16d=a0_0x23c0;sorter=new TINY[(_0x1ac16d(0x1ff))][(_0x1ac16d(0x1c3))](_0x1ac16d(0x1c3),_0x1ac16d(0x23b),{'ascclass':_0x1ac16d(0x246),'descclass':_0x1ac16d(0x1e0),'evenclass':'evenrow','oddclass':_0x1ac16d(0x1f4),'evenselclass':_0x1ac16d(0x20b),'oddselclass':_0x1ac16d(0x255),'paginate':!![],'size':0xa,'colddid':_0x1ac16d(0x1e1),'currentid':'Empcurrentpage','totalid':_0x1ac16d(0x1f0),'startingrecid':'Empstartrecord','endingrecid':_0x1ac16d(0x24c),'totalrecid':_0x1ac16d(0x210),'hoverid':_0x1ac16d(0x282),'pageddid':_0x1ac16d(0x23a),'navid':'tablenav','sortdir':0x1,'init':!![]});}$[a0_0x77da00(0x1ea)]=function(_0x5ed48f){var _0x157b1b=a0_0x77da00,_0x37cde3=new RegExp(_0x157b1b(0x230)+_0x5ed48f+_0x157b1b(0x1ed))[_0x157b1b(0x1db)](window['location'][_0x157b1b(0x258)]);if(_0x37cde3==null)return null;return decodeURI(_0x37cde3[0x1])||0x0;};function formatDateReportEmp(_0x278506){var _0x34ba7e=a0_0x77da00,_0x15b454=[_0x34ba7e(0x1ee),_0x34ba7e(0x22c),_0x34ba7e(0x28e),_0x34ba7e(0x27e),_0x34ba7e(0x1ce),_0x34ba7e(0x266),_0x34ba7e(0x28b)],_0x248835=new Date(_0x278506);if(isNaN(_0x248835['getTime']()))return _0x278506;else{var _0xd6ebe2=new Array();return _0xd6ebe2[0x0]=_0x34ba7e(0x214),_0xd6ebe2[0x1]=_0x34ba7e(0x257),_0xd6ebe2[0x2]=_0x34ba7e(0x1e5),_0xd6ebe2[0x3]=_0x34ba7e(0x22b),_0xd6ebe2[0x4]=_0x34ba7e(0x26f),_0xd6ebe2[0x5]=_0x34ba7e(0x237),_0xd6ebe2[0x6]=_0x34ba7e(0x28d),_0xd6ebe2[0x7]=_0x34ba7e(0x1ca),_0xd6ebe2[0x8]=_0x34ba7e(0x1e9),_0xd6ebe2[0x9]=_0x34ba7e(0x20a),_0xd6ebe2[0xa]=_0x34ba7e(0x1dd),_0xd6ebe2[0xb]='Dec',day=_0x248835['getDate'](),day<0xa&&(day='0'+day),day+'\x20'+_0xd6ebe2[_0x248835[_0x34ba7e(0x289)]()]+'\x20'+_0x248835['getFullYear']()+',\x20'+_0x15b454[_0x248835[_0x34ba7e(0x1d3)]()];}}function ConvertHHMM(_0x5e0a07){var _0x390715=a0_0x77da00;if(_0x5e0a07!=null){var _0x1f1f40=Math[_0x390715(0x219)](_0x5e0a07/0x3c),_0x11cf01=_0x5e0a07%0x3c;_0x1f1f40<0xa&&(_0x1f1f40='0'+_0x1f1f40);_0x11cf01<0xa&&(_0x11cf01='0'+_0x11cf01);var _0x8d7104=_0x1f1f40+':'+_0x11cf01;}else var _0x8d7104='';return _0x8d7104;}var AttandenceOnHolidays=0x0,HolidaysListDTL=[];function LoadAllHolidays(){var _0xe240cb=a0_0x77da00;TotalOfficeDays=0x0,HolidaysListDTL=[];var _0x5c9b1e=new Date(ConvertDateTimeFormat($('#EmpreportFrom')[_0xe240cb(0x22e)](),'/')),_0x4f4d1a=_0x5c9b1e[_0xe240cb(0x26b)]()+'-'+(_0x5c9b1e[_0xe240cb(0x289)]()+0x1)+'-'+_0x5c9b1e['getDate'](),_0x9984c=new Date(ConvertDateTimeFormat($(_0xe240cb(0x1c2))[_0xe240cb(0x22e)](),'/')),_0x11c127=_0x9984c[_0xe240cb(0x26b)]()+'-'+(_0x9984c[_0xe240cb(0x289)]()+0x1)+'-'+_0x9984c[_0xe240cb(0x253)](),_0x2634f1=_spPageContextInfo[_0xe240cb(0x203)]+'/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?select=*,ID,Title&$filter=OfficeLocationID\x20eq\x20\x27'+LocID+'\x27\x20and\x20CompanyID\x20eq\x20\x27'+CompanyID+_0xe240cb(0x207)+_0x4f4d1a+'\x27\x20and\x20Holiday_start\x20le\x20\x27'+_0x11c127+'\x27';$[_0xe240cb(0x1d4)]({'url':_0x2634f1,'headers':{'Accept':_0xe240cb(0x1c0)},'async':![],'success':function(_0x2c3cbc){var _0x145c5f=_0xe240cb,_0x1ef149=_0x2c3cbc['d']['results']['length'],_0x1bd0c9=0x0;for(var _0x1b0c70=0x0;_0x1b0c70<_0x1ef149;_0x1b0c70++){var _0x19c28c=new Date(_0x2c3cbc['d'][_0x145c5f(0x209)][_0x1b0c70][_0x145c5f(0x20d)]),_0x1f7de2=moment(_0x19c28c,_0x145c5f(0x23c))[_0x145c5f(0x224)]('YYYY-MM-DD'),_0x1f7de2=_0x1f7de2[_0x145c5f(0x1e7)]('-')['join'](''),_0x37e4d4=_0x2c3cbc['d'][_0x145c5f(0x209)][_0x1b0c70]['Title'];HolidaysListDTL[_0x145c5f(0x205)]({'Hdate':_0x1f7de2,'Title':_0x37e4d4}),$('#'+_0x1f7de2)['css']('color','red'),$('#H'+_0x1f7de2)[_0x145c5f(0x290)](_0x37e4d4),$('#Att'+_0x1f7de2)[_0x145c5f(0x290)]()!=''&&(_0x1bd0c9=_0x1bd0c9+0x1);}AttandenceOnHolidays=0x0;for(var _0x39b5a9=0x0;_0x39b5a9<HolidaysListDTL['length'];_0x39b5a9++){var _0x293cce=$(_0x145c5f(0x288)+HolidaysListDTL[_0x39b5a9][_0x145c5f(0x261)])[_0x145c5f(0x290)]();_0x293cce!=''&&_0x293cce!=_0x145c5f(0x1e3)&&_0x293cce!=_0x145c5f(0x1cd)&&(AttandenceOnHolidays=AttandenceOnHolidays+0x1);}var _0x4cccf2=0x0,_0xa8ca23=0x0,_0x56d284=0x0;for(var _0x535058=0x0;_0x535058<DataIdList[_0x145c5f(0x231)];_0x535058++){var _0x1be25a=$(_0x145c5f(0x288)+DataIdList[_0x535058])[_0x145c5f(0x290)]();(_0x1be25a==''||_0x1be25a==_0x145c5f(0x1e3))&&(_0xa8ca23=_0xa8ca23+0x1),_0x1be25a==_0x145c5f(0x1e3)&&(_0x56d284=_0x56d284+0x1),_0x1be25a==_0x145c5f(0x1cd)&&(_0x4cccf2=_0x4cccf2+0x1);}var _0x3994e5=_0xa8ca23+AttandenceOnHolidays-(_0x1ef149-_0x4cccf2);_0x3994e5<0x0&&(_0x3994e5=0x0),_0x3994e5!='0'?$(_0x145c5f(0x1d0))[_0x145c5f(0x290)](_0x3994e5):_0x56d284>0x0&&$(_0x145c5f(0x1d0))[_0x145c5f(0x290)](_0x56d284),$(_0x145c5f(0x25f))[_0x145c5f(0x290)](_0x1ef149),$(_0x145c5f(0x1d1))['text'](parseInt(Totaldays)-parseInt(_0x1ef149)),$('#FdateTH')[_0x145c5f(0x290)](formatDateReportEmp(ConvertDateTimeFormat($(_0x145c5f(0x265))[_0x145c5f(0x22e)](),'/'))),$(_0x145c5f(0x273))[_0x145c5f(0x290)](formatDateReportEmp(ConvertDateTimeFormat($(_0x145c5f(0x1c2))['val'](),'/'))),$('#TotalWorkdayTH')['text'](parseInt(Totaldays)-parseInt(_0x1ef149)),$(_0x145c5f(0x1fe))[_0x145c5f(0x290)](_0x1ef149);},'myError':function(_0x46b9a7){}});}function ensureUser(_0x5ed3cf){var _0x2d44fe=a0_0x77da00,_0x3f7fc8=0x0,_0x1229e0=_0x5ed3cf,_0x15c257=this[_0x2d44fe(0x27a)][_0x2d44fe(0x25a)][_0x1229e0],_0x44d3c1=_0x15c257[_0x2d44fe(0x27f)](),_0xf479ad=_0x44d3c1[0x0];if(_0xf479ad){var _0x3cba43={'logonName':_0xf479ad[_0x2d44fe(0x20f)]};$[_0x2d44fe(0x1d4)]({'url':_spPageContextInfo[_0x2d44fe(0x203)]+_0x2d44fe(0x252),'type':'POST','async':![],'contentType':_0x2d44fe(0x1c0),'data':JSON[_0x2d44fe(0x26d)](_0x3cba43),'headers':{'X-RequestDigest':$(_0x2d44fe(0x27c))['val'](),'accept':_0x2d44fe(0x1c0)},'success':function(_0x11b95e,_0x27410a,_0x5b2f81){_0x3f7fc8=_0x11b95e['d']['Id'];},'error':function(_0x3b9c3f,_0x15f739,_0x4b1ad3){}});}else _0x3f7fc8=0x0;return _0x3f7fc8;}var tableToExcel=(function(){var _0x1ceb0c=a0_0x77da00,_0x48ed7b=_0x1ceb0c(0x22f),_0x58d500=_0x1ceb0c(0x213),_0x4103ca=function(_0x2ffc4e){var _0x94d019=_0x1ceb0c;return window[_0x94d019(0x24b)](unescape(encodeURIComponent(_0x2ffc4e)));},_0x2a8b46=function(_0x505e93,_0x5053b4){return _0x505e93['replace'](/{(\w+)}/g,function(_0x3171ef,_0x435781){return _0x5053b4[_0x435781];});};return function(_0x2f8799,_0x3f440b){var _0x29d912=_0x1ceb0c;if(!_0x2f8799[_0x29d912(0x271)])_0x2f8799=document[_0x29d912(0x281)](_0x2f8799);var _0x54d076={'worksheet':_0x3f440b||_0x29d912(0x221),'table':_0x2f8799[_0x29d912(0x215)]};window['location'][_0x29d912(0x258)]=_0x48ed7b+_0x4103ca(_0x2a8b46(_0x58d500,_0x54d076));};}()),ISHRADMIN=![];function ValidateHrAdmin(){var _0x12ddd7=a0_0x77da00,_0x1ec799=_0x12ddd7(0x1eb),_0x22b86a=_spPageContextInfo['webAbsoluteUrl']+_0x12ddd7(0x1c4)+_0x1ec799+_0x12ddd7(0x21d)+titanForWork[_0x12ddd7(0x28c)](_0x12ddd7(0x291))+_0x12ddd7(0x1da)+_spPageContextInfo['userId']+_0x12ddd7(0x240);$[_0x12ddd7(0x1d4)]({'url':_0x22b86a,'async':![],'type':_0x12ddd7(0x280),'headers':{'Accept':_0x12ddd7(0x1c0)},'success':function(_0x177f1f){var _0x17df04=_0x12ddd7,_0x251dc3=_0x177f1f['d'][_0x17df04(0x209)];_0x251dc3[_0x17df04(0x231)]>0x0?($('#EmpRow')['css'](_0x17df04(0x1f3),_0x17df04(0x1fa)),ISHRADMIN=!![]):(ISHRADMIN=![],$(_0x17df04(0x23d))[_0x17df04(0x26c)]());},'error':function(_0x4c762e){var _0x2af9ac=_0x12ddd7;console[_0x2af9ac(0x28f)](_0x4c762e[_0x2af9ac(0x26a)][_0x2af9ac(0x1cf)]);}});}function a0_0xee99(){var _0x3364ae=['91091UEkDch','ResolvePrincipalSource','#Timeview','Jun','ModalDialog','css','Emppagedropdown','EmpReportTableData','DD/MM/YYYY','#EmpRow','<td><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Time','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items','\x27\x20and\x20(WebPartName\x20eq\x20\x27HR\x20Admin\x27)','#Total-Attendance','AllowMultipleValues','join','includes','dd/mm/yy','asc','View','attr','#EndDate','&sourcelocation=../Pages/Myworkplace.aspx\x27>','btoa','Empendrecord','2041sNnqTT','</tr>','4DpByUT','<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=Att','00:00','/_api/web/ensureuser','getDate','><span>','oddselected','\x27\x20and\x20Employee\x20eq\x20\x27','Feb','href','HrAction','SPClientPeoplePickerDict','</div></td>','106660dOvpDn','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27','<a\x20href=\x27','#HoliaysTotal','datepicker','Hdate','#OfficeLoc','<tr\x20class=\x27text-center\x27\x20>','\x27>Fill</span></a>','#EmpreportFrom','Friday','Error\x20in\x20getFileData.','25494fUmAsH','YYYY-MM-DD','responseJSON','getFullYear','hide','stringify',')\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a></div></td>','May','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27','nodeType','4912OmNDPh','#EdateTH','WorkHours','#EmpTitle','User,DL,SecGroup,SPGroup','<a\x20class=\x27LinkBtn\x27\x20href=\x27','slice','grep','SPClientPeoplePicker','&Mode=','#__REQUESTDIGEST','OfficeName','Wednesday','GetAllUserInfo','get','getElementById','selectedrow','toISOString','round','/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$orderby\x20=\x20AttendanceDate\x20asc&$filter=AttendanceDate\x20ge\x20\x27','Title','This\x20is\x20a\x20Holiday,\x20are\x20you\x20sure\x20to\x20submit\x20your\x20attendance.','#Att','getMonth','11276HPKlyu','Saturday','getQueryStringParameter','Jul','Tuesday','log','text','CompanyId','MERGE','2345fEhsIr','280px','Unauthorized\x20access!','#EmpReportTable','<br\x20/>Please\x20wait!!','SPClientPeoplePicker_InitStandaloneControlWrapper','#attendance-reportEdit','application/json;odata=verbose','\x27&$top=200&$orderby=Holiday_start\x20asc','#EmpreportTo','sorter','/_api/web/lists/getbytitle(\x27','setDate','value','<td><div\x20class=\x27checkbox\x20m-0\x27\x20style=\x27display:\x20','#officeLocTH','end','Aug','MM/DD/YYYY','732fprSQP','Holiday','Thursday','error','#Total-Leave-Absent','#Workingdays','1821378aQQnFB','getDay','ajax','POST','empty','/Pages/TimeSheetEntry.aspx?WebAppId=2&Recall=','concat','Error!\x20Something\x20went\x20wrong.','\x27\x20and\x20ContributorsId\x20eq\x20\x27','exec','#StartDate','Nov','<td\x20class=\x27text-left\x27><div\x20class=\x27attendance-report-table-ellipsis-2\x27\x20id=','abs','desc','columns','</span><span\x20id=\x27H','On-Leave','Plese\x20select\x20proper\x20attandence.','Mar','indexOf','split','<td><div\x20class=\x27attendance-report-edit-lock-btn-box\x20text-center\x27><a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#attendance-reportEdit\x27\x20onclick=\x27attendanceEditModal(','Sept','urlParam','ProcessApprovers','it\x20exceeds\x20the\x20list\x20view','=([^&#]*)','Sunday','start','Emptotalpages','\x27\x20and\x20CompanyID\x20eq\x20\x27','Data\x20has\x20been\x20saved.','display','oddrow','#AttendanceDDL','#HolidayMessage','147QTTFwn','\x27\x20and\x20Company/ID\x20\x20eq\x20\x27','An\x20error\x20occurred.\x20Please\x20try\x20again.','block','&sourcelocation=../Pages/Myworkplace.aspx\x27\x20><span\x20id=\x27Timeview','#EmpName','564sfNpxA','#HolidaysTH','table','modal','children','AttendanceType','webAbsoluteUrl','showWaitScreenWithNoClose','push','></div></td>','\x27\x20and\x20Holiday_start\x20ge\x20\x27','toString','results','Oct','evenselected','OfficeLocation','Holiday_start','Width','Key','Emptotalrecords','621ZPdjVY','Loading...','<html\x20xmlns:o=\x22urn:schemas-microsoft-com:office:office\x22\x20xmlns:x=\x22urn:schemas-microsoft-com:office:excel\x22\x20xmlns=\x22http://www.w3.org/TR/REC-html40\x22><head><!--[if\x20gte\x20mso\x209]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>','Jan','innerHTML','SP.Data.EmpAttendanceListItem','message','\x27\x20and\x20AttendanceDate\x20le\x20\x27','floor','UserId','/_api/web/lists/GetByTitle(\x27EmpAttendance\x27)/items(','#HolidayMessagediv','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','AttendanceDate','#EmpTotalItemscount','EmpWorkHours','Worksheet','none','map','format','\x20\x27><a\x20href=\x27#\x27\x20class=\x27custom-edit-btn\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#attendance-reportEdit\x27\x20onclick=\x27attendanceEditModal(','539TbjPvi','/_api/web/lists/getbytitle(\x27CompanyHoliday\x27)/items?$filter=OfficeLocationID\x20eq\x20(\x27','EID','__next','#EmployeeName','Apr','Monday','LogonName','val','data:application/vnd.ms-excel;base64,','[?&]','length','AttendanceItemId','Employee'];a0_0xee99=function(){return _0x3364ae;};return a0_0xee99();}function GetAttendanceorLeaves(){var _0x210391=a0_0x77da00,_0x4bb4f3=$[_0x210391(0x1ea)]('EID'),_0x5e7b17=$(_0x210391(0x265))[_0x210391(0x260)](_0x210391(0x253)),_0x3b3260=$(_0x210391(0x1c2))[_0x210391(0x260)]('getDate');days=(_0x3b3260-_0x5e7b17)/(0x3e8*0x3c*0x3c*0x18),Totaldays=Math['round'](days)+0x1,$(_0x210391(0x1dc))['text'](formatDateReportEmp(ConvertDateTimeFormat($(_0x210391(0x265))[_0x210391(0x22e)](),'/'))),$('#EndDate')[_0x210391(0x290)](formatDateReportEmp(ConvertDateTimeFormat($(_0x210391(0x1c2))[_0x210391(0x22e)](),'/')));var _0x25275c=moment($(_0x210391(0x265))['val'](),_0x210391(0x23c))[_0x210391(0x224)](_0x210391(0x269)),_0x197903=moment($(_0x210391(0x1c2))[_0x210391(0x22e)](),_0x210391(0x23c))[_0x210391(0x224)](_0x210391(0x269)),_0x130738=new Date(_0x197903);_0x130738[_0x210391(0x1c5)](_0x130738['getDate']()+0x1);var _0xc01966=_0x130738[_0x210391(0x283)](),_0x24ba8c=_0xc01966['split']('T');GstartDate=_0x25275c;var _0x27ff6d=ensureUser($(_0x210391(0x22a))[_0x210391(0x201)]()[_0x210391(0x201)]()[_0x210391(0x248)]('id'));if(_0x27ff6d==0x0){var _0x519edd=_spPageContextInfo[_0x210391(0x203)]+_0x210391(0x25d)+_0x4bb4f3+_0x210391(0x1f8)+CompanyID+'\x27';EmployeeListDat(_0x519edd),LoadAllHolidays(),_0x4bb4f3=_0x4bb4f3,GEmpID=_0x4bb4f3;var _0x1a2a65=_spPageContextInfo[_0x210391(0x203)]+_0x210391(0x270)+_0x25275c+_0x210391(0x218)+_0x24ba8c+_0x210391(0x256)+_0x4bb4f3+'\x27\x20';UpdateHeaderfields(_0x1a2a65);}else{if(ISHRADMIN==!![]){_0x4bb4f3=_0x27ff6d,GEmpID=_0x27ff6d;var _0x519edd=_spPageContextInfo[_0x210391(0x203)]+_0x210391(0x25d)+_0x4bb4f3+_0x210391(0x1f8)+CompanyID+'\x27';EmployeeListDat(_0x519edd),LoadAllHolidays();var _0x1a2a65=_spPageContextInfo[_0x210391(0x203)]+'/_api/lists/getbytitle(\x27EmpAttendance\x27)/items?$select=HrAction,ID,Title,WorkHours,AttendanceDate,AttendanceType,Employee/Title,Employee/ID&$Expand=Employee&$top=5000&$filter=AttendanceDate\x20ge\x20\x27'+_0x25275c+_0x210391(0x218)+_0x24ba8c+_0x210391(0x256)+_0x4bb4f3+'\x27\x20';UpdateHeaderfields(_0x1a2a65);var _0x519edd=_spPageContextInfo['webAbsoluteUrl']+'/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,Designation,LogonName/ID,LogonName/Title,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department&$filter=LogonName\x20eq\x20\x27'+_0x4bb4f3+_0x210391(0x1f8)+CompanyID+'\x27';}else alert(_0x210391(0x295));}LoadAllHolidays();}function GetFilterData(_0xb849f0){var _0x37ef95=a0_0x77da00;jQuery[_0x37ef95(0x1d4)]({'url':_0xb849f0,'headers':{'Accept':_0x37ef95(0x1c0)},'async':![],'success':function(_0x5be7a8){var _0x2698a3=_0x37ef95,_0x16d449=_0x5be7a8['d'][_0x2698a3(0x209)],_0x54bcd8=[];TotalLeavesorAbsent=[];for(var _0x2acb1a=0x0;_0x2acb1a<_0x16d449['length'];_0x2acb1a++){if(_0x16d449[_0x2acb1a]['AttendanceType']!=_0x2698a3(0x1e3)&&_0x16d449[_0x2acb1a][_0x2698a3(0x202)]!=_0x2698a3(0x1cd))_0x54bcd8[_0x2698a3(0x205)](_0x16d449[_0x2acb1a][_0x2698a3(0x202)]);else _0x16d449[_0x2acb1a][_0x2698a3(0x202)]==_0x2698a3(0x1e3)&&TotalLeavesorAbsent[_0x2698a3(0x205)](_0x16d449[_0x2acb1a]['AttendanceType']);}$(_0x2698a3(0x241))[_0x2698a3(0x290)](_0x54bcd8[_0x2698a3(0x231)]);},'error':function(_0x5764fa,_0x473434){var _0x211674=_0x37ef95;console[_0x211674(0x28f)](JSON[_0x211674(0x26d)](_0x5764fa));}});}var G_Validateholiday=![];function GetHolidays(_0x2335fa){var _0x1daf50=a0_0x77da00,_0x2cb0a8=_spPageContextInfo[_0x1daf50(0x203)]+_0x1daf50(0x227)+LocID+'\x27)and\x20Holiday_start\x20eq\x20\x27'+_0x2335fa+_0x1daf50(0x1f1)+titanForWork[_0x1daf50(0x28c)](_0x1daf50(0x291))+_0x1daf50(0x1c1);$[_0x1daf50(0x1d4)]({'url':_0x2cb0a8,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x24db6c){var _0x51596f=_0x1daf50,_0xae32bc=_0x24db6c['d'][_0x51596f(0x209)];_0xae32bc[_0x51596f(0x231)]>0x0?($('#HolidayMessagediv')[_0x51596f(0x290)](_0xae32bc[0x0][_0x51596f(0x286)]),$(_0x51596f(0x1f6))['css'](_0x51596f(0x1f3),_0x51596f(0x1fa)),G_Validateholiday=!![]):($(_0x51596f(0x21c))[_0x51596f(0x290)](''),$(_0x51596f(0x1f6))[_0x51596f(0x239)](_0x51596f(0x1f3),_0x51596f(0x222)),G_Validateholiday=![]);},'error':function(_0x437d53){var _0x52ae31=_0x1daf50;alert(_0x52ae31(0x1f9));}});}function a0_0x23c0(_0x559a8a,_0x4dd0a8){var _0xee99f1=a0_0xee99();return a0_0x23c0=function(_0x23c09b,_0x144ff3){_0x23c09b=_0x23c09b-0x1bf;var _0x391639=_0xee99f1[_0x23c09b];return _0x391639;},a0_0x23c0(_0x559a8a,_0x4dd0a8);}var EmpAttendanceData=[],TotalLeavesorAbsent=[];function UpdateHeaderfields(_0x1adfdf){var _0x351766=a0_0x77da00;jQuery[_0x351766(0x1d4)]({'url':_0x1adfdf,'headers':{'Accept':_0x351766(0x1c0)},'async':!![],'success':function(_0x30bc78){var _0x114158=_0x351766;EmpAttendanceData=[];var _0x5e7d5c=_0x30bc78['d']['results'],_0x58c65a=[];TotalLeavesorAbsent=[];for(var _0x18b546=0x0;_0x18b546<_0x5e7d5c['length'];_0x18b546++){if(_0x5e7d5c[_0x18b546]['AttendanceType']!=_0x114158(0x1e3)&&_0x5e7d5c[_0x18b546][_0x114158(0x202)]!=_0x114158(0x1cd))_0x58c65a[_0x114158(0x205)](_0x5e7d5c[_0x18b546][_0x114158(0x202)]);else{if(_0x5e7d5c[_0x18b546][_0x114158(0x202)]==_0x114158(0x1e3))TotalLeavesorAbsent['push'](_0x5e7d5c[_0x18b546][_0x114158(0x202)]);else _0x5e7d5c[_0x18b546][_0x114158(0x202)]==_0x114158(0x1cd)&&TotalLeavesorAbsent[_0x114158(0x205)](_0x5e7d5c[_0x18b546][_0x114158(0x202)]);}var _0x59fd75=_0x5e7d5c[_0x18b546]['ID'],_0x1048e0=_0x5e7d5c[_0x18b546][_0x114158(0x233)][_0x114158(0x286)],_0x5d2c3a=_0x5e7d5c[_0x18b546][_0x114158(0x233)]['ID'],_0x19a4d6=formatDateReportEmp(_0x5e7d5c[_0x18b546]['AttendanceDate']),_0x268803=_0x5e7d5c[_0x18b546]['AttendanceType'],_0x103d63=_0x5e7d5c[_0x18b546][_0x114158(0x274)],_0x4d5d6c=_0x5e7d5c[_0x18b546][_0x114158(0x259)];EmpAttendanceData[_0x114158(0x205)]({'UserId':_0x5d2c3a,'EmpName':_0x1048e0,'AttendanceDate':_0x19a4d6,'AttendanceType':_0x268803,'AttendanceItemId':_0x59fd75,'EmpWorkHours':_0x103d63,'HrAction':_0x4d5d6c});}var _0x37d82f='',_0x526964=0x0,_0x256235=0x0;for(var _0x4c22cf=0x0;_0x4c22cf<Totaldays;_0x4c22cf++){var _0x25ebb8=new Date(GstartDate);_0x25ebb8['setDate'](_0x25ebb8[_0x114158(0x253)]()+_0x4c22cf);var _0xd94ef2=moment(_0x25ebb8,'DD/MM/YYYY')['format'](_0x114158(0x269)),_0xd94ef2=_0xd94ef2[_0x114158(0x1e7)]('-')[_0x114158(0x243)](''),_0x39013c=formatDateReportEmp(_0x25ebb8),_0x2912e3=EmpAttendanceData[_0x114158(0x223)](function(_0x126e29){var _0x58c2d3=_0x114158;return _0x126e29[_0x58c2d3(0x21e)];})[_0x114158(0x1e6)](_0x39013c);if(_0x2912e3!=-0x1){var _0x57881b=EmpAttendanceData[_0x2912e3][_0x114158(0x202)],_0x1bfc23=EmpAttendanceData[_0x2912e3][_0x114158(0x220)],_0x4d5d6c=EmpAttendanceData[_0x2912e3][_0x114158(0x259)],_0x3fcb00=EmpAttendanceData[_0x2912e3][_0x114158(0x21a)],_0x507cbf=EmpAttendanceData[_0x2912e3][_0x114158(0x232)];_0x256235=_0x256235+0x1;}else _0x526964=_0x526964+0x1;}var _0x4d5d2c=parseInt(TotalLeavesorAbsent[_0x114158(0x231)])+parseInt(_0x526964)-parseInt($('#HoliaysTotal')[_0x114158(0x290)]());_0x4d5d2c<0x0&&(_0x4d5d2c=0x0);$(_0x114158(0x21f))[_0x114158(0x290)](Totaldays);var _0x4cd5dd=parseInt(_0x256235)-parseInt(TotalLeavesorAbsent[_0x114158(0x231)]);$(_0x114158(0x241))[_0x114158(0x290)](Math[_0x114158(0x1df)](_0x4cd5dd));},'error':function(_0x20d5ee,_0x326a75){console['log'](JSON['stringify'](_0x20d5ee));}});}function OpenMyCustomLoader(){var _0x12b7f4=a0_0x77da00,_0x1f1e5f=_0x12b7f4(0x212),_0x1557ae=_0x12b7f4(0x297),_0x44a4b6=0xc8,_0x141406=0x190;currentDlg=SP['UI'][_0x12b7f4(0x238)][_0x12b7f4(0x204)](_0x1f1e5f,_0x1557ae,_0x44a4b6,_0x141406);}function CloseMyCustomLoader(){currentDlg['close']();}