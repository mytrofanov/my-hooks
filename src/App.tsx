import React from 'react';
import { Col, Input, Row, Tag, Typography } from 'antd';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [state, setState] = useLocalStorage('name', 'max');

    const handleChangeInput = (sampleString: string) => {
        setState(sampleString);
    };

    return (
        <Row>
            <Col offset={1} span={6}>
                <Input
                    placeholder="sample text"
                    value={state}
                    onChange={event => {
                        handleChangeInput(event.target.value);
                    }}
                />
            </Col>
            <Col offset={1} span={2} style={{ textAlign: 'right' }}>
                <Tag color="green">State:</Tag>
            </Col>
            <Col span={5}>
                <Typography.Text type="secondary">{state}</Typography.Text>
            </Col>
        </Row>
    );
}

export default App;
