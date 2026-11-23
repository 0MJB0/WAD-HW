# PostIt – WAD Homework 3

The PostIt app rebuilt with **Vue 3 + Vuex + Vue Router** (Vite).

## Running

```bash
npm install
npm run dev      # development server, open the printed URL
npm run build    # production build into dist/
```

## Tasks

| Task | Where |
| ---- | ----- |
| 1. Two pages (main + signup) | Views `src/views/HomeView.vue` and `src/views/SignupView.vue`, routes in `src/router/index.js` |
| 2. Header with navigation | `src/components/HeaderComponent.vue` (`router-link` to Home and Signup), used in `App.vue` on both pages |
| 3. Footer | `src/components/FooterComponent.vue` (copyright, course, contact), used in `App.vue` on both pages |
| 4.1 Post component using Vuex | `src/components/PostComponent.vue` gets only the post `id` and reads the post from the store getter `postById`; the posts are fetched from `public/data/posts.json` by the store action `fetchPosts` (`src/store/index.js`) |
| 4.2 Like button + number of likes | Like button dispatches `likePost` → mutation `incrementLikes` |
| 4.3 Reset likes button | Button in `HomeView.vue` dispatches `resetLikes` → mutation `resetLikes` sets every post's likes to 0 |
| 5. Signup form | Email, Password and Signup button in `SignupView.vue` |
| 6. Password validation | `PASSWORD_RULES` in `SignupView.vue`; every failed rule is shown as "The password is not valid - …" |
| 7. Styling | `src/assets/style.css` (global) + scoped styles in every component |

Pages are implemented as **views** (components rendered by the router in `<router-view>`), while the header, footer and post are reusable **components**.

## Structure

```
index.html
public/
  data/posts.json      10 posts
  images/
src/
  main.js              creates the app, uses router + store
  App.vue              Header + <router-view> + Footer
  router/index.js
  store/index.js       Vuex store (state, getters, mutations, actions)
  components/          HeaderComponent, FooterComponent, PostComponent
  views/               HomeView, SignupView
  assets/style.css
```
