## Chat API

Task to be accomplished :

[*] Setup Environment
[*] Create Auth Route for user signup and signin
[ ] Create Route for the chat endpoint based on logged user
[ ] Create Token for user logged
[ ] Use token to get User data and previous chat information
[ ] Create user profile endpoint
[ ] 

## Notable Installation Packages
- babel
- bcrypt
- jwt token
- pg
- 

## Documentation 

Chat contain endpoint of sent and recieved messages from it registered clients

## API Endpoints

- POST api/v1/auth/signup
- POST api/v1/auth/signin
- POST api/v1/chat/message
- GET api/v1/chat/messages?:user
