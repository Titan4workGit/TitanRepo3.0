var a0_0x4c7ade=a0_0x2015;(function(_0x371c48,_0x22f690){var _0x44fc28=a0_0x2015,_0x202970=_0x371c48();while(!![]){try{var _0x5be098=-parseInt(_0x44fc28(0x1c9))/0x1*(parseInt(_0x44fc28(0x216))/0x2)+-parseInt(_0x44fc28(0x140))/0x3*(-parseInt(_0x44fc28(0x1aa))/0x4)+-parseInt(_0x44fc28(0x13d))/0x5*(-parseInt(_0x44fc28(0x1c4))/0x6)+parseInt(_0x44fc28(0x12c))/0x7+-parseInt(_0x44fc28(0x174))/0x8*(parseInt(_0x44fc28(0x135))/0x9)+-parseInt(_0x44fc28(0x147))/0xa+parseInt(_0x44fc28(0x1ae))/0xb;if(_0x5be098===_0x22f690)break;else _0x202970['push'](_0x202970['shift']());}catch(_0x286288){_0x202970['push'](_0x202970['shift']());}}}(a0_0x4f9b,0xdabfc));var IsdeptAdmin=![],IsProjectAdmin=![],Location=window[a0_0x4c7ade(0x20e)][a0_0x4c7ade(0x19b)]+'//'+window['location'][a0_0x4c7ade(0x150)]+_spPageContextInfo[a0_0x4c7ade(0x1f8)],today=new Date(),CurrentDate=today[a0_0x4c7ade(0x1d1)]()[a0_0x4c7ade(0x202)](0x0,0xa),filterArr=[],txtCompanyId=Logged_CompanyId,sorterTableMyProjectList,currentDlg='',clientContext='',PrjectgridInitiated=![],member=![];$(document)[a0_0x4c7ade(0x195)](function(){var _0xac036c=a0_0x4c7ade,_0x577e79='?$expand=ProgramID,Department_ID,ClientID,ManagerName,Office_Location_Id&$select=*,ProgramID/Title,ProgramID/Id,ManagerName/Title,ManagerName/EMail,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/Title,Department_ID/Id,Office_Location_Id/Id,Office_Location_Id/Title&$top=5000';debugger;getItemsWithQueryItem(_0x577e79),nextItem(),getProjectRights(),bindEvent(),getProjectByGroup(projectListItemArr),getRight(IsProjectAdmin),initializePeoplePicker('managerPicker'),SP['SOD']['executeOrDelayUntilScriptLoaded'](getCurrentURL_GetProjectGridEvent,_0xac036c(0x189)),getCustomer(),getPrograms(),getLocation(),ChangeLabels(),filter(),$('#CreateProject')[_0xac036c(0x198)](function(){var _0x34e658=_0xac036c,_0x4c634c=_spPageContextInfo['webServerRelativeUrl'],_0x322c48=_0x4c634c+_0x34e658(0x1f2)+Logged_CompanyId;location[_0x34e658(0x192)]=_0x322c48;}),$(_0xac036c(0x218))['click'](function(){var _0x1e020a=_0xac036c;projectListItemArr[_0x1e020a(0x1ca)](function(_0x56468a,_0x21f4ca){var _0x5cc9e7=_0x1e020a,_0x451803=new Date(_0x56468a[_0x5cc9e7(0x15f)]),_0x41373b=new Date(_0x21f4ca[_0x5cc9e7(0x15f)]);if(_0x41373b<_0x451803)return-0x1;if(_0x41373b>_0x451803)return 0x1;return 0x0;}),BindProjectGrid();});});var projectListItemArr=[];function getItemsWithQueryItem(_0x1ddd25){var _0x3fb620=a0_0x4c7ade,_0x1e8cab=_0x3fb620(0x15c);return DeferredObj=$[_0x3fb620(0x16f)](),$[_0x3fb620(0x186)]({'url':_spPageContextInfo[_0x3fb620(0x210)]+'/_api/web/lists/getbytitle(\x27'+_0x1e8cab+_0x3fb620(0x1a6)+_0x1ddd25,'type':_0x3fb620(0x17e),'async':![],'headers':{'ACCEPT':_0x3fb620(0x211),'X-RequestDigest':$('#__REQUESTDIGEST')['val']()},'beforeSend':function(){var _0x147953=_0x3fb620;$('#overlaysearch')[_0x147953(0x137)]();},'success':function(_0x315fba){var _0x2e11a8=_0x3fb620,_0x5b8a88=_0x315fba['d']['results'];_0x5b8a88[_0x2e11a8(0x1ca)](function(_0x1516f0,_0x59106c){var _0x39143c=_0x2e11a8,_0x250716=new Date(_0x1516f0[_0x39143c(0x15f)]),_0x2e1f17=new Date(_0x59106c[_0x39143c(0x15f)]);if(_0x2e1f17<_0x250716)return-0x1;if(_0x2e1f17>_0x250716)return 0x1;return 0x0;});for(var _0x7ab63f=0x0;_0x7ab63f<_0x5b8a88['length'];_0x7ab63f++){var _0x5e0c8d=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x165)],_0x97fe60=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x180)];(_0x97fe60==null||_0x97fe60==''||_0x97fe60==undefined)&&(_0x97fe60='');var _0x554b59=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x170)];_0x554b59==null&&(_0x554b59='');var _0x265b6f=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x161)][_0x2e11a8(0x200)];(_0x265b6f==null||_0x265b6f==''||_0x265b6f==undefined)&&(_0x265b6f='');var _0x5073d8=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x18d)]['Title'];(_0x5073d8==null||_0x5073d8==''||_0x5073d8==undefined)&&(_0x5073d8='');var _0x3990c8=_0x5b8a88[_0x7ab63f]['Office_Location_Id'][_0x2e11a8(0x200)],_0x2a958c=_0x5b8a88[_0x7ab63f]['Office_Location_Id']['Id'];(_0x3990c8==null||_0x3990c8==''||_0x3990c8==undefined||_0x3990c8==_0x2e11a8(0x204))&&(_0x3990c8='');var _0x3c3704=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x215)],_0x43b3e9=_0x5b8a88[_0x7ab63f]['ActualStartDate'];_0x43b3e9!=''&&_0x43b3e9!=null?(_0x43b3e9=new Date(_0x43b3e9),_0x43b3e9=$['datepicker'][_0x2e11a8(0x156)]('dd-M-yy',_0x43b3e9)):_0x43b3e9='';var _0x2a4924=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x127)];_0x2a4924!=''&&_0x2a4924!=null?(_0x2a4924=new Date(_0x2a4924),_0x2a4924=$[_0x2e11a8(0x1f5)][_0x2e11a8(0x156)](_0x2e11a8(0x124),_0x2a4924)):_0x2a4924='';var _0x37be96=new Date(_0x5b8a88[_0x7ab63f][_0x2e11a8(0x11b)]);_0x37be96=$[_0x2e11a8(0x1f5)][_0x2e11a8(0x156)](_0x2e11a8(0x124),_0x37be96);var _0x1b2f23=new Date(_0x5b8a88[_0x7ab63f]['PlanedEndDate']);_0x1b2f23=$[_0x2e11a8(0x1f5)][_0x2e11a8(0x156)](_0x2e11a8(0x124),_0x1b2f23);var _0x328ce6=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x1eb)],_0x1eddf2=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x1eb)][_0x2e11a8(0x200)],_0x58487d=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x1eb)]['Id'],_0x32bf0e=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x194)],_0x5e09c7=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x141)],_0x17a4d3=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x166)],_0x32bf0e=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x194)];if(_0x32bf0e==null)_0x32bf0e='';var _0x880738=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x212)][_0x2e11a8(0x200)],_0x97fe60=_0x5b8a88[_0x7ab63f]['ProjectCode'];_0x97fe60==null&&(_0x97fe60='');(_0x880738==null||_0x880738==''||_0x880738==undefined||_0x880738==_0x2e11a8(0x204))&&(_0x880738='');var _0x44f5d6=_0x5b8a88[_0x7ab63f]['ID'],_0xdf9ae4=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x1eb)][_0x2e11a8(0x209)],_0x192dd6=_spPageContextInfo[_0x2e11a8(0x210)]+_0x2e11a8(0x18c)+escapeProperly(_0xdf9ae4),_0x2e1f0e=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x212)]['Id'],_0x436772=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x18d)]['Id'],_0x134006=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x15f)];_0x436772==null&&(_0x436772='');var _0x1cea57=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x161)]['Id'],_0x2eb909=_0x5b8a88[_0x7ab63f][_0x2e11a8(0x17f)];projectListItemArr['push']({'ProjectName':_0x5e0c8d,'PlanedEndDate1':_0x5b8a88[_0x7ab63f][_0x2e11a8(0x1a8)],'ProjectCode':_0x97fe60,'Modified':_0x134006,'ProjectDescription':_0x554b59,'ClientName':_0x265b6f,'ProgramName':_0x5073d8,'TechnologyUsed':_0x32bf0e,'OfficeLocation':_0x3990c8,'ActualStartDate':_0x43b3e9,'ActualEndDate':_0x2a4924,'ActualEndDate1':_0x5b8a88[_0x7ab63f][_0x2e11a8(0x127)],'PlanedStartDate':_0x37be96,'PlanedEndDate':_0x1b2f23,'ManagerName':_0x1eddf2,'ManagerId':_0x58487d,'OfficeLocationId':_0x2a958c,'Status':_0x5e09c7,'Percentage':_0x17a4d3,'DepartmentName':_0x880738,'ProjectCode':_0x97fe60,'ItemID':_0x44f5d6,'ManagerEMail':_0xdf9ae4,'employeePicURL':_0x192dd6,'Department_ID':_0x2e1f0e,'ProgramID':_0x436772,'ClientID':_0x1cea57,'CompanyId':_0x2eb909});}NextURL=_0x315fba['d'][_0x2e11a8(0x182)],DeferredObj[_0x2e11a8(0x21c)](_0x315fba['d']);},'error':function(_0xb7d040){DeferredObj['reject'](_0xb7d040);}}),DeferredObj[_0x3fb620(0x176)]();};function a0_0x2015(_0x13bd8d,_0x370280){var _0x4f9b92=a0_0x4f9b();return a0_0x2015=function(_0x20152a,_0x28cf5e){_0x20152a=_0x20152a-0x119;var _0x5df047=_0x4f9b92[_0x20152a];return _0x5df047;},a0_0x2015(_0x13bd8d,_0x370280);}function nextItem(){var _0x503f75=a0_0x4c7ade;if(NextURL!=null){var _0x9c03b1='?'+NextURL[_0x503f75(0x167)]('?')[0x1];if(_0x9c03b1[_0x503f75(0x168)](_0x503f75(0x1db))==!![]){}getItemsWithQueryItem(_0x9c03b1);}}function getProjectRights(){var _0x458413=a0_0x4c7ade,_0x7bfc17=$[_0x458413(0x16f)](),_0x14d671,_0x54e7fb='ProcessApprovers',_0x20a17a=titanForWork[_0x458413(0x19f)](_0x458413(0x17f)),_0xfe0816=_spPageContextInfo[_0x458413(0x210)]+_0x458413(0x17d)+_0x54e7fb+_0x458413(0x178)+Logged_CompanyId+_0x458413(0x207)+_spPageContextInfo['userId']+_0x458413(0x123);return $[_0x458413(0x186)]({'url':_0xfe0816,'headers':{'Accept':_0x458413(0x211)},'async':![],'success':function(_0xc8b06c){var _0x4d8631=_0x458413,_0x2e63b2=_0xc8b06c['d']['results'];_0x2e63b2[_0x4d8631(0x131)]>0x0?($(_0x4d8631(0x181))[_0x4d8631(0x1b8)](),$(_0x4d8631(0x1c1))[_0x4d8631(0x1b8)](),$(_0x4d8631(0x1e1))[_0x4d8631(0x1b8)](),_0x7bfc17['resolve'](!![]),$(_0x4d8631(0x1e5))[_0x4d8631(0x12b)](!![]),IsProjectAdmin=!![]):(IsDepartmentAdmin(),IsdeptAdmin==!![]?($(_0x4d8631(0x1c1))[_0x4d8631(0x1b8)](),$('#btnCreateProgram')['hide'](),$(_0x4d8631(0x181))['show']()):(member=!![],$('#btnCreateProgram')[_0x4d8631(0x1a2)]()),$(_0x4d8631(0x1e5))['val'](![]),_0x7bfc17[_0x4d8631(0x21c)](![]),IsProjectAdmin=![]);},'eror':function(_0x835785){var _0x4c450b=_0x458413;console[_0x4c450b(0x11a)]($(_0x4c450b(0x130))[_0x4c450b(0x12b)]());}}),_0x7bfc17[_0x458413(0x176)]();}function IsDepartmentAdmin(){var _0x315aaa=a0_0x4c7ade,_0x319b51=Logged_DepartmentId,_0x5138b5=_0x315aaa(0x13c),_0x277658=_spPageContextInfo[_0x315aaa(0x210)]+_0x315aaa(0x17d)+_0x5138b5+_0x315aaa(0x1b2)+Logged_CompanyId+_0x315aaa(0x207)+_spPageContextInfo[_0x315aaa(0x119)]+_0x315aaa(0x203)+_0x319b51+_0x315aaa(0x1da);return $['ajax']({'url':_0x277658,'type':_0x315aaa(0x1ad),'headers':{'Accept':_0x315aaa(0x211)},'async':![],'success':function(_0x5560a8){var _0x4e5d4e=_0x315aaa,_0x406721=_0x5560a8['d'][_0x4e5d4e(0x1a5)];_0x406721[_0x4e5d4e(0x131)]>0x0?(IsdeptAdmin=!![],$(_0x4e5d4e(0x181))[_0x4e5d4e(0x1b8)]()):(IsdeptAdmin=![],$(_0x4e5d4e(0x181))['hide']());},'error':function(_0x3ac7ef){var _0x4b692f=_0x315aaa;console[_0x4b692f(0x11a)](_0x3ac7ef[_0x4b692f(0x172)]);}}),IsdeptAdmin;}var liveCheck=!![];function BindProjectGrid(){var _0x39374c=a0_0x4c7ade,_0xdb41db=Logged_DepartmentId,_0x375bb3='',_0x4e3ead=0x0;debugger;var _0xc26c5d=projectListItemArr,_0xee6e27='';liveCheck==!![]&&(projectListItemArr=projectListItemArr[_0x39374c(0x160)](function(_0x331081){var _0x305fcd=_0x39374c;return _0x331081[_0x305fcd(0x141)]==_0x305fcd(0x145);}));if(projectListItemArr[_0x39374c(0x131)]>0x0)for(var _0x425236=0x0;_0x425236<projectListItemArr[_0x39374c(0x131)];_0x425236++){_0x4e3ead++;var _0x53d7f1=projectListItemArr[_0x425236]['Status'];_0xee6e27+=_0x39374c(0x1c0),_0xee6e27+=_0x39374c(0x1e2)+Location+_0x39374c(0x1bd)+Logged_CompanyId+_0x39374c(0x120)+projectListItemArr[_0x425236]['ItemID']+_0x39374c(0x162)+projectListItemArr[_0x425236]['ProjectName']+'\x27\x20class=\x27font-16\x20ellipsis-2\x27>'+projectListItemArr[_0x425236][_0x39374c(0x165)]+'</a>',_0xee6e27+=_0x39374c(0x1ec),_0xee6e27+=_0x39374c(0x201),_0xee6e27+=_0x39374c(0x15b)+projectListItemArr[_0x425236][_0x39374c(0x180)]+'</div>',_0xee6e27+=_0x39374c(0x184),_0xee6e27+=_0x39374c(0x1ec),_0xee6e27+=_0x39374c(0x1b3),_0xee6e27+=_0x39374c(0x1ba)+projectListItemArr[_0x425236]['ProgramName']+_0x39374c(0x184),_0xee6e27+='</div>',_0xee6e27+=_0x39374c(0x1be),_0xee6e27+=_0x39374c(0x14e),_0xee6e27+=_0x39374c(0x1dc)+projectListItemArr[_0x425236]['ClientName']+_0x39374c(0x184),_0xee6e27+=_0x39374c(0x1ec),_0xee6e27+=_0x39374c(0x187),_0xee6e27+=_0x39374c(0x15b)+projectListItemArr[_0x425236][_0x39374c(0x1ea)]+_0x39374c(0x184),_0xee6e27+=_0x39374c(0x184),_0xee6e27+='<div\x20class=\x22d-flex\x20mt5\x22>',_0xee6e27+=_0x39374c(0x158),_0xee6e27+=_0x39374c(0x15b)+projectListItemArr[_0x425236][_0x39374c(0x1d3)]+_0x39374c(0x184),_0xee6e27+=_0x39374c(0x184),_0xee6e27+='</td>',_0xee6e27+=_0x39374c(0x14e),_0xee6e27+=_0x39374c(0x1cb),_0xee6e27+='<div\x20class=\x22project-manager-card-head\x22>',_0xee6e27+=_0x39374c(0x1f1)+projectListItemArr[_0x425236][_0x39374c(0x151)]+_0x39374c(0x138),_0xee6e27+=_0x39374c(0x184),_0xee6e27+=_0x39374c(0x1fe),_0xee6e27+=_0x39374c(0x179),_0xee6e27+='<h3\x20class=\x22member-name\x20text-ellipsis\x22>'+projectListItemArr[_0x425236][_0x39374c(0x1eb)]+_0x39374c(0x15a),_0xee6e27+=_0x39374c(0x164)+projectListItemArr[_0x425236]['ManagerEMail']+_0x39374c(0x134),_0xee6e27+=_0x39374c(0x184),_0xee6e27+=_0x39374c(0x184),_0xee6e27+=_0x39374c(0x184),_0xee6e27+=_0x39374c(0x1be),_0xee6e27+='<td\x20class=\x22text-center\x22>';var _0x47d539=new Date(projectListItemArr[_0x425236][_0x39374c(0x1f9)][_0x39374c(0x202)](0x0,0xa)),_0x35884d=new Date();_0x35884d[_0x39374c(0x18f)](_0x35884d[_0x39374c(0x1b4)]()-0x1),_0x47d539=_0x47d539[_0x39374c(0x19e)](_0x39374c(0x196));var _0x554f70=new Date(_0x35884d);_0x554f70=_0x554f70[_0x39374c(0x19e)](_0x39374c(0x196)),_0x53d7f1==_0x39374c(0x145)&&(_0xee6e27+=_0x39374c(0x1b7),projectListItemArr[_0x425236][_0x39374c(0x18a)]>=0x64?(_0xee6e27+=_0x39374c(0x1e0)+projectListItemArr[_0x425236][_0x39374c(0x1a8)]+'</span></p>',_0xee6e27+='<div\x20class=\x22progress\x20custom-progress\x20progress-info\x20m-0\x20mt-4\x22>',_0xee6e27+=_0x39374c(0x1ac)+projectListItemArr[_0x425236]['Percentage']+_0x39374c(0x14b)):projectListItemArr[_0x425236][_0x39374c(0x18a)]<0x64&&_0x47d539>=_0x554f70?(_0xee6e27+=_0x39374c(0x1e0)+projectListItemArr[_0x425236][_0x39374c(0x1a8)]+_0x39374c(0x1e9),_0xee6e27+='<div\x20class=\x22progress\x20custom-progress\x20progress-info\x20m-0\x20mt-4\x22>',_0xee6e27+='<div\x20class=\x22progress-bar\x20progress-bar-info\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:'+projectListItemArr[_0x425236][_0x39374c(0x18a)]+_0x39374c(0x14b)):(_0xee6e27+=_0x39374c(0x1e8)+projectListItemArr[_0x425236][_0x39374c(0x1a8)]+_0x39374c(0x1e9),_0xee6e27+=_0x39374c(0x16b),_0xee6e27+=_0x39374c(0x1b9)+projectListItemArr[_0x425236][_0x39374c(0x18a)]+_0x39374c(0x1d6))),_0x53d7f1=='Terminated'&&(_0xee6e27+='<p\x20class=\x22m-0\x20mb-10\x22\x20style=\x22color:#ff0000\x22>Terminated</p>',_0xee6e27+=_0x39374c(0x11c)+projectListItemArr[_0x425236][_0x39374c(0x1a8)]+_0x39374c(0x1e9),_0xee6e27+=_0x39374c(0x17b),_0xee6e27+=_0x39374c(0x1b9)+projectListItemArr[_0x425236][_0x39374c(0x18a)]+'%;\x20background:#ff0000\x20!important\x22>'),_0x53d7f1=='Completed'&&(projectListItemArr[_0x425236][_0x39374c(0x163)]>projectListItemArr[_0x425236]['PlanedEndDate1']?_0xee6e27+=_0x39374c(0x144):_0xee6e27+=_0x39374c(0x16e),_0xee6e27+=_0x39374c(0x1c2)+projectListItemArr[_0x425236]['ActualEndDate']+_0x39374c(0x1e9),_0xee6e27+=_0x39374c(0x1bb),_0xee6e27+=_0x39374c(0x1ac)+projectListItemArr[_0x425236][_0x39374c(0x18a)]+_0x39374c(0x14b)),_0x53d7f1==_0x39374c(0x1a7)&&(_0xee6e27+='<p\x20class=\x22m-0\x20mb-10\x22\x20style=\x22color:#000000ab\x22\x20>On\x20Hold</p>',_0xee6e27+=_0x39374c(0x11c)+projectListItemArr[_0x425236][_0x39374c(0x1a8)]+_0x39374c(0x1e9),_0xee6e27+=_0x39374c(0x183),_0xee6e27+=_0x39374c(0x191)),_0xee6e27+='</div>',_0xee6e27+='</div>',_0xee6e27+='</td>',_0xee6e27+=_0x39374c(0x14e),_0xee6e27+=_0x39374c(0x152),member==![]&&(_0xee6e27+=_0x39374c(0x14c)+Location+_0x39374c(0x16a)+Logged_CompanyId+'&ProjectID='+projectListItemArr[_0x425236][_0x39374c(0x21a)]+'&ProjectName='+projectListItemArr[_0x425236][_0x39374c(0x165)]+_0x39374c(0x1ab)),_0xee6e27+=_0x39374c(0x219),_0x375bb3+=_0x39374c(0x1c0)+projectListItemArr[_0x425236]['ProjectName']+'</td><td>'+projectListItemArr[_0x425236][_0x39374c(0x194)]+_0x39374c(0x11d)+projectListItemArr[_0x425236][_0x39374c(0x180)]+_0x39374c(0x11d)+projectListItemArr[_0x425236]['ProgramName']+_0x39374c(0x11d)+projectListItemArr[_0x425236]['ClientName']+_0x39374c(0x11d)+projectListItemArr[_0x425236][_0x39374c(0x1ea)]+_0x39374c(0x11d)+projectListItemArr[_0x425236][_0x39374c(0x1d3)]+'</td><td>'+projectListItemArr[_0x425236]['ManagerName']+_0x39374c(0x11d)+projectListItemArr[_0x425236]['Status']+'</td><td>'+projectListItemArr[_0x425236][_0x39374c(0x18a)]+_0x39374c(0x1ce);}else _0x375bb3+=_0x39374c(0x208);$(_0x39374c(0x121))[_0x39374c(0x132)](''),$(_0x39374c(0x185))[_0x39374c(0x132)](''),$(_0x39374c(0x193))[_0x39374c(0x1a2)](),$(_0x39374c(0x121))['append'](_0xee6e27),$(_0x39374c(0x185))[_0x39374c(0x1af)](_0x375bb3),$('#totalIcaon')[_0x39374c(0x143)](_0x4e3ead),projectListItemArr=_0xc26c5d,liveCheck=![],_0xee6e27!=''?(GenerateTableMyProjectList(),$(_0x39374c(0x20f))[_0x39374c(0x1a0)](_0x39374c(0x1d9),0x1)):($(_0x39374c(0x193))[_0x39374c(0x1b8)](),$(_0x39374c(0x1de))[_0x39374c(0x1a2)]());}function bindEvent(){var _0x32d0dd=a0_0x4c7ade;if(IsProjectAdmin==!![])projectListItemArr=projectListItemArr[_0x32d0dd(0x160)](function(_0x8e5bc3){var _0x4ee1b6=_0x32d0dd;return _0x8e5bc3[_0x4ee1b6(0x17f)]==Logged_CompanyId;}),BindProjectGrid();else{if(IsdeptAdmin==!![]){filterArr=projectListItemArr,getProjectTeamDetails(),projectListItemArr=projectListItemArr[_0x32d0dd(0x160)](function(_0x118934){return _0x118934['Department_ID']==Logged_DepartmentId;}),newArr=[];for(var _0x445240=0x0;_0x445240<projectID['length'];_0x445240++){newArr=filterArr[_0x32d0dd(0x160)](function(_0x635083){var _0x2ea82d=_0x32d0dd;return _0x635083[_0x2ea82d(0x212)]!=Logged_DepartmentId&&_0x635083[_0x2ea82d(0x21a)]==projectID[_0x445240][_0x2ea82d(0x1d5)];}),projectListItemArr=projectListItemArr[_0x32d0dd(0x206)](newArr);}BindProjectGrid();}else{newArr=[],getProjectTeamDetails();for(var _0x445240=0x0;_0x445240<projectID[_0x32d0dd(0x131)];_0x445240++){newArr=projectListItemArr['filter'](function(_0x31eb39){var _0xe06b3c=_0x32d0dd;return _0x31eb39[_0xe06b3c(0x21a)]==projectID[_0x445240][_0xe06b3c(0x1d5)];}),filterArr=filterArr[_0x32d0dd(0x206)](newArr);}projectListItemArr=filterArr,BindProjectGrid();}}$('#ProjectExport')[_0x32d0dd(0x198)](function(){var _0x4e659b=_0x32d0dd,_0x558bbe='Generating\x20excelsheet...',_0x1b16c1=_0x4e659b(0x20d),_0x5794bc=0xc8,_0x1fdda7=0x190;currentDlg=SP['UI'][_0x4e659b(0x128)]['showWaitScreenWithNoClose'](_0x558bbe,_0x1b16c1,_0x5794bc,_0x1fdda7),setTimeout(function(){generateProjectExcel();},0x64);});}function GenerateTableMyProjectList(){var _0x3f7686=a0_0x4c7ade;sorterTableMyProjectList=new TINY[(_0x3f7686(0x205))][(_0x3f7686(0x1c7))](_0x3f7686(0x1ef),_0x3f7686(0x213),{'headclass':_0x3f7686(0x1fa),'ascclass':_0x3f7686(0x136),'descclass':_0x3f7686(0x136),'evenclass':'evenrow','oddclass':'oddrow','evenselclass':_0x3f7686(0x1d2),'oddselclass':'oddselected','paginate':!![],'size':0xa,'currentid':'currentpageMyProject','totalid':_0x3f7686(0x129),'startingrecid':'startrecordMyProject','endingrecid':_0x3f7686(0x14d),'totalrecid':_0x3f7686(0x1d7),'hoverid':_0x3f7686(0x1f7),'pageddid':_0x3f7686(0x190),'navid':_0x3f7686(0x1e7),'sortdir':![],'init':!![]});}var projectID=[];function getProjectTeamDetails(){var _0x510e21=a0_0x4c7ade,_0x4e8ca6=_spPageContextInfo[_0x510e21(0x210)]+'/_api/lists/getByTitle(\x27ProjectTeamDetails\x27)/items?$Select=*,ProjectId&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20TeamMember/ID\x20eq\x20'+_spPageContextInfo[_0x510e21(0x119)]+_0x510e21(0x18b)+Logged_CompanyId+_0x510e21(0x1fb);$[_0x510e21(0x186)]({'url':_0x4e8ca6,'type':_0x510e21(0x17e),'async':![],'headers':{'Accept':_0x510e21(0x211)},'success':function(_0x4b1b94){var _0x5f2211=_0x510e21,_0x575e0b=_0x4b1b94['d'][_0x5f2211(0x1a5)];if(_0x575e0b[_0x5f2211(0x131)]!=0x0)for(var _0x25e477=0x0;_0x25e477<_0x575e0b[_0x5f2211(0x131)];_0x25e477++){projectID[_0x5f2211(0x1f6)]({'projectId':_0x575e0b[_0x25e477][_0x5f2211(0x14f)]});}}});}function generateProjectExcel(){var _0x2df391=a0_0x4c7ade;$(_0x2df391(0x20c))[_0x2df391(0x177)]({'type':'csv','exportHiddenCells':!![],'fileName':'AllProject'}),currentDlg[_0x2df391(0x188)]();}function getLocation(){var _0x5c3357=a0_0x4c7ade,_0x435bd9,_0x43293a='OfficeLocation';$(_0x5c3357(0x1a1))['append']($(_0x5c3357(0x1cd))['val'](_0x5c3357(0x1e4))[_0x5c3357(0x143)](_0x5c3357(0x1e4))),_0x435bd9=_spPageContextInfo[_0x5c3357(0x210)]+_0x5c3357(0x1df)+Logged_CompanyId+'\x27',$[_0x5c3357(0x186)]({'url':_0x435bd9,'headers':{'Accept':_0x5c3357(0x211)},'async':![],'success':function(_0x1eee6d){var _0x219002=_0x5c3357,_0x5d69e3=_0x1eee6d['d'][_0x219002(0x1a5)];for(var _0x544912=0x0;_0x544912<_0x5d69e3[_0x219002(0x131)];_0x544912++){$(_0x219002(0x1a1))[_0x219002(0x1af)]($('<option/>')[_0x219002(0x12b)](_0x5d69e3[_0x544912]['Id'])[_0x219002(0x143)](_0x5d69e3[_0x544912][_0x219002(0x200)]));}},'error':function(_0x529d4f){console['log'](_0x529d4f);}});}function getCustomer(){var _0x377cbd=a0_0x4c7ade,_0x3d4ae8,_0x393376='ClientMaster';$('#ddlCustomer')[_0x377cbd(0x1af)]($(_0x377cbd(0x1cd))[_0x377cbd(0x12b)]('All')[_0x377cbd(0x143)](_0x377cbd(0x1e4))),_0x3d4ae8=_spPageContextInfo[_0x377cbd(0x210)]+_0x377cbd(0x20b),$['ajax']({'url':_0x3d4ae8,'headers':{'Accept':_0x377cbd(0x211)},'async':![],'success':function(_0x1145c4){var _0x19892a=_0x377cbd,_0x2af308=_0x1145c4['d'][_0x19892a(0x1a5)];for(var _0x17af80=0x0;_0x17af80<_0x2af308[_0x19892a(0x131)];_0x17af80++){$(_0x19892a(0x14a))[_0x19892a(0x1af)]($(_0x19892a(0x1cd))['val'](_0x2af308[_0x17af80]['Id'])['text'](_0x2af308[_0x17af80][_0x19892a(0x200)]));}},'error':function(_0x39c726){console['log'](_0x39c726);}});}function getPrograms(){var _0xff7690=a0_0x4c7ade,_0x1eb2ab,_0x135010=_0xff7690(0x1dd);$(_0xff7690(0x11f))[_0xff7690(0x1af)]($(_0xff7690(0x1cd))[_0xff7690(0x12b)]('All')[_0xff7690(0x143)]('All'));debugger;_0x1eb2ab=_spPageContextInfo['webAbsoluteUrl']+'/_api/web/lists/getbytitle(\x27ProgramList\x27)/items?$select=*',$[_0xff7690(0x186)]({'url':_0x1eb2ab,'headers':{'Accept':_0xff7690(0x211)},'async':![],'success':function(_0x5392b6){var _0x17c781=_0xff7690,_0x4357b7=_0x5392b6['d'][_0x17c781(0x1a5)];for(var _0x354049=0x0;_0x354049<_0x4357b7[_0x17c781(0x131)];_0x354049++){$(_0x17c781(0x11f))[_0x17c781(0x1af)]($(_0x17c781(0x1cd))[_0x17c781(0x12b)](_0x4357b7[_0x354049]['Id'])[_0x17c781(0x143)](_0x4357b7[_0x354049]['Title']));}},'error':function(_0x28baf9){console['log'](_0x28baf9);}});}function clearSelection(){var _0x271ef3=a0_0x4c7ade;$(_0x271ef3(0x14a))['val'](_0x271ef3(0x1e4)),$(_0x271ef3(0x157))[_0x271ef3(0x12b)](_0x271ef3(0x1e4)),$('#ddlProgram')[_0x271ef3(0x12b)]('All'),$(_0x271ef3(0x1a1))[_0x271ef3(0x12b)]('All'),clearPeoplePickerControl(_0x271ef3(0x1d0)),projectListItemArr=filterArr,BindProjectGrid();}function clearPeoplePickerControl(_0x5715d3){var _0x175470=a0_0x4c7ade,_0x59e706=_0x5715d3+_0x175470(0x1a9),_0x1756ae=null,_0x120469=this[_0x175470(0x1ed)]['SPClientPeoplePickerDict'];for(var _0x2f761a in _0x120469){if(_0x2f761a==_0x59e706){_0x1756ae=_0x120469[_0x2f761a];break;}}if(_0x1756ae){var _0x37a684=$(document['getElementById'](_0x1756ae[_0x175470(0x13b)]))[_0x175470(0x21d)](_0x175470(0x142));$(_0x37a684)[_0x175470(0x18e)](function(_0x442f96){var _0x359d49=_0x175470;_0x1756ae[_0x359d49(0x154)](this);});}}function getCurrentURL_GetProjectGridEvent(){var _0x4ecacd=a0_0x4c7ade;$[_0x4ecacd(0x214)](BindDepartments())[_0x4ecacd(0x21b)](function(){});}function BindDepartments(){var _0x4c56cc=a0_0x4c7ade,_0x33b1cc=titanForWork[_0x4c56cc(0x19f)](_0x4c56cc(0x17f)),_0x53b840=new SP[(_0x4c56cc(0x1ee))](),_0x5da05b=_0x53b840[_0x4c56cc(0x1a4)]()[_0x4c56cc(0x1b6)]()['getByTitle'](_0x4c56cc(0x19a)),_0x5adfbf=new SP['CamlQuery'](),_0x218c73=_0x4c56cc(0x1fd)+_0x33b1cc+_0x4c56cc(0x1d8);_0x5adfbf['set_viewXml'](_0x218c73);var _0x231c67=_0x5da05b[_0x4c56cc(0x1e6)](_0x5adfbf);_0x53b840['load'](_0x231c67),_0x53b840[_0x4c56cc(0x17c)](function(){var _0x1a960a=_0x4c56cc,_0x3c07bb=_0x231c67[_0x1a960a(0x159)](),_0x1ccb25=_0x1a960a(0x1b5);while(_0x3c07bb[_0x1a960a(0x1b1)]()){var _0x2f5c12=_0x3c07bb['get_current'](),_0x47cc6c=_0x2f5c12[_0x1a960a(0x12d)]('ID'),_0x70811d=_0x2f5c12[_0x1a960a(0x12d)](_0x1a960a(0x200));_0x1ccb25+=_0x1a960a(0x217)+_0x47cc6c+'\x22>'+_0x70811d+_0x1a960a(0x146);}$(_0x1a960a(0x157))[_0x1a960a(0x1af)](_0x1ccb25);},function(){var _0x19209e=_0x4c56cc;console[_0x19209e(0x11a)](_0x19209e(0x155));});}function initializePeoplePicker(_0x1d14ff){var _0x1df014=a0_0x4c7ade,_0x12c4a7={};_0x12c4a7[_0x1df014(0x1cf)]=_0x1df014(0x1cc),_0x12c4a7[_0x1df014(0x1f0)]=0xf,_0x12c4a7[_0x1df014(0x1f4)]=0xf,_0x12c4a7['AllowMultipleValues']=![],_0x12c4a7['MaximumEntitySuggestions']=0x32,_0x12c4a7[_0x1df014(0x149)]='245px',this[_0x1df014(0x13f)](_0x1d14ff,null,_0x12c4a7);}function getUserInformation(_0x484f9a){var _0x1e2cbc=a0_0x4c7ade,_0x42aa=[],_0x2b0d17=this[_0x1e2cbc(0x1ed)][_0x1e2cbc(0x13e)][_0x484f9a+_0x1e2cbc(0x1a9)];if(!_0x2b0d17[_0x1e2cbc(0x199)]()){if(_0x2b0d17[_0x1e2cbc(0x1c8)])return![];else{if(!_0x2b0d17[_0x1e2cbc(0x153)]())return![];else{if(_0x2b0d17[_0x1e2cbc(0x17a)]>0x0){var _0x5cd7e7=_0x2b0d17[_0x1e2cbc(0x169)](),_0x2b35fc='',_0x393aa0='',_0xb96c0c='';for(var _0x5de1d3=0x0;_0x5de1d3<_0x5cd7e7[_0x1e2cbc(0x131)];_0x5de1d3++){var _0x28505e=_0x5cd7e7[_0x5de1d3][_0x1e2cbc(0x133)][_0x1e2cbc(0x15d)];DisplayText=_0x5cd7e7[_0x5de1d3][_0x1e2cbc(0x12e)];var _0x10783e=_0x28505e;_0x10783e!=-0x1&&_0x42aa['push'](_0x10783e);}return _0x42aa;}}}}else return _0xb96c0c;}function filter(){var _0x4539af=a0_0x4c7ade;filterArr=projectListItemArr,$(_0x4539af(0x126))[_0x4539af(0x198)](function(){var _0x33218d=_0x4539af,_0x3a69e4='';projectListItemArr=filterArr;var _0x340e80='';if($(_0x33218d(0x20a))[_0x33218d(0x143)]()!=''){_0x340e80=getUserInformation(_0x33218d(0x1d0));if(_0x340e80[_0x33218d(0x131)]>0x1)return alert(_0x33218d(0x122)),![];}var _0x418685=$(_0x33218d(0x157))[_0x33218d(0x12b)](),_0x5087c1=$('#ddlLocation')[_0x33218d(0x12b)](),_0x1fcbd5=$(_0x33218d(0x14a))['val'](),_0x213f7c=$(_0x33218d(0x11f))[_0x33218d(0x12b)]();projectListItemArr=projectListItemArr[_0x33218d(0x160)](function(_0x4ed365){var _0x2ad1ec=_0x33218d,_0xe2cfe8=$(_0x2ad1ec(0x12f))[_0x2ad1ec(0x12b)]();return(_0x418685=='All'?_0x4ed365[_0x2ad1ec(0x212)]!=_0x2ad1ec(0x16d):_0x4ed365[_0x2ad1ec(0x212)]==parseInt(_0x418685))&&(_0x1fcbd5==_0x2ad1ec(0x1e4)?_0x4ed365[_0x2ad1ec(0x161)]!='null':_0x4ed365[_0x2ad1ec(0x161)]==parseInt(_0x1fcbd5))&&(_0x5087c1==_0x2ad1ec(0x1e4)?_0x4ed365[_0x2ad1ec(0x1b0)]!=_0x2ad1ec(0x16d):_0x4ed365['OfficeLocationId']==parseInt(_0x5087c1))&&(_0x213f7c=='All'?_0x4ed365[_0x2ad1ec(0x18d)]!='null':_0x4ed365[_0x2ad1ec(0x18d)]==parseInt(_0x213f7c))&&(_0x340e80==''?_0x4ed365['ManagerEMail']!='':_0x4ed365[_0x2ad1ec(0x125)]==_0x340e80)&&(_0xe2cfe8==''?_0x4ed365[_0x2ad1ec(0x141)]!='null':_0x4ed365[_0x2ad1ec(0x141)]==_0xe2cfe8);}),BindProjectGrid();});}var sortProject=![],sortClient=![],sortManager=![];function sortProjectName(){var _0x30c23b=a0_0x4c7ade;sortProject==![]?(projectListItemArr[_0x30c23b(0x1ca)](function(_0x4ec4c4,_0x166d06){var _0x394c3d=_0x30c23b,_0x1dd00e=_0x4ec4c4[_0x394c3d(0x165)][_0x394c3d(0x19d)](),_0x20e191=_0x166d06['ProjectName'][_0x394c3d(0x19d)]();if(_0x1dd00e<_0x20e191)return-0x1;if(_0x1dd00e>_0x20e191)return 0x1;return 0x0;}),sortProject=!![]):(projectListItemArr[_0x30c23b(0x1ca)](function(_0x24af30,_0x345630){var _0x87d421=_0x30c23b,_0x2dfa5a=_0x24af30['ProjectName'][_0x87d421(0x19d)](),_0x1caa15=_0x345630[_0x87d421(0x165)][_0x87d421(0x19d)]();if(_0x1caa15<_0x2dfa5a)return-0x1;if(_0x1caa15>_0x2dfa5a)return 0x1;return 0x0;}),sortProject=![]),BindProjectGrid();}function sortClientName(){var _0x2204d2=a0_0x4c7ade;sortClient==![]?(projectListItemArr[_0x2204d2(0x1ca)](function(_0x1655a3,_0x223343){var _0x328da3=_0x2204d2,_0x500cda=_0x1655a3[_0x328da3(0x1a3)][_0x328da3(0x19d)](),_0x1cb4d0=_0x223343[_0x328da3(0x1a3)][_0x328da3(0x19d)]();if(_0x500cda<_0x1cb4d0)return-0x1;if(_0x500cda>_0x1cb4d0)return 0x1;return 0x0;}),sortClient=!![]):(projectListItemArr[_0x2204d2(0x1ca)](function(_0x556b8b,_0xf61ffe){var _0x472fa7=_0x2204d2,_0x5dfb6f=_0x556b8b[_0x472fa7(0x1a3)][_0x472fa7(0x19d)](),_0x1af166=_0xf61ffe[_0x472fa7(0x1a3)]['toLowerCase']();if(_0x1af166<_0x5dfb6f)return-0x1;if(_0x1af166>_0x5dfb6f)return 0x1;return 0x0;}),sortClient=![]),BindProjectGrid();}function sortManagerName(){var _0x23998d=a0_0x4c7ade;sortManager==![]?(projectListItemArr[_0x23998d(0x1ca)](function(_0x412ba9,_0x2b21c0){var _0x2e4979=_0x23998d,_0xe38d90=_0x412ba9[_0x2e4979(0x1eb)][_0x2e4979(0x19d)](),_0x65f6ef=_0x2b21c0[_0x2e4979(0x1eb)][_0x2e4979(0x19d)]();if(_0xe38d90<_0x65f6ef)return-0x1;if(_0xe38d90>_0x65f6ef)return 0x1;return 0x0;}),sortManager=!![]):(projectListItemArr[_0x23998d(0x1ca)](function(_0x874cf8,_0x29530a){var _0x1f4c73=_0x23998d,_0x71c147=_0x874cf8[_0x1f4c73(0x1eb)][_0x1f4c73(0x19d)](),_0x38e07c=_0x29530a[_0x1f4c73(0x1eb)][_0x1f4c73(0x19d)]();if(_0x38e07c<_0x71c147)return-0x1;if(_0x38e07c>_0x71c147)return 0x1;return 0x0;}),sortManager=![]),BindProjectGrid();}function a0_0x4f9b(){var _0x97ca5f=['\x20key\x20not\x20found.','Width','#ddlCustomer','%\x22>','<a\x20class=\x27custom-edit-btn\x27\x20href=\x27','endrecordMyProject','<td>','ProjectId','host','employeePicURL','<div\x20class=\x22project-edit-lock-btn-box\x22>','HasResolvedUsers','DeleteProcessedUser','error\x20:\x20Project\x20Details\x20web\x20part','formatDate','#txtFilterDepartment','<label\x20class=\x22lable-view-name\x22>Office:</label>','getEnumerator','</h3>','<div>','ProjectDetails','Email','data-localize','Modified','filter','ClientID','&ProjectName=','ActualEndDate1','<p\x20class=\x22member-email\x20text-ellipsis\x22>','ProjectName','CompletionPercentage','split','includes','GetAllUserInfo','/Pages/EditProjectDetails.aspx?WebAppId=','<div\x20class=\x22progress\x20custom-progress\x20progress-info\x20m-0\x20mt-4\x22>','LabelsSettings','null','<p\x20class=\x22m-0\x20mb-10\x20color-green\x22>Completed</p>','Deferred','ProjectDescription','Multilingual\x20:\x20','responseJSON','[object\x20SafariRemoteNotification]','7713064gwafOp','button','promise','tableExport','\x27)/items?$select=*&$filter=CompanyId\x20eq\x20\x27','<div\x20class=\x22project-manager-card-body-info\x20text-ellipsis\x22>','TotalUserCount','<div\x20class=\x22progress\x20custom-progress\x20progress-danger\x20m-0\x20mt-4\x22>','executeQueryAsync','/_api/web/lists/getbytitle(\x27','GET','CompanyId','ProjectCode','#CreateProject','__next','<div\x20class=\x22progress\x20custom-progress\x20progress-warning\x20m-0\x20mt-4\x22>','</div>','#exceltable>tbody','ajax','<label\x20class=\x22lable-view-name\x22>Dept:</label>','close','sp.js','Percentage','\x20and\x20CompanyId\x20eq\x20\x27','/_layouts/15/userphoto.aspx?accountname=','ProgramID','each','setDate','pagedropdownMyProject','<div\x20class=\x22progress-bar\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:70%;\x20background:#000000ab\x22>','href','#mydmsNorecordFound','TechnologyUsed','ready','yyyy/MM/dd','Recommended\x20to\x20clear\x20the\x20browsing\x20data\x20and\x20cookies\x20for\x20smooth\x20and\x20fast\x20browsing.\x20Please\x20press\x20Ctrl\x20+\x20H\x20to\x20clear\x20cookies.','click','IsEmpty','Departments','protocol','trim','toLowerCase','format','getQueryStringParameter','prop','#ddlLocation','hide','ClientName','get_web','results','\x27)/items/','OnHold','PlanedEndDate','_TopSpan','5305384yGgBTc','\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a>','<div\x20class=\x22progress-bar\x20progress-bar-success\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:','get','12408748ANNQlV','append','OfficeLocationId','moveNext','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','<label\x20class=\x22lable-view-name\x22\x20data-localize=\x22Program\x22>Program:</label>','getDate','<option\x20value=\x22All\x22>All</option>','get_lists','<p\x20class=\x22m-0\x20mb-10\x20color-blue\x22>Live</p>','show','<div\x20class=\x22progress-bar\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:','<div\x20class=\x22ref\x22>','<div\x20class=\x22progress\x20custom-progress\x20progress-success\x20m-0\x20mt-4\x22>','[data-localize]','/Pages/ViewProjectDetails.aspx?WebAppId=','</td>','getItemsWithQueryItem','<tr><td>','#btnViewProgram','<p\x20class=\x22m-0\x20font-12\x22>Date:<span>','undefined','359082lGheWP','DefaultLanguage','pushNotification','sorter','HasInputError','2721PeUDxR','sort','<div\x20class=\x22project-manager-card\x22>','User,DL','<option/>','%</td></tr>','PrincipalAccountType','managerPicker','toISOString','evenselected','OfficeLocation','lableText_Converted','projectId','%;\x20background:#ff0000\x20!important\x22>','totalrecordsMyProject','</Value></Eq></Where><OrderBy><FieldRef\x20Name=\x27Title\x27/></OrderBy></Query></View>','selectedIndex','\x27\x20and\x20(WebPartName\x20eq\x20\x27Project\x27)','5000','<div\x20class=\x22ellipsis-2\x22>','ProgramList','#tablefooterMyProject','/_api/web/Lists/getbytitle(\x27OfficeLocation\x27)/Items?$filter=CompanyID\x20eq\x20\x27','<p\x20class=\x22m-0\x20font-12\x22>Due\x20:<span>','#btnCreateProgram','<a\x20href=\x27','safari','All','#hdnIsProjectAdmin','getItems','tablenavMyProject','<p\x20class=\x22m-0\x20font-12\x22\x20style=\x22color:#ff0000\x20!important\x22>Due\x20:<span>','</span></p>','DepartmentName','ManagerName','<div\x20class=\x22d-flex\x20mt5\x22>','SPClientPeoplePicker','ClientContext','sorterTableMyProjectList','SearchPrincipalSource','<img\x20src=\x22','/Pages/ProjectDetails.aspx?WebAppId=','attr','ResolvePrincipalSource','datepicker','push','selectedrowMyProject','siteServerRelativeUrl','PlanedEndDate1','head','\x27&$top=5000','?$select=Title,Key,DefaultLanguage&$top=5000&$filter=Title\x20eq\x20\x27Project\x27\x20','<View><Query><Where><Eq><FieldRef\x20Name=\x27CompanyID\x27\x20/><Value\x20Type=\x27Lookup\x27>','<div\x20class=\x22project-manager-card-body\x22>','value','Title','<label\x20class=\x22lable-view-name\x22\x20data-localize=\x22Reference\x22>Reference:</label>','substring','\x27\x20and\x20Department/ID\x20eq\x20\x27','-Select-','table','concat','\x27\x20and\x20ContributorsId\x20eq\x20\x27','<td\x20style=\x22text-align:center\x22>NorecordFound</td>','EMail','#managerPicker_TopSpan_ResolvedList','/_api/web/Lists/getbytitle(\x27ClientMaster\x27)/Items?&$top=500&$filter=IsActive\x20eq\x20\x271\x27','#exceltable','<br\x20/>Please\x20wait!!','location','.myListPagingValue','webAbsoluteUrl','application/json;odata=verbose','Department_ID','tableTempProjects','when','PartnerName','496zUddTV','<option\x20value=\x22','#RecentProject','</div></td></tr>','ItemID','done','resolve','find','userId','log','PlanedStartDate','<p\x20class=\x22m-0\x20font-12\x22>Due:<span>','</td><td>','test','#ddlProgram','&ProjectID=','#tableTempProjects>tbody','Please\x20enter\x20only\x20one\x20Manager','\x27\x20and\x20WebPartName\x20eq\x20\x27Project\x20Admin\x27','dd-M-yy','ManagerEMail','#btnApply','ActualEndDate','ModalDialog','totalpagesMyProject','toString','val','9475179oJapCK','get_item','DisplayText','#txtFilterStatus','#txtSomethingWentWrong','length','html','EntityData','</p>','9bhrtxx','nosort','fadeIn','\x22\x20alt=\x22user\x22>','labelText_Actual','HTMLElement','ResolvedListElementId','ProcessApprovers','15FevIEh','SPClientPeoplePickerDict','SPClientPeoplePicker_InitStandaloneControlWrapper','3MAppWj','Status','span[class=\x27sp-peoplepicker-userSpan\x27]','text','<p\x20class=\x22m-0\x20mb-10\x20color-green\x22>Completed<span\x20style=\x22color:#ff0000\x20!important\x22>(Late)</span></p>','Live','</option>','14526150GRekFP'];a0_0x4f9b=function(){return _0x97ca5f;};return a0_0x4f9b();}var LabelDefaultLangauge=[],labels=[];function ChangeLabels(){var _0x14aaef=a0_0x4c7ade,_0x24114b='DefaultLanguage';if(LabelDefaultLangauge['length']==0x0){var _0x5ec189=_0x14aaef(0x1fc);$[_0x14aaef(0x214)](CommonFunction[_0x14aaef(0x1bf)](_0x14aaef(0x16c),_0x5ec189))[_0x14aaef(0x21b)](function(_0x3a4392){var _0x1c8e72=_0x14aaef;try{LabelDefaultLangauge=_0x3a4392[_0x1c8e72(0x1a5)],SetDMSText(_0x3a4392[_0x1c8e72(0x1a5)],_0x24114b);}catch(_0x3561e0){alert(_0x1c8e72(0x197));}});}else SetDMSText(LabelDefaultLangauge,_0x24114b);}function SetDMSText(_0x51098e,_0x78979b){var _0x4e9e39=a0_0x4c7ade;labels=[],$[_0x4e9e39(0x18e)](_0x51098e,function(_0x21d5f5,_0x23de49){var _0x9f3c11=_0x4e9e39,_0x5a5545=_0x23de49['Key'],_0x594ddf=_0x23de49[_0x78979b];if(_0x594ddf==null||_0x594ddf==''||_0x594ddf==undefined)_0x594ddf=_0x23de49[_0x9f3c11(0x1c5)];var _0x6f3a9={'labelText_Actual':_0x5a5545,'lableText_Converted':_0x594ddf};labels[_0x9f3c11(0x1f6)](_0x6f3a9);}),DetectBrowser();}function DetectBrowser(){var _0x255216=a0_0x4c7ade,_0x2f08c7=/constructor/i[_0x255216(0x11e)](window[_0x255216(0x13a)])||function(_0x51186b){var _0x52268f=_0x255216;return _0x51186b[_0x52268f(0x12a)]()===_0x52268f(0x173);}(!window[_0x255216(0x1e3)]||typeof safari!==_0x255216(0x1c3)&&safari[_0x255216(0x1c6)]),_0x372600=![]||!!document['documentMode'];_0x2f08c7||_0x372600?ChangeWebPartsHeadings_OldBrowser():ChangeWebPartsHeadings();}function ChangeWebPartsHeadings(){var _0x1ed2e7=a0_0x4c7ade;try{$(_0x1ed2e7(0x1bc))[_0x1ed2e7(0x18e)](function(_0x4b44ad,_0x1118a2){var _0x1d2d15=_0x1ed2e7;try{var _0x5596ed=$(this)[_0x1d2d15(0x1f3)](_0x1d2d15(0x15e)),_0x47b24e=labels[_0x1d2d15(0x21d)](function(_0x50bc18){var _0x467d40=_0x1d2d15;return _0x50bc18[_0x467d40(0x139)][_0x467d40(0x19c)]()===_0x5596ed;})[_0x1d2d15(0x1d4)];if($(this)['find']('a')[_0x1d2d15(0x131)]>0x0)$(this)[_0x1d2d15(0x21d)]('a')['html'](_0x47b24e);else{if($(this)[_0x1d2d15(0x21d)]('b')[_0x1d2d15(0x131)]>0x0)$(this)['find']('b')[_0x1d2d15(0x132)](_0x47b24e);else{if($(this)[_0x1d2d15(0x21d)]('p')[_0x1d2d15(0x131)]>0x0)$(this)[_0x1d2d15(0x21d)]('p')[_0x1d2d15(0x132)](_0x47b24e);else $(this)['hasClass'](_0x1d2d15(0x175))?$(this)[_0x1d2d15(0x1f3)](_0x1d2d15(0x1ff),_0x47b24e):$(this)['html'](_0x47b24e);}}}catch(_0x2445b6){console['log'](_0x1d2d15(0x171)+_0x5596ed+_0x1d2d15(0x148)),$(this)['attr'](_0x1d2d15(0x1ff),$(this)[_0x1d2d15(0x12b)]());}});}catch(_0x579203){console['log'](_0x1ed2e7(0x171)+_0x579203);}}function ChangeWebPartsHeadings_OldBrowser(){var _0x36fa12=a0_0x4c7ade;try{$('[data-localize]')['each'](function(_0x446d7b,_0xba0405){var _0x401708=a0_0x2015;try{var _0x9e56ad=$(this)['attr'](_0x401708(0x15e)),_0x5307d2=findObjectByKey(labels,_0x9e56ad,_0x9e56ad);if($(this)[_0x401708(0x21d)]('a')[_0x401708(0x131)]>0x0)$(this)[_0x401708(0x21d)]('a')['html'](_0x5307d2);else{if($(this)[_0x401708(0x21d)]('b')[_0x401708(0x131)]>0x0)$(this)[_0x401708(0x21d)]('b')[_0x401708(0x132)](_0x5307d2);else{if($(this)[_0x401708(0x21d)]('p')[_0x401708(0x131)]>0x0)$(this)[_0x401708(0x21d)]('p')['html'](_0x5307d2);else $(this)['hasClass'](_0x401708(0x175))?_0x5307d2!=null&&_0x5307d2!=_0x401708(0x16d)&&_0x5307d2!=''?$(this)[_0x401708(0x1f3)](_0x401708(0x1ff),_0x5307d2):$(this)['attr']('value',$(this)[_0x401708(0x12b)]()):_0x5307d2!=null&&_0x5307d2!=_0x401708(0x16d)&&_0x5307d2!=''?$(this)['html'](_0x5307d2):$(this)[_0x401708(0x132)]($(this)[_0x401708(0x143)]());}}}catch(_0xdc5d7c){console['log']('Multilingual\x20:\x20'+_0x9e56ad+_0x401708(0x148)),$(this)['attr'](_0x401708(0x1ff),$(this)[_0x401708(0x12b)]());}});}catch(_0x3c2456){console['log'](_0x36fa12(0x171)+_0x3c2456);}}function findObjectByKey(_0x212a2b,_0x4325f6,_0x171e7c){var _0x3a5d0d=a0_0x4c7ade;for(var _0x100d52=0x0;_0x100d52<_0x212a2b[_0x3a5d0d(0x131)];_0x100d52++){if(_0x212a2b[_0x100d52]['labelText_Actual']==_0x171e7c)return _0x212a2b[_0x100d52][_0x3a5d0d(0x1d4)];}return null;}