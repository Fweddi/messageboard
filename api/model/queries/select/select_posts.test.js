const selectPosts = require('./select_posts');

test('selects posts from the database', () => {
    selectPosts()
        .then(res => expect(res).toHaveProperty('post_content'))
        .catch(err => console.error(err));
});