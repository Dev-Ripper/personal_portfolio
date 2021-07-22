DROP DATABASE IF EXISTS portfolio;
CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE `admin` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `projects` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `languages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `project_language` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `project_id` INT NOT NULL,
    `language_id` INT NOT NULL,
    PRIMARY KEY (`id`),
        CONSTRAINT `fk_project_id` FOREIGN KEY (`project_id`) REFERENCES projects(id),
        CONSTRAINT `fk_language_id` FOREIGN KEY (`language_id`) REFERENCES languages(id)
);

INSERT INTO languages(id, name) VALUES(1,'React');
INSERT INTO projects(id, title, description, link, image_url) VALUES(1, 'WildPost', 'Le WildPost est un journal lié à la Wild Code School de Reims.', 'https://dthomas51.github.io/WildPostV2/', 'https://imgur.com/Clel6Bn');
INSERT INTO project_language(id, project_id, language_id) VALUES(1, 1, 1);
SELECT * FROM projects INNER JOIN project_language on projects.id = project_language.project_id INNER JOIN languages on project_language.language_id = languages.id;