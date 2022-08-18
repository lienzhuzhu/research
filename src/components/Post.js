import '../styles/post.css';

export default function Post(props) {
    return (
        <div className="post-card">
            <div className="title">
                <a href={props.link} target="_blank" rel="noreferrer">
                    {props.title}
                </a>
            </div>
            <div className="abstract">
                {props.abstract}
            </div>
            <div className="read-link">
                <a href={props.link} target="_blank" rel="noreferrer">
                    Read More &gt;&gt;
                </a>
            </div>
        </div>
    );
}