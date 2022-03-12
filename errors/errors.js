const HttpStatus = require('http-status');


const userExistsError = new Error('userExistsError');
userExistsError.status = 409;

const emailNotExist = new Error(`user don't exist with this email id`);
emailNotExist.status = HttpStatus.BAD_REQUEST;

const linkExpiredError = new Error('linkExpiredError');
linkExpiredError.status = HttpStatus.BAD_REQUEST;

const noAccessRights = new Error('noAccessRights');
noAccessRights.status = HttpStatus.UNAUTHORIZED;

const tokenUbsentError = new Error('token is not present in the header');
tokenUbsentError.status = HttpStatus.UNAUTHORIZED;

const unAuthorizedUserError = new Error('unAuthorizedUserError');
unAuthorizedUserError.status = HttpStatus.UNAUTHORIZED;

const refreshTokenNotFoundError = new Error('linkExpiredError');
refreshTokenNotFoundError.status = HttpStatus.BAD_REQUEST;

const wrongPasswordError = new Error('Current password is wrong');
wrongPasswordError.status = HttpStatus.BAD_REQUEST;

const wrongCredentialsError = new Error('wrongCredentialsError');
wrongCredentialsError.status = 401;

const otpExpiredOrWrongError = new Error('otpExpiredOrWrongError');
otpExpiredOrWrongError.status = 401;

const emailDuplicationError = new Error('emailDuplicationError');
emailDuplicationError.status = 400;

const userNotFoundError = new Error('userNotFoundError');
userNotFoundError.status = 404;

const userDeactivatedError = new Error('userDeactivatedError');
userDeactivatedError.status = 401;

const internalError = new Error('internalError');
internalError.status = 500;

const questionNotFoundError = new Error('questionNotFoundError');
questionNotFoundError.status = 407;

const questionExistError = new Error('questionExistError');
questionExistError.status = 408;

const blogNotFoundError = new Error('blogNotFoundError');
blogNotFoundError.status = 407;

const blogTitleDuplicateError = new Error('blogTitleDuplicateError');
blogTitleDuplicateError.status = 407;

const blogExistError = new Error('blogExistError');
blogExistError.status = 408;

const emailExistError = new Error('emailExistError');
emailExistError.status = 408;

const tokenNotFoundError = new Error('tokenNotFoundError');
tokenNotFoundError.status = 404;

const videoNotFoundError = new Error('videoNotFoundError');
videoNotFoundError.status = 407;

const userNotRegisteredError = new Error('userNotRegisteredError');
userNotRegisteredError.status = 407;

const emailNotVerifiedError = new Error('emailNotVerifiedError');
emailNotVerifiedError.status = 407;

const emailSentError = new Error('emailSentError');
emailSentError.status = 407;

const tokenExpiredError = new Error('tokenExpiredError');
tokenExpiredError.status = 407;

module.exports = {
    emailDuplicationError,
    internalError,
    noAccessRights,
    tokenUbsentError,
    unAuthorizedUserError,
    otpExpiredOrWrongError,
    linkExpiredError,
    wrongPasswordError,
    emailNotExist,
    userExistsError,
    refreshTokenNotFoundError,
    userNotFoundError,
    wrongCredentialsError,
    userDeactivatedError,
    questionNotFoundError,
    questionExistError,
    blogNotFoundError,
    blogTitleDuplicateError,
    blogExistError,
    emailExistError,
    tokenNotFoundError,
    videoNotFoundError,
    userNotRegisteredError,
    emailNotVerifiedError,
    emailSentError,
    tokenExpiredError
};