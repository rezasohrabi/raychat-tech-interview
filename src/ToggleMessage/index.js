import React, { useState } from 'react';

const ToggleMessage = props => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <a href='#' onClick={handleToggle} >toggle message</a>
            {open && <p>this is paragraph</p>}
        </>
    )
}

export default ToggleMessage;