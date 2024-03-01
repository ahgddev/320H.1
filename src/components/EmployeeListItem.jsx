export default function EmployeeListItem (props) {
    return <li>
        {props.employee.name}
        <br />
        {props.employee.job}
    </li>
}