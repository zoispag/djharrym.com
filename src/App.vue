<template>
  <div>
    <Logo></Logo>
  </div>

  <div class="mb-8">
    <Hero></Hero>
  </div>

  <section class="p-8 mx-auto w-full sm:w-3/4 section-bg mb-24">
    <div class="flex justify-center mb-8">
      <h2 class="text-yellow-300 text-2xl">Some Words About Me</h2>
    </div>
    <img
      src="./assets/whoami.jpg"
      alt="DjHarryM"
      class="object-fill my-4 w-full"
    />
    <div>
      <p class="text-yellow-300 text-2xl mb-4">I'm Harry Misouras aka Dj Harry M</p>
      <p class="text-white mb-2">I was 14 years old when I first came in touch with the world of vinyls. During the 90's I amassed a large collection with different styles and sounds. Since then, I have produced countless, non-stop HOUSE MUSIC mixes powered by my favorites decks, <strong>-Technics MK2-</strong></p>
      <p class="text-white">I always follow two phrases in my life: "<em>Not everyone understands HOUSE MUSIC... It's a spiritual thing</em>" because "<em>MUSIC IS THE ANSWER</em>"</p>
    </div>
    <div class="flex justify-end mt-2">
      <h2 class="text-yellow-300 text-xl italic">God bless you... "Η.Μ"</h2>
    </div>
  </section>

  <section class="p-8 mx-auto w-full sm:w-3/4 section-bg mb-24">
    <div class="flex justify-center mb-8">
      <h2 class="text-yellow-300 text-2xl">My Latest Mixtape</h2>
    </div>
    <MixCloud :count="1" />
  </section>

  <PhotoSection
    header='Owner of "EnergyMixRadio"'
    :img-src="energyLogo"
    img-alt="energymixradio.com logo"
  >
    <p class="text-yellow-300 text-lg tracking-widest mb-4">EnergyMixRadio</p>
    <p class="text-white text-base tracking-wider mb-4 font-semibold">"D E A L E R" of HOUSE music</p>
    <p class="text-yellow-300 text-lg tracking-widest mb-8">www.EnergyMixRadio.com</p>
    <a class="button" href="https://www.energymixradio.com/">Tune in now</a>
  </PhotoSection>

  <PhotoSection
    header='Resident Dj at "NAKAL State of Mind"'
    :img-src="nakalLogo"
    img-alt="nakal logo"
    :isReverse="true"
  >
    <p class="text-yellow-300 text-lg tracking-widest mb-4">NAKAL State of Mind</p>
    <p class="text-white text-base tracking-wide">Leof.Avlakiou 100 Porto Rafti</p>
    <p class="text-white text-base tracking-wide">Zip Code 190 03</p>
    <p class="text-white text-base tracking-wide mb-4">Tel: 22990 88229</p>
    <p class="text-yellow-300 text-lg tracking-widest mb-8">www.nakal.gr</p>
    <p class="mb-4"><a class="button" href="https://www.nakal.gr/">Website</a></p>
    <p class="mb-4"><a class="button" href="https://goo.gl/maps/ruvvBbjABUjp9ms59">Google Map</a></p>
  </PhotoSection>

  <section class="p-8 mx-auto w-full sm:w-3/4 section-bg mb-24">
    <div class="flex justify-center mb-8">
      <h2 class="text-yellow-300 text-2xl">Listen to My Previous Mixtapes</h2>
    </div>

    <MixCloud :offset="1" :count="5" />

    <div class="mt-4 flex justify-center">
      <a href="https://www.mixcloud.com/harrymisoura/" class="button">
        Follow me on Mixcloud
      </a>
    </div>
  </section>

  <section class="p-8 mx-auto w-full section-bg mb-24">
    <div class="flex justify-center mb-4">
      <h2 class="text-yellow-300 text-2xl">Some Photos of How I Rock!</h2>
    </div>

    <div class="flex justify-center max-w-xl sm:max-w-4xl md:max-w-6xl mx-auto">
      <Masonry></Masonry>
    </div>
  </section>

  <section class="p-8 mx-auto w-full sm:w-3/4 section-bg">
    <div class="flex justify-center mb-4">
      <h2 class="text-yellow-300 text-2xl">Contact</h2>
    </div>

    <ContactForm></ContactForm>

    <SocialIcons></SocialIcons>

    <div class="flex justify-center mt-16">
      <p class="text-yellow-300 text-xs">© 2014 - {{ year }} Dj Harry M. All rights reserved. | Designed by ZP</p>
    </div>
  </section>

</template>

<script>
import Logo from './components/Logo.vue'
import Hero from './components/Hero.vue'
import MixCloud from './components/MixCloud.vue'
import Masonry from './components/Masonry.vue'
import PhotoSection from './components/PhotoSection.vue'
import ContactForm from './components/ContactForm.vue'
import SocialIcons from './components/SocialIcons.vue'

import energyLogo from './assets/energymixradio.jpg'
import nakalLogo from './assets/nakal.jpg'

export default {
  name: 'App',
  components: {
    Logo,
    Hero,
    MixCloud,
    Masonry,
    PhotoSection,
    ContactForm,
    SocialIcons,
  },
  data() {
    return {
      energyLogo,
      nakalLogo
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
#app {
  @apply subpixel-antialiased pb-8;
  background-image: url('./assets/space-bg.jpg');
  background-repeat: repeat;
  background-position: center top;
}

.section-bg {
  background-image: url('./assets/mixcloud-bg.jpg');
  background-repeat: no-repeat;
  background-position: center top;
}

.button {
  @apply bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded;
}
</style>