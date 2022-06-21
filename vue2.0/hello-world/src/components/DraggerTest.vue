<template>
  <main>
    <div class="mt-5 container">
      <div class="row justify-content-center border py-5">
        <div class="col-5">
          <h4 class="mb-3">容器 A</h4>
          <draggable class="draggable-list" :list="list1" group="my-group">
            <div class="list-item" v-for="element in list1" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-5">
          <h4 class="mb-3">容器 B</h4>
          <draggable class="draggable-list" :list="list2" group="my-group">
            <div class="list-item" v-for="element in list2" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      list1: [{ name: '方块A：拖动我试试' }],
      list2: [{ name: '方块B：请拖动我试试' }]
    }
  }
}
</script>
<style scoped>
.draggable-list {
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
  height: 50vh;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>
