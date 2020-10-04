import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
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
        setArticle(data.data.content);
    };

    useEffect(() => {
        getArticle();
    },[])

    return (
        <ReactMarkdown source={article} />
    );
};

export default ShowArticle;
if (document.getElementById('article')) {
    ReactDOM.render(<ShowArticle />, document.getElementById('article'));
}
