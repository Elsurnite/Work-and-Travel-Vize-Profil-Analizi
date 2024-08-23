        document.getElementById('password').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = 'Elsurnite';
  if (password === correctPassword) {
      document.getElementById('password-form').style.display = 'none';
      document.getElementById('protected-content').style.display = 'block';
  } else {
      document.getElementById('error-message2').style.display = 'block';
  }
}

const calculationForm = document.getElementById('calculationForm');
const classSelect = document.getElementById('class');
const gpaSelect = document.getElementById('gpa');
const semGpaSelect = document.getElementById('sem-gpa');

classSelect.addEventListener('change', () => {
  if (classSelect.value === 'Bachelor (Lang Prep)') { 
    gpaSelect.value = 'Hazırlık';
    gpaSelect.disabled = true; // GPA'yı kilitle

    semGpaSelect.value = 'Hazırlık';
    semGpaSelect.disabled = true; // Dönem GPA'yı kilitle
  } else {
    gpaSelect.disabled = false; // GPA kilidini kaldır
    semGpaSelect.disabled = false; // Dönem GPA kilidini kaldır
  }

});

const errorMessage = document.getElementById('error-message');

calculationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle

    const university = document.getElementById('university').value;
    const classValue = document.getElementById('class').value;
    const gpa = document.getElementById('gpa').value;
    const semGpa = document.getElementById('sem-gpa').value;
    const lose = document.getElementById('Lose').value;
    const englishLevel = document.getElementById('english_level').value;

    if (!university || !classValue || !gpa || !semGpa || !lose || !englishLevel) {
        errorMessage.style.display = 'block'; // Hata mesajını göster
        return;
    }

    errorMessage.style.display = 'none'; // Hata mesajını gizle

    // (Diğer kodlarınız burada devam edecek - Airtable gönderimi vb.)
});


function calculateSinifPuani(class2) {
  const puanMap = {
    "Bachelor 1": 10,
    "Bachelor 2": 10,
    "Bachelor 3": 10,
    "Bachelor 4": 6,
    "Bachelor 5": 6,
    "Bachelor (Lang Prep)": 9,
  };
  return puanMap[class2] || 0;
} 

function calculateLosePuani(Lose) {
  const puanMap = {
    "YOK": 10,
    "1 SENE": 5,
    "2 SENE": 0,
    "3 SENE": 0,
  };
  return puanMap[Lose] || 0;
}

function calculategpaPuani(gpa) {
  const puanMap = {
    "3.0": 10,
    "2.8": 9,
    "2.6": 8,
    "2.4": 7,
    "2.2": 7,
    "2.0": 5,
    "1.99": 3,
    "Henüz": 7,
    "Hazırlık": 8,
  };
  return puanMap[gpa] || 0;
}

function calculatesem_gpaPuani(sem_gpa) {
  sem_gpa = parseFloat(sem_gpa);
  if (sem_gpa >= 3.0) return 10;
  if (sem_gpa >= 2.8) return 9;
  if (sem_gpa >= 2.6) return 8;
  if (sem_gpa >= 2.4) return 7;
  if (sem_gpa >= 2.2) return 7;
  if (sem_gpa >= 2.0) return 5;
  if (sem_gpa >= 1.99) return 3;
  if (sem_gpa = "Henüz") return 7;
  if (sem_gpa = "Hazırlık") return 8;
  return 0;
}

function calculateenglish_levelPuani(english_level) {
  const puanMap = {
    "Upper Intermediate": 10,
    "Intermediate": 5,
    "Advanced": 10,
  };
  return puanMap[english_level] || 0;
}

