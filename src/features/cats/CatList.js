// write your CatList component here
function CatList({ catPics }){
    const catImgs = catPics.map(catPic => <img alt="cat" src={catPic.url}/>)
    return (
        <div>
            {catImgs}
        </div>
    )
}

export default CatList;