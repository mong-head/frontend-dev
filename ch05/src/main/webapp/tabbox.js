// DOM Level 2 Event 처리 : element의 event의 Listener 등록 방식
// 2) JavaScript code ( DOM API 사용 )로만 작성

var tabBox = {
	init: function() {
		console.log(this);
		window.addEventListener("load", this._onWindowLoad.bind(this));
	},
	_onWindowLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0]; // array
		console.log(divTabBox.childNodes); //[text, ul, text, div, text] : div 다음 text나올 수 있고, ul다음도 ...

		var ulTabs = divTabBox.childNodes[1];
		var liTabs = ulTabs.getElementsByTagName('li');
		
		console.log(this);
		for (var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener("click", this._onTabClicked);
		}
	},
	_onTabClicked: function() {
		// unselected
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length == 1) && (lisSelected[0].className = "")

		// selected
		this.className = "selected";
	}
};