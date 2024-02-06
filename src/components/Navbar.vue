<template>
  <nav>
    <div class="container">
      <div class="nav__content">
        <div class="nav__content-left">
          <h1>Dashboard</h1>
        </div>
        <div class="nav__content-right">
          <button>
            Add New <img src="../assets/images/svg/search.svg" alt="search" />
          </button>
          <div
            class="nav__content-right-searchInput"
            :style="{
              width: active ? '250px' : '50px',
            }"
          >
            <span @click="searchEvent">
              <img src="../assets/images/svg/plus.svg" alt="plus" />
            </span>
            <div>
                <input type="text" placeholder="Search"/>
                <hr>
            </div>
          </div>
          <div class="nav__content-right-userDate">
            <img src="../assets/images/png/Avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <hr class="nav_bottom-hr">
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    searchEvent() {
      console.log("Slaom");
      this.active = !this.active;
    },
  },
};
</script>
<style lang=""></style>
