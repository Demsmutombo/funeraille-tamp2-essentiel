<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 md:p-8">
    <!-- Navigation Bar -->
    <nav class="w-full max-w-2xl md:max-w-4xl mb-4 md:mb-8 pt-4 pb-2 border-b border-amber-200 border-opacity-30">
      <ul class="flex justify-center space-x-6 md:space-x-8 text-gray-300 text-sm md:text-base">
        <li>
          <router-link 
            to="/" 
            class="hover:text-amber-200 transition-colors"
          >
            Accueil
          </router-link>
        </li>
        <li>
          <router-link 
            to="/galerie" 
            class="hover:text-amber-200 transition-colors"
          >
            Galerie
          </router-link>
        </li>
        <li>
          <router-link 
            to="/informations-obeques" 
            class="hover:text-amber-200 transition-colors"
          >
            Obsèques
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="relative w-full max-w-2xl md:max-w-4xl bg-black text-white flex-1 flex items-center justify-center min-h-[60vh]">
      <!-- Decorative L-lines -->
      <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200 opacity-60"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200 opacity-60"></div>

      <!-- Floral Elements - Top Right -->
      <div class="absolute top-0 right-0 opacity-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 20 Q90 30, 85 40 Q95 50, 90 60" stroke="#D4AF37" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M85 40 Q75 35, 80 30 Q85 25, 90 30" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
          <circle cx="85" cy="40" r="4" fill="#FCD34D" opacity="0.8"/>
          <circle cx="85" cy="40" r="2.5" fill="#D4AF37"/>
          <circle cx="90" cy="60" r="3.5" fill="#FCD34D" opacity="0.8"/>
          <circle cx="90" cy="60" r="2" fill="#D4AF37"/>
        </svg>
      </div>

      <!-- Floral Elements - Bottom Left -->
      <div class="absolute bottom-0 left-0 opacity-40 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 120 Q30 110, 35 115 Q40 100, 50 105 Q45 90, 55 95 Q60 85, 65 90" 
                stroke="#D4AF37" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <circle cx="35" cy="115" r="5" fill="#FCD34D" opacity="0.8"/>
          <circle cx="35" cy="115" r="3" fill="#D4AF37"/>
          <circle cx="50" cy="105" r="4" fill="#FCD34D" opacity="0.8"/>
          <circle cx="50" cy="105" r="2.5" fill="#D4AF37"/>
        </svg>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 px-4 md:px-8 py-8 md:py-12 text-center w-full">
        <!-- REST IN PEACE -->
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-serif text-amber-200 mb-6 md:mb-8 tracking-wide" style="font-family: 'Times New Roman', serif;">
          REPOSE EN PAIX
        </h1>

        <!-- Circular Photo -->
        <div class="flex justify-center mb-6 md:mb-8">
          <div class="relative">
            <img 
              :src="data.photos.mainPhoto" 
              :alt="data.personalInfo.fullName" 
              class="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-amber-200 object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        </div>

        <!-- Name -->
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-3 md:mb-4 tracking-wide" style="font-family: 'Times New Roman', serif;">
          {{ data.personalInfo.fullName.toUpperCase() }}
        </h2>

        <!-- Dates -->
        <p class="text-gray-300 text-sm md:text-lg lg:text-xl mb-8 md:mb-12 font-light tracking-wide">
          {{ formatDate(data.personalInfo.birthDate) }} - {{ formatDate(data.personalInfo.deathDate) }}
        </p>

        <!-- Eulogy Message -->
        <div class="text-amber-200 text-sm md:text-base lg:text-lg leading-relaxed font-light space-y-2 max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <p>Que ton âme trouve la paix éternelle et le réconfort.</p>
          <p>Repose en paix, cher Henock. Tu nous manqueras</p>
          <p>profondément.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { memorialData, formatDate } from '../data/memorialData.js'

const data = memorialData
</script>

<style scoped>
/* Assure que le fond est vraiment noir */
.bg-black {
  background-color: #000000;
}
</style>

