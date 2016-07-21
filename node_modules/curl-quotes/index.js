var LEFT_SINGLE = '‘'
var RIGHT_SINGLE = '’'
var LEFT_DOUBLE = '“'
var RIGHT_DOUBLE = '”'

var replacements = [
  [ /([.,;!?])" /g, ('$1' + RIGHT_DOUBLE + ' ' ) ],
  [ /([.,;!?])' /g, ('$1' + RIGHT_SINGLE + ' ' ) ],
  [ /([.,;!?])'" /g, ('$1' + RIGHT_SINGLE + RIGHT_DOUBLE + ' ' ) ],
  [ /([.,;!?])"' /g, ('$1' + RIGHT_DOUBLE + RIGHT_SINGLE + ' ' ) ],
  [ /(\w)'(\w)/g, ( '$1' + RIGHT_SINGLE  + '$2') ],
  [ /^'/, LEFT_SINGLE ],
  [ /^"/, LEFT_DOUBLE ],
  [ /'$/, RIGHT_SINGLE ],
  [ /"$/, RIGHT_DOUBLE ],
  [ /'\b/g, LEFT_SINGLE ],
  [ /\b'/g, RIGHT_SINGLE ],
  [ /"\b/g, LEFT_DOUBLE ],
  [ /\b"/g, RIGHT_DOUBLE ],
  [ /"$/g, RIGHT_DOUBLE ],
  [ /(\s)'/g, ( '$1' + LEFT_SINGLE ) ],
  [ /(\s)"/g, ( '$1' + LEFT_DOUBLE ) ],
  [ /'(\s)/g, ( RIGHT_SINGLE + '$1' ) ],
  [ /"(\s)/g, ( RIGHT_DOUBLE + '$1' ) ] ]

var replace = String.prototype.replace

module.exports = function curlQuotes(string) {
  // Apply each replacement to the argument.
  return replacements.reduce(
    function (returned, replacement) {
      return replace.apply(returned, replacement) },
    string) }
