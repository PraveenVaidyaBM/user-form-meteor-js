import { Template } from 'meteor/templating';
import {UserDetail} from '../database/collection'
import './main.html';

Template.addUser.events({
  'click .js-save'(event,instance) {
    var firstName = $('#firstName').val
    var lastName = $('lastName').val
    var userName = $('#userName').val
    var mobileNumber = $('#mobileNumber').val
    var emailAddress = $('#emailAddress').val
    var City = $('#city').val

    UserDetail.insert({
      "First Name": firstName,
      "Last Name": lastName,
      "User Name": userName,
      "Mobile Number": mobileNumber,
      "Email Address": emailAddress,
      "City": City
    })
  }
})

Template.viewUser.helpers({
  viewUserdata(){
    return UserDetail.find();
  }
})

