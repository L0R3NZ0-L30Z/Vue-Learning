const app = Vue.createApp({
  data() {
    return {

      enteredGoalValue: '',
      goals: [],
      goalsTime: []
    };
  },
  methods: {
    addGoal() {
      if(this.enteredGoalValue.length > 0 & this.enteredGoalValue.length < 20){
        const varc = this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = '';
        return enteredGoalValue;}
    },
  removeG(indx) {
    this.goals.splice(indx, 1);
  },
  localTime(indx) {
    return this.goalsTime[indx].toLocaleTimeString();
  },
  
  },
});

app.mount('#user-goals');
