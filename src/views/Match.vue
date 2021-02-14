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
            <v-container class="mt-2">
                <v-row dense>
                    <v-col align-self="stretch">
                        <v-text-field
                                v-model.trim="player"
                                label="Outlined"
                                hide-details
                                dense
                                outlined>
                        </v-text-field>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn @click="addNewPlayer" color="secondary" height="100%">ADD</v-btn>
                    </v-col>
                </v-row>
                <players-list :players="players" />
            </v-container>
            <v-fab-transition>
                <v-btn
                        to="/match/start"
                        v-show="true"
                        color="pink"
                        fab
                        dark
                        absolute
                        bottom
                        right
                        class="mb-12"
                >
                    <v-icon>mdi-shuffle-variant</v-icon>
                </v-btn>
            </v-fab-transition>

        </v-main>
    </v-app>
</template>

<script>
    import PlayersList from '../components/PlayersList'
    export default {
        name: 'Match',
        components: { PlayersList },
        data () {
            return {
                players: ['Ahmed', 'Ali', 'Yousef'],
                player: '',
            }
        },
        methods: {
            addNewPlayer() {
                if(this.players.find(p => p === this.player)) return
                this.players.push(this.player)
                this.player = ''
            }
        }
    }
</script>
