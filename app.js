const yargs=require('yargs')
const data=require('./allData.js')
yargs.command({
  command: "add",
  describe: "to add person info",
  builder: {
    fname: {
      describe: "to add person first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "to add person Last name",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "to add person city",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "to add person age",
      demandOption: true,
      type: "string",
    },
    id: {
      describe: "to add person id",
      demandOption: true,
      type: "string",
    },
  },
  handler:(x)=>{
  data.addData(x.id, x.fname, x.lname, x.age, x.city);  }
});
yargs.command({
  command: "del",
  describe: "to del person info",
  builder: {
    
    id: {
      describe: "to del person id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.delData( x.id);
  },
});
yargs.command({
  command: "show",
  describe: "to shoew person info",

  handler: () => {
    data.showData();
  },
});
yargs.command({
  command: "sel",
  describe: "to selection person info",
  builder: {
    id: {
      describe: "to sel person id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.selData(x.id);
  },
});
yargs.parse()