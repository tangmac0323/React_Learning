// import React from "react";

// import axios from "axios";

// import { useState, useEffect } from 'react';

// const PersonList = () => {

//     const [persons, setPerson] = useState([]);

//   useEffect(() => {
//     // component did mount
//     axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//       const persons = res.data;
//       setPerson(persons);
//     });

//     // Component will unmount
//     return () => {
//       //
//     };
//   }, []);

//   return (
//     <ul>
//       {persons.map((person) => (
//         <li>{person.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default PersonList;

import React from "react";
//import axios from 'axios';
import { connect } from "react-redux";
import { ActionCreator_GetPersonList, ActionCreator_GetPersonListFromApi } from "../app/actions/GetPersonList_Action";

// const PersonList = ({personList, getPersonList}) => {

//     //getPersonList();
//     console.log(personList);

//     return(
//         <div>
//             {personList}
//         </div>
//     )

// }

class PersonList extends React.Component {
  // state = {
  //     personList: []
  // }

  componentDidMount() {
    
    console.log("COMPONENT DID MOUNT");
    this.props.getPersonList();

    //console.log(this.props);
  }

  componentDidUpdate(){
      console.log(this.props.personList);
      
  }

  render() {
    return (
      <div>
        {this.props.personList.map((person) => {
          return (
            <div key={person}>
            {person[1].username}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state.GetPersonList_Reducer.personList);

//console.log('mapStateToProps: \n\t- State:');
//console.log(state.GetPersonList_Reducer);

  return ({
    personList: state.GetPersonList_Reducer.personList,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonList: () => {
      //return dispatch(ActionCreator_GetPersonList());
      return dispatch(ActionCreator_GetPersonListFromApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
