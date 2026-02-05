export interface Sculpture {
  id: string;
  title: string;
  image: string;
  video?: { preview: string; webm?: string; poster: string; full: string };
}

export const sculptures: Sculpture[] = [
  { id: "a-parents-tiers", title: "À Parents-Tiers", image: "/sculptures/videos/poster/A_parents-tiers_1rotation.jpg", video: { preview: "/sculptures/videos/preview/A_parents-tiers_1rotation.mp4", webm: "/sculptures/videos/preview/A_parents-tiers_1rotation.webm", poster: "/sculptures/videos/poster/A_parents-tiers_1rotation.jpg", full: "/sculptures/videos/full/A_parents-tiers_1rotation.mp4" } },
  { id: "abri", title: "Abri", image: "/sculptures/ABRI.jpg" },
  { id: "adulation", title: "Adulation", image: "/sculptures/ADULATION.jpeg" },
  { id: "alliances", title: "Alliances", image: "/sculptures/ALLIANCES.jpeg", video: { preview: "/sculptures/videos/preview/Alliances.mp4", webm: "/sculptures/videos/preview/Alliances.webm", poster: "/sculptures/videos/poster/Alliances.jpg", full: "/sculptures/videos/full/Alliances.mp4" } },
  { id: "atout-coeur", title: "Atout Cœur", image: "/sculptures/ATOUT COEUR.jpeg" },
  { id: "au-creux-de-ton-epaule", title: "Au Creux de ton Épaule", image: "/sculptures/videos/poster/Au_creux_de_ton_epaule.jpg", video: { preview: "/sculptures/videos/preview/Au_creux_de_ton_epaule.mp4", webm: "/sculptures/videos/preview/Au_creux_de_ton_epaule.webm", poster: "/sculptures/videos/poster/Au_creux_de_ton_epaule.jpg", full: "/sculptures/videos/full/Au_creux_de_ton_epaule.mp4" } },
  { id: "berceuse", title: "Berceuse", image: "/sculptures/BERCEUSE.jpeg" },
  { id: "cambrures", title: "Cambrures", image: "/sculptures/CAMBRURES.jpeg" },
  { id: "capture", title: "Capture", image: "/sculptures/CAPTURE.jpg" },
  { id: "chuchotement", title: "Chuchotement", image: "/sculptures/CHUCHOTEMENT.jpg" },
  { id: "chute-d-icare", title: "Chute d'Icare", image: "/sculptures/CHUTE D'ICARE.jpeg" },
  { id: "coeurs", title: "Cœurs", image: "/sculptures/COEURS.jpeg" },
  { id: "communion", title: "Communion", image: "/sculptures/COMMUNION.jpeg" },
  { id: "confidences", title: "Confidences", image: "/sculptures/CONFIDENCES.jpeg" },
  { id: "coquille", title: "Coquille", image: "/sculptures/COQUILLE.jpeg" },
  { id: "curiosite", title: "Curiosité", image: "/sculptures/CURIOSITE.jpeg" },
  { id: "ecrin-et-ne-crains-rien", title: "Écrin et ne Crains Rien", image: "/sculptures/ECRIN ET NE CRAINS RIEN.jpeg", video: { preview: "/sculptures/videos/preview/Ecrin_et_ne_crains_rien.mp4", webm: "/sculptures/videos/preview/Ecrin_et_ne_crains_rien.webm", poster: "/sculptures/videos/poster/Ecrin_et_ne_crains_rien.jpg", full: "/sculptures/videos/full/Ecrin_et_ne_crains_rien.mp4" } },
  { id: "embarquement-pour-cythere", title: "Embarquement pour Cythère", image: "/sculptures/EMBARQUEMENT POUR CYTHERE.jpeg" },
  { id: "il-etait-une-foi", title: "Il Était une Foi", image: "/sculptures/IL ETAIT UNE FOI.jpg" },
  { id: "l-a-venir", title: "L'À Venir", image: "/sculptures/videos/poster/La_venir.jpg", video: { preview: "/sculptures/videos/preview/La_venir.mp4", webm: "/sculptures/videos/preview/La_venir.webm", poster: "/sculptures/videos/poster/La_venir.jpg", full: "/sculptures/videos/full/La_venir.mp4" } },
  { id: "la-danse", title: "La Danse", image: "/sculptures/LA DANSE.jpeg" },
  { id: "la-valse", title: "La Valse", image: "/sculptures/LA VALSE.jpeg" },
  { id: "le-nid", title: "Le Nid", image: "/sculptures/LE NID.jpeg" },
  { id: "le-penchant", title: "Le Penchant", image: "/sculptures/videos/poster/Le_penchant.jpg", video: { preview: "/sculptures/videos/preview/Le_penchant.mp4", webm: "/sculptures/videos/preview/Le_penchant.webm", poster: "/sculptures/videos/poster/Le_penchant.jpg", full: "/sculptures/videos/full/Le_penchant.mp4" } },
  { id: "le-pont-d-amour", title: "Le Pont d'Amour", image: "/sculptures/LE PONT D'AMOUR.jpeg" },
  { id: "le-soupirant", title: "Le Soupirant", image: "/sculptures/LE SOUPIRANT.jpeg" },
  { id: "les-amoureux", title: "Les Amoureux", image: "/sculptures/LES AMOUREUX.jpg" },
  { id: "ni-queue-ni-tete", title: "Ni Queue ni Tête", image: "/sculptures/videos/poster/Ni_queue_ni_tete.jpg", video: { preview: "/sculptures/videos/preview/Ni_queue_ni_tete.mp4", webm: "/sculptures/videos/preview/Ni_queue_ni_tete.webm", poster: "/sculptures/videos/poster/Ni_queue_ni_tete.jpg", full: "/sculptures/videos/full/Ni_queue_ni_tete.mp4" } },
  { id: "nous-deux", title: "Nous Deux", image: "/sculptures/NOUS DEUX.jpeg" },
  { id: "p-tit-for-two", title: "P'tit for Two", image: "/sculptures/P'TIT FOR TWO.jpg" },
  { id: "septieme-ciel", title: "Septième Ciel", image: "/sculptures/SEPTIEME CIEL.jpeg" },
  { id: "symbiose", title: "Symbiose", image: "/sculptures/videos/poster/Symbiose.jpg", video: { preview: "/sculptures/videos/preview/Symbiose.mp4", webm: "/sculptures/videos/preview/Symbiose.webm", poster: "/sculptures/videos/poster/Symbiose.jpg", full: "/sculptures/videos/full/Symbiose.mp4" } },
  { id: "tendresse", title: "Tendresse", image: "/sculptures/TENDRESSE.JPG", video: { preview: "/sculptures/videos/preview/Tendresse.mp4", webm: "/sculptures/videos/preview/Tendresse.webm", poster: "/sculptures/videos/poster/Tendresse.jpg", full: "/sculptures/videos/full/Tendresse.mp4" } },
  { id: "torse", title: "Torse", image: "/sculptures/TORSE.jpeg" },
  { id: "tour-du-monde", title: "Tour du Monde", image: "/sculptures/TOUR DU MONDE.jpg" },
  { id: "unis-vers", title: "Unis Vers", image: "/sculptures/UNIS VERS.jpg" },
];
