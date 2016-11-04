const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
  id: {type: String, default: '1'},
  moderation: {type: String, enum: ['pre', 'post'], default: 'pre'}
}, {
  _id: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

SettingSchema.statics.getSettings = function () {
  return this.findOne();
};

SettingSchema.statics.updateSettings = function (setting) {
  // there should only ever be one record unless something has gone wrong.
  return this.findOneAndUpdate({id: '1'}, {$set: setting}, {new: true});
};

const Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;