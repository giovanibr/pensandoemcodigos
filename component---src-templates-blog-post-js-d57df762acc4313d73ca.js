(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4M6O":function(t,e,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var i=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){var r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},s=n&&!i;window.clearTimeout(i),i=setTimeout(a,e),s&&t.apply(r,o)}},e.isReactElement=a,e.shallowComparison=function(t,e){var n,i=new Set(Object.keys(t).concat(Object.keys(e)));return 0!==(n=[]).concat.apply(n,(0,r.default)(i)).filter((function(n){return t[n]!==e[n]&&!a(t[n])})).length};var r=i(n("RIqP")),o=i(n("q1tI"));function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var i=n("WkPL");t.exports=function(t){if(Array.isArray(t))return i(t)}},ORnI:function(t,e,n){"use strict";var i=n("TqRt");e.__esModule=!0,e.default=void 0;var r=i(n("VUT9"));e.Disqus=r.default;var o=i(n("qASQ"));e.CommentCount=o.default;var a=r.default;e.default=a},RIqP:function(t,e,n){var i=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),a=n("Bnag");t.exports=function(t){return i(t)||r(t)||o(t)||a()}},VUT9:function(t,e,n){"use strict";var i=n("TqRt");e.__esModule=!0,e.default=void 0;var r=i(n("pVnL")),o=i(n("8OQS")),a=i(n("VbXa")),s=i(n("q1tI")),l=i(n("17x9")),u=n("4M6O"),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="pensandoemcodigos",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title,language:e.language},n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url,this.language=t.language},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,o.default)(t,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:75,columnNumber:7}}))},e}(s.default.Component);e.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}},ZhPi:function(t,e,n){var i=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}},qASQ:function(t,e,n){"use strict";var i=n("TqRt");e.__esModule=!0,e.default=void 0;var r=i(n("pVnL")),o=i(n("8OQS")),a=i(n("VbXa")),s=i(n("q1tI")),l=i(n("17x9")),u=n("4M6O"),d=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="pensandoemcodigos",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,i=(0,o.default)(t,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},i,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return c}));n("91GP");var i=n("q1tI"),r=n.n(i),o=n("Wbzz"),a=n("ORnI"),s=n("6Gk8"),l=n("Bl7J"),u=n("vrFN"),d=n("p3AD");e.default=function(t){var e=t.data,n=t.pageContext,i=t.location,c=e.markdownRemark,f=e.site.siteMetadata.title,p=(n.tag,n.previous),m=n.next,g={url:"https://pensandoemcodigos.net"+i.pathname+"index.html",identifier:c.id,title:c.frontmatter.title};return r.a.createElement(l.a,{location:i,title:f},r.a.createElement(u.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt,type:"article",location:"https://pensandoemcodigos.net"+i.pathname+"index.html",date:c.frontmatter.isoDate}),r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},c.frontmatter.title),r.a.createElement("p",{style:Object.assign(Object.assign({},Object(d.b)(-.2)),{},{display:"block",marginBottom:Object(d.a)(1)})},c.frontmatter.date,"    -   ",r.a.createElement(a.CommentCount,{config:g,placeholder:"..."}))),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:c.html}}),r.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),r.a.createElement("footer",null,r.a.createElement(s.a,null))),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,p&&r.a.createElement(o.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),r.a.createElement("li",null,m&&r.a.createElement(o.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))),r.a.createElement("div",null,r.a.createElement(a.Disqus,{config:g})))};var c="33130144"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d57df762acc4313d73ca.js.map