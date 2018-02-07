"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9d591db22fd8c776d86e56ae2a93bd0f"],["/static/css/main.b7894a32.css","06f8c112ec4e510a206fae1104e2bcbc"],["/static/js/main.1d11ec18.js","1bf49aa181219017e57c70a1c4fcf36b"],["/static/media/about-background.4e1e1cc3.jpg","4e1e1cc3d283367ef22eaee124ad7346"],["/static/media/contact-banner.38c291dd.jpg","38c291dd195b196909afbc747693a092"],["/static/media/follow-us-background.d706c840.jpg","d706c840a12af695baae10130b52e1cd"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/logo.585e5ac7.png","585e5ac720e0a2df99ab27656f3a1b19"],["/static/media/masonry-1.8b54efec.jpg","8b54efecba94e073753d284df635e276"],["/static/media/masonry-10.d7361f4e.jpg","d7361f4ebcf666d1b34d0e58033ffe5f"],["/static/media/masonry-11.f23c82cb.jpg","f23c82cb799b02db4b86a0925953cb60"],["/static/media/masonry-12.cd994dab.jpg","cd994dabf7b90d70b8fc2f8f68bba69d"],["/static/media/masonry-13.0ad47b8e.jpg","0ad47b8ea1a2d6ad733322493fdf20d5"],["/static/media/masonry-14.72cc6af9.jpg","72cc6af989537c32d28ce6c2dff2fc1f"],["/static/media/masonry-15.998f98e6.jpg","998f98e61fe3384feecb4a59ca56af89"],["/static/media/masonry-16.477e4472.jpg","477e447280afac2794b7bede26fbf71c"],["/static/media/masonry-17.e05f6429.jpg","e05f6429163e30983107987cd9d831fa"],["/static/media/masonry-2.f5717688.jpg","f57176888abe4645c48cc0f6a5d46dda"],["/static/media/masonry-3.987437aa.jpg","987437aaed453df87638078e34613f5d"],["/static/media/masonry-4.50c9205c.jpg","50c9205c4378f4001a6b37e4a15d975c"],["/static/media/masonry-5.a7dfb33e.jpg","a7dfb33e567fb21f24f019f4f954fd8e"],["/static/media/masonry-6.aacb88ca.jpg","aacb88cad4dd192c8bb94042d9c8c0c1"],["/static/media/masonry-7.6163fbed.jpg","6163fbed2ee57e65f72cc8a01121b806"],["/static/media/masonry-8.ae866709.jpg","ae8667094f1a500424f5955983987879"],["/static/media/masonry-9.239e3383.jpg","239e3383c8e09577a869f11fc7d8e7ad"],["/static/media/rustic-wreaths-background.e6a72659.jpg","e6a72659a20236f413c026f5fbe7432c"],["/static/media/showcase-1.81fc2627.jpg","81fc262711f9c5c71a1b2c2175863cf7"],["/static/media/showcase-2.abbd3006.jpg","abbd3006b430715827ccfe9134292dbd"],["/static/media/showcase-3.a00542a6.jpg","a00542a60dc31ebcb64e73f6a0ad98a9"],["/static/media/showcase-4.8e504ef2.jpg","8e504ef221d51f0df391df8a1729c97c"],["/static/media/showcase-5.001f9cbf.jpg","001f9cbfa55dfe9c4e11bc8543ae4ec8"],["/static/media/showcase-6.cef291bf.jpg","cef291bfc98b0761308e595e43453b00"],["/static/media/trade-show-banner.8fad7f9c.jpg","8fad7f9c9639bbc680b2c303f386bbb2"],["/static/media/tradeshows-1.7413202b.jpg","7413202b5eb1fa6e59f9c75444ce5631"],["/static/media/tradeshows-2.b59fae6e.jpg","b59fae6ed400279ded4aa4e5cfb2b640"],["/static/media/tradeshows-3.6ccb1d42.jpg","6ccb1d423935c9361c022dbd156ef083"],["/static/media/tradeshows-4.414f8e43.jpg","414f8e431c374faec504361abaf09d84"],["/static/media/tradeshows-5.2e53bd2d.jpg","2e53bd2d1e29628d0d4e56f1edee6fa9"],["/static/media/tradeshows-6.81bb30cd.jpg","81bb30cdf71799c6d7d22cb73071ced8"],["/static/media/tradeshows-7.062b1af4.jpg","062b1af4d4948cad368b6f3c6dd183d1"],["/static/media/tradeshows-8.15ee3281.jpg","15ee32812fe06552310e5ac35af8af7d"],["/static/media/wreaths-1.ed4d7b91.jpg","ed4d7b91789423c93826e03eacefeb19"],["/static/media/wreaths-2.2683071d.jpg","2683071dda2b5a967b40294e04d4e16d"],["/static/media/wreaths-3.8ee7da9e.jpg","8ee7da9efd4631b3c43ff7779d259e75"],["/static/media/wreaths-4.79950b6e.jpg","79950b6e233fb79415f67a2054355844"],["/static/media/wreaths-5.bf5bb675.jpg","bf5bb6759071139442292b29eef3c586"],["/static/media/wreaths-6.93c74b9f.jpg","93c74b9ffc3703f394c25418368c9a83"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});