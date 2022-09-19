import {IUser} from '../components/modals/user.interface'
const UsersApi: string = "https://my-json-server.typicode.com/Jeck99/fake-server/users" 
export const getUsers =async ():Promise<any> => {
    try{
        return await fetch(UsersApi)
        .then((res:Response) => res.json())
        // .then((result:IUser[]) => result)

    }catch(error){console.error(error)};
}