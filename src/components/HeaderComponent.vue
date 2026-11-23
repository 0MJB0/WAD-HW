<template>
    <header class="site-header">
        <router-link to="/" class="logo">PostIt</router-link>

        <!-- navigation links to both pages -->
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/signup">Signup</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
};
</script>

<style scoped>
.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background-color: #a9c4e0;
    border-radius: 8px;
}

.logo {
    font-weight: bold;
    font-size: 1.2rem;
    color: #1f4e79;
    text-decoration: none;
}

nav {
    display: flex;
}

nav a {
    padding: 8px 12px;
    color: #222222;
    text-decoration: none;
    border-radius: 4px;
}

nav a + a {
    margin-left: 6px;
}

nav a:hover {
    background-color: #1f4e79;
    color: #ffffff;
}

/* router-link adds this class to the link of the current page */
nav a.router-link-exact-active {
    background-color: #1f4e79;
    color: #ffffff;
}
</style>
