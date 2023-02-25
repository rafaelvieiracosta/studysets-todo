<template>
  <div id="app">
    <header class="header">
      <div class="header-wrapper">
        <nav class="header-nav">
          <ul class="header-nav-ul">
            <li>
              <ul class="nav-list">
                <li class="nav-list-item"><router-link to="/">Lista</router-link></li>
                <li class="nav-list-item"><router-link to="/kanban">Kanban</router-link></li>
              </ul>
            </li>

            <li>
              <router-link to="/">
                <img class="img-responsive" src="@/assets/img/logo.svg" alt="Studysets">
              </router-link>
            </li>

            <li>
              <ul class="nav-list">
                <li class="nav-list-item"><a href="#">GitHub</a></li>
                <li class="nav-list-item"><a href="#">LinkedIn</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
}
</script>

<style>
/* HEADER */
.header {
  background-color: #0B0C12;
}
.header-wrapper {
  max-width: 840px;
  padding: 40px 20px 20px;
  margin: 0 auto;
}
.header img {
  margin: 0 auto;
}
.header-nav-ul {
  display: flex;
  justify-content: space-between;
}

.nav-list {
  display: flex;
  gap: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.35;
}
.nav-list-item a {
  color: #FFFFFF;
  text-decoration: none;
  position: relative;
  padding: 16px 0;
}
.nav-list-item a::after {
  content: '';
  display: block;
  height: 2px;
  width: 0;
  background: #FFFFFF;
  margin-top: 4px;
  position: absolute;
  transition: 0.3s;
}
.nav-list-item a:hover::after, .nav-list-item a.router-link-exact-active::after {
  width: 100%;
}

main {
  background: linear-gradient(180deg,#0b0c12 50%, #FFFFFF 50%);
  padding: 0 20px;
}
</style>
