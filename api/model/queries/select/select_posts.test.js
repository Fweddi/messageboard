const selectPosts = require('./select_posts');

test('selects posts from the database', () => {
    selectPosts()
        .then(res => Array.isArray(res) ? expect(res[0]).toHaveProperty('post_content') : expect(res).toHaveProperty('post_content'))
        .catch(err => console.error(err));
});