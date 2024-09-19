document.getElementById('patientForm').addEventListener('submit',function(event){
     event.preventDefault();

     //Get form values
     const name = document.getElementById('name').value;
     const age = document.getElementById('age').value;
     const gender = document.getElementById('gender').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;

     //Example 
     console.log("Patient Registered: ",{
          name:name,
          age:age,
          gender:gender,
          email:email,
          phone:phone
     });
});