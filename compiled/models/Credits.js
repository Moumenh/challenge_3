const mongoose = require('mongoose');

const creditSchema = mongoose.Schema({
    cardUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    creditCard: {
        type: Number,
        unique: true
    },
    expiryDate: String,
    CVV: Number,
    zipCode: Number
}, { timestamps: true });

const Credit = mongoose.model('Credit', creditSchema);

module.exports.Credit = Credit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9DcmVkaXRzLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImNyZWRpdFNjaGVtYSIsIlNjaGVtYSIsImNhcmRVc2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJjcmVkaXRDYXJkIiwiTnVtYmVyIiwidW5pcXVlIiwiZXhwaXJ5RGF0ZSIsIlN0cmluZyIsIkNWViIsInppcENvZGUiLCJ0aW1lc3RhbXBzIiwiQ3JlZGl0IiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7O0FBRUEsTUFBTUMsZUFBZUYsU0FBU0csTUFBVCxDQUFnQjtBQUNqQ0MsY0FBVTtBQUNOQyxjQUFPTCxTQUFTRyxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFEdkI7QUFFTkMsYUFBSztBQUZDLEtBRHVCO0FBS2pDQyxnQkFBWTtBQUNSSixjQUFPSyxNQURDO0FBRVJDLGdCQUFTO0FBRkQsS0FMcUI7QUFTakNDLGdCQUFZQyxNQVRxQjtBQVVqQ0MsU0FBSUosTUFWNkI7QUFXakNLLGFBQVNMO0FBWHdCLENBQWhCLEVBWW5CLEVBQUNNLFlBQVksSUFBYixFQVptQixDQUFyQjs7QUFlQSxNQUFNQyxTQUFTakIsU0FBU2tCLEtBQVQsQ0FBZSxRQUFmLEVBQXlCaEIsWUFBekIsQ0FBZjs7QUFFQWlCLE9BQU9DLE9BQVAsQ0FBZUgsTUFBZixHQUF3QkEsTUFBeEIiLCJmaWxlIjoiQ3JlZGl0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgY3JlZGl0U2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGNhcmRVc2VyOiB7XHJcbiAgICAgICAgdHlwZSA6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgICByZWY6ICdVc2VyJ1xyXG4gICAgfSxcclxuICAgIGNyZWRpdENhcmQ6IHtcclxuICAgICAgICB0eXBlIDogTnVtYmVyLFxyXG4gICAgICAgIHVuaXF1ZSA6IHRydWVcclxuICAgIH0sXHJcbiAgICBleHBpcnlEYXRlOiBTdHJpbmcsXHJcbiAgICBDVlY6TnVtYmVyLFxyXG4gICAgemlwQ29kZTogTnVtYmVyXHJcbn0se3RpbWVzdGFtcHM6IHRydWV9KVxyXG5cclxuXHJcbmNvbnN0IENyZWRpdCA9IG1vbmdvb3NlLm1vZGVsKCdDcmVkaXQnLCBjcmVkaXRTY2hlbWEpXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5DcmVkaXQgPSBDcmVkaXQiXX0=