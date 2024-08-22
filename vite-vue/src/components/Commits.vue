<template>
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
    <li v-for="{ html_url, sha, author, commit } in (commits as any)">
      <a :href="html_url" target="_blank" class="commit"
        >{{ sha.slice(0, 7) }}</a
      >
      - <span class="message">{{ truncate(commit.message) }}</span><br />
      by
      <span class="author"
        ><a :href="author.html_url" target="_blank"
          >{{ commit.author.name }}</a
        ></span
      >
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {
  data: () => ({
      branches: ['main', 'v2-compat'],
      currentBranch: 'main',
      commits: null,
    }),

    created() {
      this.fetchData()
    },

    watch: {
      currentBranch: 'fetchData',
    },

    methods: {
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
