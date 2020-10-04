import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <React.Fragment>
            <a href="/articles">記事一覧</a>
            <hr />
        </React.Fragment>
    );
};

export default Header;
if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
