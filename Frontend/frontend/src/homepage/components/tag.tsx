import {useContext, useState} from 'react';
import StyledTag from '../../stylecomponents/tag.tsx'

interface TagProps{
    tag: string;
}
const Tag: React.FC<TagProps> = ({tag}) => {
    return <StyledTag tag={tag}/>
}

export default Tag;
