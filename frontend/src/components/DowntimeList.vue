<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="https://www.iotech.co.id/assets/img/customAppLogo.png"
            width="112"
            height="28"
          />
          <!-- <img src="https://lh3.googleusercontent.com/pw/AM-JKLU5vuF1H2D_PENwFyh18w64t310eCexcfOvys3lXh9U0JIVFxx3AP2qoluc8EKcQmcSKCR6VYhbQk4PdlyZTzJYEmiyeOZwfUpygie8-vZoBbI34bl_IQm9m5pX4dL5ByuzDsQ_JJ-mc9G3ur3p3omy=w640-h160-no?authuser=1" width="112" height="28"> -->
        </a>
      </div>
    </nav>

    <nav class="breadcrumb" aria-label="breadcrumbs" id="breadCrumb">
      <ul>
        <li class="is-active"><a>Home</a></li>
        <li class="#">
          <router-link to="/chopp">Chopp</router-link>
        </li>
        <li class="#">
          <router-link to="/pasta">Pasta</router-link>
        </li>
        <li class="#">
          <router-link to="/almond">Almond</router-link>
        </li>
        <li class="#">
          <router-link to="/raw-material">Raw Material</router-link>
        </li>
        <li class="#">
          <a href="http://192.168.0.93:8087/produktivitas/" target="_blank" rel="noopener noreferrer">Produktivitas</a>
        </li>
        <li class="#">
          <a href="http://192.168.0.93:8087/produktivitas/export_downtime" target="_blank" rel="noopener noreferrer">Export Downtime</a>
        </li>
      </ul>
    </nav>

    <!-- <nav> -->
      <!-- create datetime timepicker -->
      <!-- <div class="field has-addons">
        <div class="control">
          <input
            class="input"
            type="datetime-local"
            placeholder="Date"
            :key="startTime"
          />
        </div>
        <div class="control">
          <input
            class="input"
            type="datetime-local"
            placeholder="Time"
            :key="endTime"
          />
        </div>
      </div>
    </nav> -->

    <table class="table is-striped is-bordered mt-1 is-fullwidth">
      <thead>
        <tr>
          <th><div style="width: 160px">Datetime</div></th>
          <th @click="sort('line')">Line</th>
          <th>SKU</th>
          <th>Status</th>
          <th>Reason</th>
          <th>Location</th>
          <th>PIC</th>
          <!-- <th>Note</th> -->
          <th>Note</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.Datetime }}</td>
          <td>{{ item.lineName }}</td>
          <td>{{ item.SKU }}</td>
          <td>{{ item.Status }}</td>
          <td>{{ item.Reason }}</td>
          <td>{{ item.DowntimeLoc }}</td>
          <td>{{ item.PIC }}</td>
          <td>
            <div style="max-width: 160px; overflow: hidden">
              {{ item.Catatan }}
            </div>
          </td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    //   currentSort:'line',
    // currentSortDir:'asc'
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://192.168.0.93:5000/downtimes/");
        // const response = await axios.get("http://192.168.18.12:5000/downtimes/");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // sort:function(s) {
    //   //if s == current sort, reverse
    //   if(s === this.currentSort) {
    //     this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    //   }
    //   this.currentSort = s;
    // }


    // // Delete Product
    // async deleteProduct(id) {
    //   try {
    //     await axios.delete(`http://localhost:5000/products/${id}`);
    //     this.getProducts();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },

  // computed:{
  //   sortedCats:function() {
  //     // let items;
  //     return this.items.sort((a,b) => {
  //       if(this.currentSortDir==='asc') {
  //         return a[this.currentSort] > b[this.currentSort] ? 1 : -1;
  //       } else {
  //         return a[this.currentSort] < b[this.currentSort] ? 1 : -1;
  //       }
  //     });
  //   }
  // },


};

// var header = document.getElementById("breadCrumb");
// var btns = header.getElementsByClassName("#");

</script>
 

