import "./styles.css";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import StudentTable from "../../../components/StudentTable/StudentTable";
import {leonNoel} from "./data";

function Homework02() {
    return (
        <div className="homework01-wrapper">
            <ProfileCard {...leonNoel}/>
            <StudentTable />
        </div>
    )
}

export default Homework02;