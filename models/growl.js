function Growl(options) {
  this.id = id;
  this.caption = caption;
  Growl.all.push(this);
};


Growl.find = function(id) {
  return Growl.all.find(function( growl ) {
    return growl.id === id;
  });
};

Growl.all = [];


module.exports = Growl;
