var studenReports ={

    studentGrades : [
      {
          grade: "V",
          students: [
              {name: "Nrupul", marks: [10, 20, 30]},
              {name: "Prateek", marks: [20, 30, 40]}
          ]
      },
      {
          grade: "VI",
          students: [
              {name: "Aman", marks: [10, 20, 30]},
              {name: "Albert", marks: [20, 30, 40]}
          ]
      },
      {
          grade: "VII",
          students: [
              {name: "Yogesh", marks: [10, 20, 30]},
              {name: "Sandhya", marks: [20, 30, 40]}
          ]
      }
    ],
    higScorStudOfEachGrade: function(){
      for(var i = 0; i < this.studentGrades.length ; i++){
        var high = {};
        for(var j = 0 ; j < this.studentGrades[i].students.length; j++){
          var sum = 0;
          for(var k = 0; k  < this.studentGrades[i].students[j].marks.length; k++){
            sum = sum + this.studentGrades[i].students[j].marks[k]
          }
          if(high.mark == undefined || high.mark < sum){
            high.grade = this.studentGrades[i].grade
            high.name = this.studentGrades[i].students[j].name;
            high.mark = sum;
          }
        }
        var opt = ""
        for(key in high){
         opt = opt + high[key];
         if(key != "mark"){
          opt = opt + "-";
         }
        }
        console.log(opt)
      }
    }
}

studenReports.higScorStudOfEachGrade()