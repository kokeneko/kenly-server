<script setup>
  const { data } = await useFetch("/hera/api/attendees")
</script>

<template>
<h1>今日の出席</h1>
<table>
  <tr><th>登校時間</th><th>名前</th></tr>
  <tr v-for="row in data">
    <td>{{ row.enter_time }}</td>
    <td>{{ row.name }}</td>
  </tr>
</table>
</template>

<style>
table, th, td {
  border: solid 2px
}
</style>