<template>
  <div class="top">
    <h1>Vue学習の為のTODOアプリsample</h1>
    <div class="kadai">
      <ul>
        <h3>機能</h3>
        <li>追加</li>
        <li>編集(double click -> enter,esc, focus out)</li>
        <li>削除</li>
        <h3>余力があれば</h3>
        <li>sort</li>
        <li>filter</li>
        <li>double clickでfocusされないbug修正</li>
      </ul>
      <h3>参考サイト</h3>
      <a href="https://jp.vuejs.org/v2/examples/todomvc.html">TodoMVC の例</a>
    </div>

    <h1>todos</h1>
    <div class="todo">
      <input
        type="text"
        placeholder="title"
        @keyup.esc="title = ''"
        @keyup.enter="addTodo"
        v-model="title"
      />
      <button @click="addTodo">追加</button>

      <div v-if="todos.length">
        <ul v-for="(todo, index) in todos" :key="index">
          <li :class="{ done: todo.done }">
            <input
              v-if="edit == todo"
              @keyup.enter="edit = null"
              @keyup.esc="edit = null"
              @blur="edit = null"
              v-model="todo.title"
            />
            <div v-else>
              <input class="toggle" type="checkbox" v-model="todo.done" />
              <label @dblclick="edit = todo">{{ todo.title }}</label>
              <button @click="delTodo(index)">del</button>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <h3>todoがありません</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {db, firestore} from  "@/plugins/firebase"

console.log(db)
console.log(firestore)

export default {
  name: "HelloWorld",
  data() {
    return {
      edit: {},
      title: "",
      todos: []
    };
  },

  firestore() {
    console.log("todos:", db.collection('todos')) 
    return {
      todos: db.collection('todos')
    }
  },

  methods: {
    // addTodo() {
    //   this.todos.push({
    //     title: this.title,
    //     done: false,
    //     edit: false
    //   });
    //   this.title = "";
    //   this.content = "";
    // },
    addTodo() {
      db.collection('todos').add({
        title: this.title,
        done: false,
      })
      this.title = "";
    },

    delTodo(index) {
      this.todos.splice(index, 1);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  font-size: 150%;
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
}

.kadai {
  padding: 10px;
  border: medium solid #222222;
}
.kadai li {
  display: list-item;
  list-style: none;
}
.todo {
}

.todo li {
  width: 80%;
  list-style: none;
}

.done {
  text-decoration: line-through;
}
</style>
