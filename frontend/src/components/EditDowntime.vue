<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://www.iotech.co.id/assets/img/customAppLogo.png" />
        </a>
      </div>
    </nav>

    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <!-- <li><a href="../">Home HTML</a></li> -->
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <!-- <li><a href="#">Documentation</a></li> -->
        <!-- <li><a href="#">Components</a></li> -->
        <li class="is-active"><a href="#" aria-current="page">Downtime Record</a></li>
      </ul>
    </nav>
    <h3 class="title is-3">Downtime Record</h3>

    <fieldset disabled>
      <div class="field">
        <label class="label">Datetime</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Datetime"
            v-model="DATETIME"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">SKU</label>
        <!-- <p>SKU</p> -->
        <div class="control">
          <input class="input" type="text" placeholder="SKU" v-model="SKU" />
        </div>
      </div>

      <div class="field">
        <label class="label">Status</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Status"
            v-model="STATUS"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Location"
            v-model="LOCATION"
          />
        </div>
      </div>
    </fieldset>
    <div class="field">
      <label class="label">PIC</label>
      <div class="control">
        <input class="input" type="text" placeholder="Status" v-model="PIC" />
      </div>
    </div>

    <div class="field">
      <label class="label">Alasan</label>
      <div class="control">
        <div class="select">
          <select v-model="REASON">
            <option value="" disabled>---REASON SETUP---</option>
            <option>1. Start Up Menunggu Kacang Sangrai</option>
            <option>2. Change Over 1/Ganti produk tanpa setting mesin & cleaning</option>
            <option>3. Change Over 2/Ganti produk harus setting mesin atau cleaning</option>
            <option>4. Ganti Roll Nylon</option>
      
            <option value="" disabled>---REASON DOWNTIME---</option>
            <option>1. Proses melalui cooling tunnel/Aging manual</option>
            <option>2. Proses packing manual</option>
            <option>3. Ditampung di bak</option>
            <option>4. Persiapan Packaging</option>
            <option>5. Jeda antar batch</option>
            <option>6. Packaging habis</option>
            <option>7. Cleaning area/Cleaning area saat pergantian shift</option>
            <option>8. Proses stop karena parameter tidak standard</option>
            <option>9. Diturunkan manual/Produk OOS</option>
            <option>10. Setting/Cleaning Manual</option>
            <option>11. Menunggu man power istirahat</option>
            <option>12. Kerusakan mesin</option>
            <option>13. Menunggu isi hopper mesin autopack JKP</option>
            <option>14. Late start setelah downtime/istirahat</option>
            <option>15. Downtime material/material RMP terlambat</option>
      
            <option value="" disabled>---REASON STANDBY---</option>
            <option>1. Jalan Almond pasta</option>
            <option>2. Istirahat</option>
            
          </select>   
        </div>
      </div>

      <div class="field">
        <label class="label">Note</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Textarea"
            v-model="CATATAN"
          ></textarea>
          <!-- <input
          class="input"
          type="text"
          placeholder="Catatan"
          v-model="CATATAN"
        /> -->
        </div>
      </div>
    </div>

    <!-- <div class="control">
    <button class="button is-primary" @click="updateProduct">UPDATE</button>
    </div> -->

    <div class="field is-grouped">
      <p class="control">
        <a class="button is-primary" v-on:click="updateProduct"> Submit </a>
      </p>
      <p class="control">
        <a class="button is-light" v-on:click="$router.back()"> Cancel </a>
      </p>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "EditProduct",
  data() {
    return {
      DATETIME: "",
      SKU: "",
      STATUS: "",
      REASON: "",
      LOCATION: "",
      PIC: "",
      CATATAN: "",
    };
  },
  created: function () {
    this.getDowntimebyId();
  },
  methods: {
    // Get Product By Id
    async getDowntimebyId() {
      try {
        const response = await axios.get(
          `http://192.168.0.93:5000/downtimes/${this.$route.params.id}`
          // `http://192.168.18.12:5000/downtimes/${this.$route.params.id}`
        );
        this.DATETIME = response.data.Datetime;
        this.SKU = response.data.SKU;
        this.STATUS = response.data.Status;
        this.REASON = response.data.Reason;
        this.LOCATION = response.data.DowntimeLoc;
        this.PIC = response.data.PIC;
        this.CATATAN = response.data.Catatan;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `http://192.168.0.93:5000/downtimes/${this.$route.params.id}`,
          // `http://192.168.18.12:5000/downtimes/${this.$route.params.id}`,
          {
            // product_name: this.productName,
            // product_price: this.productPrice,
            reason: this.REASON,
            pic: this.PIC,
            catatan: this.CATATAN,
          }
        );
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>