import React from 'react';
import MaterialTable from 'material-table';

function HistoryTable(props) {
  return (
    <MaterialTable
      title=""
      columns={[
        { title: 'Product', field: 'name' },
        { title: 'Cost', field: 'cost' },
        { title: 'Category', field: 'category' },
        { title: 'Date', field: 'createDate', type: 'datetime' },
      ]}
      data={props.datatable}
      style={{ boxShadow: 'none' }}
      options={{
        rowStyle: {
          backgroundColor: '#eeeeee',
        },
      }}
    />
  );
}

export default HistoryTable;
