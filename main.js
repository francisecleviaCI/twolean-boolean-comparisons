/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(number){
  return number > 5;
}
let result = moreThan5 ();
result;

function topScore(score, topscore){
  return score > topscore;
}
let result1 = topScore(90, 95);
result1;

function isInDanger(grade){
  return grade > 60 && grade < 71;
}
let result2 = isInDanger(69);
result2;

function isCoasting(grade){
  return grade > 72 && grade < 83;
}
let result3 = isCoasting();
result3;

function isSucceeding(grade){
  return grade > 84 && grade < 92;
}
let result4 = isSucceeding(87);
result4;

function isFailing(grade){
  return grade < 60;
}
let result5 = isFailing();
result5;

function isAcing(grade){
  return grade > 92;
}
let results6 = isAcing(93);
results6;

function isStudent(str){
  return str === 'student';
}
let results7 = isStudent('student');
results7;

function isTeacher(str){
  return str === 'teacher';
}
let results8 = isTeacher('teacher');
results8;

function isAdmin(str){
  return str === 'admin';
}
let results9 = isAdmin('teacher');
results9;

function isElementary(str){
  return str === 'elementary';
}
let results10 = isElementary('elementary');
results10;
//*** */
function areDifferentPeople(name1, name2){
  return name1 !== name2;
}
let results11 = areDifferentPeople('Jordan, Kobe');
results11; 

function isMiddleSchoolTeacher(role, num){
  return role === 'teacher' && num >= 6 && num <=8;
}
let results12 = isMiddleSchoolTeacher('teacher', 8);
results12;

function notAnElementarySchoolAdministrator(level, role){
  return level !== 'elementary' && role !== 'administrator';
}
let results13 = notAnElementarySchoolAdministrator('middle', 'teacher');
results13;


/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  differentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
