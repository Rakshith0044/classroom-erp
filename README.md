# classroom-erp

                                                              CLASSROOM ERP SYSTEM - Readme
                                                              
Step 1:  Install Node.js from official website (https://nodejs.org/en/)

Step 2:  Install MySQL workbench , follow this tutorial(https://www.youtube.com/watch?v=H0ZpCVhS6hw&t=156s)

Step 3:  Install editor it can be anyone from below:  
      VS code:https://code.visualstudio.com/  
      Sublime:https://www.sublimetext.com/

Step 4:  Open Project file go to \final_erp\final_erp\classroom\database

Step 5:  Open  connection.js in  editor Set host,user, and password which is same as set in my sql workbench
      ![image](https://user-images.githubusercontent.com/76027055/161752210-6426650e-ae84-43ac-9a65-e03b5c816f16.png)

Step 6:   Open Mysql Workbench and run below code “create database classroom;”

Step 7:  Go to \final_erp\final_erp\classroom\database in CMD Run following command “node data_set.js”
Which will create table and add data.
                                ![image](https://user-images.githubusercontent.com/76027055/161752304-100b37c6-8719-493c-a7bd-563f22dc6b06.png)


Step 8:  Go to \final_erp\final_erp\classroom in CMD Run following command “nodemon app.js”
As you can see the website is running at port 5000

Step 9:  Open Browser and type the address http://localhost:5000/login_teacher
      ![image](https://user-images.githubusercontent.com/76027055/161752412-c45bbf25-5b70-4746-ab34-47f90584e5a2.png)

Step 10:  Open the workbench, go to theclassroomdatabaseand see staff or student details and  login.
