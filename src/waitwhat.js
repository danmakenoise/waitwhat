import repl from 'repl';

const waitWhat = (context) => {
  const r = repl.start('ಠ_ಠ > ');

  Object.keys(context).forEach((key) => {
    Object.defineProperty(r.context, key, {
      configurable: false,
      enumerable: true,
      value: context[key],
    });
  });
};

export default waitWhat;
