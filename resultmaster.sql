--
-- File generated with SQLiteStudio v3.2.1 on Thu Oct 17 07:18:57 2019
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: profile
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    regNumber  INTEGER     PRIMARY KEY
                           UNIQUE
                           NOT NULL,
    firstName  TEXT (45)   NOT NULL,
    surName    TEXT (45)   NOT NULL,
    otherName  TEXT (45),
    category   STRING (60) NOT NULL,
    classLevel STRING (25) NOT NULL
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
