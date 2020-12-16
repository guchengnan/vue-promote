<template>
  <div class="timeline">
    <a-timeline>
        <a-timeline-item>feat: 项目初始化</a-timeline-item>
        <a-timeline-item>feat: 自定义指令</a-timeline-item>
        <a-timeline-item>feat: 基于axios二次封装网络请求</a-timeline-item>
        <a-timeline-item>fix: 网页刷新/重载，保存导航菜单选中状态</a-timeline-item>
      </a-timeline>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
