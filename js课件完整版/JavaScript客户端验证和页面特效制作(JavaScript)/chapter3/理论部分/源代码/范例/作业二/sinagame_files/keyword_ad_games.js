//for bbs
var __$AdShowConfig = new function(){
  
  //server config
	this.server = '';		
	this.version = 1.1;
	
	//1.2		
	/*
	this.siteId = '8223FF21-7CE7-4C82-9E5B-4132BF5E1E69';
	this.zone = 'carchannel';
	this.keywordUrl = 'http://sl.sina.com.cn/sld/lkwl?';
	this.newsUrl = 'http://iask.com/innews/ad?d=33&&k=%keyword%';
	this.adUrl = 'http://sl.sina.com.cn/sld/lad?';
	this.srcUrl = 'http://d1.sina.com.cn/shuhu/js/';
	this.coreJsUrl = this.srcUrl + 'core.js';
	this.searchUrl = '';
	this.logUrl = '';
	this.aboutUrl = '';
	*/
	
	//test
	this.siteId = 'games.sina';
	this.zone = '游戏';
	this.keywordUrl = 'http://202.106.187.141/sld/lkwl?';
	this.newsUrl = 'http://iask.com/innews/ad?d=115&k=%keyword%'; //d=115为游戏频道
	this.adUrl = 'http://202.106.187.141/sld/lad?ref=' + escape(window.location) + '&';
	this.srcUrl = 'http://d1.sina.com.cn/shuhu/js/';
	//this.srcUrl = 'src/';
	this.coreJsUrl = this.srcUrl + 'core.js';
	this.searchUrl = '';
	this.logUrl = '';
	this.aboutUrl = '';
	
	/** analysis config **/
	this.adAnalysisSourceName = "artibody";	
	this.adAnalysisTagList = new Array('b','p','td','span','div','table','tbody' ,'tr','td','th');
	this.adAnalysisSource = document.getElementsByName(this.adAnalysisSourceName) ;
	if(this.adAnalysisSource==null) this.adAnalysisSource=document.getElementById(this.adAnalysisSourceName);
	
	/** ad display config **/
	this.adDisplayForm = "float|fix";
	this.fixedAdZone = "_adShow_";
	this.adShowAreaInitDisplay = 'block';
	this.adLoadingText = "广告载入中...";
	
	//-- pop ad -- 
	this.adFloatDivTemplet = '\
		<div id="__$adDiv"  style="	position:absolute;padding: 1px;	font:normal 12px 宋体;filter:alpha(opacity=100); line-height:18px;z-index:99999;-moz-opacity:1.0;visibility:hidden;" >\
		<div id="shadow-container"><div class="shadow1"><div class="shadow2"><div class="shadow3"><div class="container" style="width:280px;">\
		<div id = "__$adLogo" align="right" style="cursor:move;background-color:#E7E7E7;color:#333;height:18px;overflow:hidden;line-height:18px;font-size:12px;overflow:hidden; vertical-align:top;"><div style="padding:3px 5px 0 0;"><img src="' + this.srcUrl + 'drag.gif" align="absmiddle"> iLink <img src="' + this.srcUrl + 'drag.gif" align="absmiddle"></div></div>\
		<div name="__$adHtml" id="__$adHtml"></div>\
		<div style="background-color:#EEE; padding-left:10px; text-align:left;"><form name="_searchiask" method="get" action="http://www.iask.com/s" target="_blank">在iAsk中搜索更多 <input id="_sl_searchKey" name="k" type="text" style="width:80px; height:14px; border:1px solid #7F9DB9; font-size:12px;" onmouseover="this.select();"> <input type="submit" value=" 搜索 " style="height:18px;"></form></div>\
		</div></div></div></div></div>\
		</div>\
		';
	this.adFloatHtmlHead = '';
	this.adFloatHtmlSnippetTemplet = '\
		<div style="text-align:left;padding-left:5px;"><img src="' + this.srcUrl + 'ref.gif" align="absmiddle" style="margin-right:5px;"><a href="%url%" target="_blank">%urlText%</a></div>\
		<div style="text-align:left;color:#333;padding:6px 0 6px 17px;">%summary% <a href="%url%" target="_blank">推广</a></div>\
		';
	this.adFloatFlvHtmlSnippetTemplet = '<center><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="240" height="100">\
		<param name="movie" value="vcastr21.swf"><param name="quality" value="high"><param name="IsAutoPlay" value="1"><param name="menu" value="false"><param name="FlashVars" value="vcastr_file=%logo%&vcastr_title=%caption%&IsAutoPlay=1">\
		<embed src="' + this.srcUrl + 'vcastr21.swf" FlashVars="vcastr_file=%logo%&vcastr_title=%caption%&IsAutoPlay=1" isAutoPlay="1" menu="false" quality="high" width="240" height="120" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\
		</object></center>'; 
	this.adFloatHtmlFoot = '';

	//-- pop news --
	this.newsFloatHtmlHead = '<div style="margin:6px 0;">';																
	this.newsFloatHtmlSnippetTemplet = '\
		<div style="text-align:left;padding:4px 5px;"><img src="' + this.srcUrl + 'ref.gif" style="margin:0 6px 0 2px;"><a href="%url%" onclick="javascript:clickTracker();" target="_blank" class="sl_link">%urlText%</a></div>\
	';
	this.newsFloatHtmlFoot = '</div>';
	
	//-- fix ad --
	this.adFixedTemplet = '<div id="_$newsFixedDiv"></div><div id="_$adFixedDiv" ></div>';			
	this.adShowArea = "_$adFixedDiv";
	this.newsShowArea = "_$newsFixedDiv";	
	
	this.adFixedHtmlHead = '';
	this.adFixedHtmlSnippetTemplet = '<table width="250" border="0">' +
		'<tr><td  id="adCaption">%caption%</td><td colspan="2" rowspan="2" id="adLogo" align="center"><img src="%logo%"></td></tr>' +
		'<tr><td id="adSummary">%summary%</td></tr><tr><td colspan="3" id="adUrl" style="background-color:#eeeeee"><a href="%url%" target="_blank">%urlText%</a></td></tr>' +
		'</table>';
	this.adFixedHtmlFoot = '';		
	
	this.newsFixedHtmlHead = '';
	this.newsFixedHtmlSnippetTemplet = '<table width="250" border="0">' +
		'<tr><td colspan="3" id="adUrl" style="background-color:#eeeeee"><a href="%url%" target="_blank">%urlText%</a></td></tr>' +
		'<tr><td id="adSummary">%summary%</td></tr>' +
		'</table>';
	this.newsFixedHtmlFoot = '';
							
	//this.showFloatAD = true; //没用
	
	/** sys param config **/
	this.showNews = true;	
	this.showAd = false;
	this.markKey = false;
	this.responseKeyEvent = true;

	//add in v1.1
	this.showNewsTotal = 6;
	this.showNewsPerKey = 3;		
	this.adPerKey = 1;
	this.maxMatchKey = -1;
	this.maxAdNum = 5;
	this.keyCatalog = "";
	this.markCountPerKey = 1;
	
	var oAdShowArea =  document.getElementById? document.getElementById(this.fixedAdZone) : getElementsByName(this.fixedAdZone)[0];
	if(oAdShowArea)
		oAdShowArea.innerHTML = this.adFixedTemplet;
}

