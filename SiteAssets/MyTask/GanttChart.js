var a0_0x2fa111=a0_0x1040;(function(_0x1b5b20,_0xf87b2d){var _0x2d62fb=a0_0x1040,_0x51d0b3=_0x1b5b20();while(!![]){try{var _0x2c831d=-parseInt(_0x2d62fb(0x1a9))/0x1*(-parseInt(_0x2d62fb(0x1e5))/0x2)+parseInt(_0x2d62fb(0x1c4))/0x3+parseInt(_0x2d62fb(0x1c5))/0x4+-parseInt(_0x2d62fb(0x230))/0x5*(parseInt(_0x2d62fb(0x1a1))/0x6)+parseInt(_0x2d62fb(0x1e1))/0x7*(-parseInt(_0x2d62fb(0x208))/0x8)+parseInt(_0x2d62fb(0x19f))/0x9*(-parseInt(_0x2d62fb(0x1cf))/0xa)+parseInt(_0x2d62fb(0x1a4))/0xb;if(_0x2c831d===_0xf87b2d)break;else _0x51d0b3['push'](_0x51d0b3['shift']());}catch(_0x736570){_0x51d0b3['push'](_0x51d0b3['shift']());}}}(a0_0x30ed,0x662b0));var TaskdemoSource='',arrCurrentGantt=[],FirstGanttRun=![];$(document)[a0_0x2fa111(0x1ac)](function(){var _0x579afb=a0_0x2fa111;$('#ganchatevent')[_0x579afb(0x19c)](function(){var _0x25c3cc=_0x579afb;$('.callinginbox')[_0x25c3cc(0x20d)](_0x25c3cc(0x211)),$('.botheventwork')['show'](),$(_0x25c3cc(0x1dd))[_0x25c3cc(0x1b7)]==0x0&&bindAllWorkType(),$('#btnTaskInFilter')[_0x25c3cc(0x22e)](),$(_0x25c3cc(0x1d8))[_0x25c3cc(0x22e)](),$(_0x25c3cc(0x1c7))[_0x25c3cc(0x22e)](),$(_0x25c3cc(0x1d4))['hide'](),$(_0x25c3cc(0x22b))[_0x25c3cc(0x211)](),$('#btnGanttClear')['show'](),$('#taskIn')[_0x25c3cc(0x1bb)](),$(_0x25c3cc(0x1bc))[_0x25c3cc(0x1bb)](_0x25c3cc(0x204),_0x25c3cc(0x21e),_0x25c3cc(0x22f));}),$(_0x579afb(0x220))[_0x579afb(0x19c)](function(){FirstGanttRun==![]&&(FirstGanttRun=!![],CreateTaskGanttChart(arrLimitTaskInbox));}),$('#btnGanttFilter')[_0x579afb(0x19c)](function(){FilterGantt();}),$('#btnGanttClear')[_0x579afb(0x19c)](function(){ClearGantt();}),$('#rdoGanttTaskIn')[_0x579afb(0x1d7)](function(){var _0x314da5=_0x579afb;$(_0x314da5(0x218))[_0x314da5(0x1c6)](_0x314da5(0x233));}),$(_0x579afb(0x1f9))['change'](function(){var _0x57950a=_0x579afb;$(_0x57950a(0x218))[_0x57950a(0x1c6)](_0x57950a(0x1ab));}),SortGanttTasks();});function FilterGantt(){var _0x2695f5=a0_0x2fa111;$('#rdoGanttTaskIn')[_0x2695f5(0x1f0)](_0x2695f5(0x1e2))==!![]?TaskInGantt():TaskOutGantt();}function TaskInGantt(){var _0x3c13b1=a0_0x2fa111;arrFilterDataBind=[];var _0x396ae4='',_0x3db724='';assigntobyme=[];$(_0x3c13b1(0x203))['val']()!=_0x3c13b1(0x1f6)&&($('#UserAllProject')[_0x3c13b1(0x1a7)]()==_0x3c13b1(0x1b4)?_0x396ae4+='<div\x20class=\x27upload-chip\x27>General\x20Task</div>':$(_0x3c13b1(0x1da))[_0x3c13b1(0x1a7)]()!=_0x3c13b1(0x1f6)?_0x396ae4+='<div\x20class=\x27upload-chip\x27>'+$(_0x3c13b1(0x20e))['text']()+_0x3c13b1(0x214):_0x396ae4+=_0x3c13b1(0x1d2)+$(_0x3c13b1(0x20e))[_0x3c13b1(0x1c6)]()+'</div>');if($(_0x3c13b1(0x1fd))[_0x3c13b1(0x1a7)]()!='All'){var _0x4f65ef=$(_0x3c13b1(0x1fd))['val']();_0x396ae4+='<div\x20class=\x27upload-chip\x27>'+$(_0x3c13b1(0x1f1))[_0x3c13b1(0x1c6)]()+'</div>';}$(_0x3c13b1(0x1db))[_0x3c13b1(0x1a7)]()!=_0x3c13b1(0x1f6)&&(_0x396ae4+=_0x3c13b1(0x1d2)+$('#ddlInboxClient\x20option:selected')[_0x3c13b1(0x1c6)]()+_0x3c13b1(0x214));$(_0x3c13b1(0x20b))[_0x3c13b1(0x1a7)]()!=_0x3c13b1(0x1f6)&&(_0x396ae4+=_0x3c13b1(0x1d2)+$('#WorkTypeOfProject\x20option:selected')[_0x3c13b1(0x1c6)]()+'</div>');$('#txtPriority')[_0x3c13b1(0x1a7)]()!=_0x3c13b1(0x1f6)&&(_0x396ae4+=_0x3c13b1(0x1d2)+$(_0x3c13b1(0x1b2))['text']()+_0x3c13b1(0x214));$(_0x3c13b1(0x1b8))['val']()!=_0x3c13b1(0x1f6)&&(_0x396ae4+=_0x3c13b1(0x1d2)+$(_0x3c13b1(0x1d0))[_0x3c13b1(0x1c6)]()+_0x3c13b1(0x214));if($(_0x3c13b1(0x1bc))[_0x3c13b1(0x1a7)]()!=null&&$(_0x3c13b1(0x1bc))['val']()!=''){if(TaskOutCome==_0x3c13b1(0x1e9))_0x396ae4+=_0x3c13b1(0x1ce);else TaskOutCome==_0x3c13b1(0x231)?_0x396ae4+=_0x3c13b1(0x1c2):_0x396ae4+='<div\x20class=\x27upload-chip\x27>'+moment($(_0x3c13b1(0x1bc))[_0x3c13b1(0x1a7)]())[_0x3c13b1(0x20f)](_0x3c13b1(0x229))+_0x3c13b1(0x214);}$(_0x3c13b1(0x1a6))['text']()!=''?(getUserInformation(_0x3c13b1(0x1fb)),_0x396ae4+='<div\x20class=\x27upload-chip\x27>'+assignBy['join'](',\x20')+_0x3c13b1(0x214)):(_0x396ae4+=_0x3c13b1(0x1d2)+_spPageContextInfo['userDisplayName']+_0x3c13b1(0x214),assignByEmail=''),arrFilterDataBind=arrAllTaskInbox['filter'](function(_0x283a3d,_0x372b87){var _0x179f66=_0x3c13b1;if($(_0x179f66(0x203))[_0x179f66(0x1a7)]()!='All'){if($('#UserAllProject')['val']()==_0x179f66(0x1b4))var _0x5ce30f=null,_0x506c0a=_0x5ce30f==_0x179f66(0x1f6)?_0x283a3d['ProjectFullName']!='':_0x283a3d[_0x179f66(0x1d9)]==_0x5ce30f;else{if($(_0x179f66(0x203))[_0x179f66(0x1a7)]()==_0x179f66(0x1b9))var _0x5ce30f=null,_0x506c0a=_0x5ce30f==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x224)]!='':_0x283a3d[_0x179f66(0x224)]==$(_0x179f66(0x203))[_0x179f66(0x1a7)]();else{if($('#UserAllProject')['val']()=='TeamChannel')var _0x5ce30f=null,_0x506c0a=_0x5ce30f==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x224)]!='':_0x283a3d['TaskCategory']==$(_0x179f66(0x203))['val']();else{if($(_0x179f66(0x1da))[_0x179f66(0x1a7)]()!=_0x179f66(0x1f6))var _0x506c0a=_0x5ce30f=='All'?_0x283a3d[_0x179f66(0x21b)]!='':_0x283a3d[_0x179f66(0x21b)]==$(_0x179f66(0x1da))[_0x179f66(0x1a7)]();else var _0x5ce30f=null,_0x506c0a=_0x5ce30f==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x1d9)]!='':_0x283a3d[_0x179f66(0x1d9)]!=_0x5ce30f;}}}}else var _0x5ce30f=_0x179f66(0x1f6),_0x506c0a=_0x5ce30f==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x1d9)]!='':_0x283a3d[_0x179f66(0x1d9)]==_0x5ce30f;if($('#ProjectModule')[_0x179f66(0x1a7)]()!=_0x179f66(0x1f6))var _0x367bb6=$(_0x179f66(0x1fd))[_0x179f66(0x1a7)]();else var _0x367bb6=_0x179f66(0x1f6);if($(_0x179f66(0x1db))[_0x179f66(0x1a7)]()!='All')var _0x258035=$(_0x179f66(0x1db))['val']();else var _0x258035=_0x179f66(0x1f6);if($(_0x179f66(0x20b))[_0x179f66(0x1a7)]()!=_0x179f66(0x1f6))var _0x5412ab=$(_0x179f66(0x20b))[_0x179f66(0x1a7)]();else var _0x5412ab=_0x179f66(0x1f6);if($(_0x179f66(0x1de))['val']()!='All')var _0x49a8b8=$('#txtPriority')['val']();else var _0x49a8b8=_0x179f66(0x1f6);if($('#txtFilterStatusInbox')['val']()!=_0x179f66(0x1f6))var _0x5e6aff=$(_0x179f66(0x1b8))[_0x179f66(0x1a7)]();else var _0x5e6aff=_0x179f66(0x1f6);if($(_0x179f66(0x1bc))[_0x179f66(0x1a7)]()!=null&&$('#taskIn')[_0x179f66(0x1a7)]()!=''){var _0x238c70=$(_0x179f66(0x1bc))[_0x179f66(0x1a7)](),_0x2e3b28=new Date($(_0x179f66(0x1bc))[_0x179f66(0x1a7)]())['setHours'](0x0,0x0,0x0,0x0);_0x2e3b28=new Date(_0x2e3b28);var _0x225f2c=new Date(moment(_0x283a3d[_0x179f66(0x21f)][_0x179f66(0x1be)]('T')[0x0])[_0x179f66(0x20f)](_0x179f66(0x1dc)));_0x225f2c[_0x179f66(0x1ed)](_0x225f2c[_0x179f66(0x207)]()+0x1),_0x225f2c=new Date(_0x225f2c);var _0x5aaf36=_0x2e3b28==''?_0x225f2c!='':_0x225f2c<=_0x2e3b28;}else var _0x5aaf36=!![];_0x3db724='';var _0x2ddc6f=[];if(assignByEmail!=''){var _0xa9272a=assignByEmail[_0x179f66(0x1be)]('|');_0xa9272a[_0x179f66(0x217)]();for(var _0x4f9a4d=0x0;_0x4f9a4d<_0xa9272a[_0x179f66(0x1b7)];_0x4f9a4d++){_0xa9272a[_0x4f9a4d][_0x179f66(0x20c)]('#')!=-0x1&&(_0xa9272a[_0x4f9a4d]=_0xa9272a[_0x4f9a4d]['split']('#')[0x0],_0xa9272a[_0x4f9a4d]=_0xa9272a[_0x4f9a4d][_0x179f66(0x1ec)]('_','@')),_0x4f9a4d==0x0?_0x2ddc6f[_0x179f66(0x235)](_0x283a3d[_0x179f66(0x1d5)]['EMail'][_0x179f66(0x1eb)]()==_0xa9272a[_0x4f9a4d][_0x179f66(0x1eb)]()):_0x2ddc6f[_0x179f66(0x235)](_0x283a3d[_0x179f66(0x1d5)]['EMail'][_0x179f66(0x1eb)]()==_0xa9272a[_0x4f9a4d][_0x179f66(0x1eb)]());}}else{var _0xc53a41=[];_0x2ddc6f[_0x179f66(0x235)](!![]);}return _0x2ddc6f[_0x179f66(0x22a)](function(_0x10c75c,_0x40a382){_0x40a382==0x0?_0x3db724=_0x10c75c:_0x3db724=_0x10c75c||_0x3db724;}),_0x283a3d[_0x179f66(0x1b5)]['ID']=_0x283a3d[_0x179f66(0x1b5)]['ID']?_0x283a3d[_0x179f66(0x1b5)]['ID']:'',_0x506c0a&&(_0x258035==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x216)]['ID']!=_0x179f66(0x1f4):_0x283a3d['ClientID']['ID']==_0x258035)&&(_0x367bb6==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x1b5)]['ID']!='null':_0x283a3d[_0x179f66(0x1b5)]['ID']==_0x367bb6)&&(_0x5412ab=='All'?_0x283a3d[_0x179f66(0x1cc)]!='':_0x283a3d[_0x179f66(0x1cc)]==_0x5412ab)&&(_0x5e6aff=='All'?_0x283a3d['CurrentPhase']!='':_0x283a3d[_0x179f66(0x20a)]==_0x5e6aff)&&(_0x49a8b8==_0x179f66(0x1f6)?_0x283a3d[_0x179f66(0x228)]!='':_0x283a3d[_0x179f66(0x228)]==_0x49a8b8)&&_0x5aaf36&&_0x3db724;}),$(_0x3c13b1(0x1b0))[_0x3c13b1(0x1ae)](),$('#myGanttChip')[_0x3c13b1(0x221)](_0x396ae4),arrCurrentGantt=arrFilterDataBind[_0x3c13b1(0x1a8)](function(_0x35c031){return _0x35c031;}),CreateTaskGanttChart(arrFilterDataBind);}function TaskOutGantt(){var _0x16fa7d=a0_0x2fa111;arrFilterDataBind=[];var _0x3bde08='',_0x31834e='';assigntobyme=[];$('#UserAllProject')[_0x16fa7d(0x1a7)]()!=_0x16fa7d(0x1f6)&&($('#UserAllProject')[_0x16fa7d(0x1a7)]()==_0x16fa7d(0x1b4)?_0x3bde08+=_0x16fa7d(0x212):$('#ddlInboxProject')[_0x16fa7d(0x1a7)]()!=_0x16fa7d(0x1f6)?_0x3bde08+='<div\x20class=\x27upload-chip\x27>'+$(_0x16fa7d(0x20e))[_0x16fa7d(0x1c6)]()+_0x16fa7d(0x214):_0x3bde08+='<div\x20class=\x27upload-chip\x27>'+$(_0x16fa7d(0x20e))[_0x16fa7d(0x1c6)]()+'</div>');if($(_0x16fa7d(0x1fd))[_0x16fa7d(0x1a7)]()!=_0x16fa7d(0x1f6)){var _0xcc429d=$(_0x16fa7d(0x1fd))[_0x16fa7d(0x1a7)]();_0x3bde08+='<div\x20class=\x27upload-chip\x27>'+$(_0x16fa7d(0x1f1))[_0x16fa7d(0x1c6)]()+_0x16fa7d(0x214);}$(_0x16fa7d(0x1db))['val']()!=_0x16fa7d(0x1f6)&&(_0x3bde08+=_0x16fa7d(0x1d2)+$(_0x16fa7d(0x239))[_0x16fa7d(0x1c6)]()+_0x16fa7d(0x214));$(_0x16fa7d(0x20b))[_0x16fa7d(0x1a7)]()!='All'&&(_0x3bde08+=_0x16fa7d(0x1d2)+$('#WorkTypeOfProject\x20option:selected')[_0x16fa7d(0x1c6)]()+'</div>');$(_0x16fa7d(0x1de))[_0x16fa7d(0x1a7)]()!='All'&&(_0x3bde08+='<div\x20class=\x27upload-chip\x27>'+$('#txtPriority\x20option:selected')[_0x16fa7d(0x1c6)]()+_0x16fa7d(0x214));$(_0x16fa7d(0x1b8))[_0x16fa7d(0x1a7)]()!=_0x16fa7d(0x1f6)&&(_0x3bde08+=_0x16fa7d(0x1d2)+$(_0x16fa7d(0x1d0))[_0x16fa7d(0x1c6)]()+_0x16fa7d(0x214));if($(_0x16fa7d(0x1bc))[_0x16fa7d(0x1a7)]()!=null&&$(_0x16fa7d(0x1bc))[_0x16fa7d(0x1a7)]()!=''){if(TaskOutCome==_0x16fa7d(0x1e9))_0x3bde08+=_0x16fa7d(0x1ce);else TaskOutCome=='TaskOverdue'?_0x3bde08+=_0x16fa7d(0x1c2):_0x3bde08+=_0x16fa7d(0x1d2)+moment($('#taskIn')[_0x16fa7d(0x1a7)]())['format'](_0x16fa7d(0x229))+'</div>';}$('#pplassigntoInbox_TopSpan_ResolvedList')[_0x16fa7d(0x1c6)]()!=''?(getUserInformation(_0x16fa7d(0x1fb)),_0x3bde08+=_0x16fa7d(0x1d2)+assignBy[_0x16fa7d(0x1d3)](',\x20')+_0x16fa7d(0x214)):(_0x3bde08+=_0x16fa7d(0x1d2)+_spPageContextInfo[_0x16fa7d(0x1f3)]+'</div>',assignByEmail=''),arrFilterDataBind=arrAllTaskOutbox[_0x16fa7d(0x1a8)](function(_0x33e1b5,_0x5dc2a7){var _0xdea54c=_0x16fa7d;if($('#UserAllProject')[_0xdea54c(0x1a7)]()!=_0xdea54c(0x1f6)){if($(_0xdea54c(0x203))['val']()==_0xdea54c(0x1b4))var _0x3e9802=null,_0x175184=_0x3e9802==_0xdea54c(0x1f6)?_0x33e1b5['ProjectFullName']!='':_0x33e1b5['ProjectFullName']==_0x3e9802;else{if($('#UserAllProject')['val']()==_0xdea54c(0x1b9))var _0x3e9802=null,_0x175184=_0x3e9802==_0xdea54c(0x1f6)?_0x33e1b5['TaskCategory']!='':_0x33e1b5[_0xdea54c(0x224)]==$(_0xdea54c(0x203))[_0xdea54c(0x1a7)]();else{if($(_0xdea54c(0x203))[_0xdea54c(0x1a7)]()==_0xdea54c(0x1ee))var _0x3e9802=null,_0x175184=_0x3e9802==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x224)]!='':_0x33e1b5[_0xdea54c(0x224)]==$(_0xdea54c(0x203))[_0xdea54c(0x1a7)]();else{if($(_0xdea54c(0x1da))[_0xdea54c(0x1a7)]()!=_0xdea54c(0x1f6))var _0x175184=_0x3e9802==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x21b)]!='':_0x33e1b5[_0xdea54c(0x21b)]==$(_0xdea54c(0x1da))[_0xdea54c(0x1a7)]();else var _0x3e9802=null,_0x175184=_0x3e9802=='All'?_0x33e1b5[_0xdea54c(0x1d9)]!='':_0x33e1b5[_0xdea54c(0x1d9)]!=_0x3e9802;}}}}else var _0x3e9802=_0xdea54c(0x1f6),_0x175184=_0x3e9802==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x1d9)]!='':_0x33e1b5[_0xdea54c(0x1d9)]==_0x3e9802;if($(_0xdea54c(0x1fd))[_0xdea54c(0x1a7)]()!=_0xdea54c(0x1f6))var _0x3eb20f=$('#ProjectModule')[_0xdea54c(0x1a7)]();else var _0x3eb20f=_0xdea54c(0x1f6);if($(_0xdea54c(0x1db))[_0xdea54c(0x1a7)]()!='All')var _0x28b6cd=$(_0xdea54c(0x1db))[_0xdea54c(0x1a7)]();else var _0x28b6cd=_0xdea54c(0x1f6);if($(_0xdea54c(0x20b))['val']()!=_0xdea54c(0x1f6))var _0xaec28f=$('#WorkTypeOfProject')[_0xdea54c(0x1a7)]();else var _0xaec28f=_0xdea54c(0x1f6);if($(_0xdea54c(0x1de))[_0xdea54c(0x1a7)]()!=_0xdea54c(0x1f6))var _0x427b56=$(_0xdea54c(0x1de))[_0xdea54c(0x1a7)]();else var _0x427b56='All';if($(_0xdea54c(0x1b8))[_0xdea54c(0x1a7)]()!='All')var _0xdb2421=$('#txtFilterStatusInbox')[_0xdea54c(0x1a7)]();else var _0xdb2421='All';if($(_0xdea54c(0x1bc))['val']()!=null&&$(_0xdea54c(0x1bc))[_0xdea54c(0x1a7)]()!=''){var _0x5d5142=$('#taskIn')[_0xdea54c(0x1a7)](),_0x3497cb=new Date($(_0xdea54c(0x1bc))['val']())[_0xdea54c(0x1c3)](0x0,0x0,0x0,0x0);_0x3497cb=new Date(_0x3497cb);var _0x29af16=new Date(moment(_0x33e1b5['DueDate'][_0xdea54c(0x1be)]('T')[0x0])[_0xdea54c(0x20f)](_0xdea54c(0x1dc)));_0x29af16[_0xdea54c(0x1ed)](_0x29af16['getDate']()+0x1),_0x29af16=new Date(_0x29af16);var _0x3a93a0=_0x3497cb==''?_0x29af16!='':_0x29af16<=_0x3497cb;}else var _0x3a93a0=!![];_0x31834e='';var _0x33fdcb=[];if(assignByEmail!=''){var _0x4a5bb9=assignByEmail['split']('|');_0x4a5bb9[_0xdea54c(0x217)]();for(var _0x2ffdf7=0x0;_0x2ffdf7<_0x4a5bb9[_0xdea54c(0x1b7)];_0x2ffdf7++){_0x4a5bb9[_0x2ffdf7][_0xdea54c(0x20c)]('#')!=-0x1&&(_0x4a5bb9[_0x2ffdf7]=_0x4a5bb9[_0x2ffdf7][_0xdea54c(0x1be)]('#')[0x0],_0x4a5bb9[_0x2ffdf7]=_0x4a5bb9[_0x2ffdf7][_0xdea54c(0x1ec)]('_','@'));if(_0x2ffdf7==0x0)for(var _0x9f30bf=0x0;_0x9f30bf<_0x33e1b5[_0xdea54c(0x1e0)]['results'][_0xdea54c(0x1b7)];_0x9f30bf++){_0x33fdcb[_0xdea54c(0x235)](_0x33e1b5[_0xdea54c(0x1e0)][_0xdea54c(0x1df)][_0x9f30bf][_0xdea54c(0x1fa)]['toLowerCase']()==_0x4a5bb9[_0x2ffdf7]['toLowerCase']());}else for(var _0x9f30bf=0x0;_0x9f30bf<_0x33e1b5[_0xdea54c(0x1e0)][_0xdea54c(0x1df)][_0xdea54c(0x1b7)];_0x9f30bf++){_0x33fdcb[_0xdea54c(0x235)](_0x33e1b5[_0xdea54c(0x1e0)]['results'][_0x9f30bf][_0xdea54c(0x1fa)]['toLowerCase']()==_0x4a5bb9[_0x2ffdf7]['toLowerCase']());}}}else{var _0x37121f=[];_0x33fdcb[_0xdea54c(0x235)](!![]);}return _0x33fdcb[_0xdea54c(0x22a)](function(_0x36d01d,_0x4bbb9e){_0x4bbb9e==0x0?_0x31834e=_0x36d01d:_0x31834e=_0x36d01d||_0x31834e;}),_0x33e1b5[_0xdea54c(0x1b5)]['ID']=_0x33e1b5[_0xdea54c(0x1b5)]['ID']?_0x33e1b5[_0xdea54c(0x1b5)]['ID']:'',_0x175184&&(_0x28b6cd==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x216)]['ID']!='null':_0x33e1b5[_0xdea54c(0x216)]['ID']==_0x28b6cd)&&(_0x3eb20f=='All'?_0x33e1b5['Module']['ID']!=_0xdea54c(0x1f4):_0x33e1b5[_0xdea54c(0x1b5)]['ID']==_0x3eb20f)&&(_0xaec28f==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x1cc)]!='':_0x33e1b5['Worktype']==_0xaec28f)&&(_0xdb2421==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x20a)]!='':_0x33e1b5[_0xdea54c(0x20a)]==_0xdb2421)&&(_0x427b56==_0xdea54c(0x1f6)?_0x33e1b5[_0xdea54c(0x228)]!='':_0x33e1b5[_0xdea54c(0x228)]==_0x427b56)&&_0x3a93a0&&_0x31834e;}),$(_0x16fa7d(0x1b0))[_0x16fa7d(0x1ae)](),$('#myGanttChip')['append'](_0x3bde08),arrCurrentGantt=arrFilterDataBind[_0x16fa7d(0x1a8)](function(_0xd4f561){return _0xd4f561;}),CreateTaskGanttChart(arrFilterDataBind);}function a0_0x30ed(){var _0xb732dd=['All','months','...','#rdoGanttTaskOut','EMail','pplassigntoInbox','\x20(Overdue)','#ProjectModule','Completed','#DateSortGantt','\x20(Open)','ganttRedBorder','ShowCommonStandardDateFormat','#UserAllProject','option','StartDate','\x20(Completed)','getDate','8JeNDMK','#NameSortGantt','CurrentPhase','#WorkTypeOfProject','indexOf','modal','#ddlInboxProject\x20option:selected','format','webAbsoluteUrl','show','<div\x20class=\x27upload-chip\x27>General\x20Task</div>','True','</div>','toString','ClientID','pop','#txtFilterAssignBy','Top','ganttGreenBorder','ProjectName','hours','<div\x20class=\x27upload-chip\x27>Open</div>','dateFormat','DueDate','#ganttchat','append','ganttOliveBorder','btoa','TaskCategory','href','sort','<div\x20class=\x22panel\x20panel-default\x20shadow2\x22\x20style=\x22margin:100px;\x22>','TaskPriority','DD/MMM/YYYY','forEach','#btnGanttFilter','userEmail','.bar','hide','MM\x20dd,\x20yy','4105yLuyUO','TaskOverdue','trigger','Assigned\x20By:','<option\x20value=\x27All\x27>All</option>','push','hover','auto\x20right','/Pages/TaskDetails.aspx?WebAppId=','#ddlInboxClient\x20option:selected','click','html','#RecentSortGantt','3593169fAjUos','ganttOrangeBorder','2946JmFGoO','Cancelled',';\x20Completion:\x20','12076031MzFSvN','\x20(Close)','#pplassigntoInbox_TopSpan_ResolvedList','val','filter','2TVzvvG','&TaskId=','Assigned\x20To:','ready','Task\x20Name:\x20','empty','Undefined','#myGanttChip','weeks','#txtPriority\x20option:selected','Start\x20Date:\x20','General\x20Task','Module','popover','length','#txtFilterStatusInbox','TeamMeeting','substring','datepicker','#taskIn','&EditMode=','split','Title','inArray','scroll','<div\x20class=\x27upload-chip\x27>Overdue</div>','setHours','287256CoJUqb','1171072UjHIeG','text','#btnKanbanFilter','from','gantt','Low','ganttBlueBorder','Worktype','Created','<div\x20class=\x27upload-chip\x27>Pending</div>','10kOsDaf','#txtFilterStatusInbox\x20option:selected','\x20(Hold)','<div\x20class=\x27upload-chip\x27>','join','#btnClearKanban','AssignedBy','attr','change','#btnTaskInClear','ProjectFullName','#ddlInboxProject','#ddlInboxClient','MM/DD/YYYY','#WorkTypeOfProject\x20option','#txtPriority','results','TaskAssignTo','4774525sDIsip','checked','CompletionPersent','values','416566Gyyhco','False','.TaskGantt','use\x20strict','TaskPending','Open','toLowerCase','replace','setDate','TeamChannel','Hold','prop','#ProjectModule\x20option:selected','\x20(Cancelled)','userDisplayName','null','Medium'];a0_0x30ed=function(){return _0xb732dd;};return a0_0x30ed();}function CreateTaskGanttChart(_0x1e2911){var _0x177b47=a0_0x2fa111;$(_0x177b47(0x1e7))['empty']();var _0x3a076e=[],_0x1e0696=[];TaskdemoSource=[];var _0x5138f7=![],_0x2664c2='',_0x5d3bad=[];if(_0x1e2911[_0x177b47(0x1b7)]>0x0){for(var _0x548eec=0x0;_0x548eec<_0x1e2911['length'];_0x548eec++){if(_0x1e2911[_0x548eec][_0x177b47(0x1b5)]!=0x0){if(jQuery[_0x177b47(0x1c0)](_0x1e2911[_0x548eec][_0x177b47(0x1b5)][_0x177b47(0x1bf)],_0x1e0696)!='-1'){}else{_0x3a076e=[];var _0x3d65c4=_0x1e2911[_0x548eec][_0x177b47(0x1b5)][_0x177b47(0x1bf)];_0x3d65c4=_0x3d65c4?_0x3d65c4:'',_0x3a076e=_0x1e2911[_0x177b47(0x1a8)](function(_0x5a0dc6){var _0x343350=_0x177b47;return _0x5a0dc6[_0x343350(0x1b5)][_0x343350(0x1bf)]==_0x3d65c4;});for(var _0xb9985f=0x0;_0xb9985f<_0x3a076e[_0x177b47(0x1b7)];_0xb9985f++){var _0x59ece6=new Date(_0x3a076e[_0xb9985f]['StartDate'])[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0),_0x1e88cd=new Date(_0x3a076e[_0xb9985f][_0x177b47(0x21f)])[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0);_0x5d3bad=_0x3a076e[_0xb9985f][_0x177b47(0x1e0)][_0x177b47(0x1df)][_0x177b47(0x1a8)](function(_0x2cd295){var _0x306406=_0x177b47;return _0x2cd295[_0x306406(0x1fa)]['toLowerCase']()==_spPageContextInfo[_0x306406(0x22c)][_0x306406(0x1eb)]();});_0x3a076e[_0xb9985f][_0x177b47(0x1d5)][_0x177b47(0x1fa)]['toLowerCase']()==_spPageContextInfo[_0x177b47(0x22c)]['toLowerCase']()&&(_0x5138f7=!![]);if(_0x5d3bad==[]&&_0x5138f7==![])var _0x17c2f3='';else{if(_0x5138f7==!![])var _0x17c2f3=_spPageContextInfo[_0x177b47(0x210)]+_0x177b47(0x238)+Logged_CompanyId+_0x177b47(0x1aa)+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)](_0x177b47(0x213));else var _0x17c2f3=_spPageContextInfo[_0x177b47(0x210)]+_0x177b47(0x238)+Logged_CompanyId+_0x177b47(0x1aa)+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)]('False');}var _0x421d51='';_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]['length']>0x14?_0x2664c2=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)][_0x177b47(0x1ba)](0x0,0x14)+_0x177b47(0x1f8):_0x2664c2=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)];if(new Date(_0x3a076e[_0xb9985f]['DueDate'])<new Date(new Date()['setHours'](0x0,0x0,0x0,0x0))&&_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1ea))_0x421d51='ganttBlueBorder',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1fc);else{if(_0x3a076e[_0xb9985f]['CurrentPhase']==_0x177b47(0x1ea))_0x421d51='ganttBlueBorder',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x200);else{if(_0x3a076e[_0xb9985f]['CurrentPhase']==_0x177b47(0x1fe))_0x421d51=_0x177b47(0x222),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x206);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]=='Hold')_0x421d51='ganttOrangeBorder',_0x2664c2=_0x2664c2+_0x177b47(0x1d1),fullTitle=_0x3a076e[_0xb9985f]['Title']+_0x177b47(0x1d1);else _0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1a2)?(_0x421d51=_0x177b47(0x201),_0x2664c2=_0x2664c2+_0x177b47(0x1f2),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1f2)):(_0x421d51=_0x177b47(0x21a),_0x2664c2=_0x2664c2+_0x177b47(0x1a5),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1a5));}}}var _0x4a0027=fullTitle+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f][_0x177b47(0x205)]))+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f]['DueDate']))+';'+_0x3a076e[_0xb9985f][_0x177b47(0x1e3)];_0xb9985f==0x0?TaskdemoSource[_0x177b47(0x235)]({'name':_0x3d65c4,'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f][_0x177b47(0x1e3)]),_0x3a076e[_0xb9985f][_0x177b47(0x20a)],_0x4a0027,_0x17c2f3]}]}):TaskdemoSource['push']({'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f][_0x177b47(0x1e3)]),_0x3a076e[_0xb9985f][_0x177b47(0x20a)],_0x4a0027,_0x17c2f3]}]});}_0x1e0696['push'](_0x1e2911[_0x548eec]['Module'][_0x177b47(0x1bf)]);}}}_0x3a076e=[],_0x5d3bad=[],_0x5138f7=![];var _0x414fea=null;_0x3d65c4=null,_0x3a076e=_0x1e2911[_0x177b47(0x1a8)](function(_0x1e76a2){var _0x15903d=_0x177b47;return(_0x1e76a2[_0x15903d(0x1d9)]==_0x414fea||_0x1e76a2['ProjectFullName']=='')&&(_0x1e76a2[_0x15903d(0x1b5)][_0x15903d(0x1bf)]!=_0x3d65c4||_0x1e76a2[_0x15903d(0x1b5)][_0x15903d(0x1bf)]!='');});for(var _0xb9985f=0x0;_0xb9985f<_0x3a076e[_0x177b47(0x1b7)];_0xb9985f++){var _0x59ece6=new Date(_0x3a076e[_0xb9985f][_0x177b47(0x205)])[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0);_0x59ece6=new Date(_0x59ece6);var _0x1e88cd=new Date(_0x3a076e[_0xb9985f][_0x177b47(0x21f)])['setHours'](0x0,0x0,0x0,0x0);_0x1e88cd=new Date(_0x1e88cd),_0x5d3bad=_0x3a076e[_0xb9985f][_0x177b47(0x1e0)]['results'][_0x177b47(0x1a8)](function(_0x3a422e){var _0x3e2ca4=_0x177b47;return _0x3a422e['EMail'][_0x3e2ca4(0x1eb)]()==_spPageContextInfo['userEmail']['toLowerCase']();});_0x3a076e[_0xb9985f][_0x177b47(0x1d5)][_0x177b47(0x1fa)][_0x177b47(0x1eb)]()==_spPageContextInfo[_0x177b47(0x22c)][_0x177b47(0x1eb)]()&&(_0x5138f7=!![]);if(_0x5d3bad==[]&&_0x5138f7==![])var _0x17c2f3='';else{if(_0x5138f7==!![])var _0x17c2f3=_spPageContextInfo[_0x177b47(0x210)]+'/Pages/TaskDetails.aspx?WebAppId='+Logged_CompanyId+'&TaskId='+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)](_0x177b47(0x213));else var _0x17c2f3=_spPageContextInfo[_0x177b47(0x210)]+_0x177b47(0x238)+Logged_CompanyId+'&TaskId='+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)](_0x177b47(0x1e6));}_0x3a076e[_0xb9985f][_0x177b47(0x1bf)][_0x177b47(0x1b7)]>0x14?_0x2664c2=_0x3a076e[_0xb9985f]['Title']['substring'](0x0,0x14)+_0x177b47(0x1f8):_0x2664c2=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)];if(new Date(_0x3a076e[_0xb9985f]['DueDate'])<new Date(new Date()[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0))&&_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1ea))_0x421d51='ganttBlueBorder',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1fc);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1ea))_0x421d51='ganttBlueBorder',_0x2664c2=_0x2664c2+'\x20(Open)',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x200);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1fe))_0x421d51=_0x177b47(0x222),_0x2664c2=_0x2664c2+_0x177b47(0x206),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x206);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1ef))_0x421d51=_0x177b47(0x1a0),_0x2664c2=_0x2664c2+'\x20(Hold)',fullTitle=_0x3a076e[_0xb9985f]['Title']+'\x20(Hold)';else _0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1a2)?(_0x421d51=_0x177b47(0x201),_0x2664c2=_0x2664c2+'\x20(Cancelled)',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+'\x20(Cancelled)'):(_0x421d51=_0x177b47(0x21a),_0x2664c2=_0x2664c2+_0x177b47(0x1a5),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1a5));}}}var _0x4a0027=fullTitle+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f]['StartDate']))+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f][_0x177b47(0x21f)]))+';'+_0x3a076e[_0xb9985f][_0x177b47(0x1e3)];_0xb9985f==0x0?TaskdemoSource[_0x177b47(0x235)]({'name':_0x177b47(0x1b4),'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f]['CompletionPersent']),_0x3a076e[_0xb9985f][_0x177b47(0x20a)],_0x4a0027,_0x17c2f3]}]}):TaskdemoSource[_0x177b47(0x235)]({'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f]['CompletionPersent']),_0x3a076e[_0xb9985f][_0x177b47(0x20a)],_0x4a0027,_0x17c2f3]}]});}_0x3a076e=[],_0x5d3bad=[],_0x5138f7=![];var _0x3d65c4=null;_0x414fea=null,_0x3a076e=_0x1e2911[_0x177b47(0x1a8)](function(_0x47a88e){var _0xf60c97=_0x177b47;return(_0x47a88e[_0xf60c97(0x1b5)][_0xf60c97(0x1bf)]==_0x3d65c4||_0x47a88e['Module'][_0xf60c97(0x1bf)]=='')&&(_0x47a88e[_0xf60c97(0x1d9)]!=_0x414fea&&_0x47a88e['ProjectFullName']!='');});for(var _0xb9985f=0x0;_0xb9985f<_0x3a076e[_0x177b47(0x1b7)];_0xb9985f++){var _0x59ece6=new Date(_0x3a076e[_0xb9985f][_0x177b47(0x205)])[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0),_0x1e88cd=new Date(_0x3a076e[_0xb9985f][_0x177b47(0x21f)])[_0x177b47(0x1c3)](0x0,0x0,0x0,0x0);_0x5d3bad=_0x3a076e[_0xb9985f][_0x177b47(0x1e0)][_0x177b47(0x1df)]['filter'](function(_0x587fdc){var _0x475be2=_0x177b47;return _0x587fdc[_0x475be2(0x1fa)]['toLowerCase']()==_spPageContextInfo[_0x475be2(0x22c)][_0x475be2(0x1eb)]();});_0x3a076e[_0xb9985f][_0x177b47(0x1d5)][_0x177b47(0x1fa)][_0x177b47(0x1eb)]()==_spPageContextInfo['userEmail'][_0x177b47(0x1eb)]()&&(_0x5138f7=!![]);if(_0x5d3bad==[]&&_0x5138f7==![])var _0x17c2f3='';else{if(_0x5138f7==!![])var _0x17c2f3=_spPageContextInfo['webAbsoluteUrl']+_0x177b47(0x238)+Logged_CompanyId+_0x177b47(0x1aa)+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)](_0x177b47(0x213));else var _0x17c2f3=_spPageContextInfo[_0x177b47(0x210)]+_0x177b47(0x238)+Logged_CompanyId+_0x177b47(0x1aa)+window[_0x177b47(0x223)](_0x3a076e[_0xb9985f]['Id'])+_0x177b47(0x1bd)+window[_0x177b47(0x223)](_0x177b47(0x1e6));}_0x3a076e[_0xb9985f][_0x177b47(0x1bf)][_0x177b47(0x1b7)]>0x14?_0x2664c2=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]['substring'](0x0,0x14)+_0x177b47(0x1f8):_0x2664c2=_0x3a076e[_0xb9985f]['Title'];if(new Date(_0x3a076e[_0xb9985f]['DueDate'])<new Date(new Date()['setHours'](0x0,0x0,0x0,0x0))&&_0x3a076e[_0xb9985f]['CurrentPhase']==_0x177b47(0x1ea))_0x421d51=_0x177b47(0x1cb),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x1fc);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]=='Open')_0x421d51=_0x177b47(0x1cb),_0x2664c2=_0x2664c2+_0x177b47(0x200),fullTitle=_0x3a076e[_0xb9985f]['Title']+'\x20(Open)';else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1fe))_0x421d51=_0x177b47(0x222),_0x2664c2=_0x2664c2+_0x177b47(0x206),fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+_0x177b47(0x206);else{if(_0x3a076e[_0xb9985f][_0x177b47(0x20a)]==_0x177b47(0x1ef))_0x421d51='ganttOrangeBorder',_0x2664c2=_0x2664c2+'\x20(Hold)',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+'\x20(Hold)';else _0x3a076e[_0xb9985f]['CurrentPhase']==_0x177b47(0x1a2)?(_0x421d51=_0x177b47(0x201),_0x2664c2=_0x2664c2+_0x177b47(0x1f2),fullTitle=_0x3a076e[_0xb9985f]['Title']+_0x177b47(0x1f2)):(_0x421d51=_0x177b47(0x21a),_0x2664c2=_0x2664c2+'\x20(Close)',fullTitle=_0x3a076e[_0xb9985f][_0x177b47(0x1bf)]+'\x20(Close)');}}}var _0x4a0027=fullTitle+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f][_0x177b47(0x205)]))+';'+titanForWork[_0x177b47(0x202)](new Date(_0x3a076e[_0xb9985f][_0x177b47(0x21f)]))+';'+_0x3a076e[_0xb9985f][_0x177b47(0x1e3)];_0xb9985f==0x0?TaskdemoSource[_0x177b47(0x235)]({'name':_0x177b47(0x1af),'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f][_0x177b47(0x1e3)]),_0x3a076e[_0xb9985f][_0x177b47(0x20a)],_0x4a0027,_0x17c2f3]}]}):TaskdemoSource[_0x177b47(0x235)]({'desc':_0x2664c2,'values':[{'from':_0x59ece6,'to':_0x1e88cd,'label':fullTitle,'customClass':_0x421d51,'fullTitle':fullTitle,'dataObj':[_0x3a076e[_0xb9985f]['Id'],parseInt(_0x3a076e[_0xb9985f][_0x177b47(0x1e3)]),_0x3a076e[_0xb9985f]['CurrentPhase'],_0x4a0027,_0x17c2f3]}]});}}BindGanttTaskChart();}function BindGanttTaskChart(){var _0x5edc0c=a0_0x2fa111;if(TaskdemoSource[_0x5edc0c(0x1b7)]>0x0){_0x5edc0c(0x1e8);var _0xde90a2=new Date()[_0x5edc0c(0x1c3)](0x0,0x0,0x0,0x0)-new Date(TaskdemoSource[0x0][_0x5edc0c(0x1e4)][0x0][_0x5edc0c(0x1c8)])[_0x5edc0c(0x1ed)](0x23);if(new Date()[_0x5edc0c(0x215)]()['match'](/([A-Z]+[\+-][0-9]+.*)/)[0x1][_0x5edc0c(0x20c)]('India\x20Standard\x20Time')!=-0x1)for(var _0x6d0098=0x0,_0x206c43=TaskdemoSource[_0x5edc0c(0x1b7)],_0x2d402d;_0x6d0098<_0x206c43;_0x6d0098++){_0x2d402d=TaskdemoSource[_0x6d0098][_0x5edc0c(0x1e4)][0x0],_0x2d402d[_0x5edc0c(0x1c8)]+=_0xde90a2,_0x2d402d['to']+=_0xde90a2;}$('.TaskGantt')[_0x5edc0c(0x1c9)]({'source':TaskdemoSource,'navigate':_0x5edc0c(0x1c1),'scale':_0x5edc0c(0x1b1),'maxScale':_0x5edc0c(0x1f7),'minScale':_0x5edc0c(0x21c),'itemsPerPage':0xa,'scrollToToday':![],'useCookie':!![],'onItemClick':function(_0x174185){var _0x2084c6=_0x5edc0c;_0x174185[0x4]!=''&&(location[_0x2084c6(0x225)]=_0x174185[0x4]);}}),$('.TaskGantt')[_0x5edc0c(0x1b6)]({'selector':_0x5edc0c(0x22d),'title':function _0x33628e(_0x360d28){var _0x2f89cc=_0x5edc0c,_0x514c84=this['id'][_0x2f89cc(0x1be)](';');return _0x514c84=_0x2f89cc(0x1ad)+_0x514c84[0x0],_0x514c84;},'container':_0x5edc0c(0x1e7),'content':function _0x447731(_0x5d02cb){var _0xdf9527=_0x5edc0c,_0x42d4d7=this['id'][_0xdf9527(0x1be)](';'),_0x4ba44='';return(_0x42d4d7[0x3]==_0xdf9527(0x1f4)||_0x42d4d7[0x3]==null)&&(_0x42d4d7[0x3]='0'),_0x4ba44=_0xdf9527(0x1b3)+_0x42d4d7[0x1]+';\x20Due\x20Date:\x20'+_0x42d4d7[0x2]+_0xdf9527(0x1a3)+_0x42d4d7[0x3]+'\x20%',_0x4ba44;},'trigger':_0x5edc0c(0x236),'placement':_0x5edc0c(0x237)});}else{var _0x576d0a='<div\x20class=\x22col-md-12\x22>'+_0x5edc0c(0x227)+'<div\x20class=\x22panel-body\x22\x20style=\x22padding:60px;\x22><div\x20class=\x22row\x20text-center\x22><br>'+'<span><h2\x20class=\x22text-center\x22>No\x20task\x20created.</h2></span>';$(_0x5edc0c(0x1e7))[_0x5edc0c(0x19d)](_0x576d0a);}}function a0_0x1040(_0x5b1670,_0x25601e){var _0x30ed45=a0_0x30ed();return a0_0x1040=function(_0x1040bc,_0x4bb27b){_0x1040bc=_0x1040bc-0x19c;var _0x2420d3=_0x30ed45[_0x1040bc];return _0x2420d3;},a0_0x1040(_0x5b1670,_0x25601e);}function ClearGantt(){var _0x2e1a50=a0_0x2fa111;$('#UserAllProject')[_0x2e1a50(0x1a7)](_0x2e1a50(0x1f6)),$(_0x2e1a50(0x203))[_0x2e1a50(0x232)]('change'),$(_0x2e1a50(0x1fd))['val'](_0x2e1a50(0x1f6)),$(_0x2e1a50(0x20b))[_0x2e1a50(0x1a7)](_0x2e1a50(0x1f6)),$('#txtPriority')[_0x2e1a50(0x1a7)]('All'),$(_0x2e1a50(0x1db))[_0x2e1a50(0x1ae)]()[_0x2e1a50(0x221)](_0x2e1a50(0x234)),$(_0x2e1a50(0x1da))[_0x2e1a50(0x1ae)]()[_0x2e1a50(0x221)](_0x2e1a50(0x234)),$(_0x2e1a50(0x1bc))[_0x2e1a50(0x1a7)]('')[_0x2e1a50(0x1d6)]('type',_0x2e1a50(0x1c6))[_0x2e1a50(0x1d6)]('type','date'),$('#txtFilterStatusInbox')['val'](_0x2e1a50(0x1ea)),clearPeoplePickerControl(_0x2e1a50(0x1fb));var _0x187902=_0x2e1a50(0x1ea),_0x570947=_spPageContextInfo[_0x2e1a50(0x22c)],_0x2273c6='';_0x2273c6+=_0x2e1a50(0x21d),$(_0x2e1a50(0x1b0))[_0x2e1a50(0x1ae)](),$(_0x2e1a50(0x1b0))[_0x2e1a50(0x221)](_0x2273c6),CreateTaskGanttChart(arrLimitTaskInbox);}function SortGanttTasks(){var _0x14bc7b=a0_0x2fa111;$(_0x14bc7b(0x209))[_0x14bc7b(0x19c)](function(){var _0x25b3e3=_0x14bc7b;arrCurrentGantt[_0x25b3e3(0x226)]((_0xa5cbe3,_0x2c61cc)=>{var _0x569003=_0x25b3e3;let _0x19252f=_0xa5cbe3[_0x569003(0x1bf)][_0x569003(0x1eb)](),_0x390511=_0x2c61cc[_0x569003(0x1bf)][_0x569003(0x1eb)]();if(_0x19252f<_0x390511)return-0x1;if(_0x19252f>_0x390511)return 0x1;return 0x0;}),CreateTaskGanttChart(arrCurrentGantt);}),$(_0x14bc7b(0x19e))['click'](function(){var _0x44f417=_0x14bc7b;arrCurrentGantt[_0x44f417(0x226)](function(_0x58ade0,_0x36aaac){var _0x42c1bf=_0x44f417,_0x4478de=new Date(_0x58ade0['Created']),_0x51894d=new Date(_0x36aaac[_0x42c1bf(0x1cd)]);return _0x51894d-_0x4478de;}),CreateTaskGanttChart(arrCurrentGantt);}),$(_0x14bc7b(0x1ff))[_0x14bc7b(0x19c)](function(){arrCurrentGantt['sort'](function(_0x22458a,_0xcc659){var _0x7706cb=a0_0x1040,_0x561c96=new Date(_0x22458a['DueDate']),_0x5d67f7=new Date(_0xcc659[_0x7706cb(0x21f)]);return _0x5d67f7-_0x561c96;}),CreateTaskGanttChart(arrCurrentGantt);}),$('#PrioritySortGantt')['click'](function(){var _0x2ce2c4=_0x14bc7b;const _0x2c5cfe=[_0x2ce2c4(0x219),_0x2ce2c4(0x1f5),_0x2ce2c4(0x1ca)];arrCurrentGantt['sort']((_0x539668,_0x580203)=>_0x2c5cfe['indexOf'](_0x539668[_0x2ce2c4(0x228)])-_0x2c5cfe[_0x2ce2c4(0x20c)](_0x580203[_0x2ce2c4(0x228)])),CreateTaskGanttChart(arrCurrentGantt);});}