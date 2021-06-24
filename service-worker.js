/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "549466a6fba17934dc8fff9a691877b9"
  },
  {
    "url": "about.html",
    "revision": "9f5b0221476643508da68063ec4caded"
  },
  {
    "url": "assets/css/0.styles.12359121.css",
    "revision": "68a51c02f627860de72409629a0aefe5"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/59cf84079d9ff4f9.c3cb8642.jpg",
    "revision": "c3cb86428ca95ea7809e4d036b128f88"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.37f5fa91.png",
    "revision": "37f5fa91c8151cd4cd75dc01928b86d1"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/image-10-1024x161.169e95fc.png",
    "revision": "169e95fcca2c31d71fd9f90cce5b718e"
  },
  {
    "url": "assets/img/image-11-1024x983.afe1381b.png",
    "revision": "afe1381b3fbbd1bc0dbef79f97e9c060"
  },
  {
    "url": "assets/img/image-12.7e63d831.png",
    "revision": "7e63d831c7782dd450695e4c369d481c"
  },
  {
    "url": "assets/img/image-13-1024x530.32b90895.png",
    "revision": "32b9089552ed4c6985299ac25b72eb2b"
  },
  {
    "url": "assets/img/image-14-1024x783.095f8fed.png",
    "revision": "095f8fed3a82cdd55a118f45be230bcb"
  },
  {
    "url": "assets/img/image-15-1024x173.d2142657.png",
    "revision": "d2142657fa0d8529b211e11d7f5a0e5f"
  },
  {
    "url": "assets/img/image-16-1024x538.fa1f9b81.png",
    "revision": "fa1f9b8148e1466c515c984e8f37be66"
  },
  {
    "url": "assets/img/image-18.7fbe76bf.png",
    "revision": "7fbe76bff1249166b06eed7f453b3455"
  },
  {
    "url": "assets/img/image-3.d4dc8c8a.png",
    "revision": "d4dc8c8aa38580ebcb53624313936927"
  },
  {
    "url": "assets/img/image-4-1024x143.48c99606.png",
    "revision": "48c9960603158762b19ce500b291d3ca"
  },
  {
    "url": "assets/img/image-5-1024x257.a7107bf3.png",
    "revision": "a7107bf39605a9ae2934ed69841f03a7"
  },
  {
    "url": "assets/img/image-6-1024x333.7e141f1d.png",
    "revision": "7e141f1da324e1d5911cf48316d7469f"
  },
  {
    "url": "assets/img/image-7.88315b90.png",
    "revision": "88315b90a5d1b58c7ab912f814f89554"
  },
  {
    "url": "assets/img/image-8-1024x484.17112dd0.png",
    "revision": "17112dd0cb8dee9df4a02ec190e537c1"
  },
  {
    "url": "assets/img/image-9-1024x435.a03d62f7.png",
    "revision": "a03d62f74e00e2cb3fc2a9269dc219f9"
  },
  {
    "url": "assets/img/image.8fa62283.png",
    "revision": "8fa622832eb86cc09ba6f257414fd9ce"
  },
  {
    "url": "assets/img/IMG_20210123_205049.50b37749.jpg",
    "revision": "50b3774914c541b0bf82c53bbf7babd6"
  },
  {
    "url": "assets/img/IMG_20210126_195515.6e5798e8.jpg",
    "revision": "6e5798e838b6316c0d63516bf2217f14"
  },
  {
    "url": "assets/img/IMG_20210126_195546.64da6a29.jpg",
    "revision": "64da6a297e623bba762e4611a17e307b"
  },
  {
    "url": "assets/img/IMG_20210126_195856.50b26fe4.jpg",
    "revision": "50b26fe4593d88ec4236396acf71ccac"
  },
  {
    "url": "assets/img/IMG_20210126_195932.cc16b5b6.jpg",
    "revision": "cc16b5b6cc7b5d3b418cb6ef3b59f00c"
  },
  {
    "url": "assets/img/IMG_20210126_200439_edit_7106211807769.679c984e.jpg",
    "revision": "679c984e3cc616f2a894b628a7da95b0"
  },
  {
    "url": "assets/img/IMG_20210126_205402.5b5d2cc1.jpg",
    "revision": "5b5d2cc105685e7f0fc1ad80559701cc"
  },
  {
    "url": "assets/img/IMG_20210126_205908.73ed6cb5.jpg",
    "revision": "73ed6cb55530f8bd19980029946ca663"
  },
  {
    "url": "assets/img/IMG_20210126_210458.2062dad8.jpg",
    "revision": "2062dad8c05bf3a6dd2ac50c61f734a6"
  },
  {
    "url": "assets/img/IMG_20210126_210550.b0ee9b5a.jpg",
    "revision": "b0ee9b5ac13f8c02b4bf84f11bef0e73"
  },
  {
    "url": "assets/img/IMG_20210126_210622.042c5b47.jpg",
    "revision": "042c5b47ddbb72825795dfe663af5eec"
  },
  {
    "url": "assets/img/IMG_20210126_211345.589c64df.jpg",
    "revision": "589c64df659620fda62d9d557cdd4680"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.ccaefe4a.jpg",
    "revision": "ccaefe4a0f839087e7ded77788a6e2df"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/Screenshot_20210128_114248_com.MobileTicket.b64a9636.jpg",
    "revision": "b64a9636ad938d85cb54a89e599c7c36"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/streetview.1827283d.svg",
    "revision": "1827283dd10029f62907c30200d911b5"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.d881729e.js",
    "revision": "8805d7421e8eb1d3f309305693f94bf0"
  },
  {
    "url": "assets/js/11.892197fd.js",
    "revision": "ab252d5599ee563decfb8fbf15769f8d"
  },
  {
    "url": "assets/js/12.f70d3c08.js",
    "revision": "11bb17fe61d4c8b2c92403bc49f6dd5f"
  },
  {
    "url": "assets/js/13.d3fe4e71.js",
    "revision": "6223d41daeb0d4471a17008f25c765a7"
  },
  {
    "url": "assets/js/14.0c75d4ae.js",
    "revision": "3be1ea83a88cb714e4411560b1e0d960"
  },
  {
    "url": "assets/js/15.42a68383.js",
    "revision": "9a1aed8f00cd3f76e25e2086362f2283"
  },
  {
    "url": "assets/js/16.3bc6a795.js",
    "revision": "a53e5cfa1d32f3597b7aeff65cf1dc99"
  },
  {
    "url": "assets/js/17.75ea3cd6.js",
    "revision": "11a676454e476efac6420555d3ecad7b"
  },
  {
    "url": "assets/js/18.75a58c24.js",
    "revision": "14499305a8eb83d6f6c252e99ec914c6"
  },
  {
    "url": "assets/js/19.bf3f46f9.js",
    "revision": "7d97485d245013510ab701f7e5b1bd4d"
  },
  {
    "url": "assets/js/2.36fa3e10.js",
    "revision": "da9681c3e14d04ef861e319045cf0607"
  },
  {
    "url": "assets/js/20.605a2da5.js",
    "revision": "54c13bb9477c88673fb3d33a97127fc5"
  },
  {
    "url": "assets/js/21.b34ee08a.js",
    "revision": "c0d0132a0c4eb12bad009afcb99859ea"
  },
  {
    "url": "assets/js/22.515dc5b1.js",
    "revision": "c5c6b413f2a449569bc0c461ec58c049"
  },
  {
    "url": "assets/js/23.03f5e127.js",
    "revision": "bbd5a2d89b1161078d7327bf66739a5e"
  },
  {
    "url": "assets/js/24.a7162ab3.js",
    "revision": "16cdf49c6933533e2cbaa4deb135c51b"
  },
  {
    "url": "assets/js/25.573a24a6.js",
    "revision": "cbfa474db8bb425a3ba8f871d51cfd9f"
  },
  {
    "url": "assets/js/26.97b75522.js",
    "revision": "815e26db8bdce8726c3f6d4d1515ef57"
  },
  {
    "url": "assets/js/27.4c570f40.js",
    "revision": "7010277711c775e2f1d12eef1b1ba485"
  },
  {
    "url": "assets/js/28.5325c13f.js",
    "revision": "347aaa639a349875fbed6a48df56b5c9"
  },
  {
    "url": "assets/js/29.8eee4f75.js",
    "revision": "145b05f180826156c8fa23e2b815cded"
  },
  {
    "url": "assets/js/3.7de466c3.js",
    "revision": "744b6888db116f72658dc652be2273d4"
  },
  {
    "url": "assets/js/30.389385ba.js",
    "revision": "aba4e4fd3fb2272c42c0b7e5d91d4c8b"
  },
  {
    "url": "assets/js/31.eac2feee.js",
    "revision": "3e47f49adfb7cceeaf8a09d68d42fedb"
  },
  {
    "url": "assets/js/32.ae282efb.js",
    "revision": "eb2fd8239bb737a1da312a3d353318b0"
  },
  {
    "url": "assets/js/33.76b3df57.js",
    "revision": "a3bbe4890d1c991c120c9a4c073f1ced"
  },
  {
    "url": "assets/js/34.096b8c13.js",
    "revision": "16c8a81c589e56a79124d01d4fbd4da6"
  },
  {
    "url": "assets/js/35.74a47d52.js",
    "revision": "15bd50e5d3d01944dfd6435cacfdaf4a"
  },
  {
    "url": "assets/js/36.69f92997.js",
    "revision": "efbdb66f83389367590884998729af77"
  },
  {
    "url": "assets/js/37.a8b08b1a.js",
    "revision": "181312b79aa77c28bc08c44eadbc7530"
  },
  {
    "url": "assets/js/38.437c5e56.js",
    "revision": "3e57ce2a2e94e0be82e6605f4f74157d"
  },
  {
    "url": "assets/js/39.b92b9dee.js",
    "revision": "c97b6e927cd66524e3d3f71dadc31371"
  },
  {
    "url": "assets/js/4.3ce4a4b2.js",
    "revision": "99aee972584d263bdc81be0438f43c04"
  },
  {
    "url": "assets/js/40.ea08e644.js",
    "revision": "d52ba5a242365de250c5d1fdee8c35d8"
  },
  {
    "url": "assets/js/41.62991a98.js",
    "revision": "e9730dda8a48eb4633da03cc85f8c11f"
  },
  {
    "url": "assets/js/42.a6d9c78f.js",
    "revision": "7321627a8417327d22e71fc665a71691"
  },
  {
    "url": "assets/js/43.c1a69590.js",
    "revision": "55eb49ecd2765c837c5096c7b186219a"
  },
  {
    "url": "assets/js/44.5cc1bbc4.js",
    "revision": "27ac3e6153679333c8595761da970ba3"
  },
  {
    "url": "assets/js/45.f0ae698a.js",
    "revision": "d63409b14249f8ba085700bb6ed19b34"
  },
  {
    "url": "assets/js/46.5ce9d5a4.js",
    "revision": "1daa92a860db6b44daac05533f3562cf"
  },
  {
    "url": "assets/js/47.efa10f5a.js",
    "revision": "8127cf458bb86e0beac9360bdc4902db"
  },
  {
    "url": "assets/js/48.6f728f7c.js",
    "revision": "71de64a5503c636ec7b03f7a099585dc"
  },
  {
    "url": "assets/js/49.0e573c4e.js",
    "revision": "5ccb4ce5d81f552bd53b3058328ad650"
  },
  {
    "url": "assets/js/5.cfb960da.js",
    "revision": "0e3ec1c00011e4b80c8a5601416d666b"
  },
  {
    "url": "assets/js/50.5aa18596.js",
    "revision": "d9aabec531ebdb7e5072f432ad9757c9"
  },
  {
    "url": "assets/js/51.c9ba9600.js",
    "revision": "d72266c1edb0e4e61b0c9cded2677a1d"
  },
  {
    "url": "assets/js/52.14e233a4.js",
    "revision": "f0af70b368e260f8911721eddecbd517"
  },
  {
    "url": "assets/js/53.4691461a.js",
    "revision": "5967617fc767fb7ba85aaa366fe97cc2"
  },
  {
    "url": "assets/js/54.1d3a0ff9.js",
    "revision": "34985603b705019d20f31604013d615b"
  },
  {
    "url": "assets/js/55.578f900e.js",
    "revision": "ab68001fe093affe43ee22ad432872ee"
  },
  {
    "url": "assets/js/56.d1a646e9.js",
    "revision": "43872d58a0994a8ab0209631eb76641c"
  },
  {
    "url": "assets/js/57.68f2cfdc.js",
    "revision": "9bc9de31ccebc78be23154c2d5c2410e"
  },
  {
    "url": "assets/js/58.c43cdb1a.js",
    "revision": "96b0944a1489b2adb2f85409b2697542"
  },
  {
    "url": "assets/js/59.df3dfb58.js",
    "revision": "81ac725e23ba50b555aad8047223c033"
  },
  {
    "url": "assets/js/6.4400aa6e.js",
    "revision": "a364908a59a4cc5556aeb8674ca381e5"
  },
  {
    "url": "assets/js/60.e26372a2.js",
    "revision": "b53e41e6dc64e7050a909116fbaddcc9"
  },
  {
    "url": "assets/js/61.bae85649.js",
    "revision": "b37e6acd2f25513b3b61ac0b774b4091"
  },
  {
    "url": "assets/js/7.5633739e.js",
    "revision": "1425e5a2a603b6aaf4d3861da7822157"
  },
  {
    "url": "assets/js/8.8d4e1aba.js",
    "revision": "0bc179351c1e2cb1dbff189482183deb"
  },
  {
    "url": "assets/js/9.210495e0.js",
    "revision": "4801e3b5b048735106664bfb6a2dc736"
  },
  {
    "url": "assets/js/app.b5e55e47.js",
    "revision": "de30cdb60a69706631f798d9fd5fa9cd"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "894973d93c00882c5d3c652d47a82da0"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "3fd526677f8dc120e0a91079692bcc16"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "b8e80552b23a1c28c3aa18766f36d36a"
  },
  {
    "url": "calendar/2021-2022.html",
    "revision": "e3f68422a8540cfe9f18d6d8d66e3407"
  },
  {
    "url": "calendar/index.html",
    "revision": "16472bb09de9cf8de462623be4f4fef3"
  },
  {
    "url": "contact/index.html",
    "revision": "44ba0862e084e8d0ccbbc7cd07b4f29a"
  },
  {
    "url": "emergency/index.html",
    "revision": "147f62fbf1e04d4dd1325d50159564fc"
  },
  {
    "url": "facility/index.html",
    "revision": "38433c0f3e78cad03ddff8053b9fcfbc"
  },
  {
    "url": "facility/panolens.html",
    "revision": "ad1fcd891955e9404b59971e9ed54a30"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "7e1c88c7f0c1f1a9a1299b0fa9236232"
  },
  {
    "url": "index.html",
    "revision": "686c17c1f5c4c006878a564096979320"
  },
  {
    "url": "life/catering/index.html",
    "revision": "a310155e7a2d9386941e517ac3d5a9a3"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "c3622779b52dbd93762fb7c6e6c660d6"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "505d3bd175a38e8dee8581b8881b25de"
  },
  {
    "url": "life/index.html",
    "revision": "eca67162b9b1df24abbcaa831004164b"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "f049f0ed37deced637a308c875e53d38"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "d400b62a8dd6fd21d01b8955c13f98bb"
  },
  {
    "url": "news/index.html",
    "revision": "7f6424140afde20f6efb3cf6f6632a74"
  },
  {
    "url": "organizations/index.html",
    "revision": "929caf6552f8d1393c9af312af7ddcac"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "b304f7dd5f6806235e19734c805eee99"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "f85c7c6b94b7831fa4e692a933a4bde4"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "2f05f05754e907d11eec16234be316f3"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "6c62cbb99a6c0303bac2c4104d66f880"
  },
  {
    "url": "service/email/index.html",
    "revision": "3109f27a6f42f61196ef0c72bc741571"
  },
  {
    "url": "service/index.html",
    "revision": "79c57eaf1f29a2b93e41ad4627101167"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "6c05e7106ba13c8e2225ffd6acf913ca"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "f5d2a3f48b612a295e755577d7d5fedb"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "193c617a8318287a2ec375b2183a804b"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "3bb1ad5d102915643cf4d1de4049e6e6"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "cb5964bfd34c718f0ff32d283596b372"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "21cd2329b07877dd78a530de20ba4e77"
  },
  {
    "url": "service/network/eduroam/index.html",
    "revision": "8afcde26c090dee94252bd954fdec584"
  },
  {
    "url": "service/network/index.html",
    "revision": "d8ad877a57683b19462c6e49622b657d"
  },
  {
    "url": "service/network/ipv6/index.html",
    "revision": "8435a36d8a578d73a7fdc31d5b7b9072"
  },
  {
    "url": "service/network/remote-desktop/index.html",
    "revision": "2485de371232022e568c4f6ebdfc39f1"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "02c6427c23dc786d1b0d76a3e5984a0e"
  },
  {
    "url": "service/sid/index.html",
    "revision": "52f2f655b166b1fcd4912e8e5d1fe840"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "28cbd3446b59d7e9b0fd8f3c093887e1"
  },
  {
    "url": "service/student-train-ticket/index.html",
    "revision": "7a4d57e3c907a183d23ca8ba0caae953"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "2353c3aa344ab7e4e9adb9d2df47b8cf"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "29ff1851516b52f49795cb34a3ddee18"
  },
  {
    "url": "site-help/index.html",
    "revision": "a9388b9725eb66fd68e0c97e657a38a1"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "e7f72d6be3f2397215a330f5cf35c06c"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "ffacf460700c91dce3e9bcbbfb8f0b54"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "3abe7b55372d59b69618a1827764ee5a"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "9efa38b05e25cab2688d39b5d156cc95"
  },
  {
    "url": "study/index.html",
    "revision": "599df38580013f0a09065873599ec1ba"
  },
  {
    "url": "surroundings/index.html",
    "revision": "3662854196900971ab6d107df1a70071"
  },
  {
    "url": "transport/holiday.html",
    "revision": "246ecd98c6fd87cd8aa8cd7846b2f44b"
  },
  {
    "url": "transport/index.html",
    "revision": "f4eabc88ead4c35ad765f5480f30eaae"
  },
  {
    "url": "transport/redirect.html",
    "revision": "520abbab6ec53f5475a9bf2f6e3cb3f3"
  },
  {
    "url": "transport/workday.html",
    "revision": "b7c45edd80a2905318105140019c0090"
  },
  {
    "url": "wx_helper.js",
    "revision": "09d67f229a32659f1acf7d55a767e962"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
