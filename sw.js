importScripts('/static/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/static/10f76fb4bada4c3cade4.js",
    "revision": "fbdd05f41dee5b1c7989dec4e9bb3c9c"
  },
  {
    "url": "/static/20aea9e9854fb0773f00.js",
    "revision": "4241e4d1697376a723eff133d11db375"
  },
  {
    "url": "/static/24a2ecccfd049ec0df25.js",
    "revision": "8bb7c7a8a3dddb9caf45f8b876a0af48"
  },
  {
    "url": "/static/2f8f53aa19bd102c8509.js",
    "revision": "290fd075e3548fcb1be0c91f5458d61a"
  },
  {
    "url": "/static/3ba8db9535f2526bdb0d.js",
    "revision": "d80785756603479c918117f323e915bc"
  },
  {
    "url": "/static/67da41b0abd46fbac9c2.js",
    "revision": "8027fb0e31f0465425f6885965b36658"
  },
  {
    "url": "/static/92bf20c6de151073d7a0.js",
    "revision": "5c397ffd770221213c47864ff590ca5d"
  },
  {
    "url": "/static/9fb34a2c40a9aafb4118.js",
    "revision": "c1442b7de802a9db120eb8650e6c4428"
  },
  {
    "url": "/static/ab4abbfe02f0c170ba7c.js",
    "revision": "591d59a0e0b97ed071bb2bcade1059a0"
  },
  {
    "url": "/static/afdda2f8d18a28f9a52f.js",
    "revision": "cbb939cea1c82b90ac451c2f0c65b6b6"
  },
  {
    "url": "/static/b2fb64249f2ecfbaa8b7.js",
    "revision": "46264c25d43a3228659212fe25f926ad"
  },
  {
    "url": "/static/ca77caa2c03bb7eb45a1.js",
    "revision": "85cab875990a5966b114bae21fe0ae3b"
  },
  {
    "url": "/static/e61fff106343821b6cea.js",
    "revision": "e4eacdc0d681019a75d9da6ea63d030e"
  },
  {
    "url": "/static/ebd14d4968c23df53df2.js",
    "revision": "3076032440993fb24fcc475f1fbe78e9"
  },
  {
    "url": "/static/f1f94bb492d762f4003d.js",
    "revision": "00a73088ff176569aac6a06165918710"
  },
  {
    "url": "/static/f5e8d567b811d2f2b2b9.js",
    "revision": "872e695832163c3d7043757860eb55f6"
  }
], {
  "cacheId": "eewee",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/offline'])

workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/static/(?!content).*$'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('(/static/content)?/api/v0/.*'), workbox.strategies.networkFirst({"cacheName":"eewee_api","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')



// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/offline'))
})


