// ==UserScript==
// @name         Auto Sequence Actions with Delays
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically perform a sequence of actions with 3 seconds delay between each action
// @author       Your Name
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/username/repo/main/auto_sequence_actions.js
// @downloadURL  https://raw.githubusercontent.com/username/repo/main/auto_sequence_actions.js
// ==/UserScript==

(function() {
    'use strict';

    // Fungsi untuk mengklik tombol dengan teks "Done"
    function clickDoneButton() {
        const buttons = document.querySelectorAll('.reply-markup-button-text');
        for (let button of buttons) {
            if (button.textContent.trim() === 'Done') {
                button.click();
                console.log('Button with text "Done" clicked');
                return;
            }
        }
        console.log('Button with text "Done" not found');
    }

    // Fungsi untuk memasukkan teks ke dalam elemen input
    function typeMessage(message) {
        const inputField = document.querySelector('.input-message-input');
        if (inputField && inputField.isContentEditable) {
            inputField.focus();
            document.execCommand('insertText', false, message);
            console.log(`Message "${message}" typed into the input field`);
        } else {
            console.log('Input field not found or not editable');
        }
    }

    // Fungsi untuk mengklik tombol kirim
    function clickSendButton() {
        const button = document.querySelector('.tgico.animated-button-icon-icon.btn-send-icon-send');
        if (button) {
            button.click();
            console.log('Send button clicked');
        } else {
            console.log('Send button not found');
        }
    }

    // Eksekusi urutan aksi dengan jeda 3 detik di antara tiap aksi
    setTimeout(() => {
        clickDoneButton();
        setTimeout(() => {
            clickDoneButton();
            setTimeout(() => {
                typeMessage('@0xbaguseth');
                setTimeout(() => {
                    clickSendButton();
                    setTimeout(() => {
                        clickDoneButton();
                        setTimeout(() => {
                            clickDoneButton();
                            setTimeout(() => {
                                typeMessage('asdddfsd');
                                setTimeout(() => {
                                    clickSendButton();
                                    setTimeout(() => {
                                        typeMessage('0x0a09a1f72148aedf7f4b635c54553838e04361cd');
                                        setTimeout(() => {
                                            clickSendButton();
                                            console.log('All actions completed');
                                        }, 3000);
                                    }, 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
})();
