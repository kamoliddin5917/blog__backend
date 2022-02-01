CREATE DATABASE blog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    user_firstname varchar(77) not null,
    user_lastname varchar(77) not null,
    user_email varchar(50) unique not null,
    user_password text not null,
    user_image text default null,
    user_date timestamp with time zone not null default current_timestamp,
    user_status boolean default true
);

CREATE TABLE blogs(
    blog_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    blog_title varchar(100) not null,
    blog_content text not null,
    blog_tags text [] not null,
    blog_date timestamp with time zone not null default current_timestamp,
    blog_status boolean default true,
    blog_author uuid not null,     
    CONSTRAINT fk_blog_author
        FOREIGN KEY(blog_author)
            REFERENCES users(user_id)
            ON DELETE CASCADE
);

CREATE TABLE comments(
    comment_id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    comment_content text not null,
    comment_date timestamp with time zone not null default current_timestamp,
    comment_status boolean default true,
    comment_author uuid not null,     
    comment_blog uuid not null,     
    CONSTRAINT fk_comment_author
        FOREIGN KEY(comment_author)
            REFERENCES users(user_id)
            ON DELETE CASCADE,
    CONSTRAINT fk_comment_blog
        FOREIGN KEY(comment_blog)
            REFERENCES blogs(blog_id)
            ON DELETE CASCADE
);