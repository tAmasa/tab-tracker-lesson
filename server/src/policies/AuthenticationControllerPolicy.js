const Joi = require('@hapi/joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(), 
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        }); 

        // const schema = Joi.object({ 
        //     name: Joi.string() .min(6) .required(),
        //     email: Joi.string() .min(6) .required() .email(),
        //     password: Joi.string() .min(6) .required() });


        const { error} = schema.validate(req.body)
        
        if (error) {
            switch (error.details[0].context.key) {
              case 'email':
                res.status(400).send({
                  error: 'You did not provide a valid email address'
                })
                break
              case 'password':
                res.status(400).send({
                  error: `The password provided did not match the following rules:
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case, numerics.
                    <br>
                    2. It must be at least 8 characters in length and not greater than 32 characters in length.
                  `
                })
                break
              default:
                res.status(400).send({
                  error: 'Invalid registration information'
                })
            }
          } else {
            next()
          }

    }
}