<template>
  <div id="app">
    <h1>TODOリスト</h1>
    <div>
      <input v-model="newTodoName">
      <!-- 追加ボタン -->
      <button @click="addTodo()">追加</button>
    </div>

    <ul>
      <!-- リスト -->
      <li v-for="(todo, key) in todos" :key="key">
      <input type="checkbox" v-model="todo.isComplete" @click = "updateTodo(todo, key)"/>
       {{ todo.name }}
       <button @click="removeTodo(key)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data(){
    return {
      db:null,
      todosRef:null,
      newTodoName:'',
      todos: {}
    }
  },
  created(){
    // firebaseの初期設定
    this.db = firebase.firestore() 
    this.todosRef = this.db.collection('todos')
    this.todosRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
      })
      this.todos = obj
    })
  },
  methods: {
    addTodo(){
      // 空欄の場合はリターンを返す
      if(this.newTodoName === ''){ return }
      // todoの追加処理
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      })
    },
    updateTodo(todo, key){
      // チェックボックスの処理
      todo.isComplete = !todo.isComplete
      this.todosRef.doc(key).update(todo)
    },
    removeTodo(key){
      // ×ボタンクリックでデリート
      this.todosRef.doc(key).delete()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
