export const defaultLang = "tr";

export const ui = {
  tr: {
    "site.name": "Prof. Dr. Nurperi Gazioğlu",
    "site.title": "Prof. Dr. Nurperi Gazioğlu",
    "nav.label": "Ana menü",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkında",
    "nav.publications": "Yayınlar",
    "nav.health": "Bilgi Köşesi",
    "nav.contact": "İletişim",
    "contact.heading": "Randevu Bilgileri",
    "contact.phone": "Telefon:",
    "contact.fax": "Faks:",
    "contact.gsm": "GSM:",
    "contact.email": "E-Posta:",
    "home.notice":
      "Sitemiz yapım aşamasındadır. Randevu için iletişim bilgilerini aşağıda bulabilirsiniz.",
    "home.photoAlt": "Prof. Dr. Nurperi Gazioğlu portre fotoğrafı",
    "placeholder": "TODO: içerik bekleniyor",
    "about.cv": "Özgeçmiş",
    "about.cv.more": "Özgeçmişin tamamı",
    "about.awards": "Ödüller ve Takdirler",
    "about.awards.more": "Tüm ödüller",
    "publications.title": "Yayınlar",
    "publications.more": "Tüm yayınlar",
    "publications.doi": "DOI",
    "publications.pubmed": "PubMed",
    "publications.link": "Bağlantı",
    "publications.etAl": "ve ark.",
    "publications.makale": "Makaleler",
    "publications.kitap-bolum": "Kitap ve Bölümler",
    "publications.bildiri": "Bildiriler",
    "press.title": "Basında",
    "press.more": "Tüm basın haberleri",
    "press.roportaj": "Röportaj",
    "press.haber": "Haber",
    "press.dijital": "Dijital",
    "press.video": "Video",
    "press.yurt-ici": "Yurt içi",
    "press.yurt-disi": "Yurt dışı",
    "cv.education": "Eğitim",
    "cv.positions": "Görevler",
    "cv.titles": "Unvanlar",
    "cv.memberships": "Üyelikler",
    "cv.roles": "Editörlük ve Kurul Görevleri",
    "footer.kvkk": "KVKK Aydınlatma Metni",
    "footer.editor": "Site editörü: TODO: içerik bekleniyor",
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function getUi(lang: keyof typeof ui = defaultLang) {
  return (key: UiKey) => ui[lang][key];
}
