var a0_0xb3d650=a0_0x473e;(function(_0x1585ba,_0x351762){var _0x30ffa7=a0_0x473e,_0xe4bc6b=_0x1585ba();while(!![]){try{var _0x5a95f3=parseInt(_0x30ffa7(0x102))/0x1+parseInt(_0x30ffa7(0xf9))/0x2+parseInt(_0x30ffa7(0x103))/0x3+-parseInt(_0x30ffa7(0xe8))/0x4+-parseInt(_0x30ffa7(0x101))/0x5*(parseInt(_0x30ffa7(0xf7))/0x6)+-parseInt(_0x30ffa7(0xf5))/0x7*(parseInt(_0x30ffa7(0xe7))/0x8)+parseInt(_0x30ffa7(0xe3))/0x9;if(_0x5a95f3===_0x351762)break;else _0xe4bc6b['push'](_0xe4bc6b['shift']());}catch(_0x331bfd){_0xe4bc6b['push'](_0xe4bc6b['shift']());}}}(a0_0x128f,0xba2a1),$(window)[a0_0xb3d650(0xe9)](function(){GetLoginUserClients(),setInterval(function(){GetLoginUserClients();},0x30d40);}));function GetLoginUserClients(){var _0x5c8542=a0_0xb3d650,_0x1bcf02=_spPageContextInfo[_0x5c8542(0xee)]+_0x5c8542(0xec)+Logged_CompanyId+_0x5c8542(0xff)+_spPageContextInfo['userId']+'\x27\x20or\x20InternalSupervisor/Id\x20eq\x20\x27'+_spPageContextInfo['userId']+_0x5c8542(0xeb);$['ajax']({'url':_0x1bcf02,'headers':{'Accept':_0x5c8542(0xf3)},'async':!![],'success':function(_0x5e4e1d){var _0x5e5fe5=_0x5c8542,_0x350e8f=[],_0x2dc207=_0x5e4e1d['d'][_0x5e5fe5(0xf2)],_0x49fa99='';if(_0x2dc207[_0x5e5fe5(0xed)]>0x0)for(i=0x0;i<_0x2dc207[_0x5e5fe5(0xed)];i++){_0x350e8f[_0x5e5fe5(0xfc)](_0x2dc207[i]['ID']);}GetUnreadmsgCounts(_0x350e8f);},'error':function(_0x70f505){var _0x40dc87=_0x5c8542;console['log'](_0x40dc87(0xfd)),console[_0x40dc87(0xf1)](_0x70f505);}});}var TotalNotification=0x0;function GetUnreadmsgCounts(_0x2c8014){var _0x228a3b=a0_0xb3d650;if(_0x2c8014[_0x228a3b(0xed)]>0x0){TotalNotification=0x0;for(var _0x2dfea9=0x0;_0x2dfea9<_0x2c8014[_0x228a3b(0xed)];_0x2dfea9++){dfds=$['Deferred'](),NewQuery=_0x228a3b(0xf6)+_0x2c8014[_0x2dfea9]+'\x27\x20and\x20User/Id\x20eq\x20\x27'+_spPageContextInfo[_0x228a3b(0x100)]+'\x27',url=_spPageContextInfo[_0x228a3b(0xee)]+'/_api/web/lists/getbytitle(\x27ContactCenterMsgCounts\x27)/items/'+NewQuery,FilterRequestQueryData(url,_0x2c8014[_0x2dfea9],dfds);}}TotalNotification!=0x0&&($(_0x228a3b(0xfb))[_0x228a3b(0xe6)](TotalNotification),$(_0x228a3b(0xfb))['css'](_0x228a3b(0xf0),'block'));}function FilterRequestQueryData(_0x4dbb1b,_0x4b905d){var _0x1667c3=a0_0xb3d650,_0x43c89e=[],_0x4aba6c=_0x4dbb1b;return $[_0x1667c3(0xfe)]({'url':_0x4aba6c,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x71b740){var _0x4c31c3=_0x1667c3,_0x470481=_0x71b740['d']['results'],_0x17f877='';if(_0x470481[_0x4c31c3(0xed)]>0x0)dfds=$[_0x4c31c3(0xfa)](),NewQuery=_0x4c31c3(0xef)+_0x470481[0x0][_0x4c31c3(0xf8)]+_0x4c31c3(0xe4)+_0x4b905d+_0x4c31c3(0xf4)+_spPageContextInfo['userId']+_0x4c31c3(0xea);else{}if(_0x470481['length']>0x0){var _0x29077b=_spPageContextInfo[_0x4c31c3(0xee)]+_0x4c31c3(0xe5)+NewQuery;$[_0x4c31c3(0xfe)]({'url':_0x29077b,'headers':{'Accept':_0x4c31c3(0xf3)},'async':![],'success':function(_0x9c2af8){var _0x3aaf1f=_0x4c31c3;_0x17f877=_0x9c2af8['d'][_0x3aaf1f(0xf2)],_0x17f877[_0x3aaf1f(0xed)]>0x0&&(_0x17f877[_0x17f877[_0x3aaf1f(0xed)]-0x1]['AuthorId']!=_spPageContextInfo[_0x3aaf1f(0x100)]&&(TotalNotification=TotalNotification+_0x17f877[_0x3aaf1f(0xed)]));},'error':function(_0xc0885c){var _0x483f8a=_0x4c31c3;console['log']('Error\x20in\x20FilterRequestQueryData.'),console[_0x483f8a(0xf1)](_0xc0885c);}});}},'error':function(_0x46ceeb){var _0x5a5a6a=_0x1667c3;console[_0x5a5a6a(0xf1)](_0x5a5a6a(0xe2)),console[_0x5a5a6a(0xf1)](_0x46ceeb);}}),_0x43c89e;}function a0_0x473e(_0x30697b,_0x25e2bf){var _0x128fad=a0_0x128f();return a0_0x473e=function(_0x473e18,_0x36537d){_0x473e18=_0x473e18-0xe2;var _0x4dad08=_0x128fad[_0x473e18];return _0x4dad08;},a0_0x473e(_0x30697b,_0x25e2bf);}function a0_0x128f(){var _0x29a2d8=['107307dIuPNh','Error\x20in\x20FilterRequestQueryData.','7829118zpWwdm','&$filter=(WebPartName\x20eq\x20\x27ContactCenter\x27\x20and\x20Customer/Id\x20eq\x20\x27','/_api/web/lists/getbytitle(\x27ContactCenter\x27)/items/','text','164344uHJpyr','249432sVouZj','ready','\x27\x20and\x20(Initials\x20eq\x20\x27Parent\x27\x20or\x20Initials\x20eq\x20\x27Reply\x27))','\x27)&$top=5000&$orderby=Title\x20asc','/_api/web/lists/getbytitle(\x27ClientMaster\x27)/items?$filter=CompanyID/Id\x20eq\x20\x27','length','webAbsoluteUrl','?$top=5000&$orderby=ID\x20asc&$select=ID,AuthorId&$skipToken=Paged=TRUE%26p_ID=','display','log','results','application/json;odata=verbose','\x27\x20and\x20AuthorId\x20ne\x20\x27','98rfRKvK','?$top=5000&$select=*,Client/MaxMsgID&$expand=Client&$filter=Client/Id\x20eq\x20\x27','2526eoNJbc','LastMessageRead','110780bNPYnX','Deferred','#TotalNotifications','push','Error\x20in\x20AllActiveClients.','ajax','\x27\x20and\x20(InternalMembers/Id\x20eq\x20\x27','userId','785OTuWvX','217525TKWLvf'];a0_0x128f=function(){return _0x29a2d8;};return a0_0x128f();}