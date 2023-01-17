<template>
  <li :class="{ checked: toDo.checked }" @click="$emit('toggle', toDo)">
    <p>{{ toDo.description }}</p>
    <button @click="$emit('remove', toDo)" class="remove">Remover</button>
  </li>
</template>

<script>
export default {
  props: {
    toDo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: #F5F7FA;
  border: 1px solid #CED3D9;
  border-radius: 4px;
  transition: .4s;
  cursor: pointer;
}
li:hover {
  border-color: #18a0fb;
}
li.checked {
  opacity: .3;
}
li.checked p{
  text-decoration: line-through;
}
li + li {
  margin-top: 10px;
}
.remove {
  background: none;
  border: none;
  font-weight: 500;
  font-size: 14px;
  transition: .1s;
  color: #B2B8BF;
  cursor: pointer;
}
.remove:hover {
  color: #636973;
}
</style>