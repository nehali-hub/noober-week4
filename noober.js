async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()
  let passengerName
  let passengerPhone 
  let passengerNumberOfPassengers
  let passengerPickupAddressLine1
  let passengerPickupAddressLine2
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let levelOfService

  // writes the returned JSON to the console
  console.dir(json)
  let rides = json
  
  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < rides.length; i++) {
   let ride = rides[i]
      for (let j = 0; j < ride.length; j++){
      if (ride.length > 1){
        levelOfService = 'Noober Pool'
      } else if (ride[0].purpleRequested) {
        levelOfService = 'Noober Purple' 
      } else if (ride[0].numberOfPassengers > 3) {
          levelOfService = 'Noober XL'
      } else {
          levelOfService = 'Noober X'
        }
      }

      
        if(ride.length == 1){
          let outputElement = document.querySelector('.rides')
          outputElement.insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

      passenger1Name = ride[0].passengerDetails.first + [" "]+ ride[0].passengerDetails.last
      passenger1Phone = ride[0].passengerDetails.phoneNumber
      passenger1NumberOfPassengers = ride[0].numberOfPassengers
      passenger1PickupAddressLine1 = ride[0].pickupLocation.address
      passenger1PickupAddressLine2 = ride[0].pickupLocation.city + [","]+ ride[0].pickupLocation.state + ride[0].pickupLocation.zip
      passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
      passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + [","] + ride[0].dropoffLocation.state + ride[0].dropoffLocation.zip
      
      passenger2Name = ride[1].passengerDetails.first + [" "]+ ride[1].passengerDetails.last
      passenger2Phone = ride[1].passengerDetails.phoneNumber
      passenger2NumberOfPassengers = ride[1].numberOfPassengers
      passenger2PickupAddressLine1 = ride[1].pickupLocation.address
      passenger2PickupAddressLine2 = ride[1].pickupLocation.city + [","]+ ride[1].pickupLocation.state + ride[1].pickupLocation.zip
      passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
      passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + [","] + ride[1].dropoffLocation.state + ride[1].dropoffLocation.zip
      
      passenger3Name = ride[2].passengerDetails.first + [" "]+ ride[2].passengerDetails.last
      passenger3Phone = ride[2].passengerDetails.phoneNumber
      passenger3NumberOfPassengers = ride[2].numberOfPassengers
      passenger3PickupAddressLine1 = ride[2].pickupLocation.address
      passenger3PickupAddressLine2 = ride[2].pickupLocation.city + [","]+ ride[2].pickupLocation.state + ride[2].pickupLocation.zip
      passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
      passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + [","] + ride[2].dropoffLocation.state + ride[2].dropoffLocation.zip
      

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${Passenger1Name}</h2>
          <p class="font-bold text-gray-600">${passenger1Phone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passenger1NumberOfPassengers} passengers
          </span>
    </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
          <p>${passenger1PickupAddressLine1}</p>
          <p>${passenger1PickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passenger1DropoffAddressLine1}</p>
          <p>${passenger1DropoffAddressLine2}</p>
        </div>
      </div>
    </div>`)}

     else if(ride.length == 2) {
      let outputElement = document.querySelector('.rides')
      outputElement.insertAdjacentHTML('beforeend',
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${Passenger1Name}</h2>
          <p class="font-bold text-gray-600">${passenger1Phone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passenger1NumberOfPassengers} passengers
          </span>
    </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
          <p>${passenger1PickupAddressLine1}</p>
          <p>${passenger1PickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passenger1DropoffAddressLine1}</p>
          <p>${passenger1DropoffAddressLine2}</p>
        </div>
      </div>
    </div>
  

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${Passenger2Name}</h2>
          <p class="font-bold text-gray-600">${passenger2Phone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passenger2NumberOfPassengers} passengers
          </span>
    </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
          <p>${passenger2PickupAddressLine1}</p>
          <p>${passenger2PickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passenger2DropoffAddressLine1}</p>
          <p>${passenger2DropoffAddressLine2}</p>
        </div>
      </div>
    </div>`)}

   else if(ride.length == 3) {
    let outputElement = document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend',
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober X</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${Passenger1Name}</h2>
        <p class="font-bold text-gray-600">${passenger1Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${passenger1NumberOfPassengers} passengers
        </span>
  </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
        <p>${passenger1PickupAddressLine1}</p>
        <p>${passenger1PickupAddressLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${passenger1DropoffAddressLine1}</p>
        <p>${passenger1DropoffAddressLine2}</p>
      </div>
    </div>
  </div>


  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${Passenger2Name}</h2>
        <p class="font-bold text-gray-600">${passenger2Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${passenger2NumberOfPassengers} passengers
        </span>
  </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
        <p>${passenger2PickupAddressLine1}</p>
        <p>${passenger2PickupAddressLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${passenger2DropoffAddressLine1}</p>
        <p>${passenger2DropoffAddressLine2}</p>
      </div>
    </div>
  </div>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${Passenge32Name}</h2>
        <p class="font-bold text-gray-600">${passenger3Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${passenger3NumberOfPassengers} passengers
        </span>
  </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">{PICKUP}</div>
        <p>${passenger3PickupAddressLine1}</p>
        <p>${passenger3PickupAddressLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${passenger3DropoffAddressLine1}</p>
        <p>${passenger3DropoffAddressLine2}</p>
      </div>
    </div>
  </div>`)}
  console.log(levelOfService)
  }}
  
  
  


window.addEventListener('DOMContentLoaded', pageLoaded)