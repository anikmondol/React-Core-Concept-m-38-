// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }


// condition rendering option 1:
// export default function Todo({ task, isDone }) {
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Work on: {task}</li>
//     }
// }


export default function Todo({task, isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task}</li>
}