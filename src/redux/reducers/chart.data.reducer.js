const chartDataReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CHART_DATA':
        return action.payload;
      case 'UNSET_CHART_DATA':
        return [];
      default:
        return state;
    }
  };

export default chartDataReducer;