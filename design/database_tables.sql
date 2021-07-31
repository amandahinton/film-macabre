CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "firstName" varchar,
  "lastName" varchar,
  "email" varchar,
  "age" integer,
  "password" varchar,
  "bio" text,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "year" integer,
  "description" text,
  "director" varchar,
  "cover" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "tags" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "movies_tags" (
  "id" SERIAL PRIMARY KEY,
  "movieId" integer,
  "tagId" integer,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "shelves" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "userId" integer,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "movies_shelves" (
  "id" SERIAL PRIMARY KEY,
  "shelfId" integer,
  "movieId" integer,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "body" text,
  "rating" integer,
  "userId" integer,
  "movieId" integer,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

ALTER TABLE "movies_tags" ADD FOREIGN KEY ("movieId") REFERENCES "movies" ("id");

ALTER TABLE "movies_tags" ADD FOREIGN KEY ("tagId") REFERENCES "tags" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("movieId") REFERENCES "movies" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "shelves" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "movies_shelves" ADD FOREIGN KEY ("shelfId") REFERENCES "shelves" ("id");

ALTER TABLE "movies_shelves" ADD FOREIGN KEY ("movieId") REFERENCES "movies" ("id");
