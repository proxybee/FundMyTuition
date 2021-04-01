import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const {ObjectId} = mongoose.Schema.Types
const userSchema = new Schema({
username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: { type: Boolean, index: true },
  deactivatedOn: { type: Date, index: true },
  Campaigns: [{
    type: ObjectId,
    ref: "Campaign",
  }],
  profile: [{
    type: ObjectId,
    ref: "StudentProfile",
    required: true,
  }],
  isVerified: { type: Boolean, default: false },
  salt: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  permissionLevel: Number,
},

{
  timestamps: true,
});


userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.virtual("gravatar").get(() => {
  const hash = md5(userSchema.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
});
// Ensure virtual fields are serialised.
userSchema.set("toJSON", {
  transform: (doc, {__v, password, ...rest}, options) => rest
});

userSchema.findById = function (cb) {
  return this.model("User").find({ id: this.id }, cb);
};

const User = model("User", userSchema);

User.findByEmail = (email) => { 
  console.log('in case i got here')
   return User.find({ email })
  };

User.findById = (id) => User.findById(id)
  .then((result) => {
    result.toJSON();
    const resultId = result;
    delete resultId._id;
    delete resultId.__v;
    return resultId;
  });

User.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

User.createUser = (userData) => {
  const user = new User(userData);
  return user.save();
};

User.list = (perPage, page) => {
 return new Promise((resolve, reject) => {
   console.log("I got to list")
  User.find()
    .limit(perPage)
    .skip(perPage * page)
    .exec((err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
});
}

User.patchUser = (id, userData) => new Promise((resolve, reject) => {
  User.findById(id, (err, user) => {
    if (err) reject(err);
    let i;
    for (i in userData) {
      const userIndex = user;
      userIndex[i] = userData[i];
    }
    user.save((e, updatedUser) => {
      if (e) reject(e);
      resolve(updatedUser);
    });
  });
});

User.removeById = (userId) => new Promise((resolve, reject) => {
  User.remove({ _id: userId }, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(err);
    }
  });
});
module.exports = User;

module.exports = model("User", userSchema);
