const checkIfDileepa = async (req, res, next) => {
  if (req.body.name === "dileepa") {
    console.log("This user has already registered");
    res.status(500).json({ error: "Dileepa user has already registered" });
  } else {
    next();
  }
};

module.exports = checkIfDileepa;
