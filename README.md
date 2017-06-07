# artemis_api

createdb artemis_api


[https://artemis-api.herokuapp.com/](https://artemis-api.herokuapp.com/)

### users
- GET users
- GET users/?id=1

### games
- GET games
- GET games/?id=1
- PUT games/ id=1 status=started

### questions
- GET questions
- GET questions/?id=1

### game_user
- GET game_user
- GET game_user/?user_id=1
- POST game_invite/new/
- PUT game_invite/question/
- PUT game_invite/game/

### game_invite
- GET game_invite
- GET game_invite/?user_id=1
- POST game_invite/ user_id=1 game_id=1
- PUT game_invite/ user_id=1 game_id=1 invite_status=accepted
