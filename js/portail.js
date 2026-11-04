const channels = [
  {
    name: "Canal officiel AMESAT",
    category: "licence",
    badge: "Officiel",
    description: "Accès aux annonces, actus et ressources partagées par l’amicale de la filière.",
    link: "https://t.me/DigitalDocumentationCenter"
  },
  {
    name: "Licence 1 — MASS |Semestre 1|",
    category: "licence 1",
    badge: "L1",
    description: "Documents, supports de cours et ressources utiles pour les étudiants en MASS.",
    link: "https://t.me/mbayedoc"
  },
  {
    name: "Licence 1 — MASS |Semestre 2|",
    category: "licence 1",
    badge: "L1",
    description: "Documents, supports de cours et ressources utiles pour les étudiants en MASS.",
    link: "https://t.me/+xFtmRDu1roEwMWJk"
  },
  {
    name: "Licence 1 — MPI |Semestre 1|",
    category: "licence 1",
    badge: "L1",
    description: "Espace dédié aux ressources et informations de la licence 1 en MPI.",
    link: "https://t.me/+AmJkWslq8b05ZmU0"
  },
  {
    name: "Licence 1 — MPI |Semestre 2|",
    category: "licence 1",
    badge: "L1",
    description: "Espace dédié aux ressources et informations de la licence 1 en MPI.",
    link: "https://t.me/semestre2mpi"
  },
  {
    name: "Licence 2 — MASS |Semestre 3|",
    category: "licence 2",
    badge: "L2",
    description: "Canal de partage des documents et informations de la licence 2 en MASS.",
    link: "https://t.me/+AgGavcAJtlBmYTU0"
  },
  {
    name: "Licence 2 — MPI |Semestre 3|",
    category: "licence 2",
    badge: "L2",
    description: "Ressources et actualités liées à la licence 2 en MPI.",
    link: "https://t.me/+xf23Dg3F7MZkMzg0"
  },
  {
    name: "Licence 2 — MA |Semestre 4|",
    category: "licence 2",
    badge: "L2",
    description: "Documents et annonces pour les étudiants de la licence 2 en Mathématiques appliquées.",
    link: "https://t.me/semestre4ma"
  },
  {
    name: "Licence 2 — Informatique |Semestre 4|",
    category: "licence 2",
    badge: "L2",
    description: "Canal de suivi des cours, documents et informations de la licence 2 informatique.",
    link: "https://t.me/+S2aAR4xJpChlMzE0"
  },
  {
    name: "Licence 2 — PA |Semestre 4|",
    category: "licence 2",
    badge: "L2",
    description: "Espace d’échange pour les ressources et mises à jour de la licence 2 en PA.",
    link: "https://t.me/+9EAHDb-mOhkwOTA0"
  },
  {
    name: "Licence 2 — MASS |Semestre 4|",
    category: "licence 2",
    badge: "L2",
    description: "Canal de partage des documents et informations de la licence 2 en MASS.",
    link: "https://t.me/+ybKJxprShKoxZjA8"
  },
  {
    name: "Licence 3 — Informatique |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Informations utiles, cours et documents pour les étudiants de licence 3 informatique.",
    link: "https://t.me/+3XFlu66gyWViMTZk"
  },
  {
    name: "Licence 3 — Informatique |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Informations utiles, cours et documents pour les étudiants de licence 3 informatique.",
    link: "https://t.me/+BIbtzwvpjiM4NTRk"
  },
  {
    name: "Licence 3 — PA |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Canal dédié aux supports, annonces et documents de la licence 3 en PA.",
    link: "https://t.me/+BrpeH7PlDFwyOTRk"
  },
  {
    name: "Licence 3 — PA |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Canal dédié aux supports, annonces et documents de la licence 3 en PA.",
    link: "https://t.me/semestre6physique"
  },
  {
    name: "Licence 3 — MIAGE |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Ressources pédagogiques et communications de la licence 3 en MIAGE.",
    link: "https://t.me/+yLtmMDwmik44ZGM0"
  },
  {
    name: "Licence 3 — MIAGE |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Ressources pédagogiques et communications de la licence 3 en MIAGE.",
    link: "https://t.me/+yLtmMDwmik44ZGM0"
  },
  {
    name: "Licence 3 — MA |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Documents et actualités pour les étudiants de licence 3 en mathématiques appliquées.",
    link: "https://t.me/+i96vkRzA_GBlMDk0"
  },
  {
    name: "Licence 3 — MA |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Documents et actualités pour les étudiants de licence 3 en mathématiques appliquées.",
    link: "https://t.me/+VUl7pcWS5z4yYmE0"
  },
  {
    name: "Licence 3 — ETEL |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Canal de partage des ressources et informations de la licence 3 ETEL.",
    link: "https://t.me/+BrpeH7PlDFwyOTRk"
  },
  {
    name: "Licence 3 — ETEL |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Canal de partage des ressources et informations de la licence 3 ETEL.",
    link: "https://t.me/semestre6physique"
  },
  {
    name: "Licence 3 — MAF |Semestre 5|",
    category: "licence 3",
    badge: "L3",
    description: "Accès aux documents, annonces et contenus pédagogiques de la licence 3 MAF.",
    link: "https://t.me/+McW-C7ZLoG44ZGZk"
  },
  {
    name: "Licence 3 — MAF |Semestre 6|",
    category: "licence 3",
    badge: "L3",
    description: "Accès aux documents, annonces et contenus pédagogiques de la licence 3 MAF.",
    link: "https://t.me/+mjdMQwSEuDtlY2M0"
  }, 
  {
    name: "Canal pour la préparation des concours",
    category: "concours",
    badge: "Concours", 
    description: "Accès aux documents et informatipns relatives aux concours.",
    link: "https://t.me/prepaconcours02"
  }
];

