/*! Built with http://stenciljs.com */
index.loadBundle("ydj9ascy",["exports"],function(e){var d=window.index.h,a=function(){function e(){this.collapseid="collpaseComponent",this.items=[{cardHeaderId:"heading#1",cardBodyId:"collapse#1",cardHeaderContent:"Card Item #1",cardBodyContent:"Card Body #1",showOnInit:!0}]}return e.prototype.render=function(){var e=this;return d("div",{id:this.collapseid},this.items.map(function(a){return d("div",{class:"card"},d("div",{class:"card-header",id:a.cardHeaderId},d("h5",{class:"mb-0"},d("button",{class:"btn btn-link","data-toggle":"collapse","data-target":"#"+a.cardBodyId,"aria-expanded":"true","aria-controls":a.cardBodyId},a.cardHeaderContent))),d("div",{id:a.cardBodyId,class:{collapse:!0,show:a.showOnInit},"aria-labelledby":a.cardHeaderId,"data-parent":"#"+e.collapseid},d("div",{class:"card-body",innerHTML:a.cardBodyContent})))}))},Object.defineProperty(e,"is",{get:function(){return"scb-collapse"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{collapseid:{type:String,attr:"collapseid"},items:{type:"Any",attr:"items"}}},enumerable:!0,configurable:!0}),e}();e.ScbCollapse=a,Object.defineProperty(e,"__esModule",{value:!0})});