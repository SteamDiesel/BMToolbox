<template>
  <div class="mt-16">
    <button class="bg-gray-300 hover:bg-blue-200 p-2 shadow-lg rounded-full">
        <svg class="h-10 w-10" viewBox="0 0 24 24">
            <path class="primary" d="M6.55 6.14l1.16 1.15A1 1 0 0 1 7 9H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1.7-.7l1.44 1.42A10 10 0 1 1 2 12a1 1 0 0 1 2 0 8 8 0 1 0 2.55-5.86z"/>
        <path class="secondary" d="M15.7 14.3a1 1 0 0 1-1.4 1.4l-3-3a1 1 0 0 1-.3-.7V7a1 1 0 0 1 2 0v4.59l2.7 2.7z"/>
        </svg>
    </button>
      <HistoryCard v-for="card in loan_calc_history" :key="card.index" :card="card" />
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import HistoryCard from "@/components/HistoryCard.vue";
export default {
  name: "CalculatorHistory",
  components: {
    HistoryCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["loan_calc_history"])
  }
};
</script>

<style>
</style>