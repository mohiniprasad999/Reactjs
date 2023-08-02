import React from 'react';

interface IBlockProps {
    value?: string | null
    onClick?: () => void
}
const Block: React.FC<IBlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className='block'>{props.value}</div>
    )
}

export default Block