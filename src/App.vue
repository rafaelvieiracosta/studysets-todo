<template>
  <div id="app">
    <header class="header">
      <div class="header-wrapper">
        <nav class="header-nav">
          <ul class="header-nav-ul">
            <li>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/kanban">Kanban</router-link></li>
              </ul>
            </li>

            <li>
              <router-link to="/">
                <img class="img-responsive" src="@/assets/img/logo.svg" alt="Studysets">
              </router-link>
            </li>

            <li>
              <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
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

<style scoped>
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

main {
  background: linear-gradient(180deg,#0b0c12 50%, #FFFFFF 50%);
  padding: 0 20px;
}
</style>
