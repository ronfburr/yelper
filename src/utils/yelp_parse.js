export const yelp_parse = (results) => {
  let result = '';
  for (let i = 0; i < results.length; i++ ) {
    if ( i !== 0 ) result += '<br />'
    result += results[i].name;
  }
  return result;
}
