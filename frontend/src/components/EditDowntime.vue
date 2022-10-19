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
            <option>1. Start Up Menunggu Kacang Sangrai/Blanched</option>
            <option>2. Change Over 1/Ganti produk tanpa setting mesin & cleaning</option>
            <option>3. Change Over 2/Ganti produk harus setting mesin atau cleaning</option>
            <option>4. Trial</option>
            <option>5. Ganti Roll Nylon</option>
            <option value="" disabled>---REASON DOWNTIME---</option>
            <option>1. Setting / Cleaning Mesin</option>
            <option>2. Disimpan Di Palet / Ditampung Di Bak</option>
            <option>3. Packaging habis</option>
            <option>4. Persiapan Packaging</option>
            <option>5. Pengulangan Proses (Recycle / Re-sortir / Re-peeling / Re-sieving / Re-packing / Re-label)</option>
            <option>6. Diturunkan manual</option>
            <option>7. Setting Pisau / Ganti Pisau Cutting</option>
            <option>8. Menunggu Man Power istirahat</option>
            <option>9. Kerusakan Mesin</option>
            <option>10. Menunggu Isi Hopper Packing</option>
            <option>11. Late Start Setelah Istirahat</option>
            <option>12. Material dari RMP Terlambat</option>
            <option>13. Packing Manual</option>
            <option>14. Proses Aging Manual</option>
            <option>15. Ganti Ayakan</option>
            <option>16. Persiapan Packaging</option>
            <option>17. Cleaning Area Saat Pergantian Shift</option>
            <option>18. Temuan Foreign Material</option>
            <option>19. Proses Stop Karena Parameter Tidak Standar</option>
            <option>20. Jeda Antar Batch</option>
            <option>21. Proses Selesai</option>
            <option value="" disabled>---REASON STANDBY---</option>
            <option>1. Istirahat</option>
            <option>2. Jalan Tree Nut</option>
            <option>3. Jalan Almond Pasta/Almond Milk</option>
            <option>4. Jalan Almond Retail</option>
            <option>5. Mengerjakan WO Re-packing/Re-label</option>
            <option>6. Mengerjakan WO Extra Fine/Dice Fine</option>
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