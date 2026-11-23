<template>
    <!-- Header and Footer are shared by both pages; only the middle part changes -->
    <HeaderComponent />
    <router-view />
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: { HeaderComponent, FooterComponent }
};
</script>
