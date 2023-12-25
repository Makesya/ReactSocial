import css from './News.module.css'
const News = (props) => {
    return (
        <div>
            <p>News page - {props.message}</p>
        </div>
    )
}
export default News;