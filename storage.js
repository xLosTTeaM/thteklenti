var value = document.getElementById("ayrac").value;
chrome.storage.local.get(['ayrac_link', 'madde', 'madde_renk', 'baslik_renk', 'vurgu_renk', 'yazi_renk'], function(result) {
    if (result.ayrac_link !== undefined) {
        document.getElementById("ayrac").value = result.ayrac_link;
    }
    if (result.madde !== undefined) {
        document.getElementById("madde").value = result.madde;
    }
    if (result.madde_renk !== undefined) {
        document.getElementById("madde_renk").value = result.madde_renk;
    }
    if (result.baslik_renk !== undefined) {
        document.getElementById("baslik_renk").value = result.baslik_renk;
    }
    if (result.vurgu_renk !== undefined) {
        document.getElementById("vurgu_renk").value = result.vurgu_renk;
    }
    if (result.yazi_renk !== undefined) {
        document.getElementById("yazi_renk").value = result.yazi_renk;
    }
});

document.getElementById("kaydet").addEventListener("click", function() {
    var ayrac_link = document.getElementById("ayrac").value;
    chrome.storage.local.set({ 'ayrac_link': ayrac_link }, function() {
        console.log('Ayraç Adresi Kaydedildi: ' + ayrac_link);
    });
    var madde = document.getElementById("madde").value;
    chrome.storage.local.set({ 'madde': madde }, function() {
        console.log('Madde Şekli Kaydedildi: ' + madde);
    });
    var madde_renk = document.getElementById("madde_renk").value;
    chrome.storage.local.set({ 'madde_renk': madde_renk }, function() {
        console.log('Madde Rengi Kaydedildi: ' + madde_renk);
    });
    var baslik_renk = document.getElementById("baslik_renk").value;
    chrome.storage.local.set({ 'baslik_renk': baslik_renk }, function() {
        console.log('Başlık Rengi Kaydedildi: ' + baslik_renk);
    });
    var vurgu_renk = document.getElementById("vurgu_renk").value;
    chrome.storage.local.set({ 'vurgu_renk': vurgu_renk }, function() {
        console.log('Vurgu Rengi Kaydedildi: ' + vurgu_renk);
    });
    var yazi_renk = document.getElementById("yazi_renk").value;
    chrome.storage.local.set({ 'yazi_renk': yazi_renk }, function() {
        console.log('Yazı Rengi Kaydedildi: ' + yazi_renk);
    });
});