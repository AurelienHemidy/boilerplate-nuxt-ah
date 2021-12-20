<template>

  <div>

    <transition name="preloader-anim">

      <div v-if="loadingActive" class="preloader">

        <div ref="loading" class="loading">0 %</div>
        
      </div>

    </transition>

  </div>

</template>

<script src="./script.js"></script>
<style src="./styles.scss" lang="scss" scoped></style>