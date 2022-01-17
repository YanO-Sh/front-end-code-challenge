import React, { useEffect, useRef, useState } from 'react';
import styles from './Status.module.scss';

const Status = () => {
    const [data, setData] = useState(null);
    const ws = useRef(null);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    useEffect(() => {
        ws.current = new WebSocket(process.env.WS_URL);
        ws.current.onopen = (event) => {
            ws.current.send(JSON.stringify());
        };
        ws.current.onmessage = function (event) {
            const json = JSON.parse(event.data);
            setData(json)
        };
        //clean up function
        return () => ws.current.close();
    }, []);

    if(!data) return null;

    return (
        <div className={styles.status_wrap}>
            <h3>Server Status</h3>
            <div className={styles.status} style={{color: `#${randomColor}`}}>
                {data}
            </div>
        </div>
    );
};

export default Status;
