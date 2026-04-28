# Claria Studio

Site portfolio one-page de **Claria Studio** — studio indépendant spécialisé en analyse de données, reporting et tableaux de bord pour petites entreprises.

Stack : **Vite + React + TypeScript + Tailwind CSS**. 100% statique, prêt pour GitHub Pages.

---

## 🚀 Déploiement sur GitHub Pages

Le projet est pré-configuré pour un déploiement automatique via **GitHub Actions**.

### 1. Pousser le code sur GitHub

Créez un repo (ex. `claria-studio`) et poussez le code sur la branche `main`.

### 2. Activer GitHub Pages

Dans votre repo GitHub :

1. **Settings** → **Pages**
2. **Source** : sélectionnez **GitHub Actions** (et non "Deploy from a branch")

### 3. Lancer le déploiement

Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement à chaque push sur `main`, ou manuellement depuis l'onglet **Actions**.

Le site sera disponible à :

```
https://<votre-utilisateur>.github.io/<nom-du-repo>/
```

---

## ⚙️ Chemin de base (`base` URL)

GitHub Pages sert les repos projet sous un sous-chemin (`/<repo-name>/`). Vite doit connaître ce chemin pour générer des URLs d'assets correctes.

`vite.config.ts` lit la variable `VITE_BASE` au build :

```ts
base: mode === "production" ? process.env.VITE_BASE ?? "/" : "/",
```

Le workflow la définit automatiquement :

```yaml
env:
  VITE_BASE: /${{ github.event.repository.name }}/
```

### Cas particuliers

| Type de repo                          | `VITE_BASE`       |
|---------------------------------------|-------------------|
| Repo projet (ex. `claria-studio`)     | `/claria-studio/` |
| Repo utilisateur `<user>.github.io`   | `/`               |
| Domaine personnalisé (CNAME)          | `/`               |

Pour un domaine perso ou un repo `<user>.github.io`, remplacez dans le workflow :

```yaml
env:
  VITE_BASE: /
```

---

## 🔁 Routing SPA

Le workflow copie `dist/index.html` → `dist/404.html` pour que les deep links et le refresh fonctionnent (GitHub Pages sert `404.html` pour toute route inconnue, React Router prend ensuite le relais).

`public/.nojekyll` désactive Jekyll (nécessaire pour servir les dossiers générés par Vite).

---

## 🛠️ Développement local

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # build production (base = "/")
npm run preview    # prévisualiser le build
```

Tester le build avec le sous-chemin GitHub Pages :

```bash
VITE_BASE=/claria-studio/ npm run build && npm run preview
```

---

## ✅ Checklist premier déploiement

- [ ] Repo créé, code poussé sur `main`
- [ ] **Settings → Pages → Source = GitHub Actions**
- [ ] Workflow vert dans l'onglet **Actions**
- [ ] Site accessible à `https://<user>.github.io/<repo>/`