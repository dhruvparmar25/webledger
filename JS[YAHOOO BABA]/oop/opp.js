// class employee {
//     constructor(name,age,salary) {
//         this.empname = name;
//         this.empage = age;
//         this.empsalary = salary;
//     }
//     emp(){
//         document.write(`<h3>Employee class</h3>
//             Name: ${this.empname}<br>
//             Age: ${this.empage}<br>
//             Salary: ${this.empsalary}<br>`)
//     }

// }
// class manager extends employee {
//     emp() {
//         let ta=1000;
//         let pa=300;
//         let totalsalary=this.empsalary+ta+pa;

//         document.write(`<h3>Manager class</h3>
//             Name: ${this.empname}<br>
//             Age: ${this.empage}<br>
//             Salary: ${totalsalary}<br>`)

//     }
// }
// let d = new manager("Dhruv Parmar",21,20000);
// let u = new employee("ram Parmar",20,13000);

// d.emp();
// u.emp();

function prom(complete){
    return  new Promise(function(resolve,reject){
        if (complete) {
            resolve("I am Usccessfull");
        } else {
            reject("i am failed");
        }
     });

}


 console.log(prom(false));