const bcrypt = require("bcryptjs");
const User = require("../model/users");
const jwt = require("jsonwebtoken");

const authKey="loremipsom";


exports.justChecking = (req, res, next) => {
    res.status(200).json({
        message: "Articles fetched succesfuly!"
      });
}


exports.signIn = async(req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(200)
          .json({ errors: [{ msg: "User does not exists" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .json({ errors: [{ msg: "Password does not match" }] });
      }
      const authToken = jwt.sign(
        {
          _id: user._id,
        },
        authKey,
        {
          expiresIn: 400000,
        }
      );
      return res.status(200).json({
        idToken: authToken,
        expiresIn: 400000,
        user: user
      });
    } catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
}


// awin@gmail.com , password: 12345
// anurags6555@gmail.com, 987456
exports.signUp=  async(req, res) => {
    const {username,  name, email, password, interests } = req.body;
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      const newuser = User({
        name,
        email,
        password,
        username,
        interests
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          if (err) throw err;
          newuser.password = hash;
          newuser.save((err, user) => {
            res.status(200).json(user);
          });
        });
      });
    } catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }

}

// Three conditions possible -
// 1)User want to see somebody's else profile without login,
// 2)User want to see somebody's else profile after login,
// 3)User want to see own profile (Loged in)
exports.getProfile = async (req, res, next) => {
  let username = req.params.username;
  var query = User.findOne({ username: username }).select('-followers -following -activity -savedreviews -password');

  if(req.params.username === req.user?.username){
    return res.status(200).json(req.user);
  } else{
    query.exec((err, user) => {
      if(user){
        return res.status(200).json(user);
      } else{
        return res.status(400).json(err);
      }
    });
  }
}

/**************Get Names, Given the UserIds *******************/
exports.getUserNames = (req, res, next) => {
  let userids = req.body.userids
  console.log(userids);
  const query  = User.find({"_id": {$in: userids} }).select('name -_id')
  query.exec((err, users) => {
    if(err){
      console.log(err);
    } else {
      res.status(200).json(users);
    }
  })
}

/***************** Add Review Id in the User Review Field ************/

exports.addReviewToUser = (req, res, next) => {
  const userid = req.user._id;
  const reviewid = req.id;
  User.updateOne({_id: userid}, { $push: { reviews: reviewid } },(err, response) => {
    if(!err){
      next()
    } else{
      console.log(err);
    }
  } );
}


/******************* Update Profile Of User ************************/
exports.updateProfile = (req, res, next) => {
  const filter = {_id: req.user._id};
  const update = {name: req.body.name, status: req.body.status, interests: req.body.interests };
  User.findOneAndUpdate(filter, update, (err, user) => {
    res.status(200).json(user);
  });
}

/********************** Get User Public Information By Id  *******/
exports.basicInfoUserById =  (req, res, next) => {
  let userid = req.params.id
  var query = User.findById( userid ).select('-followers -following -activity -savedreviews -password');
  query.exec((err, user)=>{
    if(err){
      console.log(err);
    } else {
      req.demouser = user;
      next();
    }
  })
}
