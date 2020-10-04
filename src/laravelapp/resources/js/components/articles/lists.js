import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';    

const RenderRows = ({articles}) => {
    return articles.map(article => {
        return (
            <tr key={article.id}>
                <td><a href={`http://localhost:8080/api/articles/${article.id}`}>{article.title}</a></td>
                <td>{article.updated_at}</td>
            </tr>
        );
    });
};

const Articles = () => {
    const [articles, setArticles] = useState([
        {
            'id': 1,
            'title': '',
            'updated_at': '',
        }
    ]);

    const getArticles = async () => {
        const data = await axios.get(
            'http://localhost:8080/api/articles'
        );
        setArticles(data.data);
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">タイトル</th>
                    <th scope="col">最終更新日</th>
                </tr>
            </thead>
            <tbody>
                <RenderRows articles={articles} />
            </tbody>
        </table>
    );
};

export default Articles;
if (document.getElementById('articles')) {
    ReactDOM.render(<Articles />, document.getElementById('articles'));
}
