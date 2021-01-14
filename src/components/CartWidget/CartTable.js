import React, { Fragment, useState } from "react";
import MaterialTable, { MTableAction } from "material-table";

export default function CartTable({cart, onRemoveFromCart}) {
const tableRef = React.createRef();
const addActionRef = React.useRef();

const tableColumns = [
    { title: "Nombre", field: "title" },
    { title: "Cant", field: "qty" },
    { title: "Precio Unitario", field: "price" },
    { title: "Precio Total", field: "total" }
];

const [tableData, setTableData] = useState(cart);

return (
    <Fragment>
    <MaterialTable
        tableRef={tableRef}
        columns={tableColumns}
        data={tableData}
        title="Lista de compras"
        options={{
        search: false
        }}
        components={{
        Action: (props) => {
            //If isn't the add action
            if (
            typeof props.action === typeof Function ||
            props.action.tooltip !== "Add"
            ) {
            return <MTableAction {...props} />;
            } else {
            return <div ref={addActionRef} onClick={props.action.onClick} />;
            }
        }
        }}
        actions={[
        {
            icon: "delete",
            tooltip: "Eliminar item",
            onClick: (event, rowData) => {
              console.log(rowData.id)  
              onRemoveFromCart(rowData.id)
            }
        }
        ]}
        editable={{
        onRowAdd: (newData) =>
            Promise.resolve(setTableData([...tableData, newData]))
        }}
    />
    </Fragment>
);
}