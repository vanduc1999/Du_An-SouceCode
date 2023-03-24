import { Table } from "antd";
import { Actions, ButtonAction } from './styles'

const TableCountry = (props) => {
    const columns = [
        {
            name: "City",
            dataIndex: "title",
            key: "title",
            width: "15%"
        },
        {
            contry: "country",
            dataIndex: "author",
            key: "author",
            width: "15%"
        },
        {
            countryCode: "Ma quoc gia",
            dataIndex: "description",
            key: "description",
        },
        {
            countryFlag: "Quoc ky",
            dataIndex: "page",
            key: "page",
            width: "10%"
        },
        {
            population: "Dan so",
            dataIndex: "type",
            key: "type",
            width: "10%"
        },
        
        {
            title: " ",
            dataIndex: "actions",
            width: "20%",
            render: (text, item) => {
                return (
                    <Actions>
                        <ButtonAction
                            disabled={props.itemLoading}
                            onClick={() => {
                                props.onEdit(item.id);
                            }}
                        >
                            Edit
                        </ButtonAction>
                        <ButtonAction
                            disabled={props.itemLoading}
                            onClick={() => {
                                props.onDelete(item.id);
                            }}
                        >
                            Delete
                        </ButtonAction>
                    </Actions>
                );
            },
        },
    ];

    return <Table loading={props.loading} dataSource={props.dataSource} columns={columns} />;
};

export default TableCountry;
