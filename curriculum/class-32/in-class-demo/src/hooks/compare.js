handleSubmit = event => {
  event.preventDefault();
  const { title, goal } = this.state;
  this.setState(state => ({
    habits: [...state.habits, { title, goal: Number(goal), progress: 0 }]
  }));
}

const handleSubmit = event => {
  event.preventDefault();
  const { title, goal } = formState;
  dispatch({
    type: CREATE_HABIT,
    payload: { title, goal, progress: 0 }
  });
};
