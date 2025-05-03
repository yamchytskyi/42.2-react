import "./styles.css";
import userAvatarFromAssets from "../../assets/avatar.avif"


const checkHobbies = (hobbies) => {
    if(!hobbies || !Array.isArray(hobbies)) {
        return null;
    }

    return (<div className="hobbies-list">
        <h3>Hobbies</h3>
        <ol>
        {hobbies.map((hobby, index) => (<li key={index}>{hobby}</li>))}
        </ol>
    </div>)
}

const checkFriends = (friends) => {
    if(!friends || !Array.isArray(friends)) {
        return null;
    }

    return (
        <table>
            <caption>Friends</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {friends.map((friend, index) => (
                <tr key={index}>
                    <td>{friend.name}</td>
                    <td>{friend.age}</td>
                    <td>{friend.country}</td>
                </tr>))}
            </tbody>
        </table>
    )
}

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <h2 className="title" id="title">
                <b>
                    <a href={props.websiteLink}
            target="_blank"
            rel="">{props.name}</a>
            </b>
            </h2>
            <span>{props.nickname}</span>
            <h3 className="profession"><i>{props.profession}</i></h3>
            <img className="avatar-img" src={props.avatarImg}
             alt={props.name + "'s avatar"} />
            {checkHobbies(props.hobbies)}
            {checkFriends(props.friends)}
            <a href="#title">To title</a>
        </div>
    )
}

export default ProfileCard;