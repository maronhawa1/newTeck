class Course {
  constructor(title, instructor, maxStudents) {
    this.title = title;
    this.instructor = instructor;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0;
  }

  enrollStudent() {
    if (this.enrolledStudents >= this.maxStudents) {
      return "Can't enroll, course is full";
    }
    this.enrolledStudents++;
    return this.enrolledStudents + " students enrolled";
  }
}

const course1 = new Course("Math", "Maron", 3);
const course2 = new Course("Computer Science", "Ahmad", 28);

console.log("=== Math ===");
console.log(course1.enrollStudent());
console.log(course1.enrollStudent());
console.log(course1.enrollStudent());
console.log(course1.enrollStudent());
