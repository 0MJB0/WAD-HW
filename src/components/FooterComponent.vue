<template>
    <footer class="site-footer">
        <p>&copy; {{ year }} PostIt. All rights reserved.</p>
        <p>Web Application Development &middot; University of Tartu</p>
        <p>Contact: <a href="mailto:info@postit.ee">info@postit.ee</a></p>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
};
</script>

<style scoped>
.site-footer {
    padding: 10px;
    text-align: center;
    font-size: 0.85rem;
    background-color: #a9c4e0;
    border-radius: 8px;
}

.site-footer p {
    margin: 2px 0;
}

.site-footer a {
    color: #1f4e79;
}
</style>
