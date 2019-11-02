function getProfile(){
	return{
		Nama : 'Rais Habsyah',
		address : 'Jakarta Timur',
		age : [24 Tahun] // Number
		hobbies : ['Badminton','Bela Diri']//array
		is_married : false // Boolean
		school : {
			highSchool : 'SMA Negeri 1 Kejuruan Muda',
			year_in	: '2010',
			year_out : '2013',
			University : 'Universitas Islam Sumatera Utara',
			year_in : '2014',
			year_out : '2018',
		}, // Array Of Object
		skills :[{
			name : 'Enggineering Elevator & Escalator',
			years_of_experience : 1
		},{
			name : 'Supervisor Sales Service'
			years_of_experience : 1
		}] // Array of object
		interest_in_codding : true //Boolean
	}

let profile = getProfile();

let skills = profile.skills;

let highschool = profile.school.highscool;

let {skills} = profile;

console.log(JSON.stringify(skills));
}