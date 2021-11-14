<template>
    <div>
        <v-toolbar dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>ANF WebApp</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
            text
            class="text-capitalize mr-2 "
            v-show="$vuetify.breakpoint.lgOnly"
            v-for="(item,key) in menuItems"
            :key="key"
            :to="item.to"
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
                    {title:"Inicio",to:'/'},
                    {title:"Balance general",to:'/balancegeneral'},
                    {title:"Estado de resultados",to:'/estadoresultado'}
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