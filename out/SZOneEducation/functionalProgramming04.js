var users = [
    {id: 1, name: 'ID', age: 36},
    {id: 2, name: 'BJ', age: 32},
    {id: 3, name: 'JM', age: 32},
    {id: 4, name: 'PJ', age: 27},
    {id: 5, name: 'HA', age: 25},
    {id: 6, name: 'JE', age: 26},
    {id: 7, name: 'JI', age: 31},
    {id: 8, name: 'MP', age: 23}
];

// 명령형 : 30세 이상인 유저들을 걸러라

var temp_users = [];
for (var i = 0; i < users.length i++) {
    if (users[i].age >= 30) {
        temp_users.push(user[i]);
    }
}
console.log(temp_users);

// 명령형: 이 사람들의 이름을 뽑아라

var names = [];
for (var i = 0; i < temp_users.length; i++) {
    names.push(temp_users[i].name);
}
console.log(names);