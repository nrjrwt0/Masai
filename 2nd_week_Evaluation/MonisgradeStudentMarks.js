var obj = {
  allStudents: [
      {
          grade: "V",
          students: [
              {name: "Nrupul", marks: [10, 20, 30]},
              {name: "Prateek", marks: [20, 30, 60]},
              {name: "Monis", marks: [20, 30, 80]}
          ]
      },
      {
          grade: "VI",
          students: [
              {name: "Aman", marks: [10, 20, 30]},
              {name: "Albert", marks: [20, 30, 0]}
          ]
      },
      {
          grade: "VII",
          students: [
              {name: "Yogesh", marks: [10, 20, 30]},
              {name: "Sandhya", marks: [20, 30, 0]}
          ]
      }
  ],
  sum: function(i){
      var arr = [60, 90, 130]
      for( var j = 0; j < this.allStudents[i].students.length; j++ ){
          var sum = 0;
          for( var k = 0; k < this.allStudents[i].students[j].marks.length; k++ ){
              sum  = sum + this.allStudents[i].students[j].marks[k]
          }
          arr.push(sum)
      }
      var max = 0
      for( var i = 0; i < arr.length; i++ ){
          if( arr[i] > max ){
              max = i
          }
      }
      return {sum: arr[max], i:max}
  },
  decide: function(){
      for( var i = 0; i < this.allStudents.length; i++ ){
          var result = obj.sum(i)
          var sum = result.sum
          var index = result.i
          console.log( this.allStudents[i].grade + "-" + 
          this.allStudents[i].students[index].name + "-" +
          sum )
      }
  }
}
obj.decide()