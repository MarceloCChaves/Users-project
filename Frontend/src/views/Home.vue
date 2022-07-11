<template>
  <div>
    <h1>Our team</h1>
    <div class="home">
      <section class="user-card" v-for="user in users" :key="user.id">
        <img :src="user.avatar" :alt="user.name" />
        <strong>{{ user.name }}</strong>
        <span>{{ user.role }}</span>
        <span>${{ user.salary }}(month)</span>
      </section>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await api.get("/person");
    this.users = response.data;
  },
};
</script>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
}
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid #aaa;
  margin: 20px auto;
  padding: 20px;
  width: 300px;
  max-width: 100%;
  border-radius: 8px;
}
.user-card img {
  width: 200px;
  height: 200px;
}
</style>
