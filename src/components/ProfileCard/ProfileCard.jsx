import "./styles.css";
import userAvatarFromAssets from "../../assets/avatar.avif"

function ProfileCard() {
    const userAvatarFromNet = "https://media.licdn.com/dms/image/v2/C5603AQGTEADjq7JUAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517739186258?e=2147483647&v=beta&t=iQ4qZgVssW7unoaHOjLKZFmhAKmwPvQ4TAiNQ6rI9U0";
    return (
        <div className="profile-card">
            <h2 className="title" id="title"><b><a href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/ul"
            target="_blank"
            rel="">Leon Noel</a></b></h2>
            <span>Nomad Programmer</span>
            <h3 className="profession"><i>Frontend-Developer</i></h3>
            <img className="avatar-img" src={userAvatarFromAssets}
             alt="Leon Noel Avatar" />
            <h3>Hobbies</h3>
            <ul>
                <li><a href="https://eguitarplans.com/" target="_self">E-Guitare</a></li>
                <li>Miniature</li>
                <li>News</li>
                <li>Sport</li>
            </ul>
            <table>
                <caption>Friends</caption>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Country</td>
                </tr>
                <tr>
                    <td>Lisa</td>
                    <td>22</td>
                    <td>Us</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>33</td>
                    <td>Germany</td>
                </tr>
            </table>
            <a href="#title">To title</a>
        </div>
    )
}

export default ProfileCard;