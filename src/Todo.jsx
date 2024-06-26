// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }


// // condition rendering option 1:
// export default function Todo({ task, isDone }) {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Work on: {task}</li>
//     }
// }


// condition rendering option 2:
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }


// condition rendering option: 3, ternary operator
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? "Finished" : "Work on"}: {task}</li>
//     )
// }


// conditional rendering option 4: &&
// export default function Todo({task, isDone}){
//     return (
//         <li>{task}: {isDone && ': Done'} </li>
//     )
// }


// conditional rendering option 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task}: {isDone || ': work on'}</li>
//     )
// }


// conditional rendering option 6
export default function Todo({task, isDone}){
    let item;
    if(isDone){
        item = <li>Task: {task}</li>
    }else{
        item = <li>work on: {task}</li>
    }
    return item;
}