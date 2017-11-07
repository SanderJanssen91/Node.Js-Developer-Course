var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Sander'
  };
  setTimeout(() => {
      callback(user);
  }, 3000);
};

getUser(14, (userObject) => {
  console.log(userObject);
});
