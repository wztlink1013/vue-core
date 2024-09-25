<template>
  <div style="border: 1px solid #ccc">
    <div style="color: #ccc">父组件</div>
    <button @click="changeToHelloWorld">
      父组件改变传入子组件的prop值：{{ toHelloWorld }}
    </button>
    <hello-world :toHelloWorld="toHelloWorld"></hello-world>
    <div style="display: block;">computed toHelloWorldComputed value: {{ toHelloWorldComputed }}</div>
  </div>

  <hr style="margin: 50px 0 500px 0" />
  <h4>commit component</h4>
  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/core@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits as any">
      <a :href="html_url" target="_blank" class="commit">{{
        sha.slice(0, 7)
      }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author"
        ><a :href="author.html_url" target="_blank">{{
          commit.author.name
        }}</a></span
      >
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'App',
  components: { 'hello-world': HelloWorld },
  data(a, b) {
    console.info('data options', a, b)
    return {
      branches: ['main', 'v2-compat'],
      currentBranch: 'main',
      commits: null,
      toHelloWorld: 'To Hello World message',
    }
  },
  computed: {
    toHelloWorldComputed() {
      return `>>> ${this.toHelloWorld} compunted... <<<`
    },
  },

  created() {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData',
  },

  methods: {
    changeToHelloWorld() {
      this.toHelloWorld = this.toHelloWorld + '!'
    },
    fetchData() {
      fetch(`${API_URL}${this.currentBranch}`)
        .then(res => res.json())
        .then(data => {
          this.commits = data
        })
    },
    truncate(v: string) {
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate(v: string) {
      return v.replace(/T|Z/g, ' ')
    },
  },
}
console.info('>>> vue >>>')
</script>

<style scoped>
#demo {
  font-family: 'Helvetica', Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
