<template>
    <v-app id="inspire">
        <v-app-bar
                color="pink darken-2"
                app
                dark
                flat
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

            <template v-slot:extension>
                <v-tabs
                        v-model="tab"
                        align-with-title
                        fixed-tabs
                >
                    <v-tabs-slider color="secondary"></v-tabs-slider>

                    <v-tab
                            v-for="item in items"
                            :key="item"
                    >
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <v-container>
                <v-tabs-items v-model="tab">
                    <v-tab-item
                            v-for="item in items"
                            :key="item"
                    >
                        <v-card flat>
                            <players-list :players="players" />
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
                <v-dialog
                        v-model="dialog"
                        width="500"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs"
                               v-on="on"
                               absolute
                               bottom
                               color="secondary"
                               width="100%"
                        >End Match</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="headline pink darken-2 white--text">
                            WHO IS THE WINNER
                        </v-card-title>
                        <v-card-text>
                            <v-row class="py-10 text-center align-center">
                                <v-col cols="5">
                                    <v-btn color="red darken-4" dark width="100%">RED TEAM</v-btn>
                                </v-col>
                                <v-col cols="2">
                                    OR
                                </v-col>
                                <v-col cols="5">
                                    <v-btn color="blue darken-4" dark width="100%">BLUE TEAM</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn
                                    text
                                    @click="dialog.value = false"
                            >Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import PlayersList from '../components/PlayersList'
    export default {
        name: 'StartMatch',
        components: { PlayersList },
        data () {
            return {
                dialog: false,
                tab: null,
                players: ['Ahmed', 'Ali', 'Yousef'],
                items: [
                    'RED TEAM', 'BLUE TEAM'
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
    }
</script>
