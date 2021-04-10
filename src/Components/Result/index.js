import React from 'react';

const Result = ({responses}) => {
    const count = responses.length;
    return (
        <div>
            you have {count} 
        </div>
    )
}

export default Result;
