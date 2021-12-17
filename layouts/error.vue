<template>

  <div class="container">

      <h1 v-if="error.statusCode === 404">Page non trouvée</h1>

      <h1 v-else>Une erreur est survenue</h1>

      <NuxtLink to="/">Page d'accueil</NuxtLink>

  </div>

</template>

<script src="./error/script.js"></script>
<style src="./error/styles.scss" lang="scss" scoped></style>