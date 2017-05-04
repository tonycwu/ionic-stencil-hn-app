Ionic.loadComponents("4187a44a",function(i,e,t){var o=function(){function i(){}return i.prototype.render=function(){return e(this,t.theme(this,"list"),e("slot"))},i}(),d=function(){function i(){}return i.prototype.render=function(){return e(this,e("div.item-block",t.theme(this,"item"),[e("slot",{attrs:{name:"item-start"}}),e("div.item-inner",[e("div.input-wrapper",e("slot")),e("slot",{attrs:{name:"item-end"}})])]))},i}(),m=function(){function i(){}return i.prototype.render=function(){return e(this,t.theme(this,"label"),e("slot"))},i}();i.List=o,i.Item=d,i.Label=m},["ion-list","List",[],[],1,2,'ion-list,:host{display:block;visibility:inherit !important;contain:content}.list-md{margin:-1px 0 16px 0}.list-md .item-block .item-inner{border-bottom:1px solid #dedede}.list-md>.item-block:last-child ion-label,.list-md>.item-block:last-child .item-inner,.list-md>.item-wrapper:last-child ion-label,.list-md>.item-wrapper:last-child .item-inner{border-bottom:0}.list-md>ion-input:last-child::after{left:0}.list-md ion-item-options{border-bottom:1px solid #dedede}.list-md ion-item-options .button{display:inline-flex;align-items:center;margin:1px 0;height:calc(100% - 2px);border:0;border-radius:0;box-shadow:none;box-sizing:border-box}.list-md ion-item-options .button::before{margin:0 auto}.list-md .item[no-lines],.list-md .item[no-lines] .item-inner{border-width:0}.list-md+ion-list ion-list-header{margin-top:-16px}.list-md[inset]{margin:16px 16px 16px 16px;border-radius:2px}.list-md[inset] .item:first-child{border-top-width:0;border-top-left-radius:2px;border-top-right-radius:2px}.list-md[inset] .item:last-child{border-bottom-width:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px}.list-md[inset] .item-input{padding-right:0;padding-left:0}.list-md[inset]+ion-list[inset]{margin-top:0}.list-md[inset] ion-list-header{background-color:#fff}.list-md[no-lines] .item-block,.list-md[no-lines] ion-item-options,.list-md[no-lines] .item .item-inner{border-width:0}.list-header-md{margin-bottom:13px;padding-left:16px;min-height:4.5rem;border-top:1px solid #dedede;font-size:1.4rem;color:#757575}[dir="rtl"] .list-header-md{padding-right:16px;padding-left:0}.list-header-md-primary{color:#fff;background-color:#327eff}.list-header-md-secondary{color:#fff;background-color:#32db64}.list-header-md-danger{color:#fff;background-color:#f53d3d}.list-header-md-light{color:#000;background-color:#f4f4f4}.list-header-md-dark{color:#fff;background-color:#222}.list-md .item-input:last-child{border-bottom:1px solid #dedede}\n'],["ion-item","Item",[],[],1,2,"ion-item,:host{display:block;visibility:inherit !important;contain:content}.item-block{display:flex;overflow:hidden;align-items:center;justify-content:space-between;margin:0;padding:0;width:100%;min-height:4.4rem;border:0;font-weight:normal;line-height:normal;text-align:initial;text-decoration:none;color:inherit}.item-inner{display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;margin:0;padding:0;min-height:inherit;border:0}.input-wrapper{display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis}.item[no-lines],.item.item[no-lines] .item-inner{border:0}ion-item-group{display:block}ion-item-divider{z-index:100;display:flex;overflow:hidden;align-items:center;justify-content:space-between;margin:0;padding:0;width:100%;min-height:30px}ion-item-divider[sticky]{position:sticky;top:0}[vertical-align-top],ion-input.item{align-items:flex-start}.item-md{position:relative;padding-right:0;padding-left:16px;font-size:1.6rem;font-weight:normal;text-transform:none;color:#000;background-color:#fff;box-shadow:none;transition:background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)}.item-md.activated{background-color:#f1f1f1}.item-md[no-lines]{border-width:0}.item-md h1{margin:0 0 2px;font-size:2.4rem;font-weight:normal}.item-md h2{margin:2px 0;font-size:1.6rem;font-weight:normal}.item-md h3,.item-md h4,.item-md h5,.item-md h6{margin:2px 0;font-size:1.4rem;font-weight:normal;line-height:normal}.item-md p{overflow:inherit;margin:0 0 2px;font-size:1.4rem;line-height:normal;text-overflow:inherit;color:#666}.item-md.item-block .item-inner{padding-right:8px;border-bottom:1px solid #dedede}.item-md [item-left],.item-md [item-right]{margin:9px 8px 9px 0}.item-md ion-icon[item-left],.item-md ion-icon[item-right]{margin-top:11px;margin-bottom:10px;margin-left:0}.item-md .item-button{padding:0 .6em;height:25px;font-size:1.2rem}.item-md .item-button[icon-only] ion-icon,.item-md .item-button[icon-only]{padding:0 1px}.item-md ion-icon[item-left]+.item-inner,.item-md ion-icon[item-left]+.item-input{margin-left:24px}.item-md ion-avatar[item-left],.item-md ion-thumbnail[item-left]{margin:8px 16px 8px 0}.item-md ion-avatar[item-right],.item-md ion-thumbnail[item-right]{margin:8px}.item-md ion-avatar{min-width:40px;min-height:40px}.item-md ion-avatar ion-img,.item-md ion-avatar img{width:40px;height:40px;border-radius:50%;overflow:hidden}.item-md ion-thumbnail{min-width:80px;min-height:80px}.item-md ion-thumbnail ion-img,.item-md ion-thumbnail img{width:80px;height:80px}ion-item-group .item-md:first-child .item-inner{border-top-width:0}ion-item-group .item-md:last-child .item-inner,ion-item-group .item-md .item-wrapper:last-child .item-inner{border:0}.item-divider-md{padding-left:16px;color:#858585;background-color:#fff;border-bottom:1px solid #dedede;font-size:1.4rem}.item-md .text-md-primary{color:#327eff}.item-md-primary,.item-divider-md-primary{color:#fff;background-color:#327eff}.item-md-primary p,.item-divider-md-primary p{color:#fff}.item-md-primary.activated,.item-divider-md-primary.activated{background-color:#2e74eb}.item-md .text-md-secondary{color:#32db64}.item-md-secondary,.item-divider-md-secondary{color:#fff;background-color:#32db64}.item-md-secondary p,.item-divider-md-secondary p{color:#fff}.item-md-secondary.activated,.item-divider-md-secondary.activated{background-color:#2ec95c}.item-md .text-md-danger{color:#f53d3d}.item-md-danger,.item-divider-md-danger{color:#fff;background-color:#f53d3d}.item-md-danger p,.item-divider-md-danger p{color:#fff}.item-md-danger.activated,.item-divider-md-danger.activated{background-color:#e13838}.item-md .text-md-light{color:#f4f4f4}.item-md-light,.item-divider-md-light{color:#000;background-color:#f4f4f4}.item-md-light p,.item-divider-md-light p{color:#000}.item-md-light.activated,.item-divider-md-light.activated{background-color:#e0e0e0}.item-md .text-md-dark{color:#222}.item-md-dark,.item-divider-md-dark{color:#fff;background-color:#222}.item-md-dark p,.item-divider-md-dark p{color:#fff}.item-md-dark.activated,.item-divider-md-dark.activated{background-color:#343434}.list-md ion-item-sliding{background-color:#fff}.item-md ion-reorder{font-size:1.5em;opacity:.3}\n"],["ion-label","Label",[],[],1,2,'ion-label,:host{display:block;overflow:hidden;visibility:inherit !important;flex:1;margin:0;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}ion-label[fixed]{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-stacked ion-label,.item-label-floating ion-label{align-self:stretch;width:auto;max-width:100%}ion-label[stacked],ion-label[floating]{margin-bottom:0}.item-label-stacked .input-wrapper,.item-label-floating .input-wrapper{flex:1;flex-direction:column}.item-label-stacked ion-select,.item-label-floating ion-select{align-self:stretch;max-width:100%}.label-md{margin:13px 8px 13px 0}.item-input .label-md,.item-select .label-md,.item-datetime .label-md{color:#999}.label-md[stacked]{font-size:1.2rem}.label-md[floating]{transform:translate3d(0, 27px, 0);transform-origin:left top;transition:transform 150ms ease-in-out}[dir="rtl"] .label-md[floating]{transform-origin:right top}.label-md[stacked],.label-md[floating]{margin-bottom:0;margin-left:0}.input-has-focus .label-md[stacked],.input-has-focus .label-md[floating]{color:#327eff}.input-has-focus .label-md[floating],.input-has-value .label-md[floating]{transform:translate3d(0, 0, 0) scale(0.8)}.item-md.item-label-stacked [item-right],.item-md.item-label-floating [item-right]{margin-top:7px;margin-bottom:7px}.label-md-primary,.item-input .label-md-primary,.item-select .label-md-primary,.item-datetime .label-md-primary{color:#327eff}.label-md-secondary,.item-input .label-md-secondary,.item-select .label-md-secondary,.item-datetime .label-md-secondary{color:#32db64}.label-md-danger,.item-input .label-md-danger,.item-select .label-md-danger,.item-datetime .label-md-danger{color:#f53d3d}.label-md-light,.item-input .label-md-light,.item-select .label-md-light,.item-datetime .label-md-light{color:#f4f4f4}.label-md-dark,.item-input .label-md-dark,.item-select .label-md-dark,.item-datetime .label-md-dark{color:#222}\n']);