function calculateUniversityPuani(university) {
  const puanMap = {
    "Abant İzzet Baysal Üniversitesi": 6.0,
    "Abdullah Gül Üniversitesi": 6.0,
    "Acıbadem Mehmet Ali Aydınlar Üniversitesi": 4.0,
    "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi": 6.0,
    "Afyon Kocatepe Üniversitesi": 6.0,
    "Ağrı İbrahim Çeçen Üniversitesi": 3.0,
    "Akdeniz Üniversitesi": 7.0,
    "Alanya Alaattin Keykubat Üniversitesi": 5.0,
    "Alanya Hamdullah Emin Paşa Üniversitesi": 4.0,
    "Altınbaş (Kemerburgaz) Üniversitesi": 4.0,
    "Anadolu Üniversitesi": 6.5,
    "Ankara Bilim Üniversitesi": 6.0,
    "Ankara Hacı Bayram Veli Üniversitesi": 7.0,
    "Ankara Medipol Universitesi": 6.0,
    "Ankara Üniversitesi": 7.0,
    "Ankara Yıldırım Beyazıt Üniversitesi": 6.0,
    "Antalya Bilim Üniversitesi": 5.0,
    "Atatürk Üniversitesi": 6.0,
    "Atılım Üniversitesi": 6.5,
    "Aydın Adnan Menderes Üniversitesi": 6.0,
    "Bahçeşehir Üniversitesi": 8.0,
    "Balıkesir Üniversitesi": 5.0,
    "Bartın Üniversitesi": 3.0,
    "Başkent Üniversitesi": 6.0,
    "Beykent Üniversitesi": 7.0,
    "Beykoz Teknoloji Üniversitesi": 3.0,
    "Biruni Üniversitesi": 5.0,
    "Boğaziçi Üniversitesi": 10.0,
    "Bursa Teknik Üniversitesi": 5.0,
    "Bursa Uludağ Üniversitesi": 7.0,
    "Çanakkale 18 Mart Üniversitesi": 7.0,
    "Çankaya Üniversitesi": 6.5,
    "Çukurova Üniversitesi": 6.0,
    "Dicle Üniversitesi": 3.0,
    "Doğu Akdeniz Üniversitesi": 3.0,
    "Doğuş Üniversitesi": 6.0,
    "Dokuz Eylül Üniversitesi": 8.0,
    "Düzce Üniversitesi": 4.0,
    "Ege Üniversitesi": 8.0,
    "Erciyes Üniversitesi": 7.0,
    "Eskişehir Osmangazi Üniversitesi": 7.0,
    "Eskişehir Teknik Üniversitesi": 6.0,
    "Fenerbahçe Üniversitesi": 5.0,
    "Fırat Üniversitesi": 6.0,
    "Gazi Üniversitesi": 8.0,
    "Gebze Teknik Üniversitesi": 7.0,
    "Girne Amerikan Üniversitesi": 3.0,
    "Hacettepe Üniversitesi": 10.0,
    "Haliç Üniversitesi": 6.0,
    "Hasan Kalyoncu Üniversitesi": 6.0,
    "Hitit Üniversitesi": 5.0,
    "İbn Haldun Üniversitesi": 3.0,
    "İhsan Doğramacı Bilkent Üniversitesi": 10.0,
    "İnönü Üniversitesi": 5.0,
    "Işık Üniversitesi": 5.0,
    "İskenderun Teknik Üniversitesi": 4.0,
    "İstanbul Arel Üniversitesi": 5.0,
    "İstanbul Atlas Üniversitesi": 4.0,
    "İstanbul Aydın Üniversitesi": 6.0,
    "İstanbul Bilgi Üniversitesi": 7.0,
    "İstanbul Esenyurt Üniversitesi": 3.0,
    "İstanbul Galata Üniversitesi": 3.0,
    "İstanbul Gedik Üniversitesi": 4.0,
    "İstanbul Gelişim Üniversitesi": 5.0,
    "İstanbul Kent Üniversitesi": 5.0,
    "İstanbul Kültür Üniversitesi": 5.0,
    "İstanbul Medeniyet Üniversitesi": 5.0,
    "İstanbul Medipol Üniversitesi": 6.0,
    "İstanbul Sağlık ve Teknoloji Üniversitesi": 6.0,
    "İstanbul Sebahattin Zaim Üniversitesi": 7.0,
    "İstanbul Teknik Üniversitesi": 10.0,
    "İstanbul Ticaret Üniversitesi": 6.0,
    "İstanbul Topkapı Üniversitesi": 3.0,
    "İstanbul Üniversitesi": 8.0,
    "İstanbul Yeni Yuzyıl Üniversitesi": 4.0,
    "İstinye Üniversitesi": 6.0,
    "İzmir Bakırçay Üniversitesi": 6.0,
    "İzmir Demokrasi Üniversitesi": 3.0,
    "İzmir Ekonomi Üniversitesi": 6.5,
    "İzmir Katip Çelebi Üniversitesi": 7.0,
    "İzmir Üniversitesi": 6.0,
    "İzmir Yüksek Teknoloji Enstitüsü": 7.0,
    "Kadir Has Üniversitesi": 7.0,
    "Karabük Üniversitesi": 4.0,
    "Karadeniz Teknik Üniversitesi": 7.0,
    "Kayseri Üniversitesi": 5.0,
    "Kıbrıs Ada Kent Üniversitesi": 3.0,
    "Koç Üniversitesi": 10.0,
    "Kocaeli Üniversitesi": 7.0,
    "Konya Teknik Üniversitesi": 6.0,
    "Kütahya Dumlupınar Üniversitesi": 5.5,
    "Lefke Avrupa Üniversitesi": 3.0,
    "Maltepe Üniversitesi": 6.0,
    "Manisa Celal Bayar Üniversitesi": 6.0,
    "Marmara Üniversitesi": 8.0,
    "MEF Üniversitesi": 7.0,
    "Mersin Üniversitesi": 5.0,
    "Mimar Sinan Güzel Sanatlar Üniversitesi": 7.0,
    "Muğla Sıtkı Koçman Üniversitesi": 7.0,
    "Necmettin Erbakan Üniversitesi": 5.0,
    "Nişantaşı Üniversitesi": 4.0,
    "Okan Üniversitesi": 5.0,
    "Orta Doğu Teknik Üniversitesi": 10.0,
    "Orta Doğu Teknik Üniversitesi - KIBRIS": 3.0,
    "Ostim Teknik Üniversitesi": 5.0,
    "Özyeğin Üniversitesi": 8.0,
    "Pamukkale Üniversitesi": 7.0,
    "Piri Reis Üniversitesi": 6.0,
    "Sabancı Üniversitesi": 10.0,
    "Sağlık Bilimleri Üniversitesi": 6.0,
    "Sakarya Üniversitesi": 6.0,
    "Samsun Üniversitesi": 6.0,
    "Sanko Üniversitesi": 4.0,
    "Selçuk Üniversitesi": 6.0,
    "Siirt Üniversitesi": 4.0,
    "Sinop Üniversitesi": 4.0,
    "Süleyman Demirel Üniversitesi": 5.0,
    "Tarsus Üniversitesi": 4.0,
    "TED Üniversitesi": 7.0,
    "Tekirdağ Namık Kemal Üniversitesi": 5.0,
    "Tokat Gaziosmanpaşa Üniversitesi": 5.0,
    "Trakya Üniversitesi": 5.0,
    "Ufuk Üniversitesi": 4.0,
    "Uluslararası Kıbrıs Üniversitesi": 3.0,
    "Uşak Üniversitesi": 4.0,
    "Üsküdar Üniversitesi": 6.0,
    "Yakın Doğu Üniversitesi": 3.0,
    "Yalova Üniversitesi": 5.0,
    "Yaşar Üniversitesi": 6.5,
    "Yeditepe Üniversitesi": 8.0,
    "Yıldız Teknik Üniversitesi": 8.0,
    "Zonguldak Bülent Ecevit Üniversitesi": 5.0,
    "Adıyaman Üniversitesi": 4.0,
    "Afyonkarahisar Sağlık Bilimleri Üniversitesi": 6.0,
    "Akdeniz Karpaz Üniversitesi": 3.0,
    "Aksaray Üniversitesi": 4.0,
    "Amasya Üniversitesi": 4.0,
    "Anadolu Bil Meslek Yüksekokulu": 3.0,
    "Anadolu Üniversitesi Açıköğretim Fakültesi": 0.0,
    "Anka Teknoloji Üniversitesi": 4.0,
    "Ankara Güzel Sanatlar Üniversitesi": 4.0,
    "Ankara Müzik Ve Güzel Sanatlar Üniversitesi": 4.0,
    "Ankara Sosyal Bilimler Üniversitesi": 4.0,
    "Ankara Türk Hava Kurumu Üniversitesi": 8.0,
    "Antalya Akev Üniversitesi": 4.0,
    "Ardahan Üniversitesi": 3.0,
    "Artvin Çoruh Üniversitesi": 4.0,
    "Avrasya Üniversitesi": 4.0,
    "Bandırma Onyedi Eylül Üniversitesi": 5.0,
    "Batman Üniversitesi": 4.0,
    "Bayburt Üniversitesi": 4.0,
    "Bezmialem Vakıf Üniversitesi": 5.0,
    "Bilecik Şeyh Edebali Üniversitesi": 4.0,
    "Bingöl Üniversitesi": 4.0,
    "Bitlis Eren Üniversitesi": 4.0,
    "Bozok Üniversitesi": 4.0,
    "Burdur Mehmet Akif Ersoy Üniversitesi": 5.0,
    "Canik Başarı Üniversitesi": 4.0,
    "Dr. Suat Günsel Girne Üniversitesi": 3.0,
    "Erzincan Binali Yıldırım Üniversitesi": 4.0,
    "Erzurum Teknik Üniversitesi": 5.0,
    "Fatih Sultan Mehmet Üniversitesi": 5.0,
    "Galatasaray Üniversitesi": 6.0,
    "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi": 4.0,
    "Gaziantep Üniversitesi": 5.0,
    "Giresun Üniversitesi": 4.0,
    "Girne Üniversitesi": 3.0,
    "Gülhane Askeri Tıp Akademisi": 3.0,
    "Gümüşhane Üniversitesi": 3.0,
    "Hakkari Üniversitesi": 3.0,
    "Harran Üniversitesi": 3.0,
    "Hatay Mustafa Kemal Üniversitesi": 5.0,
    "Isparta Uygulamalı Bilimler Üniversitesi": 4.0,
    "Iğdır Üniversitesi": 3.0,
    "İstanbul 29 Mayıs Üniversitesi": 5.0,
    "İstanbul Bilim Üniversitesi": 4.0,
    "İstanbul Kavram Üniversitesi": 4.0,
    "İstanbul Medikal Üniversitesi": 5.0,
    "İstanbul Rumeli Üniversitesi": 4.0,
    "İstanbul Üniversitesi - Cerrahpaşa": 7.0,
    "İstanbul Şehir Üniversitesi": 4.0,
    "İzmir Tınaztepe Üniversitesi": 4.0,
    "Kafkas Üniversitesi": 4.0,
    "Kahramanmaraş İstiklal Üniversitesi": 3.0,
    "Kahramanmaraş Sütçü İmam Üniversitesi": 3.0,
    "Kapadokya Üniversitesi": 3.0,
    "Karamanoglu Mehmetbey Üniversitesi": 4.0,
    "Kastamonu Üniversitesi": 4.0,
    "Kilis 7 Aralık Üniversitesi": 3.0,
    "Kocaeli Sağlık Ve Teknoloji Üniversitesi": 4.0,
    "Konya Gıda Ve Tarım Üniversitesi": 4.0,
    "Kto Karatay Üniversitesi": 5.0,
    "Kütahya Sağlık Bilimleri Üniversitesi": 5.0,
    "Kıbrıs Amerikan Üniversitesi": 3.0,
    "Kıbrıs İlim Üniversitesi": 3.0,
    "Kıbrıs Sosyal Bilimler Üniversitesi": 3.0,
    "Kırklareli Üniversitesi": 3.0,
    "Kırıkkale Üniversitesi": 3.0,
    "Kırşehir Ahi Evran Üniversitesi": 4.0,
    "Lokman Hekim Üniversitesi": 3.0,
    "Malatya Turgut Özal Üniversitesi": 3.0,
    "Mardin Artuklu Üniversitesi": 3.0,
    "Mevlana Üniversitesi": 3.0,
    "Milli Savunma Üniversitesi": 3.0,
    "Munzur Üniversitesi": 3.0,
    "Muş Alparslan Üniversitesi": 3.0,
    "Netkent Akdeniz Araştırma Ve Bilim Üniversitesi": 3.0,
    "Nevşehir Hacı Bektaş Veli Üniversitesi": 3.0,
    "Niğde Ömer Halisdemir Üniversitesi": 4.0,
    "Nuh Naci Yazgan Üniversitesi": 4.0,
    "Ondokuz Mayıs Üniversitesi": 5.0,
    "Ordu Üniversitesi": 4.0,
    "Orhan Gazi Üniversitesi": 3.0,
    "Osmaniye Korkut Ata Üniversitesi": 3.0,
    "Recep Tayyip Erdoğan Üniversitesi": 4.0,
    "Sakarya Uygulamalı Bilimler Üniversitesi": 5.0,
    "Semerkand Bilim Ve Medeniyet Üniversitesi": 3.0,
    "Sivas Bilim Ve Teknoloji Üniversitesi": 3.0,
    "Sivas Cumhuriyet Üniversitesi": 4.0,
    "Süleyman Şah Üniversitesi": 4.0,
    "Tobb Ekonomi Ve Teknoloji Üniversitesi": 6.0,
    "Toros Üniversitesi": 4.0,
    "Trabzon Üniversitesi": 4.0,
    "Türk Alman Üniversitesi": 6.0,
    "Türk-Japon Bilim Ve Teknoloji Üniversitesi": 3.0,
    "Türkiye Uluslararası İslam, Bilim Ve Teknoloji Üniversitesi": 3.0,
    "Uluslararası Antalya Üniversitesi": 5.0,
    "Van Yüzüncü Yıl Üniversitesi": 4.0,
    "Yüksek İhtisas Üniversitesi": 4.0,
    "Çankırı Karatekin Üniversitesi": 4.0,
    "Çağ Üniversitesi": 4.0,
    "Şifa Tıp Üniversitesi": 3.0,
    "Şırnak Üniversitesi": 3.0,
    "Acıbadem Mehmet Ali Aydınlar Üniversitesi": 8
    // Add other universities with their respective points
  };
  return puanMap[university] || 0;
}

