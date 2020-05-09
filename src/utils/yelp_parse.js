export const yelp_parse = (results) => {
  let result = '';
  for (let i = 0; i < results.length; i++ ) {
    result += '<br />'
    result += results[i].name + ' (' + results[i].alias + ')';
  }
  result += '<br /><br />'
  return result;
}
