<template>
  <form @submit.prevent="adicionarTarefa">
    <input v-model="newTask" type="text" placeholder="Add details" />
    <button
      type="submit"
      class="
        text-white
        bg-blue-700
        hover:bg-blue-800
        focus:ring-4 focus:ring-blue-300
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        mr-2
        mb-2
        dark:bg-blue-600 dark:hover:bg-blue-700
        focus:outline-none
        dark:focus:ring-blue-800
      "
    >
      Adicionar
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.newTask) {
        this.$emit("add-task", {
          id: this.todos === undefined ? 1 : this.todos.length + 1,
          descricao: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
  },
};
</script>