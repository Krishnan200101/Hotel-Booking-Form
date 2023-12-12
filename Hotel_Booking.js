//introducing variables
const singleroomcost = 25000;
const doubleroomcost = 35000;
const tripleroomcost = 40000;
const extrabedscost = 8000;
const kidscost = 5000;
const loyaltypointsperroom = 20;
let totalcost;

//get references to the interactive elements
const roombookingform = document.getElementById("room_booking form");
const outputfield = document.getElementById("output-field");
const currentbooking = document.getElementById("output-1");
const overallbookingsection = document.getElementById("output-field-2");
const overallbooking = document.getElementById("output-2");
const btnbooknow = document.getElementById("booknow");
const btnaddfavourite = document.getElementById("favourite");
const btnloyalty = document.getElementById("loyalty");

//Booking details
const name = document.getElementById("name");
const email = document.getElementById("email");
const numadults = document.getElementById("numofadults");
const nationalityoption = document.getElementById("nationality");
const checkwiFi = document.getElementById("WiFi");
const checkpoolview = document.getElementById("PoolView");
const checkgardenview = document.getElementById("GardenView");
const checkIn = document.getElementById("CheckIn");
const checkOut = document.getElementById("CheckOut");

//total number of rooms displaying input
const totalNumberofrooms = document.getElementById("numofrooms");

//for total cost calculation
const numsingle = document.getElementById("single");
const numdouble = document.getElementById("double");
const numtriple = document.getElementById("triple");
const numkids = document.getElementById("numofkids");
const extrabeds = document.getElementById("beds");
const promocode = document.getElementById("promocode");

//extra requirements
const extrareq = document.getElementsByName("extrareq");

//adventure booking

//variables 
let numadults_ad;
let numhrs;
let numkids_kd;

const localAdultcost = 5000;
const localKidcost = 2000;
const foreignAdultcost = 10000;
const foreignKidcost = 5000;

const adultGuidecost = 1000;
const kidGuidecost = 500;
let adventureTotalcost;

//get references to the interactive elements
const adventureform = document.getElementById("form_ad");
const nationalityAd = document.getElementById("nationalityAd");
const adventureRealtimecal = document.getElementById("output_ad");

const hours = document.getElementById("time"); 
const adultsInAd = document.getElementById("numofadultsadventure");
const kidsAd = document.getElementById("numofkidsadventure");
    
const nameAd = document.getElementById("nameadv");
const emailAd = document.getElementById("emailadv");
const date = document.getElementById("date");
const phoneNum = document.getElementById("number");

//Guide
const guidekid = document.getElementById("forkids");
const guideAdult = document.getElementById("foradults");

//adventure booking output
const adventureOutput = document.getElementById("adventuresOutput");

//get popUp by id
const btnAdventure = document.getElementById("bookadventure");
const popup = document.getElementById("popupcontainer");
const popupcontent = document.getElementById("popupdetails");
const popupsummary = document.getElementById("summary");

btnAdventure.addEventListener("click",openPopup);//adventure book now button

//favourite
const addtofavouriteBtn = document.getElementById('favourite');
const favPopup = document.getElementById('addedToFav');

// get loyalty points button and output
const checkLoyaltypoints = document.getElementById('loyalty');
const displayLoyaltypoints = document.getElementById('loyaltyPointsDetails');

// add event listner to the loyalty
checkLoyaltypoints.addEventListener("click",checkLoyalty);

//Listen for events
window.addEventListener("load",init);
roombookingform.addEventListener('input',updateOutput);
btnbooknow.addEventListener("click",diplayOverallbooking);
// btnaddfavourites.addEventListener("click",addToFav);
// btnloyalty.addEventListener("click",calculayeLoyaltyPoints);

// event listner for total rooms input
var roomNumberInput = document.querySelectorAll('.input-number');
    roomNumberInput.forEach(function(input){
    input.addEventListener('input',calTotalRooms);
})

// inputs and selectors 
phoneNum.addEventListener('input', updateOutputAd);
date.addEventListener('change', updateOutputAd);
nationalityAd.addEventListener('change', updateOutputAd);
adultsInAd.addEventListener('input', updateOutputAd);
kidsAd.addEventListener('input', updateOutputAd);
guidekid.addEventListener('change', updateOutputAd);
guideAdult.addEventListener('change', updateOutputAd);

 window.addEventListener("load",load);

//add event listner
addtofavouriteBtn.addEventListener('click',addToFavourite);
favouritespopupBtn.addEventListener('click',closeFavPopUp);


