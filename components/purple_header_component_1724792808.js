<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden bg-gradient-to-r from-pink-500/30 to-purple-600/30 backdrop-blur-md shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-[150px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-[60px] bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" class="#A855F7" />
                <stop offset="100%" class="6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
              Your Gateway to Celestial Trading
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200">
              Cosmic Exchange: The Interstellar Market
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-pink-100">
              Navigate the vast expanse of our otherworldly trading platform. Join visionary traders who are charting new frontiers in the mystical realm of celestial commerce.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 rounded-full px-6 py-3 shadow-lg">
            Embark on Your Journey
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-700">-&gt;</span>
          </a>

          <!-- Email Form to Contact Santa -->
          <div class="mt-8 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
            <h3 class="text-xl font-semibold text-pink-100 mb-4">Contact the Cosmic Overseer</h3>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-pink-200">Name</label>
                <input type="text" id="name" v-model="form.name" class="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 bg-purple-100/10 text-pink-100" required>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-pink-200">Email</label>
                <input type="email" id="email" v-model="form.email" class="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 bg-purple-100/10 text-pink-100" required>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-pink-200">Message to the Cosmic Overseer</label>
                <textarea id="message" v-model="form.message" rows="4" class="mt-1 block w-full rounded-md border-purple-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 bg-purple-100/10 text-pink-100" required></textarea>
              </div>
              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  Send to the Cosmos
                  <i class='bx bx-planet ml-2'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null,
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    // Submit form method
    submitForm() {
      console.log('Form submitted:', this.form);
      // Add your form submission logic here
      // Reset form after submission
      this.form = { name: '', email: '', message: '' };
    }
    // End of submit form method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>