const grid = document.getElementById("channelsGrid");
const searchInput = document.getElementById("searchInput");
const tags = document.querySelectorAll(".tag");

let activeFilter = "all";

function getChannelIcon(channel) {
  const text = `${channel.name} ${channel.category}`.toLowerCase();

  if (text.includes("officiel") || text.includes("amesat") || text.includes("concours")) return "📣";
  if (text.includes("informatique") || text.includes("miage")) return "💻";
  if (text.includes("maf")) return "💰";
  if (text.includes("math") || text.includes("ma ")) return "📐";
  if (text.includes("physique") || text.includes("pa")) return "⚛️";
  if (text.includes("etel")) return "📡";
  if (text.includes("mpi")) return "🧠";
  if (text.includes("mass")) return "📘";

  return "📚";
}

function renderChannels() {
  const search = searchInput.value.trim().toLowerCase();

  const filtered = channels.filter((channel) => {
    const matchesFilter = activeFilter === "all" || channel.category === activeFilter;
    const matchesSearch =
      channel.name.toLowerCase().includes(search) ||
      channel.description.toLowerCase().includes(search);
    return matchesFilter && matchesSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <article class="channel-card" style="grid-column: 1 / -1;">
        <h3>Aucun canal trouvé</h3>
        <p>Essayez un autre mot-clé ou changez le filtre.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (channel) => `
        <article class="channel-card">
          <div class="channel-top">
            <div class="channel-icon">${getChannelIcon(channel)}</div>
            <span class="channel-tag">${channel.badge}</span>
          </div>

          <div>
            <h3>${channel.name}</h3>
            <p>${channel.description}</p>
          </div>

          <div class="channel-meta">
            <a href="${channel.link}" class="channel-link" target="_blank" rel="noreferrer">Rejoindre</a>

          </div>
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", renderChannels);

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tags.forEach((btn) => btn.classList.remove("active"));
    tag.classList.add("active");
    activeFilter = tag.dataset.filter;
    renderChannels();
  });
});

renderChannels();
