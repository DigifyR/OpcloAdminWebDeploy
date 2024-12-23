'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4fac69ac422ff9d460bdb2fd008847c2",
"version.json": "13998c45235df53dccf3bc8454273fcc",
"favicon.ico": "906e49e784d945470356cf8aa39971bd",
"index.html": "bcf6c609904ad6fc7e14a6c6d2dc044f",
"/": "bcf6c609904ad6fc7e14a6c6d2dc044f",
"main.dart.js": "9fd47db2baf84eef4afe7f4332727a10",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "3214621ad4da1c7fc0675314dd94eaab",
"icons/Icon-maskable-192.png": "3214621ad4da1c7fc0675314dd94eaab",
"icons/Icon-maskable-512.png": "3214621ad4da1c7fc0675314dd94eaab",
"icons/Icon-512.png": "3214621ad4da1c7fc0675314dd94eaab",
"manifest.json": "5b2d18b84103eb237bf3d8bbef423fca",
"assets/AssetManifest.json": "540475f27b159e015ce97653ed0a7976",
"assets/NOTICES": "e9abb06e0ae85830ea73f64016c88600",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/AssetManifest.bin.json": "fc6da200de40c5364ccf89f6774097f2",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4c37758a84bfefd14ca4b7a4279d429d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "be0a5fdd529ae441297cec2b909b38cf",
"assets/fonts/MaterialIcons-Regular.otf": "e6276ba6b5fd8f41874baf417114eef1",
"assets/assets/svg/search.svg": "689e20800a3c7722e52c1979256cef4c",
"assets/assets/svg/management.svg": "18c8e218399068c4209797a26ff246c0",
"assets/assets/svg/logout.svg": "51776d44ce8ac6559c2d175890bfe346",
"assets/assets/svg/lock00.svg": "41f7c60899d670ce46402ba91a2ea80a",
"assets/assets/svg/calender.svg": "bfa327efc8addbe6c4e40a23eb55645d",
"assets/assets/svg/settings.svg": "4b7a78ea244c1625229d1a42fb7cf0c4",
"assets/assets/svg/download.svg": "ad86093e62f87f86c00bfc7eba77eebe",
"assets/assets/svg/pin.svg": "7b726c97629423bec642f241e951d955",
"assets/assets/svg/email.svg": "466f3317eac7d18fc58d064a0d8744aa",
"assets/assets/svg/notifications-active.svg": "d2e3c66a7194cd65c5fe8a6e7b9dffb5",
"assets/assets/svg/info.svg": "af0fe01db0d3fe09dbc2fb8fc91c6504",
"assets/assets/svg/user_mana.svg": "49dcdebc5432e8f17e221b78ea9fdc09",
"assets/assets/svg/add.svg": "8b915d99d06eaf914b34253c869eed90",
"assets/assets/svg/more.svg": "d94834d15b1ac03dc8b3d3945ceab2a6",
"assets/assets/svg/up-circle.svg": "8c35b6bb7074d6f479456eb44d199594",
"assets/assets/svg/down-circle.svg": "bcbc367d975fb33261119cb7fcf31461",
"assets/assets/svg/promotional.svg": "947a47c69467f03453a7cbb181ad1316",
"assets/assets/svg/edit.svg": "0f28c2d16e05ebc12bff2aa14a11c9b3",
"assets/assets/svg/delete.svg": "d1508397587c2bfa7c12a2109e90eb08",
"assets/assets/svg/filter.svg": "0fa367aae254e0422c546cf1598c2261",
"assets/assets/svg/upload.svg": "13c4ccddd4aa76733a89caeaa1dc16ba",
"assets/assets/images/sad1.png": "e8f4e67fb0486a53983d9629f80a1433",
"assets/assets/images/logo.png": "3214621ad4da1c7fc0675314dd94eaab",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
