const {User} = require("../models");
class UserController {
  static register(req, res) {
    const {
      full_name,
      email,
      username,
      password,
      profile_image_url,
      age,
      phone_number,
    } = req.body;
    User.create({
      full_name,
      email,
      username,
      password,
      profile_image_url,
      age,
      phone_number,
    })
      .then((result) => {
        let response = {
          id: result.id,
          email: result.email,
          username: result.username,
          password: result.password,
          profile_image_url: result.profile_image_url,
          age: result.age,
          phone_number: result.phone_number,
        };
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static login(req, res) {}
}

module.exports = UserController;
