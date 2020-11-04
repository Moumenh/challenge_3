const mongoose = require('mongoose');
const { string } = require('prop-types');

const addressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lineOne: String,
    lineTwo: String,
    city: String,
    state: String,
    zipCode: Number,
    phone: Number

}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports.Address = Address;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9BZGRyZXNzLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInN0cmluZyIsImFkZHJlc3NTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImxpbmVPbmUiLCJTdHJpbmciLCJsaW5lVHdvIiwiY2l0eSIsInN0YXRlIiwiemlwQ29kZSIsIk51bWJlciIsInBob25lIiwidGltZXN0YW1wcyIsIkFkZHJlc3MiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjtBQUNBLE1BQU0sRUFBRUMsTUFBRixLQUFhRCxRQUFRLFlBQVIsQ0FBbkI7O0FBRUEsTUFBTUUsZ0JBQWdCSCxTQUFTSSxNQUFULENBQWdCO0FBQ2xDQyxZQUFRO0FBQ0pDLGNBQU9OLFNBQVNJLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQUR6QjtBQUVKQyxhQUFLO0FBRkQsS0FEMEI7QUFLbENDLGFBQVNDLE1BTHlCO0FBTWxDQyxhQUFTRCxNQU55QjtBQU9sQ0UsVUFBTUYsTUFQNEI7QUFRbENHLFdBQVFILE1BUjBCO0FBU2xDSSxhQUFTQyxNQVR5QjtBQVVsQ0MsV0FBT0Q7O0FBVjJCLENBQWhCLEVBWXBCLEVBQUNFLFlBQVksSUFBYixFQVpvQixDQUF0Qjs7QUFjQSxNQUFNQyxVQUFVbkIsU0FBU29CLEtBQVQsQ0FBZSxTQUFmLEVBQTBCakIsYUFBMUIsQ0FBaEI7O0FBR0FrQixPQUFPQyxPQUFQLENBQWVILE9BQWYsR0FBeUJBLE9BQXpCIiwiZmlsZSI6IkFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuY29uc3QgeyBzdHJpbmcgfSA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxyXG5cclxuY29uc3QgYWRkcmVzc1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB1c2VySWQ6IHtcclxuICAgICAgICB0eXBlIDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogJ1VzZXInXHJcbiAgICB9LFxyXG4gICAgbGluZU9uZSA6U3RyaW5nLFxyXG4gICAgbGluZVR3byA6U3RyaW5nLFxyXG4gICAgY2l0eTogU3RyaW5nLFxyXG4gICAgc3RhdGUgOiBTdHJpbmcsXHJcbiAgICB6aXBDb2RlIDpOdW1iZXIsXHJcbiAgICBwaG9uZTogTnVtYmVyXHJcblxyXG59LHt0aW1lc3RhbXBzOiB0cnVlfSlcclxuXHJcbmNvbnN0IEFkZHJlc3MgPSBtb25nb29zZS5tb2RlbCgnQWRkcmVzcycsIGFkZHJlc3NTY2hlbWEpXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuQWRkcmVzcyA9IEFkZHJlc3MiXX0=