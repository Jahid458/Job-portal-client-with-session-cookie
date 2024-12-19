/***
 * install jsonwebtoken cookie parser
 * set cooikieParser in middleware
 * 
 * 1.create a token 
 * 
 * jwt.sign(data, secret, {expirein: '5h'})
 * 
 * set cookie to the cookie of  res.cookie('token',token,{
 *          httpOnly: true, 
 *          secure:false
 * }).send({})
 * 
 * cors({
 *      origin: [''],
 *      credentials: true
 * })
 * 
 * client:{
 *      withCredential: true
 * }
 * 
 * 
 * 2.send the token ato the  client side . make sure token is in the cookie (applications)
 * 
 */