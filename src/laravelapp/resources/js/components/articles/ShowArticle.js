import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

// TODO idをpropとして持つようにする
// idは一覧表示コンポーネントから渡すようにする
const ShowArticle = () => {
    const [article, setArticle] = useState('');

    const getArticle = async () => {
        const data = await axios.get(
            'http://localhost:8080/api/articles/3'
        );
        setArticle(data.data);
    };

    useEffect(() => {
        getArticle();
    },[])

    return (
        <React.Fragment>
            <p>最終投稿日：{article.updated_at}</p>
            <hr />
            <h1>{article.title}</h1>
            <hr />
             <ReactMarkdown source={article.content} />
        </React.Fragment>
    );
};

export default ShowArticle;
