CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :) (have Karl run this in db when back)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR  NOT NULL,
    "category_id" INT REFERENCES "category" NOT NULL,
);

INSERT INTO "favorite" ("url", "category_id")
VALUES ('https://giphy.com/gifs/ufc-sports-sport-ufc-280-mma-efH7XxDUwCuIRcaLyD', 4)
