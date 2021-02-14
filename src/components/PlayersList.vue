<template>
    <v-list>
        <v-subheader>Players List</v-subheader>
        <template v-for="(player, index) in players" >
            <v-list-item :key="index">
                <v-list-item-avatar color="secondary">
                    <span class="white--text">{{ player[0]}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ player }}</v-list-item-title>
                    <v-list-item-subtitle class="d-flex mt-2 align-center">
                        <v-chip class="ml-0 mr-2" color="green lighten-4" small>Win 0</v-chip>
                        <v-chip class="ml-0 mr-2" color="red lighten-4" small>Lose 0</v-chip>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn text small icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-divider :key="index+'divider'" inset/>
        </template>
    </v-list>
</template>

<script>
    export default {
        name: 'PlayersList',
        props: {
            players: {
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
