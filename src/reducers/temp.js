
import { rootReducer } from "./index";
import { createStore } from 'redux';


const store = createStore(rootReducer);
console.log(store.getState());


store.subscribe(() => {
    console.log(store.getState())
  }
);

​

store.dispatch({TYPE:'LOGIN'});


store.dispatch({
  TYPE:'SUBMIT_BASIC',
  values: {
    name: "沈骏"
  }
});
store.dispatch({
  TYPE:'SUBMIT_SKILL',
  values: {
    direction: "tech"
  }
});
store.dispatch({
  TYPE:'SUBMIT_EXPERIENCE',
  values: {
    educationRecords: [{
      school: 'NBU',
      degree: '1',
      duration: ['2013-09', '2017-06'],
      major: '数学与应用数学'
    }]
  }
});
store.dispatch({
  TYPE:'SUBMIT_SELF_INTRO',
  values: {
    content: '寻找实习中'
  }
});

store.dispatch({TYPE:'LOGOUT'});​

unsubscribe();