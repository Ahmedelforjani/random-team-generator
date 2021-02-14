<template>
  <v-app id="inspire">
    <v-app-bar
            color="pink darken-2"
            app
            dark
    >
      <v-app-bar-nav-icon v-if="$route.path === '/'"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click="$router.go(-1)" v-else>
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Random Team Generator</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-subheader>Latest Matches</v-subheader>
        <v-row >
          <v-col
                  v-for="n in 24"
                  :key="n"
                  cols="12"
          >
            <v-card to="/match" v-ripple color="#385F73" dark @click="$router.push('/match')">
              <v-card-title class="text-decoration-none">Dota 2</v-card-title>
              <v-card-subtitle>{{ new Date().getFullYear() }}</v-card-subtitle>
              <v-list color="#4b7e97" dense>
                <v-list-item>
                  <v-list-item-title>Total players</v-list-item-title>
                  <v-list-item-subtitle class="text-right">10</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Played matches</v-list-item-title>
                  <v-list-item-subtitle class="text-right">10</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Remaining matches</v-list-item-title>
                  <v-list-item-subtitle class="text-right">10</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-btn text>Play</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-fab-transition>
        <v-btn
                v-show="true"
                color="pink"
                fab
                dark
                fixed
                bottom
                right
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>

    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
