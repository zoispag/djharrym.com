<template>
  <form
    @submit.prevent="submitForm"
  >
    <div>
      <div class="w-3/4 mx-auto">
        <div class="space-y-6">
          <label class="box-label mt-1">
            Name*
            <input
              v-model="name"
              required
              type="text"
              name="name"
              autocomplete="name"
              class="box"
            >
          </label>

          <label class="box-label mt-1">
            Email*
            <input
              v-model="email"
              required
              name="_replyto"
              type="email"
              autocomplete="email"
              class="box"
            >
          </label>

          <label class="box-label mt-1">
            Your message*
            <textarea
              v-model="message"
              required
              name="message"
              rows="5"
              class="box"
            ></textarea>
          </label>
        </div>
      </div>
    </div>

    <div class="hidden">
      <label class="sr-only">
        Don’t fill this out if you're human:
        <input
          v-model="bot"
          name="bot-field"
          placeholder="This field is only for the robots."
        />
      </label>
    </div>

    <div class="my-4">
      <EmailBot v-if="isBot" />
      <EmailSuccess v-if="status === 'SUCCESS'" />
      <EmailError v-if="status === 'ERROR'" />
    </div>

    <div class="flex justify-center">
      <button type="submit" class="button">
        Send a message
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import EmailSuccess from './EmailSuccess.vue'
import EmailError from './EmailError.vue'
import EmailBot from './EmailBot.vue'

export default {
  name: 'ContractForm',
  components: {
    EmailSuccess,
    EmailError,
    EmailBot
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      isBot: false,
      bot: null,
      status: null
    }
  },
  methods: {
    submitForm () {
      this.status = null

      if (this.bot != null) {
        this.isBot = true
        this.status = 'SUCCESS'
        return
      }

      axios.post('https://formspree.io/f/meqpwrjd', {
        name: this.name,
        _replyto: this.email,
        _subject: `${this.name} | Contact form message from djharrym.com`,
        message: this.message
      }).then(response => {
        this.name = ''
        this.email = ''
        this.message = ''
        this.status = 'SUCCESS'
      }).catch(() => {
        this.status = 'ERROR'
      })
    }
  }
}
</script>

<style>
.box {
  @apply bg-transparent
  border-yellow-300
  border-2
  block
  w-full
  sm:text-sm
  rounded
  p-2
  text-yellow-300
  text-lg;
}

.box-label {
  @apply block text-sm font-medium text-yellow-300;
}
</style>