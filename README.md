# backend

##Base URL:\
[to come]\

##Information for connecting to the endpoints  
###Login: /api/fitness/login\
-Username (128 character limit max)\
-Password (min 6 characters)\
###Register: /api/fitness/register\
-Username (128 character limit max)\
-Password (min 6 characters)\
###Logout: /api/fitness/logout  

###Class object shape and fields:\
"class_name", 128 character limit \
"type", 128 character limit\
"start_time", date and time format\
"duration", integer\
"intensity", integer\
"location", 128 character limit\
"max_size", integer\
"registered", integer\
"instructor_id", integer (this references another table so it isn't inputted)