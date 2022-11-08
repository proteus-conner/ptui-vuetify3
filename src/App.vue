<template>
  <v-layout>
    <v-navigation-drawer color="secondary">
      <VImg src="https://www.providertrust.com/wp-content/uploads/2022/03/logo-white_color.svg" width="200"/>
      <VList>
        <VListItem prepend-icon="mdi-home-outline" color="white" title="Dashboard"></VListItem>
        <VListItem prepend-icon="mdi-bell-outline" color="white" title="Alerts"></VListItem>
        <VListItem prepend-icon="mdi-account-group-outline" color="white" title="Population"></VListItem>
        <VListItem prepend-icon="mdi-file-chart-outline" color="white" title="Reports"></VListItem>
        <VListItem prepend-icon="mdi-triangle-wave" color="white" title="Exclusion Monitoring"></VListItem>
        <VListItem prepend-icon="mdi-card-account-details-outline" color="white" title="License Monitoring"></VListItem>
      </VList>
    </v-navigation-drawer>
    <v-app-bar :elevation="1">

    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    data () {
      return {

      }
    },
  }
</script>

<style lang="scss">
#app {
  background-color: #F8FAFB;
}
</style>
