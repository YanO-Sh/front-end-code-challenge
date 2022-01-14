import React, { useState } from 'react';
import styles from './Status.module.scss';
import { WebSocket } from 'nextjs-websocket'

const Status = () => {

    const [data, setData] = useState('');

    function handleData(data) {
        let result = JSON.parse(data)
        setData(result)
    }

    return (
        <div className={styles.status}>
            {data}
            <WebSocket
                url={ process.env.WS_URL }
                onMessage={data => handleData(data)}
                onOpen={console.log('open')}
                onClose={console.log('close')}
                debug={true}
                reconnect={true}
            />
        </div>
    );
};

export default Status;
