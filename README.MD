## 🚀 Course Management API

## Made by:

- **👤 [Mark Gilbert Reginio](https://www.facebook.com/Endzy.ML.1?mibextid=LQQJ4d)**

## 💬 About the Application

The Course Management API, built with Node.js and Express, provides endpoints for managing course data, including retrieving, sorting, and selecting courses based on specific criteria. It supports operations like fetching course names, specializations, and filtering by course tags.

## 🌟 Features

### 📚 Course Management
- **Retrieve and Sort Courses**: Users can retrieve all published backend courses and sort them alphabetically by name.
- **Select Course Details**: Allows users to extract course names and specializations.
- **Filter BSIS and BSIT Courses**: Provides the ability to retrieve all published BSIS and BSIT courses from the curriculum.

### 🔎 Advanced Search Capabilities
- **Tag-based Search**: Enables searching for courses based on specific tags or specialization like BSIT, BSIS, etc.

### 🤩 User Experience
- **Error Handling**: Comprehensive error handling to provide clear feedback to clients.

### 🔒 Security and Performance
- **Data Validation**: Ensures the accuracy and integrity of course data.

### 👨🏻‍💻 Developer Experience
- **Clear Documentation**: Detailed API documentation for easy understanding and usage.

## Purpose

The primary purpose of this API is to provide a platform for managing course data efficiently, including retrieving, sorting, and selecting courses based on specific criteria.

## ⚡ Quick Start Guide

Follow these steps to set up the application locally:

1. **Clone the Repository**: Clone the repository to your local machine using Git.

```bash
git clone https://github.com/your-repo-url
```

2. **Install Dependencies**: Install required dependencies using [npm](https://www.npmjs.com/).

```bash
npm install express
```
```bash
npm install nodemon
```

3. **Start the Server**: Use npm start for production or npm run dev for development with nodemon.

```bash
npm run dev
```
Alternatively, you can run the API using this command:
```bash
npm run start
```
Or:
```bash
node app.js
```

4. **Test the Application**: Test the application by sending requests to the API endpoints. You can use a tool like Postman or Insomnia to send HTTP requests.

## 🔭 Course API Endpoint Guide

This application provides several API endpoints for managing courses:

### Retrieve and Sort Courses

**Endpoint:** `/courses/getCourseNamesSortedAlphabetically`

**Method:** `GET`

**Description:** Retrieves all published backend courses and sorts them alphabetically by name.

### Select Course Details

**Endpoint:** `/courses/getCoursesNameAndSpecialization`

**Method:** `GET`

**Description:** Selects and extracts the name and specialization of each course.

### Filter BSIS and BSIT Courses

**Endpoint:** `/courses/getPublishedCourses`

**Method:** `GET`

**Description:** Retrieves all published BSIS and BSIT courses from the curriculum.

## 🧾 Dependencies Guide

This project uses the following dependencies:

### 🚀 Express

**Version:** ^4.18.2

**Description:** Fast, minimalist web framework for Node.js.
```bash
npm i express

```
## 🔧 DevDependencies

### 🤖 Nodemon

**Version:** ^3.0.3

**Description:** Tool for automatic server restarts during development.

**Usage:** In this project, nodemon is used during development to automatically restart the server upon file changes for a smoother development experience.
```bash
npm i nodemon
```