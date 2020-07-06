const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const {JWT_SECRET} = require('./configuration')
const User = require('./models/user')

// JWT Strategy

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorize'),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        console.log(`Payload is ${payload.sub}`)
        // find the user specified in token
        const user = await User.findById(payload.sub)
        // if user doesn't exist, handle it
        console.log(`user is ${user}`)
        if (!user) {
          console.log('User is not found')
          return done(null, false)
        }
        // otherwise return the user
        console.log('user is found')
        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
)

// Local Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      try {
        // Find the user given the email
        const user = await User.findOne({email})

        // If not, handle it
        if (!user) {
          return done(null, false)
        }

        // Check if the password is correct

        const isMatch = await user.isValidPassword(password)
        if (!isMatch) {
          return done(null, false)
        }

        // Otherwise

        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
)
