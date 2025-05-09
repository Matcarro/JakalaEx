# Documentazione Completa dell'Applicazione - Gestione Automezzi e Filiali

Questa applicazione React è progettata per gestire automezzi e filiali, con funzionalità di autenticazione, gestione degli utenti e navigazione protetta. Utilizza Redux per la gestione dello stato globale e React Router per la navigazione.
Essa è una estensione di un vecchio progetto WIP.
---

## Struttura del Progetto

### File Principale: `App.js`

Il file `App.js` è il punto di ingresso principale dell'applicazione. Contiene la configurazione delle rotte e integra Redux tramite il componente `Provider`.

#### Funzionalità principali:
- **Gestione dello stato globale**: Utilizza Redux per condividere lo stato tra i componenti.
- **Navigazione protetta**: Le rotte sono protette dal componente `PrivateRoute`, che verifica l'autenticazione dell'utente.
- **Routing dinamico**: Gestisce percorsi dinamici per automezzi e filiali.

---

## Componenti Principali

### 1. **Header**
- Mostra l'intestazione dell'applicazione.
- Include pulsanti per tornare indietro e disconnettersi.

### 2. **PrivateRoute**
- Protegge le rotte, consentendo l'accesso solo agli utenti autenticati.
- Verifica lo stato di autenticazione tramite Redux o un contesto globale.

### 3. **Homepage**
- Pagina principale che accoglie l'utente autenticato.
- Può includere una panoramica delle funzionalità disponibili.

### 4. **Gestione**
- Pagina per la gestione di automezzi e filiali.
- Consente operazioni CRUD (Creazione, Lettura, Aggiornamento, Eliminazione).

### 5. **AutomezzoFilialeDetails**
- Pagina per visualizzare i dettagli di un automezzo o di una filiale.
- Utilizza parametri dinamici nella URL (`:codice`).

### 6. **Login**
- Pagina per l'autenticazione degli utenti.
- Gestisce il login tramite un form e invia i dati al backend.

---

## Rotte dell'Applicazione

Le rotte sono definite nel file `App.js` utilizzando `react-router-dom`. Ecco una panoramica:

| Percorso            | Componente                  | Descrizione                                                                 |
|---------------------|-----------------------------|-----------------------------------------------------------------------------|
| `/`                 | `Navigate`                 | Reindirizza alla pagina di login.                                          |
| `/login`            | `Login`                    | Pagina di autenticazione.                                                  |
| `/homepage`         | `Homepage`                 | Pagina principale accessibile solo agli utenti autenticati.                |
| `/gestione`         | `Gestione`                 | Pagina per la gestione di automezzi e filiali.                             |
| `/automezzo/:codice`| `AutomezzoFilialeDetails`  | Pagina per visualizzare i dettagli di un automezzo specifico.              |
| `/filiale/:codice`  | `AutomezzoFilialeDetails`  | Pagina per visualizzare i dettagli di una filiale specifica.               |

---

## Tecnologie Utilizzate

- **React**: Libreria principale per la creazione dell'interfaccia utente.
- **Redux**: Gestione dello stato globale dell'applicazione.
- **React Router**: Gestione della navigazione e delle rotte.
- **CSS**: Stile dell'applicazione.
- **JavaScript (ES6+)**: Linguaggio principale utilizzato per lo sviluppo.

---

## Come Eseguire il Progetto

1. Clona il repository:
   ```bash
   git clone <repository-url>
   cd GestioneAutomezziFiliali/my-react-project
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia l'applicazione in modalità sviluppo:
   ```bash
   npm start
   ```

4. Apri il browser e vai su [http://localhost:3000]

---

## Struttura dei File

- **`src/App.js`**: Punto di ingresso principale dell'applicazione.
- **`src/pages/`**: Contiene le pagine principali (`Homepage`, `Gestione`, `Login`, ecc.).
- **`src/components/`**: Contiene componenti riutilizzabili come `Header` e `PrivateRoute`.
- **`src/store/`**: Configurazione dello store Redux.