function calculateGpaOrtalamasiPuani(gpaPuan, sem_gpaPuan) {
  return (gpaPuan + sem_gpaPuan) / 2;
}

function calculateOrtalamaVizePuani(LosePuan, sinifPuan, gpaOrtalamasiPuan, universityPuan, english_levelPuan) {
  return LosePuan * 0.1 + sinifPuan * 0.1 + gpaOrtalamasiPuan * 0.60 + universityPuan * 0.1 + english_levelPuan * 0.1;
}

function calculateSonuc(ortalamaVizePuani) {
  if (ortalamaVizePuani < 4.99) return "1 YILDIZ";
  if (ortalamaVizePuani < 6.99) return "2 YILDIZ";
  if (ortalamaVizePuani < 7.99) return "3 YILDIZ";
  if (ortalamaVizePuani < 9.19) return "4 YILDIZ";
  return "5 YILDIZ";
}


// Form gönderildiğinde hesaplama yapar
document.getElementById('calculationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Formun varsayılan davranışını engeller

  // Formdan değerleri alır
  const class2 = classSelect.value;
  const Lose = document.getElementById('Lose').value;
  const gpa = gpaSelect.value;
  const sem_gpa = semGpaSelect.value;
  const english_level = document.getElementById('english_level').value;
  const university = document.getElementById('university').value;

  // Puanları hesaplar
  const sinifPuan = calculateSinifPuani(class2);
  const LosePuan = calculateLosePuani(Lose);
  const gpaPuan = calculategpaPuani(gpa);
  const sem_gpaPuan = calculatesem_gpaPuani(sem_gpa);
  const english_levelPuan = calculateenglish_levelPuani(english_level);
  
  const universityPuan = calculateUniversityPuani(university);
  const gpaOrtalamasiPuan = calculateGpaOrtalamasiPuani(gpaPuan, sem_gpaPuan);
  const ortalamaVizePuani = calculateOrtalamaVizePuani(LosePuan, sinifPuan, gpaOrtalamasiPuan, universityPuan, english_levelPuan);
  const sonuc = calculateSonuc(ortalamaVizePuani);
    // Sonucu ekrana yazdırır ve stilini ayarlar
    const sonucDiv = document.getElementById('sonuc');
    sonucDiv.textContent = `Sonuç: ${sonuc}`;
    sonucDiv.style.color = "REDW3"; // Rengi mavi olarak ayarla
    const sonucDiv2 = document.getElementById('sonuc2');
    sonucDiv2.textContent = `Ortalama Yıldız Puanı: ${ortalamaVizePuani.toFixed(2)}`;

    // İsteğe bağlı olarak, farklı sonuçlar için farklı renkler atayabilirsiniz
    if (sonuc === "1 YILDIZ ") {
        sonucDiv.style.color = "red"; // 1 yıldız için kırmızı renk
    } else if (sonuc === "2 YILDIZ") {
        sonucDiv.style.color = "red"; // 2 yıldız için turuncu renk
    } else if (sonuc === "3 YILDIZ") {
          sonucDiv.style.color = "orange"; // 2 yıldız için turuncu renk
    } else if (sonuc === "4 YILDIZ") {
          sonucDiv.style.color = "green"; // 2 yıldız için turuncu renk
    } else if (sonuc === "5 YILDIZ") {
        sonucDiv.style.color = "green"; // 2 yıldız için turuncu renk
    }

    if (sonuc === "1 YILDIZ ") {
      sonucDiv2.style.color = "red"; // 1 yıldız için kırmızı renk
    } else if (sonuc === "2 YILDIZ") {
      sonucDiv2.style.color = "red"; // 2 yıldız için turuncu renk
    } else if (sonuc === "3 YILDIZ") {
        sonucDiv2.style.color = "orange"; // 2 yıldız için turuncu renk
    } else if (sonuc === "4 YILDIZ") {
        sonucDiv2.style.color = "green"; // 2 yıldız için turuncu renk
    } else if (sonuc === "5 YILDIZ") {
      sonucDiv2.style.color = "green"; // 2 yıldız için turuncu renk
    }
    }
);



