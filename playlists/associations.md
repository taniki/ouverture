---
title: L'essentiel des données sur les associations

registres:
    - repertoire-national-des-associations
    - base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret
    - associations-reconnues-d-utilite-publique

contextuelles:
    geographiques:
        - base-adresse-nationale
        - cadastre
    economiques:
        - impots-locaux-fichier-de-recensement-des-elements-dimposition-a-la-fiscalite-directe-locale-rei-3
        - comptes-individuels-des-communes-fichier-global-a-compter-de-2000
        - fondations-reconnues-d-utilite-publique
    culturelles:
        - panorama-des-festivals
        - agenda-de-l-offre-culturelle
---

<Hero>

# {{ $page.title }}

Tagline - libérer les données sans effort et sur data.gouv.fr

</Hero>

<Section title="Données socle" class="section-grey">

## Données socle

Doggo ipsum corgo floofs puggorino yapper very hand that feed shibe most angery pupper I have ever seen, porgo big ol ruff extremely cuuuuuute. Wow such tempt long doggo very hand that feed shibe, many pats. smol shoob. he made many woofs big ol pupper. very hand that feed shibe puggorino floofs.  Puggorino floofs puggorino yapper heckin good boys very jealous pupper heckin good boys, ruff puggo snoot pupperino yapper. Doge heckin angery woofer smol borking doggo pupper big ol, ur givin me a spook wow such tempt borkf. wow very biscit snoot corgo.


<DatasetList :items="$page.frontmatter.registres" />

</Section>

<Section class="section-dark">

## Subventions

### Contexte législatif


<div class="row">

<div>

Les subventions de plus de 23k€ annuels doivent être déclarées au format [données essentielles des conventions de subventions](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000034600552&categorieLien=id).
- [Arrêté du 17 novembre 2017](  https://data.culture.gouv.fr/api/datasets/1.0/donnees-essentielles-des-conventions-de-subvention/attachments/arrete_du_17_novembre_2017_pdf/)
- [schéma de données](
https://opendatafrance.gitbook.io/scdl/documents-de-travail/schemas-publies/subventions))

</div>

Sous 3 mois après attribution de la subvention, obligation de publier ces données soit sur le site de l’administration, soit sur [data.gouv.fr](https://data.gouv.fr). Ne sont pas concernées les collectivités de moins de 3500 habitants et leurs établissements.

</div>

### Europe

### État

### Ministères

### Régions

### Départements

</Section>


<Section>

<template v-slot:title>

## Données contextuelles

</template>

<template v-slot:description>
Doggo ipsum corgo floofs puggorino yapper very hand that feed shibe most angery pupper I have ever seen, porgo big ol ruff extremely cuuuuuute. Wow such tempt long doggo very hand that feed shibe, many pats. smol shoob. he made many woofs big ol pupper. very hand that feed shibe puggorino floofs.  Puggorino floofs puggorino yapper heckin good boys very jealous pupper heckin good boys, ruff puggo snoot pupperino yapper. Doge heckin angery woofer smol borking doggo pupper big ol, ur givin me a spook wow such tempt borkf. wow very biscit snoot corgo. Fat boi borkf stop it fren such treat, corgo many pats.
</template>

### Données géographiques

<DatasetList
    :items="$page.frontmatter.contextuelles.geographiques"
/>

### Données économiques

<DatasetList
    :items="$page.frontmatter.contextuelles.economiques"
/>


### Données culturelles

<DatasetList
    :items="$page.frontmatter.contextuelles.culturelles"
/>


</Section>
