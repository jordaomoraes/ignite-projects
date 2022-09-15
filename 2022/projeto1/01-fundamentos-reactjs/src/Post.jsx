export function Post(props) {
    return <>
        <strong><p>{props.autor}</p></strong>
        <p>{props.content}</p>
    </>
}

export default Post