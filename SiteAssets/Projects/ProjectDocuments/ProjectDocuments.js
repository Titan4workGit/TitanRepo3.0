var a0_0x1da5f1=a0_0x5004;(function(_0xb2842b,_0x3a600f){var _0x316296=a0_0x5004,_0x317d7c=_0xb2842b();while(!![]){try{var _0x1f0cbf=parseInt(_0x316296(0x218))/0x1+-parseInt(_0x316296(0x1f3))/0x2+parseInt(_0x316296(0x20d))/0x3*(parseInt(_0x316296(0x1e5))/0x4)+-parseInt(_0x316296(0x210))/0x5+-parseInt(_0x316296(0x227))/0x6+parseInt(_0x316296(0x223))/0x7*(parseInt(_0x316296(0x21b))/0x8)+parseInt(_0x316296(0x1e3))/0x9;if(_0x1f0cbf===_0x3a600f)break;else _0x317d7c['push'](_0x317d7c['shift']());}catch(_0x178b4f){_0x317d7c['push'](_0x317d7c['shift']());}}}(a0_0x13d9,0x350a9));var myOwnDocumentsUrl='';function a0_0x5004(_0x11fec4,_0xfe5d10){var _0x13d958=a0_0x13d9();return a0_0x5004=function(_0x5004c9,_0x79ea36){_0x5004c9=_0x5004c9-0x1e3;var _0x2ef809=_0x13d958[_0x5004c9];return _0x2ef809;},a0_0x5004(_0x11fec4,_0xfe5d10);}$(document)[a0_0x1da5f1(0x1f0)](function(){var _0x2b8133=a0_0x1da5f1;SP[_0x2b8133(0x219)][_0x2b8133(0x20b)](_0x2b8133(0x217),_0x2b8133(0x1f6),getProjectDocuments),$('.addProjectDocument')[_0x2b8133(0x21e)]();});function getProjectDocuments(){var _0x2b36b2=a0_0x1da5f1,_0x372747=new SP[(_0x2b36b2(0x214))][(_0x2b36b2(0x1e7))](),_0x22a57a=titanForWork['getQueryStringParameter'](_0x2b36b2(0x222)),_0x5af3dc=titanForWork[_0x2b36b2(0x1e6)](_0x2b36b2(0x216));_0x5af3dc>0x0&&_0x22a57a>0x0&&BindProjectDocuments(_0x2b36b2(0x20f),_0x22a57a);}function BindProjectDocuments(_0x2ecdbd,_0x706641){var _0x576681=a0_0x1da5f1,_0x2e4542=_spPageContextInfo[_0x576681(0x1e9)]+'/_api/web/lists/getbytitle(\x27'+_0x2ecdbd+_0x576681(0x1e4)+_0x706641+'\x27';$[_0x576681(0x1ee)]({'url':_0x2e4542,'headers':{'Accept':_0x576681(0x203)},'async':![],'success':function(_0x397a08){var _0x4b16a6=_0x576681,_0x586cc6=_0x397a08['d']['results'];if(_0x586cc6[_0x4b16a6(0x1f9)]>0x0){var _0x2ce2fb=_0x586cc6[0x0]['ProjectName'];_0x586cc6[0x0]['ProjectInternalName']!=null&&_0x586cc6[0x0]['ProjectInternalName']!=''&&(_0x2ce2fb=_0x586cc6[0x0][_0x4b16a6(0x1f5)]),myOwnDocumentsUrl=titanForWork[_0x4b16a6(0x1e6)](_0x4b16a6(0x204))+_0x4b16a6(0x220)+_0x2ce2fb+'/Shared%20Documents/Forms/AllItems.aspx',setTimeout(function(){var _0x3b229a=_0x4b16a6;$(_0x3b229a(0x208))['append'](_0x3b229a(0x1f7)+myOwnDocumentsUrl+_0x3b229a(0x221));},0x7d0);}},'error':function(_0x23938b){var _0x4f40a2=_0x576681;console[_0x4f40a2(0x1fb)]($(_0x4f40a2(0x1eb))['val']());}});}function DisplayProjectDocuments(_0x20f4b8,_0x307df5){var _0x509c9e=a0_0x1da5f1,_0xecb32f=_0x307df5[_0x509c9e(0x211)]()[_0x509c9e(0x1f2)]()['getByTitle'](_0x509c9e(0x206)),_0x1fdcbc=new SP['CamlQuery']();_0x1fdcbc[_0x509c9e(0x20e)](_0x509c9e(0x228));var _0x340db4=_0xecb32f[_0x509c9e(0x200)](_0x1fdcbc);_0x307df5['load'](_0x340db4),_0x307df5[_0x509c9e(0x224)](function(){var _0x1ab73c=_0x509c9e,_0x22d3b9=_0x340db4[_0x1ab73c(0x21a)](),_0x59b365='';while(_0x22d3b9[_0x1ab73c(0x226)]()){var _0x1e0237=_0x22d3b9[_0x1ab73c(0x1e7)](),_0x1dff8b=_0x1e0237[_0x1ab73c(0x21c)](_0x1ab73c(0x1ff)),_0x1f63bb=_0x20f4b8+'/Shared%20Documents/'+_0x1dff8b;_0x59b365+='<div\x20class=\x22row\x22>',_0x59b365+=_0x1ab73c(0x1fa),_0x59b365+=_0x1ab73c(0x20a)+_0x1f63bb+'\x27><h4\x20class=\x22event-text-head\x20\x22>'+_0x1dff8b+_0x1ab73c(0x225),_0x59b365+=_0x1ab73c(0x1ed);}$('#departmentalDocuments')['append'](_0x59b365);},function(){var _0x4ebdc4=_0x509c9e;console['log'](_0x4ebdc4(0x201));});}function checkDocumentPermission(){var _0x1284ea=a0_0x1da5f1,_0x1feb62=titanForWork[_0x1284ea(0x1e6)](_0x1284ea(0x216)),_0x4b8934=titanForWork[_0x1284ea(0x1e6)](_0x1284ea(0x222)),_0x250d62='ProjectDetails',_0x1feb62=titanForWork[_0x1284ea(0x1e6)](_0x1284ea(0x216));siteURL=_spPageContextInfo['webAbsoluteUrl']+_0x1284ea(0x207)+_0x250d62+'\x27)/items?$select=*&$filter=ID\x20eq\x20\x27'+_0x4b8934+'\x27\x20and\x20ManagerNameId\x20eq\x20\x27'+_spPageContextInfo['userId']+'\x27',$['ajax']({'url':siteURL,'headers':{'Accept':_0x1284ea(0x203)},'async':![],'success':function(_0x3f73b3){var _0x2ff3ab=_0x1284ea,_0x53994c=_0x3f73b3['d'][_0x2ff3ab(0x212)];_0x53994c[_0x2ff3ab(0x1f9)]>0x0?$(_0x2ff3ab(0x215))['show']():getMemberHaveDocumanePermission();},'eror':function(_0x5b81a3){var _0x1cbf1f=_0x1284ea;console[_0x1cbf1f(0x1fb)]($('#txtSomethingWentWrong')[_0x1cbf1f(0x21d)]());}});}function getMemberHaveDocumanePermission(){var _0x39c6de=a0_0x1da5f1,_0x13c38c=_0x39c6de(0x1f4),_0x32ed45=titanForWork[_0x39c6de(0x1e6)](_0x39c6de(0x222));siteURL=_spPageContextInfo[_0x39c6de(0x1e9)]+_0x39c6de(0x207)+_0x13c38c+_0x39c6de(0x20c)+_0x32ed45+_0x39c6de(0x1fe)+_spPageContextInfo[_0x39c6de(0x209)]+_0x39c6de(0x205),$['ajax']({'url':siteURL,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x17e1b5){var _0x3316a0=_0x39c6de,_0x4681b2=_0x17e1b5['d'][_0x3316a0(0x212)];_0x4681b2[_0x3316a0(0x1f9)]>0x0?$(_0x3316a0(0x215))[_0x3316a0(0x1ec)]():($('.addProjectDocument')['hide'](),CheckProjectAdminRights_ProjectDocuments());},'eror':function(_0x26999e){var _0x15d980=_0x39c6de;console[_0x15d980(0x1fb)]($(_0x15d980(0x1eb))[_0x15d980(0x21d)]());}});}function CheckProjectAdminRights_ProjectDocuments(){var _0x40ba89=a0_0x1da5f1,_0x85d42b=$[_0x40ba89(0x202)](),_0x50aacb=_0x40ba89(0x1ef),_0x12d99d=titanForWork[_0x40ba89(0x1e6)]('CompanyId'),_0x17d54a=_spPageContextInfo[_0x40ba89(0x1e9)]+'/_api/web/lists/getbytitle(\x27'+_0x50aacb+_0x40ba89(0x1ea)+_0x12d99d+'\x27\x20and\x20ContributorsId\x20eq\x20\x27'+_spPageContextInfo['userId']+'\x27\x20and\x20WebPartName\x20eq\x20\x27Project\x20Admin\x27';$['ajax']({'url':_0x17d54a,'headers':{'Accept':_0x40ba89(0x203)},'async':!![],'success':function(_0x1c6499){var _0x3344fa=_0x40ba89,_0x1822b5=_0x1c6499['d'][_0x3344fa(0x212)];_0x1822b5['length']>0x0&&$('.addProjectDocument')['show']();},'eror':function(_0x8219c7){var _0x222bd8=_0x40ba89;console[_0x222bd8(0x1fb)]($(_0x222bd8(0x1eb))[_0x222bd8(0x21d)]());}}),_0x85d42b[_0x40ba89(0x1f8)]();}$(document)[a0_0x1da5f1(0x1f0)](function(){var _0x4cd20c=a0_0x1da5f1;$(_0x4cd20c(0x213))['click'](function(){var _0x58a7b1=_0x4cd20c;$(_0x58a7b1(0x208))[_0x58a7b1(0x1e8)](''),$(_0x58a7b1(0x208))[_0x58a7b1(0x1fc)](_0x58a7b1(0x1f7)+myOwnDocumentsUrl+_0x58a7b1(0x221));}),$(_0x4cd20c(0x21f))['click'](function(){var _0x163998=_0x4cd20c;window[_0x163998(0x1f1)](myOwnDocumentsUrl,_0x163998(0x1fd));});});function a0_0x13d9(){var _0x40b442=['application/json;odata=verbose','CompanySiteUrl','\x27\x20and\x20Status\x20eq\x20\x27Active\x27\x20and\x20DocumentPermission\x20eq\x20\x271\x27','Documents','/_api/web/lists/getbytitle(\x27','#myDocumentsIframe','userId','<a\x20class=\x22uploaded-doc-title\x22\x20target=\x22_blank\x22\x20href=\x27','executeFunc','\x27)/items?$select=*&$filter=ProjectId\x20eq\x20\x27','3xjRUux','set_viewXml','ProjectDetails','1015485MhAeFs','get_web','results','#btnMyDOcumentReload','ClientContext','.addProjectDocument','CompanyId','sp.js','387659ASvXOG','SOD','getEnumerator','2054392iMgWAU','get_item','val','hide','#btnFullViewMyDocumens','/DMS/','\x22></iframe>','ProjectID','7gUJBYR','executeQueryAsync','</h4></a>','moveNext','1678902GrUDjN','<View><Query><OrderBy><FieldRef\x20Name=\x22ID\x22\x20Ascending=\x22FALSE\x22\x20/></OrderBy></Query><RowLimit>6</RowLimit></View>','98937WMckLC','\x27)/items?$select=ID,ProjectName,ProjectSiteURL,ProjectInternalName&$filter=ID\x20eq\x20\x27','1703516ARrajE','getQueryStringParameter','get_current','html','webAbsoluteUrl','\x27)/items?$select=*&$filter=CompanyId\x20eq\x20\x27','#txtSomethingWentWrong','show','</div></div>','ajax','ProcessApprovers','ready','open','get_lists','762318OHNKHw','ProjectTeamDetails','ProjectInternalName','SP.ClientContext','<iframe\x20width=\x22100%\x22\x20id=\x22viewMyDocuments\x22\x20style=\x22min-height:500px;\x22\x20src=\x22','promise','length','<div\x20class=\x22col-md-12\x22>','log','append','_blank','\x27\x20and\x20TeamMemberId\x20eq\x20\x27','FileLeafRef','getItems','Documents\x20:\x20Something\x20went\x20wrong','Deferred'];a0_0x13d9=function(){return _0x40b442;};return a0_0x13d9();}