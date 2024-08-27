<template>
  <header class="w-full z-30" id="header-section-container" style="min-height: 390px">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Home-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white"
                href="Home.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="Browse Listings-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white"
                href="Browse Listings.html"
              >
                Browse Listings
              </a>
            </li>
            <li>
              <a
                id="Sell Your Rolls-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white"
                href="Sell Your Rolls.html"
              >
                Sell Your Rolls
              </a>
            </li>
            <li>
              <a
                id="Market Trends-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white"
                href="Market Trends.html"
              >
                Market Trends
              </a>
            </li>
            <li>
              <a
                id="Contact Us-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-slate-300 hover:text-white"
                href="Contact Us.html"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-slate-300 hover:text-white"
              href="signin.html"
            >
              Sign in
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none text-slate-300 hover:text-white [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Hadoken Button -->
        <div class="flex-1 flex justify-end items-center ml-4">
          <button
            id="hadoken-button"
            class="btn-sm transition duration-150 ease-in-out text-white hover:text-yellow-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="performHadoken"
          >
            <i class='bx bxs-hot mr-2'></i>
            Hadoken!
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            :aria-controls="'mobile-nav'"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-slate-300 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            v-cloak
          >
            <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]">
              <li>
                <a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-slate-300 hover:text-white" href="Home.html">Home</a>
              </li>
              <li>
                <a id="mobile-Browse Listings-link" class="flex font-medium text-sm py-1.5 text-slate-300 hover:text-white" href="Browse Listings.html">Browse Listings</a>
              </li>
              <li>
                <a id="mobile-Sell Your Rolls-link" class="flex font-medium text-sm py-1.5 text-slate-300 hover:text-white" href="Sell Your Rolls.html">Sell Your Rolls</a>
              </li>
              <li>
                <a id="mobile-Market Trends-link" class="flex font-medium text-sm py-1.5 text-slate-300 hover:text-white" href="Market Trends.html">Market Trends</a>
              </li>
              <li>
                <a id="mobile-Contact Us-link" class="flex font-medium text-sm py-1.5 text-slate-300 hover:text-white" href="Contact Us.html">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-slate-800">Contact Santa</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-700">Name</label>
          <input type="text" id="name" v-model="form.name" class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" required>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" id="email" v-model="form.email" class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" required>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-slate-700">Message to Santa</label>
          <textarea id="message" v-model="form.message" rows="4" class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" required></textarea>
        </div>
        <div>
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Send to Santa
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
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
    // Hadoken method
    performHadoken() {
      console.log("Hadoken!");
      // Add your Hadoken logic here
    }
    // End of Hadoken method
  }
};
</script>