// function for total room calculation input
function calTotalRooms() {

    var numsingle =parseInt(document.getElementById("single").value) ||0 ;
    var numdouble = parseInt(document.getElementById("double").value) ||0;
    var numtriple = parseInt( document.getElementById("triple").value)||0;

    var totalrooms = numsingle + numdouble + numtriple;
    totalNumberofrooms.value = totalrooms;
}

//Function for init
function init(){
    totalcost = 0;
    localStorage.clear();
 }

// room booking real time uptaing table with calculations
function updateOutput(){
        
        totalcost = (singleroomcost*numsingle.value) + 
                    (tripleroomcost*numtriple.value) +
                    (doubleroomcost*numdouble.value)+
                    (extrabedscost*extrabeds.value) + 
                    (kidscost*numkids.value);

        if(promocode.value === '123'){
            totalcost *= 0.95; 
        }
             // Real time updating output with total cost calculation (table fomat)
                    currentbooking.innerHTML = `<table>
                                                    <tr>
                                                        <th>Options</th>
                                                        <th>Booking Details</th>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Check In Date</td>
                                                        <td id="result">${checkIn.value}</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Check Out Date</td>
                                                        <td id="result">${checkOut.value}</td>
                                                    </tr>
                                                    <tr>    
                                                        <td id="opt"> Number of Adult(s)</td>
                                                        <td id="result">${numadults.value}</td>    
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Number of Kid(s) above 5yrs (Meals)</td>
                                                        <td id="result">${numkids.value}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Kid(s) cost</td>
                                                        <td id="result"><b>LKR ${kidscost*numkids.value}<b></td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Number of Single Room(s)</td>
                                                        <td id="result">${numsingle.value}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Single Room(s) cost</td>
                                                        <td id="result"><b>LKR ${singleroomcost*numsingle.value}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Number of Double Room(s)</td>
                                                        <td id="result">${numdouble.value}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Double Room(s) Cost</td>
                                                        <td id="result"><b>LKR ${doubleroomcost*numdouble.value}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Number of Triple Room(s)</td>
                                                        <td id="result">${numtriple.value}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Triple Room(s) cost</td>
                                                        <td id="result"><b>LKR${tripleroomcost*numtriple.value}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Number of Extra Bed(s)</td>
                                                        <td id="result">${extrabeds.value}</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Extra Bed(s) cost</td>
                                                        <td id="result"><b>LKR${extrabedscost*extrabeds.value}</b></td>
                                                     </tr>
                                                    <tr>
                                                        <td id="extraReq" colspan="2" >Extra Requirements</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Need WiFi?</td>
                                                        <td id="result">${checkwiFi.checked ? 'Yes' : 'No'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Need Pool view?</td>
                                                        <td id="result">${checkpoolview.checked ? 'Yes' : 'No'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Need Garden View?</td>
                                                        <td id="result">${checkgardenview.checked ? 'Yes' : 'No'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="opt"> Discount</td>
                                                        <td id="result">${promocode.value === '123' ? '5%' : 'No any discount'}</td>
                                                    </tr>                                                   
                                                    <tr>
                                                        <td id="cost">Total Booking Cost</th>
                                                        <td id="costInt" >${totalcost.toFixed(2)}</th>
                                                    </tr>
                                                </table>`;
                                                outputfield.style.display ='flex';
    }
    
