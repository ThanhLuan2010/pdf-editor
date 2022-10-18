const safeGet = (p, o) =>
  p.reduce((xs, x) => (xs && isNotNull(xs[x]) ? xs[x] : null), o);
const isValidEmail = email => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

function isNull(value) {
  return value === null || value === undefined;
}

function isNotNull(value) {
  return !isNull(value);
}

function isNullOrWhiteSpace(value) {
  return isNull(value) || value.trim() === '';
}

function isEmpty(value) {
  if (isNull(value)) {
    return true;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

function isNotEmpty(value) {
  return !isEmpty(value);
}

export {
  isValidEmail,
  safeGet,
  isNullOrWhiteSpace,
  isNull,
  isNotNull,
  isEmpty,
  isNotEmpty,
};
