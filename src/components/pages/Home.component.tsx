import {getUsers} from '../../service/user.service'
import {IUser} from '../moduls/user.interface'

export default function Home() { 

    // const[user,setUser] = useState()

    const Greeting = (num1:number,num2:number): string =>{
        return "Hello world"
    }
    const getUsersEmail = async(): Promise<any> =>{
        let UsersArr = await getUsers().then((result:IUser[]) => result)
        UsersArr.map(user =>{
            console.log(user.email)
        })
    }
    getUsersEmail()

    return ( 
        <div>
           
        </div>
     );
}
