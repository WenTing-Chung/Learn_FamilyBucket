<template>
  <section>
    <h2>Router 的種類：query / params</h2>
    <div style="margin-bottom: 20px">
      <router-link :to="{ name: 'TypeQuery', query: { iamquery: '1' } }">
        <button type="button">Query方法</button>
      </router-link>
      <router-link :to="{ name: 'TypeParams', params: { iamparams: '2' } }">
        <button type="button">Params方法</button>
      </router-link>
    </div>
    <router-view />
  </section>
</template>