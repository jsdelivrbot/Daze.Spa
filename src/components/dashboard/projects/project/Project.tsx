import * as React from 'react';
import './Project.css';

type ProjectProps = Readonly<{
    name: string
    description: string
    url: string
    publishedYear: number
}>;

export const Project = (props: ProjectProps) => (
    <div className="project-template" >
        <div className="project-header">
            <a
                className="blogLink"
                href={props.url}
                target="_blank"
                rel="noopener"
            >
                {props.name}
            </a>
            <span className="published-date">
                {props.publishedYear}
            </span>
        </div>

        <div className="project-body">
            {props.description}
        </div>
    </div>
);
