// mattly.symjoin
// concatenates symbols into one
// i'm kinda sad there's no easy way to do this in native max
// but then, it's really not needed

inlets = 2;
setinletassist(0, "message to join");
setinletassist(1, "separator character(s)");

outlets = 1;
setoutletassist(0, "message joined into a symbol");

var joinStr = jsarguments[1] || ''

function setJoin(str) {
  joinStr = str;
}setJoin.local=1;

function anything() {
  switch(inlet) {
    case 0:
      outlet(0, arrayfromargs(messagename, arguments).join(joinStr));
      break;
    case 1:
      setJoin(messagename);
      break;
  }
}