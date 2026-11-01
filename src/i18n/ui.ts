export const defaultLang = "tr";

export const ui = {
  tr: {
    "site.name": "Prof. Dr. Nurperi Gazioğlu",
    "site.title": "Prof. Dr. Nurperi Gazioğlu",
    "nav.label": "Ana menü",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkında",
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
    "publications.title": "Yayınlar",
    "publications.empty": "TODO: içerik bekleniyor",
    "footer.kvkk": "KVKK Aydınlatma Metni",
    "footer.editor": "Site editörü: TODO: içerik bekleniyor",
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function getUi(lang: keyof typeof ui = defaultLang) {
  return (key: UiKey) => ui[lang][key];
}
