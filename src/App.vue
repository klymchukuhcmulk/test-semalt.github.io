<template>
  <div id="app">
    <div class="main">
      <div class="header">
        <h2 class="main-header">Submitted sitemaps<font-awesome-icon class="icon-info" icon="info-circle"/></h2>
        <div class="functions">
          <p v-if="selected.length">Selected sitemaps: {{ selected.length }}</p>
          <p class="passive" :class="{ primary : selected.length }">Recrawl sitemap</p>
          <p class="passive" :class="{ error : selected.length }" @click="deleteSelected">Remove sitemap</p>
        </div>
      </div>
      <div class="filters">
        <div class="wrap">
          <h4>Filters:</h4>
          <div class="filters-input">
            <div class="filters-item" :class="{activeInput : activeInput === 1}">
              <p @click="setActiveInput(1)">URL or its part</p>
              <div class="dropDownFirst" v-if="activeInput === 1">
                <div class="radioButton" :class="{radioButtonActive : radioInput === 1}" @click="setActiveRadio(1)">Sitemap contains</div>
                <div class="radioButton" :class="{radioButtonActive : radioInput === 2}" @click="setActiveRadio(2)">Sitemap doesn’t contain</div>
                <div class="radioButton" :class="{radioButtonActive : radioInput === 3}" @click="setActiveRadio(3)">Exact match</div>
                <div class="hr"></div>
                <div class="btn-block">
                  <button class="error" @click="radioInput = null">Reset</button>
                  <button class="primary" @click="activeInput = null">Apply</button>
                </div>
              </div>
            </div>
            <div class="filters-item" :class="{activeInput : activeInput === 2}" @click="setActiveInput(2)">
              <p>All types</p>
              <div class="arrow">
                <font-awesome-icon icon="chevron-up"/>
              </div>
            </div>
            <div class="filters-item" :class="{activeInput : activeInput === 3}" @click="setActiveInput(3)">
              <p>Submitted</p>
              <div class="arrow">
                <font-awesome-icon icon="chevron-up"/>
              </div>
            </div>
            <div class="filters-item" :class="{activeInput : activeInput === 4}" @click="setActiveInput(4)">
              <p><font-awesome-icon icon="calendar-alt"/> 2/12/19 - 2/12..</p>
              <div class="arrow">
                <font-awesome-icon icon="chevron-up"/>
              </div>
            </div>
            <div class="filters-item" :class="{activeInput : activeInput === 5}" @click="setActiveInput(5)">
              <p>All sitemaps</p>
              <div class="arrow">
                <font-awesome-icon icon="chevron-up"/>
              </div>
              <div class="dropDownSec" v-if="activeInput === 5">
                <p>Success</p>
                <p>Couldn't fetch</p>
                <p>Errors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="title">
        <div class="checkbox">
          <div class="checkboxDiv" :class="{allChecked : allChecked}" @click="checkAll">
            <font-awesome-icon icon="check-square" v-if="allChecked"/>
          </div>
        </div>
        <div class="titleDiv elementDiv1"><h4>Sitemap({{ sitemap.length }})</h4></div>
        <div class="titleDiv elementDiv2"><h4>Type</h4></div>
        <div class="titleDiv elementDiv3"><h4>Submitted</h4></div>
        <div class="titleDiv elementDiv4"><h4>Last check</h4></div>
        <div class="titleDiv elementDiv5"><h4>Status</h4></div>
        <div class="titleDiv elementDiv6"><h4>URLs</h4></div>
        <div class="titleDiv elementDiv7"><h4>Recrawl sitemap</h4></div>
        <div class="titleDiv elementDiv8"><h4>Remove sitemap</h4></div>
      </div>
      <div class="element" :class="{ selectedEl : item.checked}" v-for="(item, i) in sitemap" :key="i">
        <div class="checkbox">
          <div class="checkboxDiv" :class="{allChecked : item.checked || allChecked}" @click="!item.checked ? item.checked = true : item.checked = allChecked = false">
            <font-awesome-icon icon="check-square" v-if="item.checked || allChecked"/>
          </div>
        </div>
        <div class="elementDiv elementDiv1"><p>{{ item.path }}</p> <a :href="item.fullPath"><font-awesome-icon icon="external-link-alt"/></a></div>
        <div class="elementDiv elementDiv2"><p>{{ item.isSitemapIndex ? 'Sitemap index' : 'False'}}</p></div>
        <div class="elementDiv elementDiv3"><p>{{ item.lastSubmitted }}</p></div>
        <div class="elementDiv elementDiv4"><p>{{ item.lastCheck }}</p></div>
        <div class="elementDiv elementDiv5"><p class="error" :class="{success : item.errors === 'Success'}">{{ item.errors }}</p></div>
        <div class="elementDiv elementDiv6"><p>{{ item.urls }}</p></div>
        <div class="elementDiv elementDiv7"><p>Recrawl</p></div>
        <div class="elementDiv elementDiv8"><font-awesome-icon icon="trash" @click="deleteElement(i)"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
  data () {
    return {
      sitemap: [],
      activeInput: null,
      setActive: null,
      radioInput: null
    }
  },
  created () {
    fetch('https://semalt.net/dev/api/v1/example/test/')
      .then(response => response.json())
      .then(response => {
        response.result.sitemap.forEach(item => {
          this.sitemap.push(this.element(item))
        })
      })
      .catch(console.log)
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    allChecked: {
      set (check) {},
      get () {
        let checked = true
        this.sitemap.forEach(item => {
          if (!item.checked) {
            checked = false
          }
        })
        return checked
      }
    },
    selected () {
      const selected = []
      this.sitemap.forEach((item, i) => {
        if (item.checked) {
          selected.push(i)
        }
      })
      return selected
    }
  },
  methods: {
    setActiveInput (active) {
      if (this.activeInput !== active) {
        this.activeInput = active
      } else {
        this.activeInput = undefined
      }
    },
    setActiveRadio (active) {
      this.radioInput = active
    },
    element (item) {
      let lastCheck = new Date(item.lastCheck)
      let lastSubmit = new Date(item.lastSubmitted)
      lastCheck = lastCheck.toString().split(' ').slice(1, 4)
      lastSubmit = lastSubmit.toString().split(' ').slice(1, 4)
      return {
        fullPath: item.path,
        path: item.path.replace(/http:\/\/savetubevideo.com/, ''),
        lastCheck: lastCheck[0] + ' ' + lastCheck[1] + ', ' + lastCheck[2],
        lastSubmitted: lastSubmit[0] + ' ' + lastSubmit[1] + ', ' + lastSubmit[2],
        urls: item.urls.toLocaleString(),
        errors: item.errors === 0 ? 'Success' : item.errors + ' errors',
        checked: false,
        isSitemapIndex: item.isSitemapsIndex
      }
    },
    checkAll () {
      if (this.allChecked) {
        this.allChecked = false
        this.sitemap.forEach(item => {
          item.checked = false
        })
      } else {
        this.allChecked = true
        this.sitemap.forEach(item => {
          item.checked = true
        })
      }
    },
    deleteElement (i) {
      this.sitemap.splice(i, 1)
    },
    deleteSelected () {
      for (let i = 0; i < this.sitemap.length; i++) {
        if (this.sitemap[i].checked) {
          this.deleteElement(i)
          i--
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "styles/main";
</style>
