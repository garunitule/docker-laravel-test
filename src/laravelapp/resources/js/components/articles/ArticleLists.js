import React, {useState, useEffect} from 'react';
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

const ArticleLists = () => {
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

export default ArticleLists;
