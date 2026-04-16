const emojis = ["👩‍💻", "👨‍💻", "👩‍🎓", "👨‍🎓", "🧑‍💻"];
function loadStudents(){
    const container = document.getElementById('output');
    container.innerHTML ="<p class='placeholder'> Loading...</p>";

    fetch("student.json")
        .then(function (response){
            return response.json();})
        .then(function(students) {
            container.innerHTML="";
            for(let i=0 ; i<students.length; i++){
                let s= students[i];
                let card= `<div class="student-card">
                <h3>${s.name}</h3>
                <div class="tag-row">
                    <span class="pill grade-${s.grade}"> Grade: ${s.grade}</span>
                </div>
                <div class="tag-row">
                <span class="pill info"> Major: ${s.major}</span>
                </div>
                </div>`
        
                container.innerHTML+=card;
            }
        })
.catch(function(error){
    container.innerHTML= "<p class= 'error'>"+error+"</p>";
});}
