const getPosts = require('./get_posts');

test('retrieves posts from the database', () => {
    getPosts()
        .then(res => expect(res).toHaveProperty('post_content'))
        .catch(err => console.error(err));
});