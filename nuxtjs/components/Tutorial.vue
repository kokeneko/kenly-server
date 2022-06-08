<!-- Please remove this file from your project -->
<template>
  <div>
    <h2>{{date}} の出席</h2>
    <table>
      <tr><th>登校時間</th><th>名前</th></tr>
      <tr v-for="(attendee, index) in attendees" :key="index">
        <td>{{attendee.enter_time}}</td>
        <td>{{attendee.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      attendees: [{enter_time: "00:00", name: "出席者の取得に失敗"}],
      date: ""
    }
  },
  created: function() {
    // 日付の取得
    let dt = new Date()
    this.date = `${dt.getMonth()+1}月${dt.getDate()}日`

    // 出席者の取得
    axios.get("/api/attend")
      .then((res) => {
        this.attendees = res.data
      })
  }
}
</script>
