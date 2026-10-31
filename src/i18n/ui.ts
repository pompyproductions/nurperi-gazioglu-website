export const defaultLang = "tr";

export const ui = {
  tr: {
    "site.name": "Prof. Dr. Nurperi Gazioğlu",
    "site.title": "Prof. Dr. Nurperi Gazioğlu",
    "nav.label": "Ana menü",
    "nav.home": "Ana sayfa",
    "nav.about": "Hakkımda",
    "nav.publications": "Yayınlar",
    "nav.contact": "İletişim",
    "contact.heading": "Randevu Bilgileri",
    "contact.phone": "Telefon:",
    "contact.fax": "Faks:",
    "contact.gsm": "GSM:",
    "contact.email": "E-Posta:",
    "home.notice":
      "Sitemiz yapım aşamasındadır. Randevu için iletişim bilgilerini aşağıda bulabilirsiniz.",
    "home.photoAlt": "Prof. Dr. Nurperi Gazioğlu portre fotoğrafı",
    "publications.empty": "TODO: içerik bekleniyor",
    "footer.privacy": "Gizlilik Bildirimi",
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function getUi(lang: keyof typeof ui = defaultLang) {
  return (key: UiKey) => ui[lang][key];
}
