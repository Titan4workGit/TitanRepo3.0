function a0_0x1e05(){var _0x412b78=['\x27)/startupload(uploadId=guid\x27','File\x20uploaded\x20successfully.','value','ListItemAllFields','application/json;\x20odata=verbose','format','Error\x20uploading\x20chunk:\x20','369rUoIqr','stringify','replace','#getFile','file\x20uploaded\x20and\x20updated','name','FileReader','158hoxhja','innerHTML','DemoLibrary','random','\x27,\x20overwrite=true)','/_api/web/GetFolderByServerRelativeUrl(\x27','Upload\x20failed','result','\x27)/Files/Add(url=\x27','reject','This\x20browser\x20does\x20not\x20support\x20the\x20FileReader\x20API.','application/json;odata=verbose','\x27,\x20overwrite=true)?@target=new&contentclass=STS_ListItem_DocumentLibrary','onloadend','__deferred','split','2870TALqdP','?@target=\x27{0}\x27','Uploading...\x20','#displayName','12WVTrRJ','getElementById','setRequestHeader','files','_api/sp.appcontextsite(@target)/web','X-File-Chunk','parse','9577315jYFaDo','onerror','target','ceil','Error\x20completing\x20upload:\x20','12oXKZkR','25958268WTtOKE','\x27)/finishupload(uploadId=guid\x27','open','floor','?@target=\x27{1}\x27','\x27,\x20fileOffset=','URL','siteServerRelativeUrl','Upload\x20ID:\x20','length','__REQUESTDIGEST','xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx','_api/Web','126612gYAVTW','Accept','948570LnpHBn','Deferred','send','X-File-Type','/_api/web/getfilebyserverrelativeurl(\x27','round','use\x20strict','val','/add(overwrite=true,\x20url=\x27{2}\x27)?@target=\x27{3}\x27','responseText','298495BhcAGa','ajax','log','toString','&amp;','UploadId','type','byteLength','MERGE','fileInput','onload','webAbsoluteUrl','Chunk\x20uploaded\x20successfully.','bytes\x20','{0}','min','3204czIsGy','#__REQUESTDIGEST','POST','X-RequestDigest','done','Upload\x20complete','\x27,\x20overwrite=true)?&contentclass=STS_ListItem_DocumentLibrary&uploadId=','resolve','readAsArrayBuffer','?@target=\x27','Error\x20uploading\x20file:\x20','slice','Content-Type','progressLabel','size','Content-Range','ready','56Dakvrc','\x27)/continueupload(uploadId=guid\x27','fail'];a0_0x1e05=function(){return _0x412b78;};return a0_0x1e05();}var a0_0x27f7d7=a0_0x230f;(function(_0x54e499,_0x13ae84){var _0x22426b=a0_0x230f,_0x5c7355=_0x54e499();while(!![]){try{var _0x13bc60=-parseInt(_0x22426b(0x11d))/0x1*(-parseInt(_0x22426b(0xd3))/0x2)+-parseInt(_0x22426b(0x101))/0x3*(-parseInt(_0x22426b(0xe7))/0x4)+parseInt(_0x22426b(0x10d))/0x5*(-parseInt(_0x22426b(0xf3))/0x6)+parseInt(_0x22426b(0x103))/0x7*(-parseInt(_0x22426b(0xc2))/0x8)+parseInt(_0x22426b(0xcc))/0x9*(-parseInt(_0x22426b(0xe3))/0xa)+-parseInt(_0x22426b(0xee))/0xb+parseInt(_0x22426b(0xf4))/0xc;if(_0x13bc60===_0x13ae84)break;else _0x5c7355['push'](_0x5c7355['shift']());}catch(_0x4d52b9){_0x5c7355['push'](_0x5c7355['shift']());}}}(a0_0x1e05,0x90a85));var libraryName=a0_0x27f7d7(0xd5),fileName='',fileSize=0x0,chunkSize=0xa00000,totalChunks=0x0,currentChunk=0x0,uploadId='',fileBuffer=null;function a0_0x230f(_0x2145b6,_0xa56e06){var _0x1e0553=a0_0x1e05();return a0_0x230f=function(_0x230f2c,_0x1264f1){_0x230f2c=_0x230f2c-0xc1;var _0x532503=_0x1e0553[_0x230f2c];return _0x532503;},a0_0x230f(_0x2145b6,_0xa56e06);}function uploadFileew(){var _0x39feda=a0_0x27f7d7,_0x5b82ac=document[_0x39feda(0xe8)](_0x39feda(0x116)),_0x2bcc7a=_0x5b82ac[_0x39feda(0xea)][0x0];fileName=_0x2bcc7a[_0x39feda(0xd1)],fileSize=_0x2bcc7a[_0x39feda(0x12b)],totalChunks=Math['ceil'](fileSize/chunkSize),currentChunk=0x0,uploadId=generateGuid();var _0x37ec6c=new FileReader();_0x37ec6c[_0x39feda(0x117)]=function(){var _0x83e9b3=_0x39feda;fileBuffer=_0x37ec6c[_0x83e9b3(0xda)],startUpload();},_0x37ec6c[_0x39feda(0x125)](_0x2bcc7a);}function startUpload(){var _0x4ae55e=a0_0x27f7d7;if(currentChunk<totalChunks){var _0x32e248=currentChunk*chunkSize,_0x13bb73=Math[_0x4ae55e(0x11c)](_0x32e248+chunkSize,fileSize),_0x12ce6d=new Blob([fileBuffer[_0x4ae55e(0x128)](_0x32e248,_0x13bb73)]),_0x18b943=new XMLHttpRequest();_0x18b943['open']('POST',_spPageContextInfo[_0x4ae55e(0x118)]+_0x4ae55e(0xd8)+libraryName+_0x4ae55e(0xdb)+fileName+_0x4ae55e(0xdf)),_0x18b943['setRequestHeader'](_0x4ae55e(0x102),_0x4ae55e(0xde)),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0x120),document[_0x4ae55e(0xe8)](_0x4ae55e(0xfe))[_0x4ae55e(0xc7)]),_0x18b943[_0x4ae55e(0xe9)]('X-File-Name',fileName),_0x18b943[_0x4ae55e(0xe9)]('X-File-Size',fileSize),_0x18b943['setRequestHeader'](_0x4ae55e(0x106),_0x12ce6d[_0x4ae55e(0x113)]),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0xec),currentChunk),_0x18b943['setRequestHeader']('X-File-Total-Chunks',totalChunks),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0x12c),_0x4ae55e(0x11a)+_0x32e248+'-'+(_0x13bb73-0x1)+'/'+fileSize),_0x18b943[_0x4ae55e(0x117)]=function(){var _0x568953=_0x4ae55e,_0x3a0879=JSON[_0x568953(0xed)](_0x18b943['responseText']);uploadId=_0x3a0879[_0x568953(0x112)],currentChunk++;var _0x2d4672=Math[_0x568953(0x108)](currentChunk/totalChunks*0x64);document[_0x568953(0xe8)]('progressBar')[_0x568953(0xc7)]=_0x2d4672,document[_0x568953(0xe8)](_0x568953(0x12a))[_0x568953(0xd4)]=_0x568953(0xe5)+_0x2d4672+'%',startUpload();},_0x18b943[_0x4ae55e(0xef)]=function(){alert('Upload\x20failed');},_0x18b943[_0x4ae55e(0x105)](_0x12ce6d);}else{var _0x18b943=new XMLHttpRequest();_0x18b943[_0x4ae55e(0xf6)](_0x4ae55e(0x11f),_spPageContextInfo[_0x4ae55e(0x118)]+'/_api/web/GetFolderByServerRelativeUrl(\x27'+libraryName+_0x4ae55e(0xdb)+fileName+_0x4ae55e(0x123)+uploadId),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0x102),_0x4ae55e(0xde)),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0x120),document[_0x4ae55e(0xe8)](_0x4ae55e(0xfe))[_0x4ae55e(0xc7)]),_0x18b943[_0x4ae55e(0xe9)](_0x4ae55e(0x129),'application/json;odata=verbose'),_0x18b943[_0x4ae55e(0x117)]=function(){var _0x3d31d1=_0x4ae55e,_0x216c40=JSON[_0x3d31d1(0xed)](_0x18b943[_0x3d31d1(0x10c)]);document[_0x3d31d1(0xe8)](_0x3d31d1(0x12a))[_0x3d31d1(0xd4)]=_0x3d31d1(0x122);},_0x18b943[_0x4ae55e(0xef)]=function(){var _0x14ec29=_0x4ae55e;alert(_0x14ec29(0xd9));},_0x18b943[_0x4ae55e(0x105)]();}}a0_0x27f7d7(0x109);var appWebUrl,hostWebUrl;jQuery(document)[a0_0x27f7d7(0xc1)](function(){var _0x34ac7e=a0_0x27f7d7;!window[_0x34ac7e(0xd2)]&&alert(_0x34ac7e(0xdd));});function uploadFilessse(){var _0x5a6b23=a0_0x27f7d7,_0x375ce9='shared\x20documents',_0x145743=jQuery(_0x5a6b23(0xcf)),_0x5b4271=jQuery(_0x5a6b23(0xe6))['val'](),_0x538279=_0x289da8();_0x538279[_0x5a6b23(0x121)](function(_0x1eb742){var _0x2c4ed2=_0x5a6b23,_0x5f1f3e=_0x49e063(_0x1eb742);_0x5f1f3e[_0x2c4ed2(0x121)](function(_0x3cb568,_0x5cce79,_0x531fde){var _0x20feb2=_0x2c4ed2,_0x15ac8a=_0x373fb9(_0x3cb568['d'][_0x20feb2(0xc8)][_0x20feb2(0xe1)]['uri']);_0x15ac8a[_0x20feb2(0x121)](function(_0x5cbe02,_0x17b0e5,_0x1bda4a){var _0x134518=_0x20feb2,_0x397f16=_0x113b69(_0x5cbe02['d']['__metadata']);_0x397f16[_0x134518(0x121)](function(_0x53c077,_0x1b96fd,_0x2af58c){var _0x460358=_0x134518;alert(_0x460358(0xd0));}),_0x397f16[_0x134518(0xc4)](onError);}),_0x15ac8a[_0x20feb2(0xc4)](onError);}),_0x5f1f3e['fail'](onError);}),_0x538279[_0x5a6b23(0xc4)](onError);function _0x289da8(){var _0x1a2a50=_0x5a6b23,_0x38091=jQuery[_0x1a2a50(0x104)](),_0x45c1d8=new FileReader();return _0x45c1d8[_0x1a2a50(0xe0)]=function(_0x382494){var _0x60446e=_0x1a2a50;_0x38091[_0x60446e(0x124)](_0x382494[_0x60446e(0xf0)][_0x60446e(0xda)]);},_0x45c1d8['onerror']=function(_0x684265){var _0x43ff5d=_0x1a2a50;_0x38091[_0x43ff5d(0xdc)](_0x684265[_0x43ff5d(0xf0)]['error']);},_0x45c1d8[_0x1a2a50(0x125)](_0x145743[0x0][_0x1a2a50(0xea)][0x0]),_0x38091['promise']();}function _0x49e063(_0x442368){var _0x1ad6b5=_0x5a6b23,_0x2a0cb0=_0x145743[0x0][_0x1ad6b5(0xc7)][_0x1ad6b5(0xe2)]('\x5c'),_0x4c03df=_0x2a0cb0[_0x2a0cb0[_0x1ad6b5(0xfd)]-0x1],_0x4722b4=String[_0x1ad6b5(0xca)]('{0}/_api/sp.appcontextsite(@target)/web/getfolderbyserverrelativeurl(\x27{1}\x27)/files'+_0x1ad6b5(0x10b),appWebUrl,_0x375ce9,_0x4c03df,hostWebUrl);return jQuery[_0x1ad6b5(0x10e)]({'url':_0x4722b4,'type':'POST','data':_0x442368,'processData':![],'headers':{'accept':_0x1ad6b5(0xde),'X-RequestDigest':jQuery(_0x1ad6b5(0x11e))[_0x1ad6b5(0x10a)](),'content-length':_0x442368[_0x1ad6b5(0x114)]}});}function _0x373fb9(_0x50af03){var _0x56afd6=_0x5a6b23;_0x50af03=_0x50af03[_0x56afd6(0xce)](hostWebUrl,_0x56afd6(0x11b)),_0x50af03=_0x50af03[_0x56afd6(0xce)]('_api/Web','_api/sp.appcontextsite(@target)/web');var _0x598cbd=String[_0x56afd6(0xca)](_0x50af03+_0x56afd6(0xf8),appWebUrl,hostWebUrl);return jQuery['ajax']({'url':_0x598cbd,'type':'GET','headers':{'accept':_0x56afd6(0xde)}});}function _0x113b69(_0xc84233){var _0x17ad59=_0x5a6b23,_0x1c357a=_0xc84233['uri'][_0x17ad59(0xce)](_0x17ad59(0x100),_0x17ad59(0xeb)),_0x490f57=String[_0x17ad59(0xca)](_0x1c357a+_0x17ad59(0xe4),hostWebUrl),_0x1e9fe9=String[_0x17ad59(0xca)]('{{\x27__metadata\x27:{{\x27type\x27:\x27{0}\x27}},\x27FileLeafRef\x27:\x27{1}\x27,\x27Title\x27:\x27{2}\x27}}',_0xc84233[_0x17ad59(0x113)],_0x5b4271,_0x5b4271);return jQuery['ajax']({'url':_0x490f57,'type':_0x17ad59(0x11f),'data':_0x1e9fe9,'headers':{'X-RequestDigest':jQuery(_0x17ad59(0x11e))[_0x17ad59(0x10a)](),'content-type':_0x17ad59(0xde),'content-length':_0x1e9fe9[_0x17ad59(0xfd)],'IF-MATCH':_0xc84233['etag'],'X-HTTP-Method':_0x17ad59(0x115)}});}}function onError(_0x36be42){var _0x4d848e=a0_0x27f7d7;alert(_0x36be42[_0x4d848e(0x10c)]);}function getQueryStringParameter(_0x215a12){var _0x475d26=a0_0x27f7d7,_0x31c739=document[_0x475d26(0xfa)][_0x475d26(0xe2)]('?')[0x1]['split'](_0x475d26(0x111));for(var _0x1c9cf4=0x0;_0x1c9cf4<_0x31c739[_0x475d26(0xfd)];_0x1c9cf4=_0x1c9cf4+0x1){var _0xf0e51e=_0x31c739[_0x1c9cf4]['split']('=');if(_0xf0e51e[0x0]==_0x215a12)return _0xf0e51e[0x1];}}function uploadFileToSharePoint(_0x54da3d,_0x4f9962){var _0x560688=a0_0x27f7d7,_0x342749=_spPageContextInfo[_0x560688(0x118)],_0x1a349a=_0x342749+'/_api/web/GetFolderByServerRelativeUrl(\x27'+_0x4f9962+_0x560688(0xdb)+_0x54da3d[_0x560688(0xd1)]+_0x560688(0xd7);$[_0x560688(0x10e)]({'url':_0x1a349a+_0x560688(0x126)+_0x54da3d[_0x560688(0xd1)]+'\x27','type':_0x560688(0x11f),'headers':{'Accept':_0x560688(0xc9),'X-RequestDigest':$('#__REQUESTDIGEST')['val'](),'Content-Length':0x0},'success':function(_0x5af72b){var _0x3d8158=_0x560688,_0x48a680=_0x5af72b['d']['UniqueId'];console[_0x3d8158(0x10f)](_0x3d8158(0xfc)+_0x48a680),continueUpload(_0x48a680,_0x54da3d);},'error':function(_0x4ddc1a){var _0x1f62d8=_0x560688;console[_0x1f62d8(0x10f)](JSON['stringify'](_0x4ddc1a));}});}function continueUpload(_0x4b27a1,_0xf81f4b){var _0x1c64f9=a0_0x27f7d7,_0x244721=_spPageContextInfo[_0x1c64f9(0x118)],_0x550f7a=_0x244721+'/_api/web/getfilebyserverrelativeurl(\x27/'+_0xf81f4b[_0x1c64f9(0xd1)]+_0x1c64f9(0xc5)+_0x4b27a1+'\x27)',_0x3ccb30=0x100000,_0x578446=0x0,_0x39e7cb=_0xf81f4b['size'];while(_0x578446<_0x39e7cb){var _0x543fbb=_0xf81f4b['slice'](_0x578446,_0x578446+_0x3ccb30);$[_0x1c64f9(0x10e)]({'url':_0x550f7a,'type':_0x1c64f9(0x11f),'processData':![],'contentType':![],'headers':{'Accept':_0x1c64f9(0xc9),'X-RequestDigest':$(_0x1c64f9(0x11e))[_0x1c64f9(0x10a)](),'Content-Range':_0x1c64f9(0x11a)+_0x578446+'-'+(_0x578446+_0x543fbb['size']-0x1)+'/'+_0x39e7cb},'data':_0x543fbb,'success':function(_0x5400cd){var _0x179c6b=_0x1c64f9;_0x578446+_0x543fbb[_0x179c6b(0x12b)]>=_0x39e7cb&&finishUpload(_0x4b27a1,_0xf81f4b);},'error':function(_0x192767){var _0x4ad922=_0x1c64f9;console[_0x4ad922(0x10f)](JSON['stringify'](_0x192767));}}),_0x578446+=_0x3ccb30;}}function finishUpload(_0x497335,_0x57e710){var _0x3a034f=a0_0x27f7d7,_0x21da91=_spPageContextInfo[_0x3a034f(0x118)],_0x245fb4=_0x21da91+'/_api/web/getfilebyserverrelativeurl(\x27/'+_0x57e710[_0x3a034f(0xd1)]+_0x3a034f(0xf5)+_0x497335+'\x27)';$[_0x3a034f(0x10e)]({'url':_0x245fb4,'type':'POST','headers':headers,'success':function(_0x476a49){},'error':function(_0x54659f){var _0x2a431e=_0x3a034f;console[_0x2a431e(0x10f)](_0x2a431e(0xf2)+JSON[_0x2a431e(0xcd)](_0x54659f));}});}function uploadFile(){var _0x58c452=a0_0x27f7d7,_0x1d028a=_spPageContextInfo[_0x58c452(0x118)],_0x41a919=document[_0x58c452(0xe8)]('fileInput'),_0x333212=_0x41a919[_0x58c452(0xea)][0x0];fileName=_0x333212['name'];var _0x3ce50c=_spPageContextInfo[_0x58c452(0xfb)]+'/DemoLibrary/'+fileName;uploadLargeFile(_0x1d028a,_0x3ce50c);}function uploadLargeFile(_0x3a7988,_0xa1ac59){var _0x3c5042=a0_0x27f7d7,_0x2f1a91=0x100000;$['ajax']({'url':_0x3a7988+_0x3c5042(0x107)+_0xa1ac59+'\x27)/startupload(uploadId=guid\x27'+generateGuid()+'\x27)','type':_0x3c5042(0x11f),'headers':{'Accept':_0x3c5042(0xc9),'X-RequestDigest':$(_0x3c5042(0x11e))[_0x3c5042(0x10a)]()},'success':function(_0x361224){var _0x4f14c7=_0x3c5042,_0x108862=generateGuid(),_0x496817=0x0,_0x2f400c=document[_0x4f14c7(0xe8)](_0x4f14c7(0x116))['files'][0x0],_0x37b3ea=_0x2f400c['size'],_0x43bbd7=Math[_0x4f14c7(0xf1)](_0x37b3ea/_0x2f1a91);for(var _0x2cba63=0x0;_0x2cba63<_0x43bbd7;_0x2cba63++){var _0x5758e0=_0x2cba63*_0x2f1a91,_0xa0fd8a=Math[_0x4f14c7(0x11c)](_0x37b3ea,_0x5758e0+_0x2f1a91),_0x222d96=_0x2f400c[_0x4f14c7(0x128)](_0x5758e0,_0xa0fd8a);uploadChunk(_0x108862,_0x222d96,_0x496817,_0x5758e0,_0xa0fd8a,_0x3a7988,_0xa1ac59),_0x496817=_0xa0fd8a;}$[_0x4f14c7(0x10e)]({'url':_0x3a7988+_0x4f14c7(0x107)+_0xa1ac59+_0x4f14c7(0xf5)+_0x108862+'\x27,\x20fileOffset='+_0x37b3ea+')','type':'POST','headers':{'Accept':_0x4f14c7(0xc9),'X-RequestDigest':$(_0x4f14c7(0x11e))['val'](),'Content-Range':'bytes\x20'+_0x37b3ea+'-'+_0x37b3ea+'/'+_0x37b3ea},'success':function(_0x2068f0){var _0x400c3c=_0x4f14c7;console[_0x400c3c(0x10f)](_0x400c3c(0xc6));},'error':function(_0x163f15){var _0x225f9e=_0x4f14c7;console['log'](_0x225f9e(0x127)+_0x163f15[_0x225f9e(0x10c)]);}});},'error':function(_0x4ee64c){var _0x86cd96=_0x3c5042;console[_0x86cd96(0x10f)]('Error\x20starting\x20upload\x20session:\x20'+_0x4ee64c[_0x86cd96(0x10c)]);}});}function uploadChunk(_0x3b37f7,_0xe2f7ea,_0x247db6,_0x210116,_0x579fe9,_0x9c8b75,_0xa3f27b){var _0x3b4953=a0_0x27f7d7;$['ajax']({'url':_0x9c8b75+_0x3b4953(0x107)+_0xa3f27b+_0x3b4953(0xc3)+_0x3b37f7+_0x3b4953(0xf9)+_0x247db6+')','type':_0x3b4953(0x11f),'data':_0xe2f7ea,'processData':![],'headers':{'Accept':_0x3b4953(0xc9),'X-RequestDigest':$(_0x3b4953(0x11e))[_0x3b4953(0x10a)](),'Content-Range':_0x3b4953(0x11a)+_0x210116+'-'+(_0x579fe9-0x1)+'/'+_0xe2f7ea[_0x3b4953(0x12b)]},'success':function(_0x1499d0){var _0x45c9dc=_0x3b4953;console[_0x45c9dc(0x10f)](_0x45c9dc(0x119));},'error':function(_0x4a8c3b){var _0x495c68=_0x3b4953;console[_0x495c68(0x10f)](_0x495c68(0xcb)+_0x4a8c3b[_0x495c68(0x10c)]);}});}function generateGuid(){var _0x953cfd=a0_0x27f7d7,_0x393ab6=new Date()['getTime'](),_0x59e1f8=_0x953cfd(0xff)[_0x953cfd(0xce)](/[xy]/g,function(_0x1c75f4){var _0x4eee26=_0x953cfd,_0x34c81c=(_0x393ab6+Math[_0x4eee26(0xd6)]()*0x10)%0x10|0x0;return _0x393ab6=Math[_0x4eee26(0xf7)](_0x393ab6/0x10),(_0x1c75f4=='x'?_0x34c81c:_0x34c81c&0x3|0x8)[_0x4eee26(0x110)](0x10);});return _0x59e1f8;}