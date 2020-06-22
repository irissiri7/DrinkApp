import React from 'react';
import {StyledLink404Page} from '../../Styles/PageNotFoundStyles'


const PageNotFound = ({page}) => {
    return (
        <div>
            <h1>404 -  Page not Found</h1>
            <StyledLink404Page to={page}>Go back</StyledLink404Page>
        </div>
    )
}

PageNotFound.defaultProps = {
    page: '/'
}

export default PageNotFound;