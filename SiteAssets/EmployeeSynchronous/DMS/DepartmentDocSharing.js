var a0_0x648357=a0_0x2183;(function(_0x45618a,_0x479310){var _0x1fca6d=a0_0x2183,_0x40d601=_0x45618a();while(!![]){try{var _0x15f726=parseInt(_0x1fca6d(0x1de))/0x1+-parseInt(_0x1fca6d(0x1c0))/0x2*(parseInt(_0x1fca6d(0x228))/0x3)+parseInt(_0x1fca6d(0x1ff))/0x4*(parseInt(_0x1fca6d(0x1c8))/0x5)+-parseInt(_0x1fca6d(0x1ac))/0x6+parseInt(_0x1fca6d(0x1cd))/0x7*(-parseInt(_0x1fca6d(0x1f0))/0x8)+-parseInt(_0x1fca6d(0x18d))/0x9+-parseInt(_0x1fca6d(0x1c5))/0xa*(-parseInt(_0x1fca6d(0x1c2))/0xb);if(_0x15f726===_0x479310)break;else _0x40d601['push'](_0x40d601['shift']());}catch(_0xa35692){_0x40d601['push'](_0x40d601['shift']());}}}(a0_0x3aa2,0x2a5b3));var currentFileSiteURL='',mydeptSiteUrl='',currentDlgShare='';$(document)[a0_0x648357(0x1f8)](function(){var _0x3806e7=a0_0x648357;getDeptSiteUrl(),$(_0x3806e7(0x1b0))['click'](function(){OpenSharePopup();}),$(_0x3806e7(0x205))[_0x3806e7(0x20f)](function(){var _0x3cc5ae=_0x3806e7,_0x505f72=_0x3cc5ae(0x1d7),_0x597950=_0x3cc5ae(0x23b),_0x1af04a=0xc8,_0x517c05=0x190;SP[_0x3cc5ae(0x1eb)][_0x3cc5ae(0x1e7)](['strings.js',_0x3cc5ae(0x1b4)],function(){var _0x434102=_0x3cc5ae;currentDlgShare=SP['UI']['ModalDialog'][_0x434102(0x1d2)](_0x505f72,_0x597950,_0x1af04a,_0x517c05);}),setTimeout(function(){DeptSharemutiplefile();},0x64);}),$('#sharingTypeDeptFolderPermissionLvl')['change'](function(){var _0x4beba8=_0x3806e7;clearPeoplePickerControl(_0x4beba8(0x232)),$(_0x4beba8(0x1fc))[_0x4beba8(0x209)]();if($(this)[_0x4beba8(0x1bf)]()==_0x4beba8(0x1df))$(_0x4beba8(0x221))['show'](),$(_0x4beba8(0x1fc))[_0x4beba8(0x1e6)](),$('#ddlOrgNameDeptFolder')[_0x4beba8(0x1bf)]()==null?getGuestClients(_0x4beba8(0x1f1)):($(_0x4beba8(0x22d))[_0x4beba8(0x240)](_0x4beba8(0x1e0),![]),$('.multiBox')[_0x4beba8(0x1bd)](_0x4beba8(0x21f)));else{if($(this)['val']()=='0'||$(this)[_0x4beba8(0x1bf)]()==_0x4beba8(0x1f2))$('.orgDropdowndivDeptFolder')[_0x4beba8(0x1e6)](),$(_0x4beba8(0x1fc))[_0x4beba8(0x1e6)]();else $(this)['val']()!=_0x4beba8(0x224)&&$(this)[_0x4beba8(0x1bf)]()!='0'?($(_0x4beba8(0x221))[_0x4beba8(0x1e6)](),GetDeptSharingGpUsers($(this)[_0x4beba8(0x1bf)](),_0x4beba8(0x233))):$(_0x4beba8(0x221))[_0x4beba8(0x1e6)]();}}),$(_0x3806e7(0x1ea))['change'](function(){var _0x8028ce=_0x3806e7;getOrgEmps($(_0x8028ce(0x1ed))[_0x8028ce(0x1bd)]());}),$(_0x3806e7(0x1e5))[_0x3806e7(0x20f)](function(){var _0x1d55e8=_0x3806e7,_0xf30c01=_0x1d55e8(0x23a),_0x2e5b4c=_0x1d55e8(0x23b),_0x1b1d1b=0xc8,_0x3fe0fc=0x190;SP[_0x1d55e8(0x1eb)]['loadMultiple']([_0x1d55e8(0x198),'sp.ui.dialog.js'],function(){var _0xf362b5=_0x1d55e8;currentDlgShare=SP['UI']['ModalDialog'][_0xf362b5(0x1d2)](_0xf30c01,_0x2e5b4c,_0x1b1d1b,_0x3fe0fc);}),setTimeout(function(){deptDocFolderSharing();},0x64);}),$('#btnDeptCancelShareFolder,\x20#btnCloseDeptShare')[_0x3806e7(0x20f)](function(){var _0x5d92e3=_0x3806e7;$(_0x5d92e3(0x1cf))[_0x5d92e3(0x1a5)](_0x5d92e3(0x1e6)),$(_0x5d92e3(0x1fc))[_0x5d92e3(0x1e6)](),$(_0x5d92e3(0x221))[_0x5d92e3(0x1e6)](),$(_0x5d92e3(0x199))[_0x5d92e3(0x235)](''),$(_0x5d92e3(0x22d))[_0x5d92e3(0x240)](_0x5d92e3(0x1e0),![]),$(_0x5d92e3(0x1ef))['text']('Select');});});function CreatDeptDocfromTemplateWordFile(){var _0x3697d5=a0_0x648357;CommonDeptFileCreate(_0x3697d5(0x20b),0x1);}function CreatDeptDocfromTemplateExcelFile(){var _0x556f55=a0_0x648357;CommonDeptFileCreate(_0x556f55(0x1dc),0x2);}function CreatDeptDocfromTemplatePPTFile(){var _0x5ddd52=a0_0x648357;CommonDeptFileCreate(_0x5ddd52(0x204),0x3);}function CommonDeptFileCreate(_0x50d385,_0x45fd15){var _0x2fa102=a0_0x648357,_0x2699db='',_0x1e2851=$(_0x2fa102(0x23f))[_0x2fa102(0x1bf)]();_0x1e2851=_0x1e2851[_0x2fa102(0x18e)](0x10,-0x1);if(mydeptSiteUrl==_0x2fa102(0x1ae))return alert(_0x2fa102(0x1e4)),![];_0x1e2851==''?createNewDocumentWithRedirect2(_0x2699db,mydeptSiteUrl+'/DepartmentalDMS/Forms/template.'+_0x50d385,mydeptSiteUrl+'/DepartmentalDMS',_0x2fa102(0x21c),![],mydeptSiteUrl+_0x2fa102(0x227)+myCompanyUrl+_0x2fa102(0x1e8)+_0x50d385,!![],_0x45fd15):createNewDocumentWithRedirect2(_0x2699db,mydeptSiteUrl+_0x2fa102(0x1a0)+_0x50d385,mydeptSiteUrl+_0x2fa102(0x1f7)+_0x1e2851,_0x2fa102(0x21c),![],mydeptSiteUrl+'/_layouts/CreateNewDocument.aspx?id='+myCompanyUrl+_0x2fa102(0x1e8)+_0x50d385,!![],_0x45fd15);}function getDeptSiteUrl(){var _0x3abd6f=a0_0x648357,_0x1275b8=_0x3abd6f(0x247)+Logged_DepartmentId+'\x27\x20';dfds=$[_0x3abd6f(0x1ab)](),url=_spPageContextInfo[_0x3abd6f(0x214)]+_0x3abd6f(0x1fd)+_0x1275b8,$[_0x3abd6f(0x249)](getItems(url,dfds))[_0x3abd6f(0x21d)](function(_0x41ffb7){var _0x38bb18=_0x3abd6f;response=[],_0x41ffb7[_0x38bb18(0x226)]>0x0?mydeptSiteUrl=_0x41ffb7[0x0][_0x38bb18(0x1bc)]:mydeptSiteUrl=_0x38bb18(0x1ae);});}function OpenSharePopup(){var _0x3a6cca=a0_0x648357;$(_0x3a6cca(0x1b7))['hide']();if(selectedDepartmentDoc['length']>0x0)globalsharingDocumentDetails='',globalSharingDocumentDocumentType='',$(_0x3a6cca(0x1e2))[_0x3a6cca(0x1ba)](_0x3a6cca(0x1e0),!![]),$(_0x3a6cca(0x1b6))['val'](''),$(_0x3a6cca(0x1e3))[_0x3a6cca(0x235)](''),$(_0x3a6cca(0x1f9))[_0x3a6cca(0x235)](''),$(_0x3a6cca(0x1a9))[_0x3a6cca(0x235)](''),$(_0x3a6cca(0x1db))[_0x3a6cca(0x1bf)](_0x3a6cca(0x231)),$(_0x3a6cca(0x190))[_0x3a6cca(0x1bf)]('0'),$('#sharefilename')['hide'](),$(_0x3a6cca(0x1c1))[_0x3a6cca(0x1e6)](),$('#filedocumentname')[_0x3a6cca(0x1e6)](),sharedUsersIdArrayListItemCollection=[],sharedUsersEmailIDsArrayListItemCollection=[],clearPeoplePickerControl('customShareingPoplePicker'),$(_0x3a6cca(0x200))[_0x3a6cca(0x1a5)](_0x3a6cca(0x209)),$(_0x3a6cca(0x19b))[_0x3a6cca(0x1e6)](),$(_0x3a6cca(0x205))[_0x3a6cca(0x209)](),BindMySharingGroups(),$(_0x3a6cca(0x190))['trigger'](_0x3a6cca(0x21b));else return alert(_0x3a6cca(0x1b8)),![];}function DeptSharemutiplefile(){var _0x3f6328=a0_0x648357;if(selectedDepartmentDoc[_0x3f6328(0x226)]>0x0){var _0x4249e8=$('#shareingTypePermissionLevel')[_0x3f6328(0x1bf)](),_0x5eba01=$('#sharedWithPermission')['val']();if(_0x4249e8=='0'||_0x4249e8==null||_0x4249e8=='')return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert(_0x3f6328(0x1e9)),![];else{if(_0x5eba01==null||_0x5eba01==''||_0x5eba01==_0x3f6328(0x231))return currentDlgShare!=''&&currentDlgShare['close'](),alert(_0x3f6328(0x1cb)),![];}if(_0x4249e8=='Private')$(_0x3f6328(0x1e2))['attr']('checked',![]);else{if(_0x4249e8==_0x3f6328(0x1df)){sharedHistoryUser=sharedUsersIdArrayListItemCollection;if($(_0x3f6328(0x1ef))[_0x3f6328(0x1bd)]()[_0x3f6328(0x1f3)](_0x3f6328(0x21f))==0x0)return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert(_0x3f6328(0x1da)),![];if(sharedUsersIdArrayListItemCollection['length']==0x0)return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert(_0x3f6328(0x18f)),![];}else{sharedHistoryUser=[],sharedUsersIdArrayListItemCollection=[],sharedUsersEmailIDsArrayListItemCollection=[];if(getUserInfoFromPeoplePicker(_0x3f6328(0x1ad))){if(sharedUsersIdArrayListItemCollection!=null){sharedHistoryUser=sharedUsersIdArrayListItemCollection;if(sharedUsersIdArrayListItemCollection[_0x3f6328(0x226)]==0x0)return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert(_0x3f6328(0x1d6)),![];}else return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert('Kindly\x20enter\x20sharing\x20users.'),![];}else return currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)](),alert('Kindly\x20enter\x20sharing\x20users.'),![];}}for(var _0xf5f0d6=0x0;_0xf5f0d6<selectedDepartmentDoc[_0x3f6328(0x226)];_0xf5f0d6++){currentFileSiteURL=window['location'][_0x3f6328(0x1b5)]+selectedDepartmentDocrelativeurl[_0xf5f0d6][_0x3f6328(0x1a4)](_0x3f6328(0x20e))[0x0];var _0x39e007=selectedDepartmentDoc[_0xf5f0d6],_0x461474=GetDeptFileServerRelativeUrl(_0x39e007,_0x3f6328(0x24b));arrSharedUserIds=[];var _0x5947ff=-0x1;while(++_0x5947ff<sharedUsersIdArrayListItemCollection[_0x3f6328(0x226)]){arrSharedUserIds[_0x5947ff]=sharedUsersIdArrayListItemCollection[_0x5947ff];}sharedUsersIdArrayListItemCollection=sharedUsersIdArrayListItemCollection['concat'](sharefileuser);if(_0x4249e8==_0x3f6328(0x1f2))sharedUsersIdArrayListItemCollection=[],$[_0x3f6328(0x249)](BreakInheritePermissionOnItemSharing(myCompanyUrl,_0x461474,_0x39e007,_spPageContextInfo['userId'],sharedUsersIdArrayListItemCollection))[_0x3f6328(0x21d)](function(_0x1b0401){DeleteSharedLink(_0x39e007);});else{var _0x4390b2=$(_0x3f6328(0x190))['val'](),_0x13d816=$(_0x3f6328(0x1db))[_0x3f6328(0x1bf)]();ShareFilesFolder(_0x461474,_0x3f6328(0x24b));if(sharedUsersIdArrayListItemCollection['length']>0x0){var _0xafa111=$(_0x3f6328(0x190))['val']();updateDeptDocPropertiesOnItemSharing(_0x39e007,_0x461474,_0xafa111,sharedUsersIdArrayListItemCollection,currentFileSiteURL,![]),GetDocumentsRevoke(sharedHistoryUser,_0x39e007),_0x4249e8==_0x3f6328(0x1df)?AddSharedLinkToListOrg(shredLinkFileName,_0x461474,arrUserClientWise,_0x39e007,_0x3f6328(0x24b),_0x4390b2,_0x13d816,_0x3f6328(0x1d4)):AddSharedLinkToList22(shredLinkFileName,_0x461474,sharedHistoryUser,_0x39e007,'File',_0x4390b2,_0x13d816,'Department');}sharedUsersIdArrayListItemCollection=sharedHistoryUser;}sharefileuser=[];}selectedDocumentserverrelativeurl=[],selectedDepartmentDoc=[];if($('#chekedSendEmail')[_0x3f6328(0x240)]('checked')==!![]){if(arrDepartmntEmail['length']>0x0){var _0x7126b9='',_0x2c6608=$(_0x3f6328(0x245))[_0x3f6328(0x1bd)]();_0x2c6608==_0x3f6328(0x231)&&(_0x2c6608='');_0x7126b9=_0x3f6328(0x1cc)+_spPageContextInfo['userDisplayName']+_0x3f6328(0x20c);for(i=0x0;i<arrDepartmntEmail[_0x3f6328(0x226)];i++){_0x7126b9=_0x7126b9+'<div><strong>File\x20Name\x20:</strong>'+arrDepartmntEmail[i]['File']+'</div>'+'<div><strong>Reference\x20No\x20:</strong>\x20'+arrDepartmntEmail[i][_0x3f6328(0x208)]+_0x3f6328(0x237)+_0x3f6328(0x20a)+arrDepartmntEmail[i][_0x3f6328(0x236)]+_0x3f6328(0x237)+'<div><strong>Type:</strong>\x20'+arrDepartmntEmail[i][_0x3f6328(0x248)]+_0x3f6328(0x237)+_0x3f6328(0x1d8)+_0x2c6608+_0x3f6328(0x237)+_0x3f6328(0x23c)+arrDepartmntEmail[i]['serverUrl']+'>Click\x20here</a>\x20to\x20open\x20the\x20document.</div>'+_0x3f6328(0x213);}_0x7126b9+='This\x20is\x20an\x20auto\x20generated\x20email.\x20Please\x20don\x27t\x20reply.';}arrDepartmntEmail=[];var _0x593eb0=[];_0x593eb0[_0x3f6328(0x212)]($(_0x3f6328(0x1ee))['html']());var _0x1d9c9c=$(_0x3f6328(0x190))[_0x3f6328(0x1bf)](),_0x51432b=$(_0x3f6328(0x1ee))['html'](),_0x2015ec;_0x2015ec={'properties':{'__metadata':{'type':_0x3f6328(0x230)},'From':_0x51432b,'To':{'results':sharedUsersEmailIDsArrayListItemCollection},'CC':{'results':_0x593eb0},'Body':_0x7126b9,'Subject':sharedEmailSubject}},SendEmailSharedNotification(_0x2015ec);}}else alert('Please\x20select\x20one\x20or\x20more\x20file'),currentDlgShare!=''&&currentDlgShare[_0x3f6328(0x218)]();currentDlgShare!=''&&currentDlgShare['close']();}function GetDeptFileServerRelativeUrl(_0x58ba82,_0x3591d7){var _0x3f5400=a0_0x648357,_0x2b1f9b='',_0x3e1281=currentFileSiteURL+_0x3f5400(0x201)+_0x58ba82+_0x3f5400(0x207);return $['ajax']({'url':_0x3e1281,'headers':{'accept':'application/json;odata=verbose','content-type':'application/json;odata=verbose','X-RequestDigest':$(_0x3f5400(0x215))[_0x3f5400(0x1bf)]()},'async':![],'success':function(_0x1cfaed){var _0x8914c1=_0x3f5400;if(_0x3591d7==_0x8914c1(0x24b)){_0x2b1f9b=_0x1cfaed['d'][_0x8914c1(0x24b)][_0x8914c1(0x18b)],shredLinkFileName=_0x1cfaed['d'][_0x8914c1(0x24b)][_0x8914c1(0x23e)],commonserverRedirectedEmbedUri=_0x1cfaed['d'][_0x8914c1(0x225)];if(_0x1cfaed['d']['SharedId']!=null)for(var _0xaf2ad9=0x0;_0xaf2ad9<_0x1cfaed['d'][_0x8914c1(0x19a)][_0x8914c1(0x203)]['length'];_0xaf2ad9++){var _0x419992=_0x1cfaed['d'][_0x8914c1(0x19a)][_0x8914c1(0x203)][_0xaf2ad9];sharefileuser[_0x8914c1(0x212)](_0x419992);}(commonserverRedirectedEmbedUri==null||commonserverRedirectedEmbedUri=='')&&(commonserverRedirectedEmbedUri='');}else _0x2b1f9b=_0x1cfaed['d']['Folder'][_0x8914c1(0x18b)],shredLinkFolderName=_0x1cfaed['d'][_0x8914c1(0x233)][_0x8914c1(0x23e)],commonserverRedirectedEmbedUri='';},'eror':function(_0x20c051){var _0x2344bd=_0x3f5400;console[_0x2344bd(0x18a)](_0x2344bd(0x241)+JSON[_0x2344bd(0x1d3)](_0x20c051)),currentDlgShare!=''&&currentDlgShare[_0x2344bd(0x218)]();}}),_0x2b1f9b;}function a0_0x3aa2(){var _0x1b2046=['pptx','#Deptmutiplesharefile','SP.Data.',')?$select=ServerRedirectedEmbedUri,File/Name,File/ServerRelativeUrl,Folder/Name,Folder/ServerRelativeUrl,Shared/Title,SharedId&$expand=File,Folder,SharedId','Reference','show','<div><strong>Title:</strong>\x20','dotx',',\x20shared\x20the\x20following\x20document\x20with\x20you.<br/><br/>','application/json;odata=verbose','DepartmentalDMS','click','Folder\x27s\x20permission\x20has\x20been\x20set\x20private.','\x20Successfully\x20removed\x20Permission\x20!','push','<br/><br/>','webAbsoluteUrl','#__REQUESTDIGEST','filter','\x27)/checkout','close','success:File\x20Checked\x20out\x20','json','change','SharePoint.OpenDocuments','done','fail','Select','siteId','.orgDropdowndivDeptFolder','GetMyDocumentsWithFilesFolder','{{Permission}}','Selective','ServerRedirectedEmbedUri','length','/_layouts/CreateNewDocument.aspx?id=','4749FQETzt','charAt','\x27)/ListItemAllFields/roleassignments/getbyprincipalid(','#sharingTypeDeptFolderPermissionLvl','{{doclink}}','.mulinput','#myModalShareHistory','webServerRelativeUrl','SP.Utilities.EmailProperties','--select--','customSharingDeptFolderPplPickr','Folder','#shareWithDeptFolderPermission','html','Title','</div>','Read','SharedDocument','Sharing\x20folder...','<br\x20/>Please\x20wait!!','<div><a\x20href=','MyDepartmentDocumentCurrentFolder','Name','#currentSubFolderMyDepartment','prop','error:\x20','location','{{filename}}','DELETE','#sharedWithPermission\x20:selected','join','?$select=ID,SiteURL&$top=5000&$filter=ID\x20eq\x20\x27','Type','when','\x27)/checkin','File','log','ServerRelativeUrl','ItemId','1488933aWyjBk','slice','Guest\x20users\x20are\x20not\x20available\x20in\x20selected\x20organization(s).','#shareingTypePermissionLevel','ajax','#lblFolderDeptTiltle','\x27)/ListItemAllFields/breakroleinheritance(true)','_api/web/getfilebyserverrelativeurl(\x27','UserName','value','reject','strings.js','#deptSharedFolderUsersLists','SharedId','.MyDocsShare','GET','{{fileype}}','Sharing\x20Dept_Doc\x20Folder\x20','SharedUsers','/DepartmentalDMS/Forms/template.','RoleAssignments','Revoked','Please\x20select\x20sharing\x20type.','split','modal',')/roleassignments/getbyprincipalid(','Please\x20enter\x20sharing\x20users.','application/json;\x20odata=verbose','#lblDocTiltle','trigger','Deferred','1408794dVIsWT','customShareingPoplePicker','null','/_api/web/lists/getbytitle(\x27DocumentSharedGroups\x27)/items?$select=ID,SharingLevel,SharedUsers/Title,SharedUsers/UserName,SharedUsers/ID,LogonUser/ID,LogonUser/UserName&$expand=SharedUsers,LogonUser&$filter=LogonUser/ID\x20eq\x20\x27','#deptDocShare','{{sharedby}}','/_api/web/GetFolderByServerRelativeUrl(\x27','replace','sp.ui.dialog.js','origin','#txtSharedDocumetnOnDemandId','.orgDropdowndiv','Please\x20select\x20one\x20or\x20more\x20file','empty','attr','whatever','SiteURL','text','#lblSelectedFileUrl','val','302slpJgf','#sharefiletilte','44nWZkad','{{details}}','userId','1778070lylOia','/_api/SP.Sharing.DocumentSharingManager.UpdateDocumentSharingInfo','<option></option>','15RHmcBA','Error:\x20','_api/Web/Lists/getByTitle(\x27DepartmentalDMS\x27)/Items(','Kindly\x20select\x20permission\x20type.','Dear\x20User,<br/><br/>','483PrnSMQ','/_api/web/GetFileByServerRelativeUrl(\x27','#myDeptFolderSharing','resolve','SharingLevel','showWaitScreenWithNoClose','stringify','Department','promise','Kindly\x20enter\x20sharing\x20users.','Sharing\x20files...','<div><strong>Permission:</strong>\x20','Error\x20while\x20checking\x20out:\x20','Kindly\x20select\x20any\x20organization.','#sharedWithPermission','xlsx','permission\x20deleted\x20sucessfully.','185169CkBpWQ','Organization','checked','append','#chekedSendEmail','#lblFileName','Department\x20site\x20URL\x20is\x20not\x20found!','#btnDeptShareFolder','hide','loadMultiple','/DocumentManagementSystem/Forms/template.','Kindly\x20select\x20sharing\x20type.','#ddlOrgNameDeptFolder','SOD','_api/web/lists/getByTitle(\x27DepartmentalDMS\x27)/getItemById(','#ddlOrgNameDeptFolder\x20:selected','#lblSelectedCurrentEmail','.multiBox','28848Qucfbs','ddlOrgNameDeptFolder','Private','indexOf','#chkDeptFolderSendEmail',')?$expand=RoleAssignments/Member/Users','parse','/DepartmentalDMS/','ready','#lblDocNumber','Restricted\x20View','file\x20chekin','.folderpeoplepickerdivshowhide','/_api/web/lists/getbytitle(\x27Departments\x27)/items/','POST','220236QPBKab','#myModalDocumentSharing','_api/web/Lists/GetByTitle(\x27DepartmentalDMS\x27)/getItemById(','#sharedWithPermission\x20\x20:selected','results'];a0_0x3aa2=function(){return _0x1b2046;};return a0_0x3aa2();}function updateDeptDocPropertiesOnItemSharing(_0x1e8a0f,_0x41459d,_0x2717a4,_0x3fe175,_0x396dcf,_0x1d445c){var _0x24b5df=a0_0x648357,_0x4342ca=$(_0x24b5df(0x1db))[_0x24b5df(0x1bf)](),_0x3eeb77=$('#txtPermissionLevelId')[_0x24b5df(0x1bf)]();$(_0x24b5df(0x190))[_0x24b5df(0x1bf)]()==_0x24b5df(0x1f2)&&(_0x3eeb77='',_0x4342ca='');(_0x4342ca==_0x24b5df(0x231)||_0x4342ca==null||_0x4342ca=='')&&(_0x3eeb77='',_0x4342ca='');var _0x1099cc=_0x24b5df(0x20e),_0x2f1a80,_0x1a12e1=GetItemTypeDeptList(_0x1099cc);_0x2f1a80={'__metadata':{'type':_0x1a12e1},'SecurityLevel':_0x2717a4,'PermissionLevel':_0x4342ca,'PermissionLevelId':_0x3eeb77,'SharedId':{'results':_0x3fe175}},checkoutDeptDocument(_0x41459d)[_0x24b5df(0x21d)](function(){updateItemWithIDItemListDocuments(_0x1099cc,_0x2f1a80,_0x1e8a0f,_0x396dcf,_0x1d445c)['done'](function(){checkInDeptDocument(_0x41459d)['done'](function(){var _0x2adadd=a0_0x2183,_0x288118=readTargetUrlCookie(_0x2adadd(0x23d)+_spPageContextInfo[_0x2adadd(0x220)]);departmentDoc['GetMyDocumentsWithFilesFolder'](_0x288118);});});})[_0x24b5df(0x21e)](function(_0x413840){var _0x9a1e7b=_0x24b5df;console[_0x9a1e7b(0x18a)]('error:\x20'+JSON['stringify'](_0x413840)),currentDlgShare!=''&&currentDlgShare[_0x9a1e7b(0x218)]();});}function GetItemTypeDeptList(_0x2ee554){var _0x44deb3=a0_0x648357;return _0x44deb3(0x206)+_0x2ee554[_0x44deb3(0x229)](0x0)['toUpperCase']()+_0x2ee554['split']('\x20')[_0x44deb3(0x246)]('')['slice'](0x1)+'Item';}function checkoutDeptDocument(_0x3898ca){var _0x98961=a0_0x648357,_0xff2928=$[_0x98961(0x1ab)]();return $[_0x98961(0x191)]({'url':currentFileSiteURL+_0x98961(0x194)+_0x3898ca+_0x98961(0x217),'method':_0x98961(0x1fe),'headers':{'accept':_0x98961(0x20d),'content-type':_0x98961(0x20d),'X-RequestDigest':$(_0x98961(0x215))[_0x98961(0x1bf)]()},'success':function(_0x1dc3c1){var _0x19f6b1=_0x98961,_0x18da85=_0x1dc3c1;_0xff2928[_0x19f6b1(0x1d0)](_0x1dc3c1['d']),console[_0x19f6b1(0x18a)](_0x19f6b1(0x219));},'error':function(_0x36ebb8){var _0x8924dd=_0x98961;alert(_0x8924dd(0x1d9)+JSON['stringify'](_0x36ebb8)),currentDlgShare!=''&&currentDlgShare[_0x8924dd(0x218)]();}}),_0xff2928;}function checkInDeptDocument(_0x3c709a){var _0x26d1d2=a0_0x648357,_0x46b074=currentFileSiteURL+_0x26d1d2(0x194)+_0x3c709a+_0x26d1d2(0x24a),_0x471aab=$[_0x26d1d2(0x1ab)]();return $[_0x26d1d2(0x191)]({'url':_0x46b074,'method':_0x26d1d2(0x1fe),'data':JSON[_0x26d1d2(0x1d3)]({'checkInType':0x2,'comment':_0x26d1d2(0x1bb)}),'headers':{'accept':_0x26d1d2(0x20d),'content-type':'application/json;odata=verbose','X-RequestDigest':$(_0x26d1d2(0x215))[_0x26d1d2(0x1bf)]()},'success':function(_0x2f5134){var _0x1ce06f=_0x26d1d2,_0x539bc7=_0x2f5134;_0x471aab[_0x1ce06f(0x1d0)](_0x2f5134['d']),console['log'](_0x1ce06f(0x1fb));},'error':function(_0x27dc4d){var _0x501cb9=_0x26d1d2;_0x471aab[_0x501cb9(0x197)](_0x27dc4d),currentDlgShare!=''&&currentDlgShare['close']();}}),_0x471aab;}var SelectedFolderPathURL='';function DeptShareFolderProperties(_0x1e2719,_0x3262ae,_0x559196){var _0x37d7dc=a0_0x648357;SelectedFolderPathURL=window[_0x37d7dc(0x242)][_0x37d7dc(0x1b5)]+_0x559196[_0x37d7dc(0x1a4)]('DepartmentalDMS')[0x0],BindDeptSharingGroups(),commonUsedFolderSharingId=_0x1e2719,$('#chkDeptFolderSendEmail')['attr'](_0x37d7dc(0x1e0),![]),sharedUsersIdArrayListItemCollection=[],sharedUsersEmailIDsArrayListItemCollection=[],clearPeoplePickerControl(_0x37d7dc(0x232)),$(_0x37d7dc(0x22b))[_0x37d7dc(0x1bf)]('0'),$(_0x37d7dc(0x190))[_0x37d7dc(0x1aa)](_0x37d7dc(0x21b)),$('#myDeptFolderSharing')[_0x37d7dc(0x1a5)](_0x37d7dc(0x209)),$(_0x37d7dc(0x192))[_0x37d7dc(0x235)](_0x3262ae);}function BindDeptSharingGroups(){var _0x4d648e=a0_0x648357;$('.context-menu')[_0x4d648e(0x1e6)]();var _0xafe2b5=_spPageContextInfo[_0x4d648e(0x22f)]+_0x4d648e(0x1af)+_spPageContextInfo[_0x4d648e(0x1c4)]+'\x27';$[_0x4d648e(0x191)]({'url':_0xafe2b5,'headers':{'Accept':_0x4d648e(0x20d)},'async':![],'success':function(_0xd51781){var _0x145d44=_0x4d648e;$('#sharingTypeDeptFolderPermissionLvl')[_0x145d44(0x1b9)]()['append']('<option\x20value=\x220\x22>-Select\x20Sharing-</option>'),$(_0x145d44(0x22b))['append']($(_0x145d44(0x1c7))['attr'](_0x145d44(0x196),_0x145d44(0x1f2))[_0x145d44(0x1bd)](_0x145d44(0x1f2))),$(_0x145d44(0x22b))[_0x145d44(0x1e1)]($('<option></option>')[_0x145d44(0x1ba)](_0x145d44(0x196),_0x145d44(0x224))[_0x145d44(0x1bd)](_0x145d44(0x224))),$(_0x145d44(0x22b))[_0x145d44(0x1e1)]($(_0x145d44(0x1c7))['attr']('value','Organization')['text'](_0x145d44(0x1df)));for(var _0x318aac=0x0;_0x318aac<_0xd51781['d'][_0x145d44(0x203)]['length'];_0x318aac++){$(_0x145d44(0x22b))[_0x145d44(0x1e1)]($('<option></option>')[_0x145d44(0x1ba)](_0x145d44(0x196),_0xd51781['d'][_0x145d44(0x203)][_0x318aac][_0x145d44(0x1d1)])[_0x145d44(0x1bd)](_0xd51781['d'][_0x145d44(0x203)][_0x318aac][_0x145d44(0x1d1)]));}},'eror':function(_0x382eba){var _0xa97fab=_0x4d648e;console[_0xa97fab(0x18a)](_0xa97fab(0x241)+JSON[_0xa97fab(0x1d3)](_0x382eba)),currentDlgShare!=''&&currentDlgShare[_0xa97fab(0x218)]();}});}function GetDeptSharingGpUsers(_0x5a599f,_0x2b48b2){var _0x33a146=a0_0x648357;sharedUsersIdArrayListItemCollection=[],sharedUsersEmailIDsArrayListItemCollection=[];var _0x26f1fd=_spPageContextInfo[_0x33a146(0x22f)]+'/_api/web/lists/getbytitle(\x27DocumentSharedGroups\x27)/items?$select=ID,SharingLevel,SharedUsers/Title,SharedUsers/UserName,SharedUsers/ID,LogonUser/ID,LogonUser/UserName&$expand=SharedUsers,LogonUser&$filter=SharingLevel\x20eq\x20\x27'+_0x5a599f+'\x27\x20and\x20LogonUser/ID\x20eq\x20\x27'+_spPageContextInfo[_0x33a146(0x1c4)]+'\x27';$[_0x33a146(0x191)]({'url':_0x26f1fd,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x51a7d6){var _0x536c59=_0x33a146,_0xc9fb7e='';for(var _0x1eed34=0x0;_0x1eed34<_0x51a7d6['d']['results']['length'];_0x1eed34++){for(var _0x34190a=0x0;_0x34190a<_0x51a7d6['d'][_0x536c59(0x203)][_0x1eed34][_0x536c59(0x19f)]['results'][_0x536c59(0x226)];_0x34190a++){sharedUsersIdArrayListItemCollection['indexOf'](_0x51a7d6['d']['results'][_0x1eed34][_0x536c59(0x19f)][_0x536c59(0x203)][_0x34190a]['ID'])==-0x1&&(sharedUsersIdArrayListItemCollection[_0x536c59(0x212)](_0x51a7d6['d']['results'][_0x1eed34]['SharedUsers'][_0x536c59(0x203)][_0x34190a]['ID']),SetAndResolvePeoplePicker(_0x536c59(0x232),_0x51a7d6['d']['results'][_0x1eed34][_0x536c59(0x19f)]['results'][_0x34190a][_0x536c59(0x195)],![]));}}},'eror':function(_0x3c655e){var _0x5376c9=_0x33a146;console[_0x5376c9(0x18a)](_0x5376c9(0x1c9)+JSON[_0x5376c9(0x1d3)](_0x3c655e)),currentDlgShare!=''&&currentDlgShare['close']();}});}function deptDocFolderSharing(){var _0x3464bb=a0_0x648357,_0x586d40=$(_0x3464bb(0x22b))[_0x3464bb(0x1bf)](),_0x1aeefc=$('#shareWithDeptFolderPermission')[_0x3464bb(0x1bf)]();if(_0x586d40=='0'||_0x586d40==null||_0x586d40=='')return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert(_0x3464bb(0x1a3)),![];else{if(_0x1aeefc==null||_0x1aeefc==''||_0x1aeefc=='--select--')return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert(_0x3464bb(0x1cb)),![];else{if(_0x586d40==_0x3464bb(0x1df)){sharedHistoryUser=sharedUsersIdArrayListItemCollection;if($('#ddlOrgNameDeptFolder')[_0x3464bb(0x1bf)]()=='0')return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert(_0x3464bb(0x1da)),![];if(sharedUsersIdArrayListItemCollection['length']==0x0)return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert('Guest\x20users\x20are\x20not\x20available\x20in\x20selected\x20organization(s).'),![];}}}if(_0x586d40==_0x3464bb(0x1f2))$('#chkDeptFolderSendEmail')[_0x3464bb(0x1ba)](_0x3464bb(0x1e0),![]);else{if(_0x586d40!='Organization'){sharedUsersIdArrayListItemCollection=[],sharedUsersEmailIDsArrayListItemCollection=[];if(getUserInfoFromPeoplePicker('customSharingDeptFolderPplPickr')){if(sharedUsersIdArrayListItemCollection!=null){if(sharedUsersIdArrayListItemCollection[_0x3464bb(0x226)]==0x0)return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert('Please\x20enter\x20sharing\x20users.'),![];}else return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert(_0x3464bb(0x1a7)),![];}else return currentDlgShare!=''&&currentDlgShare[_0x3464bb(0x218)](),alert('Please\x20enter\x20sharing\x20users.'),![];}}var _0x137a1b=GetDeptFileServerUrlById(commonUsedFolderSharingId,_0x3464bb(0x233));_0x586d40=='Private'?(updateFolderProperties(commonUsedFolderSharingId,mydeptSiteUrl,![],_0x3464bb(0x20e),_0x3464bb(0x1f2)),$[_0x3464bb(0x249)](GetAllDeptFolderUsrsSharedPrincipleId(commonUsedFolderSharingId))[_0x3464bb(0x21d)](function(_0x23e1b8){var _0x474365=_0x3464bb;DeleteSharedLink(commonUsedFolderSharingId);var _0x48fdf0=readTargetUrlCookie(_0x474365(0x23d)+_spPageContextInfo[_0x474365(0x220)]);departmentDoc[_0x474365(0x222)](_0x48fdf0),alert(_0x474365(0x210)),$('#myDeptFolderSharing')[_0x474365(0x1a5)](_0x474365(0x1e6)),currentDlgShare!=''&&currentDlgShare[_0x474365(0x218)]();})):(updateFolderProperties(commonUsedFolderSharingId,mydeptSiteUrl,![],_0x3464bb(0x20e),_0x586d40),ShareDeptFilesFolder(_0x137a1b,_0x3464bb(0x233),_0x586d40));}function GetDeptFileServerUrlById(_0x337bb3,_0x1f8aed){var _0x523159=a0_0x648357,_0x2f9206='',_0x5ae584=SelectedFolderPathURL+_0x523159(0x201)+_0x337bb3+')?$select=ServerRedirectedEmbedUri,File/Name,File/ServerRelativeUrl,Folder/Name,Folder/ServerRelativeUrl,Shared/Title,SharedId&$expand=File,Folder,SharedId';return $[_0x523159(0x191)]({'url':_0x5ae584,'headers':{'accept':_0x523159(0x20d),'content-type':_0x523159(0x20d),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x523159(0x1bf)]()},'async':![],'success':function(_0x33ed13){var _0x245a3b=_0x523159;if(_0x1f8aed==_0x245a3b(0x24b)){_0x2f9206=_0x33ed13['d'][_0x245a3b(0x24b)][_0x245a3b(0x18b)],shredLinkFileName=_0x33ed13['d']['File'][_0x245a3b(0x23e)],commonserverRedirectedEmbedUri=_0x33ed13['d'][_0x245a3b(0x225)];if(_0x33ed13['d'][_0x245a3b(0x19a)]!=null)for(var _0x970bb=0x0;_0x970bb<_0x33ed13['d']['SharedId'][_0x245a3b(0x203)][_0x245a3b(0x226)];_0x970bb++){var _0x2a4a52=_0x33ed13['d'][_0x245a3b(0x19a)][_0x245a3b(0x203)][_0x970bb];sharefileuser[_0x245a3b(0x212)](_0x2a4a52);}(commonserverRedirectedEmbedUri==null||commonserverRedirectedEmbedUri=='')&&(commonserverRedirectedEmbedUri='');}else _0x2f9206=_0x33ed13['d'][_0x245a3b(0x233)][_0x245a3b(0x18b)],shredLinkFolderName=_0x33ed13['d'][_0x245a3b(0x233)][_0x245a3b(0x23e)],commonserverRedirectedEmbedUri='';},'eror':function(_0x24a2ed){var _0x2544b4=_0x523159;console['log'](_0x2544b4(0x1c9)+JSON[_0x2544b4(0x1d3)](_0x24a2ed));}}),_0x2f9206;}function GetAllDeptFolderUsrsSharedPrincipleId(_0x4a340f){var _0x4961a0=a0_0x648357,_0x1b52c2=$[_0x4961a0(0x1ab)](),_0x234263=new Date(),_0x2734dc=Date[_0x4961a0(0x1f6)](_0x234263);return $[_0x4961a0(0x191)]({'url':SelectedFolderPathURL+_0x4961a0(0x1ca)+_0x4a340f+_0x4961a0(0x1f5)+_0x2734dc,'method':_0x4961a0(0x19c),'async':![],'headers':{'Accept':_0x4961a0(0x1a8)},'success':function(_0x21412d){var _0x118df9=_0x4961a0;_0x1b52c2['resolve'](_0x21412d['d'][_0x118df9(0x203)]);for(var _0x372875=0x0;_0x372875<_0x21412d['d']['RoleAssignments']['results'][_0x118df9(0x226)];_0x372875++){if(_0x21412d['d'][_0x118df9(0x1a1)][_0x118df9(0x203)][_0x372875]['PrincipalId']!=_spPageContextInfo[_0x118df9(0x1c4)]){var _0x4c9dc0=_0x21412d['d']['RoleAssignments'][_0x118df9(0x203)][_0x372875]['PrincipalId'];DeleteDeptFolderPrinciple(_0x4a340f,_0x4c9dc0);}}},'error':function(_0x57986b){var _0x51f931=_0x4961a0;_0x1b52c2['reject'](_0x57986b),waitingDialog[_0x51f931(0x1e6)]();}}),_0x1b52c2[_0x4961a0(0x1d5)]();}function a0_0x2183(_0x387a0c,_0x1cbb56){var _0x3aa2a3=a0_0x3aa2();return a0_0x2183=function(_0x21834e,_0xfb2682){_0x21834e=_0x21834e-0x18a;var _0x5ed31f=_0x3aa2a3[_0x21834e];return _0x5ed31f;},a0_0x2183(_0x387a0c,_0x1cbb56);}function DeleteDeptFolderPrinciple(_0x3d16a7,_0x5e66f1){var _0x5a61fc=a0_0x648357,_0x4e741f=$['Deferred'](),_0x4bcd76={'X-RequestDigest':$('#__REQUESTDIGEST')[_0x5a61fc(0x1bf)](),'X-HTTP-Method':_0x5a61fc(0x244)},_0x74c7c5=SelectedFolderPathURL+_0x5a61fc(0x1ec)+_0x3d16a7+_0x5a61fc(0x1a6)+_0x5e66f1+')';return $[_0x5a61fc(0x191)]({'url':_0x74c7c5,'type':_0x5a61fc(0x1fe),'headers':_0x4bcd76,'async':![],'dataType':_0x5a61fc(0x21a),'success':function(_0x35498d){var _0x51cc67=_0x5a61fc;_0x4e741f['resolve'](_0x35498d['d'][_0x51cc67(0x203)]),console['log'](_0x5e66f1+_0x51cc67(0x211));},'error':function(_0x380e86){var _0x2f4ec0=_0x5a61fc;_0x4e741f[_0x2f4ec0(0x197)](_0x380e86),console[_0x2f4ec0(0x18a)](JSON[_0x2f4ec0(0x1d3)](_0x380e86));}}),_0x4e741f[_0x5a61fc(0x1d5)]();}function ShareDeptFilesFolder(_0x36a6cd,_0x56d7b1,_0x1f2132){var _0x32fa31=a0_0x648357,_0x40f969=[],_0x14fe9c=0x1;if($(_0x32fa31(0x234))[_0x32fa31(0x1bf)]()==_0x32fa31(0x238))_0x14fe9c=0x1;else $(_0x32fa31(0x234))['val']()==_0x32fa31(0x1fa)?_0x14fe9c=0x7:_0x14fe9c=0x2;var _0x4ea8d8=createJSONMetadata(sharedUsersEmailIDsArrayListItemCollection,_0x14fe9c),_0x3fb92c=_spPageContextInfo[_0x32fa31(0x214)]+_0x32fa31(0x1c6);$['ajax']({'url':_0x3fb92c,'method':_0x32fa31(0x1fe),'async':![],'data':JSON[_0x32fa31(0x1d3)]({'resourceAddress':document['location']['origin']+_0x36a6cd,'userRoleAssignments':_0x4ea8d8,'validateExistingPermissions':![],'additiveMode':![],'sendServerManagedNotification':![],'customMessage':'Please\x20look\x20at\x20the\x20following\x20File/Folder.','includeAnonymousLinksInNotification':![]}),'headers':{'accept':_0x32fa31(0x20d),'content-type':_0x32fa31(0x20d),'X-RequestDigest':$('#__REQUESTDIGEST')['val']()},'success':function(_0x541943){var _0x121a5f=_0x32fa31,_0x562494=$('#sharingTypeDeptFolderPermissionLvl')['val'](),_0x2c8c87='';if(_0x56d7b1==_0x121a5f(0x233)){GetDocumentsRevoke(sharedUsersIdArrayListItemCollection,commonUsedFolderSharingId);_0x1f2132==_0x121a5f(0x1df)&&_0x56d7b1==_0x121a5f(0x233)?AddSharedLinkToListOrg(shredLinkFolderName,_0x36a6cd,arrUserClientWise,commonUsedFolderSharingId,'Folder',_0x562494,$(_0x121a5f(0x234))['val'](),_0x121a5f(0x1d4)):AddSharedLinkToList22(shredLinkFolderName,_0x36a6cd,sharedUsersIdArrayListItemCollection,commonUsedFolderSharingId,_0x121a5f(0x233),_0x562494,$(_0x121a5f(0x234))['val'](),_0x121a5f(0x1d4));$(_0x121a5f(0x1f4))[_0x121a5f(0x240)](_0x121a5f(0x1e0))==!![]&&EmailDeptSharedProperties(sharedUsersEmailIDsArrayListItemCollection,_0x56d7b1);var _0x4b5913=readTargetUrlCookie('MyDepartmentDocumentCurrentFolder'+_spPageContextInfo[_0x121a5f(0x220)]);departmentDoc[_0x121a5f(0x222)](_0x4b5913);}$(_0x121a5f(0x1cf))['modal']('hide'),currentDlgShare!=''&&currentDlgShare[_0x121a5f(0x218)](),$(_0x121a5f(0x22d))[_0x121a5f(0x240)](_0x121a5f(0x1e0),![]),$('.multiBox')[_0x121a5f(0x1bd)](_0x121a5f(0x21f)),$(_0x121a5f(0x221))[_0x121a5f(0x1e6)]();},'error':function(_0x5a7735){var _0x4caad5=_0x32fa31;alert(_0x4caad5(0x19e)+JSON[_0x4caad5(0x1d3)](_0x5a7735)),currentDlgShare!=''&&currentDlgShare[_0x4caad5(0x218)]();}});}function EmailDeptSharedProperties(_0x2dc11d,_0x20db31){var _0x9da57d=a0_0x648357,_0x8b3072=[];_0x8b3072[_0x9da57d(0x212)]($(_0x9da57d(0x1ee))[_0x9da57d(0x235)]());var _0x180cc5=$(_0x9da57d(0x22b))[_0x9da57d(0x1bf)](),_0x4cfd7a='',_0x42726e=emailBodyContent;if(_0x20db31==_0x9da57d(0x233)){var _0x5ccb8c=$('#shareWithDeptFolderPermission\x20:selected')[_0x9da57d(0x1bd)]();_0x5ccb8c==_0x9da57d(0x231)&&(_0x5ccb8c=''),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x243),$(_0x9da57d(0x192))[_0x9da57d(0x1bd)]()),_0x42726e=_0x42726e['replace']('{{fileype}}',_0x9da57d(0x233)),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x1c3),''),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x22c),_spPageContextInfo['siteAbsoluteUrl']+'/Pages/MyDocuments.aspx?WebAppId=1'),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x223),_0x5ccb8c);}else{globalSharingDocumentDocumentType==null&&(globalSharingDocumentDocumentType='');globalsharingDocumentDetails==null&&(globalsharingDocumentDetails='');var _0x5ccb8c=$(_0x9da57d(0x202))[_0x9da57d(0x1bd)]();_0x5ccb8c=='--select--'&&(_0x5ccb8c=''),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x243),$(_0x9da57d(0x1e3))[_0x9da57d(0x235)]()),_0x42726e=_0x42726e['replace'](_0x9da57d(0x19d),globalSharingDocumentDocumentType),_0x42726e=_0x42726e['replace'](_0x9da57d(0x1c3),globalsharingDocumentDetails),_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x22c),encodeURI(document[_0x9da57d(0x242)][_0x9da57d(0x1b5)]+'/'+$(_0x9da57d(0x1be))['text']())),_0x42726e=_0x42726e['replace'](_0x9da57d(0x223),_0x5ccb8c);}_0x42726e=_0x42726e[_0x9da57d(0x1b3)](_0x9da57d(0x1b1),_spPageContextInfo['userDisplayName']),_0x4cfd7a=_0x42726e;var _0x4b1161=$(_0x9da57d(0x1ee))[_0x9da57d(0x235)](),_0x4f33fd;_0x4f33fd={'properties':{'__metadata':{'type':_0x9da57d(0x230)},'From':_0x4b1161,'To':{'results':_0x2dc11d},'CC':{'results':_0x8b3072},'Body':_0x4cfd7a,'Subject':sharedEmailSubject}},SendEmailSharedNotification(_0x4f33fd);}function RevokeDepartmntPermission(_0x5c077e,_0x198919,_0x2e02b2,_0x157629){var _0x516ee8=a0_0x648357,_0x4b48e7={'Accept':'application/json;odata=verbose','content-Type':_0x516ee8(0x20d),'X-RequestDigest':jQuery(_0x516ee8(0x215))[_0x516ee8(0x1bf)]()},_0x3472d6=mydeptSiteUrl+'/_api/web/GetFileByServerRelativeUrl(\x27'+_0x198919+'\x27)/ListItemAllFields/breakroleinheritance(true)';if(_0x157629!='')$[_0x516ee8(0x191)]({'url':_0x3472d6,'type':'POST','headers':_0x4b48e7,'dataType':'json','success':function(_0x265676){var _0x1fffba=_0x516ee8;DeleatePermissionDeptDocs(_0x2e02b2,_0x198919,_0x5c077e,_0x157629,_0x1fffba(0x224),0x0,0x0);},'error':function(_0x51e236){var _0x147e18=_0x516ee8;console[_0x147e18(0x18a)](JSON[_0x147e18(0x1d3)](_0x51e236));}});else{_0x2e02b2=decodeURI(_0x2e02b2);var _0x8acf6e=arrSharedOrgUsers[_0x516ee8(0x216)](function(_0x49e330){var _0x5188dc=_0x516ee8;return _0x2e02b2==_0x49e330[_0x5188dc(0x1df)];});$[_0x516ee8(0x191)]({'url':_0x3472d6,'type':_0x516ee8(0x1fe),'headers':_0x4b48e7,'dataType':_0x516ee8(0x21a),'success':function(_0x5c7b5b){var _0x4c79f0=_0x516ee8;for(k=0x0;k<_0x8acf6e[_0x4c79f0(0x226)];k++){DeleatePermissionDeptDocs(_0x8acf6e[k][_0x4c79f0(0x1c4)],_0x198919,_0x5c077e,_0x8acf6e[k][_0x4c79f0(0x18c)],'Organization',k,_0x8acf6e[_0x4c79f0(0x226)]);}},'error':function(_0x10f3d7){var _0x252ad6=_0x516ee8;console[_0x252ad6(0x18a)](JSON[_0x252ad6(0x1d3)](_0x10f3d7));}});}}function DeleatePermissionDeptDocs(_0x2e7d92,_0x4d4738,_0xdd2e82,_0x53e73a,_0xd71743,_0x4c6948,_0x250135){var _0xfe1830=a0_0x648357,_0x156c5c={'X-RequestDigest':$('#__REQUESTDIGEST')[_0xfe1830(0x1bf)](),'X-HTTP-Method':_0xfe1830(0x244)},_0x493b98=mydeptSiteUrl+_0xfe1830(0x1ce)+_0x4d4738+_0xfe1830(0x22a)+_0x2e7d92+')';$['ajax']({'url':_0x493b98,'type':'POST','headers':_0x156c5c,'async':![],'success':function(_0x46f499){var _0x40415d=_0xfe1830,_0x36e8a0='SharedDocument',_0x1f248e,_0x5fbcb5=GetItemTypeForListNameDetailsGroups(_0x36e8a0);_0x1f248e={'__metadata':{'type':_0x5fbcb5},'PermissionStatus':_0x40415d(0x1a2)},$['when'](updateItemWithIDItemListDocuments(_0x36e8a0,_0x1f248e,_0x53e73a,myCompanyUrl))[_0x40415d(0x21d)](function(_0x2335a7){var _0x36be9e=_0x40415d;_0xd71743=='Organization'?_0x4c6948+0x1==_0x250135&&alert('permission\x20deleted\x20sucessfully.'):alert(_0x36be9e(0x1dd)),$(_0x36be9e(0x22e))[_0x36be9e(0x1a5)](_0x36be9e(0x1e6));}),console['log'](_0x2e7d92+'\x20Successfully\x20removed\x20Permission\x20!');},'error':function(_0x503aef){var _0x466be4=_0xfe1830;console[_0x466be4(0x18a)](JSON[_0x466be4(0x1d3)](_0x503aef));}});}function BreakInheritePermissionFolderSharing(_0x1c3abd,_0x5989fc,_0x3f0727,_0x1c4ec0){var _0x49d1f6=a0_0x648357,_0x1bff53={'Accept':_0x49d1f6(0x20d),'content-Type':'application/json;odata=verbose','X-RequestDigest':jQuery(_0x49d1f6(0x215))[_0x49d1f6(0x1bf)]()},_0x96ecfe=myCompanyUrl+_0x49d1f6(0x1b2)+_0x5989fc+_0x49d1f6(0x193);if(_0x1c4ec0!='')$[_0x49d1f6(0x191)]({'url':_0x96ecfe,'type':_0x49d1f6(0x1fe),'headers':_0x1bff53,'dataType':_0x49d1f6(0x21a),'success':function(_0x285d90){DeleateUserPermissionFolder(_0x3f0727,_0x5989fc,_0x1c3abd,_0x1c4ec0,'Selective',0x0,0x0);},'error':function(_0x550610){var _0x55abf2=_0x49d1f6;console[_0x55abf2(0x18a)](JSON[_0x55abf2(0x1d3)](_0x550610));}});else{_0x3f0727=decodeURI(_0x3f0727);var _0x12387d=arrSharedOrgUsers[_0x49d1f6(0x216)](function(_0x1e0ded){var _0x9d4e04=_0x49d1f6;return _0x3f0727==_0x1e0ded[_0x9d4e04(0x1df)];});$[_0x49d1f6(0x191)]({'url':_0x96ecfe,'type':_0x49d1f6(0x1fe),'headers':_0x1bff53,'dataType':_0x49d1f6(0x21a),'success':function(_0x29bab7){var _0x32d471=_0x49d1f6;for(k=0x0;k<_0x12387d[_0x32d471(0x226)];k++){DeleateUserPermissionFolder(_0x12387d[k][_0x32d471(0x1c4)],_0x5989fc,_0x1c3abd,_0x12387d[k][_0x32d471(0x18c)],_0x32d471(0x1df),k,_0x12387d[_0x32d471(0x226)]);}},'error':function(_0x1cd458){var _0x1f2f88=_0x49d1f6;console[_0x1f2f88(0x18a)](JSON[_0x1f2f88(0x1d3)](_0x1cd458));}});}}function BreakPermissionDeptDocFolder(_0xa74a90,_0x60b282,_0x120ecc,_0x360719){var _0x585919=a0_0x648357,_0x2ab026={'Accept':_0x585919(0x20d),'content-Type':_0x585919(0x20d),'X-RequestDigest':jQuery(_0x585919(0x215))[_0x585919(0x1bf)]()},_0x3491cd=mydeptSiteUrl+_0x585919(0x1b2)+_0x60b282+_0x585919(0x193);if(_0x360719!='')$[_0x585919(0x191)]({'url':_0x3491cd,'type':_0x585919(0x1fe),'headers':_0x2ab026,'dataType':'json','success':function(_0x46dace){DeleteDeptPermissionFolder(_0x120ecc,_0x60b282,_0xa74a90,_0x360719,'Selective',0x0,0x0);},'error':function(_0x1f7c4d){var _0x4572b5=_0x585919;console['log'](JSON[_0x4572b5(0x1d3)](_0x1f7c4d));}});else{_0x120ecc=decodeURI(_0x120ecc);var _0x1f1a0b=arrSharedOrgUsers[_0x585919(0x216)](function(_0x1ceef4){return _0x120ecc==_0x1ceef4['Organization'];});$[_0x585919(0x191)]({'url':_0x3491cd,'type':_0x585919(0x1fe),'headers':_0x2ab026,'dataType':_0x585919(0x21a),'success':function(_0x60b74d){var _0x3ca7cb=_0x585919;for(k=0x0;k<_0x1f1a0b[_0x3ca7cb(0x226)];k++){DeleteDeptPermissionFolder(_0x1f1a0b[k][_0x3ca7cb(0x1c4)],_0x60b282,_0xa74a90,_0x1f1a0b[k]['ItemId'],_0x3ca7cb(0x1df),k,_0x1f1a0b[_0x3ca7cb(0x226)]);}},'error':function(_0x44067a){var _0x247d03=_0x585919;console[_0x247d03(0x18a)](JSON[_0x247d03(0x1d3)](_0x44067a));}});}}function DeleteDeptPermissionFolder(_0x4dca40,_0x42c14,_0x2ca8fd,_0x5ac573,_0x55c62d,_0x9ef1f8,_0x303f89){var _0x16c72f=a0_0x648357,_0xc20af1={'X-RequestDigest':$(_0x16c72f(0x215))['val'](),'X-HTTP-Method':_0x16c72f(0x244)},_0x190158=mydeptSiteUrl+_0x16c72f(0x1b2)+_0x42c14+_0x16c72f(0x22a)+_0x4dca40+')';$[_0x16c72f(0x191)]({'url':_0x190158,'type':'POST','headers':_0xc20af1,'async':![],'success':function(_0x883dfc){var _0x557071=_0x16c72f,_0x27c18a=_0x557071(0x239),_0x46d232,_0x4affe9=GetItemTypeForListNameDetailsGroups(_0x27c18a);_0x46d232={'__metadata':{'type':_0x4affe9},'PermissionStatus':'Revoked'},$[_0x557071(0x249)](updateItemWithIDItemListDocuments(_0x27c18a,_0x46d232,_0x5ac573,myCompanyUrl))[_0x557071(0x21d)](function(_0x4e312d){var _0x1d832a=_0x557071;_0x55c62d=='Organization'?_0x9ef1f8+0x1==_0x303f89&&alert(_0x1d832a(0x1dd)):alert(_0x1d832a(0x1dd)),$('#myModalShareHistory')[_0x1d832a(0x1a5)]('hide');}),console[_0x557071(0x18a)](_0x4dca40+_0x557071(0x211));},'error':function(_0x9b61d7){var _0x5c00f9=_0x16c72f;console[_0x5c00f9(0x18a)](JSON['stringify'](_0x9b61d7));}});}