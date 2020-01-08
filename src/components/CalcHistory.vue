<template>
  <div class="mt-16">
    <div class="md:flex md:justify-end mx-4 mt-6">
      
    </div>
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