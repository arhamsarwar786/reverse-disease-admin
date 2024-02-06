'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0f1d3cc6407491c8154fae1a519c6ddc",
"index.html": "a181f78ecaa068f5ea9cd5c36c256a57",
"/": "a181f78ecaa068f5ea9cd5c36c256a57",
"main.dart.js": "bd27aea185bce9bd2e0e0622cb0c7cc2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aa52b6ac466f0841b7f645841af3f6c4",
"assets/images/emoji3.png": "874b19a8639db572a8eb3f6a8cac435f",
"assets/images/true.png": "9bd2aa14478396f7096834ad56afbc3e",
"assets/images/softdrink.png": "5032b5e95f64c01797d1cda8ff282714",
"assets/images/emoji2.png": "636768a1849b228e1f41e9a7d600b51c",
"assets/images/coffee.png": "8196a87dac403e9859029e2af028319e",
"assets/images/app_logo.jpeg": "416238c55ad25d7f0f0342c6c054a128",
"assets/images/emoji1.png": "94761af243866038de97f222797e78a9",
"assets/images/emoji5.png": "c5b8111ac67bda2b2df51aba93a2b42a",
"assets/images/gym_ilst.png": "122784464640b6400854a023b0e728b6",
"assets/images/reminder.png": "3ec77d461a6124362abe2073a68b10ad",
"assets/images/emoji4.png": "b528698c5bf2b17d7bf59fd8b8547165",
"assets/images/alcoholsmall.png": "c60bb233a47b55df9babcd9108eb8984",
"assets/images/stepsicon.png": "7e72e52bdc890063b3556bb90c4a4064",
"assets/images/ilst_1.png": "6b6c0e8f4fb82fbf5697e1b880ccb743",
"assets/images/male.png": "1486518e643a2e2c892d5ecc10b9ab2e",
"assets/images/alcohol.png": "624344c132ceb60bc723088ae3944d9e",
"assets/images/reminder_icon.png": "d2dd89c048bc360f2ede2885d507d77a",
"assets/images/milk.png": "38cf4c27258cbbe5c1f5998f473a83fd",
"assets/images/bottle.png": "916f605246aee34e433522c3471c2fbc",
"assets/images/juicebig.png": "3a8eac15e79dd13cd8e3171223289923",
"assets/images/personal_icon.png": "8374cab44d8ce94442ebc1735831475c",
"assets/images/fastinghis_icon.png": "f8931092dddda3a2a3faafabe1953d0f",
"assets/images/eating.png": "646aed5525595f032d5d43f6be1e468d",
"assets/images/coffeecup.png": "6dc976310b0709c08c7b33567ac6914f",
"assets/images/bigtea.png": "6fdd23bedce17e2620dcbea4306ef327",
"assets/images/weight.png": "7339cb5c9f5740972301825d609f5c66",
"assets/images/legal_icon.png": "f96d90acaef176ce36a5bc24cf1bd19c",
"assets/images/healthy.png": "fd249f8ae31ba00239cbf64460bcb251",
"assets/images/timer.png": "fc50ba4be6ec0f7d68ff61bfcb0f2a9f",
"assets/images/female.png": "b19f88414bc8e0447629f5fdc9450081",
"assets/images/coffeebig.png": "c12b63fc2d1550b80c33e895f80382f3",
"assets/images/logo.png": "f0eee2c064253289c54d1a696a8941a1",
"assets/images/contactus_icon.png": "c11169e5f972f22ed9f2df9e2ffdf193",
"assets/images/water.png": "0bca3901c6433625ae4397ad491032e4",
"assets/images/alcoholmedium.png": "8a8bd2f23ace7eff0dad3bef40bf2ca3",
"assets/images/weight_icon.png": "3bec13711e6b5c076bd5a64d8c878879",
"assets/images/binary.png": "c8a708748b1c0048810b2b97613f8ef9",
"assets/images/true_icon.png": "d7b243279f7ee0dbbdbde7147cf5350a",
"assets/images/bigbottle.png": "5bf0bf3b6d1365d5e9db067d5e4f3983",
"assets/images/running.png": "0878fc1a8428a816d97936d7b5884bdc",
"assets/images/lose_weight.png": "2e03585b0807feaa3c3436bb1ff0c571",
"assets/images/glass.png": "ec48ffe76a7b1a88d2903f106783e9c3",
"assets/images/hydration_icon.png": "8301674e94bda711c967cb3cc0ad388c",
"assets/images/breakfast.png": "dbabcdd153121b0fbdffba847d00f174",
"assets/images/tea.png": "f1fff76bf2a653a664a2a6a9e5b79800",
"assets/images/juice.png": "2757cfe078fc82de1815591929db1790",
"assets/images/bottleml.png": "7b3e4f59bbe1a4cf01be1cc0aa4c2ebb",
"assets/AssetManifest.json": "b71c4f01860e4dc06d4f3e300141ad80",
"assets/NOTICES": "ba63785c37172146972cedb6298513e5",
"assets/FontManifest.json": "bcf5add71ece4217f9605d2a80c860cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/jason/data.json": "7924ddcead82b9f4f7481ef049f63f54",
"assets/fonts/Campton-BoldDEMO.ttf": "6b96d52849eadcd061d62293a3f8c5d3",
"assets/fonts/Campton-LightDEMO.ttf": "24eea26547b7197c6c4563f749f2e895",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
