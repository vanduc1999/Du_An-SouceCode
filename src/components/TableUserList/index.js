
const TableUserList = (props) => {
    // console.log(props.users)
    return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Ten</th>
                    <th>Email</th>

                </tr>
                {props.users.map((item) => {
                    return (
                        <tr>
                            <td> {item.id}</td>
                            <td> {item.name}</td>
                            <td> {item.email}</td>
                            <td>
                                <button onClick={(e) => {
                                    props.onEdit(item)
                                }}>Edit</button>

                                <button onClick={(e) => {
                                    props.onDelete(item)
                                }}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
    )
}

export default TableUserList;
