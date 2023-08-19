import Link  from "next/link";
import { Fragment } from "react";
// our-domain.com/news

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framwork">
                    NextJs Is a Great Freamwork;
                    </Link>
                    </li>
                <li>something else</li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;