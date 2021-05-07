let yerler = [{baslik:'Sivrice Gölü', description:'Elazığın güneydoğusunda bulunan ve il merkezine 26 kilometre uzaklıkta olan Hazar Gölü tektonik bir göldür. Güneyinde Hazarbaba Dağı bulunan göl, Uluova’dan Mastar Dağlarıyla ayrılır. Denizden 1250 metre yükseklikteki gölün uzunluğu yaklaşık 22 kilometre olup en geniş yeri ise 5-6 kilometredir. Yüzölçümü 86 kilometreyi bulan gölün derinliği 200-250 metre arasında değişmektedir.\n\n Hazar Gölünde uluslarası spor şenlikleri, uluslararası Hazar şiir akşamları gibi etkinlikler de gerçekleştirilmektedir. Adeta cennetten bir köşe olan Hazar Gölü, bütün bu özellikleri dikkate alınarak Kültür ve Turizm Bakanlığı Dış İlişkiler ve AB Koordinasyon Daire Başkanlığınca yapılan çalışmalar neticesinde Avrupalı Seçkin Destinasyonlar arasında gösterilmiştir. \n\n Hazar Gölünden turistik ve ekonomik olarak yararlanılmaktadır. Çevresindeki kamu kurum ve kuruluşlarına ait kampları, tatil siteleri, ikinci konutlarıyla tam bir tatil merkezi görünümünde olan Hazar Gölü, tertemiz berrak suyu, halka açık mavi bayraklı plâjlarıyla Elazığ’ın tatil ve dinlenme merkezi konumundadır. Gölün içerisinde olan Batık Kent birinci derece arkeolojik sit alanı olarak tescil edilmiş önemli yerlerden biridir.',resim: '../pictures/sehrim/sm_sivrice.jpg', konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199879.38033147954!2d39.26427831305132!3d38.48498093039912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40769c33d81b1d67%3A0xd0bd4a42c7294818!2zSGF6YXIgR8O2bMO8!5e0!3m2!1str!2str!4v1620056714464!5m2!1str!2str'},
{baslik:'Kara Leylek Kanyonu', description:'Kara Leylek Kanyonu dünyada sayılarının 10-15 bin çift olduğu tahmin edilen Kara Leyleklerin yuva yaptığı doğa harikası bir alandır. Kanyon, Fırat nehri üzerinde Elazığın Baskil ilçesinin  Kumlutarla köyü sınırları içerisinde ve köy merkezine  3 km uzaklıktadır. Kanyona ulaşım teknelerle yapılmaktadır.',resim: '../pictures/sehrim/sm_karaleylek3.jpg' , konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49788.13435276253!2d38.46705224237237!3d38.746306075973905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40770f303224edad%3A0xe56973f273518953!2sSakl%C4%B1kap%C4%B1%20Karaleylek%20Kanyonu!5e0!3m2!1str!2str!4v1620056856280!5m2!1str!2str'},
{baslik:'Çırçır Şelalesi', description:'Elazığa 48 km uzaklıktaki Keban ilçemizin hemen girişinde yer alan bu doğa harikası  şelale ve şelale üzerine kurulu  balık lokantası görülmeye değer bir gezi ve lezzet durağı...\n\n Keban Baraj Gölü’ nün oluşması sırasında meydana gelen ve Çırçır Şelalesi olarak bilinen şelale dünyanın en genç şelalesidir. Şelale baraj kurulduktan sonra meydana gelmiştir ve barajdaki bir çatlaktan gelebileceği ihtimaline karşı araştırmalar yapılmış ve araştırmalar sonucunda çıkan suyun tamamen kaynak suyu olduğu tespit edilmiştir.',resim: '../pictures/sehrim/sm_circir.jpg', konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398419.2810270799!2d38.68098238493269!3d38.72582939232018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c1271855feef%3A0x3438435720eaf9d1!2zw4fEsXLDp8SxciDFn2VsYWxlc2kgcmVzdGF1cmFudA!5e0!3m2!1str!2str!4v1620056915832!5m2!1str!2str' },
{baslik:'Hazarbaba Kayak Merkezi', description:'Elazığ’ın Sivrice ilçesinde bulunan 2.347 m yüksekliğindeki Hazar Baba Dağ’ının, 1850 m rakımında, muhteşem Hazar Gölü manzarasıyla Hazar Baba Kayak Merkezi ; Aralık - Mart döneminde kayak severlere, kayak sporuna elverişli pisti, telesiyeji ve kafeterya imkânları ile hizmet vermektedir. 1100 m telesiyej ve diğer mekanik tesislere sahip  kayak merkezi, Sivrice ilçesine 6 km mesafede olup, kayak merkezine ulaşım 5 km’lik asfalt yol ile sağlanmaktadır.',resim: '../pictures/sehrim/sm_hazarbaba.jpg', konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.945165727362!2d39.313024215336405!3d38.41963207964718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40768257acc3a665%3A0x443214a9483c1edf!2sHAZARBABA%20KAYAK%20MERKEZ%C4%B0!5e0!3m2!1str!2str!4v1620056962747!5m2!1str!2str'},]
let yerismi= document.getElementById('yerismi');
let ileriButton= document.getElementById('ileri');
let geriButton= document.getElementById('geri');
let description= document.getElementById('description');
let resim= document.getElementById('resim');
let konum= document.getElementById('konum');
let indis =0    
yerismi.innerText=yerler[indis].baslik
description.innerText=yerler[indis].description
resim.src=yerler[indis].resim
konum.src=yerler[indis].konum

ileriButton.addEventListener('click', function() {
    if(indis<3)
    {
        indis++
    }
    else{
        indis=0
    }
        
    yerismi.innerText=yerler[indis].baslik
    description.innerText=yerler[indis].description
    resim.src=yerler[indis].resim
    konum.src=yerler[indis].konum

})

geriButton.addEventListener('click', function() {
    if(indis>=1)
    {
        indis--
    }
    else{
        indis=3
    }
        
    yerismi.innerText=yerler[indis].baslik
    description.innerText=yerler[indis].description
    resim.src=yerler[indis].resim
    konum.src=yerler[indis].konum

})