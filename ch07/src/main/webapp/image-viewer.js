var imageViewer = {
    init: function () {
        var _this = this;
        console.log("init:" + this);
        $(function () {
            console.log("dom loaded:" + _this);
            // 시작 시 이미지 선택
            _this._changeImage();  

            // button
            $("#btn-change").click(_this._changeImage.bind(_this));
            $("#btn-slideshow").click(_this._slideShow.bind(_this));

            // double click
            $(".image-viewer img").dblclick(_this._consoleLog);

        })
    },
    _changeImage: function () {
        // 랜덤 변수 
        var result = Math.floor(Math.random() * (this.images.length - 1)) + 1;
        var image = this.images[result].split(":");

        $("div img")
            .attr({
                "src": "images/" + image[1],
                "alt": image[0],
                "title": image[0]
            })
    },
    _slideShow: function () {
        var _this = this;
        if(this._intervalId == null){
            this._intervalId = setInterval(_this._changeImage.bind(_this), 500);
    
            $("#btn-slideshow").text("stop slide-show");
        } else {
            clearInterval(this._intervalId);
            this._intervalId = null;

            $("#btn-slideshow").text("start slide-show");
        }
        
    },
    _intervalId : null,
    _consoleLog : function(){
        var name = $(this).attr("alt");
		console.log(name);
    },
    images: [
        "국화:Chrysanthemum.jpg",
        "사막:Desert.jpg",
        "수국:Hydrangeas.jpg",
        "해파리:Jellyfish.jpg",
        "코알라:Koala.jpg",
        "등대:Lighthouse.jpg",
        "펭귄:Penguins.jpg",
        "툴립:Tulips.jpg"
    ]
}
