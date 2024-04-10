import { Vehicle } from "@models/vehicles.model";

export const mountVehicleToMercadoLivre = (vehicle: Vehicle) => {
    return {
        title: String(vehicle.title),
        description: String(vehicle.description),
        channels: ["marketplace"],
        pictures: [
            {
                source: String(vehicle.image1)
            },
            {
                source: String(vehicle.image2)
            },
        ],
        category_id: "MLB1744",
        price: String(vehicle.price),
        currency_id: "BRL",
        listing_type_id: "free",
        available_quantity: "1",
        location: {
            address_line: "Avenida Juruce, 436",
            zip_code: "04080011",
            city: { id: "BR-SP-56" }
        },
        attributes: [
            { id: "BRAND", value_name: String(vehicle.brand) },
            { id: "MODEL", value_name: String(vehicle.model) },
            { id: "VEHICLE_YEAR", value_name: String(vehicle.vehicleYear) },
            { id: "DOORS", value_name: String(vehicle.doorQuantity) },
            // Mandar junto o km
            { id: "KILOMETERS", value_name: String(vehicle.kilometers)  },
            { id: "FUEL_TYPE", value_name: String(vehicle.fuelType) },
            { id: "COLOR", value_name: String(vehicle.color) },
            { id: "STEERING", value_name: String(vehicle.steering) },
            
            // Inserir no dto de publicação
            { id: "CONTACT_SCHEDULE", value_name: "Me procurar a tarde" },

            { id: "TRANSMISSION", value_name: String(vehicle.transmission) },
            { id: "TRACTION_CONTROL", value_name: String(vehicle.tractionControl) },
            { id: "TRIM", value_name: String(vehicle.trim) },
            { id: "VEHICLE_BODY_TYPE", value_name: String(vehicle.vehicleBodyType) },
            // mandar com mm
            { id: "HEIGHT", value_name: String(vehicle.height) },
            { id: "LENGTH", value_name: String(vehicle.length) },
            { id: "WIDTH", value_name: String(vehicle.width) },
            { id: "DISTANCE_BETWEEN_AXES", value_name: String(vehicle.distanceBetweenAxes) },
            // mandar com L
            { id: "FUEL_CAPACITY", value_name: String(vehicle.fuelCapacity) },
            { id: "VALVES_PER_CYLINDER", value_name: String(vehicle.valvesPerCylinder) },
            { id: "GEAR_NUMBER", value_name: String(vehicle.gearNumber) },

            // Sim ou Não a partir daqui
            { id: "ARMORED", value_name: String(vehicle.armored) },
            { id: "HAS_ABS_BRAKES", value_name: String(vehicle.hasAbsBrakes) },
            { id: "HAS_AIR_CONDITIONING", value_name: String(vehicle.hasAirConditioning) },
            { id: "HAS_ALARM", value_name: String(vehicle.hasAlarm) },
            { id: "HAS_ALLOY_WHEELS", value_name: String(vehicle.hasAlloyWheels) },
            { id: "HAS_AMFM_RADIO", value_name: String(vehicle.hasAmfmRadio) },
            { id: "HAS_AUXILIARY_PORT", value_name: String(vehicle.hasAuxiliaryPort) },
            { id: "ITEM_CONDITION", value_name: String(vehicle.itemCondition) },
            { id: "LICENSE_PLATE", value_name: String(vehicle.licensePlate) },
            { id: "PASSENGER_CAPACITY", value_name: String(vehicle.passengerCapacity) },
            { id: "SINGLE_OWNER", value_name: String(vehicle.singleOwner) },
            { id: "HAS_WINDSCREEN_WIPER", value_name: String(vehicle.hasWindscreenWiper) },
            { id: "HAS_USB", value_name: String(vehicle.hasUsb) },
            { id: "HAS_STEERING_WHEEL_CONTROL", value_name: String(vehicle.hasSteeringWheelControl) },
            { id: "HAS_POWER_DOOR_LOCKS", value_name: String(vehicle.hasPowerDoorLocks) },
            { id: "HAS_POWER_WINDOWS", value_name: String(vehicle.hasPowerWindows) },
            { id: "HAS_RAIN_SENSOR", value_name: String(vehicle.hasRainSensor) },
            { id: "HAS_HEIGHT_ADJUSTABLE_DRIVER_SEAT", value_name: String(vehicle.hasHeightAdjustableDriverSeat) },
            { id: "HAS_REAR_FOGLIGHTS", value_name: String(vehicle.hasRearFoglights) },
            { id: "HAS_SLIDING_ROOF", value_name: String(vehicle.hasSlidingRoof) },
            { id: "HAS_LEATHER_UPHOLSTERY", value_name: String(vehicle.hasLeatherUpholstery) },
            { id: "HAS_LIGHT_ON_REMINDER", value_name: String(vehicle.hasLightOnReminder) },
            { id: "HAS_MP3_PLAYER", value_name: String(vehicle.hasMp3Player) },
            { id: "HAS_ONBOARD_COMPUTER", value_name: String(vehicle.hasOnboardComputer) },
            { id: "HAS_PARKING_SENSOR", value_name: String(vehicle.hasParkingSensor) },
            { id: "HAS_PASSENGER_AIRBAG", value_name: String(vehicle.hasPassengerAirbag) },
            { id: "HAS_CURTAIN_AIRBAG", value_name: String(vehicle.hasCurtainAirbag) },
            { id: "HAS_FOG_LIGHT", value_name: String(vehicle.hasFogLight) },
            { id: "HAS_REAR_FOLDING_SEAT", value_name: String(vehicle.hasRearFoldingSeat) },
            { id: "HAS_ELECTRIC_MIRRORS", value_name: String(vehicle.hasElectricMirrors) },
            { id: "HAS_AUTOPILOT", value_name: String(vehicle.hasAutopilot) }
        ]
    };
}
