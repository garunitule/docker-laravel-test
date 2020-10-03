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
            'http://localhost:8080/api/articles/2', 
        );
        console.log(data.data[0].id);
        setArticle(data.data[0]["content"]);
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
    console.log('test');
    ReactDOM.render(<ShowArticle />, document.getElementById('article'));
}
