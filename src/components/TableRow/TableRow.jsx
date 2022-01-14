import React from 'react';

const TableRow = ({ data, className }) => {

    const { first_name, last_name, email, gender, ip_address } = data;

    return (
        <div className={className}>
            <div>{ first_name }</div>
            <div>{ last_name }</div>
            <div>{ email }</div>
            <div>{ gender }</div>
            <div>{ ip_address }</div>
        </div>
    );
};

export default TableRow;
