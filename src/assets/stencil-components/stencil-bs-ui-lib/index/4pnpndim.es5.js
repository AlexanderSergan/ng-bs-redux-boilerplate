/*! Built with http://stenciljs.com */
index.loadComponents(function(l,n,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=function(){function l(){}return l.prototype.render=function(){return n("div",{class:"container pt-4"},n("h2",null,"Navbar component"),n("div",{class:"row"},n("div",{class:"col-lg-12"},n("div",{class:"jumbotron pt-3"},n("div",{class:"row"},n("div",{class:"col-lg-12"},n("h3",null,"Usage "),n("p",null,"If setting a 'navbar-brand' element, set the 'slot=\"slot-navbar-brand-left\"' attribute to show the element on the left side of the 'navbar-toggler' element. Set 'slot=\"slot-navbar-brand-right\"', otherwise. Remove the 'slot' attribute and insert the 'navbar-brand' into 'slot=\"slot-navbar-content\"' element if you don't want it to be shown when 'navbar-toggler' element is visible."),n("div",null,n("scb-navbar",{id:"navbarSupportedContent",size:"lg",navbarcolor:"light",bgcolor:"light",placement:""},n("a",{slot:"slot-navbar-brand-left",class:"navbar-brand",href:"#"},"Navbar"),n("ul",{slot:"slot-navbar-content",class:"navbar-nav mr-auto"},n("li",{class:"nav-item active"},n("a",{class:"nav-link",href:"#"},"Home ",n("span",{class:"sr-only"},"(current)"))),n("li",{class:"nav-item"},n("a",{class:"nav-link",href:"#"},"Link")),n("li",{class:"nav-item dropdown"},n("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),n("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},n("a",{class:"dropdown-item",href:"#"},"Action"),n("a",{class:"dropdown-item",href:"#"},"Another action"),n("div",{class:"dropdown-divider"}),n("a",{class:"dropdown-item",href:"#"},"Something else here"))),n("li",{class:"nav-item"},n("a",{class:"nav-link disabled",href:"#"},"Disabled"))))))),n("br",null),n("div",{class:"row"},n("div",{class:"col-lg-4"},n("pre",null,n("code",{class:"lang-tsx"},n("span",null,"<scb-navbar"),n("br",null),n("span",{class:"hljs-built_in ml-4"},'id="navbarSupportedContent"'),n("br",null),n("span",{class:"hljs-built_in ml-4"},'size="lg"'),n("br",null),n("span",{class:"hljs-built_in ml-4"},'navbarcolor="light"'),n("br",null),n("span",{class:"hljs-built_in ml-4"},'bgcolor="light"'),n("br",null),n("span",{class:"hljs-built_in ml-4"},"placement=''"),n("span",null,">"),n("br",null),n("span",null,"</cwc-navbar>")))),n("div",{class:"col-lg-8"},n("table",{class:"table"},n("thead",null,n("tr",null,n("th",null,"Param"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Description"))),n("tbody",null,n("tr",null,n("td",null,"id"),n("td",null,"String"),n("td",null,"''"),n("td",null,"Set the same id as 'collapse navbar-collapse' element for the 'navbar-toggler' button element to work.")),n("tr",null,n("td",null,"size"),n("td",null,"String"),n("td",null,"''"),n("td",null,"For responsive collapsing set appropriate class to .navbar-expand-{}. Accepted values are: '",n("strong",null,"sm"),"', ",n("strong",null,"'md"),"', '",n("strong",null,"lg"),"' or '",n("strong",null,"xl"),"'. For navbars that never collapse, leave the property empty.")),n("tr",null,n("td",null,"navbarcolor"),n("td",null,"String"),n("td",null,"'light'"),n("td",null,"Theming classes. Accepted values are: '",n("strong",null,"light"),"' or '",n("strong",null,"dark"),"'.")),n("tr",null,n("td",null,"bgcolor"),n("td",null,"String"),n("td",null,"'light'"),n("td",null,"Background color classes. Accepted values are: '",n("strong",null,"primary"),"', '",n("strong",null,"secondary"),"', '",n("strong",null,"success"),"', '",n("strong",null,"danger"),"', '",n("strong",null,"warning"),"', '",n("strong",null,"info"),"', '",n("strong",null,"light"),"' or '",n("strong",null,"dark"),"'.")),n("tr",null,n("td",null,"placement"),n("td",null,"String"),n("td",null,"''"),n("td",null,"Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use position: fixed. Also note that .sticky-top uses position: sticky, which ",n("a",{href:"https://caniuse.com/#feat=css-sticky",target:"_blank"},"isn’t fully supported in every browser"),". ",n("br",null),"Accepted values are: '",n("strong",null,"position-static"),"', '",n("strong",null,"position-relative"),"', '",n("strong",null,"position-absolute"),"', '",n("strong",null,"position-fixed"),"', '",n("strong",null,"position-sticky"),"', '",n("strong",null,"fixed-top"),"', '",n("strong",null,"fixed-bottom"),"', '",n("strong",null,"sticky-top"),"'. "))))))))))},Object.defineProperty(l,"is",{get:function(){return"navbar-page"},enumerable:!0,configurable:!0}),l}();l.NavbarPage=e},"4pnpndim");