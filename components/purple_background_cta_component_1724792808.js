<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-purple-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-purple-400"></div>
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
            <div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-purple-500 to-purple-200">
              Your One-Stop Shop for Toilet Paper Transactions
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Roll Into Profits: The TP Exchange
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-slate-400">
              Wipe away your financial worries with our innovative toilet paper trading platform. Join thousands of savvy investors who are flushing away traditional markets and embracing the soft, strong world of TP trading.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">
            Get Started
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span>
          </a>

          <!-- Email Form to Contact Santa -->
          <div class="mt-8 bg-white bg-opacity-20 rounded-lg p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-white mb-4">Contact Santa</h3>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-white">Name</label>
                <input type="text" id="name" v-model="form.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" v-model="form.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-white">Message to Santa</label>
                <textarea id="message" v-model="form.message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required></textarea>
              </div>
              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Send to Santa
                  <i class='bx bx-envelope ml-2'></i>
                </button>
              </div>
            </form>
          </div>

          <!-- Shoryuken Button -->
          <div class="mt-8">
            <button
              id="shoryuken-button"
              @click="performShoryuken"
              class="btn transition duration-150 ease-in-out text-white hover:text-yellow-300 bg-gradient-to-r from-red-600 to-orange-400 hover:from-red-500 hover:to-orange-300 rounded-full px-6 py-3 shadow-lg flex items-center"
            >
              <i class='bx bxs-upvote mr-2'></i>
              Shoryuken!
            </button>
          </div>
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
    },
    // End of submit form method

    // Shoryuken method
    performShoryuken() {
      console.log("Shoryuken!");
      // Add your Shoryuken logic here
    }
    // End of Shoryuken method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>