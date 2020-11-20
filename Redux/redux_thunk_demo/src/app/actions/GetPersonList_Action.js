import axios from 'axios';

//const ACTION_TYPE_GET_PERSON_LIST = "GET_PERSON_LIST";
const ACTION_TYPE_GET_PERSON_LIST_STARTED = "GET_PERSON_LIST_STARTED";
const ACTION_TYPE_GET_PERSON_LIST_SUCCESS = "GET_PERSON_LIST_SUCCESS";
const ACTION_TYPE_GET_PERSON_LIST_FAILURE = "GET_PERSON_LIST_FAILURE";


const ActionCreator_GetPersonList = (newPersonList) => {

    console.log('call action creator: ActionCreator_GetPersonList');

    // let userList = axios.get('https://jsonplaceholder.typicode.com/users')
    // //.then(res => console.log(res.data));
    // .then(res => Object.entries(res.data))
    // .then(res => console.log(res));

    // .then(json => {
    //     console.log(json);
    //     }
    // );

    //console.log(userList);

    return (
        {
            type: ACTION_TYPE_GET_PERSON_LIST_SUCCESS,
            personList: newPersonList,
            //personlist: [...userList]
        }
    );
}


const ActionCreator_GetPersonListFromApi = () => {

    console.log('call action creator: ActionCreator_GetPersonList');

    

    return (
        (dispatch, getState) => {

            dispatch(getPersonListStarted());

            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => Object.entries(res.data))
            .then(res => {
 
                    dispatch(getPersonListSuccess(res));

                }
            )
            .catch(error => {
                dispatch(getPersonListFailure(error.message));
            })
        }
    )

}

const getPersonListSuccess = (arr) => ({
    type: ACTION_TYPE_GET_PERSON_LIST_SUCCESS,
    personList: [...arr]
  });
  
  const getPersonListStarted = () => ({
    type: ACTION_TYPE_GET_PERSON_LIST_STARTED
  });
  
  const getPersonListFailure = (error) => ({
    type: ACTION_TYPE_GET_PERSON_LIST_FAILURE,
    payload: {
      error
    }
  });

export { ActionCreator_GetPersonList, ActionCreator_GetPersonListFromApi, ACTION_TYPE_GET_PERSON_LIST_SUCCESS };
