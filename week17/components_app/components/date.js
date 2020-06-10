function displayDate(){
    var d = new Date()
    var fullDate = d.toLocaleString();
    console.log(fullDate)
    return fullDate;

}

module.exports = displayDate();