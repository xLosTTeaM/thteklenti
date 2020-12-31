var textarea_id = "";
if (document.getElementById("vB_Editor_QR_textarea") != null) {
    textarea_id = "vB_Editor_QR_textarea";
} else if (document.getElementById("vB_Editor_001_textarea") != null) {
    textarea_id = "vB_Editor_001_textarea";
}

document.onkeyup = function(e) {
    if (e.ctrlKey && e.shiftKey && e.which == 65) { // ctrl + shift + a
        ayrac();
    } else if (e.ctrlKey && e.shiftKey && e.which == 83) { // ctrl + shift + s
        maddele();
    } else if (e.ctrlKey && e.shiftKey && e.which == 72) { // ctrl + shift + h
        renklendir("baslik_renk");
    } else if (e.ctrlKey && e.shiftKey && e.which == 70) { // ctrl + shift + f
        renklendir("vurgu_renk");
    } else if (e.ctrlKey && e.shiftKey && e.which == 88) { // ctrl + shift + x
        renklendir("yazi_renk");
    }
};

function ayrac() {
    var textarea = document.getElementById(textarea_id);
    var start = textarea.selectionStart;
    var finish = textarea.selectionEnd;
    chrome.storage.local.get(['ayrac_link'], function(result) {
        var ayrac = result.ayrac_link;
        if (ayrac !== undefined) {
            var newText = textarea.value.substring(0, start) + "[IMG]" + ayrac + "[/IMG]" + textarea.value.substring(finish, textarea.value.length);
            textarea.value = newText;
        } else {
            alert("Uzantı Ayarları Yapılmadı...");
        }
    });

}

function maddele() {
    var textarea = document.getElementById(textarea_id);
    var start = textarea.selectionStart;
    var finish = textarea.selectionEnd;
    var selected_text = textarea.value.substring(start, finish);
    var maddeler = selected_text.split("\n");
    var maddeler_yeni = "";
    chrome.storage.local.get(['madde', 'madde_renk'], function(result) {
        var madde_sekil = result.madde;
        var madde_renk = result.madde_renk;
        if (madde_sekil !== undefined && madde_renk !== undefined) {
            maddeler.forEach(madde => {
                maddeler_yeni += '[COLOR="' + madde_renk + '"]' + madde_sekil + '[/COLOR] ' + madde + '\n';
            });
            var newText = textarea.value.substring(0, start) + maddeler_yeni + textarea.value.substring(finish, textarea.value.length);
            textarea.value = newText;
        } else {
            alert("Uzantı Ayarları Yapılmadı...");
        }
    });

}

function renklendir(storage_key) {
    var textarea = document.getElementById(textarea_id);
    var start = textarea.selectionStart;
    var finish = textarea.selectionEnd;
    var selected_text = textarea.value.substring(start, finish);
    chrome.storage.local.get([storage_key], function(result) {
        var renk_kodu = "";
        if (storage_key == "baslik_renk") {
            renk_kodu = result.baslik_renk;
        } else if (storage_key == "vurgu_renk") {
            renk_kodu = result.vurgu_renk;
        } else if (storage_key == "yazi_renk") {
            renk_kodu = result.yazi_renk;
        }
        if (renk_kodu !== undefined) {
            var newText = textarea.value.substring(0, start) + '[COLOR="' + renk_kodu + '"]' + selected_text + '[/COLOR]' + textarea.value.substring(finish, textarea.value.length);
            textarea.value = newText;
        } else {
            alert("Uzantı Ayarları Yapılmadı...");
        }
    });
}

if (document.getElementsByClassName('postbit-message')[0] != null) {
    var url_path = location.pathname.split("-");
    var is_main_page = url_path[url_path.length - 1].slice(0, -5);
    if (isNaN(parseInt(is_main_page))) {
        var url = location.protocol + '//' + location.host + location.pathname;
        var baslik = document.getElementsByClassName("spe-posth1")[0].innerHTML;
        var div = document.getElementsByClassName('postbit-message')[0];
        var newText = document.createElement('div');
        var afterDiv = document.getElementsByClassName('old-signatur')[0];
        newText.className = "social_media";
        newText.style.width = "100%";
        newText.style.display = "flex";
        newText.style.alignContent = "center";
        newText.style.justifyContent = "flex-end";
        div.parentNode.insertBefore(newText, div.nextSibling);
        document.getElementsByClassName("social_media")[0].innerHTML += '<h3 style="margin-right:10px;">Paylaş:</h3>';
        document.getElementsByClassName("social_media")[0].innerHTML += '<a target="_blank" href="https://twitter.com/intent/tweet?text=' + url + '"><img style="float:right;margin:0px 20px 60px 0px;" height="50" width="50" src="https://i.hizliresim.com/VRZ1q1.png"></a>';
        document.getElementsByClassName("social_media")[0].innerHTML += '<a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=' + url + '"><img style="float:right;margin:0px 20px 60px 0px;" height="50" width="50" src="https://i.hizliresim.com/Oxphkq.png"></a>';
        document.getElementsByClassName("social_media")[0].innerHTML += '<a target="_blank" href="https://t.me/share/url?url=' + url + '&text=' + baslik + '"><img style="float:right;margin:0px 20px 60px 0px;" height="50" width="50" src="https://i.hizliresim.com/pp1ysB.png"></a>';
    }
}