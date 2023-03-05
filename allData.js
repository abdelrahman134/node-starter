const fs=require("fs")
const loadData=()=>{
    try {
        const dataJson =fs.readFileSync("data.json").toString()
       return JSON.parse(dataJson)
    }
    catch{
        return []

    }
}
const saveDate=(data)=>{
    const dataJson=JSON.stringify(data)
    fs.writeFileSync("data.json",dataJson)
}
const addData = (
  id,
  fname,
  lname,
  age,
  city,
  course1,
  course2,
  course3,
  course4,
  course5,
  course6
) => {
  const data = loadData();
  console.log(course1);
const courses=[course1,course2,course3,course4,course5,course6]
const total=courses.reduce((prev,next)=>prev+next,0)
const avg= ( (total/600)*100).toFixed(2)
  const duplicate = data.filter((dataCheck) => {
    return dataCheck.id == id;
  });
  if (duplicate.length == 0) {
    data.push({
      id,
      fname,
      lname,
      age,
      city,
      Gradecourses:courses,
      total:total,
      avg:`${avg}%`
    });
  } else {
    console.log("DUPLICATED ID");
  }
  saveDate(data);
};

const delData=(id)=>{
  const data=loadData()
  const deletedData=data.filter(del=>del.id!==id)
  saveDate(deletedData)
}
const showData=()=>{
  const data = loadData();
  data.forEach(show=>console.log(show.fname ,show.lname))  
}
const selData=(id)=>{
  const data = loadData();
  const selData=data.find(sel=>sel.id==id)   
  console.log(selData);
}

module.exports = {
  addData,
  delData,
  selData,
  showData,
};
