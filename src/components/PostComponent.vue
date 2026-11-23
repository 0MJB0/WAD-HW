<template>
    <!-- same structure as the post in Homework 2 -->
    <article v-if="post" class="post">
        <header class="post-header">
            <img class="avatar" :src="post.author.avatar" :alt="post.author.name" :title="post.author.name">
            <time :datetime="post.createTime">{{ formattedDate }}</time>
        </header>

        <img v-if="post.image" class="post-image" :src="post.image" :alt="post.imageAlt">

        <p>{{ post.body }}</p>

        <footer class="post-footer">
            <button type="button" class="like" @click="like" aria-label="Like">
                <img :src="likeIcon" alt="">
            </button>
            <span class="like-count">{{ post.likes }} likes</span>
        </footer>
    </article>
</template>

<script>
export default {
    name: "PostComponent",
    // the component only gets the id; the content comes from the Vuex store
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            likeIcon: "images/like.svg" // file in the public folder
        };
    },
    computed: {
        post() {
            return this.$store.getters.postById(this.id);
        },
        // "2026-10-30T14:20:00Z" -> "Oct 30, 2026"
        formattedDate() {
            return new Date(this.post.createTime).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });
        }
    },
    methods: {
        like() {
            this.$store.dispatch("likePost", this.id);
        }
    }
};
</script>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    background-color: #dbe7f4;
    border-radius: 8px;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
}

.avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #1f4e79;
}

.post-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.post > p {
    margin: 0;
    font-size: 0.9rem;
}

.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.like {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: transform 0.1s;
}

.like:hover {
    transform: scale(1.15);
}

.like:active {
    transform: scale(0.9);
}

.like img {
    display: block;
    width: 26px;
    height: 26px;
}

.like-count {
    font-size: 0.8rem;
}
</style>
