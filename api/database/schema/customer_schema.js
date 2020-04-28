import mongoose from 'mongoose';
import validator from 'validator';

const customerSchema = new mongoose.Schema({
    name: {
        firstName: String,
        surname: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: (value) => {
          return validator.isEmail(value)
        }
    },
    address: {
        type: String
    }
});

customer.validate().catch(error => {
    assert.ok(error);
    assert.equal(error.errors['email'].message, 'Email validation failed');
  });

export default customerSchema;