/*! Built with http://stenciljs.com */
index.loadBundle("yxh5yost",["exports"],function(e){var r=window.index.h,t=function(){function e(){this.isError=!1}return e.prototype.handleClick=function(){this.isError=!0,console.log("Error image load"),this.el.getElementsByTagName("img")[0].src=this.brokenUrl},e.prototype.render=function(){var e=this;return 1!=this.isError?r("img",{class:"fcl-image-custom",src:this.src,onError:function(){return e.handleClick()}}):r("img",{src:this.src,onError:function(){return e.handleClick()}})},e.prototype.componentDidLoad=function(){},e.prototype.componentWillUpdate=function(){},Object.defineProperty(e,"is",{get:function(){return"fcl-image"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{brokenUrl:{type:"Any",attr:"broken-url"},el:{elementRef:!0},height:{type:"Any",attr:"height"},src:{type:"Any",attr:"src"},width:{type:"Any",attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".fcl-image-custom{width:100}"},enumerable:!0,configurable:!0}),e}();e.FclImage=t,Object.defineProperty(e,"__esModule",{value:!0})});