<template>

    <nav>

        <h1>Header</h1>

        <ul class="nav">
            <li class="nav__item"><router-link to="/">Home</router-link></li>
            <li class="nav__item"><router-link to="/about">About</router-link></li>
            <button @click="getLoadingStatus">getLoadingStatus</button>
        </ul>

    </nav>

</template>

<script src="./script.js"></script>
<style src="./styles.scss" lang="scss" scoped></style>