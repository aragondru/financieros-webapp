<template>
  <v-container dark>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Cuenta</th>
            <th class="text-left">2020</th>
            <th class="text-left">2019</th>
            <th class="text-left">2018</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            Activos
          </tr>

          <tr v-for="(cuenta, key) in balance1[0][0]" :key="key">
            <td>{{ key }}</td>
            <td>{{ cuenta }}</td>
            <div v-for="(cuenta2, key2) in balance2[0][0]" :key="key2">
              <td v-if="key2 == key">{{ cuenta2 }}</td>
            </div>
            <div v-for="(cuenta3, key3) in balance3[0][0]" :key="key3">
              <td v-if="key3 == key1">{{ cuenta3 }}</td>
            </div>
          </tr>

          <tr>
            Pasivos
          </tr>
          <tr v-for="(cuenta, key) in balance1[1][0]" :key="key">
            <td>{{ key }}</td>
            <td>{{ cuenta }}</td>
          </tr>
          <tr>
            Capital
          </tr>
          <tr v-for="(cuenta, key) in balance1[2][0]" :key="key">
            <td>{{ key }}</td>
            <td>{{ cuenta }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { balance_year1 } from "../../datos";
import { balance_year2 } from "../../datos";
import { balance_year3 } from "../../datos";
export default {
  name: "Tabla",
  data() {
    return {
      balance1: balance_year1,
      balance2: balance_year2,
      balance3: balance_year3,
    };
  },
  methods: {
    imprimir() {},
  },
};
</script>

<style lang="scss" scoped></style>
