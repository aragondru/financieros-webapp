<template>
  <v-container dark>
    <v-simple-table dense>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Cuenta
            </th>
            <th class="text-left">
                2020
            </th>
            <th class="text-left">
              2019
            </th>
            <th class="text-left">
              2018
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(activo,key) in balance" :key="key">
              <td>{{activo.year1.balance.activos}}</td>
              <td>{{activo.year2.balance.activos}}</td>
              <td>{{activo.year3.balance.activos}}</td>
            </tr>
            
        </tbody>
        </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import estadosF from '../../datos'
  export default {
      name:'Tabla',
      data () {
        return {
         balance: estadosF
        }
      },
      methods: {
        imprimir(){
          
        }
      },
  }
</script>

<style lang="scss" scoped>

</style>