Ionic.loadComponents("5b8c7de3",function(n,e,t){var o=function(){function n(){this.isOpen=!1,this.enabled=!0,this.maxEdgeStart=50,this.persistent=!1,this.side="start",this.swipeEnabled=!0}return n.prototype.render=function(){var n;return n="push"===this.type?"ion-menu-push":"overlay"===this.type?"ion-menu-overlay":"ion-menu-reveal",e(this,{attrs:{role:"navigation"}},[e(n+".menu-inner",t.theme(this,"menu-"+n,{props:{}}),e("slot"))])},n.prototype.onBackdropClick=function(n){n.preventDefault(),n.stopPropagation()},n}();n.Menu=o},["ion-menu","Menu",[],[],1,0,"ion-menu,:host{position:absolute;top:0;right:0;bottom:0;left:0;display:none;visibility:inherit !important;contain:strict}ion-menu.show-menu{display:block}.menu-inner{position:absolute;top:0;right:auto;bottom:0;left:0;display:block;width:304px;height:100%;transform:translate3d(-9999px, 0, 0);contain:strict}.menu-inner>ion-header,.menu-inner>ion-content,.menu-inner>ion-footer{position:absolute}ion-menu[side=right]>.menu-inner{right:0;left:auto}ion-menu ion-backdrop{z-index:-1;display:none;opacity:.01}.menu-content{transform:translate3d(0, 0, 0)}.menu-content-open{cursor:pointer;touch-action:manipulation}.menu-content-open ion-pane,.menu-content-open ion-content,.menu-content-open .toolbar{pointer-events:none}@media (max-width: 340px){.menu-inner{width:264px}}ion-menu[type=reveal]{z-index:0}ion-menu[type=reveal].show-menu .menu-inner{transform:translate3d(0, 0, 0)}ion-menu[type=overlay]{z-index:80}ion-menu[type=overlay] .show-backdrop{display:block}\n"]);