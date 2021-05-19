<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <h2>Desafio</h2>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" fab dark small color="#212121" href="https://github.com/luismanoel12">
        <v-icon dark> mdi-github </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small color="#0e76a8" href="https://www.linkedin.com/in/luis-manoel-6ba027122/">
        <v-icon dark> mdi-linkedin </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
