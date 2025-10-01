# mongo-schoolDb

A simple Node.js + MongoDB school database demo using Mongoose ODM. This project demonstrates basic CRUD operations, data seeding, and schema modeling for students, teachers, subjects, and departments.

## Features

- **Mongoose ODM** for MongoDB schema modeling
- **CRUD operations** for all entities
- **Data seeding** for quick setup
- **Environment variable support** via `.env`
- Modular schema definitions

## Folder Structure

```
.env
.gitignore
aggregate.js
config.js
crud.js
package.json
seed.js
models/
  departments.js
  students.js
  subjects.js
  teachers.js
```

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/khaif-dev/mongo-schoolDb.git
   cd mongo-schoolDb
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure MongoDB connection**
   - Create a `.env` file in the root directory:
     ```
     MONGODB_URL=mongodb://localhost:27017/schoolDB
     ```
   - Replace the URL with your MongoDB connection string if needed.

## Usage

### 1. Seed the Database

Populate the database with sample data:

```sh
node seed.js
```

### 2. Run CRUD Operations

Perform basic create, read, update, and delete operations:

```sh
node crud.js
```

### 3. Aggregation (Custom)

You can implement aggregation queries in [`aggregate.js`](aggregate.js).

## Models

- **Student** ([models/students.js](models/students.js)): Name, Date of Birth, Gender
- **Teacher** ([models/teachers.js](models/teachers.js)): Name, Gender
- **Subject** ([models/subjects.js](models/subjects.js)): Name
- **Department** ([models/departments.js](models/departments.js)): Name

## Scripts

- [`seed.js`](seed.js): Clears and populates all collections.
- [`crud.js`](crud.js): Demonstrates CRUD operations.
- [`config.js`](config.js): Handles DB connection.

## Environment

- Node.js
- MongoDB (local or remote)
- Mongoose
- dotenv

## License

ISC

---

**Author:** khaif-dev
