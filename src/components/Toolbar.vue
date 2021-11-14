<template>
    <div>
        <v-toolbar dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>ANF WebApp</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn 
            text 
            dark 
            class="hidden-xs-only"
            v-for="item in menuItems"
            :key="item.title"
            >
            {{item.title}}
            </v-btn>
        </v-toolbar-items>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name:'Toolbar',
        data() {
            return {
                menuItems:[
                    {title:"Inicio"},
                    {title:"Balance general"},
                    {title:"Estado de resultados"}
                ],
                analisisItems:[
                    {title:"Razones financiera"},
                    {title:"Dupont"}
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>