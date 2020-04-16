(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{255:function(a,t,n){"use strict";n.r(t);var s=n(28),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"callbacks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[a._v("#")]),a._v(" Callbacks")]),a._v(" "),n("p",[n("strong",[a._v("nuxt-i18n")]),a._v(" expone algunas devoluciones de llamada que puede usar para realizar tareas específicas que dependen del idioma de la aplicación.")]),a._v(" "),n("h3",{attrs:{id:"beforelanguageswitch-oldlocale-newlocale"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beforelanguageswitch-oldlocale-newlocale"}},[a._v("#")]),a._v(" "),n("code",[a._v("beforeLanguageSwitch(oldLocale, newLocale)")])]),a._v(" "),n("p",[a._v("Llamado justo antes de configurar la nueva configuración local de la aplicación.")]),a._v(" "),n("p",[a._v("Parámetros:")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("oldLocale")]),a._v(": la configuración local de la aplicación antes del cambio")]),a._v(" "),n("li",[n("strong",[a._v("newLocale")]),a._v(": la configuración local de la aplicación después del cambio")])]),a._v(" "),n("h3",{attrs:{id:"onlanguageswitched-oldlocale-newlocale"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onlanguageswitched-oldlocale-newlocale"}},[a._v("#")]),a._v(" "),n("code",[a._v("onLanguageSwitched(oldLocale, newLocale)")])]),a._v(" "),n("p",[a._v("Llamado justo después de cambiar la configuración local de la aplicación.")]),a._v(" "),n("p",[a._v("Parámetros:")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("oldLocale")]),a._v(": la configuración local de la aplicación antes del cambio")]),a._v(" "),n("li",[n("strong",[a._v("newLocale")]),a._v(": la configuración local de la aplicación después del cambio")])]),a._v(" "),n("h2",{attrs:{id:"uso"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uso"}},[a._v("#")]),a._v(" Uso")]),a._v(" "),n("p",[a._v("Un uso típico sería definir esas devoluciones de llamada a través de un complemento donde puede acceder al contexto de la aplicación (útil si necesita cambiar la configuración de Axios cuando el idioma cambia, por ejemplo).")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ~/plugins/i18n.js")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" app "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// beforeLanguageSwitch called right before setting a new locale")]),a._v("\n  app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("beforeLanguageSwitch")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("oldLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// onLanguageSwitched called right after a new locale has been set")]),a._v("\n  app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("onLanguageSwitched")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("oldLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("Agregue el plugin a la configuración de Nuxt:")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" src"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~plugins/i18n.js'")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);