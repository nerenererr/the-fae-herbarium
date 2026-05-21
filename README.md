# 🌿 The Fae Herbarium

A botanical compendium of magical fairy specimens, built as a redesign of the Winx Club universe through a cottagecore and vintage fairycore aesthetic.

![Hero Screenshot](https://res.cloudinary.com/dbtuho5h0/image/upload/v1779391700/Captura_de_pantalla_2026-05-21_211153_ino83k.png)

---

## 🔗 Live Demo

> https://the-fae-herbarium.vercel.app/

**Repository:** [github.com/nerenererr/the-fae-herbarium](https://github.com/nerenererr/the-fae-herbarium)

---

## 📖 About the Project

The Fae Herbarium is a wiki-style card gallery inspired by the Winx Club universe, reimagined as a Victorian botanical field guide. Each fairy is presented as a specimen entry with her name, category, magical title, power, and description.

The project was built following an **Atomic Design** methodology, starting from the basic design tokens (colors, typography) up to the full page layout.

![Card Screenshot](https://res.cloudinary.com/dbtuho5h0/image/upload/v1779392322/Captura_de_pantalla_2026-05-21_213828_omubyz.png)

---

## ✨ Features

- Dynamic card rendering from a JSON file using **JSON Server**
- Vintage cottagecore aesthetic with **Lora** typography and a custom earthy palette
- Category **filter dropdown** to browse fairies by their magical affinity
- Sticky navigation bar with links and logo
- Hero section with botanical illustration
- Expandable footer with newsletter signup and social links
- Fully responsive layout using **Bootstrap 5**

---

## 🗂️ Project Structure

```
the-fae-herbarium/
├── json/
│   └── fairies.json
├── .gitignore
├── index.html
├── main.js
├── README.md
└── styles.css
```

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Google Fonts — Lora](https://fonts.google.com/specimen/Lora)
- [Cloudinary](https://cloudinary.com/) — image hosting

---

## 🚀 Getting Started

### Prerequisites

You need **Node.js** installed on your machine. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nerenererr/the-fae-herbarium.git
```

2. Navigate into the project folder:

```bash
cd the-fae-herbarium
```

3. Start the JSON Server:

```bash
npx json-server --watch json/fairies.json
```

4. Open `index.html` with **Live Server** (VS Code extension) or directly in your browser.

> ⚠️ Make sure JSON Server is running before opening the page, otherwise the fairy cards will not load.

---

## 🎨 Design

The visual design was created in **Figma** following Atomic Design principles:

- **Atoms:** color palette, typography (Lora Semibold), spacing
- **Molecules:** category badges, buttons
- **Organisms:** fairy cards with image, title, power and description
- **Templates:** full page layout with navbar, hero, card grid and footer

### Color Palette

| Role | Hex |
|---|---|
| Background | `#FAF5F0` |
| Primary text | `#5C4D4D` |
| Accent green | `#8C9362` |
| Light green | `#C1C5A8` |
| Dusty rose | `#D3A2A2` |
| Image background | `#F0EBE3` |

---

## 🧪 Data

The fairy data is stored in `json/fairies.json`. Each entry contains the following properties:

| Property | Description |
|---|---|
| `id` | Specimen identifier (e.g. Specimen #001) |
| `fairyName` | Name of the fairy |
| `category` | Magical affinity (e.g. Sunlight, Nocturnal) |
| `magicTitle` | Poetic title (e.g. Guardian of the Morning Dew) |
| `power` | Primary magical power |
| `description` | Short vintage-style description |
| `image` | Cloudinary URL of the fairy illustration |

---

## 📸 Screenshots

![Body Screenshot](https://res.cloudinary.com/dbtuho5h0/image/upload/v1779391700/Captura_de_pantalla_2026-05-21_211228_tldpzf.png)
![Footer creenshot](https://res.cloudinary.com/dbtuho5h0/image/upload/v1779391699/Captura_de_pantalla_2026-05-21_211244_azvwh5.png)


---

## 👩‍💻 Author


Made with 🌸 for a frontend development class project.
