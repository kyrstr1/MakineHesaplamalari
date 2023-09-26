//! Başlıca Hesaplamalar




//? Kremayer Dişli Hesaplamasi

function KremayerHesapla() { 
    let modul = document.getElementById("modul").value 
    let uzunluk = document.getElementById("uzunluk").value
    let adim = modul * Math.PI
    let dis_derinlik = 2.166 * modul
    let dis_ustu_yukseklik = modul 
    let dis_dibi_yukseklik = 1.166 * modul
    let buyuk_h = 3 * dis_derinlik
    let dis_genislik = Math.random() * (3 - 2.5) + 2.5
    let boydaki_dis = uzunluk / adim
    let kremayer_boy = adim * (boydaki_dis - 0.5)
    let kurs_boy = kremayer_boy - adim
    document.getElementById("kremayer-adim").innerHTML = adim
    document.getElementById("kremayer-dis-derinlik").innerHTML = dis_derinlik
    document.getElementById("kremayer-dis-ustu-yukseklik").innerHTML = dis_ustu_yukseklik
    document.getElementById("kremayer-dis-dibi-yukseklik").innerHTML = dis_dibi_yukseklik
    document.getElementById("kremayer-buyuk-h").innerHTML = buyuk_h
    document.getElementById("kremayer-dis-genislik").innerHTML = dis_genislik
    document.getElementById("kremayer-boydaki-dis").innerHTML = boydaki_dis
    document.getElementById("kremayer-kremayer-boy").innerHTML = kremayer_boy
    document.getElementById("kremayer-kurs_boy").innerHTML = kurs_boy
}
function KremayerTemizle() {
    document.getElementById("modul").value = ""
    document.getElementById("uzunluk").value = ""
    document.getElementById("kremayer-adim").innerHTML = ""
    document.getElementById("kremayer-dis-derinlik").innerHTML = ""
    document.getElementById("kremayer-dis-ustu-yukseklik").innerHTML = ""
    document.getElementById("kremayer-dis-dibi-yukseklik").innerHTML = ""
    document.getElementById("kremayer-buyuk-h").innerHTML = ""
    document.getElementById("kremayer-dis-genislik").innerHTML = ""
    document.getElementById("kremayer-boydaki-dis").innerHTML = ""
    document.getElementById("kremayer-kremayer-boy").innerHTML = ""
    document.getElementById("kremayer-kurs_boy").innerHTML = ""
}





//? Düz Dişli Hesaplamasi

function DuzHesapla() { 
    let modul = document.getElementById("duz-modul").value
    let duz_dis_sayisi = document.getElementById("duz-dis-sayi").value
    let adim = Math.PI * modul
    let bolum_dairesi_capi = modul * duz_dis_sayisi
    let dis_ustu_capi = bolum_dairesi_capi + ( 2 * modul )
    let dis_dibi_capi = bolum_dairesi_capi - ( 2.332 * modul)
    let temel_dairesi_capi = bolum_dairesi_capi * 0.939
    let dis_sayisi = bolum_dairesi_capi / modul
    let dis_yuksekligi = modul * 2.166 
    let dis_ustu_yuksekligi = modul
    let dis_dibi_yüksekligi = modul * 1.166
    let dis_genisligi = modul * 10
    document.getElementById("duz-adim").innerHTML = adim
    document.getElementById("duz-bolum-dairesi").innerHTML = bolum_dairesi_capi
    document.getElementById("duz-dis-ustu-capi").innerHTML = dis_ustu_capi
    document.getElementById("duz-dis-dibi-capi").innerHTML = dis_dibi_capi
    document.getElementById("duz-temel-dairesi-capi").innerHTML = temel_dairesi_capi
    document.getElementById("duz-dis-sayisi").innerHTML = dis_sayisi
    document.getElementById("duz-dis-yuksekligi").innerHTML = dis_yuksekligi
    document.getElementById("duz-dis-ustu-yuksekligi").innerHTML = dis_ustu_yuksekligi
    document.getElementById("duz-dis-dibi-yuksekligi").innerHTML = dis_dibi_yüksekligi
    document.getElementById("duz-dis-genisligi").innerHTML = dis_genisligi
} 
function DuzTemizle() {
    document.getElementById("duz-modul").value = ""
    document.getElementById("duz-dis-sayi").value = ""
    document.getElementById("duz-adim").innerHTML = ""
    document.getElementById("duz-bolum-dairesi").innerHTML = ""
    document.getElementById("duz-dis-ustu-capi").innerHTML = "" 
    document.getElementById("duz-dis-dibi-capi").innerHTML = ""
    document.getElementById("duz-temel-dairesi-capi").innerHTML = ""
    document.getElementById("duz-dis-sayisi").innerHTML = ""
    document.getElementById("duz-dis-yuksekligi").innerHTML = ""
    document.getElementById("duz-dis-ustu-yuksekligi").innerHTML = ""
    document.getElementById("duz-dis-dibi-yuksekligi").innerHTML = ""
    document.getElementById("duz-dis-genisligi").innerHTML = ""
}






//? Sinematik
function hesapla() {
    var saat = parseFloat(document.getElementById("saatInput").value);
    var kilometre = parseFloat(document.getElementById("kmInput").value);
    var sonucDiv = document.getElementById("sonuc");

    if (!isNaN(saat) && !isNaN(kilometre) && saat !== 0) {
        var sonuc = kilometre / saat;
        sonucDiv.innerHTML = "<strong>Sonuç:</strong> " + sonuc;
} else {
    sonucDiv.innerHTML = "<strong style='color:red;'>Hata:</strong> Saat değeri sıfır olamaz ve geçersiz girişler kabul edilmez.";
}
}





//? Dinamik
function hesaplaIvme() {
    const m1 = parseFloat(document.getElementById("m1").value);
    const m2 = parseFloat(document.getElementById("m2").value);
    const F1 = parseFloat(document.getElementById("F1").value);
    const F2 = parseFloat(document.getElementById("F2").value);

    const a1 = F1 / m1;
    const a2 = F2 / m2;
    const sonuc = `Birinci cismin ivmesi: <strong>${a1} m/s²</strong><br>İkinci cismin ivmesi: <strong>${a2} m/s²</strong>`;

    document.getElementById("sonuc").innerHTML = sonuc;
}




//? Bileşke 

document.getElementById("hesaplaButton").addEventListener("click", function() {
    const f1 = parseFloat(document.getElementById("f1").value);
    const f2 = parseFloat(document.getElementById("f2").value);
    const aci = parseFloat(document.getElementById("aci").value);
    const alfasi = parseFloat(document.getElementById("alfasi").value);

    if (!f1 || !f2 || !aci || !alfasi) {
        document.getElementById("sonuc").innerHTML = "Lütfen boşlukları doldurun!";
        return;
    }
    if (aci < 90) {
        // 1. durum 
        document.getElementById("sonuc").innerHTML =  `√${f1**2 + f2**2 + 2*f1*f2*alfasi}`;
    }
    else if (aci === 90) {
        // 2. durum
        document.getElementById("sonuc").innerHTML = `√${f1**2 + f2**2}`;
    }
    else {
        // 3. durum
        document.getElementById("sonuc").innerHTML = `√${f1**2 + f2**2 + 2 * f1 * f2 * (-alfasi)}`;
    }
});