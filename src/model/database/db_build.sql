BEGIN; 

DROP TABLE IF EXISTS comment CASCADE;
DROP TABLE IF EXISTS post CASCADE;
DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT, 
    user_name VARCHAR(25) NOT NULL, 
    user_pass VARCHAR(100) NOT NULL, 
    user_date VARCHAR(20) NOT NULL
    );
INSERT INTO user (user_name, user_pass, user_date) 
VALUES ('foo', 'password123', '2019'), ('bar', 'password456', '2019');

CREATE TABLE post (
    post_id INT PRIMARY KEY AUTO_INCREMENT, 
    post_title VARCHAR(100) NOT NULL, 
    post_content TEXT NOT NULL, 
    user_id INT, 
    CONSTRAINT post_author FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE, 
    post_date VARCHAR(20) NOT NULL
    );
INSERT INTO post (post_title, post_content, user_id, post_date) 
VALUES ('Breaking News', 'MySQL sucks', (SELECT user_id FROM user WHERE user_name LIKE 'foo'), '2019');

CREATE TABLE comment (
    comment_id INT PRIMARY KEY AUTO_INCREMENT, 
    comment_content TEXT NOT NULL,
    user_id INT, CONSTRAINT comment_author FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE, 
    post_id INT, CONSTRAINT comment_parent FOREIGN KEY (post_id) REFERENCES post(post_id) ON DELETE CASCADE, 
    comment_date VARCHAR(20) NOT NULL
);
INSERT INTO comment (comment_content, user_id, post_id, comment_date) 
VALUES ('I know right?', (SELECT user_id FROM user WHERE user_name LIKE 'bar'), '1', '2019');

COMMIT;