(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{266:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"guia-de-migracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guia-de-migracion"}},[a._v("#")]),a._v(" Guía de migración")]),a._v(" "),s("p",[a._v("Siga esta guía para actualizar de una versión principal a otra.")]),a._v(" "),s("h2",{attrs:{id:"actualizacion-de-5-x-a-6-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizacion-de-5-x-a-6-x"}},[a._v("#")]),a._v(" Actualización de 5.x a 6.x")]),a._v(" "),s("h3",{attrs:{id:"las-funciones-globales-de-seo-ahora-estan-deshabilitadas-por-defecto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#las-funciones-globales-de-seo-ahora-estan-deshabilitadas-por-defecto"}},[a._v("#")]),a._v(" Las funciones globales de SEO ahora están deshabilitadas por defecto")]),a._v(" "),s("p",[a._v("En algunos casos, tener SEO habilitado globalmente causó problemas de rendimiento y / o entró en conflicto con otros complementos. Para mitigar estos problemas, las características de SEO ahora están deshabilitadas de forma predeterminada.")]),a._v(" "),s("p",[a._v("Si se vio afectado por uno de los problemas anteriores, le recomendamos que lea la sección "),s("a",{attrs:{href:"https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mejorar el rendimiento"),s("OutboundLink")],1),a._v(" para habilitar el SEO solo donde lo necesites.")]),a._v(" "),s("p",[a._v("Si desea restaurar el comportamiento anterior, puede habilitar las funciones de SEO a nivel mundial estableciendo la opción "),s("code",[a._v("seo")]),a._v(" en "),s("code",[a._v("true")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  seo"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"ya-no-se-puede-configurar-preservestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ya-no-se-puede-configurar-preservestate"}},[a._v("#")]),a._v(" Ya no se puede configurar preserveState")]),a._v(" "),s("p",[a._v("Anteriormente era posible configurar manualmente "),s("code",[a._v("preserveState")]),a._v(" en el módulo de tienda de "),s("strong",[a._v("nuxt-i18n")]),a._v(", lo que en realidad daría lugar a comportamientos inesperados al usar la representación del lado del servidor. Esta opción se ha eliminado por completo y la opción "),s("code",[a._v("preserveState")]),a._v(" del módulo ahora está "),s("a",{attrs:{href:"https://github.com/nuxt-community/nuxt-i18n/blob/05e9d1f80715cc23a545adf4303e49af3ee40ac3/src/plugins/main.js#L77",target:"_blank",rel:"noopener noreferrer"}},[a._v("establecida automáticamente"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Si estaba utilizando la opción de configuración "),s("code",[a._v("preserveState")]),a._v(" anteriormente, puede eliminarse de manera segura:")]),a._v(" "),s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" {\n   vuex: {\n-    preserveState: true,\n     // other configuration options\n   }\n }\n")])])]),s("h3",{attrs:{id:"las-opciones-del-modulo-de-almacenamiento-se-han-aplanado-y-renombrado"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#las-opciones-del-modulo-de-almacenamiento-se-han-aplanado-y-renombrado"}},[a._v("#")]),a._v(" Las opciones del módulo de almacenamiento se han aplanado y renombrado")]),a._v(" "),s("p",[a._v("La opción de configuración "),s("code",[a._v("vuex")]),a._v(" se usa para exponer una propiedad "),s("code",[a._v("mutations")]),a._v(" donde cada mutación se puede deshabilitar o renombrar. Por el bien de la simplicidad, ya no es posible cambiar el nombre de estas mutaciones, la propiedad "),s("code",[a._v("mutations")]),a._v(" se ha eliminado para aplanar la configuración y se ha cambiado el nombre de cada opción para reflejar mejor lo que hace.")]),a._v(" "),s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" {\n   vuex: {\n-    mutations: {\n-      setLocale: 'SET_LOCALE_MUTATION',\n-      setMessages: 'SET_MESSAGE_MUTATION',\n-      setRouteParams: 'SET_ROUTE_PARAMS_MUTATION'\n-    }\n+    syncLocale: true,\n+    syncMessages: true,\n+    syncRouteParams: true\n   },\n }\n")])])]),s("h2",{attrs:{id:"actualizacion-de-4-x-a-5-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizacion-de-4-x-a-5-x"}},[a._v("#")]),a._v(" Actualización de 4.x a 5.x")]),a._v(" "),s("p",[a._v("Consulte "),s("a",{attrs:{href:"https://github.com/kazupon/vue-i18n/blob/dev/CHANGELOG.md#800-2018-06-23",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[a._v("vue-i18n")]),a._v(" registro de cambios"),s("OutboundLink")],1),a._v(" para obtener más información sobre cambios de última hora en "),s("strong",[a._v("nuxt-i18n 5.x")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"actualizacion-de-3-x-a-4-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizacion-de-3-x-a-4-x"}},[a._v("#")]),a._v(" Actualización de 3.x a 4.x")]),a._v(" "),s("h3",{attrs:{id:"opciones-de-clave-in-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opciones-de-clave-in-component"}},[a._v("#")]),a._v(" Opciones de clave in-component")]),a._v(" "),s("p",[a._v("v4.x introduce un solo cambio que requiere que cambie el nombre de la clave "),s("code",[a._v("i18n")]),a._v(" a "),s("code",[a._v("nuxtI18n")]),a._v(" en sus páginas que usan la configuración en componentes, esto debería evitar conflictos con vue-i18n.")]),a._v(" "),s("p",[s("strong",[a._v("3.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// pages/about.vue")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/about-us'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("4.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// pages/about.vue")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  nuxtI18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/about-us'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"actualizacion-de-2-x-a-3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizacion-de-2-x-a-3-x"}},[a._v("#")]),a._v(" Actualización de 2.x a 3.x")]),a._v(" "),s("h3",{attrs:{id:"rutas-personalizadas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rutas-personalizadas"}},[a._v("#")]),a._v(" Rutas personalizadas")]),a._v(" "),s("p",[a._v("La opción "),s("code",[a._v("routes")]),a._v(" se ha descartado a favor de la configuración en componentes, cualquier configuración de ruta personalizada debe colocarse en su archivo de página correspondiente.")]),a._v(" "),s("p",[s("strong",[a._v("2.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      routes"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        about"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          en"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/about-us'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("3.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// pages/about.vue")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    paths"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      fr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/a-propos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      en"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/about-us'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"rutas-ignoradas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rutas-ignoradas"}},[a._v("#")]),a._v(" Rutas ignoradas")]),a._v(" "),s("p",[a._v("La opción "),s("code",[a._v("ignorePaths")]),a._v(" también se ha eliminado, su comportamiento se puede reproducir configurando "),s("code",[a._v("i18n")]),a._v(" en "),s("code",[a._v("false")]),a._v(" en sus páginas.")]),a._v(" "),s("p",[s("strong",[a._v("2.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      ignorePaths"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/fr/notlocalized'")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("3.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// pages/fr/notlocalized.vue")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  i18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"noprefixdefaultlocale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#noprefixdefaultlocale"}},[a._v("#")]),a._v(" noPrefixDefaultLocale")]),a._v(" "),s("p",[a._v("El "),s("code",[a._v("noPrefixDefaultLocale")]),a._v(" se ha descartado en favor de la opción "),s("code",[a._v("strategy")]),a._v(".")]),a._v(" "),s("p",[s("strong",[a._v("2.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      noPrefixDefaultLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("3.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'prefix'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"loadlanguagesasync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loadlanguagesasync"}},[a._v("#")]),a._v(" loadLanguagesAsync")]),a._v(" "),s("p",[a._v("La opción "),s("code",[a._v("loadLanguagesAsync")]),a._v(" ha cambiado de nombre a "),s("code",[a._v("lazy")]),a._v(". La opción  "),s("code",[a._v("langFile")]),a._v(" en "),s("code",[a._v("locales")]),a._v(" ha cambiado de nombre a "),s("code",[a._v("file")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"redirectcookiekey-useredirectcookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirectcookiekey-useredirectcookie"}},[a._v("#")]),a._v(" redirectCookieKey & useRedirectCookie")]),a._v(" "),s("p",[s("code",[a._v("redirectCookieKey")]),a._v(" y "),s("code",[a._v("useRedirectCookie")]),a._v(" se han fusionado en la opción "),s("code",[a._v("detectBrowserLanguage")]),a._v(" y han cambiado el nombre a "),s("code",[a._v("cookieKey")]),a._v(" y "),s("code",[a._v("useCookie")]),a._v(" respectivamente.")]),a._v(" "),s("p",[s("strong",[a._v("2.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      detectBrowserLanguage"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      redirectCookieKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'redirected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      useRedirectCookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("3.x:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'nuxt-i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      detectBrowserLanguage"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        cookieKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'redirected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        useCookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);