const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const {JWT_SECRET} = require('./configuration')
const User = require('./models/user')

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
