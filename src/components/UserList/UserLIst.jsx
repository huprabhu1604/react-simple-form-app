import userListStyles from './UserList.module.css';
import Card from '../Card/Card';

const UserList = (props) => {
    return (
        <Card className={userListStyles.users}>
            <ul>
                {
                    props.userDetails.map(userDetail => (
                            <li key={userDetail.id}>
                                {`${userDetail.name} (${userDetail.age} years old)`}
                            </li>
                        )
                    )
                }
            </ul>
        </Card>
    )
}

export default UserList;