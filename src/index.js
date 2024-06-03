
import configureStore from "./store/configureStore"
import createReducer from "./store/bugs"
import {bugAdded , getUnresolvedBugSelector , getBugAssignedToUser , bugAssignedToUser} from "./store/bugs"
import {projectAdded}from "./store/projects"
import { addUser } from "./store/users"
import { getAssignedUserSelector } from "./store/users"

const store = configureStore()


store.dispatch((dispatch , getState)=>{
    dispatch({type:"error" , payload : { massage: "an error occurred."}})
    console.log(getState());
})



// store.dispatch(bugAdded({description:true}))
// store.dispatch(bugAdded({description:false}))
// store.dispatch(bugAdded({description:false}))


// store.dispatch(projectAdded({name:"maman"}))
// store.dispatch(projectAdded({name:"baba"}))
// store.dispatch(projectAdded({name:"dadash"}))

// store.dispatch(addUser({name:"maman" , assigned:true}))
// store.dispatch(addUser({name:"baba",assigned:true}))
// store.dispatch(addUser({name:"dadash",assigned:true}))

// store.dispatch(bugAssignedToUser({ bugId : 1 , userId : 1  }));

// console.log(store.getState());

// const unresolved = getUnresolvedBugSelector(store.getState())
// const assigned = getAssignedBugSelector(store.getState())
// const BugAssigned = getBugAssignedToUser(1)(store.getState())
// console.log(BugAssigned);
