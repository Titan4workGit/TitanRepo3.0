var a0_0x528a4e=a0_0x4557;(function(_0x2a06ee,_0x122538){var _0x5f2ac8=a0_0x4557,_0x107247=_0x2a06ee();while(!![]){try{var _0xcc2d9e=parseInt(_0x5f2ac8(0x1de))/0x1*(parseInt(_0x5f2ac8(0x1cd))/0x2)+parseInt(_0x5f2ac8(0x1dc))/0x3+-parseInt(_0x5f2ac8(0x1f2))/0x4*(-parseInt(_0x5f2ac8(0x1e7))/0x5)+-parseInt(_0x5f2ac8(0x1f5))/0x6*(parseInt(_0x5f2ac8(0x1ca))/0x7)+parseInt(_0x5f2ac8(0x1cf))/0x8+parseInt(_0x5f2ac8(0x1eb))/0x9*(-parseInt(_0x5f2ac8(0x1e1))/0xa)+parseInt(_0x5f2ac8(0x1c7))/0xb*(parseInt(_0x5f2ac8(0x1ec))/0xc);if(_0xcc2d9e===_0x122538)break;else _0x107247['push'](_0x107247['shift']());}catch(_0x267355){_0x107247['push'](_0x107247['shift']());}}}(a0_0x3917,0xdd1a7));var viewer;const CLIENT_ID='bBUBO3wtnwPNYg6AeAtrIFDbMIcsGTt0',CLIENT_SECRET=a0_0x528a4e(0x1e6),ACCESS_TOKEN_ENDPOINT='https://developer.api.autodesk.com/authentication/v1/authenticate';var YOUR_ACCESS_TOKEN='',siteUrl=_spPageContextInfo[a0_0x528a4e(0x1fe)];function getAccessToken(){var _0x2aeacf=a0_0x528a4e;$[_0x2aeacf(0x1f4)]({'url':ACCESS_TOKEN_ENDPOINT,'type':_0x2aeacf(0x1d5),'async':![],'data':{'client_id':CLIENT_ID,'client_secret':CLIENT_SECRET,'grant_type':_0x2aeacf(0x1fd),'scope':'data:read'},'success':function(_0x149b04){var _0x199fc6=_0x2aeacf;const _0x204aad=_0x149b04[_0x199fc6(0x1e9)];YOUR_ACCESS_TOKEN=_0x204aad;},'error':function(_0x2ba2ad,_0x4be514,_0x278be3){var _0x5e2a2f=_0x2aeacf;console[_0x5e2a2f(0x1d7)](_0x278be3);}});}var context,web,fileUrl=a0_0x528a4e(0x1cb),fileContents,clientId='bBUBO3wtnwPNYg6AeAtrIFDbMIcsGTt0',clientSecret=a0_0x528a4e(0x1e6),bucketName='test1';SP[a0_0x528a4e(0x1d2)][a0_0x528a4e(0x1c8)](a0_0x528a4e(0x1e5),'SP.ClientContext',function(){var _0x5d3aee=a0_0x528a4e,_0x1b3a8f=new XMLHttpRequest();_0x1b3a8f[_0x5d3aee(0x1ff)]('GET',siteUrl+_0x5d3aee(0x1d1)+fileUrl+_0x5d3aee(0x1e8),!![]),_0x1b3a8f['setRequestHeader'](_0x5d3aee(0x1f9),_0x5d3aee(0x1f8)),_0x1b3a8f[_0x5d3aee(0x1f0)]='arraybuffer',_0x1b3a8f['onload']=function(){file=_0x1b3a8f['response'];},_0x1b3a8f[_0x5d3aee(0x1da)](),getAccessTokens();});function getAccessTokens(){var _0x25af9b=a0_0x528a4e;$[_0x25af9b(0x1f4)]({'url':_0x25af9b(0x1cc),'type':_0x25af9b(0x1d5),'headers':{'Content-Type':'application/x-www-form-urlencoded'},'data':{'client_id':clientId,'client_secret':clientSecret,'grant_type':'client_credentials','scope':'data:read\x20data:write\x20data:create\x20bucket:create'},'success':function(_0x1d5964){var _0x10f2a1=_0x25af9b,_0x3513b8=_0x1d5964['access_token'];debugger;uploadFileToForge(file,_0x3513b8,bucketName)[_0x10f2a1(0x1d6)](function(_0x20422c){displayFileInViewer(_0x20422c,_0x3513b8);})[_0x10f2a1(0x1d8)](function(_0x2ed0b9){var _0x2abb52=_0x10f2a1;console[_0x2abb52(0x1d7)](_0x2abb52(0x1d3),_0x2ed0b9);});},'error':function(_0x4375ec){var _0x1276d7=_0x25af9b;console[_0x1276d7(0x1d7)](_0x1276d7(0x1e0),_0x4375ec);}});}function getFileFromSharePoint(_0x26b4d1){var _0x1e8d16=a0_0x528a4e,_0x165316=web[_0x1e8d16(0x1db)](_0x26b4d1),_0x57a183=_0x165316[_0x1e8d16(0x1fc)]();return _0x57a183;}function uploadFileToForge(_0xbd720,_0x150424,_0x4df9c8){return new Promise(function(_0x410440,_0x20dbb6){var _0x24b6b4=a0_0x4557;$['ajax']({'url':'https://developer.api.autodesk.com/oss/v2/buckets/'+_0x4df9c8+_0x24b6b4(0x1ea)+fileUrl,'type':'PUT','headers':{'Authorization':_0x24b6b4(0x1dd)+_0x150424,'Content-Type':'application/octet-stream','x-ms-blob-type':_0x24b6b4(0x1e2)},'data':_0xbd720,'processData':![],'success':function(_0x4c5a14){var _0x1f1aea=_0x24b6b4,_0x514e9a=_0x4c5a14[_0x1f1aea(0x1ce)][_0x1f1aea(0x1f1)]();_0x410440(_0x514e9a);},'error':function(_0x25abb3){_0x20dbb6(_0x25abb3);}});});}function displayFileInViewer(_0x504d7b,_0x5665c7){var _0x457060=a0_0x528a4e,_0x1853fb=new Autodesk[(_0x457060(0x1fb))][(_0x457060(0x1d4))][(_0x457060(0x1c9))](document[_0x457060(0x1f6)](_0x457060(0x1e3))),_0x56b379={'env':_0x457060(0x1ed),'accessToken':_0x5665c7};Autodesk[_0x457060(0x1fb)]['Initializer'](_0x56b379,function(){var _0x39fefe=_0x457060;_0x1853fb[_0x39fefe(0x1fa)]();var _0x417e75='urn:'+_0x504d7b;Autodesk[_0x39fefe(0x1fb)][_0x39fefe(0x1ee)][_0x39fefe(0x1d9)](_0x417e75,function(_0x2337ce){var _0x59a542=_0x39fefe,_0x1d5954=_0x2337ce[_0x59a542(0x1e4)]()[_0x59a542(0x1f7)]();_0x1853fb[_0x59a542(0x1df)](_0x2337ce,_0x1d5954);},function(_0x482788){var _0x1ba1d1=_0x39fefe;console[_0x1ba1d1(0x1d7)](_0x1ba1d1(0x1d0),_0x482788);});});}function a0_0x4557(_0x24e1c8,_0x5b9fa2){var _0x391771=a0_0x3917();return a0_0x4557=function(_0x45578b,_0x6e89a0){_0x45578b=_0x45578b-0x1c7;var _0x5807cc=_0x391771[_0x45578b];return _0x5807cc;},a0_0x4557(_0x24e1c8,_0x5b9fa2);}function createBucket(_0x15c675,_0x1edbd4){return new Promise(function(_0x2c4465,_0x4fa17b){var _0x3fbefa=a0_0x4557;$[_0x3fbefa(0x1f4)]({'url':_0x3fbefa(0x1f3),'type':_0x3fbefa(0x1d5),'headers':{'Authorization':_0x3fbefa(0x1dd)+_0x1edbd4,'Content-Type':'application/json'},'data':JSON[_0x3fbefa(0x1ef)]({'bucketKey':_0x15c675,'policyKey':'transient'}),'success':function(_0x320983){_0x2c4465();},'error':function(_0x582c8c){_0x4fa17b(_0x582c8c);}});});}function a0_0x3917(){var _0x52eae4=['Document','stringify','responseType','toBase64','2289548dXJucg','https://developer.api.autodesk.com/oss/v2/buckets','ajax','6tmTSlW','getElementById','getDefaultGeometry','application/octet-stream','Accept','start','Viewing','openBinaryStream','client_credentials','webAbsoluteUrl','open','187qVWcKT','executeFunc','GuiViewer3D','6218366HyJlLZ','/sites/Titan_2_2_1_DEV/DemoLibrary/1343939490.dwg','https://developer.api.autodesk.com/authentication/v1/authenticate','133842KfhLqP','objectId','2778672XpShmu','Error\x20loading\x20document:','/_api/web/GetFileByServerRelativeUrl(\x27','SOD','Error\x20uploading\x20file:','Private','POST','then','error','catch','load','send','getFileByServerRelativeUrl','4937718YOsPsd','Bearer\x20','3mRmWDQ','loadDocumentNode','Error\x20obtaining\x20access\x20token:','110pBYxVe','BlockBlob','viewer','getRoot','sp.js','R0cGGyke0Pv0sKMw','5RcOaft','\x27)/$value','access_token','/objects/','1138428GeisGb','295764wQUetv','AutodeskProduction'];a0_0x3917=function(){return _0x52eae4;};return a0_0x3917();}