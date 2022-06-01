<script setup>
</script>

<template>
  <div>
    Kenlyホーム(本当は見えない)
    <nuxt-link to="/admin">アドミンへ</nuxt-link><br>
    <nuxt-link to="/attend">アテンドへ</nuxt-link><br>
    <nuxt-link to="/hera/admin">heraアドミンへ</nuxt-link><br>
    <nuxt-link to="/hera/attend">heraアテンドへ</nuxt-link>
    <div>{{ $router.base }}</div>
    <div>a</div>
  </div>
</template>