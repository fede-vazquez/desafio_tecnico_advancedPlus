module.exports = {
  getUsers: async (req, res) => {
    const users = [];
    res.json({ status: 200, data: users });
  },
  register: async (req, res) => {
    const newUser = {
      // id
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: "hash",
      avatar: "img",
      dni: req.body.dni,
    };
    //
    res.json({
      status: 200,
      msg: "Usuario creado correctamente.",
    });
  },
};
