# backend

## Base URL:
https://anywhere-fitness-6.herokuapp.com

## Information for connecting to the endpoints  
### Login: /api/auth/login
-Username (128 character limit max)\
-Password (min 6 characters)
### Register: /api/auth/register
-Username (128 character limit max)\
-Password (min 6 characters)
### Logout: /api/auth/logout  

### Class object shape and fields:
"class_name", 128 character limit \
"type", 128 character limit\
"start_time", date and time format\
"duration", integer\
"intensity", integer\
"location", 128 character limit\
"max_size", integer\
"registered", integer\
"instructor_id", integer (this references another table so it isn't inputted)