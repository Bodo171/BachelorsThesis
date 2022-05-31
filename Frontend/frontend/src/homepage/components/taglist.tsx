import {useContext, useState} from 'react';
import Tag from './tag.tsx';

interface TagListProps{
    tags: string[];
}

const TagList: React.FC<TagListProps> = ({tags}) => {
    let a = tags;
    return <div className="tagList">{
            tags.map(
                tag => <Tag tag={tag}/>
            )
        }
    </div>;
}

export default TagList;
