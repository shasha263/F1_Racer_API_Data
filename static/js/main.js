function getData(){
    //console.log("Hello")
let season=document.querySelector("#season").value;
let round= document.querySelector("#round").value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(racerdata => {
        console.log(racerdata)
        for(let i=0;i<7;i++){
            //Driver Data
            let givenName=racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
            let familyname=racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;

            let fullName=`${givenName} ${familyname}`
            //console.log(fullName)

            document.querySelector(`#name-${i}`).innerHTML=fullName

            //Nationality Data

            let nationality= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
            console.log(nationality)           

            document.querySelector(`#nationality-${i}`).innerHTML=nationality
            //Sponsor Data
            let sponsor= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            console.log(sponsor)           

            document.querySelector(`#sponsor-${i}`).innerHTML=sponsor


            //Points Data
            let points= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
            console.log(points)           

            document.querySelector(`#points-${i}`).innerHTML=points
        }
    })
    
}