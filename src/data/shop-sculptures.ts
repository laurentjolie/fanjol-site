export interface ShopSculpture {
  id: string;
  title: string;
  image: string;
  video: { preview: string; webm?: string; poster: string; full: string };
}

export const shopSculptures: ShopSculpture[] = [
  { id: "a-parents-tiers", title: "À Parents-Tiers", image: "/sculptures/videos/poster/A_parents-tiers_1rotation.jpg", video: { preview: "/sculptures/videos/preview/A_parents-tiers_1rotation.mp4", webm: "/sculptures/videos/preview/A_parents-tiers_1rotation.webm", poster: "/sculptures/videos/poster/A_parents-tiers_1rotation.jpg", full: "/sculptures/videos/full/A_parents-tiers_1rotation.mp4" } },
  { id: "alliances", title: "Alliances", image: "/sculptures/ALLIANCES.jpeg", video: { preview: "/sculptures/videos/preview/Alliances.mp4", webm: "/sculptures/videos/preview/Alliances.webm", poster: "/sculptures/videos/poster/Alliances.jpg", full: "/sculptures/videos/full/Alliances.mp4" } },
  { id: "au-creux-de-ton-epaule", title: "Au Creux de ton Épaule", image: "/sculptures/videos/poster/Au_creux_de_ton_epaule.jpg", video: { preview: "/sculptures/videos/preview/Au_creux_de_ton_epaule.mp4", webm: "/sculptures/videos/preview/Au_creux_de_ton_epaule.webm", poster: "/sculptures/videos/poster/Au_creux_de_ton_epaule.jpg", full: "/sculptures/videos/full/Au_creux_de_ton_epaule.mp4" } },
  { id: "ecrin-et-ne-crains-rien", title: "Écrin et ne Crains Rien", image: "/sculptures/ECRIN ET NE CRAINS RIEN.jpeg", video: { preview: "/sculptures/videos/preview/Ecrin_et_ne_crains_rien.mp4", webm: "/sculptures/videos/preview/Ecrin_et_ne_crains_rien.webm", poster: "/sculptures/videos/poster/Ecrin_et_ne_crains_rien.jpg", full: "/sculptures/videos/full/Ecrin_et_ne_crains_rien.mp4" } },
  { id: "l-a-venir", title: "L'À Venir", image: "/sculptures/videos/poster/La_venir.jpg", video: { preview: "/sculptures/videos/preview/La_venir.mp4", webm: "/sculptures/videos/preview/La_venir.webm", poster: "/sculptures/videos/poster/La_venir.jpg", full: "/sculptures/videos/full/La_venir.mp4" } },
  { id: "le-penchant", title: "Le Penchant", image: "/sculptures/videos/poster/Le_penchant.jpg", video: { preview: "/sculptures/videos/preview/Le_penchant.mp4", webm: "/sculptures/videos/preview/Le_penchant.webm", poster: "/sculptures/videos/poster/Le_penchant.jpg", full: "/sculptures/videos/full/Le_penchant.mp4" } },
  { id: "ni-queue-ni-tete", title: "Ni Queue ni Tête", image: "/sculptures/videos/poster/Ni_queue_ni_tete.jpg", video: { preview: "/sculptures/videos/preview/Ni_queue_ni_tete.mp4", webm: "/sculptures/videos/preview/Ni_queue_ni_tete.webm", poster: "/sculptures/videos/poster/Ni_queue_ni_tete.jpg", full: "/sculptures/videos/full/Ni_queue_ni_tete.mp4" } },
  { id: "symbiose", title: "Symbiose", image: "/sculptures/videos/poster/Symbiose.jpg", video: { preview: "/sculptures/videos/preview/Symbiose.mp4", webm: "/sculptures/videos/preview/Symbiose.webm", poster: "/sculptures/videos/poster/Symbiose.jpg", full: "/sculptures/videos/full/Symbiose.mp4" } },
  { id: "tendresse", title: "Tendresse", image: "/sculptures/TENDRESSE.JPG", video: { preview: "/sculptures/videos/preview/Tendresse.mp4", webm: "/sculptures/videos/preview/Tendresse.webm", poster: "/sculptures/videos/poster/Tendresse.jpg", full: "/sculptures/videos/full/Tendresse.mp4" } },
];
