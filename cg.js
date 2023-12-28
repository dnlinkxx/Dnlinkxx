// ==UserScript==
// @name         Otomatis Klik Tombol
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Otomatis mengklik tombol pada situs web
// @author       You
// @match        https://www.coingecko.com/account/candy?locale=en
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ganti 'your_button_selector' dengan selektor tombol yang ingin Anda klik
    var button = document.querySelector('.collect-candy-button');

    // Periksa apakah tombol ditemukan sebelum mengklik
    if (button) {
        button.click();
    }
})();