function _sl_cb_displayKey_pre(src, keyAry){
	var _key = document.getElementById("_sl_searchKey") || _sl_searchKey;
	if(!_key)return;
	_key.value = keyAry[0].a;
	return true;
}

function _sl_cb_displayKey_after(obj, key){	
}	

function _sl_loadCssScript(){
	var css = document.createElement('link');
	css.type = 'text/css';
	css.rel = "stylesheet";
	css.href = __$AdShowConfig.srcUrl + "smartlink.css";
	document.getElementsByTagName("head")[0].appendChild(css);
	
	var script = document.createElement("script");
	script.type="text/javascript";
	script.src = __$AdShowConfig.coreJsUrl;		
	document.getElementsByTagName("head")[0].appendChild(script);
}

var _IE=document.all;
var _FF=document.getElementById&&!document.all;
if(_IE){
	document.onreadystatechange = function(){
		if(document.readyState=="complete") _sl_loadCssScript();
	}
}else{
	window.onload = _sl_loadCssScript;
}

var DEBUG = false;

//click tracker
function clickTracker(){
	var adImg2 = new Image();
	adImg2.src = 'http://sina.allyes.com/main/adfclick?db=sina&bid=82239,116716,116858&cid=0,0,0&sid=108657&advid=358&camid=15366&show=ignore&url=&'+Math.random();
}