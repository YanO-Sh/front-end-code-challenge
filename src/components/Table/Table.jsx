import React from 'react';
import styles from './Table.module.scss';
import TableRow from '../TableRow';

const Table = ({people}) => {

    const tableHeaders = ['First Name', 'Last Name', 'Gender', 'Email', 'IP Address'];

    return (
        <div className={styles.table}>
            <div className={styles.table_header}>
                { tableHeaders.map((header, index) => <div key={index}>{ header }</div>) }
            </div>
            <div className={styles.table_body}>
                { people.map(person => <TableRow className={styles.table_row} key={person.id} data={person} />) }
            </div>
        </div>
    );
};

export default Table;
