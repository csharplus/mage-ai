(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{53779:function(e,n,t){"use strict";t.d(n,{C:function(){return f},X$:function(){return h},eD:function(){return d}});var r=t(25976),i=t(44897),o=t(42631),s=t(70515),c=t(47041),l=t(91437),a=6.25*s.iI,u=100*s.iI,d=r.default.div.withConfig({displayName:"indexstyle__WindowContainerStyle",componentId:"sc-g0cszf-0"})(["border-radius:","px;width:100%;max-width:","px;z-index:101;position:absolute;overflow:hidden;top:50%;left:50%;transform:translate(-50%,-50%);",""],o.n_,u,(function(e){return"\n    box-shadow: ".concat((e.theme||i.Z).shadow.window,";\n    background-color: ").concat((e.theme||i.Z).background.panel,";\n  ")})),p=(0,r.css)(["display:flex;align-items:center;justify-content:space-between;height:","px;padding:","px ","px;",""],a,s.iI,s.cd*s.iI,(function(e){return"\n    background-color: ".concat((e.theme||i.Z).background.output,";\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__WindowHeaderStyle",componentId:"sc-g0cszf-1"})([""," border-top-left-radius:","px;border-top-right-radius:","px;",""],p,o.n_,o.n_,(function(e){return"\n    border-bottom: ".concat(o.YF,"px ").concat(o.M8," ").concat((e.theme||i.Z).borders.medium,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__WindowContentStyle",componentId:"sc-g0cszf-2"})(["overflow:auto;padding:","px 0;"," "," "," ",""],s.iI,c.w5,(0,l.eR)(),(function(e){return e.minMaxHeight&&"\n    max-height: ".concat(7*s.iI,"px;\n  ")}),(function(e){return!e.minMaxHeight&&"\n    max-height: calc(100vh - ".concat(6.5*a,"px);\n  ")}))},29480:function(e,n,t){"use strict";t.d(n,{$W:function(){return u},cl:function(){return d},cv:function(){return p},dE:function(){return l},zG:function(){return a}});var r=t(25976),i=t(44897),o=t(42631),s=t(70515),c=t(47041),l=r.default.div.withConfig({displayName:"indexstyle__SectionStyle",componentId:"sc-7a1uhf-0"})(["border-radius:","px;padding:","px;",""],o.n_,s.cd*s.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).popup,";\n  ")})),a=r.default.div.withConfig({displayName:"indexstyle__DocsStyle",componentId:"sc-7a1uhf-1"})(["> div{overflow:initial;}> div img{max-width:80%;background:white;padding:1rem;max-height:20vh;}"]),u=r.default.div.withConfig({displayName:"indexstyle__CodeEditorStyle",componentId:"sc-7a1uhf-2"})(["padding-top:","px;",""],s.cd*s.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-7a1uhf-3"})(["overflow:auto;max-height:90vh;width:100%;"," "," "," "," ",""],c.w5,(function(e){return e.hideHorizontalScrollbar&&"\n    overflow-x: hidden;\n  "}),(function(e){return e.width&&"\n    width: ".concat(e.width,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,";\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__HeaderRowStyle",componentId:"sc-7a1uhf-4"})(["padding:","px;"," "," ",""],2*s.iI,(function(e){return"\n    background-color: ".concat((e.theme||i.Z).interactive.defaultBackground,";\n    border-bottom: ").concat(o.YF,"px ").concat(o.M8," ").concat((e.theme||i.Z).borders.medium,";\n  ")}),(function(e){return e.padding&&"\n    padding: ".concat(e.padding,"px;\n  ")}),(function(e){return e.rounded&&"\n    border-top-left-radius: ".concat(o.n_,"px;\n    border-top-right-radius: ").concat(o.n_,"px;\n  ")}))},11074:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(25976),i=t(44897),o=t(42631),s=r.default.div.withConfig({displayName:"indexstyle__PanelStyle",componentId:"sc-1rfr5wd-0"})(["border-radius:","px;"," ",""],o.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),c=t(28598);var l=function(e){var n=e.children,t=e.fullWidth,r=void 0===t||t;return(0,c.jsx)(s,{fullWidth:r,children:n})}},42765:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ze}});var r,i=t(77837),o=t(75582),s=t(82394),c=t(38860),l=t.n(c),a=t(82684),u=t(34376),d=t(71180),p=t(69864),h=t(32013),f=t(98777),m=t(89083),x=t(15338),j=t(78650),g=t(97618),v=t(55485),Z=t(85854),b=t(68562),y=t(11074),_=t(44085),w=t(38276),k=t(30160),P=t(17488),C=t(69650),O=t(12468),S=t(35686),I=["ReadWriteOnce","ReadWriteMany","ReadOnlyMany"],D=["Retain","Delete"],E=[{label:"Workspace name",required:!0,uuid:"name"}],N=[{label:"Namespace",labelDescription:"The namespace where the workspace resources will be deployed. Defaults to the value of the KUBE_NAMESPACE environment variable.",uuid:"namespace"},{label:"Service account name",placeholder:"default",uuid:"service_account_name"},{label:"Ingress name",labelDescription:"If you want to add the workspace to an existing ingress, enter the name of the ingress here. Otherwise, the workspace can be accessed through the service.",placeholder:"my-ingress",uuid:"ingress_name"}],M=[{label:"Storage class name",placeholder:"default",uuid:"storage_class_name"},{label:"Storage request size (in GB)",type:"number",uuid:"storage_request_size"}],F=t(44425),R=t(72473);!function(e){e.K8S="k8s",e.ECS="ecs",e.CLOUD_RUN="cloud_run",e.EMR="emr"}(r||(r={}));var A={ingress_name:"Ingress",namespace:"Namespace",pvc_retention_policy:"PVC retention policy",service_account_name:"Service account name",storage_access_mode:"Storage access mode",storage_class_name:"Storage class name",storage_request_size:"Storage request size (in GB)",url:"Access URL"},W={"termination_policy.enable_auto_termination":"Termination policy: auto-terminate","termination_policy.max_idle_seconds":"Termination policy: max idle seconds",pre_start_script_path:"Pre start: script path","post_start.command":"Post start: command","post_start.hook_path":"Post start: path to hook"},L=t(29480),z=t(79633),T=t(53779),U=t(72619),B=t(81728),G=t(89538),H=t(28598);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K=function(e){var n=e.clusterType,t=e.onCancel,i=e.onCreate,c=e.project,l=e.workspace,u=l||{},A=u.lifecycle_config,W=void 0===A?{}:A,q=u.container_config,K=(0,a.useState)(),$=K[0],Y=K[1],Q=(0,a.useState)(!!q),X=Q[0],J=Q[1],ee=(0,a.useState)(!1),ne=ee[0],te=ee[1],re=(0,a.useState)(l),ie=re[0],oe=re[1],se=(0,a.useState)(W),ce=se[0],le=se[1],ae=!!l,ue=(0,a.useMemo)((function(){return null===c||void 0===c?void 0:c.workspace_config_defaults}),[c]);(0,a.useEffect)((function(){if(ue&&(ce||le(null===ue||void 0===ue?void 0:ue.lifecycle_config),!ie)){var e=V(V({},null===ue||void 0===ue?void 0:ue.k8s),{},{name:null===ue||void 0===ue?void 0:ue.name});oe(e)}}),[ue,ce,ie]);var de=(0,p.Db)(S.ZP.workspaces.useUpdate(null===l||void 0===l?void 0:l.name,{cluster_type:n}),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(e){e.error_message?Y(e.error_message):i()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;Y(r),console.log(t,r)}})}}),pe=(0,o.Z)(de,2),he=pe[0],fe=pe[1].isLoading,me=(0,p.Db)(S.ZP.workspaces.useCreate(),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(e){e.error_message?Y(e.error_message):i()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;Y(r),console.log(t,r)}})}}),xe=(0,o.Z)(me,2),je=xe[0],ge=xe[1].isLoading,ve=S.ZP.files.list(),Ze=ve.data,be=ve.mutate,ye=(0,a.useMemo)((function(){return(null===Ze||void 0===Ze?void 0:Ze.files)||[]}),[Ze]),_e=(0,G.dd)((function(e){return(0,H.jsxs)(T.eD,{children:[(0,H.jsxs)(T.X$,{children:[(0,H.jsx)(g.Z,{alignItems:"center",children:(0,H.jsx)(k.ZP,{disableWordBreak:!0,monospace:!0,children:"Select file"})}),(0,H.jsx)(d.ZP,{iconOnly:!0,onClick:Pe,children:(0,H.jsx)(R.Close,{muted:!0})})]}),(0,H.jsx)(T.C,{children:(0,H.jsx)(j.Z,{disableContextMenu:!0,fetchFiles:be,files:ye,isFileDisabled:null===e||void 0===e?void 0:e.isFileDisabled,openFile:e.onFileOpen,uuid:"ConfigureWorkspace/FileBrowser"})})]})}),{},[ye,be],{background:!0,uuid:"file_selector"}),we=(0,o.Z)(_e,2),ke=we[0],Pe=we[1],Ce=(0,a.useCallback)((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.labelDescription,o=e.placeholder,c=e.required,l=e.type,a=e.uuid;return(0,H.jsxs)("div",{children:[(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(g.Z,{flex:2,flexDirection:"column",children:[(0,H.jsx)(k.ZP,{children:r}),i&&(0,H.jsx)(k.ZP,{muted:!0,children:i})]}),(0,H.jsx)(g.Z,{flex:1}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(P.Z,{autoComplete:n,disabled:t,onChange:function(e){oe((function(n){return V(V({},n),{},(0,s.Z)({},a,e.target.value))}))},placeholder:o,required:c,setContentOnMount:!0,type:l,value:(null===ie||void 0===ie?void 0:ie[a])||""})})]})})]},a)}),[ie,oe]),Oe=(0,a.useMemo)((function(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v.ZP,{children:(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"General"})})}),N.map((function(e){return Ce(e)})),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(v.ZP,{children:(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Volume claim params"})})}),M.map((function(e){return Ce(e)})),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(k.ZP,{children:"Access mode"})}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(_.Z,{fullWidth:!0,label:"Access mode",onChange:function(e){e.preventDefault(),oe((function(n){return V(V({},n),{},{storage_access_mode:e.target.value})}))},placeholder:"Access mode",value:null===ie||void 0===ie?void 0:ie.storage_access_mode,children:I.map((function(e){return(0,H.jsx)("option",{value:e,children:e},e)}))})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(O.Z,{block:!0,description:(0,H.jsxs)(k.ZP,{default:!0,inline:!0,children:["Configure the retention policy for the stateful set PVC.",(0,H.jsx)("br",{}),"Retain will keep the PVC after the workspace is deleted.",(0,H.jsx)("br",{}),"Delete will delete the PVC when the workspace is deleted."]}),size:null,widthFitContent:!0,children:(0,H.jsx)(k.ZP,{children:"Retention policy (default: Retain)"})})}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(_.Z,{fullWidth:!0,label:"Retention policy",onChange:function(e){e.preventDefault(),oe((function(n){return V(V({},n),{},{pvc_retention_policy:e.target.value})}))},placeholder:"Retention policy",value:null===ie||void 0===ie?void 0:ie.pvc_retention_policy,children:D.map((function(e){return(0,H.jsx)("option",{value:e,children:e},e)}))})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsxs)(v.ZP,{alignItems:"center",children:[(0,H.jsx)(C.Z,{checked:X,compact:!0,onCheck:function(){return J((function(e){return!e}))}}),(0,H.jsx)(w.Z,{ml:1,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Configure container"})})]})}),X&&(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsx)(L.$W,{children:(0,H.jsx)(m.Z,{autoHeight:!0,fontSize:12,language:F.t6.YAML,onChange:function(e){oe((function(n){return V(V({},n),{},{container_config:e})}))},tabSize:2,value:null===ie||void 0===ie?void 0:ie.container_config,width:"100%"})})}),(0,H.jsx)(x.Z,{muted:!0})]})}),[Ce,X,ie]),Se=(0,a.useMemo)((function(){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(g.Z,{flex:2,flexDirection:"column",children:[(0,H.jsx)(k.ZP,{children:"Update workspace settings"}),(0,H.jsx)(k.ZP,{muted:!0,children:"Set this to true to update the workspace environment variable settings with values from this Kubernetes deployment."})]}),(0,H.jsx)(g.Z,{flex:1}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsxs)(_.Z,{fullWidth:!0,onChange:function(e){e.preventDefault(),te("true"===e.target.value)},value:(null===ne||void 0===ne?void 0:ne.toString())||"false",children:[(0,H.jsx)("option",{value:"true",children:"True"},"true"),(0,H.jsx)("option",{value:"false",children:"False"},"false")]})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsxs)(v.ZP,{alignItems:"center",children:[(0,H.jsx)(C.Z,{checked:X,compact:!0,onCheck:function(){return J((function(e){return!e}))}}),(0,H.jsx)(w.Z,{ml:1,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Configure container"})})]})}),X&&(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsx)(L.$W,{children:(0,H.jsx)(m.Z,{autoHeight:!0,fontSize:12,language:F.t6.YAML,onChange:function(e){oe((function(n){return V(V({},n),{},{container_config:e})}))},tabSize:2,value:null===ie||void 0===ie?void 0:ie.container_config,width:"100%"})})}),(0,H.jsx)(x.Z,{muted:!0})]})}),[X,ne,ie]),Ie=(0,a.useMemo)((function(){var e,n,t,r;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v.ZP,{children:(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Termination policy"})})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(k.ZP,{children:"Enable auto termination"})}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsxs)(_.Z,{fullWidth:!0,onChange:function(e){e.preventDefault(),le((function(n){return V(V({},n),{},{termination_policy:V(V({},null===n||void 0===n?void 0:n.termination_policy),{},{enable_auto_termination:"true"===e.target.value})})}))},value:(null===ce||void 0===ce||null===(e=ce.termination_policy)||void 0===e?void 0:e.enable_auto_termination)||"false",children:[(0,H.jsx)("option",{value:"true",children:"True"},"true"),(0,H.jsx)("option",{value:"false",children:"False"},"false")]})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(k.ZP,{children:"Max idle time (in seconds)"})}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(P.Z,{onChange:function(e){le((function(n){return V(V({},n),{},{termination_policy:V(V({},null===n||void 0===n?void 0:n.termination_policy),{},{max_idle_seconds:e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===ce||void 0===ce||null===(n=ce.termination_policy)||void 0===n?void 0:n.max_idle_seconds)||""})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(v.ZP,{children:(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Pre start"})})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(g.Z,{flex:3,justifyContent:"space-between",children:[(0,H.jsx)(k.ZP,{children:"Path to pre start script"}),(0,H.jsx)(w.Z,{mr:1,children:(0,H.jsx)(d.ZP,{iconOnly:!0,noBackground:!0,noBorder:!0,onClick:function(){return ke({isFileDisabled:function(e,n){return!n&&!e.endsWith(".py")},onFileOpen:function(e,n){le((function(n){return V(V({},n),{},{pre_start_script_path:e})})),Pe()}})},children:(0,H.jsx)(R.Folder,{})})})]}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(P.Z,{onChange:function(e){le((function(n){return V(V({},n),{},{pre_start_script_path:e.target.value})}))},placeholder:"/",setContentOnMount:!0,value:(null===ce||void 0===ce?void 0:ce.pre_start_script_path)||""})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(v.ZP,{children:(0,H.jsx)(w.Z,{ml:2,my:2,children:(0,H.jsx)(k.ZP,{bold:!0,sky:!0,children:"Post start"})})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(k.ZP,{children:"Command"})}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(P.Z,{monospace:!0,onChange:function(e){le((function(n){return V(V({},n),{},{post_start:V(V({},null===n||void 0===n?void 0:n.post_start),{},{command:e.target.value})})}))},setContentOnMount:!0,value:(null===ce||void 0===ce||null===(t=ce.post_start)||void 0===t?void 0:t.command)||""})})]})}),(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsx)(w.Z,{ml:3,mr:2,my:1,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsxs)(g.Z,{flex:3,justifyContent:"space-between",children:[(0,H.jsx)(k.ZP,{children:"Path to hook (optional)"}),(0,H.jsx)(w.Z,{mr:1,children:(0,H.jsx)(d.ZP,{iconOnly:!0,noBackground:!0,noBorder:!0,onClick:function(){return ke({onFileOpen:function(e,n){le((function(n){return V(V({},n),{},{post_start:V(V({},null===n||void 0===n?void 0:n.post_start),{},{hook_path:e})})})),Pe()}})},children:(0,H.jsx)(R.Folder,{})})})]}),(0,H.jsx)(g.Z,{flex:1,children:(0,H.jsx)(P.Z,{onChange:function(e){le((function(n){return V(V({},n),{},{post_start:V(V({},null===n||void 0===n?void 0:n.post_start),{},{hook_path:e.target.value})})}))},placeholder:"/",setContentOnMount:!0,value:(null===ce||void 0===ce||null===(r=ce.post_start)||void 0===r?void 0:r.hook_path)||""})})]})}),(0,H.jsx)(x.Z,{muted:!0})]})}),[Pe,ce,le,ke]);return(0,H.jsx)(y.Z,{children:(0,H.jsx)("div",{style:{width:"750px"},children:(0,H.jsxs)(w.Z,{p:2,children:[(0,H.jsxs)(Z.Z,{level:4,children:[ae?"Update":"Create"," workspace"]}),(0,H.jsxs)("form",{children:[E.map((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.required,o=e.type,c=e.uuid;return(0,H.jsx)(w.Z,{mt:2,children:(0,H.jsx)(P.Z,{autoComplete:n,disabled:t,label:r,onChange:function(e){oe((function(n){return V(V({},n),{},(0,s.Z)({},c,e.target.value))}))},required:i,setContentOnMount:!0,type:o,value:(null===ie||void 0===ie?void 0:ie[c])||""})},c)})),(0,H.jsx)(w.Z,{mt:2,children:(0,H.jsxs)(h.Z,{noPaddingContent:!0,children:[n===r.K8S&&(0,H.jsx)(f.Z,{title:"Kubernetes",children:ae?Se:Oe}),!ae&&(0,H.jsx)(f.Z,{title:"Lifecycle (optional)",children:Ie})]})})]}),ge&&(0,H.jsx)(w.Z,{mt:1,children:(0,H.jsx)(k.ZP,{small:!0,warning:!0,children:"This may take up to a few minutes... Once the service is created, it may take another 5-10 minutes for the service to be accessible."})}),!ge&&$&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{mt:1,children:(0,H.jsx)(k.ZP,{danger:!0,small:!0,children:"Failed to create instance, see error below."})}),(0,H.jsx)(w.Z,{mt:1,children:(0,H.jsx)(k.ZP,{danger:!0,small:!0,children:$})})]}),(0,H.jsx)(w.Z,{my:2,children:(0,H.jsxs)(v.ZP,{flexDirection:"row-reverse",children:[(0,H.jsx)(b.ZP,{background:z.a$,bold:!0,inline:!0,loading:ge||fe,onClick:function(){var e=ie||{},t=e.name,r=e.container_config;if(t){var i=V({},ie);i.name=function(e){return"ecs"===n?(0,B.We)(e,"_"):(0,B.We)(e,"-")}(t),X&&(i.container_config=r),i.update_workspace_settings=ne,ae?he({workspace:V(V({},i),{},{action:"patch",cluster_type:n})}):je({workspace:V(V({},i),{},{cluster_type:n,lifecycle_config:ce})})}else Y("Please enter a valid name!")},uuid:"workspaces/create",children:ae?"Update":"Create"}),(0,H.jsx)(w.Z,{ml:1}),(0,H.jsx)(b.ZP,{bold:!0,inline:!0,onClick:t,uuid:"workspaces/cancel",children:"Cancel"})]})})]})})})},$=t(65956),Y=t(93808),Q=t(75499),X=t(85544),J=t(59533),ee=t(25976),ne=t(44897),te=ee.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-19701zd-0"})(["border:1px solid;border-radius:8px;",""],(function(e){return"\n    border-color: ".concat((e.theme.monotone||ne.Z.monotone).grey500,";\n  ")})),re=t(70515);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var se,ce=function(e){var n=e.clusterType,t=e.fetchWorkspaces,i=e.onSuccess,s=e.setErrors,c=e.showUpdateModal,l=e.workspace,u=l.instance,h=l.lifecycle_config,f=(u.ip,u.name),j=u.status,b=(u.type,{cluster_type:n}),y=(0,p.Db)(S.ZP.workspaces.useUpdate(f,b),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(){t(),i()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),_=(0,o.Z)(y,2),P=_[0],C=_[1].isLoading,O=(0,p.Db)(S.ZP.workspaces.useDelete(f,b),{onSuccess:function(e){return(0,U.wD)(e,{callback:function(){t(),i()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),I=(0,o.Z)(O,2),D=I[0],E=I[1].isLoading,N=(0,a.useMemo)((function(){if(h){var e={};return Object.entries(h).map((function(n){var t=(0,o.Z)(n,2),r=t[0],i=t[1];i&&"object"===typeof i?Object.entries(i).map((function(n){var t=(0,o.Z)(n,2),i=t[0],s=t[1];e["".concat(r,".").concat(i)]=s})):e[r]=i})),e}}),[h]),M=(0,a.useMemo)((function(){var e=u.status,t=[];return"ecs"===n&&("STOPPED"===e?t.unshift({label:"Resume instance",onClick:function(){return P({workspace:{action:"resume",cluster_type:n,name:u.name,task_arn:u.task_arn}})},props:{loading:C,primary:!0},uuid:"resume_instance"}):"RUNNING"===e&&t.unshift({label:"Stop instance",onClick:function(){return P({workspace:{action:"stop",cluster_type:n,name:u.name,task_arn:u.task_arn}})},props:{loading:C,warning:!0},uuid:"stop_instance"})),"k8s"===n&&("STOPPED"===e?t.unshift({label:"Resume instance",onClick:function(){return P({workspace:{action:"resume",cluster_type:n,name:u.name}})},props:{loading:C,primary:!0},uuid:"resume_instance"}):"RUNNING"===e&&t.unshift({label:"Stop instance",onClick:function(){return P({workspace:{action:"stop",cluster_type:n,name:u.name}})},props:{loading:C,warning:!0},uuid:"stop_instance"}),t.push({label:"Update",onClick:function(){i(),c()},props:{},uuid:"update_instance"})),null===l||void 0===l||!l.ingress_name||null!==l&&void 0!==l&&l.url||t.push({label:"Add to ingress",onClick:function(){return P({workspace:{action:"add_to_ingress",cluster_type:n,name:u.name}})},props:{default:!0,loading:C},uuid:"re_add_to_ingress"}),t}),[n,u,C,i,c,P,l]),z=(0,a.useMemo)((function(){return(0,H.jsx)(d.ZP,{danger:!0,loading:E,onClick:function(){window.confirm("Are you sure you want to delete workspace ".concat(f,"?"))&&D()},children:"Delete workspace"})}),[D,E,f]);return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(w.Z,{p:2,children:[(0,H.jsx)(w.Z,{mb:2,children:(0,H.jsxs)(v.ZP,{alignItems:"center",children:[(0,H.jsx)(R.Folder,{size:2*re.iI}),(0,H.jsx)(w.Z,{mr:1}),(0,H.jsx)(Z.Z,{level:3,children:null===l||void 0===l?void 0:l.name})]})}),(0,H.jsx)(w.Z,{mb:2,children:(0,H.jsxs)(k.ZP,{children:["Status: ",(0,H.jsx)(k.ZP,{bold:!0,danger:"STOPPED"===j,default:"PROVISIONING"===j,inline:!0,success:"RUNNING"===j,warning:"PENDING"===j,children:j})]})}),!M||0==M.length&&(0,H.jsx)(w.Z,{mb:2,children:z}),M&&M.length>0&&(0,H.jsx)(w.Z,{mb:2,children:(0,H.jsxs)(v.ZP,{justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{children:M.map((function(e){var n=e.label,t=e.onClick,r=e.uuid,i=e.props;return(0,H.jsx)(w.Z,{mr:1,children:(0,H.jsx)(d.ZP,oe(oe({},i),{},{onClick:t,children:n}))},r)}))}),z]})}),n===r.K8S&&(0,H.jsxs)(te,{children:[Object.entries(A).map((function(e,n){var t=(0,o.Z)(e,2),r=t[0],i=t[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{mx:2,my:2,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:4,children:(0,H.jsx)(k.ZP,{muted:!0,children:i})}),(0,H.jsx)(g.Z,{flex:2,flexDirection:"row-reverse",children:(0,H.jsx)(k.ZP,{bold:!0,children:(null===l||void 0===l?void 0:l[r])||"N/A"})})]})},r),n!==Object.entries(A).length-1&&(0,H.jsx)(x.Z,{muted:!0})]})})),(null===l||void 0===l?void 0:l.container_config)&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(x.Z,{muted:!0}),(0,H.jsxs)(w.Z,{mx:2,my:2,children:[(0,H.jsx)(k.ZP,{muted:!0,children:"Container config"}),(0,H.jsx)(w.Z,{mt:1}),(0,H.jsx)(L.$W,{children:(0,H.jsx)(m.Z,{autoHeight:!0,fontSize:12,language:F.t6.YAML,readOnly:!0,tabSize:2,value:null===l||void 0===l?void 0:l.container_config,width:"100%"})})]})]})]}),N&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{my:2,children:(0,H.jsx)(Z.Z,{default:!0,level:5,children:"Lifecycle Properties"})}),(0,H.jsx)(te,{children:Object.entries(W).map((function(e,n){var t,r=(0,o.Z)(e,2),i=r[0],s=r[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(w.Z,{mx:2,my:2,children:(0,H.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(g.Z,{flex:3,children:(0,H.jsx)(k.ZP,{muted:!0,children:s})}),(0,H.jsx)(g.Z,{flex:1,flexDirection:"row-reverse",children:(0,H.jsx)(k.ZP,{bold:!0,children:null===(t=N[i])||void 0===t?void 0:t.toString()})})]})},i),n!==Object.entries(W).length-1&&(0,H.jsx)(x.Z,{muted:!0})]})}))})]})]})})};!function(e){e.ALL="__all__",e.NAMESPACE="namespace[]"}(se||(se={}));var le=t(42631),ae=t(11498),ue=t(75083),de=t(69419),pe=t(53808),he="workspace_list_filters";function fe(e){return(0,pe.t8)(he,e),e}var me=t(15610),xe=t(42122);function je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?je(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ve(){var e=(0,u.useRouter)(),n=S.ZP.statuses.list().data,t=(0,a.useState)(null),i=t[0],c=t[1],l=(0,de.iV)(),p=(0,a.useMemo)((function(){return ge({},(0,de.DQ)(l,[se.NAMESPACE]))}),[l]),h=(0,a.useMemo)((function(){var e,t;return(null===n||void 0===n||null===(e=n.statuses)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.instance_type)||"ecs"}),[n]),f=S.ZP.projects.list({},{revalidateOnFocus:!1}).data,m=(0,a.useMemo)((function(){var e;return null===f||void 0===f||null===(e=f.projects)||void 0===e?void 0:e[0]}),[f]),x=S.ZP.workspaces.list(ge(ge({},p),{},{cluster_type:h}),{revalidateOnFocus:!1}),j=x.data,g=x.isValidating,v=x.mutate,Z=(0,a.useMemo)((function(){var e;return null===j||void 0===j||null===(e=j.workspaces)||void 0===e?void 0:e.filter((function(e){return e.name}))}),[j]),b=(0,G.dd)((function(e){var n=e.workspace;return(0,H.jsx)(K,{clusterType:h,onCancel:w,onCreate:function(){v(),w()},project:m,workspace:n})}),{},[h,v,m],{background:!0,disableClickOutside:!0,disableEscape:!0,uuid:"configure_workspace"}),y=(0,o.Z)(b,2),_=y[0],w=y[1],P=(0,G.dd)((function(e){var n=e.workspace;return(0,H.jsx)($.Z,{children:(0,H.jsx)("div",{style:{width:"750px"},children:(0,H.jsx)(ce,{clusterType:h,fetchWorkspaces:v,onSuccess:I,setErrors:c,showUpdateModal:function(){return _({workspace:n})},workspace:n})})})}),{},[h,v,c,Z],{background:!0,uuid:"workspace_detail"}),C=(0,o.Z)(P,2),O=C[0],I=C[1],D=(0,a.useCallback)((function(e){var n=null===Z||void 0===Z?void 0:Z[e];O({workspace:n})}),[O,Z]);(0,a.useEffect)((function(){var e={};if((0,xe.Qr)(p)){var n={},t=(0,pe.U2)(he,{});t&&Object.entries(t).forEach((function(e){var t=(0,o.Z)(e,2),r=t[0],i=t[1];"undefined"!==typeof i&&null!==i&&(ae.RG.includes(r)?n[r]=i:(n[r]=[],Object.entries(i).forEach((function(e){var t=(0,o.Z)(e,2),i=t[0];t[1]&&n[r].push(i)}))))})),(0,xe.Qr)(n)||(e={},Object.entries(ge(ge({},e),n)||{}).forEach((function(n){var t=(0,o.Z)(n,2),r=t[0],i=t[1];"undefined"!==typeof i&&null!==i&&(e[r]=i)})))}else{var r={};Object.entries(p).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];r[t]={};var s,c=i;"undefined"!==typeof i&&null!==i&&(ae.RG.includes(t)?r[t]=c:(Array.isArray(c)||(c=[c]),c&&Array.isArray(c)&&(null===(s=c)||void 0===s||s.forEach((function(e){r[t][e]=!0})))))})),fe((0,xe.hB)(r))}(0,xe.Qr)(e)||(0,me.u)((0,xe.hB)(e),{pushHistory:!1})}),[p]);var E=(0,a.useMemo)((function(){var n={},t={};return h===r.K8S&&(n={namespace:[se.ALL]},t={namespace:(0,s.Z)({},se.ALL,"All namespaces")}),(0,H.jsx)(X.Z,{addButtonProps:{label:"Create new workspace",onClick:_},extraActionButtonProps:{Icon:R.Refresh,disabled:!1,isLoading:g,onClick:v,tooltip:"Refresh workspaces"},filterOptions:n,filterValueLabelMapping:t,onClickFilterDefaults:function(){fe({}),e.push("/manage")},onFilterApply:function(e,n){Object.values(n).every((function(e){return!(null!==e&&void 0!==e&&e.length)}))&&fe({})},query:p})}),[h,v,g,p,e,_]);return(0,H.jsx)(J.Z,{breadcrumbs:[{bold:!0,label:function(){return"Workspaces"}}],errors:i,pageName:ue.L6.WORKSPACES,setErrors:c,subheaderChildren:E,children:(0,H.jsx)(Q.Z,{columnFlex:[2,4,2,3,1,null],columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"URL/IP"},{uuid:"Open"}],onClickRow:["ecs","k8s"].includes(h)&&D,rows:null===Z||void 0===Z?void 0:Z.map((function(e){var n=e.instance,t=e.url,r=n.ip,i=n.name,o=n.status,s=n.type,c=t||r,l=c;return c&&!c.includes("http")&&(l="http://".concat(c),"ecs"===h&&(l="http://".concat(c,":6789"))),[(0,H.jsx)(d.ZP,{borderRadius:"".concat(le.D7,"px"),danger:"STOPPED"===o,default:"PROVISIONING"===o,notClickable:!0,padding:"6px",success:"RUNNING"===o,warning:"PENDING"===o,children:(0,B.vg)(o)},"status"),(0,H.jsx)(k.ZP,{children:i},"name"),(0,H.jsx)(k.ZP,{children:(0,B.vg)(s)},"type"),(0,H.jsx)(k.ZP,{children:c||"N/A"},"ip"),(0,H.jsx)(d.ZP,{disabled:!c,iconOnly:!0,onClick:function(){return window.open(l)},children:(0,H.jsx)(R.Expand,{size:2*re.iI})},"open_button")]}))})})}ve.getInitialProps=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var Ze=(0,Y.Z)(ve)},13157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(42765)}])}},function(e){e.O(0,[1557,1598,5544,9774,2888,179],(function(){return n=13157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);