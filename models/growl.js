function Growl(options) {
  // this.id = id;
  this.growl = options.growl;
  Growl.all.push(this);
};


// Growl.find = function(id) {
//   return Growl.all.find(function( growl ) {
//     return growl.id === id;
//   });
// };

Growl.all = [];


module.exports = Growl;
