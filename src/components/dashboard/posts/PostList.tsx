import * as React from 'react';
import './PostList.css';

type PostListProps = {}

export const PostList = (props: PostListProps) => (
    <h1>Post List</h1>
);

/*
export class PostsComponent implements OnInit {
    private static _currentPage = 1;
    private readonly _numberOfItemsPerPage = 2;
    posts = new Array<IPost>();
    isLoading = true;
    isPaginatable = false;
    constructor(private readonly _postService: PostService) { }

    onLoadmore() {
        ++PostsComponent._currentPage;

        this._postService.getPagedPosts(PostsComponent._currentPage, this._numberOfItemsPerPage)
            .subscribe(p => this.posts.push(p),
                _ => _,
                () => this.isLoading = false);
    }

    async ngOnInit() {
        this.isPaginatable = await this._postService.isPaginatableAsync(this._numberOfItemsPerPage);

        this._postService.getPagedPosts(1, this._numberOfItemsPerPage)
            .subscribe(p => this.posts.push(p),
                _ => _,
                () => this.isLoading = false);
    }
}
*/

