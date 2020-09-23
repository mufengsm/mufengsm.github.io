(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{490:function(t,e,v){"use strict";v.r(e);var _=v(42),d=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"attribute-强制行为"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#attribute-强制行为"}},[t._v("#")]),t._v(" attribute 强制行为 "),v("MigrationBadges",{attrs:{badges:t.$frontmatter.badges}})],1),t._v(" "),v("div",{staticClass:"custom-block info"},[v("p",{staticClass:"custom-block-title"},[t._v("信息")]),v("p",[t._v("这是一个低级的内部 API 更改，不会影响大多数开发人员。")])]),v("h2",{attrs:{id:"概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),v("p",[t._v("下面是对这些变化的高层次总结：")]),t._v(" "),v("ul",[v("li",[t._v("删除枚举 attribute 的内部概念，并将这些 attribute 视为普通的非布尔 attribute")]),t._v(" "),v("li",[v("strong",[t._v("重大改变")]),t._v("：如果值为布尔值，则不再删除 attribute "),v("code",[t._v("false")]),t._v("。相反，它被设置为 attr=“false”。移除 attribute，使用 "),v("code",[t._v("null")]),t._v(" 或者 "),v("code",[t._v("undefined")]),t._v("。")])]),t._v(" "),v("p",[t._v("For more information，read on！")]),t._v(" "),v("h2",{attrs:{id:"_2-x-语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[t._v("#")]),t._v(" 2.x 语法")]),t._v(" "),v("p",[t._v("在 2.x，我们有以下策略来强制 "),v("code",[t._v("v-bind")]),t._v(" 的值：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("对于某些 attribute/元素对，Vue 始终使用相应的 IDL attribute(property)："),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L11-L18",target:"_blank",rel:"noopener noreferrer"}},[t._v("比如 "),v("code",[t._v("value")]),t._v(" 的 "),v("code",[t._v("<input>")]),t._v("，"),v("code",[t._v("<select>")]),t._v("，"),v("code",[t._v("<progress>")]),t._v("，等等"),v("OutboundLink")],1),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("对于“"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L33-L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("布尔 attribute"),v("OutboundLink")],1),t._v("”和 "),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L44-L46",target:"_blank",rel:"noopener noreferrer"}},[t._v("xlinks"),v("OutboundLink")],1),t._v("，如果它们是 "),v("code",[t._v("falsy")]),t._v(" 的，Vue 会移除它们 ("),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L52-L54",target:"_blank",rel:"noopener noreferrer"}},[v("code",[t._v("undefined")]),t._v("，"),v("code",[t._v("null")]),t._v(" or "),v("code",[t._v("false")]),v("OutboundLink")],1),t._v(") 另外加上它们 (见"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L66-L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v("和"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L81-L85",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v(")。")])]),t._v(" "),v("li",[v("p",[t._v("对于“"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L20",target:"_blank",rel:"noopener noreferrer"}},[t._v("枚举 attribute"),v("OutboundLink")],1),t._v("” (目前 "),v("code",[t._v("contenteditable")]),t._v("，"),v("code",[t._v("draggable")]),t._v(" 和 "),v("code",[t._v("spellcheck")]),t._v(")，Vue 会尝试"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/util/attrs.js#L24-L31",target:"_blank",rel:"noopener noreferrer"}},[t._v("强制"),v("OutboundLink")],1),t._v("将它们串起来 (目前对 "),v("code",[t._v("contenteditable")]),t._v(" 做了特殊处理，修复 "),v("a",{attrs:{href:"https://github.com/vuejs/vue/issues/9397",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs/vue#9397"),v("OutboundLink")],1),t._v(")。")])]),t._v(" "),v("li",[v("p",[t._v("对于其他 attribute，我们移除了 "),v("code",[t._v("falsy")]),t._v(" 值 ("),v("code",[t._v("undefined")]),t._v("，"),v("code",[t._v("null")]),t._v("，or "),v("code",[t._v("false")]),t._v(") 并按原样设置其他值 (见"),v("a",{attrs:{href:"https://github.com/vuejs/vue/blob/bad3c326a3f8b8e0d3bcf07917dc0adf97c32351/src/platforms/web/runtime/modules/attrs.js#L92-L113",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v(")。")])])]),t._v(" "),v("p",[t._v("下表描述了 Vue 如何使用普通非布尔 attribute 强制“枚举 attribute”：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("绑定表达式")]),t._v(" "),v("th",[v("code",[t._v("foo")]),t._v(" "),v("sup",[t._v("正常")])]),t._v(" "),v("th",[v("code",[t._v("draggable")]),t._v(" "),v("sup",[t._v("枚举")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v(':attr="null"')])]),t._v(" "),v("td",[t._v("/")]),t._v(" "),v("td",[v("code",[t._v('draggable="false"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="undefined"')])]),t._v(" "),v("td",[t._v("/")]),t._v(" "),v("td",[t._v("/")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="true"')])]),t._v(" "),v("td",[v("code",[t._v('foo="true"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="false"')])]),t._v(" "),v("td",[t._v("/")]),t._v(" "),v("td",[v("code",[t._v('draggable="false"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="0"')])]),t._v(" "),v("td",[v("code",[t._v('foo="0"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('attr=""')])]),t._v(" "),v("td",[v("code",[t._v('foo=""')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('attr="foo"')])]),t._v(" "),v("td",[v("code",[t._v('foo="foo"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("attr")])]),t._v(" "),v("td",[v("code",[t._v('foo=""')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])])])]),t._v(" "),v("p",[t._v("从上表可以看出，当前实现 "),v("code",[t._v("true")]),t._v(" 强制为 "),v("code",[t._v("'true'")]),t._v(" 但如果 attribute 为 "),v("code",[t._v("false")]),t._v("，则移除该 attribute。这也导致了不一致性，并要求用户在非常常见的用例中手动强制布尔值为字符串，例如\n"),v("code",[t._v("aria-*")]),t._v(" attribute 像 "),v("code",[t._v("aria-selected")]),t._v("，"),v("code",[t._v("aria-hidden")]),t._v("，等等。")]),t._v(" "),v("h2",{attrs:{id:"_3-x-语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),v("p",[t._v("我们打算放弃“枚举 attribute”的内部概念，并将它们视为普通的非布尔 HTML attribute。")]),t._v(" "),v("ul",[v("li",[t._v("这解决了普通非布尔 attribute 和“枚举 attribute”之间的不一致性")]),t._v(" "),v("li",[t._v("它还可以使用 "),v("code",[t._v("'true'")]),t._v(" 和 "),v("code",[t._v("'false'")]),t._v(" 以外的值，甚至可以使用 "),v("code",[t._v("contenteditable")]),t._v(" 等 attribute 的关键字`")])]),t._v(" "),v("p",[t._v("对于非布尔 attribute，如果 attribute 为 "),v("code",[t._v("false")]),t._v("，Vue 将停止删除它们，相反强制它们为 "),v("code",[t._v("'false'")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("这解决了 "),v("code",[t._v("true")]),t._v(" 和 "),v("code",[t._v("false")]),t._v(" 之间的不一致性，并使输出 "),v("code",[t._v("aria-*")]),t._v(" attributes 更容易")])]),t._v(" "),v("p",[t._v("下表描述了新行为：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("绑定表达式")]),t._v(" "),v("th",[v("code",[t._v("foo")]),t._v(" "),v("sup",[t._v("正常")])]),t._v(" "),v("th",[v("code",[t._v("draggable")]),t._v(" "),v("sup",[t._v("枚举")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v(':attr="null"')])]),t._v(" "),v("td",[t._v("/")]),t._v(" "),v("td",[t._v("/ "),v("sup",[t._v("†")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="undefined"')])]),t._v(" "),v("td",[t._v("/")]),t._v(" "),v("td",[t._v("/")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="true"')])]),t._v(" "),v("td",[v("code",[t._v('foo="true"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="false"')])]),t._v(" "),v("td",[v("code",[t._v('foo="false"')]),t._v(" "),v("sup",[t._v("†")])]),t._v(" "),v("td",[v("code",[t._v('draggable="false"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v(':attr="0"')])]),t._v(" "),v("td",[v("code",[t._v('foo="0"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="0"')]),t._v(" "),v("sup",[t._v("†")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('attr=""')])]),t._v(" "),v("td",[v("code",[t._v('foo=""')])]),t._v(" "),v("td",[v("code",[t._v('draggable=""')]),t._v(" "),v("sup",[t._v("†")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('attr="foo"')])]),t._v(" "),v("td",[v("code",[t._v('foo="foo"')])]),t._v(" "),v("td",[v("code",[t._v('draggable="foo"')]),t._v(" "),v("sup",[t._v("†")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("attr")])]),t._v(" "),v("td",[v("code",[t._v('foo=""')])]),t._v(" "),v("td",[v("code",[t._v('draggable=""')]),t._v(" "),v("sup",[t._v("†")])])])])]),t._v(" "),v("p",[v("small",[t._v("†： 变更")])]),t._v(" "),v("p",[t._v("布尔 attributes 的强制保持不变。")]),t._v(" "),v("h2",{attrs:{id:"迁移策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迁移策略"}},[t._v("#")]),t._v(" 迁移策略")]),t._v(" "),v("h3",{attrs:{id:"枚举-attribute"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#枚举-attribute"}},[t._v("#")]),t._v(" 枚举 attribute")]),t._v(" "),v("p",[t._v("缺少枚举 attribute 和 "),v("code",[t._v('attr="false"')]),t._v(" 可能会产生不同的 IDL attribute 值 (将反映实际状态)，描述如下：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("缺少枚举attr")]),t._v(" "),v("th",[t._v("IDL attr & 值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("contenteditable")])]),t._v(" "),v("td",[v("code",[t._v("contentEditable")]),t._v(" → "),v("code",[t._v("'inherit'")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("draggable")])]),t._v(" "),v("td",[v("code",[t._v("draggable")]),t._v(" → "),v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("spellcheck")])]),t._v(" "),v("td",[v("code",[t._v("spellcheck")]),t._v(" → "),v("code",[t._v("true")])])])])]),t._v(" "),v("p",[t._v("为了保持原有的行为，并且我们将强制使用 "),v("code",[t._v("false")]),t._v(" 为 "),v("code",[t._v("'false'")]),t._v("，在 3.x Vue 中，开发人员需要将 "),v("code",[t._v("v-bind")]),t._v(" 表达式解析为 "),v("code",[t._v("false")]),t._v(" 或 "),v("code",[t._v("'false'")]),t._v("，表示 "),v("code",[t._v("contenteditable")]),t._v(" 和 "),v("code",[t._v("spellcheck")]),t._v("。")]),t._v(" "),v("p",[t._v("在 2.x 中，枚举 attribute 的无效值被强制为 "),v("code",[t._v("'true'")]),t._v("。这通常是无意的，不太可能大规模依赖。在 3.x 中，应显式指定 "),v("code",[t._v("true")]),t._v(" 或 "),v("code",[t._v("'true'")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"将-false-强制为-false-而不是删除-attribute"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#将-false-强制为-false-而不是删除-attribute"}},[t._v("#")]),t._v(" 将 "),v("code",[t._v("false")]),t._v(" 强制为 "),v("code",[t._v("'false'")]),t._v(" 而不是删除 attribute")]),t._v(" "),v("p",[t._v("在 3.x，"),v("code",[t._v("null")]),t._v(" 或 "),v("code",[t._v("undefined")]),t._v(" 应用于显式删除 attribute。")]),t._v(" "),v("h3",{attrs:{id:"_2-x-和-3-x-行为的比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-和-3-x-行为的比较"}},[t._v("#")]),t._v(" 2.x 和 3.x 行为的比较")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Attributes")]),t._v(" "),v("th",[v("code",[t._v("v-bind")]),t._v(" value "),v("sup",[t._v("2.x")])]),t._v(" "),v("th",[v("code",[t._v("v-bind")]),t._v(" value "),v("sup",[t._v("3.x")])]),t._v(" "),v("th",[t._v("HTML 输出")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{attrs:{rowspan:"3"}},[t._v("2.x “枚举attribute”"),v("br"),v("small",[t._v("i.e. "),v("code",[t._v("contenteditable")]),t._v(", "),v("code",[t._v("draggable")]),t._v(" and "),v("code",[t._v("spellcheck")]),t._v(".")])]),t._v(" "),v("td",[v("code",[t._v("undefined")]),t._v(", "),v("code",[t._v("false")])]),t._v(" "),v("td",[v("code",[t._v("undefined")]),t._v(", "),v("code",[t._v("null")])]),t._v(" "),v("td",[v("i",[t._v("removed")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("true")]),t._v(", "),v("code",[t._v("'true'")]),t._v(", "),v("code",[t._v("''")]),t._v(", "),v("code",[t._v("1")]),t._v(",\n        "),v("code",[t._v("'foo'")])]),t._v(" "),v("td",[v("code",[t._v("true")]),t._v(", "),v("code",[t._v("'true'")])]),t._v(" "),v("td",[v("code",[t._v('"true"')])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("null")]),t._v(", "),v("code",[t._v("'false'")])]),t._v(" "),v("td",[v("code",[t._v("false")]),t._v(", "),v("code",[t._v("'false'")])]),t._v(" "),v("td",[v("code",[t._v('"false"')])])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"2"}},[t._v("其他非布尔attribute"),v("br"),v("small",[t._v("eg. "),v("code",[t._v("aria-checked")]),t._v(", "),v("code",[t._v("tabindex")]),t._v(", "),v("code",[t._v("alt")]),t._v(", etc.")])]),t._v(" "),v("td",[v("code",[t._v("undefined")]),t._v(", "),v("code",[t._v("null")]),t._v(", "),v("code",[t._v("false")])]),t._v(" "),v("td",[v("code",[t._v("undefined")]),t._v(", "),v("code",[t._v("null")])]),t._v(" "),v("td",[v("i",[t._v("removed")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("'false'")])]),t._v(" "),v("td",[v("code",[t._v("false")]),t._v(", "),v("code",[t._v("'false'")])]),t._v(" "),v("td",[v("code",[t._v('"false"')])])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);