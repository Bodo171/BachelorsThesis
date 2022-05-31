import {useContext, useState} from 'react';

interface TagProps{
    tag: string;
}
const Tag: React.FC<TagProps> = ({tag}) => {
    return <div className="tag">
        {tag}
    </div>
}

export default Tag;
