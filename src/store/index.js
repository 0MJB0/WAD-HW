import { createStore } from "vuex";

// Vuex global store: the single place where the posts live.
// Components never keep their own copy of a post, they read it from here
// (getters) and change it only through actions -> mutations.
export default createStore({
    state: {
        posts: [],
        loading: false,
        error: null
    },

    getters: {
        // all posts, newest first
        allPosts(state) {
            return [...state.posts].sort(
                (a, b) => new Date(b.createTime) - new Date(a.createTime)
            );
        },
        // a single post, used by the Post component
        postById: (state) => (id) => {
            return state.posts.find((post) => post.id === id);
        }
    },

    // mutations are the only functions that change the state (synchronous)
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, value) {
            state.loading = value;
        },
        setError(state, message) {
            state.error = message;
        },
        incrementLikes(state, id) {
            const post = state.posts.find((p) => p.id === id);
            if (post) {
                post.likes++;
            }
        },
        resetLikes(state) {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        }
    },

    // actions are called by the components with dispatch() and commit mutations
    actions: {
        async fetchPosts({ commit, state }) {
            if (state.posts.length > 0) {
                return; // already loaded
            }
            commit("setLoading", true);
            commit("setError", null);
            try {
                const response = await fetch("data/posts.json");
                if (!response.ok) {
                    throw new Error("HTTP " + response.status);
                }
                commit("setPosts", await response.json());
            } catch (err) {
                commit("setError", "Could not load the posts (" + err.message + ").");
            } finally {
                commit("setLoading", false);
            }
        },
        likePost({ commit }, id) {
            commit("incrementLikes", id);
        },
        resetLikes({ commit }) {
            commit("resetLikes");
        }
    }
});
