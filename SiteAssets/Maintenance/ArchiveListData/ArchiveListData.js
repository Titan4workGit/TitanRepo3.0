var a0_0x232f41=a0_0x2cca;function a0_0x2cca(_0xa93d60,_0x4f02df){var _0x4291cf=a0_0x4291();return a0_0x2cca=function(_0x2ccaa8,_0x2f13bd){_0x2ccaa8=_0x2ccaa8-0x9c;var _0x5a35ca=_0x4291cf[_0x2ccaa8];return _0x5a35ca;},a0_0x2cca(_0xa93d60,_0x4f02df);}(function(_0x412760,_0x523b9e){var _0x32167b=a0_0x2cca,_0x33d87f=_0x412760();while(!![]){try{var _0x464f2e=parseInt(_0x32167b(0xb8))/0x1+parseInt(_0x32167b(0xa4))/0x2*(-parseInt(_0x32167b(0xae))/0x3)+-parseInt(_0x32167b(0xb6))/0x4*(-parseInt(_0x32167b(0xa0))/0x5)+-parseInt(_0x32167b(0xbb))/0x6*(parseInt(_0x32167b(0xd3))/0x7)+parseInt(_0x32167b(0xc5))/0x8+-parseInt(_0x32167b(0xad))/0x9+-parseInt(_0x32167b(0xc6))/0xa*(-parseInt(_0x32167b(0xd0))/0xb);if(_0x464f2e===_0x523b9e)break;else _0x33d87f['push'](_0x33d87f['shift']());}catch(_0x847379){_0x33d87f['push'](_0x33d87f['shift']());}}}(a0_0x4291,0xe6e3e));var listName=a0_0x232f41(0xbf),dlgTitle='Generating\x20excelsheet...',dlgMsg=a0_0x232f41(0x9d),dlgHeight=0xc8,dlgWidth=0x190,arrData=[],currentDlg='',dataQuery=_spPageContextInfo[a0_0x232f41(0xc2)]+'/_api/web/lists/getbytitle(\x27NotificationCenter\x27)/items?$Select=EnterDate,Environment,Title,UserAction,WebpartName,UserID/Title,DepartmentId/Title,CompanyId/Title,Details,Modified&$expand=CompanyId/Title,DepartmentId/Title,UserID/Title&$top=5000';$(a0_0x232f41(0xcc))[a0_0x232f41(0x9f)](function(){var _0xb15732=a0_0x232f41;GetItemObject(dataQuery),$(_0xb15732(0xa9))[_0xb15732(0xa5)](function(){var _0x5692c4=_0xb15732;currentDlg=SP['UI'][_0x5692c4(0xb3)][_0x5692c4(0xcd)](dlgTitle,dlgMsg,dlgHeight,dlgWidth),bindTable();}),SetCalendar();});function bindEvent(){setTimeout(function(){bindTable();},0x64);}function a0_0x4291(){var _0x2baeff=['__next','getDate','</td><td>','ModalDialog','MM\x20dd,yy','UserAction','4thfYgg','csv','965514dIPcya','ajax','results','1660146bWsmaD','tableExport','CompanyId','dd/mm/yy','NotificationCenter','Environment','-48m','webAbsoluteUrl','getMonth','AppVersion','791056ImnOoZ','1060qBWoor','change','concat','#txtDate','close','%</td></tr>','document','showWaitScreenWithNoClose','formatDate','empty','148159wGScUa','#tblArchibeListData','length','21VaSkVH','EnterDate','<br\x20/>Please\x20wait!!','UserID','ready','4068005ckkwdU','getFullYear','datepicker','Details','4HieDnZ','click','<tr><td>','Title','append','#btnArchiveData','getTime','setDate','split','3623220dGnUvN','1690998yemxqb','WebpartName'];a0_0x4291=function(){return _0x2baeff;};return a0_0x4291();}function ConvertDateTimeFormat(_0x439f6d,_0x132f1d){var _0x299af6=a0_0x232f41;return _0x439f6d[_0x299af6(0xac)](_0x132f1d)[0x1]+''+_0x132f1d+''+_0x439f6d[_0x299af6(0xac)](_0x132f1d)[0x0]+''+_0x132f1d+''+_0x439f6d[_0x299af6(0xac)](_0x132f1d)[0x2];}function SetCalendar(){var _0x2bf2df=a0_0x232f41,_0x370ecd=new Date();today=_0x370ecd[_0x2bf2df(0xc3)]()+0x1+'\x20'+_0x370ecd['getDate']()+'\x20'+_0x370ecd['getFullYear'](),Validdate=_0x370ecd[_0x2bf2df(0xc3)]()+0x1+'\x20'+_0x370ecd[_0x2bf2df(0xb1)]()+'\x20'+(_0x370ecd[_0x2bf2df(0xa1)]()+0x1),$(_0x2bf2df(0xc9))[_0x2bf2df(0xa2)]({'defaultDate':0x0,'minDate':_0x2bf2df(0xc1),'maxDate':0x0,'dateFormat':_0x2bf2df(0xbe)})[_0x2bf2df(0xa2)](_0x2bf2df(0xab),new Date()),$(_0x2bf2df(0xc9))[_0x2bf2df(0xc7)](function(){var _0x4cd2ba=_0x2bf2df,_0x22c8d8=$(_0x4cd2ba(0xc9))[_0x4cd2ba(0xa2)](_0x4cd2ba(0xb1)),_0xbf4f70=Math['ceil']((_0x22c8d8[_0x4cd2ba(0xaa)]()-Date['parse'](today))/0x5265c00),_0x1d76b6=_0xbf4f70+0xa+'m';_0xbf4f70=_0xbf4f70+'d';});}function bindTable(){var _0x2428fb=a0_0x232f41;itemObjectLen=arrData[_0x2428fb(0xd2)];var _0x2b2015='',_0x2d1faa=[];if(itemObjectLen>0x0){for(var _0x444ac3=0x0;_0x444ac3<itemObjectLen;_0x444ac3++){var _0x3dc4cc=new Date(arrData[_0x444ac3][_0x2428fb(0x9c)]),_0x26fd57=$[_0x2428fb(0xa2)][_0x2428fb(0xce)](_0x2428fb(0xb4),_0x3dc4cc);_0x2b2015+=_0x2428fb(0xa6)+arrData[_0x444ac3][_0x2428fb(0x9e)][_0x2428fb(0xa7)]+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xb5)]+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xa7)]+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xc0)]+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xaf)]+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xbd)]['Title']+_0x2428fb(0xb2)+arrData[_0x444ac3]['DepartmentId']['Title']+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xa3)]+_0x2428fb(0xb2)+_0x26fd57+_0x2428fb(0xb2)+arrData[_0x444ac3][_0x2428fb(0xc4)]+_0x2428fb(0xcb);}$('#tblArchibeListData>tbody')[_0x2428fb(0xcf)](),$('#tblArchibeListData>tbody')[_0x2428fb(0xa8)](_0x2b2015),generateProjectExcel();}}function generateProjectExcel(){var _0x4bf48f=a0_0x232f41;$(_0x4bf48f(0xd1))[_0x4bf48f(0xbc)]({'type':_0x4bf48f(0xb7),'exportHiddenCells':!![],'fileName':'NotificationCenter\x20List\x20Data'}),currentDlg[_0x4bf48f(0xca)]();}function GetItemObject(_0x4c6e98){var _0x2b2641=a0_0x232f41,_0x38b1f3=0x0;$[_0x2b2641(0xb9)]({'url':_0x4c6e98,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'processing':!![],'serverSide':!![],'success':function(_0x5ebcfb){var _0x465ee2=_0x2b2641,_0x3b69cb=_0x5ebcfb['d'][_0x465ee2(0xba)];arrData=arrData[_0x465ee2(0xc8)](_0x3b69cb);var _0x53442a=_0x5ebcfb['d'][_0x465ee2(0xb0)];_0x53442a!=null&&GetItemObject(_0x53442a);_0x38b1f3=arrData[_0x465ee2(0xd2)];var _0x9da6f1='';}});}