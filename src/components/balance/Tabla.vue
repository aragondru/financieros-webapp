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
            <tr class="font-weight-black">Activos</tr>
            <tr>
            <td>Cajas y bancos</td>
            <td>$ {{ balance20.activos.cajasbancos.toFixed(2) }}</td>
            <td>$ {{ balance19.activos.cajasbancos.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.cajasbancos.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Reportes y otras operaciones bursatiles neto</td>
            <td>$ {{ balance20.activos.reportes.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.reportes.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.reportes.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Inversiones financieras, netas</td>
            <td>$ {{ balance20.activos.inversionesF.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.inversionesF.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.inversionesF.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Cartera de préstamos, neta</td>
            <td>$ {{ balance20.activos.carteraP.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.carteraP.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.carteraP.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td></td>
            <td> </td>
            <td> </td>
            <td> </td>            
            </tr>
            <tr class="font-weight-black">
            <td>Otros Activos </td>          
            </tr>
            <tr>
            <td>Bienes recibidos en pago, neta</td>
            <td>$ {{ balance20.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.bienesR.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Inversiones accionarias</td>
            <td>$ {{ balance20.activos.inversionesA.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.inversionesA.toFixed(2)}}</td>
             <td>$ {{ balance18.activos.inversionesA}}</td>
            </tr>
              <tr>
            <td>Bienes recibidos en pago, neta</td>
            <td>$ {{ balance20.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.bienesR.toFixed(2)}}</td>            
            </tr>
              <tr>
            <td>Bienes recibidos en pago, neta</td>
            <td>$ {{ balance20.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.bienesR.toFixed(2)}}</td>            
            </tr>         
            <tr>
            <td>Inversiones accionarias</td>
            <td>$ {{ balance20.activos.inversionesA.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.inversionesA.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.inversionesA.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Diversos, neto</td>
            <td>$ {{ balance20.activos.diversos.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.diversos.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.diversos.toFixed(2)}}</td>            
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="font-weight-black"><td>Activo fijo</td></tr>
            <tr>
            <td>Bienes muebles, inmuebles y otros - neto</td>
            <td>$ {{ balance20.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance19.activos.bienesR.toFixed(2)}}</td>
            <td>$ {{ balance18.activos.bienesR.toFixed(2)}}</td>            
            </tr>
            <tr class="font-weight-black">
              <td>Total de los activos</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="font-weight-black">Pasivos y Patrimonio</tr>
            <tr class="font-weight-black">
            <td>Pasivos de intermediación</td>
            </tr>
            <tr>
            <td>Depositos de clientes</td>
            <td>$ {{ balance20.pasivos.depositosC.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.depositosC.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.depositosC.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Prestamos del Banco de desarrollo de E Salvador</td>
            <td>$ {{ balance20.pasivos.prestamosB.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.prestamosB.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.prestamosB.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Prestamos de otros bancos</td>
            <td>$ {{ balance20.pasivos.prestamosO.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.prestamosO.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.prestamosO.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Reportos y otras obligaciones bursátiles</td>
            <td>$ {{ balance20.pasivos.reportos.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.reportos.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.reportos.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Diversos</td>
            <td>$ {{ balance20.pasivos.diversos1.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.diversos1.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.diversos1.toFixed(2)}}</td>            
            </tr>
            <tr class="font-weight-black">
            <td>Otros pasivos</td>           
            </tr>
            <tr>
            <td>Cuentas por Pagar</td>
            <td>$ {{ balance20.pasivos.cuentasP.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.cuentasP.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.cuentasP.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Provisiones</td>
            <td>$ {{ balance20.pasivos.provisiones.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.provisiones.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.provisiones.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Diversos</td>
            <td>$ {{ balance20.pasivos.diversos2.toFixed(2)}}</td>
            <td>$ {{ balance19.pasivos.diversos2.toFixed(2)}}</td>
            <td>$ {{ balance18.pasivos.diversos2.toFixed(2)}}</td>            
            </tr>
            <tr class="font-weight-black">
              <td>Total de los pasivos</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="font-weight-black">
            <td>Patrimonio</td>           
            </tr>
            <tr>
            <td>Capital social pagado</td>
            <td>$ {{ balance20.capital.capitalP.toFixed(2)}}</td>
            <td>$ {{ balance19.capital.capitalP.toFixed(2)}}</td>
            <td>$ {{ balance18.capital.capitalP.toFixed(2)}}</td>            
            </tr>
            <tr>
            <td>Reservas de capital, resultados acumulados y patrimonio no ganado</td>
            <td>$ {{ balance20.capital.reserva.toFixed(2)}}</td>
            <td>$ {{ balance19.capital.reserva.toFixed(2)}}</td>
            <td>$ {{ balance18.capital.reserva.toFixed(2)}}</td>            
            </tr>
            <tr class="font-weight-black">
              <td>Total de patrimonio</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="font-weight-black">
              <td>Total de los activos más patrimonio</td>
              <td></td>
              <td></td>
              <td></td>
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
          balance20: estadosF.year1.balance,
          balance19:estadosF.year2.balance,
          balance18:estadosF.year3.balance,
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