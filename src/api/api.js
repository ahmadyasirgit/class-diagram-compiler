const BASEURL = "http://localhost:5000/"

const Register = (
    email,
    password
  ) => {
    let promiseOne = new Promise((resolve, reject) => {
      let myData = fetch(
        BASEURL + "post/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Password: password,
          }),
        }
      ).then((data) => {
        if (data.status == 200) {
          return data.json();
        } else {
          return 404;
        }
      });
      resolve(myData);
    });
    return promiseOne.then((data) => {
      return data;
    });
  };


const Authenticate = (
    email,
    password
  ) => {
    let promiseOne = new Promise((resolve, reject) => {
      let myData = fetch(
        BASEURL + "post/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Password: password,
          }),
        }
      ).then((data) => {
        if (data.status == 200) {
          return data.json();
        } else {
          return 404;
        }
      });
      resolve(myData);
    });
    return promiseOne.then((data) => {
      return data;
    });
  };

export{

    Register,
    Authenticate,
};