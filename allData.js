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
const addData=(id,fname,lname,age,city)=>{
    const data=loadData()
    const duplicate=data.filter((dataCheck)=>{
        return dataCheck==id

    })
    if(duplicate.length==0){
     data.push({
        id,
        fname,
        lname,
        age,
        city
     })
    }else{
        console.log("DUPLICATED ID");
    }
    saveDate(data)
}
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
