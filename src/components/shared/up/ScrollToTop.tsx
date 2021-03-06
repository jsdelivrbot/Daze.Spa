import * as React from 'react';
import './ScrollToTop.css';

type ScrollToTopProps = Readonly<{
}>;

const onUpClick = () => {
    window.scroll(0, 0);
};

export const ScrollToTop = (props: ScrollToTopProps) => (
    <a className="up" onClick={onUpClick}>
        <i className="fa fa-angle-up back-top ba-back-top" title="Back to Top" />
    </a>
);
