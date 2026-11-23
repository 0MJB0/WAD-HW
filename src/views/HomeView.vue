<template>
    <div class="page">
        <aside class="sidebar"></aside>

        <main class="feed">
            <p v-if="loading" class="info">Loading posts...</p>
            <p v-if="error" class="error">{{ error }}</p>

            <!-- one Post component per post in the store (10 posts) -->
            <PostComponent v-for="post in posts" :key="post.id" :id="post.id" />

            <button v-if="posts.length" type="button" class="btn reset" @click="resetLikes">
                Reset likes
            </button>
        </main>

        <aside class="sidebar"></aside>
    </div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue";

export default {
    name: "HomeView",
    components: { PostComponent },
    computed: {
        posts() {
            return this.$store.getters.allPosts;
        },
        loading() {
            return this.$store.state.loading;
        },
        error() {
            return this.$store.state.error;
        }
    },
    created() {
        // ask the store to load the posts (only the first time)
        this.$store.dispatch("fetchPosts");
    },
    methods: {
        resetLikes() {
            this.$store.dispatch("resetLikes");
        }
    }
};
</script>

<style scoped>
.page {
    flex: 1;
    display: flex;
    gap: 10px;
}

.sidebar {
    flex: 1;
    min-height: 200px;
    background-color: #a9c4e0;
    border-radius: 8px;
}

.feed {
    flex: 2;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.reset {
    align-self: center;
}

.info {
    text-align: center;
}

.error {
    padding: 8px;
    color: #a40000;
    background-color: #f6dada;
    border-radius: 8px;
}

@media (max-width: 600px) {
    .sidebar {
        display: none;
    }
}
</style>
