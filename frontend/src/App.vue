<template>
  <div id="app" class="container is-max-desktop">
     <!-- <font-awesome-icon icon="user-secret" /> -->
    <router-view />
  </div>
</template>
 
<script>
// var bulmaCalendar=require('bulma-calendar');

export default {
  name: "App",
  data: () => ({
    date: new Date(),
  }),
  // mounted() {
  //   const calendar = new bulmaCalendar(this.$refs.trigger, {
  //     startDate: this.date,
  //   })
  //   calendar.on('date:selected', e => (this.date = e.start || null))
  // }
  // ,
  // computed: {
  //   niceDate() {
  //     if (this.date) {
  //       return this.date.toLocaleDateString()
  //     }
  //   }
  // }
};
</script>
 
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
/* // Import component */
/* @import "~bulma-calendar/dist/css/bulma-calendar.min.css"; */

/* Test masukin datetimepicker npm */
/* @import "~datetimepicker/dist/css/bootstrap-datetimepicker.css"; */
#app {
margin-top: 20px;
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e51; */
  
}



</style>