import Card from "../UI/Card";

import classes from './UsersList.module.css'

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(u => {return(
                    <li key={u.id}>
                        {u.name} ({u.age} years old)
                    </li>
                )})}
            </ul>
        </Card>
    )
}

export default UsersList;