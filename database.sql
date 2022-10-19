create database feedback_data;

create table feedbacks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message VARCHAR(255)
);