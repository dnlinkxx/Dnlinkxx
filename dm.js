// ==UserScript==
// @name         Diamond cmc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Otomatis mengklik tombol pada situs web
// @author       You
// @match        https://coinmarketcap.com/id/account/my-diamonds/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ganti 'your_button_selector' dengan selektor tombol yang ingin Anda klik
    var button = document.querySelector('.sc-f70bb44c-0.iQEJet.BaseButton_labelWrapper__wzpX7');

    // Periksa apakah tombol ditemukan sebelum mengklik
    if (button) {
        button.click();
    }
})();
