<template>
  <div>
    <h1>{{ text }}</h1>
    <div style="margin-bottom: 20px">
      <router-link to="/testinfo">
        <button type="button">TestInfo</button>
      </router-link>
      <router-link to="/fgovideo">
        <button type="button">FGO Video</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'RouterTest',
  data: () => ({
    text: 'Router Test',
  }),
}
</script>