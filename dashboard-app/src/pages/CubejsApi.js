import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';

const cubejsApi = cubejs(
    'YOUR-CUBEJS-API-TOKEN',
    { apiUrl: 'http://localhost:4000/cubejs-api/v1' }, []
);

// const cubejsApi = cubejs(`http://localhost:4000/cubejs-api/v1`);

export default () => {
    return (
        <QueryRenderer
            query={{
                measures: ['Stories.count'],
                dimensions: ['Stories.time.month']
            }}
            cubejsApi={cubejsApi}
            render={({ resultSet }) => {
                if (!resultSet) {
                    return 'cannot get data from api';
                }

                return (
                    <LineChart data={resultSet.rawData()}>
                        <XAxis dataKey="Stories.time" />
                        <YAxis />
                        <Line type="monotone" dataKey="Stories.count" stroke="#8884d8" />
                    </LineChart>
                );
            }}
        />
    )
}