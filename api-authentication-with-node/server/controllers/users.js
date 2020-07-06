const JWT = require('jsonwebtoken')
const User = require('../models/user')
const {JWT_SECRET} = require('../configuration')

signToken = (user) => {
  return JWT.sign(
    {
      iss: 'CodeWorkr', //issuer
      sub: user.id, //unique identifier of the payload
      iat: new Date().getTime(), // issue at claim
      exp: new Date().setDate(new Date().getDate() + 1) // expiry current time + 1 day
    },
    JWT_SECRET
  )
}

module.exports = {
  signUp: async (req, res, next) => {
    const {email, password} = req.value.body

    // Check if there is a user with the same email
    const foundUser = await User.findOne({email})
    if (foundUser) {
      return res.status(403).json({error: 'email is already in use'})
    }

    // Create a new user
    const newUser = new User({
      email,
      password
    })
    await newUser.save()

    // Generate the token

    const token = signToken(newUser)

    // Respond with token
    res.status(200).json({token})
  },

  signIn: async (req, res, next) => {
    console.log('signin was called')
    // Generate token
  },

  secret: async (req, res, next) => {
    console.log('I managed to get to controller secret')
    res.json({secret: 'resource'})
  }
}
