import { ACTION_TYPE_GET_PERSON_LIST_SUCCESS } from '../actions/GetPersonList_Action';

const initialState = {
  personList: [],
};

const GetPersonList_Reducer = (state = initialState, action) => {
  const newState = { ...state };

  //console.log('Old State: ' + JSON.stringify(newState));

  //console.log(newState);

  //console.log("Action Type: " + action.type);
  //console.log(action);

  switch (action.type) {
    case ACTION_TYPE_GET_PERSON_LIST_SUCCESS:

      console.log('switch to action type: ACTION_TYPE_GET_PERSON_LIST_SUCCESS');

      //console.log(action.personList);

      newState.personList = [...action.personList];

      //console.log(newState);
      
      break;

    default:

      console.log('switch to action type: DEFAULT');

      //console.log(newState);

      return newState;
  }


  //console.log('New State: ' + JSON.stringify(newState));
  console.log(newState);

  return newState;
};

export default GetPersonList_Reducer;
