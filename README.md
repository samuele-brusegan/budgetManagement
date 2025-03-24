**Struttura delle Classi:**

**1. Modello Dati (Model):**

* **Classe `Transazione`:**
    * `id`: int
    * `importo`: float
    * `categoria`: str
    * `metodo_pagamento`: str
    * `data`: datetime
    * Metodi:
        * `__init__()`: Inizializza una transazione
        * `modifica_transazione()`: Modifica i dettagli di una transazione
        * `elimina_transazione()`: Elimina la transazione
* **Classe `Categoria`:**
    * `id`: int
    * `nome`: str
    * Metodi:
        * `aggiungi_categoria()`
        * `modifica_categoria()`
        * `elimina_categoria()`
* **Classe `MetodoPagamento`:**
    * `id`: int
    * `nome`: str
    * Metodi:
        * `aggiungi_metodo()`
        * `modifica_metodo()`
        * `elimina_metodo()`
* **Classe `Bilancio`:**
    * `saldo`: float
    * Metodi:
        * `calcola_totale_entrate()`
        * `calcola_totale_uscite()`
        * `calcola_saldo()`

**2. Gestione e Logica (Controller):**

* **Classe `GestioneTransazioni`:**
    * Metodi:
        * `aggiungi_transazione()`
        * `rimuovi_transazione()`
        * `modifica_transazione()`
        * `filtra_transazioni(per_categoria, per_data, per_importo)`
* **Classe `AnalisiSpese`:**
    * Metodi:
        * `calcola_media_spese()`
        * `spese_per_categoria()`
        * `generazione_grafico()`
* **Classe `GestioneDati`:**
    * Metodi:
        * `backup_dati()`
        * `ripristino_dati()`
        * `esporta_csv()`
        * `esporta_pdf()`
* **Classe `Sicurezza`:**
    * Metodi:
        * `imposta_pin()`
        * `verifica_accesso()`
        * `abilita_biometria()`

**3. Interfaccia Utente (View):**

* **Classe `DashboardUI`:**
    * Metodi:
        * `mostra_saldo()`
        * `mostra_entrate_uscite()`
        * `mostra_grafico_spese()`
* **Classe `TransazioniUI`:**
    * Metodi:
        * `mostra_lista_transazioni()`
        * `mostra_dettagli_transazione()`
        * `mostra_filtri_transazioni()`
* **Classe `ImpostazioniUI`:**
    * Metodi:
        * `mostra_opzioni_backup()`
        * `mostra_opzioni_sicurezza()`
        * `mostra_personalizzazioni()`
