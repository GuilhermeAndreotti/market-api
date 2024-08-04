import { Vehicle } from "@models/vehicles.model";

export const mountVehicleToMercadoLivreToEdit = (vehicle: Vehicle) => {
    return {
        title: String(vehicle.title),
        pictures: [
            {
                source: String(vehicle.image1)
            },
            {
                source: String(vehicle.image2)
            },
            {
                source: String(vehicle.image3 ?? undefined)
            },
            {
                source: String(vehicle.image4 ?? undefined)
            },       
        ],
        price: String(vehicle.price),
        // location: {
        //     address_line: "Avenida Juruce, 436",
        //     zip_code: "04080011",
        //     city: { id: "BR-SP-56" }
        // },
        attributes: [
            { id: "BRAND", value_name: String(vehicle.brand) },
            { id: "MODEL", value_name: String(vehicle.model) },
            { id: "VEHICLE_YEAR", value_name: String(vehicle.vehicleYear) },
            { id: "DOORS", value_name: String(vehicle.doorQuantity) },
            // Mandar junto o km
            { id: "KILOMETERS", value_name: String(vehicle.kilometers) + ' km'  },
            { id: "FUEL_TYPE", value_name: String(vehicle.fuelType)},
            { id: "COLOR", value_name: String(vehicle.color) },
            { id: "STEERING", value_name: String(vehicle.steering) },
            { id: "CONTACT_SCHEDULE", value_name: vehicle.contactSchedule },
            { id: "TRANSMISSION", value_name: String(vehicle.transmission) },
            { id: "TRACTION_CONTROL", value_name: String(vehicle.tractionControl) },
            { id: "TRIM", value_name: String(vehicle.trim) },
            { id: "VEHICLE_BODY_TYPE", value_name: String(vehicle.vehicleBodyType) },
            // mandar com mm
            { id: "HEIGHT", value_name: String(vehicle.height) + ' mm' },
            { id: "LENGTH", value_name: String(vehicle.length) + ' mm' },
            { id: "WIDTH", value_name: String(vehicle.width) + ' mm' },
            { id: "DISTANCE_BETWEEN_AXES", value_name: String(vehicle.distanceBetweenAxes) + ' mm' },
            // mandar com L
            { id: "FUEL_CAPACITY", value_name: String(vehicle.fuelCapacity) + ' L' },
            { id: "VALVES_PER_CYLINDER", value_name: String(vehicle.valvesPerCylinder) },
            { id: "GEAR_NUMBER", value_name: String(vehicle.gearNumber) },

            // Sim ou Não a partir daqui
            { id: "ARMORED", value_name: Boolean(vehicle.armored) ? 'Sim' : 'Não' },
            { id: "HAS_ABS_BRAKES", value_name: Boolean(vehicle.hasAbsBrakes) ? 'Sim' : 'Não' },
            { id: "HAS_AIR_CONDITIONING", value_name: Boolean(vehicle.hasAirConditioning) ? 'Sim' : 'Não' },
            { id: "HAS_ALARM", value_name: Boolean(vehicle.hasAlarm) ? 'Sim' : 'Não' },
            { id: "HAS_ALLOY_WHEELS", value_name: Boolean(vehicle.hasAlloyWheels) ? 'Sim' : 'Não' },
            { id: "HAS_AMFM_RADIO", value_name: Boolean(vehicle.hasAmfmRadio) ? 'Sim' : 'Não' },
            { id: "HAS_AUXILIARY_PORT", value_name: Boolean(vehicle.hasAuxiliaryPort) ? 'Sim' : 'Não' },
            { id: "ITEM_CONDITION", value_name: vehicle.itemCondition },
            { id: "LICENSE_PLATE", value_name: vehicle.licensePlate },
            { id: "PASSENGER_CAPACITY", value_name: Number(vehicle.passengerCapacity) },
            { id: "SINGLE_OWNER", value_name: Boolean(vehicle.singleOwner) ? 'Sim' : 'Não' },
            { id: "HAS_WINDSCREEN_WIPER", value_name: Boolean(vehicle.hasWindscreenWiper) ? 'Sim' : 'Não' },
            { id: "HAS_USB", value_name: Boolean(vehicle.hasUsb) ? 'Sim' : 'Não' },
            { id: "HAS_STEERING_WHEEL_CONTROL", value_name: Boolean(vehicle.hasSteeringWheelControl) ? 'Sim' : 'Não' },
            { id: "HAS_POWER_DOOR_LOCKS", value_name: Boolean(vehicle.hasPowerDoorLocks) ? 'Sim' : 'Não' },
            { id: "HAS_POWER_WINDOWS", value_name: Boolean(vehicle.hasPowerWindows) ? 'Sim' : 'Não' },
            { id: "HAS_RAIN_SENSOR", value_name: Boolean(vehicle.hasRainSensor) ? 'Sim' : 'Não' },
            { id: "HAS_HEIGHT_ADJUSTABLE_DRIVER_SEAT", value_name: Boolean(vehicle.hasHeightAdjustableDriverSeat) ? 'Sim' : 'Não' },
            { id: "HAS_REAR_FOGLIGHTS", value_name: Boolean(vehicle.hasRearFoglights) ? 'Sim' : 'Não' },
            { id: "HAS_SLIDING_ROOF", value_name: Boolean(vehicle.hasSlidingRoof) ? 'Sim' : 'Não' },
            { id: "HAS_LEATHER_UPHOLSTERY", value_name: Boolean(vehicle.hasLeatherUpholstery) ? 'Sim' : 'Não' },
            { id: "HAS_LIGHT_ON_REMINDER", value_name: Boolean(vehicle.hasLightOnReminder) ? 'Sim' : 'Não' },
            { id: "HAS_MP3_PLAYER", value_name: Boolean(vehicle.hasMp3Player) ? 'Sim' : 'Não' },
            { id: "HAS_ONBOARD_COMPUTER", value_name: Boolean(vehicle.hasOnboardComputer) ? 'Sim' : 'Não' },
            { id: "HAS_PARKING_SENSOR", value_name: Boolean(vehicle.hasParkingSensor) ? 'Sim' : 'Não' },
            { id: "HAS_PASSENGER_AIRBAG", value_name: Boolean(vehicle.hasPassengerAirbag) ? 'Sim' : 'Não' },
            { id: "HAS_CURTAIN_AIRBAG", value_name: Boolean(vehicle.hasCurtainAirbag) ? 'Sim' : 'Não' },
            { id: "HAS_FOG_LIGHT", value_name: Boolean(vehicle.hasFogLight) ? 'Sim' : 'Não' },
            { id: "HAS_REAR_FOLDING_SEAT", value_name: Boolean(vehicle.hasRearFoldingSeat) ? 'Sim' : 'Não' },
            { id: "HAS_ELECTRIC_MIRRORS", value_name: Boolean(vehicle.hasElectricMirrors) ? 'Sim' : 'Não'},
            { id: "HAS_AUTOPILOT", value_name: Boolean(vehicle.hasAutopilot) ? 'Sim' : 'Não' }
        ]
    };
}
