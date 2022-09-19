import { useState, useEffect } from 'react'
import {getUsers} from '../../service/user.service'
import {IUser} from '../modals/user.interface'

let temp: IUser[];
export default function Home() { 
    const [usersArray, setUsersArray] = useState(temp)
    useEffect(()=>{
        getUsers().then((users:IUser[])=>{setUsersArray(users)})
    },[])
    
    return ( 
        <table>
            <thead>
                {usersArray? 
                (Object.keys(usersArray[0]).map((key)=> 
                  <th>{key}</th>)
                ):(<th></th>)}
            </thead>
            <tbody>
                {usersArray?(
                    usersArray.map(user =>
                        <tr>{
                            Object.values(user).map((value,index)=>
                                typeof(value) != "object"?
                                <td key={index}>{value}</td> :
                                <td key={index}>{`${value.first}  ${value.last}`}</td>
                        )}</tr>)):
                    (<td></td>)}
            </tbody>
        </table>
     );
}
