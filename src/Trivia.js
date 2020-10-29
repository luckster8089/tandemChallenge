import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Trivia() {
    const history = useHistory();

    return (
        <div>
            <h2>Are You Ready For Tandem Trivia?</h2>
            <Button variant="contained" color="primary" onClick={() => history.push('/tandemTrivia')}>
                Yes
            </Button>
            <Button variant="contained" color="secondary">
                No
            </Button>
        </div>
    )
}
