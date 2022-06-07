
const tagToColor = {
    dp: 'orange',
    greedy: 'lightpurple',
    sortings: 'lightgreen',
    math: 'lightyellow'
}

const StyledTag = ({tag}) =>{
    var color = tagToColor[tag] || 'lightgray';
    console.log(color);
    return <div className="tag" style={{backgroundColor: color}}>
        {tag}
    </div>
}

export default StyledTag;