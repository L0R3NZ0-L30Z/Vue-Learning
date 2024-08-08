const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      return this.goals.push(this.enteredGoalValue);
    }
  },
  removeG(indx) {
    this.goals.splice(indx, 1);
  }
});

app.mount('#user-goals');
