import "./styles.css";
import {students} from "./data";

function StudentTable() {
    return (<table>
                <caption>Students</caption>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.grade}</td>
                    </tr>
            ))}
                </tbody>
            </table>)
}

export default StudentTable;