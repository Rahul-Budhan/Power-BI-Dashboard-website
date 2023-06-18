import JSON from '../data.json' assert { type: "json" };
export function authenticateUser(User_name, Pass_word) {
    var user = loginDataList.find(function(username,password){
        return user.username === User_name && user.password === Pass_word; 
      });
 }


