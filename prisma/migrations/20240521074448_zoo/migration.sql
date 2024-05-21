-- CreateTable
CREATE TABLE "Zoo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Department" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "zooId" INTEGER NOT NULL,
    CONSTRAINT "Department_zooId_fkey" FOREIGN KEY ("zooId") REFERENCES "Zoo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    CONSTRAINT "Animal_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "zooId" INTEGER NOT NULL,
    CONSTRAINT "Employee_zooId_fkey" FOREIGN KEY ("zooId") REFERENCES "Zoo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
