BEGIN; 

DROP TABLE IF EXISTS comment CASCADE;
DROP TABLE IF EXISTS post CASCADE;
DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    user_name VARCHAR(25) NOT NULL, 
    user_pass VARCHAR(100) NOT NULL, 
    user_date VARCHAR(20) NOT NULL
    );
INSERT INTO user (user_name, user_pass, user_date) 
VALUES ('Donna', '$2b$10$hdVr/jqiPcryNOWJc/meP.ioJ437Q.mMjaTbrW/e2qg4zyHnpzA.i', '1566500115801'), ('Thomas', '$2b$10$hdVr/jqiPcryNOWJc/meP.ioJ437Q.mMjaTbrW/e2qg4zyHnpzA.i', '1566500115804');

CREATE TABLE post (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    post_title VARCHAR(30) NOT NULL, 
    post_content TEXT NOT NULL, 
    user_id INT NOT NULL, 
    CONSTRAINT post_author FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE, 
    post_date VARCHAR(20) NOT NULL
    );
INSERT INTO post (post_title, post_content, user_id, post_date) 
VALUES ('We are all cyborgs', 'Technology is not neutral. We"re inside of what we make, and it"s inside of us. We"re living in a world of connections — and it matters which ones get made and unmade.', (SELECT id FROM user WHERE user_name LIKE 'Donna'), '1566500398656'), ('We are all witty', 'Such is the nature of men, that howsoever they may acknowledge many others to be more witty, or more eloquent, or more learned - yet they will hardly believe there be many so wise as themselves.', (SELECT id FROM user WHERE user_name LIKE 'Thomas'), '1566500398659');
CREATE TABLE comment (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    comment_content TEXT NOT NULL,
    user_id INT NOT NULL, 
    CONSTRAINT comment_author FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE, 
    post_id INT NOT NULL, 
    CONSTRAINT comment_parent FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE, 
    comment_date VARCHAR(20) NOT NULL
);
INSERT INTO comment (comment_content, user_id, post_id, comment_date) 
VALUES ('I know right?', (SELECT id FROM user WHERE user_name LIKE 'Thomas'), '1', '1566500448843');

COMMIT;