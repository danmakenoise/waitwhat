import repl from 'repl';

const waitWhat = (context) => {
  repl.start().context = context;
};

export default waitWhat;
