var a0_0x5ee67d=a0_0xcfdd;(function(_0x5b952a,_0x46f701){var _0x5b3ca4=a0_0xcfdd,_0x21e0da=_0x5b952a();while(!![]){try{var _0x47caa6=-parseInt(_0x5b3ca4(0x1fa))/0x1+-parseInt(_0x5b3ca4(0x203))/0x2*(parseInt(_0x5b3ca4(0x1ef))/0x3)+-parseInt(_0x5b3ca4(0x245))/0x4+-parseInt(_0x5b3ca4(0x22a))/0x5*(-parseInt(_0x5b3ca4(0x250))/0x6)+parseInt(_0x5b3ca4(0x23d))/0x7*(-parseInt(_0x5b3ca4(0x23f))/0x8)+-parseInt(_0x5b3ca4(0x243))/0x9+parseInt(_0x5b3ca4(0x24d))/0xa;if(_0x47caa6===_0x46f701)break;else _0x21e0da['push'](_0x21e0da['shift']());}catch(_0x2e048d){_0x21e0da['push'](_0x21e0da['shift']());}}}(a0_0x37eb,0x1b769));var currentAlbumSiteUrl='',companyID='',albumPlace='',albumDate='',Description='',existingAlbumArrayList=new Array();$(document)['ready'](function(){var _0x581134=a0_0xcfdd;EnvironmentalSettingsItems(),$(_0x581134(0x20c))[_0x581134(0x20b)](_0x581134(0x236),_0x581134(0x217)),$(_0x581134(0x247))[_0x581134(0x20b)]('href',_0x581134(0x1f4));});var mediacheck=!![],magazineCheck=!![];function EnvironmentalSettingsItems(){var _0x2f43b3=a0_0xcfdd,_0x4b11bf=_0x2f43b3(0x1f1);$[_0x2f43b3(0x1e3)](CommonFunction[_0x2f43b3(0x1fb)](_0x2f43b3(0x221),_0x4b11bf))[_0x2f43b3(0x208)](function(_0x319462){var _0x206bff=_0x2f43b3;try{if(_0x319462[_0x206bff(0x251)][_0x206bff(0x24e)]>0x0){for(var _0x1b56d5=0x0;_0x1b56d5<_0x319462[_0x206bff(0x251)][_0x206bff(0x24e)];_0x1b56d5++){_0x319462[_0x206bff(0x251)][_0x1b56d5]['Title']==_0x206bff(0x1eb)&&_0x319462[_0x206bff(0x251)][_0x1b56d5][_0x206bff(0x249)]==!![]&&(LoadRequestDetails(),$(_0x206bff(0x1fd))['show'](),magazineCheck=![]),_0x319462[_0x206bff(0x251)][_0x1b56d5][_0x206bff(0x1ff)]==_0x206bff(0x235)&&_0x319462[_0x206bff(0x251)][_0x1b56d5]['Active']==!![]&&(InitializationMediaSlider(),$(_0x206bff(0x233))['show'](),mediacheck=![]);}mediacheck==!![]&&$(_0x206bff(0x1fe))[_0x206bff(0x234)](_0x206bff(0x1f3)),magazineCheck==!![]&&$(_0x206bff(0x24f))[_0x206bff(0x234)](_0x206bff(0x213));}else $(_0x206bff(0x1fe))[_0x206bff(0x234)](_0x206bff(0x1f3)),$(_0x206bff(0x24f))['addClass'](_0x206bff(0x213));}catch(_0x5daba5){alert(_0x206bff(0x21b));}});}$(window)[a0_0x5ee67d(0x22f)](function(){var _0x1d96cc=a0_0x5ee67d,_0x4d7fa2=titanForWork[_0x1d96cc(0x22b)](_0x1d96cc(0x205));if(_0x4d7fa2!=undefined){}});function MediaGalleryInitialization(){}function InitializationMediaSlider(){var _0x3bba19=a0_0x5ee67d;companyID=Logged_CompanyId;var _0x50e81b=titanForWork[_0x3bba19(0x22c)](companyID);currentAlbumSiteUrl=_0x50e81b,GetMediaGallery(_0x50e81b,_0x3bba19(0x1ea));}var mediaGalleryCounter=0x0;function GetMediaGallery(_0x36b1d5,_0x1f21cb){var _0x3b1111=a0_0x5ee67d,_0x35cfab=_0x36b1d5+_0x3b1111(0x223);$[_0x3b1111(0x20d)]({'url':_0x35cfab,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x32be77){var _0x4720f0=_0x3b1111,_0x1b4cf7=_0x32be77['d']['results'];$(_0x4720f0(0x204))['html']('');for(var _0x23bfa6=0x0;_0x23bfa6<_0x1b4cf7['length'];_0x23bfa6++){if(_0x1b4cf7[_0x23bfa6][_0x4720f0(0x1e7)]!=_0x4720f0(0x215)&&_0x1b4cf7[_0x23bfa6][_0x4720f0(0x1e7)]!='_t'&&_0x1b4cf7[_0x23bfa6][_0x4720f0(0x1e7)]!='_w'){var _0x1f4cb3=encodeURI(_0x1b4cf7[_0x23bfa6]['ServerRelativeUrl']),_0x13daf0=_0x1b4cf7[_0x23bfa6]['Name'],_0x50c4f6='';$[_0x4720f0(0x1e3)](GetAlbumCaptionDescription(_0x36b1d5,_0x13daf0))['done'](function(_0x44b419){var _0x3608bf=_0x4720f0;_0x44b419[_0x3608bf(0x24e)]>0x0&&(albumPlace=_0x44b419[0x0]['Event_Place'],Description=_0x44b419[0x0]['Description'],albumDate=_0x44b419[0x0]['Modified']),norecordMedia++,GetMediaGalleryThumbNail(_0x36b1d5,_0x1f4cb3,_0x13daf0,albumPlace,albumDate,Description);});}}if(norecordMedia==0x0){langblankMessage=_0x4720f0(0x1f7);var _0x585a5a=_0x4720f0(0x232)+langblankMessage+_0x4720f0(0x22e);$(_0x4720f0(0x21a))[_0x4720f0(0x1f9)](),$(_0x4720f0(0x21a))['append'](_0x585a5a);}},'eror':function(_0x2526d5){console['log']('error');}});}function a0_0xcfdd(_0xd51ed8,_0x41288d){var _0x37eb10=a0_0x37eb();return a0_0xcfdd=function(_0xcfddd8,_0x54d689){_0xcfddd8=_0xcfddd8-0x1e3;var _0x624c8b=_0x37eb10[_0xcfddd8];return _0x624c8b;},a0_0xcfdd(_0xd51ed8,_0x41288d);}var norecordMedia=0x0;function a0_0x37eb(){var _0x4d944a=['</div></div></div></div></div>','split','File','2yzMzEz','#slider-container','WelcomePageCalled','Files','bmp','done','</h5>','png','attr','#magazineview','ajax','.pdf','&FName=','datepicker','<div\x20class=\x22magazineNoRecord\x20col-sm-12\x20col-xs-12\x20col-md-12\x22><h3\x20class=\x22top5\x22\x20data-localize=\x22NoRecord_Magazine\x22>','\x27)?$select=ID,File_x0020_Type&$expand=Folders,Folders/ListItemAllFields,Files,Files/ListItemAllFields&$orderby=Modified\x20desc&$top=1','work-doc-responsive-height','<div\x20class=\x22blur\x22></div>','Forms','<div\x20class=\x22slide\x22><div\x20class=\x22media-gallery-card-panel\x22>','../Pages/MagazineViewAll.aspx?WebAppId=2','/_api/Web/GetFolderByServerRelativeUrl(\x27','&Mode=View&sourcelocation=../Pages/Default.aspx','#media-body-div','Recommended\x20to\x20clear\x20the\x20browsing\x20data\x20and\x20cookies\x20for\x20smooth\x20and\x20fast\x20browsing.\x20Please\x20press\x20Ctrl\x20+\x20H\x20to\x20clear\x20cookies.','sort','</span></p>','><p><span>Place:</span>\x20<span>','substring','Publish_Date','EnvironmentalSettings','<a\x20href=','/_api/web/Lists/Getbytitle(\x27MediaGallery\x27)/rootfolder/folders?$select=*,Name,TimeLastModified,ServerRelativeUrl&$top=6&$orderby=TimeLastModified\x20desc','Keep\x20watching\x20for\x20upcoming\x20magazines','https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MyWorkplace/images/magazines2.png','Keep\x20watching\x20for\x20upcoming\x20Album','<p><span>','FileName','application/json;\x20odata=verbose','705adsRll','getQueryStringParameter','currentCompanyUrl','<p><span>Volume:</span>\x20<span>','</h3></div>','load','Volume','<div\x20class=\x22caption-text\x22>','<div\x20class=\x22albumNoRecord\x20col-sm-12\x20col-xs-12\x20col-md-12\x22><h3\x20class=\x22top5\x22\x20data-localize=\x22NoRecord_MediaGallery\x22>','#MediaDiv','addClass','Media\x20Gallery','href','application/json;odata=verbose','<div\x20class=\x22slide-content-media\x22>','<div\x20class=\x22slide\x20image-active\x22><div\x20class=\x22media-gallery-card-panel\x22>','/Pages/MediaGalleryDetail.aspx?WebAppId=','<h5>','ServerRelativeUrl','343TunaWV','toLowerCase','2744OilsPZ','TimeLastModified','AttachmentFiles','<a\x20target=\x22_blank\x22\x20href=\x22','1517670XOeMSg','><p><span>Description:</span>\x20<span>','73728bgePUt','push','#viewmedia-1','<div\x20class=\x22caption\x22>','Active','<img\x20class=\x22media-gallery-card-img\x22\x20src=\x22','error','indexOf','4693210qCOvQN','length','.documents_main_box','246YJgQev','results','PNG','when','append','gif','webAbsoluteUrl','Name','log','/_api/web/Lists/Getbytitle(\x27MediaGallery\x27)/rootfolder/folders?$select=Name,ServerRelativeUrl&$top=5000','MediaGallery','Magazine','/_api/web/lists/getbytitle(\x27MediaGallery\x27)/items?$select=*,Title,Description&$filter=Title\x20eq\x20\x27','\x22\x20alt=\x22media\x20img\x22\x20class=\x22media-gallery-card-img\x22></a>','JPEG','356487rWxKrt','</a>','?$select=Title,Id,Active&$filter=(Formats\x20eq\x20\x27Format\x202\x27\x20and\x20Title\x20eq\x20\x27Magazine\x27)\x20or\x20(Formats\x20eq\x20\x27Format\x202\x27\x20and\x20Title\x20eq\x20\x27Media\x20Gallery\x27)','...','work-know-responsive-height','../Pages/MediaGallery.aspx?WebAppId=2','.panel-footer-WorkplaceMagazine','Deferred','Keep\x20watching\x20for\x20upcoming\x20albums','</span></p></a>','empty','39915wEIAqV','getItemsWithQueryItem','formatDate','#magazineBodyDiv','.knowledge_document_main_box','Title'];a0_0x37eb=function(){return _0x4d944a;};return a0_0x37eb();}function GetMediaGalleryThumbNail(_0x29cf38,_0xfad4ae,_0x15811a,_0x31d20d,_0xeb07e9,_0x3c242c){var _0x345db4=a0_0x5ee67d,_0xeb07e9=new Date(_0xeb07e9);_0x15811a['length']>0x26&&(_0x15811a=_0x15811a[_0x345db4(0x21f)](0x0,0x24)+_0x345db4(0x1f2));_0x3c242c['length']>0x24&&(_0x3c242c=_0x3c242c['substring'](0x0,0x24)+_0x345db4(0x1f2));var _0x246af4=''+_spPageContextInfo[_0x345db4(0x1e6)]+_0x345db4(0x23a)+companyID+_0x345db4(0x20f)+_0xfad4ae+_0x345db4(0x219),_0xeb07e9=$['datepicker'][_0x345db4(0x1fc)]('MM\x20dd,\x20yy',_0xeb07e9),_0x4759de=_0x29cf38+_0x345db4(0x218)+_0xfad4ae+_0x345db4(0x212);$[_0x345db4(0x20d)]({'url':_0x4759de,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x56de3d){var _0x3d2393=_0x345db4,_0x552b60=_0x56de3d['d'][_0x3d2393(0x206)]['results'],_0x1e5f94='';_0x552b60[_0x3d2393(0x21c)](function(_0x5ce839,_0x88019a){var _0x3f4980=_0x3d2393,_0x5ad916=new Date(_0x5ce839[_0x3f4980(0x240)]),_0x5689fd=new Date(_0x88019a['TimeLastModified']);if(_0x5ad916<_0x5689fd)return-0x1;if(_0x5ad916>_0x5689fd)return 0x1;return 0x0;});var _0x18c229='';_0x552b60[_0x3d2393(0x24e)]>0x0&&(_0x1e5f94=encodeURI(_0x552b60[0x0]['ServerRelativeUrl']),norecordMedia++);_0x1e5f94==''&&(_0x1e5f94='https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MediaGallery/assets/images/default%20album.png');var _0x5edcdb=_0x1e5f94[_0x3d2393(0x201)]('.');_0x5edcdb=_0x5edcdb[_0x5edcdb[_0x3d2393(0x24e)]-0x1],_0x18c229+=_0x3d2393(0x216);_0x5edcdb=='jpg'||_0x5edcdb=='JPG'||_0x5edcdb==_0x3d2393(0x1ee)||_0x5edcdb=='GIF'||_0x5edcdb==_0x3d2393(0x252)||_0x5edcdb=='BMP'||_0x5edcdb=='jpeg'||_0x5edcdb==_0x3d2393(0x1e5)||_0x5edcdb==_0x3d2393(0x20a)||_0x5edcdb==_0x3d2393(0x207)?_0x18c229+='<a\x20href='+_0x246af4+'><img\x20src=\x22'+_0x1e5f94+_0x3d2393(0x1ed):_0x18c229+=_0x3d2393(0x222)+_0x246af4+'><img\x20src=\x22https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MyDocuments/DMS/assets/images/video-files.png?isSPOFile=1\x22\x20alt=\x22media\x20img\x22\x20class=\x22media-gallery-card-img\x20videoThumbView\x22></a>';_0x18c229+='<div\x20class=\x22caption\x22>',_0x18c229+=_0x3d2393(0x214),_0x18c229+=_0x3d2393(0x231),_0x18c229+=_0x3d2393(0x23b)+_0x15811a+_0x3d2393(0x209),_0x18c229+='<div\x20class=\x22slide-content-media\x22>',_0x18c229+=_0x3d2393(0x227)+_0xeb07e9+_0x3d2393(0x21d),_0x18c229+=_0x3d2393(0x222)+_0x246af4+_0x3d2393(0x21e)+_0x31d20d+_0x3d2393(0x1f8),_0x18c229+=_0x3d2393(0x222)+_0x246af4+_0x3d2393(0x244)+_0x3c242c+_0x3d2393(0x1f8),_0x18c229+='</div></div></div></div></div>',$(_0x3d2393(0x204))[_0x3d2393(0x1e4)](_0x18c229);if(norecordMedia==0x0){var _0x580170=_0x3d2393(0x226),_0xe0d773='<div\x20class=\x22magazineNoRecord\x20col-sm-12\x20col-xs-12\x20col-md-12\x22><h3\x20class=\x22top5\x22\x20data-localize=\x22NoRecord_Magazine\x22>'+_0x580170+_0x3d2393(0x22e);$('#media-body-div')[_0x3d2393(0x1f9)](),$(_0x3d2393(0x21a))[_0x3d2393(0x1e4)](_0xe0d773);}},'eror':function(_0x59e201){var _0x5a9734=_0x345db4;console[_0x5a9734(0x1e8)](_0x5a9734(0x24b));}});}function BindAlbumDropDownList(_0x595da2){var _0x3ab613=a0_0x5ee67d;existingAlbumArrayList=[];var _0xc73cf1=_0x595da2+_0x3ab613(0x1e9);$[_0x3ab613(0x20d)]({'url':_0xc73cf1,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0x29fd9d){var _0x40975f=_0x3ab613,_0x5c9fff=_0x29fd9d['d']['results'];for(var _0x4f5dc8=0x0;_0x4f5dc8<_0x5c9fff[_0x40975f(0x24e)];_0x4f5dc8++){if(_0x5c9fff[_0x4f5dc8][_0x40975f(0x1e7)]!=_0x40975f(0x215)&&_0x5c9fff[_0x4f5dc8][_0x40975f(0x1e7)]!='_t'&&_0x5c9fff[_0x4f5dc8]['Name']!='_w'){var _0xfaf830=_0x5c9fff[_0x4f5dc8][_0x40975f(0x1e7)];existingAlbumArrayList[_0x40975f(0x246)](_0xfaf830[_0x40975f(0x23e)]());}}},'eror':function(_0x36584a){var _0x3724f4=_0x3ab613;console[_0x3724f4(0x1e8)](_0x3724f4(0x24b));}});}function GetAlbumCaptionDescription(_0x484eec,_0x28a07d){var _0x3467f9=a0_0x5ee67d,_0x27848c=$[_0x3467f9(0x1f6)](),_0x5d8be6=_0x484eec+_0x3467f9(0x1ec)+_0x28a07d+'\x27';return $[_0x3467f9(0x20d)]({'url':_0x5d8be6,'headers':{'Accept':_0x3467f9(0x237)},'async':![],'success':function(_0x496ad2){var _0x1d1b8a=_0x3467f9;_0x27848c['resolve'](_0x496ad2['d'][_0x1d1b8a(0x251)]);},'eror':function(_0x45d075){console['log']('error'),_0x27848c['reject'](_0x45d075);}}),_0x27848c['promise']();}function LoadRequestDetails(){var _0x138b68=a0_0x5ee67d,_0x1cbd35=titanForWork['currentCompanyUrl'](Logged_CompanyId),_0x507a1e=_0x1cbd35+'/_api/web/lists/getbytitle(\x27Magazine_items\x27)/items?$orderby=\x20Publish_Date\x20desc&$orderby=Volume\x20desc&$expand=AttachmentFiles&$top=6';$[_0x138b68(0x20d)]({'url':_0x507a1e,'method':'GET','async':![],'headers':{'Accept':_0x138b68(0x229)},'success':function(_0x28cfe3){var _0x19c571=_0x138b68,_0x282983=_0x28cfe3['d'][_0x19c571(0x251)],_0x4c837b=[],_0x1b6e91=0x0,_0x88b427='',_0x5443b8='',_0x3b0862='',_0x463cbb='';for(var _0x49f443=0x0;_0x49f443<_0x282983[_0x19c571(0x24e)];_0x49f443++){_0x1b6e91++;var _0x309de2='',_0x57519c=_0x282983[_0x49f443][_0x19c571(0x202)]['Name'],_0x325216='',_0x491b49='';_0x282983[_0x49f443][_0x19c571(0x241)][_0x19c571(0x251)]['length']>0x1&&(_0x282983[_0x49f443][_0x19c571(0x241)][_0x19c571(0x251)][0x0][_0x19c571(0x228)][_0x19c571(0x24c)](_0x19c571(0x20e))==-0x1?(_0x325216=_0x282983[_0x49f443][_0x19c571(0x241)][_0x19c571(0x251)][0x0]['ServerRelativeUrl'],_0x491b49=_0x282983[_0x49f443]['AttachmentFiles'][_0x19c571(0x251)][0x1][_0x19c571(0x23c)]):(_0x325216=_0x282983[_0x49f443]['AttachmentFiles']['results'][0x1][_0x19c571(0x23c)],_0x491b49=_0x282983[_0x49f443][_0x19c571(0x241)][_0x19c571(0x251)][0x0][_0x19c571(0x23c)]));var _0x450f88=new Date(_0x282983[_0x49f443][_0x19c571(0x220)]),_0x381d03=$[_0x19c571(0x210)][_0x19c571(0x1fc)]('MM\x20dd,\x20yy',_0x450f88);_0x325216==''&&(_0x325216=_0x19c571(0x225));var _0x257780=_0x282983[_0x49f443][_0x19c571(0x1ff)],_0x1de87b=_0x282983[_0x49f443]['Title'],_0x3f59b3=_0x282983[_0x49f443]['Volume']==null?'':_0x282983[_0x49f443][_0x19c571(0x230)];_0x257780[_0x19c571(0x24e)]>0xc&&(_0x257780=_0x257780[_0x19c571(0x21f)](0x0,0x22)+_0x19c571(0x1f2)),_0x309de2+=_0x19c571(0x239),_0x309de2+='<a\x20target=\x22_blank\x22\x20href=\x22'+_0x491b49+'\x22>',_0x309de2+=_0x19c571(0x24a)+_0x325216+'\x22\x20alt=\x22media\x20img\x22>',_0x309de2+=_0x19c571(0x1f0),_0x309de2+=_0x19c571(0x248),_0x309de2+=_0x19c571(0x214),_0x309de2+=_0x19c571(0x231),_0x309de2+=_0x19c571(0x242)+_0x491b49+'\x22>',_0x309de2+='<h5>'+_0x257780+_0x19c571(0x209),_0x309de2+=_0x19c571(0x238),_0x309de2+='<p><span>'+_0x381d03+_0x19c571(0x21d),_0x309de2+=_0x19c571(0x22d)+_0x3f59b3+_0x19c571(0x1f8),_0x309de2+=_0x19c571(0x200),$('#slider-container2')[_0x19c571(0x1e4)](_0x309de2);}if(_0x1b6e91==0x0){var _0x3e1b47=_0x19c571(0x224),_0x29fcff=_0x19c571(0x211)+_0x3e1b47+_0x19c571(0x22e);$('#magazine-body-div')[_0x19c571(0x1f9)](),$(_0x19c571(0x1f5))['hide'](),$('#magazine-body-div')[_0x19c571(0x1e4)](_0x29fcff);}else{}}});}