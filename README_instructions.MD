Performance Test Instructions:

Objective:
The performance test aims to evaluate your ability to retrieve, sort, and select backend courses data according to specified requirements.

Steps:
Download and install the MongoDB Database tool: https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.9.4.zip

Follow the installation instructions for the MongoDB Database tool: https://www.mongodb.com/docs/database-tools/installation/installation-windows/

Create a backend API endpoint for the provided course data. (use mongoimport --db mongo-test --collection courses --file courses.json --jsonArray) to import the included data

-Retrieve all published backend courses and sort them alphabetically by their names.
-Select and extract the name and specialization of each course.
-Retrieve all published BSIS (Bachelor of Science in Information Systems) and BSIT (Bachelor of Science in Information Technology) courses from the curriculum.
-Perform data validation at each step to ensure the accuracy and integrity of the retrieved information.
-Document the test procedure, including any challenges faced and solutions implemented.

Grading Rubric:

Criteria and Weights:

Accuracy of Data Retrieval (30%):

Evaluate the accuracy of fetching backend courses data.
Correct Sorting of Backend Courses (20%):

Assess the correctness of sorting courses alphabetically by their names.
Accurate Selection of Course Details (20%):

Evaluate the accuracy of selecting and extracting course names and specializations.
Retrieval of BSIS and BSIT Courses (15%):

Assess the ability to retrieve BSIS and BSIT courses from the curriculum.
Data Validation and Verification (10%):

Evaluate the implementation of data validation techniques to ensure integrity and correctness.
Documentation and Reporting (5%):

Evaluate the clarity and completeness of documentation regarding the test procedure and results.
Total Weight: 100%