const accessToken = '';
const baseId = '';
const tableName = '';

const errorMessageDiv = document.getElementById('error-message2');

calculationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorMessageDiv.style.display = 'none';

    const university = document.getElementById('university').value;
    const classLevel = document.getElementById('class').value;
    const gpa = document.getElementById('gpa').value;
    const semGpa = document.getElementById('sem-gpa').value;
    const lose = document.getElementById('Lose').value;
    const englishLevel = document.getElementById('english_level').value;
    const name = document.getElementById('name').value;   dnsm
    const danısman = document.getElementById('dnsm').value;
    const sonuc2 = document.getElementById('sonuc').value; 

    if (!university || !classLevel || !gpa || !semGpa || !lose || !englishLevel || !name || !danısman) {
        errorMessageDiv.style.display = 'block';
        return;
    }

    try {
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
            method: 'POST',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                          
                            "Name": name,
                            "University": university,
                            "Class": classLevel,
                            "GPA": gpa,
                            "Semester GPA": semGpa,
                            "Lose": lose,
                            "English Level": englishLevel,
                            "Danısman": danısman,
                            "YıldızPuan": sonuc2
                        }
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit data to Airtable');
        }

        const responseData = await response.json();
        console.log('Airtable response:', responseData);

        // Optionally handle success message or redirect to a success page
    } catch (error) {
        console.error('Error submitting data to Airtable:', error);
        errorMessageDiv.style.display = 'block';
    }
});