//Function for Book Now button
function diplayOverallbooking(event){
    if(roombookingform.checkValidity()){
        event.preventDefault();
        console.log("overall booking cost");

        totalcost = (singleroomcost*numsingle.value) + (tripleroomcost*numtriple.value) + (doubleroomcost*numdouble.value) +
                        (extrabedscost*extrabeds.value) + (kidscost*numkids.value);

        if(promocode.value === '123'){
            totalcost *= 0.95; 
        }
        // to save room booking data to a local storage
        var formData ={
            nationality: document.getElementById("nationality").value,
            numofadults:document.getElementById("numofadults").value,
            numofkids:document.getElementById("numofkids").value,
            beds:document.getElementById("beds").value,
            single:document.getElementById("single").value,
            double: document.getElementById("double").value,
            triple: document.getElementById("triple").value,
            numofrooms:document.getElementById("numofrooms").value,
            extrareq: document.querySelectorAll('input[name="extrareq"]:checked').length>0
        };

        //save to local storage
        localStorage.setItem('RoomBookingdata',JSON.stringify(formData));

        var RoomBookingdata = localStorage.getItem('RoomBookingdata');

        if (RoomBookingdata) {
            var parseInfo = JSON.parse(RoomBookingdata);
            var numofrooms = parseInfo.numofrooms;

            if(numofrooms && parseInt(numofrooms)>3){

                loyaltyPoints = parseInt(numofrooms )*loyaltypointsperroom;
                localStorage.setItem('loyaltyPoints',loyaltyPoints);
            }           
        }

             // Final output with total cost calculation (table fomat)
            overallbooking.innerHTML =`<table>
                                            <tr>
                                                <th>Options</th>
                                                <th>Booking Details</th>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Check In Date</td>
                                                <td id="result">${checkIn.value}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Check Out Date</td>
                                                <td id="result">${checkOut.value}</td>
                                            </tr>
                                            <tr>    
                                                <td id="opt"> Nationality</td>
                                                <td id="result">${nationalityoption.value}</td>    
                                            </tr>
                                            <tr>    
                                                <td id="opt"> Number of Adult(s)</td>
                                                <td id="result">${numadults.value}</td>    
                                            </tr>
                                            <tr>
                                                <td id="opt"> Number of Kid(s)</td>
                                                <td id="result">${numkids.value}</td>   
                                            </tr>
                                            <tr>
                                                <td id="opt"> Kid(s) cost</td>
                                                <td id="result"><b>LKR ${kidscost*numkids.value}</b></td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Number of Single Room(s)</td>
                                                <td id="result">${numsingle.value}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Single Room(s) cost</td>
                                                <td id="result"><b>LKR ${singleroomcost*numsingle.value}</b></td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Number of Double Room(s)</td>
                                                <td id="result">${numdouble.value}</td>                                              
                                            </tr>
                                            <tr>
                                                <td id="opt"> Double Room(s) Cost</td>
                                                <td id="result"><b>LKR ${doubleroomcost*numdouble.value}</b></td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Number of Triple Room(s)</td>
                                                <td id="result">${numtriple.value}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Triple Room(s) cost</td>
                                                <td id="result"><b>LKR ${tripleroomcost*numtriple.value}</b></td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Number of Extra Bed(s)</td>
                                                <td id="result">${extrabeds.value}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Extra Bed(s) cost</td>
                                                <td id="result"><b>LKR ${extrabedscost*extrabeds.value}</b></td>
                                            </tr>
                                            <tr>
                                                <td id="extraReq" colspan="2" >Extra Requirements</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Need WiFi?</td>
                                                <td id="result">${checkwiFi.checked ? 'Yes' : 'No'}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Need Pool view?</td>
                                                <td id="result">${checkpoolview.checked ? 'Yes' : 'No'}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Need Garden View?</td>
                                                <td id="result">${checkgardenview.checked ? 'Yes' : 'No'}</td>
                                            </tr>
                                            <tr>
                                                <td id="opt"> Discount</td>
                                                <td id="result">${promocode.value === '123' ? '5%' : 'No any discount'}</td>
                                            </tr>
                                            <tr>
                                                <td id="cost"> Total Booking Cost</th>
                                                <td id="costInt" >${totalcost.toFixed(2)}</th>
                                            </tr>
                                        </table>`;

                                        //reset form
                                        currentbooking.innerHTML ="";
                                        roombookingform.reset();
                                        overallbookingsection.style.display = 'flex';
                                        //Book now button clicked page scroll to the output section
                                        overallbookingsection.scrollIntoView({ behavior: 'smooth' });
                                                                   
    }else{
        alert("Please fill out all the fields completely"); //Every input should be filled
    }
} 


function load(){
    adventureTotalcost = 0;
}

