var a0_0x5aff7b=a0_0x3e41;(function(_0x3b6a36,_0x5cfa1c){var _0xe9bda0=a0_0x3e41,_0x20ebe1=_0x3b6a36();while(!![]){try{var _0x19215b=parseInt(_0xe9bda0(0xe0))/0x1+-parseInt(_0xe9bda0(0xef))/0x2+parseInt(_0xe9bda0(0x122))/0x3+parseInt(_0xe9bda0(0x8c))/0x4*(parseInt(_0xe9bda0(0x10c))/0x5)+-parseInt(_0xe9bda0(0x7a))/0x6*(-parseInt(_0xe9bda0(0x10d))/0x7)+-parseInt(_0xe9bda0(0xdb))/0x8+-parseInt(_0xe9bda0(0x6d))/0x9*(parseInt(_0xe9bda0(0xa8))/0xa);if(_0x19215b===_0x5cfa1c)break;else _0x20ebe1['push'](_0x20ebe1['shift']());}catch(_0x1bbd76){_0x20ebe1['push'](_0x20ebe1['shift']());}}}(a0_0x3c0f,0xd266b),$(document)['ready'](function(){var _0x158108=a0_0x3e41;BindDepartment(),SetupDropdownList(),ChangeLabels();var _0x14cf68=_spPageContextInfo[_0x158108(0xd9)]+_0x158108(0xba)+titanForWork[_0x158108(0x9e)]('CompanyId')+_0x158108(0x10e);$(_0x158108(0x7d))['attr'](_0x158108(0xa7),_0x14cf68);var _0x4f9344=_spPageContextInfo[_0x158108(0xd9)]+_0x158108(0xba)+titanForWork['getQueryStringParameter'](_0x158108(0x76))+_0x158108(0x67);$('#Initiative')['attr'](_0x158108(0xa7),_0x4f9344);var _0x1c1be2=_spPageContextInfo[_0x158108(0xd9)]+_0x158108(0xba)+titanForWork['getQueryStringParameter']('CompanyId')+_0x158108(0x119);$('#Acivities')[_0x158108(0x86)](_0x158108(0xa7),_0x1c1be2),$(_0x158108(0xc4))['click'](function(){var _0x41043a=_0x158108;window[_0x41043a(0xcf)]['replace']($[_0x41043a(0x11f)](_0x41043a(0x8e)));});}));function a0_0x3e41(_0x32b061,_0x252c9b){var _0x3c0fd2=a0_0x3c0f();return a0_0x3e41=function(_0x3e41d3,_0x2bb2c3){_0x3e41d3=_0x3e41d3-0x67;var _0x597ccc=_0x3c0fd2[_0x3e41d3];return _0x597ccc;},a0_0x3e41(_0x32b061,_0x252c9b);}function Activity(){var _0x688b2f=a0_0x3e41;$[_0x688b2f(0x11f)](_0x688b2f(0xd2))==_0x688b2f(0x79)?($(_0x688b2f(0x108))[_0x688b2f(0xc7)](),UpdateActivity($[_0x688b2f(0x11f)](_0x688b2f(0xa0)))):AddActivity();}$[a0_0x5aff7b(0x11f)]=function(_0x14a634){var _0x9339b4=a0_0x5aff7b,_0x287a41=new RegExp(_0x9339b4(0x9c)+_0x14a634+_0x9339b4(0xdf))[_0x9339b4(0xb1)](window[_0x9339b4(0xcf)][_0x9339b4(0xa7)]);if(_0x287a41==null)return null;return decodeURI(_0x287a41[0x1])||0x0;};function SetupDropdownList(){var _0x230da8=a0_0x5aff7b,_0x2ebb2b=$[_0x230da8(0x11f)]('Type');$(_0x230da8(0x6a))['empty']();var _0x2ab503=_0x230da8(0xf4)+_0x2ebb2b+_0x230da8(0xfe);$(_0x230da8(0xab))[_0x230da8(0x68)](_0x2ab503);if($[_0x230da8(0x11f)](_0x230da8(0xd2))==_0x230da8(0x88)){if(_0x2ebb2b=='Activities')$(_0x230da8(0xb5))['show'](),BindCategory(),$(_0x230da8(0xe6))[_0x230da8(0x10b)]('disabled',!![]),$(_0x230da8(0xe6))[_0x230da8(0x123)](Logged_DepartmentId),ValidateLoginUserEntryscreenAcivities(_0x2ebb2b);else{if(_0x2ebb2b==_0x230da8(0xd3))$('#DDL_Category')['prop'](_0x230da8(0xf5),!![]),$('#DDL_Category')[_0x230da8(0x68)]($(_0x230da8(0xce))['val'](_0x230da8(0xd3))[_0x230da8(0x8b)](_0x230da8(0xd3))),$(_0x230da8(0xe6))['val'](Logged_DepartmentId),ValidateLoginUserEntryscreenAcivities(_0x2ebb2b);else _0x2ebb2b=='Initiative'&&($(_0x230da8(0x6a))[_0x230da8(0x10b)]('disabled',!![]),$(_0x230da8(0x6a))[_0x230da8(0x68)]($(_0x230da8(0xce))['val'](_0x230da8(0xb4))[_0x230da8(0x8b)](_0x230da8(0xb4))),$(_0x230da8(0xe6))['prop'](_0x230da8(0xf5),!![]),$('#DDL_Department')[_0x230da8(0x123)](Logged_DepartmentId),ValidateLoginUserEntryscreenAcivities(_0x2ebb2b));}}else ValidateLoginUserEntryscreenAcivities(_0x2ebb2b),$[_0x230da8(0x11f)](_0x230da8(0xa0))!=null&&GetActivity($[_0x230da8(0x11f)]('ItemId'));}function BindCategory(){var _0x340677=a0_0x5aff7b,_0x1ebe6c=_spPageContextInfo[_0x340677(0xa4)]+_0x340677(0xeb);$['ajax']({'url':_0x1ebe6c,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x4b885){var _0x1ee3cc=_0x340677;$(_0x1ee3cc(0x6a))[_0x1ee3cc(0xb6)]();var _0x553fd2=_0x4b885['d']['results'];if(_0x553fd2[_0x1ee3cc(0xf7)]>0x0){$(_0x1ee3cc(0x6a))[_0x1ee3cc(0x68)]($(_0x1ee3cc(0xce))[_0x1ee3cc(0x123)](_0x1ee3cc(0xa6))[_0x1ee3cc(0x8b)](_0x1ee3cc(0x8a)));for(i=0x0;i<_0x553fd2[_0x1ee3cc(0xf7)];i++){$(_0x1ee3cc(0x6a))['append']($(_0x1ee3cc(0xce))[_0x1ee3cc(0x123)](_0x553fd2[i][_0x1ee3cc(0x96)])[_0x1ee3cc(0x8b)](_0x553fd2[i][_0x1ee3cc(0x96)]));}}},'eror':function(_0x3369d9){var _0x54ca4d=_0x340677;console[_0x54ca4d(0xb7)](_0x3369d9);}});}function a0_0x3c0f(){var _0xc4da55=['?MODAL','Mode','Suggestion','promise','HTMLElement','Response\x20from\x20titanForWork.CreateWorkflowTaskForApproval\x20:\x20','#Suggestions','replace','webServerRelativeUrl','View','11843616xGxkHj','done','New\x20Initiative','An\x20error\x20occurred.\x20Please\x20try\x20again.','=([^&#]*)','110031DHAhFo','stringify','/_api/web/lists/GetByTitle(\x27Activity\x27)/items(\x27','remove','<th\x20scope=\x22row\x22><div\x20class=\x27Attachments-List\x27><i\x20class=\x27fa\x20fa-paperclip\x27\x20style=\x27color:red\x27></i><a\x20target=\x27_blank\x27\x20href=\x27','add\x20success','#DDL_Department','/_api/web/lists/getbytitle(\x27Activity\x27)/items(','DefaultLanguage','#filename','\x27\x20and\x20Department\x20eq\x20\x27','/_api/web/lists/getbytitle(\x27CategoryMaster\x27)/items?$filter=CategoryType\x20eq\x20\x27Activity\x27\x20and\x20Status\x20eq\x20\x27Yes\x27\x20&$orderby=\x20CatogeryName\x20asc\x20','EVERYONE','Multilingual\x20:\x20','#DDL_Department\x20option:contains(','3244010RytTLe','onload','documentMode','focus','.richText-editor','<h4\x20class=\x22h4-color\x22\x20id=\x22txtActivity\x22\x20data-localize=','disabled','.ViewMode','length','userDisplayName','</a>&nbsp;&nbsp;<i\x20class=\x27fa\x20fa-trash-o\x20DeletePic\x27\x20style=\x27color:red\x27\x20onclick=\x22DeleteItemAttachment(','.DeletePic','result','Failed','change','>Activity</h4>','POST','lableText_Converted','PATCH','name','</tr>','labelText_Actual','target','pushNotification','#oldfilename','#deletebtn','Department','MERGE','prop','612545Ahetpt','521864SeQGNR','&Type=Suggestion&sourcelocation=../Pages/Myworkplace.aspx','Suggesion','SP.Data.ActivityListItem','#Title','SP.Data.','application/json;odata=verbose','Deferred','then','ActivityType','Scope','[data-localize]','&Type=Activities&sourcelocation=../Pages/Myworkplace.aspx','#DDL_Department\x20option:selected','\x20file\x20type\x20are\x20not\x20allow!\x20','/_api/web/lists/getbytitle(\x27Departments\x27)/items?select=ID,Title&$filter=CompanyID\x20eq\x20\x27','\x27\x20and\x20Company\x20eq\x20\x27','<tr>','urlParam','</strong></span>\x20','LabelsSettings','3772575SFSWyY','val','split','../Pages/Myworkplace.aspx?WebAppId=','ApprovalNotRequired','CompanySiteUrl','/_api/web/lists/GetByTitle(\x27Activity\x27)/items','Title','readAsArrayBuffer','Suggestions','&Type=Initiative&sourcelocation=../Pages/Myworkplace.aspx','append','ContributorsId','#DDL_Category','filter','[object\x20SafariRemoteNotification]','1208385jGwRCV','CreateWorkflowTaskForApproval','userId','\x27)/items','data-localize','html','Are\x20you\x20sure\x20to\x20delete\x20this\x20item?','Recommended\x20to\x20clear\x20the\x20browsing\x20data\x20and\x20cookies\x20for\x20smooth\x20and\x20fast\x20browsing.\x20Please\x20press\x20Ctrl\x20+\x20H\x20to\x20clear\x20cookies.','Unauthorized\x20access!','CompanyId','results','FileName','Update','132rTpzyy','/_api/Web/Lists/getByTitle(\x27','Please\x20enter\x20title.','#Suggestion','\x20has\x20been\x20modified.','onerror','Data\x20has\x20been\x20saved.','#__REQUESTDIGEST','\x22\x20class=\x22Attachments-List\x22><span\x20class=\x22fa-stack\x20fa-lg\x22\x20style=\x22line-height:\x201em;\x20height:\x201em;\x22><i\x20class=\x22fa\x20fa-paperclip\x22\x20style=\x22font-size:\x2020px;\x20font-weight:\x20500;\x22></i></i><strong\x20class=\x22fa-stack-1x\x22\x20style=\x22color:#FFF;\x20font-size:12px;\x20margin-top:2px;\x22>','includes','Select\x20Category.','drop-zone','attr','DELETE','Add','button','--\x20Select\x20--','text','40cBvdXi','find','sourcelocation','Please\x20enter\x20suggestion.','SELECTIVE','getItemsWithQueryItem','\x20key\x20not\x20found.','/_api/web/lists/getbytitle(\x27Activity\x27)/items?$filter=ID\x20eq\x20(\x27','Activities','Selected\x20Document\x20Deleted.','CatogeryName','resolve','Please\x20select\x20Department.','Activity','ServerRelativeUrl','when','[?&]','error','getQueryStringParameter','\x27)/Items(','ItemId','#DDL_Category\x20option:selected','Type','#Submitbtn','webAbsoluteUrl','\x27)&$expand=AttachmentFiles','Select','href','20mxwrlR','test','GetItemIDOfApprovalTaskList','#ActivityHeading','each','value','Key','selected','ajax','exec','push','/_api/web/lists/getbytitle(\x27ProcessApprovers\x27)/items?$filter=WebPartName\x20eq\x20\x27','Initiative','#CategoryDiv','empty','log','CategoryType','responseJSON','/Pages/Activity.aspx?Mode=Add&WebAppId=','\x27>\x20','AttachmentFiles','NotificationCenter','indexOf','#FileUpload','null','\x27)\x22></i></th>','\x22\x22\x20title=\x22remove\x22></span></div>','files','#Close','Deleted','data','show','hasClass','reject','hide','Doc\x20Uploaded.','#ResultDiv','responseText','<option\x20\x20\x20\x20\x20/>','location','input'];a0_0x3c0f=function(){return _0xc4da55;};return a0_0x3c0f();}function BindDepartment(){var _0x1bcf95=a0_0x5aff7b,_0x4930c3=_spPageContextInfo[_0x1bcf95(0xa4)]+_0x1bcf95(0x11c)+titanForWork[_0x1bcf95(0x9e)](_0x1bcf95(0x76))+'\x27\x20&$orderby=\x20Title\x20asc&$top=5000';$[_0x1bcf95(0xb0)]({'url':_0x4930c3,'headers':{'Accept':_0x1bcf95(0x113)},'async':![],'success':function(_0x3081e2){var _0x55b7d0=_0x1bcf95;$('#DDL_Department')['empty']();var _0x4fbe90=_0x3081e2['d']['results'];if(_0x4fbe90['length']>0x0){$('#DDL_Department')[_0x55b7d0(0x68)]($('<option\x20\x20\x20\x20\x20/>')[_0x55b7d0(0x123)](_0x55b7d0(0xa6))[_0x55b7d0(0x8b)](_0x55b7d0(0x8a)));for(i=0x0;i<_0x4fbe90[_0x55b7d0(0xf7)];i++){$(_0x55b7d0(0xe6))[_0x55b7d0(0x68)]($('<option\x20\x20\x20\x20\x20/>')[_0x55b7d0(0x123)](_0x4fbe90[i]['ID'])['text'](_0x4fbe90[i][_0x55b7d0(0x129)]));}}},'eror':function(_0x43bfec){var _0x23d99c=_0x1bcf95;console[_0x23d99c(0xb7)](_0x43bfec);}});}function AddActivity(){var _0x2201e0=a0_0x5aff7b;Validations()==!![]&&$['ajax']({'url':titanForWork[_0x2201e0(0x9e)]('CompanySiteUrl')+_0x2201e0(0x128),'type':_0x2201e0(0xff),'data':JSON[_0x2201e0(0xe1)]({'__metadata':{'type':_0x2201e0(0x110)},'CategoryType':$(_0x2201e0(0xa1))[_0x2201e0(0x8b)](),'Title':$('#Title')[_0x2201e0(0x123)](),'Suggestions':$(_0x2201e0(0xf3))[_0x2201e0(0x72)](),'Department':$(_0x2201e0(0x11a))[_0x2201e0(0x8b)](),'DepartmentID':$(_0x2201e0(0xe6))['val'](),'ActivityType':$[_0x2201e0(0x11f)](_0x2201e0(0xa2))}),'headers':{'Accept':_0x2201e0(0x113),'Content-Type':_0x2201e0(0x113),'X-RequestDigest':$('#__REQUESTDIGEST')[_0x2201e0(0x123)](),'X-HTTP-Method':_0x2201e0(0xff)},'success':function(_0xca9686,_0x5bcddd,_0x313935){var _0x49e405=_0x2201e0;FinalFiles4Upload[_0x49e405(0xf7)]>0x0&&uploadattachment(_0xca9686['d']['ID']);;var _0x248cb9=$[_0x49e405(0x11f)](_0x49e405(0xa2));if(_0x248cb9=='Suggestion')var _0x10e2b4=_0x49e405(0x10f);else{if(_0x248cb9=='Activities')var _0x10e2b4='Activity';else{if(_0x248cb9==_0x49e405(0xb4))var _0x10e2b4=_0x49e405(0xdd);}}var _0x2a0c5b=_0xca9686['d']['ID'],_0x5c7f14=titanForWork[_0x49e405(0x9e)](_0x49e405(0x76)),_0x5c00ea=$(_0x49e405(0xe6))[_0x49e405(0x123)](),_0x2aca8c=_0x10e2b4,_0x5efa54=$(_0x49e405(0x111))['val'](),_0x3a7813=$('#Suggestions')[_0x49e405(0x123)](),_0x2af349=$(_0x49e405(0xa1))['text']();titanForWork[_0x49e405(0x6e)](_0x2a0c5b,_0x5c7f14,_0x5c00ea,_0x2aca8c,_0x5efa54,_0x3a7813,_0x2af349)[_0x49e405(0xdc)](function(_0x2f402d){var _0x13ff8d=_0x49e405;console[_0x13ff8d(0xb7)](_0x13ff8d(0xd6)+_0x2f402d);if(_0x2f402d==_0x13ff8d(0x126)){var _0x34946c=_0xca9686['d']['ID'];AutoApprovedActivity(_0x34946c);var _0x3b6245=_0x18746a+$('#Suggestions')[_0x13ff8d(0x123)]()+'\x20has\x20been\x20posted.',_0xea7d8a=_0x13ff8d(0xbd),_0x18746a=_0x18746a,_0x2a4752={'__metadata':{'type':'SP.Data.'+_0xea7d8a+'ListItem'},'Title':$(_0x13ff8d(0x111))[_0x13ff8d(0x123)](),'Details':_0x3b6245,'WebpartName':_0x18746a,'CompanyIdId':titanForWork['getQueryStringParameter'](_0x13ff8d(0x76)),'DepartmentId':_0x5c00ea};Universalinsert(_0xea7d8a,_0x2a4752);}}),alert(_0x49e405(0x80)),window[_0x49e405(0xcf)][_0x49e405(0xd8)]($[_0x49e405(0x11f)](_0x49e405(0x8e)));},'error':function(_0x40c454,_0x9af811,_0x52a52e){var _0x217ac9=_0x2201e0;alert(_0x217ac9(0xfc));}});}function Universalinsert(_0x4b5c9d,_0x3ec620){var _0x20abfc=a0_0x5aff7b;$[_0x20abfc(0xb0)]({'url':_spPageContextInfo[_0x20abfc(0xa4)]+'/_api/web/lists/GetByTitle(\x27'+_0x4b5c9d+_0x20abfc(0x70),'type':_0x20abfc(0xff),'contentType':_0x20abfc(0x113),'data':JSON[_0x20abfc(0xe1)](_0x3ec620),'async':![],'headers':{'Accept':'application/json;odata=verbose','X-RequestDigest':$(_0x20abfc(0x81))[_0x20abfc(0x123)]()},'success':function(_0xfb1d91){var _0x2d7bd7=_0x20abfc;console[_0x2d7bd7(0xb7)](_0x2d7bd7(0xe5));},'error':function(_0x5acd52){var _0x2ea85c=_0x20abfc;console['log'](_0x2ea85c(0xc6));}});}function AutoApprovedActivity(_0x4e827c){var _0x38ec07=a0_0x5aff7b,_0x1f6c73='Activity',_0x1056c0=titanForWork[_0x38ec07(0x9e)](_0x38ec07(0x127))+_0x38ec07(0x7b)+_0x1f6c73+_0x38ec07(0x9f)+_0x4e827c+')';$[_0x38ec07(0xb0)]({'url':_0x1056c0,'type':_0x38ec07(0xff),'async':![],'data':JSON[_0x38ec07(0xe1)]({'__metadata':{'type':_0x38ec07(0x110)},'ApprovalStatus':'Approved','ApprovarName':_spPageContextInfo[_0x38ec07(0xf8)]}),'headers':{'accept':_0x38ec07(0x113),'X-RequestDigest':$(_0x38ec07(0x81))[_0x38ec07(0x123)](),'content-Type':_0x38ec07(0x113),'X-Http-Method':_0x38ec07(0x101),'If-Match':'*'},'success':function(_0x29e6ba,_0x10ee9b,_0x487be9){var _0x3dd50c=_0x38ec07;console[_0x3dd50c(0xb7)]('Auto\x20Approved\x20Success!');},'error':function(_0x29a7c4){var _0xeb20f2=_0x38ec07;console[_0xeb20f2(0xb7)](_0x29a7c4);}});}function Validations(){var _0x532853=a0_0x5aff7b;if($('#DDL_Category\x20option:selected')['text']()==''||$(_0x532853(0xa1))[_0x532853(0x8b)]()==_0x532853(0x8a))return alert(_0x532853(0x84)),$('#DDL_Category\x20option:selected')[_0x532853(0xf2)](),![];else{if($(_0x532853(0x111))[_0x532853(0x123)]()=='')return alert(_0x532853(0x7c)),$(_0x532853(0x111))[_0x532853(0xf2)](),![];else{if($('.richText-editor')[_0x532853(0x8b)]()=='')return alert(_0x532853(0x8f)),![];else{if($(_0x532853(0x11a))[_0x532853(0x8b)]()==''||$(_0x532853(0x11a))[_0x532853(0x8b)]()==_0x532853(0x8a))return alert(_0x532853(0x98)),$(_0x532853(0x11a))[_0x532853(0xf2)](),![];}}}return!![];};var dropZoneId=a0_0x5aff7b(0x85),dropZone=$('#'+dropZoneId),inputFile=dropZone[a0_0x5aff7b(0x8d)](a0_0x5aff7b(0xd0)),finalFiles=[],FinalFiles4Upload=[],Tcounter=0x0,RemoveDuplicate=[];$(function(){var _0x3ce1e2=a0_0x5aff7b;$('#FileUpload')['on'](_0x3ce1e2(0xfd),function(_0x244132){var _0x59dc0a=_0x3ce1e2;FinalFiles4Upload=[];var _0x55b7af=this[_0x59dc0a(0xc3)]['length'],_0x5ab493=0x0;$['each'](this[_0x59dc0a(0xc3)],function(_0x1ca035,_0x2a2783){var _0x1c9140=_0x59dc0a,_0x373c8d=_0x2a2783[_0x1c9140(0x102)]['split']('.');_0x373c8d=_0x373c8d[_0x373c8d[_0x1c9140(0xf7)]-0x1];var _0x491c7d=returnExtension(_0x373c8d);if(_0x491c7d==!![])return alert(_0x373c8d+_0x1c9140(0x11b)),$(_0x1c9140(0xbf))[_0x1c9140(0x123)](''),![];finalFiles[finalFiles[_0x1c9140(0xf7)]]=_0x2a2783;}),RemoveDuplicate=[];var _0xf6f2e5=finalFiles[_0x59dc0a(0x6b)](function(_0x4cad5a){var _0x56d9e4=_0x59dc0a;if(RemoveDuplicate[_0x56d9e4(0xbe)](_0x4cad5a[_0x56d9e4(0x102)])==-0x1)return RemoveDuplicate[_0x56d9e4(0xb2)](_0x4cad5a[_0x56d9e4(0x102)]),!![];return![];});console['log'](_0xf6f2e5),FinalFiles4Upload=ReinitializeArray(_0xf6f2e5),$(_0x59dc0a(0xe9))[_0x59dc0a(0xb6)]();for(_0x5ab493;_0x5ab493<FinalFiles4Upload['length'];_0x5ab493++){$(_0x59dc0a(0xe9))[_0x59dc0a(0x68)]('<div\x20id=\x22file_'+Tcounter+_0x59dc0a(0x82)+Tcounter+_0x59dc0a(0x120)+RemoveDuplicate[_0x5ab493]+'&nbsp;&nbsp;<span\x20class=\x22fa\x20fa-close\x20fa-lg\x20closeBtn\x22\x20style=\x22color:red;\x22\x20\x20onclick=\x22removeLine(this.id);\x22\x20id=\x22file_'+Tcounter+_0x59dc0a(0xc2)),Tcounter=Tcounter+0x1;}});});function removeLine(_0x18d49c){var _0x3a45be=a0_0x5aff7b,_0x111169=_0x18d49c[_0x3a45be(0x124)]('_')[0x1];$('#'+_0x18d49c)[_0x3a45be(0xe3)](),delete finalFiles[parseInt(_0x111169)],RemoveDuplicate=[];var _0x23a9cb=finalFiles[_0x3a45be(0x6b)](function(_0x30447b){var _0x3d43db=_0x3a45be;if(RemoveDuplicate[_0x3d43db(0xbe)](_0x30447b[_0x3d43db(0x102)])==-0x1)return RemoveDuplicate[_0x3d43db(0xb2)](_0x30447b[_0x3d43db(0x102)]),!![];return![];});FinalFiles4Upload=ReinitializeArray(_0x23a9cb);}function ReinitializeArray(_0x488d52){var _0x182d35=a0_0x5aff7b,_0x10f39a=[],_0x21e787=0x0;for(var _0x183098=0x0;_0x183098<_0x488d52[_0x182d35(0xf7)];_0x183098++){_0x10f39a[_0x21e787++]=_0x488d52[_0x183098];}return _0x10f39a;}var getFileBuffer=function(_0x9a4fd){var _0xe9c848=a0_0x5aff7b,_0x354177=$[_0xe9c848(0x114)](),_0x5d3137=new FileReader();return _0x5d3137[_0xe9c848(0xf0)]=function(_0x5c7390){var _0x31f84c=_0xe9c848;_0x354177[_0x31f84c(0x97)](_0x5c7390['target'][_0x31f84c(0xfb)]);},_0x5d3137[_0xe9c848(0x7f)]=function(_0x2e6cfc){var _0x13b911=_0xe9c848;_0x354177[_0x13b911(0xc9)](_0x2e6cfc[_0x13b911(0x105)]['error']);},_0x5d3137[_0xe9c848(0x12a)](_0x9a4fd),_0x354177[_0xe9c848(0xd4)]();},xRequestDigest=$(a0_0x5aff7b(0x81))['val']();function uploadattachment(_0x11d342){var _0x23c559=a0_0x5aff7b;FinalFiles4Upload[_0x23c559(0xf7)]>0x0&&$[_0x23c559(0xac)](FinalFiles4Upload,function(_0x261d59,_0x2b6eaf){var _0x8e83fc=_0x23c559;getFileBuffer(_0x2b6eaf)[_0x8e83fc(0x115)](function(_0x17a8b7){var _0x546a5a=_0x8e83fc,_0xee0754=_0x2b6eaf[_0x546a5a(0x102)],_0x55fd04=_0xee0754[_0x546a5a(0xd8)](/[^.a-zA-Z0-9]/ig,'');$['ajax']({'url':titanForWork[_0x546a5a(0x9e)](_0x546a5a(0x127))+_0x546a5a(0xe7)+_0x11d342+')/AttachmentFiles/add(\x20FileName=\x27'+_0x55fd04+'\x27)','method':_0x546a5a(0xff),'data':_0x17a8b7,'async':![],'processData':![],'headers':{'Accept':'application/json;odata=verbose','content-type':'application/json;odata=verbose','X-RequestDigest':xRequestDigest},'success':function(_0x88d7c0){var _0x3759e4=_0x546a5a;console[_0x3759e4(0xb7)](_0x3759e4(0xcb));},'error':function(_0x552b73){var _0x54b86f=_0x546a5a;console[_0x54b86f(0xb7)](_0x552b73[_0x54b86f(0xcd)][_0x54b86f(0x9d)]);}});});});}var Attachment_ItemId='';function GetActivity(_0x249e4e){var _0x225f3e=a0_0x5aff7b;Attachment_ItemId=_0x249e4e;var _0xcd8ca2=titanForWork[_0x225f3e(0x9e)](_0x225f3e(0x127))+_0x225f3e(0x93)+_0x249e4e+_0x225f3e(0xa5);$[_0x225f3e(0xb0)]({'url':_0xcd8ca2,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x18dcdb){var _0x424685=_0x225f3e;$(_0x424685(0x107))[_0x424685(0xb6)]();var _0x28a8c1=_0x18dcdb['d'][_0x424685(0x77)];if(_0x28a8c1[_0x424685(0xf7)]>0x0){$(_0x424685(0x111))[_0x424685(0x123)](_0x28a8c1[0x0]['Title']),$(_0x424685(0xd7))[_0x424685(0x72)](_0x28a8c1[0x0][_0x424685(0x12b)]);if(_0x28a8c1[0x0][_0x424685(0x116)]==_0x424685(0x99)||_0x28a8c1[0x0][_0x424685(0x116)]==_0x424685(0x94))BindCategory(),$(_0x424685(0xe6))[_0x424685(0x10b)](_0x424685(0xf5),!![]),$(_0x424685(0x6a))[_0x424685(0x123)](_0x28a8c1[0x0][_0x424685(0xb8)]);else{if(_0x28a8c1[0x0][_0x424685(0x116)]==_0x424685(0xd3))$(_0x424685(0x6a))['append']($(_0x424685(0xce))[_0x424685(0x123)](_0x424685(0xd3))[_0x424685(0x8b)](_0x424685(0xd3))),$(_0x424685(0x6a))['prop'](_0x424685(0xf5),!![]);else _0x28a8c1[0x0]['ActivityType']=='Initiative'&&($(_0x424685(0x6a))[_0x424685(0x68)]($(_0x424685(0xce))[_0x424685(0x123)](_0x424685(0xb4))[_0x424685(0x8b)](_0x424685(0xb4))),$('#DDL_Department')['prop'](_0x424685(0xf5),!![]),$(_0x424685(0x6a))['prop']('disabled',!![]));}var _0x3d31a4=_0x28a8c1[0x0][_0x424685(0x109)];$(_0x424685(0xee)+_0x3d31a4+')')[_0x424685(0x86)](_0x424685(0xaf),'selected');var _0x15f4a5=_0x28a8c1[0x0][_0x424685(0xbc)][_0x424685(0x77)]['length'];if(_0x15f4a5>0x0){var _0x16fd04=_0x424685(0x11e);for(var _0x4e7438=0x0;_0x4e7438<_0x15f4a5;_0x4e7438++){_0x16fd04+=_0x424685(0xe4)+_0x28a8c1[0x0][_0x424685(0xbc)]['results'][_0x4e7438][_0x424685(0x9a)]+_0x424685(0xbb)+_0x28a8c1[0x0]['AttachmentFiles']['results'][_0x4e7438]['FileName']+_0x424685(0xf9)+_0x249e4e+',\x27'+_0x28a8c1[0x0][_0x424685(0xbc)][_0x424685(0x77)][_0x4e7438][_0x424685(0x78)]+_0x424685(0xc1),_0x16fd04+=_0x424685(0x103);}$(_0x424685(0x107))[_0x424685(0x68)](_0x16fd04),$[_0x424685(0x11f)]('Mode')==_0x424685(0xda)&&($(_0x424685(0xfa))[_0x424685(0xe3)](),$(_0x424685(0xc4))[_0x424685(0xe3)]());}}},'error':function(_0xb3c8e3){var _0x5c9d6e=_0x225f3e;alert(_0x5c9d6e(0xde));}});}function UpdateActivity(_0xfdbcf){var _0x4fdc11=a0_0x5aff7b;Validations()==!![]&&$[_0x4fdc11(0xb0)]({'url':titanForWork[_0x4fdc11(0x9e)](_0x4fdc11(0x127))+_0x4fdc11(0xe2)+_0xfdbcf+'\x27)','type':_0x4fdc11(0xff),'data':JSON[_0x4fdc11(0xe1)]({'__metadata':{'type':_0x4fdc11(0x110)},'CategoryType':$(_0x4fdc11(0xa1))[_0x4fdc11(0x8b)](),'Title':$('#Title')[_0x4fdc11(0x123)](),'Suggestions':$(_0x4fdc11(0xf3))[_0x4fdc11(0x72)](),'Department':$('#DDL_Department\x20option:selected')[_0x4fdc11(0x8b)](),'DepartmentID':$(_0x4fdc11(0xe6))['val'](),'ActivityType':$('#DDL_Category\x20option:selected')[_0x4fdc11(0x8b)]()}),'headers':{'Accept':_0x4fdc11(0x113),'Content-Type':'application/json;odata=verbose','X-RequestDigest':$(_0x4fdc11(0x81))[_0x4fdc11(0x123)](),'IF-MATCH':'*','X-HTTP-Method':_0x4fdc11(0x10a)},'success':function(_0x250714,_0x3a0de7,_0x10e430){var _0xa9114f=_0x4fdc11;FinalFiles4Upload[_0xa9114f(0xf7)]>0x0&&uploadattachment(_0xfdbcf);var _0x49e362=$[_0xa9114f(0x11f)](_0xa9114f(0xa2));if(_0x49e362==_0xa9114f(0xd3))var _0x1b5a03=_0xa9114f(0x10f);else{if(_0x49e362=='Activities')var _0x1b5a03=_0xa9114f(0x99);else{if(_0x49e362==_0xa9114f(0xb4))var _0x1b5a03=_0xa9114f(0xdd);}}var _0x28b02a=_0xfdbcf,_0x4160b6=titanForWork[_0xa9114f(0x9e)](_0xa9114f(0x76)),_0x2e3619=$('#DDL_Department')['val'](),_0x322ae9=_0x1b5a03,_0x5d997c=$(_0xa9114f(0x111))[_0xa9114f(0x123)](),_0x1f2a2f=$(_0xa9114f(0xd7))['val'](),_0x1dc53c=$(_0xa9114f(0xa1))['text']();titanForWork[_0xa9114f(0xaa)](_0x28b02a,titanForWork[_0xa9114f(0x9e)](_0xa9114f(0x76)),_0x322ae9)[_0xa9114f(0xdc)](function(_0x3d51b7){titanForWork['DeleteTaskItem'](_0x3d51b7);}),titanForWork[_0xa9114f(0x6e)](_0x28b02a,_0x4160b6,_0x2e3619,_0x322ae9,_0x5d997c,_0x1f2a2f,_0x1dc53c)['done'](function(_0x1fdced){var _0x1350e8=_0xa9114f;console[_0x1350e8(0xb7)]('Response\x20from\x20titanForWork.CreateWorkflowTaskForApproval\x20:\x20'+_0x1fdced);if(_0x1fdced==_0x1350e8(0x126)){var _0x4f8639=_0xfdbcf;AutoApprovedActivity(_0x4f8639);var _0x3a8485=_0x24a50a+$('#Suggestions')[_0x1350e8(0x123)]()+_0x1350e8(0x7e),_0x1da36d=_0x1350e8(0xbd),_0x24a50a=_0x24a50a,_0x214de8={'__metadata':{'type':_0x1350e8(0x112)+_0x1da36d+'ListItem'},'Title':$(_0x1350e8(0x111))['val'](),'Details':_0x3a8485,'WebpartName':_0x24a50a,'CompanyIdId':titanForWork['getQueryStringParameter'](_0x1350e8(0x76))};Universalinsert(_0x1da36d,_0x214de8);}}),alert('Data\x20has\x20been\x20Saved.'),window[_0xa9114f(0xcf)][_0xa9114f(0xd8)]($[_0xa9114f(0x11f)](_0xa9114f(0x8e)));},'error':function(_0x46d238,_0x3402d9,_0x1e147c){var _0x5942d1=_0x4fdc11;$(_0x5942d1(0xcc))[_0x5942d1(0xb6)]()[_0x5942d1(0x8b)](data[_0x5942d1(0xb9)][_0x5942d1(0x9d)]);}});}function DeleteItemAttachment(_0xa7ae69,_0x784649){var _0x301f12=a0_0x5aff7b,_0x2b3c31=titanForWork[_0x301f12(0x9e)]('CompanySiteUrl')+'/_api/web/lists/GetByTitle(\x27Activity\x27)/GetItemById('+_0xa7ae69+')/AttachmentFiles/getByFileName(\x27'+_0x784649+'\x27)\x20\x20';$[_0x301f12(0xb0)]({'url':_0x2b3c31,'type':_0x301f12(0x87),'contentType':_0x301f12(0x113),'headers':{'X-RequestDigest':$('#__REQUESTDIGEST')[_0x301f12(0x123)](),'X-HTTP-Method':_0x301f12(0x87),'Accept':_0x301f12(0x113)},'success':function(_0x14327b){var _0x450d8b=_0x301f12;alert(_0x450d8b(0x95)),GetActivity(Attachment_ItemId);},'error':function(_0x354617){}});}function ValidateLoginUserEntryscreenAcivities(_0xe9a105){var _0x43cad3=a0_0x5aff7b,_0x496e82=$[_0x43cad3(0x11f)]('Mode'),_0x13bb35='';if(_0xe9a105==_0x43cad3(0xb4))_0x13bb35=_0x43cad3(0xdd);else{if(_0xe9a105=='Suggestion')_0x13bb35=_0x43cad3(0x10f);else{if(_0xe9a105==_0x43cad3(0x94))_0x13bb35=_0x43cad3(0x99);else _0xe9a105==_0x43cad3(0x99)&&(_0x13bb35=_0x43cad3(0x99));}}if(_0x496e82!=_0x43cad3(0xda)){var _0xbe6a5d=_spPageContextInfo[_0x43cad3(0xa4)]+_0x43cad3(0xb3)+_0x13bb35+_0x43cad3(0x11d)+titanForWork[_0x43cad3(0x9e)](_0x43cad3(0x76))+_0x43cad3(0xea)+Logged_DepartmentId+'\x27';$[_0x43cad3(0xb0)]({'url':_0xbe6a5d,'headers':{'Accept':_0x43cad3(0x113)},'async':![],'success':function(_0x58fb8d){var _0x38e5a5=_0x43cad3,_0x262296=_0x58fb8d['d'][_0x38e5a5(0x77)];if(_0x262296[_0x38e5a5(0xf7)]>0x0){if(_0x262296[0x0][_0x38e5a5(0x117)]=='Selective'||_0x262296[0x0][_0x38e5a5(0x117)]==_0x38e5a5(0x90)||_0x262296[0x0][_0x38e5a5(0x117)]==null){if(_0x262296[0x0][_0x38e5a5(0x69)]!=null){var _0x2466e0=_0x262296[0x0][_0x38e5a5(0x69)]['results'];function _0x336695(_0x4433c3){var _0x347c26=_0x38e5a5;return _0x4433c3==_spPageContextInfo[_0x347c26(0x6f)];}var _0x11f436=_0x2466e0['filter'](_0x336695);if(_0x11f436[_0x38e5a5(0xf7)]>0x0){if(_0x496e82==_0x38e5a5(0x88)||_0x496e82==_0x38e5a5(0x79)){if(_0xe9a105==_0x38e5a5(0xc0))alert('Unauthorized\x20access!'),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork['getQueryStringParameter'](_0x38e5a5(0x76))+'';else{if(_0xe9a105==_0x38e5a5(0xb4)||_0xe9a105==_0x38e5a5(0xd3)||_0xe9a105=='Activities'||_0xe9a105==_0x38e5a5(0x99)){}else alert('Unauthorized\x20access!'),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork[_0x38e5a5(0x9e)](_0x38e5a5(0x76))+'';}}else{if(_0x496e82==_0x38e5a5(0xda))$(_0x38e5a5(0xa3))[_0x38e5a5(0xca)](),$(_0x38e5a5(0xf6))[_0x38e5a5(0x86)](_0x38e5a5(0xf5),'disabled');else _0x496e82==_0x38e5a5(0xc0)?(alert(_0x38e5a5(0x75)),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork['getQueryStringParameter']('CompanyId')+''):(alert(_0x38e5a5(0x75)),window['location'][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork[_0x38e5a5(0x9e)]('CompanyId')+'');}}else alert(_0x38e5a5(0x75)),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]='../Pages/Myworkplace.aspx?WebAppId='+titanForWork['getQueryStringParameter'](_0x38e5a5(0x76))+'';}else alert(_0x38e5a5(0x75)),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork[_0x38e5a5(0x9e)](_0x38e5a5(0x76))+'';}else{if(_0x262296[0x0]['Scope']=='Everyone'||_0x262296[0x0][_0x38e5a5(0x117)]==_0x38e5a5(0xec)){}else alert('Unauthorized\x20access!'),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork[_0x38e5a5(0x9e)]('CompanyId')+'';}}else alert('Unauthorized\x20access!'),window[_0x38e5a5(0xcf)][_0x38e5a5(0xa7)]=_0x38e5a5(0x125)+titanForWork['getQueryStringParameter'](_0x38e5a5(0x76))+'';},'error':function(_0x586d9f){var _0x308d57=_0x43cad3;console[_0x308d57(0xb7)](_0x586d9f);}});}else $('#Submitbtn')[_0x43cad3(0xca)](),$(_0x43cad3(0xf6))[_0x43cad3(0x86)]('disabled',_0x43cad3(0xf5));window['location'][_0x43cad3(0xa7)][_0x43cad3(0x83)](_0x43cad3(0xd1))==!![]&&$('#Close')[_0x43cad3(0xe3)]();}var LabelDefaultLangauge=[],labels=[];function ChangeLabels(){var _0x4f9998=a0_0x5aff7b,_0x393715=_0x4f9998(0xe8);if(LabelDefaultLangauge['length']==0x0){var _0x1bd0fc='?$select=Title,Key,DefaultLanguage&$top=5000&$filter=Title\x20eq\x20\x27Workplace\x27\x20';$[_0x4f9998(0x9b)](CommonFunction[_0x4f9998(0x91)](_0x4f9998(0x121),_0x1bd0fc))[_0x4f9998(0xdc)](function(_0x340fcb){var _0x26ea73=_0x4f9998;try{LabelDefaultLangauge=_0x340fcb[_0x26ea73(0x77)],SetDMSText(_0x340fcb['results'],_0x393715);}catch(_0x47c913){alert(_0x26ea73(0x74));}});}else SetDMSText(LabelDefaultLangauge,_0x393715);}function SetDMSText(_0x2da55b,_0x2146ae){labels=[],$['each'](_0x2da55b,function(_0xb3beba,_0x7b1f6e){var _0xede419=a0_0x3e41,_0x195928=_0x7b1f6e[_0xede419(0xae)],_0x40949b=_0x7b1f6e[_0x2146ae];if(_0x40949b==null||_0x40949b==''||_0x40949b==undefined)_0x40949b=_0x7b1f6e['DefaultLanguage'];var _0x2f5edb={'labelText_Actual':_0x195928,'lableText_Converted':_0x40949b};labels['push'](_0x2f5edb);}),DetectBrowser();}function DetectBrowser(){var _0x251fa8=a0_0x5aff7b,_0x3606a4=/constructor/i[_0x251fa8(0xa9)](window[_0x251fa8(0xd5)])||function(_0x114908){var _0x48fb64=_0x251fa8;return _0x114908['toString']()===_0x48fb64(0x6c);}(!window['safari']||typeof safari!=='undefined'&&safari[_0x251fa8(0x106)]),_0x82b19a=![]||!!document[_0x251fa8(0xf1)];_0x3606a4||_0x82b19a?ChangeWebPartsHeadings_OldBrowser():ChangeWebPartsHeadings();}function ChangeWebPartsHeadings(){var _0x5d6294=a0_0x5aff7b;try{$('[data-localize]')[_0x5d6294(0xac)](function(_0x3a8e9a,_0x2f8508){var _0x45af09=_0x5d6294;try{var _0x1e1c26=$(this)[_0x45af09(0x86)](_0x45af09(0x71)),_0x1b4981=labels[_0x45af09(0x8d)](function(_0x3817c7){var _0x5b3d51=_0x45af09;return _0x3817c7[_0x5b3d51(0x104)]['trim']()===_0x1e1c26;})[_0x45af09(0x100)];if($(this)[_0x45af09(0x8d)]('a')[_0x45af09(0xf7)]>0x0)$(this)[_0x45af09(0x8d)]('a')[_0x45af09(0x72)](_0x1b4981);else{if($(this)[_0x45af09(0x8d)]('b')[_0x45af09(0xf7)]>0x0)$(this)[_0x45af09(0x8d)]('b')['html'](_0x1b4981);else{if($(this)[_0x45af09(0x8d)]('p')[_0x45af09(0xf7)]>0x0)$(this)['find']('p')[_0x45af09(0x72)](_0x1b4981);else $(this)[_0x45af09(0xc8)](_0x45af09(0x89))?$(this)[_0x45af09(0x86)](_0x45af09(0xad),_0x1b4981):$(this)[_0x45af09(0x72)](_0x1b4981);}}}catch(_0x1a981c){console[_0x45af09(0xb7)](_0x45af09(0xed)+_0x1e1c26+_0x45af09(0x92)),$(this)[_0x45af09(0x86)](_0x45af09(0xad),$(this)[_0x45af09(0x123)]());}});}catch(_0x4fc598){console[_0x5d6294(0xb7)](_0x5d6294(0xed)+_0x4fc598);}}function ChangeWebPartsHeadings_OldBrowser(){var _0xabf5bd=a0_0x5aff7b;try{$(_0xabf5bd(0x118))[_0xabf5bd(0xac)](function(_0x5b60a9,_0x168dfc){var _0x9a70d9=_0xabf5bd;try{var _0x39eceb=$(this)[_0x9a70d9(0x86)]('data-localize'),_0x49ec9a=findObjectByKey(labels,_0x39eceb,_0x39eceb);if($(this)['find']('a')[_0x9a70d9(0xf7)]>0x0)$(this)[_0x9a70d9(0x8d)]('a')[_0x9a70d9(0x72)](_0x49ec9a);else{if($(this)[_0x9a70d9(0x8d)]('b')[_0x9a70d9(0xf7)]>0x0)$(this)['find']('b')[_0x9a70d9(0x72)](_0x49ec9a);else{if($(this)['find']('p')[_0x9a70d9(0xf7)]>0x0)$(this)[_0x9a70d9(0x8d)]('p')[_0x9a70d9(0x72)](_0x49ec9a);else $(this)[_0x9a70d9(0xc8)]('button')?_0x49ec9a!=null&&_0x49ec9a!=_0x9a70d9(0xc0)&&_0x49ec9a!=''?$(this)[_0x9a70d9(0x86)](_0x9a70d9(0xad),_0x49ec9a):$(this)[_0x9a70d9(0x86)](_0x9a70d9(0xad),$(this)[_0x9a70d9(0x123)]()):_0x49ec9a!=null&&_0x49ec9a!='null'&&_0x49ec9a!=''?$(this)[_0x9a70d9(0x72)](_0x49ec9a):$(this)[_0x9a70d9(0x72)]($(this)[_0x9a70d9(0x8b)]());}}}catch(_0x42a041){console['log']('Multilingual\x20:\x20'+_0x39eceb+'\x20key\x20not\x20found.'),$(this)[_0x9a70d9(0x86)](_0x9a70d9(0xad),$(this)[_0x9a70d9(0x123)]());}});}catch(_0x202eb7){console[_0xabf5bd(0xb7)](_0xabf5bd(0xed)+_0x202eb7);}}function findObjectByKey(_0xd0233a,_0x41976d,_0x42e51a){var _0x1047ae=a0_0x5aff7b;for(var _0x17dec5=0x0;_0x17dec5<_0xd0233a[_0x1047ae(0xf7)];_0x17dec5++){if(_0xd0233a[_0x17dec5][_0x1047ae(0x104)]==_0x42e51a)return _0xd0233a[_0x17dec5][_0x1047ae(0x100)];}return null;}function changeActivityStatus(){var _0x453a7e=a0_0x5aff7b,_0x4d0373=$[_0x453a7e(0x11f)](_0x453a7e(0xa0));if(confirm(_0x453a7e(0x73))){var _0x2e57bb=_0x453a7e(0x99),_0x3be657=titanForWork[_0x453a7e(0x9e)](_0x453a7e(0x127))+_0x453a7e(0x7b)+_0x2e57bb+_0x453a7e(0x9f)+_0x4d0373+')';$[_0x453a7e(0xb0)]({'url':_0x3be657,'type':_0x453a7e(0xff),'async':![],'data':JSON[_0x453a7e(0xe1)]({'__metadata':{'type':_0x453a7e(0x110)},'ApprovalStatus':_0x453a7e(0xc5),'ApprovarName':_spPageContextInfo[_0x453a7e(0xf8)],'Active':![]}),'headers':{'accept':_0x453a7e(0x113),'X-RequestDigest':$(_0x453a7e(0x81))[_0x453a7e(0x123)](),'content-Type':_0x453a7e(0x113),'X-Http-Method':_0x453a7e(0x101),'If-Match':'*'},'success':function(_0x32d434,_0x127d3d,_0xede42){var _0x15a2b2=_0x453a7e;alert('Suggestion\x20deleted\x20successfully.'),window[_0x15a2b2(0xcf)][_0x15a2b2(0xd8)]($[_0x15a2b2(0x11f)](_0x15a2b2(0x8e)));},'error':function(_0x8c9ae7){var _0x490c58=_0x453a7e;console[_0x490c58(0xb7)](_0x8c9ae7);}});}}