export const createUserValidators = {
  USER_NAME_MIN_LEN: 3,
  USER_NAME_MAX_LEN: 30,
  PASSWORD_REGEXP: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
}