//function for adventure real time booking calculation
function updateOutputAd(){

    numhrs = parseInt(hours.value) || 1;
    numadults_ad = parseInt(adultsInAd.value) || 0;
    numkids_kd = parseInt(kidsAd.value) || 0;
    
    if (nationalityAd.value === "Local"){
        adventureTotalcost = (numadults_ad*localAdultcost + numkids_kd*localKidcost )* numhrs +
                             (guidekid.checked ? kidGuidecost : 0)*numhrs + (guideAdult.checked ? adultGuidecost : 0)*numhrs;
    }else if(nationalityAd.value ==="Foreign"){
        adventureTotalcost = (numadults_ad*foreignAdultcost + numkids_kd*foreignKidcost )* numhrs +
                            (guidekid.checked ? kidGuidecost : 0)* numhrs+(guideAdult.checked ? adultGuidecost : 0)*numhrs;
    }

    //for local storage

    var formData = {

        nationalityAd: document.getElementById('nationalityAd').value,
        numofadultsadventure:document.getElementById('numofadultsadventure').value,
        numofkidsadventure:document.getElementById('numofkidsadventure').value,
        time : document.getElementById('time').value,
        foradults:document.getElementById('foradults').checked,
        forkids: document.getElementById('forkids').checked
    };

    localStorage.setItem('AdventureBookingdata',JSON.stringify(formData));

//Real time calculation of adventure current booking
    adventureOutput.innerHTML= `<table>
                                    <tr>
                                        <th>Options</th>
                                        <th>Booking Details</th>
                                    </tr>
                                    <tr>
                                        <td id="opt">Date</td>
                                        <td id="result">${date.value}</td>
                                    </tr>
                                    <tr>
                                        <td id="opt">Nationality</td>
                                        <td id="result">${nationalityAd.value}</td>
                                    </tr>
                                    <tr>    
                                        <td id="opt">Number of Adult(s)</td>
                                        <td id="result">${adultsInAd.value}</td>    
                                    </tr>
                                    <tr>    
                                        <td id="opt">Number of kid(s)</td>
                                        <td id="result">${kidsAd.value}</td>   
                                    </tr>
                                    <tr>
                                        <td id="opt">Hour(s)</td>
                                        <td id="result">${hours.value}</td>
                                    </tr>
                                    <tr>
                                        <td id="opt">Need adult guide?</td>
                                        <td id="result">${guideAdult.checked ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td id="opt">Need kid guide?</td>
                                        <td id="result">${guidekid.checked ? 'Yes' : 'No'}</td>
                                    </tr>    
                                    <tr>
                                        <td id="cost">Total Booking Cost</th>
                                        <td id="costInt">${adventureTotalcost.toFixed(2)}</th>    
                                    </tr>
                                <table>`;
                                adventureRealtimecal.style.display ='flex';
}



function openPopup(event) {
    if(adventureform.checkValidity()){
        event.preventDefault();
        console.log("Adventure Pop Up");

        numhrs = parseInt(hours.value) || 1;
        numadults_ad = parseInt(adultsInAd.value) || 1;
        numkids_kd = parseInt(kidsAd.value) || 0;

        popupcontent.innerHTML = `${nameAd.value} Your Diving Adventure is successfully booked <br>
                                Booking Summary as follows`;
//pop up message booking details
        popupsummary.innerHTML = `Date :                   \t\t\t${date.value}<br>
                                 Nationality :             \t\t\t ${nationalityAd.value}<br>
                                 Number of Adult(s) :      \t\t\t${numadults_ad}<br>
                                 Number of Kid(s) :        \t\t\t${numkids_kd}<br>
                                 Adult Guide :             \t\t\t ${guideAdult.checked ? 'Needed' : 'Not needed'}<br>
                                 Kid Guide :               \t\t\t ${guidekid.checked ? 'Needed' : 'Not needed'}<br>
                                 Hour(s) :                 ${hours.value} hrs<br>
                                 <hr>
                                 <b>Total Adventure Cost : \t\tLKR ${adventureTotalcost.toFixed(2)}</b>
                                 <hr>
                                  `;
                                  adventureOutput.innerHTML = ""; //current booking reset
                                  adventureform.reset();//form reset  

        document.body.style.pointerEvents = 'none';//pointer events deactivate untill closing the pop up massage
        popup.classList.add("open-popupContainer");// add pop pop up container css
        popup.style.pointerEvents = 'auto'; //pointer events activate in pop up for close button
       
    }else {
        alert("Please fill out all the fields completely");
    }
}
function closePopup() {
    popup.classList.remove("open-popupContainer");//pop up massage closing
    document.body.style.pointerEvents = 'auto'; //pointer events activate
}

//Favourites
function addToFavourite() {

        var RoomBookingdata = localStorage.getItem('RoomBookingdata');
        var AdventureBookingdata = localStorage.getItem('AdventureBookingdata');

    if (!RoomBookingdata && !AdventureBookingdata){
        
        alert('No booking data available. Please check and complete the booking first');
        return;

    }else{
        console.log('Room Booking Data: ' ,RoomBookingdata);
        console.log('Adventure Booking Data: ',AdventureBookingdata);

        localStorage.removeItem('RoomBookingdata');
        localStorage.removeItem('AdventureBookingdata');

        favPopup.classList.add("open-FavpopupContainer");
        document.body.style.pointerEvents = 'none'; //pointer events deactivate untill closing the pop up message
        favPopup.style.pointerEvents = 'auto'; //pointer events activate in pop up for close button
    }
}

function closeFavPopUp(){
    favPopup.classList.remove("open-FavpopupContainer");
    document.body.style.pointerEvents = 'auto';
}

// function for loyalty points button
function checkLoyalty() {
   loyaltyPoints = localStorage.getItem('loyaltyPoints');

   if (loyaltyPoints !== null && loyaltyPoints !== undefined){
    alert('Your Loyalty Points: '+loyaltyPoints);

   }else{
    alert('No Loyalty Points Found');
   }
    
}